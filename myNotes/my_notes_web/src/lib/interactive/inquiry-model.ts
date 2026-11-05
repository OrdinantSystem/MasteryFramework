export const inquiryPresets=['machine','regions','evidence','phone','challenge'] as const;
export type InquiryPreset=typeof inquiryPresets[number];
export type Triple=readonly [number,number,number];
export const experiments:readonly Triple[]=[[8,10,12],[3,5,7],[3,7,11],[9,7,5]];
export function triple(raw:string):Triple|null{
 if(!/^\s*[+-]?\d+(?:\s*[,;]\s*|\s+)[+-]?\d+(?:\s*[,;]\s*|\s+)[+-]?\d+\s*$/.test(raw))return null;
 const ns=raw.trim().split(/[,;\s]+/).map(Number);return ns.length===3&&ns.every(Number.isSafeInteger)?ns as unknown as Triple:null;
}
export function predictions(ns:Triple){
 if(ns.length!==3||!ns.every(Number.isSafeInteger))throw new Error('Three safe integers required');
 const [a,b,c]=ns,B=BigInt(b)-BigInt(a)===2n&&BigInt(c)-BigInt(b)===2n;
 return {A:B&&ns.every(n=>n%2===0),B,C:a<b&&b<c};
}
export function evidence(ns:Triple){const p=predictions(ns);return {predictions:p,accepted:p.C,contradicted:(['A','B','C'] as const).filter(k=>p[k]!==p.C),region:p.A?'A':p.B?'B':p.C?'C':'outside'};}
export function phonePredictions(stage:number){if(![0,1,2].includes(stage))throw new Error('Unknown replacement stage');return [stage>=1,stage>=2,false];}
export function validateInquiry(preset:InquiryPreset,n:number){if(!(inquiryPresets as readonly string[]).includes(preset)||!Number.isInteger(n)||n<0||n>(preset==='phone'||preset==='challenge'?2:3))throw new Error('Invalid inquiry choice');}
