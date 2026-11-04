/** Shared build/browser renderer. All mathematics comes from equation-model. */
import katex from 'katex';
import {mathOptions} from '../math-options.mjs';
import {escapeSvg as esc} from './plane.ts';
import {equationState,squaredSolutions,squareX,squareY,distanceX,type EquationPreset} from './equation-model.ts';
import {equationCopy,equationText} from '../reasoning/equation-copy.ts';
import type {Locale} from '../i18n';
export function equationMath(tex:string,locale:Locale){
 const localized=locale==='de'?tex.replace(/(\d)\.(\d)/g,'$1{,}$2'):tex;
 return '<span class="math math-block" tabindex="0" role="region" aria-label="'+equationCopy[locale].math+'" data-pagefind-ignore="all">'+katex.renderToString(localized,{...mathOptions,displayMode:true})+'</span>';
}
const svg=(description:string,box:string,body:string)=>'<svg viewBox="'+box+'" role="img" aria-label="'+esc(description)+'">'+body+'</svg>';
const circle=(x:number,y:number,r:number,role:string)=>'<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="var(--'+role+')"/>';
const text=(x:number,y:number,value:string,role='secondary')=>'<text x="'+x+'" y="'+y+'" text-anchor="middle" fill="var(--'+role+')" font-size="24">'+esc(value)+'</text>';
const atom=(value:number)=>value<0?'('+value+')':String(value);
function pills(values:readonly number[],locale:Locale,excluded?:number){return '<div class="equation-values">'+values.map(value=>'<span class="equation-value'+(value===excluded?' equation-excluded':'')+'" aria-label="'+esc(String(value)+': '+(value===excluded?equationCopy[locale].excluded:equationCopy[locale].solution))+'">'+(value===excluded?'<s>':'')+katex.renderToString(String(value),mathOptions)+(value===excluded?'</s>':'')+'</span>').join('')+'</div>';}
function panel(label:string,body:string){return '<div class="equation-case"><p class="equation-case-label">'+esc(label)+'</p>'+body+'</div>';}
function verdict(truth:boolean,locale:Locale){const c=equationCopy[locale];return '<p class="equation-verdict '+(truth?'equation-true':'equation-false')+'">'+(truth?'✓ '+c.true:'× '+c.false)+'</p>';}
export function squaredSolutionMarkup(locale:Locale){
 const c=equationCopy[locale],math=(tex:string)=>equationMath(tex,locale);
 return '<div class="equation-comparison">'+panel(c.original,math('x=2')+pills(squaredSolutions.original,locale)+'<p>'+c.one+'</p>')+panel(c.after,math('x^2=4')+pills(squaredSolutions.transformed,locale)+'<p>'+c.two+'</p>')+'</div>'+math(String.raw`x=2\quad\Longrightarrow\quad x^2=4`);
}
export function equationMarkup(locale:Locale,preset:EquationPreset,value:number){
 const c=equationCopy[locale],s=equationState(preset,value),math=(tex:string)=>equationMath(tex,locale),decimal=(v:number)=>v.toLocaleString(locale,{maximumFractionDigits:4,useGrouping:false});
 if(preset==='stones')return svg(equationText(c.stonesAlt,s),'0 0 420 90',Array.from({length:7},(_,i)=>circle(50+i*50,43,13,i<value?'blue':'accent')).join('')+'<path d="M'+(25+value*50)+' 17V70" stroke="var(--axis)" stroke-width="2"/>')+math(value+'+'+s.secondGroup+'=7');
 if(preset==='balance'){
  const left=value===0?'(x + 3) kg':'x kg',right=value===0?'8 kg':'5 kg';
  return svg(c.balanceAlt[value as 0|1],'0 0 640 260','<path d="M80 55H560M320 55V220M250 220H390M130 55 100 120M510 55 480 120" fill="none" stroke="var(--axis)" stroke-width="4" stroke-linecap="round"/>'+circle(320,55,9,'blue')+'<rect x="40" y="120" width="170" height="60" rx="8" fill="var(--blue-tint)" stroke="var(--blue)"/><rect x="430" y="120" width="170" height="60" rx="8" fill="var(--tint)" stroke="var(--accent)"/>'+text(125,158,left,'blue')+text(515,158,right,'accent'))+math(value===0?'x+3=8':String.raw`x=5`)+math(String.raw`x+3=8\quad\Longleftrightarrow\quad x=5`);
 }
 if(preset==='identity')return '<div class="equation-comparison">'+panel(c.identity,math('x+3=3+x')+math(atom(value)+'+3=3+'+atom(value))+math(s.left+'='+s.right)+verdict(s.identityTrue,locale))+panel(c.solve,math('x+3=8')+math(atom(value)+'+3'+(s.balanceTrue?'=':String.raw`\ne`)+'8')+verdict(s.balanceTrue,locale))+'</div>';
 if(preset==='square'){
  let drawing='';for(let n=-3;n<=3;n++)drawing+='<path d="M'+squareX(n)+' 35V290" stroke="var(--grid)"/>'+text(squareX(n),325,String(n));
  for(const n of [2,4,6,8])drawing+='<path d="M65 '+squareY(n)+'H590" stroke="var(--grid)"/>'+text(300,squareY(n)+8,String(n));
  drawing+='<path d="M65 290H595M320 35V300" stroke="var(--axis)" stroke-width="2"/><path d="M80 56Q320 524 560 56" fill="none" stroke="var(--blue)" stroke-width="3"/><path d="M65 '+squareY(s.squared)+'H590" stroke="var(--purple)" stroke-width="2" stroke-dasharray="6 5"/>';
  drawing+=circle(squareX(s.opposite),squareY(s.squared),9,'coral')+circle(squareX(value),squareY(s.squared),6,'accent');
  return math('y=x^2')+svg(equationText(c.squareAlt,{value:decimal(value),opposite:decimal(s.opposite),squared:decimal(s.squared)}),'0 0 640 345',drawing)+math(atom(value)+'^2='+s.squared+'='+atom(s.opposite)+'^2');
 }
 if(preset==='restriction')return math('x^2=4')+pills(squaredSolutions.transformed,locale,value===1?-2:undefined)+math(value===0?String.raw`x^2=4\;\not\Longrightarrow\;x=2`:String.raw`\bigl(x^2=4\;\text{${locale==='de'?'und':'and'}}\;x\geq0\bigr)\;\Longleftrightarrow\;x=2`);
 if(preset==='division')return '<div class="equation-comparison">'+panel(c.original,math('x(x-2)=0')+math(value+'('+value+'-2)=0')+'<p class="equation-true">✓ '+c.originalSatisfied+'</p>')+panel(c.divide,math(String.raw`\frac{x(x-2)}{x}=\frac{0}{x}`)+math(String.raw`\frac{${value}(${value}-2)}{${value}}\quad\frac{0}{${value}}`)+(s.divisionDefined?math('0=0'):'')+'<p class="'+(s.divisionDefined?'equation-true':'equation-false')+'">'+(s.divisionDefined?'✓ '+c.defined:'× '+c.undefined)+'</p>')+'</div>';
 let drawing='<path d="M40 145H580" stroke="var(--axis)" stroke-width="3"/>';
 for(let n=0;n<=6;n++)drawing+='<path d="M'+distanceX(n)+' 137v16" stroke="var(--axis)" stroke-width="2"/>'+text(distanceX(n),192,String(n));
 drawing+='<path d="M'+distanceX(3)+' 82H'+distanceX(value)+'" stroke="var(--purple)" stroke-width="6" stroke-linecap="round"/>'+circle(distanceX(3),145,8,'blue')+circle(distanceX(value),145,11,'accent');
 return math('|x-3|=2')+svg(equationText(c.distanceAlt,{value:decimal(value),distance:decimal(s.distance)}),'0 0 620 215',drawing)+math('|'+value+'-3|='+s.distance+(s.distanceTrue?'':String.raw`\ne2`))+verdict(s.distanceTrue,locale);
}
