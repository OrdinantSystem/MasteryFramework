import {escapeSvg as esc} from './plane.ts';
import {continuationState,patternX,patternY,channelFutures,forecastWeeks,forecastX,forecastY} from './patterns-model.ts';
import {patternsCopy,patternText} from '../reasoning/patterns-copy.ts';
import type {Locale} from '../i18n';
const text=(x:number,y:number,value:string,role='secondary',anchor='middle',size=22)=>'<text x="'+x+'" y="'+y+'" text-anchor="'+anchor+'" fill="var(--'+role+')" font-size="'+size+'">'+esc(value)+'</text>';
const svg=(description:string,body:string)=>'<svg viewBox="0 0 640 345" role="img" aria-label="'+esc(description)+'">'+body+'</svg>';
export function lightDots(count:number){
 if(!Number.isInteger(count)||count<0||count>64)throw new Error('Invalid illustrated light count');
 return '<div class="pattern-lights" style="--light-columns:'+Math.max(1,Math.min(8,count))+'" aria-hidden="true">'+Array.from({length:count},()=>'<i></i>').join('')+'</div>';
}
function valuesTable(locale:Locale,rows:string,headers:readonly string[],caption:string){
 const c=patternsCopy[locale];return '<details class="pattern-values"><summary>'+c.values+'</summary><div class="table-scroll" role="region" tabindex="0" aria-label="'+esc(c.values)+'"><table><caption>'+esc(caption)+'</caption><thead><tr>'+headers.map(h=>'<th scope="col">'+esc(h)+'</th>').join('')+'</tr></thead><tbody>'+rows+'</tbody></table></div></details>';
}
export function continuationMarkup(locale:Locale,through:number){
 const c=patternsCopy[locale],state=continuationState(through);let body='';
 body+='<rect x="385" y="50" width="225" height="240" fill="var(--surface)"/>';
 for(const n of [0,64,128,192,256])body+='<path d="M55 '+patternY(n)+'H610" stroke="var(--grid)" stroke-dasharray="4 5"/>'+text(46,patternY(n)+7,String(n),'secondary','end');
 body+='<path d="M55 50V290H610" fill="none" stroke="var(--axis)" stroke-width="2"/><path d="M385 50V290" stroke="var(--muted)" stroke-width="2" stroke-dasharray="5 5"/>'+text(220,30,c.observed)+text(500,30,c.predicted);
 for(let n=1;n<=8;n++)body+=text(patternX(n),320,String(n));
 for(const row of state.rows){
  const x=patternX(row.round);
  if(row.observed)body+='<rect x="'+(x-12)+'" y="'+patternY(row.a)+'" width="24" height="'+(290-patternY(row.a))+'" fill="var(--muted)"/>'+text(x,patternY(row.a)-9,String(row.a),'text');
  else body+='<rect x="'+(x-19)+'" y="'+patternY(row.a)+'" width="17" height="'+(290-patternY(row.a))+'" fill="var(--blue)"/><rect x="'+(x+3)+'" y="'+patternY(row.b)+'" width="17" height="'+(290-patternY(row.b))+'" fill="var(--purple-tint)" stroke="var(--purple)" stroke-width="2"/>'+text(x-11,patternY(row.a)-9,String(row.a),'blue','middle',20)+text(x+12,patternY(row.b)-9,String(row.b),'purple','middle',20);
 }
 const rows=state.rows.map(row=>'<tr><th scope="row">'+row.round+'</th><td>'+row.a+'</td><td>'+row.b+'</td><td>'+esc(row.observed?c.observed:c.predicted)+'</td></tr>').join('');
 return svg(patternText(c.chartAlt,{n:through}),body)+'<p class="pattern-axis-label">'+c.round+'</p><div class="pattern-legend"><span>■ '+c.observed+'</span><span class="pattern-blue">▰ '+c.ruleA+'</span><span class="pattern-purple">▱ '+c.ruleB+'</span></div>'+valuesTable(locale,rows,[c.round,c.ruleA,c.ruleB,c.status],c.tableCaption);
}
export function forecastMarkup(locale:Locale){
 const c=patternsCopy[locale];let body='';
 for(const n of [0,200,400,600,800])body+='<path d="M55 '+forecastY(n)+'H600" stroke="var(--grid)" stroke-dasharray="4 5"/>'+text(47,forecastY(n)+7,String(n),'secondary','end');
 body+='<path d="M55 50V280H600" fill="none" stroke="var(--axis)" stroke-width="2"/><path d="M420 50V280" stroke="var(--muted)" stroke-dasharray="5 5"/>'+text(230,30,c.observed)+text(510,30,c.predicted);
 const points=(values:readonly number[],start:number,end:number)=>values.slice(start,end).map((value,i)=>forecastX(i+start+1)+','+forecastY(value)).join(' ');
 body+='<polyline points="'+points(channelFutures.continues,0,4)+'" fill="none" stroke="var(--muted)" stroke-width="3"/>';
 for(const [key,role] of [['continues','blue'],['slows','purple']] as const){
  body+='<polyline points="'+points(channelFutures[key],3,6)+'" fill="none" stroke="var(--'+role+')" stroke-width="3"'+(key==='slows'?' stroke-dasharray="6 5"':'')+'/>';
  for(const week of [5,6])body+='<circle cx="'+forecastX(week)+'" cy="'+forecastY(channelFutures[key][week-1])+'" r="5" fill="var(--'+role+')"/>';
 }
 for(let week=1;week<=4;week++)body+='<circle cx="'+forecastX(week)+'" cy="'+forecastY(channelFutures.continues[week-1])+'" r="5" fill="var(--muted)"/>';
 for(const week of forecastWeeks)body+=text(forecastX(week),315,String(week));
 const rows=forecastWeeks.map(week=>'<tr><th scope="row">'+week+'</th><td>'+channelFutures.continues[week-1]+'</td><td>'+channelFutures.slows[week-1]+'</td><td>'+esc(week<=4?c.observed:c.predicted)+'</td></tr>').join('');
 return svg(c.forecastAlt,body)+'<p class="pattern-axis-label">'+c.week+'</p><div class="pattern-legend"><span class="pattern-blue">━ '+c.continues+'</span><span class="pattern-purple">┄ '+c.slows+'</span></div>'+valuesTable(locale,rows,[c.week,c.continues,c.slows,c.status],c.forecastCaption);
}
