/** Pure Boolean operations; no string evaluation or external state. */
export type Operation='implication'|'contrapositive'|'converse'|'inverse'|'not'|'and'|'or';
export const operations:Operation[]=['implication','contrapositive','converse','inverse','not','and','or'];
export function evaluate(op:Operation,a:boolean,b:boolean):boolean{switch(op){case 'implication':return !a||b;case 'contrapositive':return b||!a;case 'converse':return !b||a;case 'inverse':return a||!b;case 'not':return nand(a,a);case 'and':{const n=nand(a,b);return nand(n,n)}case 'or':return nand(nand(a,a),nand(b,b));}}
export const nand=(a:boolean,b:boolean)=>!(a&&b);
export const formula:Record<Operation,string>={implication:'A ⇒ B',contrapositive:'¬B ⇒ ¬A',converse:'B ⇒ A',inverse:'¬A ⇒ ¬B',not:'A | A',and:'(A | B) | (A | B)',or:'(A | A) | (B | B)'};
export const assignments=[[false,false],[false,true],[true,false],[true,true]] as const;
export const equivalent=(x:Operation,y:Operation)=>assignments.every(([a,b])=>evaluate(x,a,b)===evaluate(y,a,b));

/** TeX counterparts for visible equations; plain formulas remain useful for SVG descriptions. */
export const formulaTex:Record<Operation,string>={implication:'A \\Rightarrow B',contrapositive:'\\neg B \\Rightarrow \\neg A',converse:'B \\Rightarrow A',inverse:'\\neg A \\Rightarrow \\neg B',not:'A \\mid A',and:'(A \\mid B) \\mid (A \\mid B)',or:'(A \\mid A) \\mid (B \\mid B)'};
