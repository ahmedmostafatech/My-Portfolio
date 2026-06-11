const WORKS=[
  {id:1,l1:'creative',l2:'branding',num:'01',title:'Nexus Brand Identity',desc:'Full visual identity system — logo, color, type, and brand guidelines.',tags:['Logo Design','Brand System','Guidelines'],bg:'#0f1628',label:'NEXUS',wide:true},
  {id:2,l1:'creative',l2:'branding',num:'02',title:'Solara Coffee Branding',desc:'Warm luxury brand for specialty coffee shop. Packaging + identity.',tags:['Logo','Packaging','Print'],bg:'#1a1008',label:'SOLA'},
  {id:3,l1:'creative',l2:'branding',num:'03',title:'Apex Tech Brand',desc:'B2B tech company — modern, confident visual language.',tags:['Brand','Type','Color'],bg:'#0a1020',label:'APEX'},
  {id:4,l1:'creative',l2:'social',num:'04',title:'Fashion Brand Social Kit',desc:'100+ Instagram templates — Reels, Stories, Feed posts.',tags:['Instagram','Templates','Motion'],bg:'#1a0a1a',label:'FASH',wide:true},
  {id:5,l1:'creative',l2:'social',num:'05',title:'Restaurant Social Campaign',desc:'Monthly content system — menu posts, promos, stories.',tags:['Social','Content','Arabic'],bg:'#1a1208',label:'REST'},
  {id:6,l1:'creative',l2:'social',num:'06',title:'Fitness App Campaign',desc:'Dynamic social media content system with animated templates.',tags:['Motion','Templates','Feed'],bg:'#0a1a12',label:'FIT'},
  {id:7,l1:'creative',l2:'youtube',num:'07',title:'Channel Thumbnails Series',desc:'High-CTR YouTube thumbnail system for tech & design creators.',tags:['Thumbnails','YouTube','Click-rate'],bg:'#1a0808',label:'YT'},
  {id:8,l1:'creative',l2:'youtube',num:'08',title:'Intro & Motion Package',desc:'Animated channel intro, lower-thirds, and end screens.',tags:['Motion','After Effects','Branding'],bg:'#1a0e08',label:'INTR',wide:true},
  {id:9,l1:'creative',l2:'print',num:'09',title:'Annual Report 2024',desc:'60-page report design — data visualization, infographics, layout.',tags:['Print','Layout','Data Viz'],bg:'#101a0a',label:'RPT'},
  {id:10,l1:'creative',l2:'print',num:'10',title:'Event Poster Series',desc:'A series of bold typographic event posters.',tags:['Poster','Typography','Print'],bg:'#0a0a1a',label:'POST'},
  {id:11,l1:'technical',l2:'ai',num:'01',title:'Object Detection System',desc:'Real-time object detection using YOLOv8 — 94% mAP on custom dataset.',tags:['PyTorch','YOLO','Computer Vision'],bg:'#0a1520',label:'YOLO',wide:true},
  {id:12,l1:'technical',l2:'ai',num:'02',title:'Arabic Sentiment NLP',desc:'Transformer-based sentiment analysis for Arabic social media text.',tags:['NLP','BERT','Arabic'],bg:'#0a1a15',label:'NLP'},
  {id:13,l1:'technical',l2:'ai',num:'03',title:'Image Style Transfer',desc:'Neural style transfer model — apply artistic styles to photographs.',tags:['Deep Learning','CNN','TF'],bg:'#150a20',label:'STYL'},
  {id:14,l1:'technical',l2:'ai',num:'04',title:'Face Recognition System',desc:'Real-time face recognition using FaceNet + OpenCV pipeline.',tags:['CV','OpenCV','FaceNet'],bg:'#1a0a10',label:'FACE'},
  {id:15,l1:'technical',l2:'web',num:'05',title:'AI Portfolio Dashboard',desc:'React dashboard for tracking and displaying ML model performance.',tags:['React','JS','Dashboard'],bg:'#0f1628',label:'DASH',wide:true},
  {id:16,l1:'technical',l2:'web',num:'06',title:'Design Studio Website',desc:'Full website for a creative agency — animations, CMS, responsive.',tags:['HTML','CSS','JS'],bg:'#0a1420',label:'WEB'},
  {id:17,l1:'technical',l2:'automation',num:'07',title:'Social Media Auto-Poster',desc:'Python bot that generates and schedules social content using AI.',tags:['Python','API','Automation'],bg:'#1a1a0a',label:'AUTO'},
  {id:18,l1:'technical',l2:'automation',num:'08',title:'Design Asset Generator',desc:'Script that auto-generates sized social media variants from one template.',tags:['Python','Pillow','Figma API'],bg:'#0a1a1a',label:'GEN'},
];

const L2_LABELS={
  creative:{branding:'Branding',social:'Social Media',youtube:'YouTube',print:'Print & Publications'},
  technical:{ai:'AI & Machine Learning',web:'Web Development',automation:'Automation & Scripts'}
};

let currentL1='creative', currentL2='branding', currentCols=3;

function renderL2(){
  const el=document.getElementById('l2-filter');
  el.innerHTML=Object.keys(L2_LABELS[currentL1]).map(c=>`
    <button class="l2-btn${c===currentL2?' active':''}" onclick="setL2('${c}',this)">
      <span>${L2_LABELS[currentL1][c]}</span>
    </button>
  `).join('');
}

function renderCards(){
  const grid=document.getElementById('works-grid');
  const filtered=WORKS.filter(w=>w.l1===currentL1&&w.l2===currentL2);
  document.getElementById('count').textContent=filtered.length;
  grid.style.gridTemplateColumns=`repeat(${currentCols},1fr)`;

  if(!filtered.length){
    grid.innerHTML='<div class="empty" style="display:block">No projects yet — coming soon</div>';
    return;
  }

  grid.innerHTML=filtered.map((w,i)=>`
    <div class="work-card${w.wide&&currentCols>=3?' wide':''}" style="animation-delay:${i*60}ms">
      <div class="card-thumb" style="background:${w.bg}">
        <div class="thumb-placeholder">${w.label}</div>
        <div class="card-cat">${L2_LABELS[w.l1][w.l2]}</div>
        <div class="card-overlay">
          <a href="#" class="overlay-link">View Project <span class="overlay-arrow">↗</span></a>
        </div>
      </div>
      <div class="card-info">
        <div class="card-num">${w.num} / ${String(filtered.length).padStart(2,'0')}</div>
        <div class="card-title">${w.title}</div>
        <div class="card-desc">${w.desc}</div>
        <div class="card-tags">${w.tags.map(t=>`<span class="card-tag">${t}</span>`).join('')}</div>
      </div>
    </div>
  `).join('');
}

function setL1(val,btn){
  currentL1=val; currentL2=Object.keys(L2_LABELS[val])[0];
  document.querySelectorAll('.l1-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderL2(); renderCards();
}

function setL2(val,btn){
  currentL2=val;
  document.querySelectorAll('.l2-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderCards();
}

function setGrid(n,btn){
  currentCols=n;
  document.querySelectorAll('.vtbtn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderCards();
}

renderL2();
renderCards();