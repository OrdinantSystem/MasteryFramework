import assert from 'node:assert/strict';
import {assignments,isValid,shapeCase,argumentGrid,validateValidityChoice,validityPresets} from '../src/lib/interactive/validity-model.ts';
import {validityCopy} from '../src/lib/reasoning/validity-copy.ts';
assert.equal(isValid('forward'),true);
assert.equal(isValid('reverse'),false);
const countermodels=assignments('reverse').filter(r=>r.premises.every(Boolean)&&!r.conclusion);
assert.deepEqual(countermodels.map(({p,q})=>[p,q]),[[false,true]]);
assert.deepEqual(shapeCase('S').premises,[true,true]);
assert.equal(shapeCase('S').conclusion,true);
assert.deepEqual(shapeCase('R').premises,[true,true]);
assert.equal(shapeCase('R').conclusion,false);
assert.deepEqual(argumentGrid.map(r=>{const c=shapeCase(r.shape,r.form,r.falsePremise);return [c.valid,c.conclusion,c.sound];}),[[true,true,true],[true,false,false],[false,true,false],[false,false,false]]);
assert.throws(()=>shapeCase('X'));
assert.throws(()=>isValid('unknown'));
for(const preset of validityPresets){
 for(const value of [-1,NaN,Infinity,0.5,3])assert.throws(()=>validateValidityChoice(preset,value));
 assert.equal(validateValidityChoice(preset,0),0);
 assert.equal(validateValidityChoice(preset,1),1);
}
assert.equal(validateValidityChoice('opening',2),2);
for(const c of Object.values(validityCopy)){
 assert.equal(c.gridLabels.length,4);assert.equal(c.gridArguments.length,4);
 assert.equal(c.openingFeedback.length,3);assert.equal(c.warningFeedback.length,2);
}
console.log('Verified exhaustive forward/reverse inference, unique countermodel, all four validity/truth cases, soundness, and bounded choices.');
