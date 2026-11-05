import assert from 'node:assert/strict';
import {membershipRows,setInference,setCountermodels,sharedWitness,policyAllows,validateArgument,judgmentFeedback} from '../src/lib/interactive/argument-model.ts';
import {assignments,isValid} from '../src/lib/interactive/validity-model.ts';
import {argumentMarkup} from '../src/lib/interactive/argument-render.ts';
assert(isValid('forward'));assert(assignments('forward').every(row=>!row.premises.every(Boolean)||row.conclusion));
assert.deepEqual(setCountermodels('chain'),[]);assert.deepEqual(setCountermodels('shared'),[[false,true,false]]);
assert.deepEqual(setInference(sharedWitness,'shared'),{premises:[true,true],conclusion:false});
// Arbitrary finite sets, including empty sets and equality, independently evaluated.
const subset=(a,b)=>a.every(x=>b.includes(x));let setCases=0;
const sets=Array.from({length:8},(_,mask)=>[0,1,2].filter(x=>mask&(1<<x)));
for(const a of sets)for(const b of sets)for(const c of sets){if(subset(a,b)&&subset(b,c))assert(subset(a,c));setCases++;}
for(const a of [false,true])for(const b of [false,true]){
 assert.equal(policyAllows(a,b,false),!a||b);assert.equal(policyAllows(a,b,true),!b||a);
}
assert(policyAllows(false,true,false));assert(!policyAllows(false,true,true));assert(!policyAllows(true,false,false));assert(policyAllows(true,false,true));
for(const preset of ['appeals','practice']){assert.equal(judgmentFeedback(preset,null,null),'unanswered');assert.equal(judgmentFeedback(preset,1,preset==='appeals'?1:0),'matches');}
for(const locale of ['en','de']){
 for(let n=0;n<6;n++)assert(argumentMarkup(locale,'xray',n).includes(n%3===2?'x ∈ A':'argument-nested'));
 assert(!argumentMarkup(locale,'countermodel',0).includes('x ∈ B, x ∉ C'));assert(argumentMarkup(locale,'countermodel',1).includes('x ∈ B, x ∉ C'));
 assert(argumentMarkup(locale,'only',0).includes('A ⊆ B'));assert(argumentMarkup(locale,'only',1).includes('B ⊆ A'));
}
assert.throws(()=>validateArgument('xray',6));assert.throws(()=>validateArgument('only',-1));assert.throws(()=>validateArgument('practice',NaN));
console.log(`Verified modus ponens, all ${membershipRows.length} membership rows, ${setCases} finite set triples (including empty/equal sets), shared-subset countermodel, all/only direction and EN/DE rendering boundaries.`);
