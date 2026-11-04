import assert from 'node:assert/strict';
import katex from 'katex';
import {mathOptions} from '../src/lib/math-options.mjs';
import {algebraBounds,algebraInput,algebraState,algebraEquation,chairTotal,partition,chairPuzzle,candlePuzzle,temperature,ticketCost} from '../src/lib/interactive/algebra-model.ts';
import {arrangementScene,groupingScene,heatingPoint,svgText} from '../src/lib/interactive/algebra-scenes.ts';
import {algebraLabCopy} from '../src/lib/reasoning/algebra-copy.ts';
assert.deepEqual(Array.from({length:7},(_,n)=>chairTotal(n)),[2,5,8,11,14,17,20]);
for(let n=algebraBounds.min;n<=algebraBounds.max;n++)for(const preset of ['tables','grouping']){
 const state=algebraState(preset,n),scene=arrangementScene(preset,n),changed=arrangementScene('grouping',n,'changed');
 assert.equal(state.groupedTotal,3*(n+2));assert.equal(state.difference,4);
 assert.equal((scene.markup.match(/<circle /g)||[]).length,3*n+2,'The drawing counts every chair');
 assert.equal((changed.markup.match(/<circle /g)||[]).length,3*(n+2));
 assert.equal((changed.markup.match(/<rect /g)||[]).length,n+2);
 katex.renderToString(algebraEquation(preset,n),mathOptions);
 for(const locale of ['en','de']){
  const copy=algebraLabCopy(locale,preset,n);assert.doesNotMatch(copy.feedback+copy.originalDescription+copy.changedDescription,/\{\w+\}/);
  assert.ok(copy.feedback.includes(String(state.total)));
 }
}
for(const raw of ['', ' ', '-1','2.5','7','NaN','Infinity'])assert.equal(algebraInput(raw),null);
assert.equal(algebraInput('0'),0);assert.equal(algebraInput('6'),6);
for(const n of [-1,0.5,NaN,Infinity,7])assert.throws(()=>algebraState('tables',n));
const first=algebraState('tables',3),second=algebraState('tables',3);first.n=6;assert.equal(second.n,3);
assert.equal(partition(14,3,2).possible,true);assert.equal(partition(14,3,2).groups,4);
assert.equal(chairPuzzle.possible,false);assert.equal(chairPuzzle.remaining,13);assert.equal(chairPuzzle.groups,4);assert.equal(chairPuzzle.leftover,1);
assert.equal(partition(1,3,2).possible,false);
assert.equal(partition(23,4,3).possible,true);assert.equal(candlePuzzle.possible,false);assert.equal(candlePuzzle.remaining,21);assert.equal(candlePuzzle.groups,5);assert.equal(candlePuzzle.leftover,1);
for(const puzzle of [chairPuzzle,candlePuzzle])assert.equal((groupingScene(puzzle).markup.match(/<circle /g)||[]).length,puzzle.total);
assert.equal(algebraState('grouping',2).total,8);assert.equal(algebraState('grouping',2).groupedTotal,12);
assert.equal(ticketCost(3,'booking'),16);assert.equal(ticketCost(3,'ticket'),18);
assert.throws(()=>ticketCost(0,'booking'));
assert.equal(temperature(0),18);assert.equal(temperature(1),20);assert.equal(temperature(1.5),21);assert.equal(temperature(1000),2018);
assert.ok(Math.abs(heatingPoint(1.5)[0]-(heatingPoint(1)[0]+heatingPoint(2)[0])/2)<1e-10,'Time is a numeric axis, not equally spaced categories');
for(const t of [-1,NaN,Infinity])assert.throws(()=>temperature(t));
assert.ok(!svgText(0,0,'<script> &').includes('<script>'));
console.log('Verified algebra inputs, diagram counts, grouping difference, impossible chair/candle totals, fee scope, continuous heating and proportional graph spacing.');
