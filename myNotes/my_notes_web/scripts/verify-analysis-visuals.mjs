import {locales} from '../src/lib/i18n.ts';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {visualCoverage,reviewedSummarySource} from './analysis-visual-contract.mjs';
import {candidatePass,quantify,relationSummary,lineResult,sequenceTail,sequenceValue,conditionState} from '../src/lib/interactive/analysis-model.ts';
import {analysisScene,initialAnalysisState,validateAnalysisPresentation} from '../src/lib/interactive/analysis-scenes.ts';
let additions=0;
for(const row of visualCoverage.files){
  reviewedSummarySource(await readFile(row.path,'utf8'),row.path);
  assert.ok(row.additions.length>0||row.removed_additions?.length>0);
  for(const removed of row.removed_additions??[]){
    assert.ok(removed.reason&&removed.block.includes('<Interactive kind="conditions"'),'Only owner-requested redundant condition tiles are retired');
    assert.ok(!row.additions.some(addition=>addition.id===removed.id),'Retired additions cannot remain active');
    assert.ok(!(await readFile(row.path,'utf8')).includes(removed.block),'Retired condition tiles must be absent');
  }
  additions+=row.additions.length;
}
// Empty universality is not existence or uniqueness.
assert.deepEqual(quantify([]),{count:0,all:true,some:false,unique:false});
assert.equal(candidatePass('equation',7),true);assert.equal(candidatePass('equation',2),false);
assert.deepEqual([4,5,6,7,8].filter(n=>candidatePass('witnesses',n)),[5,6,7]);
for(const [rows,cols,separate,common] of [[0,0,true,false],[0,2,true,true],[2,0,false,false]]) {
  const r=relationSummary(Array.from({length:rows},()=>Array(cols).fill(false)),cols);
  assert.equal(r.separate,separate);assert.equal(r.common,common);
}
// Enumerate all complete 2×3 relations: shared ⇒ separate; the stated negations are exact.
for(let mask=0;mask<64;mask++){
  const cells=Array.from({length:2},(_,i)=>Array.from({length:3},(_,j)=>Boolean(mask&(1<<(i*3+j))))),r=relationSummary(cells,3);
  assert.ok(!r.common||r.separate);
  assert.equal(!r.separate,cells.some(row=>row.every(value=>!value)));
  assert.equal(!r.common,[0,1,2].every(j=>cells.some(row=>!row[j])));
}
assert.deepEqual(relationSummary([[true,false],[false,true]],2).shared,[false,false]);
for(const [x,pass] of [[0,false],[.25,true],[2,true],[2.25,false]])assert.equal(lineResult('bounds',x).pass,pass);
for(const x of [-2,0,1,2,8])assert.notEqual(lineResult('complement',x).left,lineResult('complement',x).right);
for(const [x,pass] of [[2,false],[3,true],[5,true],[5.25,false]])assert.equal(lineResult('counterexample',x).pass,pass);
assert.equal(lineResult('distance',2.5,.5).pass,false);assert.equal(lineResult('distance',3.5,.5).pass,false);assert.equal(lineResult('distance',3,.5).pass,true);
assert.deepEqual(sequenceTail('reciprocal',0,.1,10),{all:false,bad:10});
assert.deepEqual(sequenceTail('reciprocal',0,.1,11),{all:true,bad:null});
assert.deepEqual(sequenceTail('reciprocal',.2,.1,10),{all:false,bad:10});
assert.deepEqual(sequenceTail('device',3,.1,2),{all:false,bad:2});
assert.deepEqual(sequenceTail('device',3,.1,3),{all:true,bad:null});
assert.deepEqual(sequenceTail('zero',1,1,1000),{all:false,bad:1000});
assert.deepEqual(sequenceTail('zero',0,.1,1),{all:true,bad:null});
for(const preset of ['reciprocal','device','alternating','zero'])for(const target of [-1,0,.25,1,3])for(const epsilon of [.1,.5,1])for(const threshold of [1,2,3,10,24,1000]){
  const result=sequenceTail(preset,target,epsilon,threshold);
  if(result.all)for(let n=threshold;n<threshold+300;n++)assert.ok(Math.abs(sequenceValue(preset,n)-target)<epsilon,'Certified rule must admit every tested tail index');
  else{assert.ok(result.bad>=threshold);assert.ok(Math.abs(sequenceValue(preset,result.bad)-target)>=epsilon,'The returned counterexample must really fail at or after N');}
}
for(let n=1;n<100;n++)for(const target of [-100,-1,0,1,100])assert.equal(sequenceTail('alternating',target,.5,n).all,false);
for(const p of [false,true])for(const q of [false,true]){
  const r=conditionState('demorgan',p,q);assert.equal(r.a,r.b);
  assert.equal(conditionState('construction',p,q).result,p&&!q);
}
for(const args of [['reciprocal',0,0,1],['zero',Infinity,.5,1],['device',0,.5,0]])assert.throws(()=>sequenceTail(...args));
for(const locale of locales){
 const input=analysisScene('candidates','equation',initialAnalysisState('candidates','equation'),locale,'input');
 assert.ok(!input.equation.includes('\\forall')&&!input.equation.includes('\\exists'),'Input introduction must not show quantified verdicts');
 const state=initialAnalysisState('quantifiers','keys');
 const witnesses=analysisScene('quantifiers','keys',state,locale,'witnesses');
 assert.ok(witnesses.equation.includes('\\forall')&&!witnesses.equation.includes('\\neg'),'Witness presentation contains just positive claims');
 state.people=0;state.keys=0;assert.ok(analysisScene('quantifiers','keys',state,locale,'witnesses').equation);
 const terms=initialAnalysisState('sequence','device');
 const first=analysisScene('sequence','device',terms,locale,'terms');
 terms.epsilon=.1;terms.target=-999;
 assert.deepEqual(analysisScene('sequence','device',terms,locale,'terms'),first,'Term picture/readout must not depend on tolerance or target');
 assert.ok(!first.graphic.includes('<rect')&&!first.equation.includes('\\varepsilon'),'Term introduction has no tolerance band or equation');
 const tail=initialAnalysisState('sequence','reciprocal');
 assert.ok(analysisScene('sequence','reciprocal',tail,locale,'tail').equation.includes('\\ge'));
 tail.threshold=3;assert.ok(analysisScene('sequence','reciprocal',tail,locale,'tail').equation.includes('\\forall'));
 tail.target=1;assert.throws(()=>analysisScene('sequence','reciprocal',tail,locale,'tail'));
}
for(const [kind,preset,presentation] of [['candidates','positive','input'],['sequence','alternating','terms'],['sequence','device','tail'],['quantifiers','nested','witnesses'],['candidates','equation','unknown']])assert.throws(()=>validateAnalysisPresentation(kind,preset,presentation));
console.log(`Verified preserved historical visual edition (${additions} additions), full/default models and four focused EN/DE presentations, empty domains, strict endpoints and exact whole-tail witnesses.`);
