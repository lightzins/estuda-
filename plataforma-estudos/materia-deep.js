(function(){
  'use strict';
  const E=globalThis.ESTUDA_ENGINE, bank=globalThis.ESTUDA_CONTENT||{}, catalog=globalThis.ESTUDA_CATALOG||[];
  const $=selector=>document.querySelector(selector);
  const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const params=new URLSearchParams(location.search);
  const subjectId=Object.hasOwn(bank,params.get('materia'))?params.get('materia'):'portugues';
  const subject=bank[subjectId], meta=catalog.find(s=>s.id===subjectId);
  if(!subject || !meta){
    $('#lessons').innerHTML='<div class="alert">Não foi possível carregar esta matéria. Atualize a página ou volte às matérias.</div>';
    return;
  }
  let storage=null;
  try{storage=localStorage;}catch{}
  let canSave=Boolean(storage);
  let activeAv=params.get('av')==='av2'?'av2':'av1';
  let activeTab=['review','questions','result'].includes(params.get('tab'))?params.get('tab'):'review';
  let state, assessment;
  const key=()=> 'estuda-v4-'+subjectId+'-'+activeAv;
  const fmt=number=>new Intl.NumberFormat('pt-BR',{maximumFractionDigits:1}).format(number);
  document.title='Estuda+ | '+subject.name;
  $('#title').textContent=subject.name;
  $('#breadcrumb-subject').textContent=subject.name;
  $('#intro').textContent=subject.intro;
  $('#av1date').textContent=meta.av1.date+' · 20 questões';
  $('#av2date').textContent=meta.av2.date+' · 20 questões';
  $('#writing-link').hidden=subjectId!=='producao';

  function persist(){
    try{if(!storage)throw Error('storage unavailable');storage.setItem(key(),JSON.stringify(state));}
    catch{canSave=false;}
    $('#saved-status').textContent=canSave?'Salvo neste navegador':'Progresso disponível nesta sessão';
  }
  function setAddress(){
    const next=new URL(location.href);
    next.searchParams.set('materia',subjectId);next.searchParams.set('av',activeAv);next.searchParams.set('tab',activeTab);
    history.replaceState(null,'',next);
  }
  function openTab(tab){
    activeTab=tab;
    document.querySelectorAll('[data-tab]').forEach(button=>{
      const selected=button.dataset.tab===tab;button.classList.toggle('active',selected);button.setAttribute('aria-current',selected?'page':'false');
    });
    document.querySelectorAll('.tab-panel').forEach(panel=>panel.classList.toggle('active',panel.id==='panel-'+tab));
    if(tab==='result')renderResult();
    setAddress();
  }
  function loadAssessment(term){
    activeAv=term;assessment=subject.assessments[term];
    state=E.readState(storage,key(),assessment.questions);
    document.querySelectorAll('[data-av]').forEach(button=>{
      const selected=button.dataset.av===term;button.classList.toggle('active',selected);button.setAttribute('aria-pressed',String(selected));
    });
    renderReview();renderQuestions();updateMetrics();openTab(activeTab);
  }
  function renderReview(){
    const topics=assessment.topics;
    $('#lessons').innerHTML='<section class="assessment-overview"><p class="eyebrow">'+activeAv.toUpperCase()+' · Revisão explicada</p><h2>'+esc(assessment.title)+'</h2><p class="muted">'+esc(assessment.overview)+'</p><p class="small muted"><strong>Avaliação da escola:</strong> '+esc(meta[activeAv].format)+'.</p><div class="hero-footer"><span class="tag">'+topics.length+' tópicos explicados</span><span class="tag">20 questões de prática</span></div></section><nav class="contents-menu" aria-label="Conteúdos desta revisão"><strong>Nesta revisão</strong>'+topics.map((topic,i)=>'<a href="#topic-'+i+'">'+esc(topic.title)+'</a>').join('')+'</nav>'+topics.map((topic,i)=>'<article class="topic" id="topic-'+i+'"><h3>'+esc(topic.title)+'</h3>'+topic.paragraphs.map(p=>'<p>'+esc(p)+'</p>').join('')+'<div class="example"><strong>Veja um exemplo</strong>'+esc(topic.example)+'</div><div class="pitfall"><strong>Para não confundir</strong>'+esc(topic.pitfall)+'</div></article>').join('')+(subjectId==='matematica'?mathExample():'')+'<div class="topic-footer"><button class="button-primary" type="button" id="start-practice">Praticar as 20 questões</button><button type="button" class="button" id="mark-review">'+(state.reviewDone?'Revisão marcada como concluída':'Marcar revisão concluída')+'</button></div><aside class="complement"><p class="eyebrow">Depois de revisar</p><h3>Um complemento em vídeo</h3><p class="small muted">Se quiser outra explicação, use esta busca pelo tema no YouTube. Leia primeiro a revisão e depois use a aula para reforçar as dúvidas.</p><a href="https://www.youtube.com/results?search_query='+encodeURIComponent(assessment.videoQuery)+'" target="_blank" rel="noopener">Buscar aulas sobre este assunto no YouTube</a></aside>';
    $('#start-practice').onclick=()=>{openTab('questions');$('.content-tabs').scrollIntoView({block:'start'});};
    $('#mark-review').onclick=()=>{state.reviewDone=!state.reviewDone;persist();$('#mark-review').textContent=state.reviewDone?'Revisão marcada como concluída':'Marcar revisão concluída';};
    if(subjectId==='matematica' && activeAv==='av1'){
      $('#transform-mode').onchange=drawGeometry;drawGeometry();
    }
  }
  function mathExample(){
    if(activeAv==='av2')return '<figure class="diagram"><h3>Uma pesquisa com 20 estudantes</h3><p>10 escolheram futebol, 6 escolheram vôlei e 4 escolheram basquete. Cada setor representa sua parte do total.</p><div class="pie" role="img" aria-label="Gráfico de setores: futebol 50%, vôlei 30%, basquete 20%."></div><figcaption>Futebol: 10 ÷ 20 = 50% (180°). Vôlei: 6 ÷ 20 = 30% (108°). Basquete: 4 ÷ 20 = 20% (72°). As porcentagens somam 100% e os ângulos, 360°.</figcaption></figure>';
    return '<figure class="diagram"><h3>Experimente uma transformação</h3><p>O quadrado tem os vértices A(1,1), B(3,1), C(3,3) e D(1,3). Compare a figura original com a figura tracejada.</p><div class="diagram-controls"><label for="transform-mode">Transformação</label><select id="transform-mode" class="select"><option value="translate">Translação: +2 em x e +1 em y</option><option value="reflect">Reflexão no eixo y</option><option value="rotate">Rotação: 90° anti-horário</option></select></div><div id="geometry-plot"></div><figcaption id="geometry-caption"></figcaption><p class="coordinate-data" id="coordinates"></p></figure>';
  }
  function drawGeometry(){
    const points=[[1,1],[3,1],[3,3],[1,3]],mode=$('#transform-mode').value;
    const transformed=E.transform(points,mode);
    const xy=([x,y])=>[210+x*27,170-y*27];
    let grid='';
    for(let n=-5;n<=5;n++){
      grid+='<line x1="'+(210+n*27)+'" y1="20" x2="'+(210+n*27)+'" y2="320" stroke="#e6ece9"/><line x1="60" y1="'+(170+n*27)+'" x2="360" y2="'+(170+n*27)+'" stroke="#e6ece9"/>';
      if(n)grid+='<text x="'+(210+n*27)+'" y="186" text-anchor="middle" font-size="11" fill="#586c6c">'+n+'</text><text x="197" y="'+(174-n*27)+'" text-anchor="end" font-size="11" fill="#586c6c">'+n+'</text>';
    }
    const polygon=list=>list.map(p=>xy(p).join(',')).join(' ');
    $('#geometry-plot').innerHTML='<svg viewBox="0 0 420 340" role="img" aria-label="Plano cartesiano com quadrado original e sua transformação">'+grid+'<path d="M50 170H375M210 10V330" stroke="#738780" stroke-width="1.5"/><text x="380" y="165" fill="#243b3c">x</text><text x="218" y="16" fill="#243b3c">y</text><polygon points="'+polygon(points)+'" fill="#7cae9a" fill-opacity=".2" stroke="#2f675c" stroke-width="2"/><polygon points="'+polygon(transformed)+'" fill="#8caec6" fill-opacity=".2" stroke="#467391" stroke-width="2" stroke-dasharray="6 4"/>'+points.map((p,i)=>'<text x="'+(xy(p)[0]+6)+'" y="'+(xy(p)[1]-7)+'" font-size="12" fill="#2f675c">'+('ABCD'[i])+'</text>').join('')+'</svg>';
    $('#coordinates').textContent=transformed.map((p,i)=>'ABCD'[i]+'′('+p.join(', ')+')').join(' · ');
    $('#geometry-caption').textContent=mode==='reflect'?'Na reflexão no eixo y, (x,y) vira (−x,y). A figura fica espelhada.':mode==='rotate'?'Na rotação de 90° anti-horário em torno da origem, (x,y) vira (−y,x).':'Na translação, somamos os mesmos deslocamentos a todos os vértices: (x,y) vira (x+2,y+1).';
  }
  function renderQuestions(){
    $('#exam-label').textContent=activeAv.toUpperCase()+' · '+subject.name;
    $('#exam-description').textContent='16 questões de alternativas, 2 respostas curtas e 2 escritas. As escritas têm modelo e rubrica de autoavaliação.';
    $('#exam-mode').value=state.mode;
    $('#submit-exam').hidden=state.mode!=='exam';
    $('#quiz').innerHTML=assessment.questions.map((question,i)=>{
      const record=state.answers[i]||{}, show=record.submitted && (state.mode==='train'||state.finalized);
      let control;
      if(question.type==='choice'){
        control='<fieldset class="choices" aria-labelledby="prompt-'+i+'">'+question.choices.map((answer,n)=>{
          const cls=show?(n===question.correct?' correct':n===record.choice?' incorrect':''):(n===record.choice?' selected':'');
          return '<label class="choice'+cls+'"><input type="radio" name="q-'+i+'" data-choice="'+i+'" value="'+n+'" '+(record.choice===n?'checked ':'')+(show?'disabled':'')+'><span>'+String.fromCharCode(65+n)+'. '+esc(answer)+'</span></label>';
        }).join('')+'</fieldset>';
      }else{
        const fieldId='answer-'+i;
        control='<label class="small muted" for="'+fieldId+'">'+(question.type==='written'?'Sua resposta escrita':'Sua resposta curta')+'</label>'+(question.type==='written'?'<textarea id="'+fieldId+'" data-answer="'+i+'" class="answer-field" maxlength="12000" rows="5" placeholder="Explique com suas palavras.">'+esc(record.value||'')+'</textarea>':'<input id="'+fieldId+'" data-answer="'+i+'" class="answer-field" type="text" maxlength="500" autocomplete="off" value="'+esc(record.value||'')+'" placeholder="Digite sua resposta.">');
      }
      return '<article class="question-card" id="question-'+i+'"><div class="question-meta"><span>Questão '+(i+1)+' de 20</span><span>'+esc(question.topic)+'</span><span>'+(question.type==='choice'?'Alternativas':question.type==='short'?'Resposta curta':'Escrita · autoavaliação')+'</span></div><p class="question-prompt" id="prompt-'+i+'">'+esc(question.prompt)+'</p>'+control+(state.mode==='train'?'<div class="question-actions"><button class="button" type="button" data-submit="'+i+'" '+(question.type==='choice'&&show?'disabled':'')+'>'+(question.type==='written'?'Comparar com o modelo':'Conferir resposta')+'</button></div>':'')+'<div class="feedback" id="feedback-'+i+'" '+(show?'':'hidden')+' tabindex="-1" role="status">'+(show?feedback(question,record,i):'')+'</div></article>';
    }).join('');
    document.querySelectorAll('[data-choice]').forEach(input=>input.onchange=()=>{
      const i=+input.dataset.choice;
      state.answers[i]={choice:+input.value,submitted:false};
      document.querySelectorAll('#question-'+i+' .choice').forEach(label=>label.classList.toggle('selected',label.querySelector('input').checked));
      persist();updateMetrics();
    });
    document.querySelectorAll('[data-answer]').forEach(input=>input.addEventListener('input',()=>{
      const i=+input.dataset.answer;
      state.answers[i]={value:input.value,submitted:false};
      $('#feedback-'+i).hidden=true;
      persist();updateMetrics();
    }));
    document.querySelectorAll('[data-submit]').forEach(button=>button.onclick=()=>submitOne(+button.dataset.submit));
    document.querySelectorAll('[data-criterion]').forEach(input=>input.onchange=()=>{
      const i=+input.dataset.criterion, record=state.answers[i], question=assessment.questions[i];
      if(!Array.isArray(record.criteria))record.criteria=question.rubric.map(()=>false);
      record.criteria[+input.dataset.index]=input.checked;record.selfReviewed=false;
      persist();updateMetrics();
    });
    document.querySelectorAll('[data-rubric]').forEach(button=>button.onclick=()=>{
      const i=+button.dataset.rubric,record=state.answers[i];
      if(!Array.isArray(record.criteria))record.criteria=assessment.questions[i].rubric.map(()=>false);
      record.selfReviewed=true;persist();updateMetrics();
      button.textContent='Autoavaliação registrada';
    });
    $('#exam-message').hidden=true;
    updateMetrics();
  }
  function feedback(question,record,i){
    if(question.type==='written')return '<h4>Compare sua resposta</h4><p class="small">Esta questão usa autoavaliação. Leia o modelo, marque apenas os critérios atendidos e registre sua revisão.</p><div class="model-answer">'+esc(question.modelAnswer)+'</div><p>'+esc(question.explanation)+'</p><div class="rubric">'+question.rubric.map((criterion,n)=>'<label><input type="checkbox" data-criterion="'+i+'" data-index="'+n+'" '+(record.criteria?.[n]?'checked':'')+'><span>'+esc(criterion)+'</span></label>').join('')+'</div><div class="question-actions"><button class="button" type="button" data-rubric="'+i+'">'+(record.selfReviewed?'Autoavaliação registrada':'Registrar autoavaliação')+'</button></div>';
    const g=E.grade(question,record),correct=g.earned===1;
    return '<h4>'+(correct?'Resposta correta':'Vamos revisar')+'</h4>'+(!correct?'<p><strong>Resposta esperada:</strong> '+esc(question.type==='choice'?question.choices[question.correct]:question.answers[0])+'</p>':'')+'<p>'+esc(question.explanation)+'</p>';
  }
  function submitOne(i){
    const question=assessment.questions[i],record=state.answers[i]||{};
    if(!E.grade(question,record).answered){
      $('#feedback-'+i).hidden=false;$('#feedback-'+i).textContent='Responda antes de conferir.';return;
    }
    record.submitted=true;state.answers[i]=record;persist();renderQuestions();
    $('#feedback-'+i).focus({preventScroll:true});
  }
  function updateMetrics(){
    const result=E.summary(assessment.questions,state.answers);
    $('#answered-count').textContent=result.answered+' de 20 respondidas';
    $('#side-label').textContent=activeAv.toUpperCase()+' · Seu treino';
    $('#side-progress').textContent=result.answered+' de 20 respondidas';
    $('#progress-fill').style.width=(result.answered/20*100)+'%';
    $('#saved-status').textContent=canSave?'Salvo neste navegador':'Progresso disponível nesta sessão';
    if(activeTab==='result')renderResult();
  }
  function renderResult(){
    const r=E.summary(assessment.questions,state.answers);
    $('#result-content').innerHTML='<section class="result-panel"><p class="eyebrow">'+activeAv.toUpperCase()+' · Seu acompanhamento</p><h2>O que você já aprendeu</h2><p class="muted">'+r.corrected+' de 20 questões corrigidas. '+(r.writtenReviewed<r.writtenTotal?'Compare as respostas escritas com os modelos para completar a autoavaliação.':'Use as explicações para revisar os assuntos em que teve dificuldade.')+'</p><div class="result-score">'+fmt(r.earned)+' <span class="muted">/ 20</span></div><p class="small muted">Pontuação de treino. Inclui autoavaliação das questões escritas e não representa a nota oficial da escola.</p><div class="result-list"><div class="result-row"><span>Alternativas e respostas curtas</span><strong>'+fmt(r.objectiveEarned)+' / '+r.objectiveTotal+'</strong></div><div class="result-row"><span>Escritas · autoavaliação</span><strong>'+fmt(r.writtenEarned)+' / '+r.writtenTotal+' ('+r.writtenReviewed+' revisadas)</strong></div><div class="result-row"><span>Revisão do conteúdo</span><strong>'+(state.reviewDone?'Marcada como concluída':'Ainda não marcada')+'</strong></div></div><div class="topic-footer"><button class="button-primary" type="button" id="back-questions">Continuar questões</button><button class="button" type="button" id="back-review">Rever explicação</button></div></section><section class="result-list" aria-label="Resultado por questão">'+assessment.questions.map((q,i)=>{
      const g=E.grade(q,state.answers[i]);
      const label=!g.answered?'Não respondida':!g.corrected?(q.type==='written'&&state.answers[i]?.submitted?'Falta autoavaliação':'A conferir'):g.earned===1?'Concluída':q.type==='written'?'Critérios: '+fmt(g.earned*100)+'%':'Revisar resposta';
      return '<div class="result-row"><span>Questão '+(i+1)+' · '+esc(q.topic)+'</span><span class="small">'+label+'</span></div>';
    }).join('')+'</section>';
    $('#back-questions').onclick=()=>openTab('questions');$('#back-review').onclick=()=>openTab('review');
  }
  document.querySelectorAll('[data-av]').forEach(button=>button.onclick=()=>loadAssessment(button.dataset.av));
  document.querySelectorAll('[data-tab]').forEach(button=>button.onclick=()=>openTab(button.dataset.tab));
  document.querySelectorAll('[data-open-result]').forEach(button=>button.onclick=()=>openTab('result'));
  $('#exam-mode').onchange=event=>{
    if(Object.values(state.answers).some(r=>r.submitted)){
      event.target.value=state.mode;
      $('#exam-message').hidden=false;$('#exam-message').textContent='Para mudar o modo depois de conferir respostas, reinicie esta avaliação. Suas respostas atuais continuam salvas.';return;
    }
    state.mode=event.target.value;persist();renderQuestions();
  };
  $('#submit-exam').onclick=()=>{
    const missing=assessment.questions.map((q,i)=>E.grade(q,state.answers[i]).answered?null:i).filter(i=>i!==null);
    if(missing.length){
      $('#exam-message').hidden=false;$('#exam-message').textContent='Faltam respostas nas questões: '+missing.map(i=>i+1).join(', ')+'.';
      $('#question-'+missing[0]).scrollIntoView({block:'center'});
      return;
    }
    Object.values(state.answers).forEach(r=>r.submitted=true);state.finalized=true;persist();renderQuestions();openTab('result');
  };
  $('#reset-toggle').onclick=()=>$('#reset-confirm').hidden=false;
  $('#reset-cancel').onclick=()=>$('#reset-confirm').hidden=true;
  $('#reset-confirm-button').onclick=()=>{
    state.answers={};state.finalized=false;persist();renderQuestions();$('#reset-confirm').hidden=true;
  };
  loadAssessment(activeAv);
})();
