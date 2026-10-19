const tr = value => window.siteI18n?.translate(value) || value;
const menu=document.querySelector('.menu-button'),links=document.querySelector('.global-links');
menu.addEventListener('click',()=>{let open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',tr(open?'Close navigation':'Open navigation'));menu.textContent=open?'✕':'☰'});
const panel=document.querySelector('.search-panel'),input=document.querySelector('#resource-search'),status=document.querySelector('.search-status');
const searchButton=document.querySelector('.search-button');
function closeSearch(){panel.hidden=true;input.value='';filter('');searchButton.focus()}
searchButton.addEventListener('click',()=>{panel.hidden=!panel.hidden;if(!panel.hidden){input.focus();links.classList.remove('open');menu.setAttribute('aria-expanded','false')}});
document.querySelector('.close-search').addEventListener('click',closeSearch);
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!panel.hidden)closeSearch()});
const cards=[...document.querySelectorAll('.section-download .grid-item')];
const originalText=new Map(cards.map(card=>[card,card.textContent+' '+(card.closest('section').querySelector('h2')?.textContent||'')]));
const searchable=value=>value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d');
function filter(value){const q=searchable(value).trim();let count=0;cards.forEach(card=>{const section=card.closest('section');const text=card.textContent+' '+(section.querySelector('h2')?.textContent||'')+' '+originalText.get(card);const match=!q||searchable(text).includes(q);card.classList.toggle('no-match',!match);if(match)count++});document.querySelectorAll('.section-download').forEach(s=>{const list=[...s.querySelectorAll('.grid-item')];s.classList.toggle('search-empty',!!q&&list.length>0&&list.every(c=>c.classList.contains('no-match')))});status.textContent=q?(window.siteI18n?.language==='vi'?`${count} tài nguyên phù hợp. Nhấn Enter để xem kết quả.`:`${count} matching resource${count===1?'':'s'}. Press Enter to explore results.`):''}
input.addEventListener('input',()=>filter(input.value));document.querySelector('[role="search"]').addEventListener('submit',e=>{e.preventDefault();panel.hidden=true;document.querySelector('.section-download:not(.search-empty)')?.scrollIntoView()});
const topButton=document.querySelector('.back-top');window.addEventListener('scroll',()=>{topButton.hidden=scrollY<600},{passive:true});topButton.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
document.querySelectorAll('.download-image').forEach(img=>{const title=img.parentElement.querySelector('h5')?.textContent;img.alt=title?`${title} preview`:'Design resource preview';img.loading='lazy';img.decoding='async'});

document.addEventListener('languagechange',()=>{filter(input.value);menu.setAttribute('aria-label',tr(links.classList.contains('open')?'Close navigation':'Open navigation'));});
