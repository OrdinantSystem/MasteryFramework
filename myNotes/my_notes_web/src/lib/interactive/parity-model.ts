/** Signed integer witnesses belong to the proof; physical counters stay nonnegative. */
export const parityBounds={min:0,max:6,blue:3,gold:2} as const;
export type ParityPreset='even-sum';
export const proofFigureKinds=['proof-examples','proof-evidence','proof-pairs','proof-general-pairs','proof-template','proof-chain','proof-number-line','proof-odd-sum','proof-distinction','proof-process'] as const;
export type ProofFigureKind=typeof proofFigureKinds[number];
export const isProofFigureKind=(kind:string):kind is ProofFigureKind=>(proofFigureKinds as readonly string[]).includes(kind);
function integer(n:number){if(!Number.isSafeInteger(n))throw new Error('An integer witness must be safe and finite');return n;}
export function evenSum(a:number,b:number){
 const x=integer(2*integer(a)),y=integer(2*integer(b)),pairs=integer(a+b),sum=integer(x+y);
 return {a,b,x,y,pairs,sum};
}
export function oddSum(a:number,b:number){
 const x=integer(2*integer(a)+1),y=integer(2*integer(b)+1),pairs=integer(a+b+1),sum=integer(x+y);
 return {a,b,x,y,pairs,sum};
}
export function parityInput(raw:string){if(!raw.trim())return null;const n=Number(raw);return Number.isSafeInteger(n)&&n>=parityBounds.min&&n<=parityBounds.max?n:null;}
export function parityState(blue:number,gold:number,combined=false){
 if(parityInput(String(blue))!==blue||parityInput(String(gold))!==gold||typeof combined!=='boolean')throw new Error('Invalid illustrated pair state');
 return {...evenSum(blue,gold),blue,gold,combined};
}
export const parityExamples=[[2,4],[6,8],[12,20]] as const;
export const evenLine=Array.from({length:13},(_,i)=>i-6);
