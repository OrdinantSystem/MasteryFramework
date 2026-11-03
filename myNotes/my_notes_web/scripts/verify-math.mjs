import assert from 'node:assert/strict';
import {readFile, readdir} from 'node:fs/promises';
import {renderMathText} from '../src/lib/math-text.ts';
import {formulaTex, operations} from '../src/lib/interactive/logic-model.ts';
import katex from 'katex';
import {mathOptions} from '../src/lib/math-options.mjs';

assert.equal(renderMathText('<img onerror="bad"> & ordinary text'), '&lt;img onerror=&quot;bad&quot;&gt; &amp; ordinary text');
const mixed=renderMathText('Für $A \\Rightarrow B$, $\\neg B$ y $\\mathbb{R}$: <check>.');
assert.equal((mixed.match(/class="katex"/g)||[]).length,3);
assert.ok(mixed.includes('<math') && mixed.includes('&lt;check&gt;'));
assert.ok(renderMathText('$\\colA{A}$').includes('math-a'));
assert.throws(()=>renderMathText('$\\notARealCommand$'));
for(const operation of operations) katex.renderToString(formulaTex[operation],mathOptions);

async function pages(dir){
 const result=[];
 for(const entry of await readdir(dir,{withFileTypes:true})){
  const path=`${dir}/${entry.name}`;
  if(entry.isDirectory())result.push(...await pages(path));
  else if(path.endsWith('.html'))result.push(path);
 }
 return result;
}
let count=0;
for(const path of await pages('dist')){
 const html=await readFile(path,'utf8');
 for(const [,tex] of html.matchAll(/<annotation encoding="application\/x-tex">([\s\S]*?)<\/annotation>/g)){
  assert.ok(!/[\u0000-\u0008\u000b\u000c\u000e-\u001f$]/.test(tex),`${path}: damaged or nested TeX delimiter`);
  count++;
 }
 assert.ok(!html.includes('katex-error'),`${path}: KaTeX error`);
}
for(const locale of ['','de/','es/']){
 const html=await readFile(`dist/${locale}analysis/lessons/logische-verknuepfungen/index.html`,'utf8');
 const table=html.match(/<thead>([\s\S]*?)<\/thead>/)?.[1]??'';
 assert.equal((table.match(/class="katex"/g)||[]).length,7,`${locale}: all seven truth-table headings use KaTeX`);
}
console.log(`Verified escaped component copy, mixed inline math, seven dynamic logic formulas, localized truth-table headings, and ${count} generated TeX annotations.`);
