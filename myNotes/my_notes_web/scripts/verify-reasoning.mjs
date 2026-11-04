import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {reasoningChoices,reasoningState} from '../src/lib/interactive/reasoning-model.ts';
import {comparisonCopy,volumeCopy} from '../src/lib/reasoning/copy.ts';
import {sourceBeforeReasoningExtension} from './reasoning-extension.mjs';
import {finiteSets,counterSets,peopleSets,shoePairs,matching,isBijection,additionInputs,addNaturals} from '../src/lib/reasoning/examples.ts';
import {structureNodes} from '../src/lib/reasoning/structure.ts';
import katex from 'katex';
import {mathOptions} from '../src/lib/math-options.mjs';
for(const choice of reasoningChoices.appearance)assert.equal(reasoningState('appearance',choice).count,2,'Changing appearance preserves cardinality');
assert.equal(reasoningState('units','shoes').count,2);
assert.equal(reasoningState('units','pairs').count,1);
assert.equal(reasoningState('units','shoes').count,2*reasoningState('units','pairs').count,'One matched pair consists of two shoes');
const before=reasoningState('water','separate'),after=reasoningState('water','merged');
assert.equal(before.count,2);assert.equal(after.count,1);
assert.equal(before.volumeHundredths,10);assert.equal(after.volumeHundredths,10,'Coalescence conserves 0.10 mL under the no-loss model');
for(const preset of Object.keys(reasoningChoices)){
 assert.throws(()=>reasoningState(preset,'not-a-state'));
 for(const locale of ['en','de']){
  const copy=comparisonCopy(locale,preset);
  for(const [i,choice] of reasoningChoices[preset].entries()){
   assert.ok(copy.results[i].includes(String(reasoningState(preset,choice).count)));
   assert.ok(copy.options[i]&&copy.descriptions[i]&&copy.details[i]);
   assert.doesNotMatch(copy.results[i]+copy.details[i],/\{\w+\}/);
  }
 }
}
assert.match(volumeCopy('en'),/0\.10/);assert.match(volumeCopy('de'),/0,10/);
const extension=JSON.parse(readFileSync('../docs/reasoning-shared-extension.json','utf8'));
for(const path of Object.keys(extension.sources)){
 const current=readFileSync(path,'utf8');
 sourceBeforeReasoningExtension(path,current);
 assert.throws(()=>sourceBeforeReasoningExtension(path,current+'\n// unrecorded change'),/extension changed/);
}
console.log('Verified invariant counts, shoe/pair units, conserved water volume, finite input rejection, EN/DE feedback and exact preservation of earlier shared presentation sources.');

const singleton=finiteSets(counterSets.a,counterSets.b),people=finiteSets(peopleSets.a,peopleSets.b);
assert.deepEqual(singleton.union,['a','b']);assert.equal(singleton.disjoint,true);
assert.deepEqual(people.intersection,['Sam']);assert.equal(people.union.length,3);
assert.equal(people.disjoint,false);
// Exhaust the two-set inclusion/exclusion rule over a four-element universe.
const subsets=Array.from({length:16},(_,mask)=>[0,1,2,3].filter(n=>mask&(1<<n)));
for(const a of subsets)for(const b of subsets){const s=finiteSets(a,b);assert.equal(s.union.length,s.left.length+s.right.length-s.intersection.length);}
assert.equal(finiteSets(['a','a'],['a']).union.length,1,'Repeated listing does not create a new set element');
assert.equal(finiteSets([],[]).union.length,0);
assert.ok(isBijection(matching.from,matching.to,matching.arrows));
assert.ok(isBijection([],[],[]));
assert.ok(!isBijection(matching.from,matching.to,[[0,0],[1,0],[2,2]]),'Two elements sharing a partner is not a bijection');
assert.ok(!isBijection(matching.from,matching.to,[[0,0],[1,1]]),'Every element needs a partner');
assert.ok(!isBijection(['a'],['b'],[[0,1]]));
assert.equal(shoePairs.length,2);assert.equal(new Set(shoePairs.flat()).size,4);
assert.deepEqual(additionInputs.map(([a,b])=>addNaturals(a,b)),[2,5,4]);
assert.equal(addNaturals(2,0),addNaturals(1,1),'A function can assign the same output to different inputs');
for(const invalid of [-1,0.5,NaN,Infinity])assert.throws(()=>addNaturals(invalid,1));
assert.throws(()=>addNaturals(Number.MAX_SAFE_INTEGER,1));
for(const locale of ['en','de'])for(const node of structureNodes[locale])katex.renderToString(node.tex,mathOptions);
console.log('Verified 256 finite union/intersection cases, singleton/overlap counts, complete and failed matchings, nested units, addition inputs and the localized five-step reasoning chain.');
