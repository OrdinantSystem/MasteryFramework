/** SVG geometry only. Counts and outcomes come from algebra-model.ts. */
import {algebraState,type AlgebraPreset,partition,temperature} from './algebra-model.ts';
import {escapeSvg} from './plane.ts';
const dot=(x:number,y:number,role='blue',r=9)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="var(--${role})"/>`;
export function tableGlyph(x:number,y:number,role='blue'){
 return `<rect x="${x}" y="${y}" width="82" height="58" rx="9" fill="var(--${role}-tint)" stroke="var(--${role})" stroke-width="2.5"/>`+[14,41,68].map(dx=>dot(x+dx,y+76,role)).join('');
}
export function arrangementScene(preset:AlgebraPreset,n:number,side:'original'|'changed'='original'){
 const s=algebraState(preset,n),extraTables=preset==='grouping'&&side==='changed',count=extraTables?s.extraTables:n;
 // Both comparison cases keep the same scale and baseline as groups wrap.
 const rowsFor=preset==='grouping'?s.extraTables:count;
 const height=Math.max(145,Math.ceil(rowsFor/4)*115+30);
 let markup=Array.from({length:count},(_,i)=>tableGlyph(20+i%4*112,22+Math.floor(i/4)*115,i>=n?'purple':'blue')).join('');
 if(!extraTables)markup+=[520,560].map(x=>dot(x,height/2,'purple',12)).join('');
 return {markup,height,count,total:extraTables?s.groupedTotal:s.total};
}
export function groupingScene(puzzle:ReturnType<typeof partition>){
 const height=Math.max(150,Math.ceil(puzzle.groups/4)*110+30);
 let markup=Array.from({length:puzzle.groups},(_,i)=>{
  const x=18+i%4*106,y=20+Math.floor(i/4)*110;
  return `<rect x="${x}" y="${y}" width="86" height="82" rx="10" fill="none" stroke="var(--blue)" stroke-width="2.5" stroke-dasharray="6 5"/>`+Array.from({length:puzzle.size},(_,j)=>dot(x+18+j%2*48,y+24+Math.floor(j/2)*34)).join('');
 }).join('');
 if(puzzle.leftover)markup+=dot(470,height/2,'coral',11)+`<path d="m455 ${height/2-16} 30 32m-30 0 30-32" stroke="var(--coral)" stroke-width="2.5"/>`;
 markup+=Array.from({length:puzzle.extras},(_,i)=>dot(526+i%2*40,height/2-12+Math.floor(i/2)*32,'purple',11)).join('');
 return {markup,height};
}
export function ticketScene(scope:'booking'|'ticket'){
 return [0,1,2].map(i=>{
  const x=20+i*118;
  return `<rect x="${x}" y="25" width="95" height="112" rx="9" fill="var(--blue-tint)" stroke="var(--blue)" stroke-width="2.5"/><text x="${x+47}" y="${scope==='booking'?92:75}" text-anchor="middle" fill="var(--text)" font-size="28">€5</text>`+(scope==='ticket'?`<rect x="${x+1}" y="96" width="93" height="40" rx="7" fill="var(--purple-tint)"/><text x="${x+47}" y="124" text-anchor="middle" fill="var(--purple)" font-size="24">+ €1</text>`:'');
 }).join('')+(scope==='booking'?`<circle cx="418" cy="81" r="33" fill="var(--purple-tint)" stroke="var(--purple)" stroke-width="2.5"/><text x="418" y="91" text-anchor="middle" fill="var(--purple)" font-size="27">€1</text>`:'');
}
export const svgText=(x:number,y:number,text:string,size=24,role='text',anchor='start')=>`<text x="${x}" y="${y}" font-size="${size}" fill="var(--${role})" text-anchor="${anchor}">${escapeSvg(text)}</text>`;

export const heatingX=(t:number)=>70+t/7*540;
export const heatingY=(value:number)=>320-(value-18)/15*270;
export const heatingPoint=(t:number)=>[heatingX(t),heatingY(temperature(t))] as const;
