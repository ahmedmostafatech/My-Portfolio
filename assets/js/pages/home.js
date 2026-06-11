// ── TYPEWRITER — HERO ROLE (loop) ──
const titleEl = document.getElementById('typewriter-title');
if(titleEl){
  const words = ['Graphic Designer','AI Builder','Creative Technologist','YouTuber','ML Engineer'];
  let wIdx=0, cIdx=0, del=false;

  function loopType(){
    const word = words[wIdx];
    if(!del){
      cIdx++;
      titleEl.textContent = word.slice(0,cIdx);
      if(cIdx===word.length){ del=true; setTimeout(loopType,1800); return; }
      setTimeout(loopType,100);
    } else {
      cIdx--;
      titleEl.textContent = word.slice(0,cIdx);
      if(cIdx===0){ del=false; wIdx=(wIdx+1)%words.length; setTimeout(loopType,350); return; }
      setTimeout(loopType,50);
    }
  }
  setTimeout(loopType,800);
}

// ── TYPEWRITER — HERO DESC (one-shot) ──
const descEl = document.getElementById('typewriter-desc');
if(descEl){
  const full = descEl.dataset.text || '';
  descEl.textContent='';
  let i=0;

  function typeDesc(){
    if(i<full.length){
      descEl.textContent += full[i++];
      setTimeout(typeDesc,22);
    } else {
      descEl.classList.remove('tw-cursor');
    }
  }
  setTimeout(typeDesc,1400);
}