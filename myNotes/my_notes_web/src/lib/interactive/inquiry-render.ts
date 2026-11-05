import type {Locale} from '../i18n';
import {inquiryText} from '../reasoning/inquiry-copy.ts';
import {experiments,evidence,phonePredictions,type InquiryPreset} from './inquiry-model.ts';
import {escapeSvg as esc} from './plane.ts';
export function inquiryMarkup(locale:Locale,preset:InquiryPreset,n:number,revealed=false){
 const c=inquiryText(locale),e=evidence(experiments[n]||experiments[0]);
 const verdict=(yes:boolean)=>`${yes?'✓':'×'} ${esc(yes?c.accepted:c.rejected)}`;
 const predictions=()=>`<div class="inquiry-predictions">${c.rules.map((r,i)=>`<div class="counter-case"><h4>${esc(r)}</h4><p>${verdict(e.predictions[(['A','B','C'] as const)[i]])}</p></div>`).join('')}</div>`;
 if(preset==='regions'){
 const marker=(key:string)=>e.region===key?`<p class="inquiry-marker">● ${esc(c.selected)}: ${experiments[n].join(', ')}</p>`:'';
 return `<div class="inquiry-universe"><p>${esc(c.all)}</p><div class="inquiry-region inquiry-C"><strong>${esc(c.rules[2])}</strong>${marker('C')}<div class="inquiry-region inquiry-B"><strong>${esc(c.rules[1])}</strong>${marker('B')}<div class="inquiry-region inquiry-A"><strong>${esc(c.rules[0])}</strong>${marker('A')}</div></div></div><p>${esc(c.outside)}</p>${marker('outside')}</div><p class="counter-help">${esc(c.regionHelp)}</p>`;
 }
 if(preset==='evidence')return `<p>${esc(c.predict)}</p>${predictions()}${revealed?`<p class="inquiry-result">${verdict(e.accepted)} · ${esc(c.contradicted)}: ${e.contradicted.join(', ')||esc(c.none)}</p><p class="counter-help">${esc(c.limit)}</p>`:`<p>${esc(c.await)}</p>`}`;
 if(preset==='phone')return `<div class="inquiry-predictions">${phonePredictions(n).map((yes,i)=>`<div class="counter-case"><h4>${esc(c.faults[i])}</h4><p>${yes?'✓':'×'} ${esc(yes?c.charges:c.fails)}</p></div>`).join('')}</div>`;
 if(preset==='challenge')return `<p>${esc(n===0?c.challengeStart:n===1?c.challengeSame:c.challengeDifferent)}</p>`;
 return '';
}
