(function(){
  'use strict';
  const catalog=globalThis.ESTUDA_CATALOG, engine=globalThis.ESTUDA_ENGINE, content=globalThis.ESTUDA_CONTENT||{};
  let storage=null;try{storage=localStorage;}catch{}
  const $=s=>document.querySelector(s);
  let active='todos', search='';
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function assessment(term,a,subjectId){
    const questions=content[subjectId]?.assessments[term]?.questions||[];
    const state=engine.readState(storage,'estuda-v4-'+subjectId+'-'+term,questions);
    const result=engine.summary(questions,state.answers);
    return '<article class="assessment-card '+term+'"><div class="assessment-title"><h3>'+term.toUpperCase()+'</h3><span class="assessment-meta">'+esc(a.date)+' · '+esc(a.value)+'</span></div><ul>'+a.topics.map(t=>'<li>'+esc(t)+'</li>').join('')+'</ul><p class="format"><strong>Na escola:</strong> '+esc(a.format)+'</p><p class="small muted">Na plataforma: revisão e 20 questões'+(result.answered?' · '+result.answered+' respondidas':'')+'.</p><a class="review-link" href="materia.html?materia='+subjectId+'&av='+term+'">revisar esta matéria</a></article>';
  }
  function render(){
    $('#filters').innerHTML=[{id:'todos',name:'Todas'},...catalog].map(s=>'<button class="filter '+(active===s.id?'active':'')+'" type="button" data-id="'+s.id+'" aria-pressed="'+(active===s.id)+'">'+esc(s.name)+'</button>').join('');
    const normalized=engine.normalizeAnswer(search);
    const visible=catalog.filter(s=>(active==='todos'||s.id===active)&&engine.normalizeAnswer(s.name+' '+s.av1.topics.join(' ')+' '+s.av2.topics.join(' ')).includes(normalized));
    $('#subjects').innerHTML=visible.map(s=>'<article class="subject-card"><header class="subject-head"><div><p class="eyebrow">'+esc(s.teacher)+'</p><h2>'+esc(s.name)+'</h2></div><span class="tag">40 questões de prática</span></header><div class="assessment-grid">'+assessment('av1',s.av1,s.id)+assessment('av2',s.av2,s.id)+'</div><p class="format"><strong>Também no cronograma:</strong> '+esc(s.extra)+'</p></article>').join('')||'<div class="empty-state">Não encontramos esse conteúdo. Tente outro termo ou selecione Todas.</div>';
    document.querySelectorAll('.filter').forEach(b=>b.onclick=()=>{active=b.dataset.id;render();});
  }
  $('#search').addEventListener('input',event=>{search=event.target.value;render();});
  render();
})();
