import type {Locale} from '../i18n';
import {parityState} from './parity-model.ts';
import {parityReadout,proofCopy} from '../reasoning/proof-copy.ts';
/** Only bounded counts and closed roles enter this shared build/browser markup. */
export function counterPairs(count:number,role:'blue'|'gold',leftover=false){
 if(!Number.isInteger(count)||count<0||count>12||!['blue','gold'].includes(role))throw new Error('Invalid counter drawing');
 return Array.from({length:count},()=>`<span class="proof-pair proof-${role}"><i></i><i></i></span>`).join('')+(leftover?'<span class="proof-leftover"><i></i></span>':'');
}
export function parityMarkup(locale:Locale,blue:number,gold:number,combined:boolean){
 const s=parityState(blue,gold,combined),r=parityReadout(locale,blue,gold,combined),c=proofCopy[locale];
 const collection=(n:number,role:'blue'|'gold',label:string)=>`<div class="proof-collection proof-${role}"><div class="proof-pair-row">${n?counterPairs(n,role):`<span class="proof-empty">${c.empty}</span>`}</div><p>${label}</p></div>`;
 return combined?`<div class="proof-combined"><div class="proof-pair-row">${counterPairs(s.blue,'blue')}${counterPairs(s.gold,'gold')}${s.pairs?'':`<span class="proof-empty">${c.empty}</span>`}</div><p>${r.blue} + ${r.gold}</p></div>`:`<div class="proof-columns">${collection(s.blue,'blue',r.blue)}${collection(s.gold,'gold',r.gold)}</div>`;
}
