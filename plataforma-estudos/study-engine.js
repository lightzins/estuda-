(function () {
  'use strict';
  function normalizeAnswer(value) {
    return String(value ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .toLocaleLowerCase('pt-BR').replace(/[“”"']/g, '').replace(/−/g, '-').trim().replace(/[.!?]+$/, '').trim().replace(/\s+/g, ' ')
      .replace(/^([+-]?\d+),(\d+)$/, '$1.$2').replace(/^([+-]?\d+)\.0+$/, '$1');
  }
  function grade(question, record = {}) {
    const hasValue = question.type === 'choice' ? Number.isInteger(record.choice) && record.choice >= 0 && record.choice < question.choices.length : Boolean(String(record.value || '').trim());
    if (!hasValue || !record.submitted) return {answered:hasValue, corrected:false, earned:0, manual:question.type==='written'};
    if (question.type === 'written') {
      const valid = record.selfReviewed === true && Array.isArray(record.criteria) && record.criteria.length === question.rubric.length;
      return {answered:true, corrected:valid, earned:valid ? record.criteria.filter(x=>x===true).length/question.rubric.length : 0, manual:true};
    }
    const correct = question.type === 'choice' ? record.choice === question.correct : question.answers.some(answer=>normalizeAnswer(answer)===normalizeAnswer(record.value));
    return {answered:true, corrected:true, earned:correct ? 1 : 0, manual:false};
  }
  function summary(questions, answers = {}) {
    const grades=questions.map((q,i)=>grade(q,answers[i]));
    return {
      total:questions.length,
      answered:grades.filter(x=>x.answered).length,
      corrected:grades.filter(x=>x.corrected).length,
      earned:grades.reduce((sum,g)=>sum+g.earned,0),
      objectiveTotal:grades.filter(x=>!x.manual).length,
      objectiveEarned:grades.filter(x=>!x.manual).reduce((sum,g)=>sum+g.earned,0),
      writtenTotal:grades.filter(x=>x.manual).length,
      writtenReviewed:grades.filter(x=>x.manual && x.corrected).length,
      writtenEarned:grades.filter(x=>x.manual).reduce((sum,g)=>sum+g.earned,0)
    };
  }
  function newState() { return {version:1, mode:'train', reviewDone:false, finalized:false, answers:{}}; }
  function readState(storage,key,questions) {
    const empty=newState();
    try {
      const saved=JSON.parse(storage.getItem(key)||'null');
      if (!saved || saved.version!==1 || typeof saved.answers!=='object' || Array.isArray(saved.answers)) return empty;
      empty.reviewDone=saved.reviewDone===true;
      empty.mode=saved.mode==='exam'?'exam':'train';
      empty.finalized=saved.finalized===true;
      questions.forEach((q,i)=>{
        const r=saved.answers[i];
        if (!r || typeof r!=='object') return;
        const record={submitted:r.submitted===true};
        if(q.type==='choice') {
          if(!Number.isInteger(r.choice) || r.choice<0 || r.choice>=q.choices.length) return;
          record.choice=r.choice;
        } else {
          if(typeof r.value!=='string') return;
          record.value=r.value.slice(0,12000);
        }
        if(q.type==='written') {
          record.criteria=q.rubric.map((_,n)=>Array.isArray(r.criteria) && r.criteria[n]===true);
          record.selfReviewed=r.selfReviewed===true;
        }
        empty.answers[i]=record;
      });
      return empty;
    } catch { return empty; }
  }
  function transform(points,mode) {
    return points.map(([x,y])=>mode==='reflect'?[-x,y]:mode==='rotate'?[-y,x]:[x+2,y+1]);
  }
  globalThis.ESTUDA_ENGINE={normalizeAnswer,grade,summary,newState,readState,transform};
  if(typeof module!=='undefined' && module.exports) module.exports=globalThis.ESTUDA_ENGINE;
})();
