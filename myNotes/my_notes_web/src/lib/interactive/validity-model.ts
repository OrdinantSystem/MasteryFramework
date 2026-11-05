export type InferenceForm='forward'|'reverse';
export const validityPresets=['countermodel','opening','warning'] as const;
export type ValidityPreset=typeof validityPresets[number];
export const validityFigureKinds=['validity-shape','validity-argument','validity-regions','validity-forward','validity-reverse','validity-test','validity-directions','validity-grid','validity-gates','validity-distinction'] as const;
export type ValidityFigureKind=typeof validityFigureKinds[number];
export const isValidityFigureKind=(kind:string):kind is ValidityFigureKind=>(validityFigureKinds as readonly string[]).includes(kind);
/** Check the inference over every assignment, independently of actual shape. */
export function assignments(form:InferenceForm){
 if(form!=='forward'&&form!=='reverse')throw new Error('Unknown inference form');
 return [false,true].flatMap(p=>[false,true].map(q=>({p,q,premises:[!p||q,form==='forward'?p:q],conclusion:form==='forward'?q:p})));
}
export const isValid=(form:InferenceForm)=>!assignments(form).some(row=>row.premises.every(Boolean)&&!row.conclusion);
export function shapeCase(shape:'S'|'R',form:InferenceForm='reverse',falsePremise=false){
 if(shape!=='S'&&shape!=='R')throw new Error('Unknown shape');
 const square=shape==='S',rectangle=true;
 const premises=falsePremise?[false,rectangle]:[true,form==='forward'?square:rectangle];
 return {shape,square,rectangle,premises,conclusion:falsePremise?square:form==='forward'?rectangle:square,valid:isValid(form),sound:isValid(form)&&premises.every(Boolean)};
}
export const argumentGrid=[{shape:'S',form:'forward',falsePremise:false},{shape:'R',form:'forward',falsePremise:true},{shape:'S',form:'reverse',falsePremise:false},{shape:'R',form:'reverse',falsePremise:false}] as const;
export function validateValidityChoice(preset:ValidityPreset,value:number){
 const count=preset==='opening'?3:preset==='warning'||preset==='countermodel'?2:0;
 if(!Number.isInteger(value)||value<0||value>=count)throw new Error('Invalid validity choice');
 return value;
}
