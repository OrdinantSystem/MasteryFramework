/** Two specified rules, not an inference engine for arbitrary sequences. */
export type PatternRule='A'|'B';
export type PatternPreset='continuations'|'next-test';
export const patternFigureKinds=['pattern-history','pattern-machines','pattern-rules','pattern-test','pattern-forecasts','pattern-challenge'] as const;
export type PatternFigureKind=typeof patternFigureKinds[number];
export const isPatternFigureKind=(kind:string):kind is PatternFigureKind=>(patternFigureKinds as readonly string[]).includes(kind);
function positiveRound(n:number){if(!Number.isSafeInteger(n)||n<1)throw new Error('A round must be a positive safe integer');}
export function machineValue(rule:PatternRule,n:number){
 positiveRound(n);if(rule!=='A'&&rule!=='B')throw new Error('Unknown machine rule');
 const value=rule==='A'||n<=5?2**n:32+2*(n-5);
 if(!Number.isSafeInteger(value))throw new Error('Value exceeds exact integer arithmetic');return value;
}
export const observedRounds=[1,2,3,4,5] as const;
export const observedLights=observedRounds.map(n=>machineValue('A',n));
export const continuationChoices=[5,6,7,8] as const;
export const testChoices=[3,5,6] as const;
export function continuationState(through:number){
 if(!(continuationChoices as readonly number[]).includes(through))throw new Error('Invalid illustrated horizon');
 return {through,rows:Array.from({length:through},(_,i)=>{const round=i+1;return {round,observed:round<=5,a:machineValue('A',round),b:machineValue('B',round)};})};
}
export function testState(round:number){
 if(round!==0&&!(testChoices as readonly number[]).includes(round))throw new Error('Invalid test round');
 return {round,a:round?machineValue('A',round):null,b:round?machineValue('B',round):null,distinguishes:round>0&&machineValue('A',round)!==machineValue('B',round)};
}
export function survivingRules(observed:number){
 if(!Number.isSafeInteger(observed)||observed<0)throw new Error('A light count must be nonnegative');
 return (['A','B'] as const).filter(rule=>machineValue(rule,6)===observed);
}
export function challengeValue(rule:PatternRule,n:number){
 positiveRound(n);if(rule!=='A'&&rule!=='B')throw new Error('Unknown challenge rule');
 const value=rule==='A'||n<=4?3*2**(n-1):24+3*(n-4);
 if(!Number.isSafeInteger(value))throw new Error('Value exceeds exact integer arithmetic');return value;
}
export const forecastWeeks=[1,2,3,4,5,6] as const;
/** Reconstructed illustrative values from the owner's chart; no real channel data. */
export const channelFutures={continues:[100,150,220,320,460,660],slows:[100,150,220,320,250,220]} as const;
export const patternX=(round:number)=>70+(round-1)*70;
export const patternY=(count:number)=>290-count/256*220;
export const forecastX=(week:number)=>70+(week-1)*100;
export const forecastY=(views:number)=>280-views/800*220;
