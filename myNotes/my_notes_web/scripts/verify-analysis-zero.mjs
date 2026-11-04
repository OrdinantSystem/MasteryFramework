import {locales} from '../src/lib/i18n.ts';
import assert from 'node:assert/strict';
import {readFile,readdir} from 'node:fs/promises';

// These checks establish inventory, finite semantic invariants and boundary examples.
// They do not certify the mathematical proofs, translation quality or learner mastery.
const coverage=JSON.parse(await readFile('../docs/analysis-zero-coverage.json','utf8'));
assert.equal(coverage.status,'integrated');
assert.equal(coverage.review.status,'baseline-agent-review-complete','Record the independent review gate separately from integration');
assert.equal(coverage.lessons.length,52,'Every authored Analysis 0 lesson has a disposition');
assert.equal(coverage.concepts.length,28,'Every linked companion concept has a disposition');
assert.equal(new Set(coverage.lessons.map(item=>item.source)).size,52);
assert.equal(new Set(coverage.concepts.map(item=>item.id)).size,28);
const targets=new Set();
for(const item of [...coverage.lessons,...coverage.concepts]){
 assert.ok(item.targets.length>0,`No destination: ${item.source}`);
 assert.match(item.source_sha256,/^[a-f0-9]{64}$/,'Record the preserved input snapshot, not a private original in public output');
 assert.ok(item.targets.every(key=>/^[a-z0-9-]+$/.test(key)));
 item.targets.forEach(key=>targets.add(key));
}
const inventories=[];
for(const locale of locales){
 const root=`src/content/lessons/${locale}/analysis`;
 const keys=(await readdir(root)).filter(name=>name.endsWith('.mdx')).map(name=>name.slice(0,-4)).sort();
 inventories.push(keys);
 for(const key of coverage.preserved_existing_keys)assert.ok(keys.includes(key),`Preserve ${locale}/${key}`);
 for(const key of targets){
  assert.ok(keys.includes(key),`Missing mapped destination ${locale}/${key}`);
  const source=await readFile(`${root}/${key}.mdx`,'utf8');
  assert.match(source,/analysis-zero/,`Mapped page identifies the migrated source: ${locale}/${key}`);
  assert.ok(!/\b(?:Jean|Isaac)\b|\/home\/ubuntu|obsidian:\/\//.test(source),`No private tutoring or server paths: ${locale}/${key}`);
 }
}
assert.deepEqual(inventories[0],inventories[1]);

const values=[false,true];
for(const a of values)for(const b of values)for(const c of values){
 assert.equal(!(a&&b),!a||!b);assert.equal(!(a||b),!a&&!b);
 assert.equal(!(a&&!b),!a||b);
 assert.equal(!(!a||b),a&&!b,'Negate the whole conditional');
 assert.equal((!a||b)&&(!b||a),a===b,'A biconditional requires both directions');
 assert.equal((a&&b)&&c,a&&(b&&c));
 if(a===b&&b===c)assert.equal(a,c,'Equivalence chains are transitive');
}
// All binary relations on finite domains of size 0–3, including empty domains.
let relations=0;
for(let nx=0;nx<=3;nx++)for(let ny=0;ny<=3;ny++){
 const xs=Array.from({length:nx},(_,i)=>i),ys=Array.from({length:ny},(_,i)=>i);
 for(let mask=0;mask<2**(nx*ny);mask++){
  const p=(x,y)=>Boolean(mask&(1<<(x*ny+y)));
  const separate=xs.every(x=>ys.some(y=>p(x,y)));
  const shared=ys.some(y=>xs.every(x=>p(x,y)));
  assert.equal(!separate,xs.some(x=>ys.every(y=>!p(x,y))));
  assert.equal(!shared,ys.every(y=>xs.some(x=>!p(x,y))));
  assert.ok(!shared||separate,'One common witness implies separate witnesses');
  assert.equal(xs.every(x=>ys.every(y=>p(x,y))),ys.every(y=>xs.every(x=>p(x,y))));
  assert.equal(xs.some(x=>ys.some(y=>p(x,y))),ys.some(y=>xs.some(x=>p(x,y))));
  relations++;
 }
}
assert.equal([0,1].every(x=>[0,1].some(y=>x===y)),true);
assert.equal([0,1].some(y=>[0,1].every(x=>x===y)),false,'Separate witnesses need not give one shared witness');
for(const x of [-2,-1,0,1,2])for(const y of [-2,-1,0,1,2]){
 assert.equal(!(x<y),x>=y);assert.equal(!(x<=y),x>y);
 assert.equal(!(x>y),x<=y);assert.equal(!(x>=y),x<y);
 assert.equal(!(x===y),x!==y);
 for(const epsilon of [0.25,0.5,1,2]){
  assert.equal(!(Math.abs(x-y)<epsilon),Math.abs(x-y)>=epsilon);
  assert.equal(Math.abs(x-y)<epsilon,y-epsilon<x&&x<y+epsilon);
 }
}
for(const threshold of [1,2,3,10,100]){
 const n=Math.max(threshold,3);
 assert.ok(Math.abs(1/n-1)>=0.5,'Convergence to zero does not mean convergence to target one');
 assert.ok(Math.abs(0-1)>=0.5,'A convergent sequence can fail at a different specified target');
}
assert.equal(1/10<0.1,false,'Equality is not strict closeness');
assert.equal(1/11<0.1,true);
console.log(`Verified 52 source dispositions, 28 concept mappings, ${targets.size} destinations in EN/DE, ${relations} finite relation models, and order/convergence boundary examples. Proof and translation review remain separate.`);
