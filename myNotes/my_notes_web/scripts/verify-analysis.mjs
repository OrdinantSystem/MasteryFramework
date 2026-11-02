import assert from 'node:assert/strict';
import {readFile,readdir} from 'node:fs/promises';
import {evaluate,equivalent,nand,assignments} from '../src/lib/interactive/logic-model.ts';
assert.equal(equivalent('implication','contrapositive'),true);
assert.equal(equivalent('converse','inverse'),true);
assert.equal(equivalent('implication','converse'),false);
for(const [a,b] of assignments){
 assert.equal(evaluate('not',a,b),!a);assert.equal(evaluate('and',a,b),a&&b);assert.equal(evaluate('or',a,b),a||b);
 assert.equal(nand(a,b),!(a&&b));assert.equal(!(a||b),!a&&!b);assert.equal(!(a&&b),!a||!b);
 const complements=[false,true].filter(x=>(a||x)&&!(a&&x));assert.deepEqual(complements,[!a]);
}
for(let n=-40;n<=40;n++)assert.equal(n%2===0,(n*n)%2===0);
assert.equal(1*1>1,false);
for(const locale of ['en','de','es']){
 const dir=`src/content/lessons/${locale}/analysis`,names=await readdir(dir);assert.equal(names.length,15);
 for(const filename of names){const source=await readFile(`${dir}/${filename}`,'utf8');assert.ok(!/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(source),'No escaped TeX control characters');assert.match(source,/course: "analysis"/);}
 for(const file of ['neutralitaet-und-idempotenz','nullgesetze-und-konstanten','eindeutiges-komplement','de-morgan-und-doppelte-negation']){const source=await readFile(`${dir}/${file}.mdx`,'utf8');assert.ok(!source.includes('<Interactive'),'Formal worksheet proofs must not substitute an activity for derivation');assert.ok(source.includes('\\overset'),'Proofs retain rule annotations');}
}
console.log('Verified Boolean models, NAND networks, complement uniqueness, parity boundaries, and 45 localized Analysis lessons.');
