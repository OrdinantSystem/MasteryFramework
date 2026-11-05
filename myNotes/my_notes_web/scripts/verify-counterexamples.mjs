import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {isPrime,factor,qualifies,conditionalState,primeCase,divisibilityCase,sieveState,counterexamplesInWindow,cardState,cardInput,initialCounterValue,validateCounterValue,counterPresets,primeChoices,divisibilityChoices} from '../src/lib/interactive/counterexample-model.ts';
import {caseMarkup,sieveMarkup,cardsMarkup} from '../src/lib/interactive/counterexample-render.ts';
import {counterCopy,counterFeedback} from '../src/lib/reasoning/counterexample-copy.ts';

const primes=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];
for(let n=-12;n<=100;n++)assert.equal(isPrime(n),primes.includes(n),`Prime classification ${n}`);
for(const n of [9,25,49,121])assert.equal(factor(n),Math.sqrt(n),'Include the square-root endpoint');
assert.equal(factor(15),3);assert.equal(factor(35),5);assert.equal(factor(36),2);
for(const value of [NaN,Infinity,1.5,Number.MAX_SAFE_INTEGER+1]){assert.throws(()=>isPrime(value));assert.throws(()=>qualifies(value));}
assert.deepEqual(primeChoices.map(n=>[n,primeCase(n).condition,primeCase(n).conclusion,primeCase(n).counterexample]),[[-9,false,false,false],[1,false,false,false],[3,true,true,false],[4,false,false,false],[9,true,false,true],[15,true,false,true],[21,true,false,true]]);
for(const a of [false,true])for(const b of [false,true]){const s=conditionalState(a,b);assert.equal(s.counterexample,a&&!b);assert.equal(s.implication,!s.counterexample);}
// Negating a finite universal conditional is finding a qualifying failure, including the empty domain.
for(let mask=0;mask<128;mask++){
 const rows=primeChoices.filter((_,i)=>mask&(1<<i)).map(primeCase);
 assert.equal(!rows.every(r=>r.implication),rows.some(r=>r.counterexample));
}
const failures=[9,15,21,25,27,33,35],selected=Array.from({length:17},(_,i)=>3+2*i);
assert.deepEqual(counterexamplesInWindow(),failures);
assert.deepEqual(sieveState(1).filter(r=>r.status==='selected').map(r=>r.n),selected);
assert.deepEqual(sieveState(2).filter(r=>r.status==='prime').map(r=>r.n),[3,5,7,11,13,17,19,23,29,31]);
assert.deepEqual(sieveState(2).filter(r=>r.status==='counterexample').map(r=>r.n),failures);
for(const locale of ['en','de']){
 for(const stage of [0,1,2]){
  const rows=sieveState(stage),markup=sieveMarkup(locale,stage);
  assert.deepEqual(rows.map(r=>r.n),Array.from({length:35},(_,i)=>i+1));
  assert.equal((markup.match(/data-counter-cell=/g)||[]).length,35);
  assert(counterFeedback(locale,'sieve',stage).length>40);
 }
 assert.equal(sieveState(0).filter(r=>r.status==='candidate').length,35);
 assert.equal((sieveMarkup(locale,1).match(/data-counter-status="excluded"/g)||[]).length,18);
 for(const n of primeChoices){assert(!caseMarkup(locale,'prime-detector',n).includes('katex-error'));assert(counterFeedback(locale,'prime-detector',n).length>15);}
 for(let red=0;red<=10;red++){
  const s=cardState(red),markup=cardsMarkup(locale,red);
  assert.equal(s.red+s.blue,10);assert.equal(s.holds,red<=2);
  assert.equal((markup.match(/data-card-color="red"/g)||[]).length,red);
  assert.equal((markup.match(/data-card-color="blue"/g)||[]).length,10-red);
  assert(counterFeedback(locale,'cards',red).includes(`${s.blue} ${s.holds?'≥':'<'} 8`));
  assert.equal(cardInput(String(red)),red);
 }
 for(const n of divisibilityChoices){assert(!caseMarkup(locale,'divisibility',n).includes('katex-error'));assert(counterFeedback(locale,'divisibility',n).length>10);}
 assert.equal(counterFeedback(locale,'divisibility',0),counterCopy[locale].unselected);
}
assert.equal(cardState(2).blue,8);assert.equal(cardState(3).blue,7);assert.equal(cardState(0).holds,true);assert.equal(cardState(10).holds,false);
for(const raw of ['', ' ', 'NaN','Infinity','2.5','-1','11','<script>'])assert.equal(cardInput(raw),null);
for(const n of [-1,11,2.5,Infinity])assert.throws(()=>cardState(n));
for(const stage of [-1,3,NaN])assert.throws(()=>sieveState(stage));
assert.deepEqual(divisibilityChoices.filter(n=>divisibilityCase(n).counterexample),[12]);
assert.equal(divisibilityCase(6).condition,false);assert.equal(divisibilityCase(8).conclusion,true);assert.equal(divisibilityCase(16).conclusion,true);
assert.equal(divisibilityCase(0).implication,true);assert.equal(divisibilityCase(-12).counterexample,true);
for(const preset of counterPresets){validateCounterValue(preset,initialCounterValue(preset));assert.throws(()=>validateCounterValue(preset,Infinity));}
assert.throws(()=>initialCounterValue('unknown'));assert.throws(()=>validateCounterValue('unknown',1));
const first=sieveState(1);sieveState(2);assert.equal(first.find(r=>r.n===9).status,'selected');
const displays=locale=>[...readFileSync(`src/content/lessons/${locale}/reasoning/counterexamples-and-claims.mdx`,'utf8').matchAll(/\$\$([\s\S]*?)\$\$/g)].map(m=>m[1].replace('Bedingung gilt','Condition holds').replace('Folgerung falsch','Conclusion fails').replace(/\s+/g,''));
assert.deepEqual(displays('de'),displays('en'));assert.equal(displays('en').length,9);
console.log('Verified qualifying failures, primality and square-root endpoints, finite negation/empty domains, all sieve stages, exact ten-card thresholds, transfer counterexamples, localized rendering and nine matching EN/DE displays.');
