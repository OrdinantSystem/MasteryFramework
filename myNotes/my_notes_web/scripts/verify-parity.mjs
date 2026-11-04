import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import katex from 'katex';
import {mathOptions} from '../src/lib/math-options.mjs';
import {evenSum,oddSum,parityInput,parityState,evenLine,parityExamples,proofFigureKinds} from '../src/lib/interactive/parity-model.ts';
import {parityMarkup,counterPairs} from '../src/lib/interactive/parity-render.ts';
import {parityReadout} from '../src/lib/reasoning/proof-copy.ts';
// Independent integer arithmetic checks cover signed witnesses, not just physical counters.
for(let a=-50;a<=50;a++)for(let b=-50;b<=50;b++){
 const even=evenSum(a,b),odd=oddSum(a,b);
 assert.equal(even.sum,2*a+2*b);assert.equal(even.sum,2*even.pairs);assert(even.sum%2===0);
 assert.equal(odd.sum,(2*a+1)+(2*b+1));assert.equal(odd.sum,2*odd.pairs);assert.equal(odd.pairs,a+b+1);
}
assert.deepEqual(evenSum(-4,3),{a:-4,b:3,x:-8,y:6,pairs:-1,sum:-2});
assert.equal(evenSum(0,0).sum,0);assert.equal(oddSum(2,3).pairs,6);
for(const bad of [NaN,Infinity,.5,Number.MAX_SAFE_INTEGER])assert.throws(()=>evenSum(bad,0));
for(const raw of ['', ' ', '-1','7','.5','NaN','Infinity','<script>'])assert.equal(parityInput(raw),null);
for(let a=0;a<=6;a++)for(let b=0;b<=6;b++)for(const combined of [false,true])for(const locale of ['en','de']){
 const s=parityState(a,b,combined),markup=parityMarkup(locale,a,b,combined),r=parityReadout(locale,a,b,combined);
 assert.equal((markup.match(/<i>/g)||[]).length,2*(a+b));
 assert.equal((markup.match(/class="proof-pair /g)||[]).length,a+b);
 assert(!markup.includes('proof-leftover'));assert(r.feedback.includes(`${2*a} + ${2*b} = ${2*(a+b)}`));
 assert(r.pairs.includes(`${a} + ${b} = ${a+b}`));assert.equal(s.pairs,a+b);
 assert(!katex.renderToString(r.tex,mathOptions).includes('katex-error'));
 if(a+b===0)assert(markup.includes(locale==='de'?'0 Paare':'0 pairs'));
}
for(const args of [[-1,2],[7,0],[NaN,2],[.5,2],[0,Infinity]])assert.throws(()=>parityState(...args));
assert.throws(()=>counterPairs(13,'blue'));assert.throws(()=>counterPairs(1,'<script>'));
assert.equal((counterPairs(3,'blue',true).match(/<i>/g)||[]).length,7);
assert.deepEqual(evenLine.filter(n=>n%2===0),[-6,-4,-2,0,2,4,6]);
assert.deepEqual(parityExamples.map(([a,b])=>a+b),[6,14,32]);
const first=parityState(3,2,false);parityState(6,0,true);assert.equal(first.blue,3);assert.equal(first.combined,false);
const lessons=['en','de'].map(locale=>readFileSync(`src/content/lessons/${locale}/reasoning/pictures-and-proofs.mdx`,'utf8'));
const displays=lessons.map(text=>[...text.matchAll(/\$\$\s*([\s\S]*?)\s*\$\$/g)].map(m=>m[1].replace(/\s/g,'')));
assert.deepEqual(displays[0],displays[1]);
for(const kind of proofFigureKinds)for(const lesson of lessons)assert(lesson.includes(`kind="${kind}"`));
console.log('Verified signed even/odd sum witnesses, zero and invalid states, all 98 pair views in EN/DE, counter conservation, new leftover pair, localized feedback and matching lesson equations.');
