/** Pure models for Episode 02. Control bounds limit the drawing, not algebra. */
export const algebraBounds={min:0,max:6,initial:3} as const;
export type AlgebraPreset='tables'|'grouping';
export const algebraFigureKinds=['room','table-pattern','impossible-chairs','letter-roles','domains','ticket-fees','heating','candles'] as const;
export type AlgebraFigureKind=typeof algebraFigureKinds[number];
export const isAlgebraFigureKind=(kind:string):kind is AlgebraFigureKind=>(algebraFigureKinds as readonly string[]).includes(kind);
function whole(n:number){if(!Number.isSafeInteger(n)||n<0)throw new Error('A count must be a nonnegative safe integer');}
export function chairTotal(n:number){whole(n);const total=3*n+2;if(!Number.isSafeInteger(total))throw new Error('Count exceeds safe arithmetic');return total;}
export function algebraState(preset:AlgebraPreset,n:number){
 if(preset!=='tables'&&preset!=='grouping')throw new Error('Unknown algebra comparison');
 whole(n);if(n>algebraBounds.max)throw new Error('Outside the illustrated table range');
 const total=chairTotal(n),extraTables=n+2,groupedTotal=3*extraTables;
 return {preset,n,perTable:3,extras:2,around:3*n,total,extraTables,groupedTotal,difference:groupedTotal-total};
}
export function algebraInput(raw:string){
 if(!raw.trim())return null;
 const n=Number(raw);return Number.isSafeInteger(n)&&n>=algebraBounds.min&&n<=algebraBounds.max?n:null;
}
export function partition(total:number,size:number,extras:number){
 whole(total);whole(size);whole(extras);if(size===0)throw new Error('Groups must be nonempty');
 const remaining=total-extras,groups=Math.max(0,Math.floor(remaining/size)),leftover=remaining<0?0:remaining%size;
 return {total,size,extras,remaining,groups,leftover,possible:remaining>=0&&leftover===0};
}
export const chairPuzzle=partition(15,3,2);
export const candlePuzzle=partition(24,4,3);
export const patternInputs=[1,2,3,4] as const;
export const heatingTimes=[0,1,1.5,2,3,4,5,6] as const;
export function temperature(t:number){if(!Number.isFinite(t)||t<0||!Number.isFinite(18+2*t))throw new Error('Elapsed time must be finite and nonnegative');return 18+2*t;}
export function ticketCost(n:number,scope:'booking'|'ticket'){
 whole(n);if(n===0)throw new Error('This purchase model assumes at least one ticket');
 if(scope!=='booking'&&scope!=='ticket')throw new Error('Unknown fee scope');
 const total=scope==='booking'?5*n+1:6*n;if(!Number.isSafeInteger(total))throw new Error('Price exceeds safe arithmetic');return total;
}
export function algebraEquation(preset:AlgebraPreset,n:number){
 const s=algebraState(preset,n);
 return preset==='tables'?String.raw`\colB{3\cdot ${s.n}}+\colResult{${s.extras}}=${s.total}`:String.raw`\begin{aligned}\colB{3\cdot ${s.n}}+\colResult{2}&=${s.total}\\3(\colB{${s.n}}+\colResult{2})&=${s.groupedTotal}\end{aligned}`;
}
