const ICONS = {
  hand: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M7 13V6a1.5 1.5 0 0 1 3 0v5M10 11V4.5a1.5 1.5 0 0 1 3 0V11M13 11.5V6a1.5 1.5 0 0 1 3 0v7M16 12v-2a1.5 1.5 0 0 1 3 0v5c0 3-2 6-6 6s-6-2-7-4l-1.5-3c-.5-1 .3-2 1.3-1.6L7 13.5"/></svg>',
  speech: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 5h16v11H9l-4 4v-4H4z" stroke-linejoin="round"/><path d="M8 9h8M8 12h5" stroke-linecap="round"/></svg>',
  puzzle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M9 4h4v2.2a1.4 1.4 0 0 0 2.4 1A1.4 1.4 0 0 1 18 8.4V12h-2.2a1.4 1.4 0 1 0 0 2.8H18v3.6a1.4 1.4 0 0 1-2.6.9 1.4 1.4 0 0 0-2.4 1V20H9v-2.2a1.4 1.4 0 0 0-2.4-1 1.4 1.4 0 0 1-2.6-.9V12h2.2a1.4 1.4 0 1 0 0-2.8H4V6.4a1.4 1.4 0 0 1 2.6-.9A1.4 1.4 0 0 0 9 6.2z"/></svg>',
  run: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="15" cy="4.5" r="1.6" fill="currentColor" stroke="none"/><path d="M8 20l2.5-5 2-2-1-4M12.5 13l3 1.5 2.5 4M6 12l3.5-2.5L12 8l3-1.5"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M12 20s-7-4.4-9.5-9C.8 7.4 3 4 6.5 4c2 0 3.3 1 5.5 3 2.2-2 3.5-3 5.5-3C21 4 23.2 7.4 21.5 11c-2.5 4.6-9.5 9-9.5 9z"/></svg>',
  toy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><rect x="4" y="10" width="7" height="7" rx="1"/><circle cx="17" cy="13.5" r="3.5"/><path d="M8 10V6h4v4"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M9 2h6"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2c1.2 3.6 2.4 4.8 6 6-3.6 1.2-4.8 2.4-6 6-1.2-3.6-2.4-4.8-6-6 3.6-1.2 4.8-2.4 6-6Z"/></svg>',
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="8" height="8" rx="1.5"/><rect x="13" y="4" width="8" height="8" rx="1.5"/><rect x="3" y="14" width="8" height="6" rx="1.5"/><rect x="13" y="14" width="8" height="6" rx="1.5"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
  list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z"/></svg>',
  house: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-7 9 7"/><path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9"/></svg>',
  palette: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.2 0-.8.7-1.5 1.5-1.5H16a5 5 0 0 0 5-5c0-3.9-4-7-9-7Z"/><circle cx="7.5" cy="10.5" r="1" fill="currentColor" stroke="none"/><circle cx="10.5" cy="7" r="1" fill="currentColor" stroke="none"/><circle cx="15" cy="8" r="1" fill="currentColor" stroke="none"/></svg>',
  apple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8c-3 0-5.5 2.3-5.5 6 0 3.3 2.3 6.5 4.3 6.5.8 0 1.2-.4 1.9-.4.7 0 1.1.4 1.9.4 1.5 0 4.3-2.7 4.3-6 0-2.6-1.6-4.6-3.3-5.2M12 8c0-1.7.8-3 2.3-3.5M12 8V6"/></svg>',
  paw: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="8" cy="8" r="1.6"/><circle cx="13" cy="6.5" r="1.6"/><circle cx="17" cy="9" r="1.6"/><path d="M8.5 13c-2.5 0-4 1.8-4 3.7 0 1.6 1.3 2.8 3 2.8.9 0 1.5-.4 2.5-.4s1.6.4 2.5.4c1.7 0 3-1.2 3-2.8 0-2-1.7-3.7-4-3.7-1 0-1.6.3-3 0Z"/></svg>',
  face: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="8"/><circle cx="9" cy="10" r="0.8" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r="0.8" fill="currentColor" stroke="none"/><path d="M9 15c1 1 5 1 6 0M12 11v3"/></svg>',
  box: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 8l9-4 9 4-9 4-9-4Z"/><path d="M3 8v8l9 4 9-4V8M12 12v8"/></svg>',
  broom: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M14 3 6 19M9 21l2-4M13 17l2 4M7 17l4-1.5M20 5c-2 0-5 1-6.5 4"/></svg>',
  leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 19c-1-6 2-13 14-14 1 10-5 14-14 14Z"/><path d="M5 19c3-4 6-7 10-10"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l5 5L20 6"/></svg>',
  cross: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  music: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><circle cx="7" cy="17.5" r="2.5"/><circle cx="17" cy="15.5" r="2.5"/><path d="M9.5 17.5V6l10-2v11.5" stroke-linecap="round"/></svg>',
  lesson: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="5.5" cy="6" r="2"/><circle cx="5.5" cy="18" r="2"/><path d="M5.5 8v8M10 6h9M10 12h9M10 18h9"/><circle cx="5.5" cy="12" r="2"/></svg>',
  steps: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 20h4v-5h5v-5h5V5h4"/></svg>',
  medical: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M12 7.5v9M7.5 12h9" stroke-linecap="round"/></svg>',
  shuffle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h3.5c2 0 3 .8 4 2.3M4 17h3.5c2 0 3-.8 4-2.3M16 7h4M16 17h4M14 4l3 3-3 3M14 20l3-3-3-3"/></svg>',
  fish: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><path d="M3 12c3-4.5 8-6.5 13-6.5 3 0 5 2.5 5 6.5s-2 6.5-5 6.5c-5 0-10-2-13-6.5Z"/><circle cx="15.5" cy="10" r="0.9" fill="currentColor" stroke="none"/><path d="M3 12l-2.3-3.2M3 12l-2.3 3.2"/></svg>',
  count: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><circle cx="5" cy="12" r="2.2"/><circle cx="12" cy="12" r="2.2"/><circle cx="19" cy="12" r="2.2"/></svg>',
  shapes: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><circle cx="6.5" cy="7" r="3.5"/><rect x="13" y="3.5" width="7" height="7" rx="1"/><path d="M11 20.5l4.5-8 4.5 8Z"/></svg>',
  car: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 16v-2.5l2-5h10l3 5H21v2.5"/><circle cx="7.5" cy="16.5" r="1.8"/><circle cx="17" cy="16.5" r="1.8"/><path d="M3 16h2.7M15.2 16h5.8"/></svg>'
};

const SECTIONS = [
  { id:'lesson', name:'今日小课', hint:'不想自己想？照着做30分钟', icon:'lesson', color:'sun' },
  { id:'progress', name:'宝宝进度', hint:'他到哪一步了，先设这个', icon:'steps', color:'sky' },
  { id:'wall', name:'灵感墙', hint:'今天可以跟宝宝玩什么', icon:'star', color:'coral' },
  { id:'toys', name:'玩具/绘本记录', hint:'管理你家的玩具和绘本', icon:'toy', color:'grass' },
  { id:'library', name:'活动库', hint:'按类型慢慢逛，全部活动', icon:'grid', color:'sky' },
  { id:'theme', name:'主题游戏', hint:'挑个主题 + 要准备的东西', icon:'calendar', color:'grape' },
  { id:'week', name:'本周计划', hint:'已经安排好的日程', icon:'list', color:'grass' },
  { id:'principles', name:'养育原则', hint:'我们的坚持和不做的事', icon:'shield', color:'berry' },
  { id:'safety', name:'安全须知', hint:'检查清单、提醒、意外怎么办', icon:'medical', color:'tangerine' }
];

const DAYS = [
  { key:'mon', label:'周一' }, { key:'tue', label:'周二' }, { key:'wed', label:'周三' },
  { key:'thu', label:'周四' }, { key:'fri', label:'周五' }, { key:'sat', label:'周六' }, { key:'sun', label:'周日' }
];
const WEEKDAY_TO_KEY = ['sun','mon','tue','wed','thu','fri','sat'];
const DOMAIN_FILTER_ORDER = ['all','gross','fine','lang','cog','eng','social'];
const DOMAIN_LABELS = { gross:'大运动', fine:'精细动作', lang:'语言启蒙', cog:'认知启蒙', eng:'英文启蒙', social:'社交情感' };
const STAGE_DOMAINS = ['gross','fine','lang','cog','eng'];

/* 今日小课：学美国早教课/图书馆 storytime 的做法——
   流程每次都一样（宝宝知道下一步是什么），变的只有主题。
   开场和收尾是固定仪式，中间五步跟着主题走。合计 30 分钟。 */
const LESSON_PLAN = [
  { key:'open',  minutes:2, label:'开场',        ritual:'open' },
  { key:'book',  minutes:6, label:'看书 · 指一指', domain:'lang' },
  { key:'song',  minutes:4, label:'唱歌 · 手指谣', domain:'eng', fallback:'lang' },
  { key:'game',  minutes:6, label:'主题小游戏',   domain:'cog' },
  { key:'hands', minutes:5, label:'动动手',      domain:'fine' },
  { key:'move',  minutes:5, label:'动起来',      domain:'gross' },
  { key:'close', minutes:2, label:'收尾',        ritual:'close' }
];

let content = null;
let state = null;
let saveTimer = null;
let libraryFilter = 'all';

function todayKey(){
  const d = new Date();
  return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
}

/* 单机版（双击打开.html）没有服务器，数据存在浏览器里；
   跑 server.py 时数据存在 data.json，手机电脑共用一份。 */
const STANDALONE = typeof window.__CONTENT__ !== 'undefined';
const LOCAL_KEY = 'babyWorkstationState';

async function fetchContent(){
  if(STANDALONE) return window.__CONTENT__;
  return (await fetch('content.json')).json();
}

async function fetchState(){
  if(STANDALONE) return JSON.parse(localStorage.getItem(LOCAL_KEY) || '{}');
  return (await fetch('api/state')).json();
}

function persistState(){
  if(STANDALONE){ localStorage.setItem(LOCAL_KEY, JSON.stringify(state)); return; }
  fetch('api/state', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(state) });
}

async function loadAll(){
  const [c, s] = await Promise.all([ fetchContent(), fetchState() ]);
  content = c;
  state = s;
  state.diary = state.diary || [];
  state.weekPlan = state.weekPlan || { mon:[], tue:[], wed:[], thu:[], fri:[], sat:[], sun:[] };
  state.toys = state.toys || [];
  state.books = state.books || [];
  state.screenTime = state.screenTime || {};
  state.safetyChecklist = state.safetyChecklist || {};
  state.customActivities = state.customActivities || {};
  state.achievedStages = state.achievedStages || {};
  content.modules.forEach(m => {
    if(!state.customActivities[m.id]) state.customActivities[m.id] = [];
    if(!state.achievedStages[m.id]) state.achievedStages[m.id] = [];
  });
  state.hiddenModules = state.hiddenModules || [];

  // 旧版本是"选一个当前阶段"，现在是逐项打钩的清单：把旧设置铺开成"这一步之前全勾上"
  if(state.stageProgress){
    Object.keys(state.stageProgress).forEach(domainId => {
      const cur = state.stageProgress[domainId];
      if(!cur || !domainStages(domainId).length) return;
      const idx = stageIndex(domainId, cur);
      domainStages(domainId).forEach((s,i) => {
        if(i <= idx && !state.achievedStages[domainId].includes(s.id)) state.achievedStages[domainId].push(s.id);
      });
    });
    delete state.stageProgress;
    persistState();
  }

  // 养育原则和话术：首次打开时把默认内容复制进来，之后全部可改可删（包括内置的那些）
  if(!state.principlesSeeded){
    state.beliefs = [...content.principles.beliefs, ...(state.customBeliefs || [])];
    state.avoid = [...content.principles.avoid, ...(state.customAvoid || [])];
    state.scripts = [...content.scripts, ...(state.customScripts || [])];
    state.principlesSeeded = true;
    delete state.customBeliefs;
    delete state.customAvoid;
    delete state.customScripts;
    persistState();
  }
  renderAll();
}

function scheduleSave(){
  clearTimeout(saveTimer);
  saveTimer = setTimeout(persistState, 400);
}

function domainStages(domainId){
  return content[domainId + 'Stages'] || [];
}

function stageIndex(domainId, stageId){
  return domainStages(domainId).findIndex(s => s.id === stageId);
}

/* 活动统一是 {text, materials?, steps?, stage?} 这个形状；
   自己加的只有一句话，没有材料和做法，也照常能用 */
function normalizeActivity(a){
  return typeof a === 'string' ? { text: a } : a;
}

/* 自己添加活动的表单：名称必填，材料/做法选填。做法一行一句。 */
function readActivityForm(root, textSel, matSel, stepsSel){
  const text = root.querySelector(textSel).value.trim();
  if(!text) return null;
  const materials = root.querySelector(matSel).value.trim();
  const steps = root.querySelector(stepsSel).value.split('\n').map(s=>s.trim()).filter(Boolean);
  const obj = { text };
  if(materials) obj.materials = materials;
  if(steps.length) obj.steps = steps;
  return obj;
}
function clearActivityForm(root, textSel, matSel, stepsSel){
  root.querySelector(textSel).value = '';
  root.querySelector(matSel).value = '';
  root.querySelector(stepsSel).value = '';
}

function isAchieved(domainId, stageId){
  return (state.achievedStages[domainId] || []).includes(stageId);
}

function baseActivities(m){
  const all = m.activities.map(normalizeActivity);
  if(!STAGE_DOMAINS.includes(m.id)) return all;
  if(!(state.achievedStages[m.id] || []).length) return all;
  return all.filter(a => !isAchieved(m.id, a.stage));
}

function customActivities(m){
  return (state.customActivities[m.id] || []).map(t => ({ ...normalizeActivity(t), custom: true }));
}

function domainActivities(m){
  return [...baseActivities(m), ...customActivities(m)];
}

/* 用不上的模块可以关掉（比如不需要英文启蒙） */
function moduleHidden(id){ return state.hiddenModules.includes(id); }
function visibleModules(){ return content.modules.filter(m => !moduleHidden(m.id)); }
function toggleModule(id){
  const i = state.hiddenModules.indexOf(id);
  if(i === -1) state.hiddenModules.push(id); else state.hiddenModules.splice(i, 1);
  state.lesson = null;  // 今天这套要重新拼，否则关掉的模块还留在里面
  scheduleSave();
  renderWall();
  renderLibraryFilters();
  renderMilestonePicker();
  renderLibraryList();
  renderLesson();
}

/* 材料 + 做法，点开才看得到 */
function activityDetailHTML(a){
  if(!a.materials && !(a.steps && a.steps.length)) return '';
  return `
    <div class="activity-detail">
      ${a.materials ? `<div class="mat">材料：${a.materials}</div>` : ''}
      ${a.steps && a.steps.length ? `<ul>${a.steps.map(s=>`<li>${s}</li>`).join('')}</ul>` : ''}
    </div>
  `;
}

function bindActivityToggle(item){
  const line = item.querySelector('.activity-text');
  if(!item.querySelector('.activity-detail')) return;
  line.classList.add('has-detail');
  line.addEventListener('click', e=>{
    e.stopPropagation();
    item.classList.toggle('open');
  });
}

function pickRandom(arr, n, avoid){
  const skip = new Set((avoid || []).map(a => a.text));
  const pool = arr.filter(x => !skip.has(x.text));
  const src = pool.length >= n ? pool : arr;
  const copy = [...src];
  const out = [];
  while(out.length < n && copy.length){ out.push(copy.splice(Math.floor(Math.random()*copy.length),1)[0]); }
  return out;
}

function setDateLine(){
  const d = new Date();
  const wd = ['周日','周一','周二','周三','周四','周五','周六'][d.getDay()];
  document.getElementById('dateLine').textContent = `${d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日 · ${wd}`;
}

/* ---------- view routing ---------- */
function showView(id){
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-'+id).classList.add('active');
  window.scrollTo(0,0);
}
document.querySelectorAll('[data-back]').forEach(b => b.addEventListener('click', ()=> showView('home')));

/* ---------- day picker (shared) ---------- */
function closeAllDayPickers(){ document.querySelectorAll('.day-picker.show').forEach(p => p.classList.remove('show')); }
document.addEventListener('click', closeAllDayPickers);
function dayPickerHTML(){ return `<div class="day-picker">${DAYS.map(d=>`<button data-day="${d.key}">${d.label}</button>`).join('')}</div>`; }
function attachDayPicker(container, activity){
  const btn = container.querySelector('.fav-btn');
  const picker = container.querySelector('.day-picker');
  btn.addEventListener('click', e=>{
    e.stopPropagation();
    const wasOpen = picker.classList.contains('show');
    closeAllDayPickers();
    if(!wasOpen) picker.classList.add('show');
  });
  picker.addEventListener('click', e=>{
    e.stopPropagation();
    const dayBtn = e.target.closest('button[data-day]');
    if(!dayBtn) return;
    const day = dayBtn.dataset.day;
    state.weekPlan[day] = state.weekPlan[day] || [];
    state.weekPlan[day].push(activity);
    picker.classList.remove('show');
    btn.classList.add('faved');
    setTimeout(()=> btn.classList.remove('faved'), 1200);
    scheduleSave();
    renderWeek();
  });
}

/* ---------- home ---------- */
function renderHome(){
  const grid = document.getElementById('sectionGrid');
  grid.innerHTML = SECTIONS.map(s => `
    <button class="section-card" data-goto="${s.id}">
      <div class="tape" style="background:var(--${s.color});"></div>
      <div class="icon-wrap" style="color:var(--${s.color});">${ICONS[s.icon]}</div>
      <div class="sec-name">${s.name}</div>
      <div class="sec-hint">${s.hint}</div>
    </button>
  `).join('');
  grid.querySelectorAll('[data-goto]').forEach(btn=>{
    btn.addEventListener('click', ()=> showView(btn.dataset.goto));
  });
}

/* ---------- 灵感墙 ---------- */
function renderDomainCard(m){
  const card = document.createElement('div');
  card.className = 'card';
  card.dataset.id = m.id;
  let current = pickRandom(domainActivities(m), 3);

  function detailHTML(){
    return current.map(a => `
      <div class="activity-item" data-row>
        <div class="activity-line">
          <span class="activity-text"><span class="act-title">${a.text}</span></span>
          <div style="position:relative;">
            <button class="fav-btn" title="加入本周计划" style="color:var(--${m.color})">${ICONS.heart}</button>
            ${dayPickerHTML()}
          </div>
        </div>
        ${activityDetailHTML(a)}
      </div>
    `).join('') + `
      <button class="shuffle" style="color:var(--${m.color}); border-color:var(--${m.color});" data-shuffle>🔀 换一批</button>
      <button class="add-toggle" data-add-toggle>+ 记一个新点子</button>
      <div class="quick-add" data-quick-add style="display:none;">
        <input type="text" placeholder="活动名称" data-quick-input />
        <input type="text" placeholder="材料（选填）" data-quick-materials />
        <textarea placeholder="做法，一行一步（选填）" data-quick-steps></textarea>
        <button data-quick-save>加入</button>
      </div>
      ${STAGE_DOMAINS.includes(m.id) ? `<button class="add-toggle" data-goto-milestone data-goto-domain="${m.id}">宝宝${m.name}到哪一步了？去设置 →</button>` : ''}
      ${m.optional ? `<button class="add-toggle muted" data-hide-module="${m.id}">用不上？把「${m.name}」收起来</button>` : ''}
    `;
  }

  card.innerHTML = `
    <div class="tape" style="background:var(--${m.color});"></div>
    <div class="card-head">
      <div class="icon-wrap" style="color:var(--${m.color});">${ICONS[m.icon]}</div>
      <div class="card-body">
        <div class="module-name">${m.name}</div>
        <div class="teaser">${current[0] ? current[0].text : '还没有适合的活动，去调整宝宝进度看看'}</div>
      </div>
      <div class="expand-btn">${ICONS.plus}</div>
    </div>
    <div class="card-detail"><div class="detail-inner" data-detail>
      ${m.note ? `<div class="module-note">${m.note}</div>` : ''}
      <div data-rows>${detailHTML()}</div>
    </div></div>
  `;

  function bindRows(){
    card.querySelectorAll('[data-row]').forEach((row,i)=>{
      attachDayPicker(row, { domain:m.name, text: current[i].text });
      bindActivityToggle(row);
    });
    const detail = card.querySelector('[data-detail]');
    detail.querySelector('[data-add-toggle]').addEventListener('click', e=>{
      e.stopPropagation();
      const box = detail.querySelector('[data-quick-add]');
      box.style.display = box.style.display === 'none' ? 'flex' : 'none';
    });
    detail.querySelector('[data-quick-save]').addEventListener('click', e=>{
      e.stopPropagation();
      const box = detail.querySelector('[data-quick-add]');
      const obj = readActivityForm(box, '[data-quick-input]', '[data-quick-materials]', '[data-quick-steps]');
      if(!obj) return;
      state.customActivities[m.id] = state.customActivities[m.id] || [];
      state.customActivities[m.id].push(obj);
      scheduleSave();
      clearActivityForm(box, '[data-quick-input]', '[data-quick-materials]', '[data-quick-steps]');
      box.style.display = 'none';
    });
    const gotoBtn = detail.querySelector('[data-goto-milestone]');
    if(gotoBtn){
      gotoBtn.addEventListener('click', e=>{
        e.stopPropagation();
        libraryFilter = gotoBtn.dataset.gotoDomain;
        renderLibraryFilters();
        renderMilestonePicker();
        renderLibraryAdd();
        renderLibraryList();
        showView('library');
      });
    }
    const hideBtn = detail.querySelector('[data-hide-module]');
    if(hideBtn){
      hideBtn.addEventListener('click', e=>{
        e.stopPropagation();
        toggleModule(hideBtn.dataset.hideModule);
      });
    }
  }
  bindRows();

  card.querySelector('.card-head').addEventListener('click', ()=> card.classList.toggle('open'));
  card.querySelector('[data-detail]').addEventListener('click', e=>{
    if(!e.target.closest('[data-shuffle]')) return;
    e.stopPropagation();
    current = pickRandom(domainActivities(m), 3, current);
    card.querySelector('.teaser').textContent = current[0] ? current[0].text : '还没有适合的活动';
    card.querySelector('[data-rows]').innerHTML = detailHTML();
    bindRows();
  });

  return card;
}

function toyPick(){
  const toys = state.toys;
  if(!toys.length) return null;
  const sorted = [...toys].sort((a,b)=>(a.lastShown||0)-(b.lastShown||0));
  const pool = sorted.slice(0, Math.max(1, Math.ceil(sorted.length/2)));
  const chosen = pool[Math.floor(Math.random()*pool.length)];
  chosen.lastShown = Date.now();
  return chosen;
}

function renderToyCard(){
  const card = document.createElement('div');
  card.className = 'card';
  let shown = toyPick();
  const hint = () => content.toyPromptTemplates[Math.floor(Math.random()*content.toyPromptTemplates.length)];

  function bodyHTML(){
    if(!shown) return `<div class="toy-empty">还没有添加玩具，去首页「玩具轮换」加几个～</div>`;
    const detail = shown.detail ? `<div class="toy-hint">${shown.detail}</div>` : `<div class="toy-hint">${hint()}</div>`;
    return `<div class="toy-name">${shown.name}</div>${detail}<button class="shuffle" style="color:var(--grass); border-color:var(--grass);" data-toy-shuffle>🔀 换一个玩具</button>`;
  }

  card.innerHTML = `
    <div class="tape" style="background:var(--grass);"></div>
    <div class="card-head">
      <div class="icon-wrap" style="color:var(--grass);">${ICONS.toy}</div>
      <div class="card-body">
        <div class="module-name">玩具轮换</div>
        <div class="teaser">${shown ? shown.name : '添加你家的玩具，让它们轮流上场'}</div>
      </div>
      <div class="expand-btn">${ICONS.plus}</div>
    </div>
    <div class="card-detail"><div class="detail-inner">
      <div data-toy-body>${bodyHTML()}</div>
    </div></div>
  `;

  card.querySelector('.card-head').addEventListener('click', ()=> card.classList.toggle('open'));

  function bindToyShuffle(){
    const btn = card.querySelector('[data-toy-shuffle]');
    if(!btn) return;
    btn.addEventListener('click', e=>{
      e.stopPropagation();
      shown = toyPick();
      card.querySelector('.teaser').textContent = shown.name;
      card.querySelector('[data-toy-body]').innerHTML = bodyHTML();
      bindToyShuffle();
      scheduleSave();
    });
  }
  bindToyShuffle();

  return card;
}

function fmtTime(s){ const m=Math.floor(s/60), r=s%60; return String(m).padStart(2,'0')+':'+String(r).padStart(2,'0'); }

function renderScreenCard(){
  const card = document.createElement('div');
  card.className = 'card';
  const key = todayKey();
  let seconds = state.screenTime[key] || 0;
  let running = false, handle = null;

  card.innerHTML = `
    <div class="tape" style="background:var(--tangerine);"></div>
    <div class="card-head">
      <div class="icon-wrap" style="color:var(--tangerine);">${ICONS.clock}</div>
      <div class="card-body">
        <div class="module-name">Screen Time</div>
        <div class="teaser">今日屏幕时间 ${fmtTime(seconds)}</div>
      </div>
      <div class="expand-btn">${ICONS.plus}</div>
    </div>
    <div class="card-detail"><div class="detail-inner">
      <div class="timer-box"><span class="timer-display" data-timer>${fmtTime(seconds)}</span><button class="timer-btn" data-toggle>开始计时</button></div>
    </div></div>
  `;

  card.querySelector('.card-head').addEventListener('click', ()=> card.classList.toggle('open'));
  const display = card.querySelector('[data-timer]');
  const teaser = card.querySelector('.teaser');
  const toggle = card.querySelector('[data-toggle]');
  toggle.addEventListener('click', e=>{
    e.stopPropagation();
    running = !running;
    toggle.textContent = running ? '暂停' : '继续计时';
    toggle.classList.toggle('pause', running);
    if(running){
      handle = setInterval(()=>{
        seconds++;
        state.screenTime[key] = seconds;
        display.textContent = fmtTime(seconds);
        teaser.textContent = `今日屏幕时间 ${fmtTime(seconds)}`;
        scheduleSave();
      }, 1000);
    } else { clearInterval(handle); scheduleSave(); }
  });

  return card;
}

function renderWall(){
  const grid = document.getElementById('cardGrid');
  grid.innerHTML = '';
  visibleModules().forEach(m => grid.appendChild(renderDomainCard(m)));
  grid.appendChild(renderToyCard());
  grid.appendChild(renderScreenCard());
  renderDiary();
}

function renderDiary(){
  const list = document.getElementById('diaryList');
  list.innerHTML = state.diary.map((e,i) => `
    <div class="diary-entry"><div class="diary-preview collapsed" data-i="${i}">${e.text}</div><div class="diary-date-tag">${e.date}</div></div>
  `).join('') || `<div class="diary-date-tag">还没有记录，今天发生了什么？</div>`;
  list.querySelectorAll('.diary-preview').forEach(el=>{ el.addEventListener('click', ()=> el.classList.toggle('collapsed')); });
}

document.getElementById('addToggle').addEventListener('click', ()=>{
  const box = document.getElementById('diaryAdd');
  box.style.display = box.style.display === 'none' ? 'block' : 'none';
});
document.getElementById('diarySave').addEventListener('click', ()=>{
  const ta = document.getElementById('diaryText');
  if(!ta.value.trim()) return;
  const d = new Date();
  state.diary.unshift({ date:`${d.getMonth()+1}月${d.getDate()}日`, text: ta.value.trim() });
  scheduleSave();
  renderDiary();
  ta.value = '';
  document.getElementById('diaryAdd').style.display = 'none';
});

/* ---------- 活动库 ---------- */
/* ---------- 宝宝进度（逐项打钩，一个地方设置全站生效） ---------- */
/* 勾选：自己+前面没勾的一起勾上（"他会独走了，前面肯定都会"）
   取消：只取消这一条，中间可以留空（"会假装游戏，但不会配对"） */
function stageChecklistHTML(domainId){
  const stages = domainStages(domainId);
  return `<div class="stage-checklist" data-stage-list="${domainId}">
    ${stages.map(s => `
      <div class="safety-item">
        <input type="checkbox" id="stage-${domainId}-${s.id}" data-stage-id="${s.id}" ${isAchieved(domainId,s.id)?'checked':''}/>
        <label for="stage-${domainId}-${s.id}" class="${isAchieved(domainId,s.id)?'checked':''}">${s.label}<span class="stage-age"> · ${s.age}</span></label>
      </div>
    `).join('')}
  </div>`;
}

function progressSummary(domainId){
  const stages = domainStages(domainId);
  const achieved = state.achievedStages[domainId] || [];
  if(!achieved.length) return '还没勾，现在是全部都推荐';
  const idxs = achieved.map(id => stageIndex(domainId, id));
  const maxIdx = Math.max(...idxs);
  const skipped = stages.filter((s,i) => i < maxIdx && !achieved.includes(s.id));
  let text = `勾了 ${achieved.length}/${stages.length} 项，到「${stages[maxIdx].label}」`;
  if(skipped.length) text += ` · 跳过：${skipped.map(s=>s.label).join('、')}`;
  return text;
}

function bindStageChecklist(root, domainId, after){
  const stages = domainStages(domainId);
  root.querySelectorAll(`[data-stage-list="${domainId}"] input[type=checkbox]`).forEach(cb=>{
    cb.addEventListener('change', ()=>{
      const list = state.achievedStages[domainId];
      const idx = stageIndex(domainId, cb.dataset.stageId);
      if(cb.checked){
        stages.forEach(s => {
          if(stageIndex(domainId, s.id) <= idx && !list.includes(s.id)) list.push(s.id);
        });
      } else {
        const i = list.indexOf(cb.dataset.stageId);
        if(i > -1) list.splice(i, 1);
      }
      state.lesson = null;
      scheduleSave();
      renderWall();
      renderLesson();
      renderProgress();
      renderMilestonePicker();
      renderLibraryList();
      if(after) after();
    });
  });
}

function renderProgress(){
  const el = document.getElementById('progressContent');
  if(!el) return;
  const doms = STAGE_DOMAINS.filter(id => !moduleHidden(id));
  el.innerHTML = doms.map(id => {
    const m = content.modules.find(x => x.id === id);
    return `
      <div class="milestone-box">
        <h4 style="color:var(--${m.color});">${m.name}</h4>
        <div class="view-sub" style="margin:2px 0 10px;">${progressSummary(id)}</div>
        ${stageChecklistHTML(id)}
      </div>`;
  }).join('') || `<div class="day-empty">模块都收起来了</div>`;
  doms.forEach(id => bindStageChecklist(el, id));
}

function renderMilestonePicker(){
  const wrap = document.getElementById('milestonePicker');
  if(!wrap) return;
  if(!STAGE_DOMAINS.includes(libraryFilter)){ wrap.innerHTML = ''; return; }
  const domainId = libraryFilter;
  wrap.innerHTML = `
    <div class="milestone-box">
      <h4>宝宝${DOMAIN_LABELS[domainId]}到哪一步了？</h4>
      <div class="view-sub" style="margin:0 0 8px;">${progressSummary(domainId)} · 跟「宝宝进度」是同一个设置</div>
      ${stageChecklistHTML(domainId)}
    </div>
  `;
  bindStageChecklist(wrap, domainId);
}

function renderLibraryFilters(){
  const row = document.getElementById('libraryFilters');
  const labels = { all:'全部', ...DOMAIN_LABELS };
  row.innerHTML = DOMAIN_FILTER_ORDER.map(id => `<button class="chip-btn ${id===libraryFilter?'active':''}" data-filter="${id}">${labels[id]}</button>`).join('');
  row.querySelectorAll('[data-filter]').forEach(b=>{
    b.addEventListener('click', ()=>{ libraryFilter = b.dataset.filter; renderLibraryFilters(); renderMilestonePicker(); renderLibraryAdd(); renderLibraryList(); });
  });
}

function renderLibraryAdd(){
  const wrap = document.getElementById('libraryAdd');
  const defaultDomain = libraryFilter === 'all' ? 'gross' : libraryFilter;
  wrap.innerHTML = `
    <select data-add-domain>${Object.keys(DOMAIN_LABELS).map(id=>`<option value="${id}" ${id===defaultDomain?'selected':''}>${DOMAIN_LABELS[id]}</option>`).join('')}</select>
    <input type="text" placeholder="活动名称" data-add-input />
    <input type="text" placeholder="材料（选填）" data-add-materials />
    <textarea placeholder="做法，一行一步（选填）" data-add-steps></textarea>
    <button data-add-save>添加</button>
  `;
  wrap.querySelector('[data-add-save]').addEventListener('click', ()=>{
    const domain = wrap.querySelector('[data-add-domain]').value;
    const obj = readActivityForm(wrap, '[data-add-input]', '[data-add-materials]', '[data-add-steps]');
    if(!obj) return;
    state.customActivities[domain] = state.customActivities[domain] || [];
    state.customActivities[domain].push(obj);
    scheduleSave();
    clearActivityForm(wrap, '[data-add-input]', '[data-add-materials]', '[data-add-steps]');
    renderLibraryList();
  });
}

function renderLibraryList(){
  const listEl = document.getElementById('libraryList');
  const mods = libraryFilter === 'all' ? visibleModules() : content.modules.filter(m => m.id === libraryFilter);
  listEl.innerHTML = '';

  // 单看某个被收起来的模块时，给个打开的入口
  if(libraryFilter !== 'all' && moduleHidden(libraryFilter)){
    const m = content.modules.find(x => x.id === libraryFilter);
    const box = document.createElement('div');
    box.className = 'milestone-box';
    box.innerHTML = `<h4>「${m.name}」现在是收起来的</h4>
      <div class="view-sub" style="margin:4px 0 10px;">收起来之后，灵感墙和今日小课里都不会出现</div>
      <button class="chip-btn" data-show-module="${m.id}">重新打开</button>`;
    box.querySelector('[data-show-module]').addEventListener('click', ()=> toggleModule(m.id));
    listEl.appendChild(box);
  }
  mods.forEach(m => {
    baseActivities(m).forEach(a => {
      const row = document.createElement('div');
      row.className = 'activity-item';
      row.innerHTML = `
        <div class="activity-line">
          <span class="activity-text"><span class="act-title">${a.text}</span><span class="tag">${m.name}${a.when ? ' · ' + a.when : ''}</span></span>
          <div style="position:relative;">
            <button class="fav-btn" title="加入本周计划" style="color:var(--${m.color})">${ICONS.heart}</button>
            ${dayPickerHTML()}
          </div>
        </div>
        ${activityDetailHTML(a)}
      `;
      attachDayPicker(row, { domain:m.name, text: a.text });
      bindActivityToggle(row);
      listEl.appendChild(row);
    });
    customActivities(m).forEach((a, idx) => {
      const row = document.createElement('div');
      row.className = 'activity-item';
      row.innerHTML = `
        <div class="activity-line">
          <span class="activity-text"><span class="act-title">${a.text}</span><span class="tag">${m.name} · 自己加的</span></span>
          <div style="display:flex; gap:6px; align-items:center;">
            <div style="position:relative;">
              <button class="fav-btn" title="加入本周计划" style="color:var(--${m.color})">${ICONS.heart}</button>
              ${dayPickerHTML()}
            </div>
            <button class="del-btn" title="删除" data-del-domain="${m.id}" data-del-idx="${idx}">${ICONS.cross}</button>
          </div>
        </div>
        ${activityDetailHTML(a)}
      `;
      attachDayPicker(row, { domain:m.name, text: a.text });
      bindActivityToggle(row);
      listEl.appendChild(row);
    });
  });
  listEl.querySelectorAll('[data-del-domain]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      state.customActivities[btn.dataset.delDomain].splice(Number(btn.dataset.delIdx), 1);
      scheduleSave();
      renderLibraryList();
    });
  });
}

/* ---------- 每周主题 ---------- */
/* 不跟日历自动换了——挑一个就一直是那个，直到你自己去换 */
function currentThemeId(){
  if(state.themeOverride) return state.themeOverride;
  return content.themes[0].id;
}

function renderThemePicker(){
  const row = document.getElementById('themePicker');
  const activeId = currentThemeId();
  row.innerHTML = content.themes.map(t => `<button class="chip-btn ${t.id===activeId?'active':''}" data-theme="${t.id}">${t.name}</button>`).join('');
  row.querySelectorAll('[data-theme]').forEach(b=>{
    b.addEventListener('click', ()=>{
      state.themeOverride = b.dataset.theme;
      state.lesson = null;  // 主题变了，今天这套要跟着换
      scheduleSave();
      renderThemePicker();
      renderThemeDetail();
      renderLesson();
    });
  });
}

const MATERIAL_PREVIEW_COUNT = 5;

function renderThemeDetail(){
  const t = content.themes.find(x => x.id === currentThemeId());
  const el = document.getElementById('themeContent');
  const matCats = ['家居物品','食物类','进阶可选','DIY'];
  el.innerHTML = `
    <div class="theme-head">
      <div class="icon-wrap" style="width:44px;height:44px;color:var(--${t.color});">${ICONS[t.icon]}</div>
      <h3>${t.name}</h3>
    </div>
    <div class="library-list" id="themeActivities"></div>
    <div class="materials-grid">
      ${matCats.map(cat => {
        const items = t.materials[cat];
        if(!items.length) return `<div class="material-card empty"></div>`;
        const preview = items.slice(0, MATERIAL_PREVIEW_COUNT);
        const rest = items.slice(MATERIAL_PREVIEW_COUNT);
        return `
          <div class="material-card">
            <h4>${cat}</h4>
            <ul data-preview>${preview.map(x=>`<li>${x}</li>`).join('')}</ul>
            ${rest.length ? `
              <ul data-rest style="display:none;">${rest.map(x=>`<li>${x}</li>`).join('')}</ul>
              <button class="expand-more" data-expand-more>展开更多（+${rest.length}）</button>
            ` : ''}
          </div>
        `;
      }).join('')}
    </div>
  `;
  el.querySelectorAll('[data-expand-more]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const card = btn.closest('.material-card');
      const restList = card.querySelector('[data-rest]');
      const showing = restList.style.display !== 'none';
      restList.style.display = showing ? 'none' : 'block';
      btn.textContent = showing ? `展开更多（+${restList.children.length}）` : '收起';
    });
  });
  const listEl = document.getElementById('themeActivities');
  t.activities.forEach(text => {
    const row = document.createElement('div');
    row.className = 'activity-item';
    row.innerHTML = `
      <div class="activity-line">
        <span class="activity-text">${text}</span>
        <div style="position:relative;">
          <button class="fav-btn" title="加入本周计划" style="color:var(--${t.color})">${ICONS.heart}</button>
          ${dayPickerHTML()}
        </div>
      </div>
    `;
    attachDayPicker(row, { domain:t.name, text });
    listEl.appendChild(row);
  });
}

/* ---------- 今日小课 ---------- */
/* 小课只挑能随时开始的活动：带 when 的（做饭时、洗澡时、出门时…）不选，
   因为你不可能为了上课临时去做饭。这些在灵感墙和活动库里照常有。 */
function lessonPool(m, themeId){
  // domainActivities 已经按打钩清单排除了"已经会的"，这里不用再猜范围了
  const anytime = domainActivities(m).filter(a => !a.when);
  const onTheme = anytime.filter(a => (a.themes || []).includes(themeId));
  return { onTheme, anytime };
}

function buildLesson(){
  const themeId = currentThemeId();
  const theme = content.themes.find(t => t.id === themeId);
  const items = [];

  LESSON_PLAN.forEach(slot => {
    if(slot.ritual){
      items.push({ slotKey: slot.key, label: slot.label, minutes: slot.minutes, ritual: true,
                   domainName: '每次都一样', color: 'ink',
                   activity: content.lessonRitual[slot.ritual] });
      return;
    }
    const item = pickForSlot(slot, themeId, items.map(i => i.activity && i.activity.text));
    if(item) items.push(item);
  });

  return { date: todayKey(), themeId, themeName: theme ? theme.name : '', items };
}

/* 给某一步挑一个活动，avoid 是"小课里其它步骤已经用掉的"，防止同一个活动出现两次 */
function pickForSlot(slot, themeId, avoid){
  let m = content.modules.find(x => x.id === slot.domain);
  if(!m || moduleHidden(m.id)){
    m = slot.fallback ? content.modules.find(x => x.id === slot.fallback) : null;
  }
  if(!m || moduleHidden(m.id)) return null;

  const { onTheme, anytime } = lessonPool(m, themeId);
  const prefer = onTheme.filter(a => !avoid.includes(a.text));
  const rest = anytime.filter(a => !avoid.includes(a.text));
  const pool = prefer.length ? prefer : rest;
  if(!pool.length) return null;

  const a = pool[Math.floor(Math.random() * pool.length)];
  return { slotKey: slot.key, domain: m.id, domainName: m.name, color: m.color,
           label: slot.label, minutes: slot.minutes, onTheme: prefer.length > 0, activity: a };
}

/* 只换某一步，其它步骤不动 */
function rebuildLessonStep(slotKey){
  const slot = LESSON_PLAN.find(s => s.key === slotKey);
  if(!slot || slot.ritual) return;
  const idx = state.lesson.items.findIndex(i => i.slotKey === slotKey);
  if(idx === -1) return;
  const avoid = state.lesson.items
    .filter((_,i) => i !== idx)
    .map(i => i.activity && i.activity.text)
    .concat([state.lesson.items[idx].activity.text]);
  const next = pickForSlot(slot, state.lesson.themeId, avoid);
  if(next) state.lesson.items[idx] = next;
  scheduleSave();
  renderLesson();
}

function ensureLesson(){
  if(!state.lesson || state.lesson.date !== todayKey() || state.lesson.themeId !== currentThemeId()){
    state.lesson = buildLesson();
    scheduleSave();
  }
  return state.lesson;
}

function renderLesson(){
  const el = document.getElementById('lessonContent');
  if(!el) return;
  const lesson = ensureLesson();
  const total = lesson.items.reduce((n,i)=>n+i.minutes, 0);

  if(!lesson.items.length){
    el.innerHTML = `<div class="day-empty">所有模块都关掉了，去活动库打开一个吧</div>`;
    return;
  }

  el.innerHTML = `
    <div class="lesson-total">
      <div class="lesson-theme">主题 · ${lesson.themeName}</div>
      大约 <strong>${total} 分钟</strong>。流程每次都一样，宝宝会知道下一步是什么；变的只有主题。
      做不完就做一半，随时可以停。
    </div>
    <div class="lesson-list">
      ${lesson.items.map((it, i) => `
        <div class="lesson-step activity-item${it.ritual ? ' ritual' : ''}" data-step="${i}">
          <div class="step-rail"><span class="step-num" style="background:var(--${it.color === 'ink' ? 'ink-soft' : it.color});">${i+1}</span></div>
          <div class="step-body">
            <div class="step-meta">${it.label} · ${it.minutes}分钟 · ${it.domainName}${it.onTheme ? ' · 应景' : ''}</div>
            <div class="activity-line">
              <span class="activity-text"><span class="act-title">${it.activity.text}</span></span>
              ${it.ritual ? '' : `
                <div class="step-actions">
                  <button class="step-shuffle" title="只换这一步" data-step-shuffle="${it.slotKey}">${ICONS.shuffle}</button>
                  <div style="position:relative;">
                    <button class="fav-btn" title="加入本周计划" style="color:var(--${it.color})">${ICONS.heart}</button>
                    ${dayPickerHTML()}
                  </div>
                </div>
              `}
            </div>
            ${activityDetailHTML(it.activity)}
          </div>
        </div>
      `).join('')}
    </div>
    <button class="shuffle" data-lesson-shuffle>🔀 换一整套（开场收尾不变）</button>
  `;

  el.querySelectorAll('[data-step]').forEach(step=>{
    const it = lesson.items[Number(step.dataset.step)];
    if(!it.ritual) attachDayPicker(step, { domain: it.domainName, text: it.activity.text });
    bindActivityToggle(step);
  });
  el.querySelectorAll('[data-step-shuffle]').forEach(btn=>{
    btn.addEventListener('click', e=>{
      e.stopPropagation();
      rebuildLessonStep(btn.dataset.stepShuffle);
    });
  });
  el.querySelector('[data-lesson-shuffle]').addEventListener('click', ()=>{
    state.lesson = buildLesson();
    scheduleSave();
    renderLesson();
  });
}

/* ---------- 本周计划 ---------- */
let weekExpandedDay = null;
let weekExpandedFilter = 'all';

const WEEK_PICK_FILTERS = () => {
  const doms = visibleModules().map(m => ({ id:m.id, label:m.name }));
  return [{ id:'all', label:'全部' }, { id:'theme', label:'主题游戏' }, ...doms];
};

function weekPickPool(filter){
  if(filter === 'theme'){
    const t = content.themes.find(x => x.id === currentThemeId());
    const items = t.activities.map(text => ({ domainName:t.name, color:t.color, icon:t.icon, text }));
    visibleModules().forEach(m => {
      domainActivities(m).filter(a => (a.themes||[]).includes(t.id)).forEach(a => {
        items.push({ domainName:m.name, color:m.color, icon:m.icon, text:a.text, when:a.when });
      });
    });
    return items;
  }
  if(filter === 'all'){
    const items = [];
    visibleModules().forEach(m => domainActivities(m).forEach(a =>
      items.push({ domainName:m.name, color:m.color, icon:m.icon, text:a.text, when:a.when })));
    return items;
  }
  const m = content.modules.find(x => x.id === filter);
  if(!m) return [];
  return domainActivities(m).map(a => ({ domainName:m.name, color:m.color, icon:m.icon, text:a.text, when:a.when }));
}

function dayPickPanelHTML(dayKey){
  const filters = WEEK_PICK_FILTERS();
  const pool = weekPickPool(weekExpandedFilter);
  return `
    <div class="day-pick-panel">
      <div class="chip-row" data-week-filters>
        ${filters.map(f => `<button class="chip-btn ${weekExpandedFilter===f.id?'active':''}" data-week-filter="${f.id}">${f.label}</button>`).join('')}
      </div>
      <div class="day-pick-grid">
        ${pool.length ? pool.map(a => `
          <button class="pick-card" data-pick-domain="${a.domainName}" data-pick-text="${a.text.replace(/"/g,'&quot;')}">
            <span class="pick-icon" style="color:var(--${a.color});">${ICONS[a.icon] || ''}</span>
            <span class="pick-text">${a.text}</span>
            ${a.when ? `<span class="pick-when">${a.when}</span>` : ''}
          </button>
        `).join('') : '<div class="day-empty">这个分类还没有活动</div>'}
      </div>
    </div>
  `;
}

function dayCardHTML(d, todayIdx){
  const items = state.weekPlan[d.key] || [];
  const expanded = weekExpandedDay === d.key;
  return `
    <div class="day-card ${d.key===todayIdx?'today':''}" id="day-${d.key}">
      <div class="day-card-head">
        <h3>${d.label}${d.key===todayIdx?' · 今天':''}</h3>
        <button class="add-toggle" data-toggle-day="${d.key}">${expanded ? '收起' : '+ 添加'}</button>
      </div>
      <div class="day-items">
        ${items.length ? items.map((it,i)=>`<div class="day-item"><span>${it.domain} · ${it.text}</span><button data-day="${d.key}" data-idx="${i}">×</button></div>`).join('') : '<div class="day-empty">还没安排</div>'}
      </div>
      ${expanded ? dayPickPanelHTML(d.key) : ''}
    </div>
  `;
}

function renderWeek(){
  const grid = document.getElementById('weekGrid');
  const todayIdx = WEEKDAY_TO_KEY[new Date().getDay()];
  grid.innerHTML = DAYS.map(d => dayCardHTML(d, todayIdx)).join('');

  grid.querySelectorAll('button[data-day]').forEach(b=>{
    b.addEventListener('click', ()=>{ state.weekPlan[b.dataset.day].splice(Number(b.dataset.idx),1); scheduleSave(); renderWeek(); });
  });
  grid.querySelectorAll('[data-toggle-day]').forEach(b=>{
    b.addEventListener('click', ()=>{
      const key = b.dataset.toggleDay;
      weekExpandedDay = weekExpandedDay === key ? null : key;
      weekExpandedFilter = 'all';
      renderWeek();
    });
  });
  grid.querySelectorAll('[data-week-filter]').forEach(b=>{
    b.addEventListener('click', ()=>{ weekExpandedFilter = b.dataset.weekFilter; renderWeek(); });
  });
  grid.querySelectorAll('[data-pick-domain]').forEach(b=>{
    b.addEventListener('click', ()=>{
      const day = weekExpandedDay;
      state.weekPlan[day] = state.weekPlan[day] || [];
      state.weekPlan[day].push({ domain:b.dataset.pickDomain, text:b.dataset.pickText });
      scheduleSave();
      renderWeek();
      document.getElementById('day-'+day).scrollIntoView({ behavior:'smooth', block:'start' });
    });
  });
}

/* ---------- 养育原则 ---------- */
/* 每一条都是你自己的，内置的那些只是起个头，全部可删 */
function principleListHTML(items, markColor, markIcon){
  return items.map((b,i) => `
    <li><span class="mark" style="color:var(--${markColor});">${ICONS[markIcon]}</span><span style="flex:1;">${b}</span>
      <button class="del-btn" title="删掉这条" data-del-item="${i}">${ICONS.cross}</button>
    </li>`).join('');
}

function renderPrinciples(){
  const el = document.getElementById('principlesContent');
  el.innerHTML = `
    <div class="principle-block">
      <h3>我们的坚持</h3>
      <div class="view-sub" style="margin:-4px 0 10px;">这是我自己的想法，不同意的直接删掉，换成你的</div>
      <ul data-list="beliefs">${principleListHTML(state.beliefs, 'grass', 'check')}</ul>
      <div class="add-row inline"><input type="text" placeholder="加一条你自己的坚持..." data-add="beliefs" /><button data-save="beliefs">添加</button></div>
    </div>
    <div class="principle-block avoid">
      <h3>不做的事</h3>
      <ul data-list="avoid">${principleListHTML(state.avoid, 'coral', 'cross')}</ul>
      <div class="add-row inline"><input type="text" placeholder="加一条你自己不想做的事..." data-add="avoid" /><button data-save="avoid">添加</button></div>
    </div>
    <div class="principle-block scripts">
      <h3>情景话术</h3>
      <div class="view-sub" style="margin:-4px 0 10px;">遇到这些场景，可以试试这样说 · 也可以改成你自己的说法</div>
      <div id="scriptsList"></div>
      <div class="script-add">
        <input type="text" placeholder="场景，比如：宝宝不肯午睡" data-script-scenario />
        <textarea placeholder="可以怎么说..." data-script-text></textarea>
        <button data-script-save>添加</button>
      </div>
    </div>
  `;

  function bindListEdits(key){
    el.querySelector(`[data-save="${key}"]`).addEventListener('click', ()=>{
      const input = el.querySelector(`[data-add="${key}"]`);
      const text = input.value.trim();
      if(!text) return;
      state[key].push(text);
      scheduleSave();
      input.value = '';
      renderPrinciples();
    });
    el.querySelectorAll(`[data-list="${key}"] [data-del-item]`).forEach(btn=>{
      btn.addEventListener('click', ()=>{
        state[key].splice(Number(btn.dataset.delItem), 1);
        scheduleSave();
        renderPrinciples();
      });
    });
  }
  bindListEdits('beliefs');
  bindListEdits('avoid');

  renderScripts();
  el.querySelector('[data-script-save]').addEventListener('click', ()=>{
    const scenario = el.querySelector('[data-script-scenario]').value.trim();
    const script = el.querySelector('[data-script-text]').value.trim();
    if(!scenario || !script) return;
    state.scripts.push({ scenario, script });
    scheduleSave();
    el.querySelector('[data-script-scenario]').value = '';
    el.querySelector('[data-script-text]').value = '';
    renderScripts();
  });
}

function renderScripts(){
  const listEl = document.getElementById('scriptsList');
  listEl.innerHTML = state.scripts.map((s,i) => `
    <div class="script-card">
      <div class="script-head">
        <strong>${s.scenario}</strong>
        <button class="del-btn" title="删掉这条" data-del-script="${i}">${ICONS.cross}</button>
      </div>
      <p>${s.script}</p>
    </div>
  `).join('');
  listEl.querySelectorAll('[data-del-script]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      state.scripts.splice(Number(btn.dataset.delScript), 1);
      scheduleSave();
      renderScripts();
    });
  });
}

/* ---------- 玩具/绘本记录（管理页，灵感墙里的玩具卡片只负责推荐） ---------- */
function toyCardsHTML(arr){
  return arr.map((t,i) => `
    <div class="toy-card">
      <div class="toy-card-name">${t.name}</div>
      ${t.detail ? `<div class="toy-card-detail">${t.detail}</div>` : ''}
      <button class="del-btn" title="删除" data-del="${i}">${ICONS.cross}</button>
    </div>
  `).join('');
}

function renderToysView(){
  const el = document.getElementById('toysContent');
  el.innerHTML = `
    <div class="principle-block">
      <h3>玩具</h3>
      <div class="view-sub" style="margin:-4px 0 10px;">在「灵感墙」里随机轮流推荐，好久没登场的优先</div>
      <div class="quick-add">
        <input type="text" placeholder="玩具名称，比如 积木套塔" data-toy-input />
        <textarea placeholder="怎么玩、什么时候适合拿出来...（选填）" data-toy-detail></textarea>
        <button data-toy-add>添加</button>
      </div>
      <div class="toy-grid" style="margin-top:14px;" data-toy-list></div>
    </div>
    <div class="principle-block" style="margin-top:14px;">
      <h3>绘本</h3>
      <div class="view-sub" style="margin:-4px 0 10px;">记个数，家里有哪些绘本</div>
      <div class="quick-add">
        <input type="text" placeholder="绘本名称，比如 猜猜我有多爱你" data-book-input />
        <textarea placeholder="讲了什么、宝宝喜欢哪部分...（选填）" data-book-detail></textarea>
        <button data-book-add>添加</button>
      </div>
      <div class="toy-grid" style="margin-top:14px;" data-book-list></div>
    </div>
  `;

  function renderCat(key, listSel, emptyText){
    const listEl = el.querySelector(listSel);
    const arr = state[key];
    if(!arr.length){
      listEl.innerHTML = `<div class="toy-empty">${emptyText}</div>`;
      return;
    }
    listEl.innerHTML = toyCardsHTML(arr);
    listEl.querySelectorAll('[data-del]').forEach(b=>{
      b.addEventListener('click', ()=>{
        arr.splice(Number(b.dataset.del),1);
        scheduleSave();
        renderCat(key, listSel, emptyText);
      });
    });
  }
  renderCat('toys', '[data-toy-list]', '还没有添加玩具，加几个开始轮换吧～');
  renderCat('books', '[data-book-list]', '还没有添加绘本，加几本吧～');

  el.querySelector('[data-toy-add]').addEventListener('click', ()=>{
    const input = el.querySelector('[data-toy-input]');
    const detailInput = el.querySelector('[data-toy-detail]');
    const name = input.value.trim();
    if(!name) return;
    const detail = detailInput.value.trim();
    const toy = { name, lastShown:0 };
    if(detail) toy.detail = detail;
    state.toys.push(toy);
    input.value = '';
    detailInput.value = '';
    scheduleSave();
    renderCat('toys', '[data-toy-list]', '还没有添加玩具，加几个开始轮换吧～');
  });

  el.querySelector('[data-book-add]').addEventListener('click', ()=>{
    const input = el.querySelector('[data-book-input]');
    const detailInput = el.querySelector('[data-book-detail]');
    const name = input.value.trim();
    if(!name) return;
    const detail = detailInput.value.trim();
    const book = { name };
    if(detail) book.detail = detail;
    state.books.push(book);
    input.value = '';
    detailInput.value = '';
    scheduleSave();
    renderCat('books', '[data-book-list]', '还没有添加绘本，加几本吧～');
  });
}

/* ---------- 空间布置 ---------- */
function renderSafety(){
  const el = document.getElementById('safetyContent');
  el.innerHTML = `
    <div class="safety-block">
      <h3>安全检查清单</h3>
      <div class="view-sub" style="margin:-4px 0 10px;">在家一次性检查一遍</div>
      ${content.safetyChecklist.map((item,i) => `
        <div class="safety-item">
          <input type="checkbox" id="safety-${i}" ${state.safetyChecklist[i] ? 'checked' : ''}/>
          <label for="safety-${i}" class="${state.safetyChecklist[i] ? 'checked' : ''}">${item}</label>
        </div>
      `).join('')}
    </div>
    <div class="principle-block" style="margin-top:14px;">
      <h3>日常提醒</h3>
      <ul>${content.safetyReminders.map(r => `<li><span class="mark" style="color:var(--tangerine);">${ICONS.check}</span>${r}</li>`).join('')}</ul>
    </div>
    <div class="milestone-box" style="margin-top:14px;">
      <h4>遇到意外，先看这个</h4>
      <div class="module-note" style="margin:6px 0 10px;">这些是基础参考，不能替代正式的婴幼儿急救培训和医生诊断。情况紧急直接拨打急救电话或去医院。</div>
      <div class="firstaid-list">
        ${content.firstAidCards.map(c => `
          <div class="activity-item firstaid-card">
            <div class="activity-line"><span class="activity-text"><span class="act-title">${c.title}</span></span></div>
            <div class="activity-detail">
              <ul>${c.steps.map(s => `<li>${s}</li>`).join('')}</ul>
              ${c.warn ? `<div class="firstaid-warn">⚠️ ${c.warn}</div>` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  el.querySelectorAll('.safety-item input').forEach((cb,i)=>{
    cb.addEventListener('change', ()=>{
      state.safetyChecklist[i] = cb.checked;
      cb.nextElementSibling.classList.toggle('checked', cb.checked);
      scheduleSave();
    });
  });
  el.querySelectorAll('.firstaid-card').forEach(bindActivityToggle);
}

/* ---------- init ---------- */
function renderAll(){
  setDateLine();
  renderHome();
  renderWall();
  renderToysView();
  renderProgress();
  renderLesson();
  libraryFilter = 'all';
  renderLibraryFilters();
  renderMilestonePicker();
  renderLibraryAdd();
  renderLibraryList();
  renderThemePicker();
  renderThemeDetail();
  renderWeek();
  renderPrinciples();
  renderSafety();
}

loadAll();
