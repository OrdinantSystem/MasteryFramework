/** Finite inspections of argument form, independent of category names or preference. */
export const argumentPresets=['appeals','xray','countermodel','only','practice'] as const;
export type ArgumentPreset=typeof argumentPresets[number];
export const argumentFigures=['argument-structure','argument-dimensions','argument-two-pass'] as const;
export type ArgumentFigure=typeof argumentFigures[number];
export const isArgumentFigure=(s:string):s is ArgumentFigure=>(argumentFigures as readonly string[]).includes(s);
export type Membership=readonly [boolean,boolean,boolean];
export const membershipRows:Membership[]=[false,true].flatMap(a=>[false,true].flatMap(b=>[false,true].map(c=>[a,b,c] as const)));
export function setInference(row:Membership,form:'chain'|'shared'){
 const [a,b,c]=row;
 return {premises:[!a||b,form==='chain'?!b||c:!a||c],conclusion:form==='chain'?!a||c:!b||c};
}
export const setCountermodels=(form:'chain'|'shared')=>membershipRows.filter(row=>{const r=setInference(row,form);return r.premises.every(Boolean)&&!r.conclusion;});
export const sharedWitness:Membership=[false,true,false];
/** All means on time suffices; only means review requires on time. */
export function policyAllows(onTime:boolean,reviewed:boolean,only:boolean){return only?(!reviewed||onTime):(!onTime||reviewed);}
export function validateArgument(preset:ArgumentPreset,value:number){const max=preset==='xray'?5:1;if(!(argumentPresets as readonly string[]).includes(preset)||!Number.isInteger(value)||value<0||value>max)throw new Error('Invalid argument state');return value;}
export function judgmentFeedback(preset:'appeals'|'practice',a:number|null,b:number|null){
 const answers=preset==='appeals'?[1,1]:[1,0];return a===null||b===null?'unanswered':a===answers[0]&&b===answers[1]?'matches':'compare';
}
