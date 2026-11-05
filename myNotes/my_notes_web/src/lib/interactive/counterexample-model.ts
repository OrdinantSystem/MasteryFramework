/** Finite illustrations of conditional claims; no inference from a sample to an infinite domain. */
export const counterPresets=['prime-detector','sieve','cards','divisibility'] as const;
export type CounterPreset=typeof counterPresets[number];
export const counterFigureKinds=['counter-prime-start','counter-nine','counter-filter','counter-negation','counter-finite','counter-domains','counter-quantifiers','counter-repair','counter-factors','counter-synthesis'] as const;
export type CounterFigureKind=typeof counterFigureKinds[number];
export const isCounterFigureKind=(kind:string):kind is CounterFigureKind=>(counterFigureKinds as readonly string[]).includes(kind);
export const primeChoices=[-9,1,3,4,9,15,21] as const;
export const divisibilityChoices=[6,8,12,16] as const;
export const sieveStages=[0,1,2] as const;
export const sieveNumbers=Array.from({length:35},(_,i)=>i+1);
export const cardBounds={min:0,max:10,step:1,initial:1} as const;
export function integer(n:number){if(!Number.isSafeInteger(n))throw new Error('Safe integer required');return n;}
/** The least nontrivial positive divisor, or null for primes and integers below two. */
export function factor(n:number):number|null{
 integer(n);if(n<4)return null;if(n%2===0)return 2;
 for(let d=3;d<=n/d;d+=2)if(n%d===0)return d;
 return null;
}
export function isPrime(n:number){integer(n);return n>1&&factor(n)===null;}
export function qualifies(n:number){integer(n);return n>1&&n%2!==0;}
export function conditionalState(condition:boolean,conclusion:boolean){return {condition,conclusion,counterexample:condition&&!conclusion,implication:!condition||conclusion};}
export function primeCase(n:number){
 integer(n);const divisor=factor(n);
 return {n,divisor,cofactor:divisor===null?null:n/divisor,...conditionalState(qualifies(n),isPrime(n))};
}
export function divisibilityCase(n:number){integer(n);return {n,...conditionalState(n%4===0,n%8===0)};}
export function sieveState(stage:number){
 if(!(sieveStages as readonly number[]).includes(stage))throw new Error('Unknown sieve stage');
 return sieveNumbers.map(n=>({...primeCase(n),status:stage===0?'candidate':!qualifies(n)?'excluded':stage===1?'selected':isPrime(n)?'prime':'counterexample'}));
}
export const counterexamplesInWindow=()=>sieveNumbers.filter(n=>primeCase(n).counterexample);
export function cardState(red:number){
 integer(red);if(red<cardBounds.min||red>cardBounds.max)throw new Error('Card count outside illustration');
 const total=10,required=8,blue=total-red;
 return {red,blue,total,required,allowedRed:total-required,holds:blue>=required};
}
export function cardInput(raw:string){
 if(!raw.trim())return null;const value=Number(raw);
 return Number.isSafeInteger(value)&&value>=cardBounds.min&&value<=cardBounds.max?value:null;
}
export function initialCounterValue(preset:CounterPreset){if(!(counterPresets as readonly string[]).includes(preset))throw new Error('Unsupported counterexample preset');return preset==='prime-detector'?9:preset==='cards'?cardBounds.initial:0;}
export function validateCounterValue(preset:CounterPreset,n:number){
 initialCounterValue(preset);
 const valid=preset==='prime-detector'?(primeChoices as readonly number[]).includes(n):preset==='sieve'?(sieveStages as readonly number[]).includes(n):preset==='divisibility'?n===0||(divisibilityChoices as readonly number[]).includes(n):Number.isSafeInteger(n)&&n>=0&&n<=10;
 if(!valid)throw new Error('Unsupported counterexample state');return n;
}
