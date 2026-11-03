import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {historicalAnalysisInput,historicalAnalysisLabel} from './analysis-preservation-input.mjs';

// This contract complements the historical paragraph ledger. A reviewed prose
// change is not permission to lose diagrams, proof displays or practice blocks.
const coverage=JSON.parse(await readFile('../docs/analysis-recap-coverage.json','utf8'));
const normalize=s=>s.replace(/\s+/g,' ').trim();
const sha=s=>createHash('sha256').update(s).digest('hex');
const inventory=items=>{const out={};for(const item of items){const key=sha(normalize(item));out[key]=(out[key]||0)+1;}return out;};
const matches=(s,re)=>[...s.matchAll(re)].map(m=>m[0]);
const languageLabel=/\*\*(?:EN|DE|ES):?\*\*/;
function disclosures(source){
 const stack=[],out=[];
 for(const match of source.matchAll(/<details(?:\s[^>]*)?>|<\/details>/g)){
  if(!match[0].startsWith('</'))stack.push(match.index);
  else{assert.ok(stack.length,'Unmatched details close');out.push(source.slice(stack.pop(),match.index+match[0].length));}
 }
 assert.equal(stack.length,0,'Unclosed details');return out;
}
function requireInventory(expected,actual,label){
 for(const [hash,n] of Object.entries(expected))assert.ok((actual[hash]||0)>=n,`${label}: lost protected block ${hash}`);
}
assert.equal(coverage.status,'reviewed-recap');
assert.equal(coverage.lessons.length,60);
assert.equal(new Set(coverage.lessons.map(r=>r.path)).size,60);
let exercises=0,graphics=0,tables=0,displayCount=0,anchorCount=0;
for(const row of coverage.lessons){
 const source=await historicalAnalysisInput(row.path);
 const label=`${row.locale}/${row.key}`;
 assert.equal(sha(source),row.after_sha256,`${label}: update the editorial review receipt after changes`);
 assert.match(row.before_sha256,/^[a-f0-9]{64}$/);
 assert.ok(row.review?.full_file_read&&row.review?.independent_reviewer,`${label}: independent full-file review is required`);
 assert.equal(row.review.reviewed_sha256,row.after_sha256,`${label}: the review must cover this exact edited version`);
 assert.ok(row.editorial_changes.length>0,`${label}: record changes or an explicit no-change disposition`);
 assert.equal(sha(source.slice(0,source.indexOf('---',3)+3)),row.frontmatter_sha256,`${label}: metadata/provenance remains unchanged`);
 assert.deepEqual([...source.matchAll(/<span id="([^"]+)"><\/span>/g)].map(m=>m[1]).sort(),[...row.anchors].sort(),`${label}: preserve all stable anchors`);
 anchorCount+=row.anchors.length;
 assert.ok(!languageLabel.test(source)&&!/\bEN\s*\/\s*DE\s*\/\s*ES/.test(source),`${label}: no parallel-language reading labels`);
 assert.ok(!/\|\s*EN\s*\|\s*DE\s*\|\s*ES\s*\|/.test(source),`${label}: localize comparison tables`);
 const visuals=inventory(matches(source,/<(?:NumberDomains|Interactive|ExpressionTrees|Flow|VectorFigure|ConceptMap|MatrixComparison|MatrixProduct|Explorer|VectorLab|ParameterExplorer|Thumbnail)\b[\s\S]*?\/>/g));
 assert.deepEqual(visuals,row.graphics,`${label}: preserve every graphical invocation and its configuration`);
 graphics+=Object.values(row.graphics).reduce((a,b)=>a+b,0);
 const displays=new Set(matches(source,/<Math\b[\s\S]*?\/>|(?<!\\)\$\$[\s\S]*?(?<!\\)\$\$/g).map(s=>sha(normalize(s))));
 for(const hash of row.displays)assert.ok(displays.has(hash),`${label}: lost distinct proof/formula display ${hash}`);
 displayCount+=row.displays.length;
 const exerciseBlocks=matches(source,/<Exercise\b[\s\S]*?<\/Exercise>/g);
 assert.equal(exerciseBlocks.length,row.exercise_count,`${label}: preserve exercise count`);
 const expected={...row.exercises};
 for(const change of row.exercise_localizations){
  assert.match(change.after_sha256,/^[a-f0-9]{64}$/);
  assert.ok(expected[change.before_sha256]>0);
  expected[change.before_sha256]--;if(!expected[change.before_sha256])delete expected[change.before_sha256];
  expected[change.after_sha256]=(expected[change.after_sha256]||0)+1;
  const actual=normalize(exerciseBlocks[change.index]);
  assert.equal(sha(actual),change.after_sha256,`${label}: only the reviewed reading localization is allowed`);
  assert.equal(sha(actual.slice(0,change.prefix_length)),change.prefix_sha256,`${label}: preserve localized exercise task/proof prefix`);
  assert.equal(sha(actual.slice(-change.suffix_length)),change.suffix_sha256,`${label}: preserve localized exercise suffix`);
 }
 assert.deepEqual(inventory(exerciseBlocks),expected,`${label}: preserve every task/solution, not just the count`);
 exercises+=exerciseBlocks.length;
 const protectedDisclosures={...row.disclosures};
 for(const exposed of row.exposed_explanations||[]){
  assert.ok(protectedDisclosures[exposed.before_sha256]>0);
  protectedDisclosures[exposed.before_sha256]--;if(!protectedDisclosures[exposed.before_sha256])delete protectedDisclosures[exposed.before_sha256];
  assert.ok(source.includes(exposed.prose)&&source.includes('### '+exposed.heading),`${label}: preserve the exposed explanation and its title verbatim`);
  assert.ok(!disclosures(source).some(block=>block.includes(exposed.prose)),`${label}: the explanation must be visible outside disclosures`);
 }
 requireInventory(protectedDisclosures,inventory(disclosures(source)),`${label} hints/reference answers`);
 const actualTables=matches(source,/(?:^\|.*\|\r?\n?)+/gm);
 requireInventory(row.tables,inventory(actualTables),`${label} mathematical tables`);
 tables+=Object.values(row.tables).reduce((a,b)=>a+b,0);
 for(const cells of row.localized_table_rows){
  assert.ok(actualTables.some(table=>table.split('\n').slice(2).some(line=>{
   const parts=line.trim().replace(/^\||\|$/g,'').split('|').map(s=>normalize(s));
   return parts.length===2&&parts[0]===normalize(cells[0])&&parts[1]===normalize(cells[1]);
  })),`${label}: retain both the comparison and its native-language reading`);
 }
}
console.log(`Verified recap preservation against ${historicalAnalysisLabel} in 60 locale files: ${exercises} exact/localization-only exercises, ${graphics} unchanged graphical invocations, ${tables} mathematical tables, ${displayCount} distinct per-file displays, ${anchorCount} stable anchors, and protected hints/reference answers. Editorial review is separate from mathematical certification.`);
