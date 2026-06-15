// ── CURSOR ──
const cur  = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx=0,my=0,rx=0,ry=0;

document.addEventListener('mousemove',e=>{
  mx=e.clientX; my=e.clientY;
  cur.style.left=mx+'px'; cur.style.top=my+'px';
});
(function animRing(){
  rx+=(mx-rx)*.1; ry+=(my-ry)*.1;
  ring.style.left=rx+'px'; ring.style.top=ry+'px';
  requestAnimationFrame(animRing);
})();

// ── NAV SCROLL ──
const navbar = document.getElementById('navbar');
if(navbar){
  window.addEventListener('scroll',()=>{
    navbar.classList.toggle('scrolled', window.scrollY>60);
  });
}

// ── ACTIVE NAV LINK ──
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(a=>{
  if(a.href === window.location.href) a.classList.add('active');
});

// ── REVEAL ON SCROLL ──
const reveals = document.querySelectorAll('.reveal');
if(reveals.length){
  const obs = new IntersectionObserver(entries=>{
    entries.forEach((e,i)=>{
      if(e.isIntersecting)
        setTimeout(()=>e.target.classList.add('visible'), i*60);
    });
  },{threshold:.1});
  reveals.forEach(r=>obs.observe(r));
}

// ── TICKER (optional — only runs if #ticker-inner exists) ──
const ti = document.getElementById('ticker-inner');
if(ti){
  const items=[
    'Graphic Designer','AI Enthusiast','Content Creator','ML Engineer','CS Instructor','Networking',
    'Branding','Computer Vision','Deep Learning','NLP','Creative Technologist'
  ];
  const doubled=[...items,...items];
  ti.innerHTML=doubled.map(t=>
    `<div class="ticker-item"><div class="ticker-dot"></div>${t}</div>`
  ).join('');
}

// ── DOTS PARTICLES (only runs if #dots exists) ──
const dc = document.getElementById('dots');
if(dc){
  for(let i=0;i<40;i++){
    const d=document.createElement('div');
    d.className='dot';
    d.style.left=Math.random()*100+'%';
    d.style.bottom='0';
    d.style.animationDuration=(8+Math.random()*12)+'s';
    d.style.animationDelay=(Math.random()*10)+'s';
    d.style.opacity='0';
    dc.appendChild(d);
  }
}

