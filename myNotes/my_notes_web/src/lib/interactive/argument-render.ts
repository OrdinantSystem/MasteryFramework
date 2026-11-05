import type {Locale} from '../i18n';
import {argumentText} from '../reasoning/argument-copy.ts';
import {escapeSvg as esc} from './plane.ts';
import {validateArgument,type ArgumentPreset} from './argument-model.ts';
export function argumentMarkup(locale:Locale,preset:ArgumentPreset,n:number){
 validateArgument(preset,n);const c=argumentText(locale);
 if(preset==='xray'){
  const story=Math.floor(n/3),mode=n%3,labels=mode===0?c.categories[story]:['A','B','C'];
  return `<div class="argument-nested argument-outer"><strong>${esc(labels[2])}</strong><div class="argument-nested argument-middle"><strong>${esc(labels[1])}</strong><div class="argument-nested argument-inner"><strong>${esc(labels[0])}</strong>${mode===2?'<p class="argument-element">● x ∈ A</p>':''}</div></div></div><p class="argument-chain">${labels.map(esc).join(' ⟶ ')}</p>${mode===2?'<p class="argument-chain">x ∈ A ⟹ x ∈ B ⟹ x ∈ C</p>':''}<p class="counter-help">${esc(mode===2?c.trace:mode===1?c.nestedCaption:c.conditionalCaption)}</p>`;
 }
 if(preset==='countermodel')return `<svg class="argument-overlap" viewBox="0 0 640 330" role="img" aria-label="${esc(n?c.counterAria:c.counterInitial)}"><circle cx="250" cy="160" r="135" fill="var(--purple-tint)" stroke="var(--purple)" stroke-width="3"/><circle cx="400" cy="160" r="135" fill="var(--blue-tint)" stroke="var(--blue)" stroke-width="3"/><circle cx="325" cy="160" r="46" fill="var(--tint)" stroke="var(--accent)" stroke-width="3"/><g fill="var(--text)" text-anchor="middle" font-size="28"><text x="190" y="80">B</text><text x="465" y="80">C</text><text x="325" y="170">A</text></g>${n?'<circle cx="175" cy="205" r="12" fill="var(--coral)"/><path d="M175 205L90 268" stroke="var(--coral)" stroke-width="2" stroke-dasharray="5 4"/><text x="25" y="298" font-size="24" fill="var(--text)">x ∈ B, x ∉ C</text>':''}</svg><p class="argument-chain">A ⊆ B ∧ A ⊆ C</p><p class="argument-legend">${c.counterLabels.map(esc).join(' · ')}</p><p class="counter-help">${esc(n?c.counterExplanation:c.counterInitial)}</p>`;
 if(preset==='only')return `<p class="argument-chain"><strong>${esc(c.policies[n])}</strong></p><div class="argument-policy"><div>${esc(c.onTime)}<strong>A</strong></div><span class="argument-arrow" aria-label="${n?'B → A':'A → B'}">${n?'⟵':'⟶'}</span><div>${esc(c.reviewed)}<strong>B</strong></div></div><p class="argument-chain">${n?'B ⊆ A':'A ⊆ B'}</p><p class="argument-chain">${esc(c.policyRoles[n])}</p><p class="counter-help">${esc(c.policyExplanations[n])}</p>`;
 return '';
}
