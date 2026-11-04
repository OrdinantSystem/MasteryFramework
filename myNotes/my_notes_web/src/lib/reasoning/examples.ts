/** Shared finite examples: drawings and numerical captions use these same objects. */
export const counterSets = {a:['a'], b:['b']};
export const peopleSets = {a:['Alex','Sam'], b:['Sam','Jo']};
export const shoePairs = [['L₁','R₁'],['L₂','R₂']] as const;
export const matching = {from:['a₁','a₂','a₃'],to:['b₁','b₂','b₃'],arrows:[[0,0],[1,1],[2,2]] as const};
export const additionInputs = [[1,1],[2,3],[4,0]] as const;

export function finiteSets<T>(a:readonly T[],b:readonly T[]){
 const left=[...new Set(a)],right=[...new Set(b)];
 const intersection=left.filter(x=>right.includes(x)),union=[...new Set([...left,...right])];
 return {left,right,intersection,union,disjoint:intersection.length===0};
}
export function isBijection(from:readonly string[],to:readonly string[],arrows:readonly (readonly [number,number])[]){
 if(new Set(from).size!==from.length||new Set(to).size!==to.length)return false;
 return arrows.length===from.length&&arrows.length===to.length
  &&arrows.every(([a,b])=>Number.isInteger(a)&&Number.isInteger(b)&&a>=0&&a<from.length&&b>=0&&b<to.length)
  &&new Set(arrows.map(([a])=>a)).size===from.length
  &&new Set(arrows.map(([,b])=>b)).size===to.length;
}
export function addNaturals(a:number,b:number){
 if(!Number.isSafeInteger(a)||!Number.isSafeInteger(b)||a<0||b<0||!Number.isSafeInteger(a+b))throw new Error('Addition example requires nonnegative safe integers');
 return a+b;
}
