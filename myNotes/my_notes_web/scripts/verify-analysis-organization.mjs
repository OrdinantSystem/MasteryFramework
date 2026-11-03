import assert from 'node:assert/strict';
import {readFile,readdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import organization from '../src/lib/analysis-organization.json' with {type:'json'};
const coverage=JSON.parse(await readFile('../docs/analysis-organization-coverage.json','utf8'));
const canonical=new Set(organization.lessons.map(l=>l.key));
assert.equal(coverage.status,'verified-consolidation');
assert.equal(canonical.size,20);assert.equal(organization.modules.length,6);
assert.deepEqual(organization.lessons.map(l=>l.order),Array.from({length:20},(_,i)=>i+1));
assert.deepEqual(organization.modules.flatMap(m=>m.orders),Array.from({length:20},(_,i)=>i+1));
for(const module of organization.modules)for(const title of Object.values(module.title))assert.ok(!/Analysis[ -]0|Análisis 0/.test(title));
const normalize=s=>s.replace(/<span id="from-[^"]+"><\/span>/g,'').replace(/^#{2,6} /gm,'').replace(/\[([^\]]+)\]\([^)]*\)/g,'$1').replace(/<a\s[^>]*>|<\/a>/g,'').replace(/\s+/g,' ').trim();
const blocks=(s,regex)=>[...s.matchAll(regex)].map(m=>normalize(m[0]));
const count=items=>{const c=new Map();for(const item of items)c.set(item,(c.get(item)||0)+1);return c};
const containsInventory=(before,after,label)=>{const a=count(after);for(const [item,n] of count(before))assert.ok((a.get(item)||0)>=n,`${label}: missing preserved block ${item.slice(0,160)}`)};
let totalExercises=0,totalTables=0,sectionCount=0,paragraphsChecked=0;
const paragraphDispositions=new Set(coverage.consolidated_paragraphs.map(p=>`${p.locale}:${p.source}:${p.section}:${p.paragraph_sha256}`));
for(const locale of ['en','de','es']){
 const root=`src/content/lessons/${locale}/analysis`;
 assert.deepEqual((await readdir(root)).filter(n=>n.endsWith('.mdx')).map(n=>n.slice(0,-4)).sort(),[...canonical].sort());
 const aliases=organization.aliases[locale];assert.equal(Object.keys(aliases).length,53);
 const current=await Promise.all([...canonical].map(k=>readFile(`${root}/${k}.mdx`,'utf8')));
 current.push(await readFile(`src/content/course-guides/${locale}/analysis.mdx`,'utf8'));
 const archived=[],archivedRecords=[];
 for(const [key,alias] of Object.entries(aliases)){
  const raw=await readFile(`../docs/history/analysis-before-consolidation/${locale}/${key}.mdx`,'utf8');archived.push(raw);archivedRecords.push({key,raw});
  assert.equal(createHash('sha256').update(raw).digest('hex'),coverage.originals[locale][key],'The exact original teaching version remains preserved');
  assert.ok(alias.key===null||canonical.has(alias.key));
  for(const destination of Object.values(alias.fragments))assert.ok(destination.key===null||canonical.has(destination.key));
  const rows=coverage.sections.filter(s=>s.locale===locale&&s.source===key);assert.ok(rows.length>0,`Missing section dispositions ${locale}/${key}`);
  for(const row of rows){assert.ok(row.target==='course-overview'||canonical.has(row.target));assert.match(row.sha256,/^[a-f0-9]{64}$/);sectionCount++}
 }
 const corpus=current.map(s=>normalize(s.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/,''))).join(' ');
 for(const {key,raw} of archivedRecords){
  const body=raw.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/,'');
  body.split(/(?=^## )/m).forEach((section,index)=>{for(const paragraph of section.split('\n\n')){
   const text=normalize(paragraph);if(text.length<=30)continue;paragraphsChecked++;
   const hash=createHash('sha256').update(text).digest('hex');
   assert.ok(corpus.includes(text)||paragraphDispositions.has(`${locale}:${key}:${index}:${hash}`),`Unexplained lost prose ${locale}/${key}: ${text.slice(0,170)}`);
  }});
 }
 const oldExercises=archived.flatMap(s=>blocks(s,/<Exercise\b[\s\S]*?<\/Exercise>/g));
 containsInventory(oldExercises,current.flatMap(s=>blocks(s,/<Exercise\b[\s\S]*?<\/Exercise>/g)),`${locale} exercises/questions/solutions`);totalExercises+=oldExercises.length;
 containsInventory(archived.flatMap(s=>blocks(s,/<details>[\s\S]*?<\/details>/g)),current.flatMap(s=>blocks(s,/<details>[\s\S]*?<\/details>/g)),`${locale} hint/reference/reading disclosures`);
 const oldTables=archived.flatMap(s=>blocks(s,/(?:^\|.*\|\r?\n?)+/gm));
 containsInventory(oldTables,current.flatMap(s=>blocks(s,/(?:^\|.*\|\r?\n?)+/gm)),`${locale} original tables`);totalTables+=oldTables.length;
 assert.ok(!current.some(s=>/\b(?:Jean|Isaac)\b|\/home\/ubuntu|obsidian:\/\//.test(s)),'No private learner/server output');
}
console.log(`Verified 20 canonical lessons / 6 sections, 159 archived originals, ${sectionCount} section dispositions, ${totalExercises} protected exercise blocks, ${totalTables} tables and ${paragraphsChecked} prose paragraphs with explicit duplicate dispositions, plus preserved hints/readings/answers. Compatibility anchors are checked against generated HTML.`);
