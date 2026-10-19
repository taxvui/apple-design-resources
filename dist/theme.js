(()=>{
  const system=matchMedia('(prefers-color-scheme: dark)');
  const controls=[...document.querySelectorAll('input[name="theme"]')];
  let preference='auto';
  try{const saved=localStorage.getItem('design-resources-theme');if(['light','dark','auto'].includes(saved))preference=saved;}catch{}
  function apply(){
    const mode=preference==='auto'?(system.matches?'dark':'light'):preference;
    document.documentElement.dataset.colorScheme=mode;
    document.documentElement.style.colorScheme=mode;
    document.body.dataset.colorScheme=mode;
    document.body.classList.toggle('theme-dark',mode==='dark');
    controls.forEach(control=>{control.checked=control.value===preference;});
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content',mode==='dark'?'#1d1d1f':'#ffffff');
  }
  controls.forEach(control=>control.addEventListener('change',()=>{preference=control.value;try{localStorage.setItem('design-resources-theme',preference);}catch{}apply();}));
  system.addEventListener('change',()=>{if(preference==='auto')apply();});
  apply();
  const mobile=matchMedia('(max-width: 734px)');
  const groups=[...document.querySelectorAll('.footer-group')];
  function updateDirectory(){groups.forEach(group=>{group.open=!mobile.matches;});}
  groups.forEach(group=>group.querySelector('summary').addEventListener('click',event=>{if(!mobile.matches)event.preventDefault();}));
  mobile.addEventListener('change',updateDirectory);
  updateDirectory();
})();
