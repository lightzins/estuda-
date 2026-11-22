const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const E=require('../study-engine.js');
const root=path.join(__dirname,'..');
const context=vm.createContext({});
for(const filename of ['catalog.js','content-humanas.js','content-linguagens.js','content-exatas.js']){
  vm.runInContext(fs.readFileSync(path.join(root,filename),'utf8'),context,{filename});
}
const bank=context.ESTUDA_CONTENT;
const catalog=context.ESTUDA_CATALOG;
const subjects=['portugues','producao','historia','ciencias','geografia','ingles','matematica'];
function wordCount(assessment){
  return [assessment.overview,...assessment.topics.flatMap(t=>[t.title,...t.paragraphs,t.example,t.pitfall])].join(' ').trim().split(/\s+/).length;
}
test('the catalog and study content cover the same seven subjects',()=>{
  assert.deepEqual(Object.keys(bank).sort(),subjects.slice().sort());
  assert.deepEqual(Array.from(catalog,s=>s.id).sort(),subjects.slice().sort());
});
for(const id of subjects)for(const av of ['av1','av2']){
  test(id+' '+av+': complete revision and exactly 20 varied questions',()=>{
    const assessment=bank[id].assessments[av];
    assert.ok(assessment.title);
    assert.ok(assessment.overview);
    assert.ok(assessment.topics.length>=4);
    assert.ok(wordCount(assessment)>=450,wordCount(assessment)+' words in '+id+' '+av);
    assessment.topics.forEach(topic=>{
      assert.ok(topic.paragraphs.length>=2,topic.title);
      assert.ok(topic.example.length>=30,topic.title);
      assert.ok(topic.pitfall.length>=20,topic.title);
    });
    assert.equal(assessment.questions.length,20);
    assert.equal(assessment.questions.filter(q=>q.type==='choice').length,16);
    assert.equal(assessment.questions.filter(q=>q.type==='short').length,2);
    assert.equal(assessment.questions.filter(q=>q.type==='written').length,2);
    assert.equal(new Set(assessment.questions.map(q=>E.normalizeAnswer(q.prompt))).size,20,'Duplicate question');
    const positions=new Set();
    assessment.questions.forEach(q=>{
      assert.ok(q.prompt.length>=10,q.prompt);
      assert.ok(q.explanation.length>=20,q.prompt);
      assert.ok(q.topic,q.prompt);
      if(q.type==='choice'){
        assert.equal(q.choices.length,4,q.prompt);
        assert.equal(new Set(q.choices).size,4,q.prompt);
        assert.ok(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<4,q.prompt);
        positions.add(q.correct);
      }else if(q.type==='short'){
        assert.ok(q.answers.length>0,q.prompt);
        q.answers.forEach(answer=>assert.ok(String(answer).trim()));
      }else{
        assert.ok(q.modelAnswer.length>=40,q.prompt);
        assert.ok(q.rubric.length>=3,q.prompt);
      }
    });
    assert.ok(positions.size>=3,'Answer positions must vary');
  });
}
test('there are 280 questions without mixing AV1 and AV2',()=>{
  const count=subjects.reduce((total,id)=>total+bank[id].assessments.av1.questions.length+bank[id].assessments.av2.questions.length,0);
  assert.equal(count,280);
});
test('grading correct answers and reviewed written responses gives 20 points',()=>{
  for(const id of subjects)for(const av of ['av1','av2']){
    const questions=bank[id].assessments[av].questions;
    const answers=Object.fromEntries(questions.map((q,i)=>[i,q.type==='choice'
      ?{choice:q.correct,submitted:true}
      :q.type==='short'?{value:q.answers[0],submitted:true}
      :{value:'Uma resposta escrita completa.',submitted:true,criteria:q.rubric.map(()=>true),selfReviewed:true}]));
    const result=E.summary(questions,answers);
    assert.equal(result.earned,20,id+' '+av);
    assert.equal(result.objectiveEarned,18);
    assert.equal(result.writtenReviewed,2);
  }
});
test('wrong choices and unsubmitted answers cannot earn points',()=>{
  const q=bank.historia.assessments.av1.questions.find(q=>q.type==='choice');
  assert.equal(E.grade(q,{choice:(q.correct+1)%4,submitted:true}).earned,0);
  assert.equal(E.grade(q,{choice:q.correct,submitted:false}).earned,0);
});
test('short answers compare whole answers, normalize accents, and do not use substring matching',()=>{
  const q={type:'short',answers:['50']};
  assert.equal(E.grade(q,{value:'150',submitted:true}).earned,0);
  assert.equal(E.grade(q,{value:'50,0',submitted:true}).earned,1);
  assert.equal(E.grade({type:'short',answers:['-4']},{value:'−4,0',submitted:true}).earned,1);
  assert.equal(E.normalizeAnswer('  AlvÉolos. '),'alveolos');
});
test('written evaluation requires explicit self-review instead of inventing an automatic grade',()=>{
  const q={type:'written',rubric:['A','B','C']};
  assert.equal(E.grade(q,{value:'texto',submitted:true,criteria:[true,true,true]}).corrected,false);
  assert.equal(E.grade(q,{value:'texto',submitted:true,criteria:[true,false,false],selfReviewed:true}).earned,1/3);
});
test('corrupted storage and invalid choices do not break the study page',()=>{
  const questions=bank.geografia.assessments.av1.questions;
  assert.deepEqual(E.readState({getItem:()=>'{broken'},'test',questions),E.newState());
  const state=E.readState({getItem:()=>JSON.stringify({version:1,answers:{0:{choice:99}}})},'test',questions);
  assert.deepEqual(state.answers,{});
});
test('saved state is independent for AV1 and AV2',()=>{
  const values={'av1':JSON.stringify({version:1,mode:'train',reviewDone:true,answers:{0:{choice:0,submitted:true}}})};
  const storage={getItem:key=>values[key]??null};
  assert.equal(E.readState(storage,'av1',bank.portugues.assessments.av1.questions).reviewDone,true);
  assert.equal(E.readState(storage,'av2',bank.portugues.assessments.av2.questions).reviewDone,false);
});
test('geometry transformations return correct coordinates',()=>{
  assert.deepEqual(E.transform([[1,2]],'translate'),[[3,3]]);
  assert.deepEqual(E.transform([[1,2]],'reflect'),[[-1,2]]);
  assert.deepEqual(E.transform([[1,2]],'rotate'),[[-2,1]]);
});
test('all page script and stylesheet assets exist in the Vercel output directory',()=>{
  for(const filename of ['materias.html','materia.html','plataforma-completa.html']){
    const html=fs.readFileSync(path.join(root,filename),'utf8');
    for(const match of html.matchAll(/(?:src|href)="([^"#?]+\.(?:js|css))"/g)){
      if(!/^https?:/.test(match[1]))assert.ok(fs.existsSync(path.join(root,match[1])),filename+' -> '+match[1]);
    }
  }
});
