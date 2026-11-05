import assert from 'node:assert/strict';
import {triple,predictions,evidence,experiments,phonePredictions} from '../src/lib/interactive/inquiry-model.ts';
import {inquiryMarkup} from '../src/lib/interactive/inquiry-render.ts';
assert.deepEqual(experiments.map(t=>evidence(t).region),['A','B','C','outside']);
assert.deepEqual(experiments.map(t=>evidence(t).contradicted),[[],['A'],['A','B'],[]]);
for(let a=-4;a<=4;a++)for(let b=-4;b<=4;b++)for(let c=-4;c<=4;c++){const p=predictions([a,b,c]);assert(!p.A||p.B);assert(!p.B||p.C);}
for(const s of ['1,2,3','-5, -2, 0','1 2 3'])assert(triple(s));
for(const s of ['', '1,2','1,,2,3','1.5,2,3','1,2,3,4','NaN,2,3','9007199254740992,2,3','<img>,2,3'])assert.equal(triple(s),null);
assert.equal(evidence([-5,-2,0]).accepted,true);assert.equal(evidence([1,1,2]).accepted,false);
assert.deepEqual(phonePredictions(0),[false,false,false]);assert.deepEqual(phonePredictions(1),[true,false,false]);assert.deepEqual(phonePredictions(2),[true,true,false]);
for(const locale of ['en','de'])for(let i=0;i<4;i++){assert(!inquiryMarkup(locale,'evidence',i,false).includes('inquiry-result'));assert(inquiryMarkup(locale,'evidence',i,true).includes('inquiry-result'));assert(inquiryMarkup(locale,'regions',i).includes(experiments[i].join(', ')));}
console.log('Verified 729 nested-rule cases, strict safe-integer parsing, candidate elimination, negative/repeated inputs, reveal boundaries and single-fault predictions in EN/DE.');
