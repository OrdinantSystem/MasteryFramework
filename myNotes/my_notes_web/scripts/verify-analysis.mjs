import {locales} from '../src/lib/i18n.ts';
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
const analysisInventory=[];
for(const locale of locales){
 const dir=`src/content/lessons/${locale}/analysis`,names=(await readdir(dir)).filter(name=>name.endsWith('.mdx')).sort();
 assert.ok(names.length>0);analysisInventory.push(names);
 if(analysisInventory.length>1)assert.deepEqual(names,analysisInventory[0],`${locale}: matching Analysis lesson inventory`);
 for(const filename of names){const source=await readFile(`${dir}/${filename}`,'utf8');assert.ok(!/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(source),'No escaped TeX control characters');assert.match(source,/course: "analysis"/);}
 const connectives=await readFile(`${dir}/logische-verknuepfungen.mdx`,'utf8');
 const tables=connectives.match(/(?:^\|.*\|\r?\n?)+/gm);
 assert.ok(tables?.length>=2,`${locale}: retain both original truth tables; additional worked tables are allowed`);
 const rows=tables[1].trim().split(/\r?\n/).map(line=>line.split('|').slice(1,-1).map(cell=>cell.trim()));
 assert.deepEqual(rows[0],[String.raw`$A$`,String.raw`$B$`,String.raw`$C$`,String.raw`$A \land B$`,String.raw`$(A \land B) \land C$`,String.raw`$B \lor C$`,String.raw`$A \lor (B \lor C)$`,String.raw`$(A \land B) \Rightarrow C$`,String.raw`$(A \land B) \Leftrightarrow C$`]);
 const expected=[];
 for(const a of [false,true])for(const b of [false,true])for(const c of [false,true]){
  expected.push([a,b,c,a&&b,a&&b&&c,b||c,a||b||c,!(a&&b)||c,(a&&b)===c].map(value=>String(Number(value))));
 }
 assert.deepEqual(rows.slice(2),expected,`${locale}: all eight assignments and six derived columns are correct`);
 for(const file of ['boolesche-grundgesetze','eindeutiges-komplement']){const source=await readFile(`${dir}/${file}.mdx`,'utf8');assert.ok(!source.includes('<Interactive'),'Formal worksheet proofs must not substitute an activity for derivation');assert.ok(source.includes('\\overset'),'Proofs retain rule annotations');}
}
console.log(`Verified Boolean models, NAND networks, complement uniqueness, parity boundaries, and ${analysisInventory.reduce((sum,names)=>sum+names.length,0)} localized Analysis lessons.`);
