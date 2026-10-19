const { chromium, webkit } = require('playwright');
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '../dist');
const mime = { '.html':'text/html; charset=utf-8', '.css':'text/css', '.js':'text/javascript', '.png':'image/png', '.svg':'image/svg+xml', '.webp':'image/webp' };
const server = http.createServer((req,res) => {
  const name = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  const file = path.resolve(root, '.' + (name === '/' ? '/index.html' : name));
  if (!file.startsWith(root + path.sep)) {res.writeHead(403).end();return;}
  fs.readFile(file,(error,data)=>{if(error){res.writeHead(404).end();return;}res.setHeader('Content-Type',mime[path.extname(file)]||'application/octet-stream');res.end(data);});
});
(async()=>{
  await new Promise(resolve=>server.listen(8080,'127.0.0.1',resolve));
  fs.mkdirSync('responsive-screenshots',{recursive:true});
  for (const [name,engine] of Object.entries({chromium,webkit})) {
    const browser=await engine.launch();
    try {
      for (const width of [320,375,390,430,734,768,1024,1440]) {
        for (const lang of ['vi','en']) {
          const page=await browser.newPage({viewport:{width,height:844},deviceScaleFactor:1});
          await page.goto(`http://127.0.0.1:8080/?lang=${lang}`,{waitUntil:'networkidle'});
          assert.equal(await page.locator('html').getAttribute('lang'),lang);
          const metrics=await page.evaluate(()=>({viewport:document.documentElement.clientWidth,page:document.documentElement.scrollWidth,cards:[...document.querySelectorAll('.grid>.grid-item')].map(el=>el.getBoundingClientRect().width)}));
          assert(metrics.page<=metrics.viewport+1,`${name} ${lang} ${width}: page overflow ${JSON.stringify(metrics)}`);
          assert(metrics.cards.every(w=>w>=100),`${name} ${lang} ${width}: collapsed card`);
          if(width<=734){
            const columns=await page.locator('.grid').first().evaluate(el=>getComputedStyle(el).gridTemplateColumns.split(' ').length);
            assert.equal(columns,1,`${name} ${width}: mobile must have one column`);
            await page.locator('.menu-button').click();
            assert(await page.locator('.global-links').isVisible());
            await page.locator('.menu-button').click();
            await page.locator('#language-select').selectOption(lang==='vi'?'en':'vi');
            assert.equal(await page.locator('html').getAttribute('lang'),lang==='vi'?'en':'vi');
            await page.locator('#language-select').selectOption(lang);
          }
          if(width===390&&lang==='vi'){
            await page.screenshot({path:`responsive-screenshots/${name}-390-hero.png`});
            await page.locator('#macos-apps').scrollIntoViewIfNeeded();
            await page.screenshot({path:`responsive-screenshots/${name}-390-macos.png`});
          }
          console.log(`PASS ${name} ${width}px ${lang}`);
          await page.close();
        }
      }
    } finally {await browser.close();}
  }
})().catch(e=>{console.error(e);process.exitCode=1;}).finally(()=>server.close());
