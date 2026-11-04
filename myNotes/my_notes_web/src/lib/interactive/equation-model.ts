/** Equation transformations over the reals; UI bounds only limit illustrations. */
export const equationPresets={
 stones:{initial:3,choices:[3,2]},balance:{initial:0,choices:[0,1]},
 identity:{initial:2,min:-5,max:10,step:1},square:{initial:2,min:-3,max:3,step:.25},
 restriction:{initial:0,choices:[0,1]},division:{initial:0,choices:[0,2]},
 distance:{initial:5,min:0,max:6,step:.25},
} as const;
export type EquationPreset=keyof typeof equationPresets;
export const equationPresetNames=Object.keys(equationPresets) as EquationPreset[];
export function equationInput(preset:EquationPreset,raw:string){
 const spec=equationPresets[preset];if(!spec)throw new Error('Unknown equation preset');
 if(!raw.trim())return null;const value=Number(raw);if(!Number.isFinite(value))return null;
 if('choices' in spec)return (spec.choices as readonly number[]).includes(value)?value:null;
 const steps=(value-spec.min)/spec.step;
 return value>=spec.min&&value<=spec.max&&Math.abs(steps-Math.round(steps))<1e-9?value:null;
}
export function equationState(preset:EquationPreset,value:number){
 if(equationInput(preset,String(value))===null)throw new Error('Invalid equation state');
 return {preset,value,left:value+3,right:3+value,identityTrue:value+3===3+value,
  balanceTrue:value+3===8,squared:value*value,opposite:value===0?0:-value,
  roots:squarePreimages(4).filter(x=>preset!=='restriction'||value===0||x>=0),
  firstGroup:value,secondGroup:7-value,removed:value===1?3:0,
  originalProduct:value*(value-2)||0,divisionDefined:value!==0,
  distance:Math.abs(value-3),distanceTrue:Math.abs(value-3)===2};
}
export const squaredSolutions={original:[2],transformed:squarePreimages(4)} as const;
export function squarePreimages(output:number){
 if(!Number.isFinite(output)||output<0)throw new Error('A square output must be finite and nonnegative');
 const root=Math.sqrt(output);return root===0?[0]:[-root,root];
}
export const squareX=(x:number)=>320+x*80;
export const squareY=(y:number)=>290-y*26;
export const distanceX=(x:number)=>40+x*90;
