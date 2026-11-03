// Count authored natural-language words, including hidden practice/answers.
// Fixed mathematics, graphical configuration/captions and markup are excluded.
// This measures prose length, not reading time or semantic preservation.
export function proseWords(raw){
 let text=raw.replace(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/,'').replace(/\{\/\*[\s\S]*?\*\/\}/g,'');
 text=text.replace(/<(Exercise|Note)\b((?:"[^"]*"|'[^']*'|[^'">])*)>/g,(_,tag,attrs)=>{
  const name=tag==='Exercise'?'question':'title';
  const value=attrs.match(new RegExp('\\b'+name+'="([^"]*)"'));
  return value?'\n'+value[1]+'\n':'\n';
 });
 text=text.replace(/<Math\b(?:"[^"]*"|'[^']*'|[^'">])*\/>/g,' ');
 text=text.replace(/(?<!\\)\$\$[\s\S]*?(?<!\\)\$\$/g,' ').replace(/(?<!\\)\$(?!\$)[^$\n]*?(?<!\\)\$/g,' ');
 text=text.replace(/\[([^\]]+)\]\((?:https?:\/\/|\.\.?\/|\/|#)[^)]*\)/g,'$1');
 text=text.replace(/<\/?[A-Za-z][\w-]*(?:\s+(?:"[^"]*"|'[^']*'|[^'">])*)?\s*\/?>/g,' ');
 return text.match(/\p{L}+(?:['’\-]\p{L}+)*/gu)||[];
}
export const proseCount=raw=>proseWords(raw).length;
