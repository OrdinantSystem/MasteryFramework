import type {Locale} from '../i18n';
import {escapeSvg as escape} from './plane.ts';
import {renderMathText} from '../math-text.ts';
import {counterCopy,counterCaseCopy} from '../reasoning/counterexample-copy.ts';
import {primeCase,divisibilityCase,sieveState,cardState} from './counterexample-model.ts';

export function caseMarkup(locale:Locale,preset:'prime-detector'|'divisibility',n:number){
 if(preset==='divisibility'&&n===0)return '';
 const c=counterCopy[locale],s=preset==='prime-detector'?primeCase(n):divisibilityCase(n),text=counterCaseCopy(locale,preset,n);
 return `<p class="counter-under-test">${escape(c.number)} <strong>${n}</strong></p><div class="counter-columns"><div class="counter-case ${s.condition?'counter-success':''}"><h4>${escape(c.gateOne)}</h4><p>${escape(preset==='prime-detector'?c.primeCondition:c.divCondition)}</p><p class="counter-verdict">${escape(text.first)}</p></div><div class="counter-case ${!s.condition?'':s.counterexample?'counter-failure':'counter-success'}"><h4>${escape(c.gateTwo)}</h4><p>${escape(preset==='prime-detector'?c.primeConclusion:c.divConclusion)}</p><p class="counter-verdict">${escape(text.second)}</p></div></div><p class="counter-explanation">${renderMathText(text.detail)}</p>`;
}
export function sieveMarkup(locale:Locale,stage:number){
 const c=counterCopy[locale],rows=sieveState(stage),labels={candidate:c.candidate,excluded:c.omitted,selected:c.selected,prime:c.prime,counterexample:c.counterexample};
 return `<ol class="counter-board">${rows.map(r=>`<li class="counter-cell counter-${r.status}" data-counter-cell="${r.n}" data-counter-status="${r.status}"><span>${r.n}</span><span aria-hidden="true" class="counter-cell-symbol">${r.status==='prime'?'✓':r.status==='counterexample'?'×':''}</span><span class="visually-hidden">: ${escape(labels[r.status as keyof typeof labels])}</span></li>`).join('')}</ol>${stage===2?`<p class="counter-legend"><span>✓ ${escape(c.prime)}</span><span>× ${escape(c.counterexample)}</span></p>`:''}`;
}
export function cardsMarkup(locale:Locale,red:number){
 const c=counterCopy[locale],s=cardState(red);
 return `<ol class="counter-cards" aria-label="${escape(c.cards)}">${Array.from({length:s.total},(_,i)=>`<li class="counter-card ${i<s.red?'counter-red-card':'counter-blue-card'}" data-card-color="${i<s.red?'red':'blue'}"><span class="visually-hidden">${escape(c.card)} ${i+1}: </span><span aria-hidden="true">${i<s.red?'×':'✓'}</span><span>${escape(i<s.red?c.red:c.blue)}</span></li>`).join('')}</ol>`;
}
