import assert from 'node:assert/strict';
import {equationPresets,equationPresetNames,equationInput,equationState,squaredSolutions,squarePreimages,squareX,squareY,distanceX} from '../src/lib/interactive/equation-model.ts';
import {equationMarkup,squaredSolutionMarkup} from '../src/lib/interactive/equation-render.ts';
import {equationFeedback,equationHelp} from '../src/lib/reasoning/equation-copy.ts';
import {renderMathText} from '../src/lib/math-text.ts';
for(const preset of equationPresetNames){
 const spec=equationPresets[preset],values='choices' in spec?spec.choices:Array.from({length:Math.round((spec.max-spec.min)/spec.step)+1},(_,i)=>spec.min+i*spec.step);
 for(const value of values){
  assert.equal(equationInput(preset,String(value)),value);
  for(const locale of ['en','de']){
   const html=equationMarkup(locale,preset,value),feedback=equationFeedback(locale,preset,value);
   assert(!html.includes('katex-error'));assert(!html.includes('NaN'));assert(!/\{\w+\}/.test(feedback));
   assert(!renderMathText(feedback).includes('katex-error'));
   if('min' in spec)assert(equationHelp(locale,preset).length>20);
  }
 }
 for(const invalid of ['', 'NaN','Infinity','<script>'])assert.equal(equationInput(preset,invalid),null);
 assert.throws(()=>equationState(preset,Infinity));
}
assert.deepEqual(squaredSolutions.original,[2]);assert.deepEqual(squaredSolutions.transformed,[-2,2]);
for(const x of squaredSolutions.transformed){assert.equal(x*x,4);assert.equal(x===2,x>0);}
assert.deepEqual(squarePreimages(4),[-2,2]);assert.deepEqual(squarePreimages(0),[0]);assert.deepEqual(squarePreimages(9),[-3,3]);
for(const y of [-1,Infinity,NaN])assert.throws(()=>squarePreimages(y));
assert.equal(equationState('stones',3).firstGroup+equationState('stones',3).secondGroup,7);
assert.equal(equationState('stones',2).firstGroup+equationState('stones',2).secondGroup,7);
for(const x of [3,2])assert.equal((equationMarkup('en','stones',x).match(/<circle /g)||[]).length,7);
assert.equal(equationState('balance',0).removed,0);assert.equal(equationState('balance',1).removed,3);
for(const x of [-3,2,5,10]){const s=equationState('identity',x);assert.equal(s.identityTrue,true);assert.equal(s.balanceTrue,x===5);}
assert.deepEqual(equationState('restriction',0).roots,[-2,2]);assert.deepEqual(equationState('restriction',1).roots,[2]);
assert.equal(equationState('division',0).originalProduct,0);assert.equal(equationState('division',0).divisionDefined,false);
assert.equal(equationState('division',2).originalProduct,0);assert.equal(equationState('division',2).divisionDefined,true);
assert.deepEqual(Array.from({length:25},(_,i)=>i/4).filter(x=>equationState('distance',x).distanceTrue),[1,5]);
assert.equal(equationState('distance',3).distance,0);assert.equal(equationState('square',0).opposite,0);
assert.equal(equationState('square',-2).squared,4);assert.equal(equationState('square',2).squared,4);
for(const value of ['2.1','-3.25','3.25'])assert.equal(equationInput('square',value),null);
assert.equal(equationInput('identity','2.5'),null);assert.equal(equationInput('distance','-0.25'),null);
assert(equationMarkup('de','square',1.5).includes('1{,}5'));
assert(equationFeedback('en','square',1.25).includes('1.5625'));
assert(equationFeedback('de','square',1.25).includes('1,5625'));
assert(equationMarkup('en','square',.25).includes('0.0625'));
assert.equal(squareX(0),(squareX(-3)+squareX(3))/2);assert.equal(squareY(4),186);assert.equal(distanceX(3),(distanceX(1)+distanceX(5))/2);
const first=equationState('square',-2);equationState('square',3);assert.equal(first.value,-2);
for(const locale of ['en','de'])assert(!squaredSolutionMarkup(locale).includes('katex-error'));
console.log('Verified equation domains, seven-stone conservation, reversible balance, identity truth, squaring preimages, sign restrictions, division by zero and complete distance solutions in EN/DE.');
