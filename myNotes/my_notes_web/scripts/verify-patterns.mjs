import assert from 'node:assert/strict';
import {machineValue,observedLights,continuationState,testState,survivingRules,challengeValue,channelFutures,patternX,patternY,forecastX,forecastY} from '../src/lib/interactive/patterns-model.ts';
import {continuationMarkup,forecastMarkup,lightDots} from '../src/lib/interactive/patterns-render.ts';
import {patternFeedback} from '../src/lib/reasoning/patterns-copy.ts';
const rounds=Array.from({length:8},(_,i)=>i+1);
assert.deepEqual(rounds.map(n=>machineValue('A',n)),[2,4,8,16,32,64,128,256]);
assert.deepEqual(rounds.map(n=>machineValue('B',n)),[2,4,8,16,32,34,36,38]);
assert.deepEqual(observedLights,[2,4,8,16,32]);
assert.equal(machineValue('B',1000000),2000022);assert.equal(machineValue('A',52),4503599627370496);assert.throws(()=>machineValue('A',53));
for(const n of [0,-1,1.5,Infinity,NaN])for(const rule of ['A','B'])assert.throws(()=>machineValue(rule,n));
assert.throws(()=>machineValue('C',6));
for(const through of [5,6,7,8]){
 const s=continuationState(through);assert.equal(s.rows.length,through);assert.equal(s.rows.filter(row=>row.observed).length,5);
 assert(s.rows.slice(0,5).every(row=>row.a===row.b));assert(s.rows.slice(5).every(row=>row.a!==row.b));
 for(const locale of ['en','de']){const html=continuationMarkup(locale,through),feedback=patternFeedback(locale,'continuations',through);assert(!html.includes('NaN'));assert(!/\{\w+\}/.test(feedback));assert(html.includes('<caption>'));if(through>5){assert(feedback.includes(String(machineValue('A',through))));assert(feedback.includes(String(machineValue('B',through))));}}
}
for(const n of [0,4,9,5.5,Infinity])assert.throws(()=>continuationState(n));
assert.equal(testState(0).a,null);assert.equal(testState(3).distinguishes,false);assert.equal(testState(5).distinguishes,false);assert.equal(testState(6).distinguishes,true);
assert.deepEqual(survivingRules(64),['A']);assert.deepEqual(survivingRules(34),['B']);assert.deepEqual(survivingRules(50),[]);
for(const n of [-1,.5,NaN])assert.throws(()=>survivingRules(n));
assert.deepEqual([1,2,3,4,5].map(n=>challengeValue('A',n)),[3,6,12,24,48]);
assert.deepEqual([1,2,3,4,5].map(n=>challengeValue('B',n)),[3,6,12,24,27]);
assert.equal(observedLights.reduce((count,n)=>count+(lightDots(n).match(/<i>/g)||[]).length,0),62);
assert.throws(()=>lightDots(65));assert.throws(()=>lightDots(-1));
assert.deepEqual(channelFutures.continues.slice(0,4),channelFutures.slows.slice(0,4));
assert.deepEqual(channelFutures.continues.slice(4),[460,660]);assert.deepEqual(channelFutures.slows.slice(4),[250,220]);
assert.equal(patternY(0),290);assert.equal(patternY(256),70);assert.equal(patternX(6)-patternX(5),70);assert.equal(forecastX(5)-forecastX(4),100);assert.equal(forecastY(660),98.5);
const first=continuationState(5);continuationState(8);assert.equal(first.rows.length,5);
for(const locale of ['en','de']){assert(forecastMarkup(locale).includes('660'));assert(forecastMarkup(locale).includes('220'));for(const round of [0,3,5,6])assert(!/\{\w+\}/.test(patternFeedback(locale,'next-test',round)));}
console.log('Verified matching observations, divergent rule predictions, finite test discrimination, unrestricted surviving alternatives, challenge rules, hypothetical forecast data, fixed chart scales and localized feedback.');
