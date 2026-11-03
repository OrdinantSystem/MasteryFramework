import assert from 'node:assert/strict';
import {readFile,readdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {proseCount} from './analysis-prose.mjs';
const coverage=JSON.parse(await readFile('../docs/analysis-summary-coverage.json','utf8'));
const normalize=s=>s.replace(/\s+/g,' ').trim();
const sha=s=>createHash('sha256').update(s).digest('hex');
const matches=(s,re)=>[...s.matchAll(re)].map(m=>m[0]);
const inventory=items=>{const out={};for(const s of items){const h=sha(normalize(s));out[h]=(out[h]||0)+1;}return out;};
function details(source){
 const stack=[],out=[];
 for(const m of source.matchAll(/<details(?:\s[^>]*)?>|<\/details>/g)){
  if(!m[0].startsWith('</'))stack.push(m.index);
  else{assert.ok(stack.length,'Unmatched disclosure');out.push({start:stack.at(-1),text:source.slice(stack.pop(),m.index+m[0].length)});}
 }
 assert.equal(stack.length,0,'Unclosed disclosure');return out;
}
assert.equal(coverage.status,'reviewed-summary','Do not publish a summary before independent semantic review');
assert.equal(coverage.files.length,63);
assert.equal(new Set(coverage.files.map(r=>r.path)).size,63);
const expectedPaths=[];
for(const locale of ['en','de','es']){
 for(const name of (await readdir(`src/content/lessons/${locale}/analysis`)).filter(n=>n.endsWith('.mdx')))expectedPaths.push(`src/content/lessons/${locale}/analysis/${name}`);
 expectedPaths.push(`src/content/course-guides/${locale}/analysis.mdx`);
}
assert.deepEqual(coverage.files.map(r=>r.path).sort(),expectedPaths.sort(),'Review every actual Analysis lesson and guide, not a same-size substitute set');
for(const [path,hash] of Object.entries(coverage.legacy_contracts))assert.equal(sha(await readFile('../../'+path,'utf8')),hash,'Historical preservation contracts remain unchanged');
const totals={};let exerciseCount=0,graphicCount=0,tableCount=0,displayCount=0,anchorCount=0;
for(const row of coverage.files){
 const old=await readFile('../../'+row.archive,'utf8'),source=await readFile(row.path,'utf8'),label=`${row.locale}/${row.kind}/${row.key}`;
 assert.equal(sha(old),row.before_sha256,`${label}: exact public pre-summary input`);
 assert.equal(sha(source),row.after_sha256,`${label}: renew exact-version semantic review after changes`);
 assert.equal(row.before_prose_words,proseCount(old));assert.equal(row.after_prose_words,proseCount(source));
 assert.ok(row.review?.baseline_full_read&&row.review?.current_full_read&&row.review?.including_answers&&row.review?.independent_reviewer,`${label}: full independent review, not inventory-only credit`);
 assert.equal(row.review.reviewed_sha256,row.after_sha256);
 assert.equal(row.review.verdict,'pass');
 if(row.kind==='guide'){
  assert.equal(row.recall_questions?.length,5,`${label}: retain all overview recall questions`);
  for(const [i,q] of row.recall_questions.entries()){
   assert.equal(q.ordinal,i+1);
   assert.ok(normalize(old).includes(normalize(q.baseline_exact))&&normalize(source).includes(normalize(q.current_exact)),`${label}: recall question in both actual versions`);
   assert.ok(q.objective.length>10);
  }
  const task=row.combined_reference_problem;
  assert.ok(task?.obligation.length>10&&normalize(old).includes(normalize(task.baseline_exact))&&normalize(source).includes(normalize(task.current_exact)),`${label}: retain the combined non-Exercise reference problem`);
  assert.equal(row.review.reference_tasks_reviewed,true);
 }
 assert.equal(sha(source.slice(0,source.indexOf('---',3)+3)),row.frontmatter_sha256,`${label}: unchanged metadata/provenance`);
 assert.deepEqual([...source.matchAll(/<span id="([^"]+)"><\/span>/g)].map(m=>m[1]).sort(),[...row.anchors].sort(),`${label}: stable anchors`);
 assert.deepEqual(matches(source,/^#{1,6} .+$/gm),row.headings,`${label}: stable heading/navigation structure`);
 assert.ok(!/\*\*(?:EN|DE|ES):?\*\*|\bEN\s*\/\s*DE\s*\/\s*ES/.test(source),`${label}: page-language prose only`);
 const graphics=inventory(matches(source,/<(?:NumberDomains|Interactive|ExpressionTrees|Flow|VectorFigure|ConceptMap|MatrixComparison|MatrixProduct|Explorer|VectorLab|ParameterExplorer|Thumbnail)\b[\s\S]*?\/>/g));
 assert.deepEqual(graphics,row.graphics,`${label}: all graphics and configuration unchanged`);
 assert.deepEqual(inventory(matches(source,/(?:^\|.*\|\r?\n?)+/gm)),row.tables,`${label}: all mathematical/native-reading tables unchanged`);
 const displays=new Set(matches(source,/<Math\b[\s\S]*?\/>|(?<!\\)\$\$[\s\S]*?(?<!\\)\$\$/g).map(s=>sha(normalize(s))));
 for(const hash of row.displays)assert.ok(displays.has(hash),`${label}: missing distinct mathematical display`);
 const exercise=matches(source,/<Exercise\b[\s\S]*?<\/Exercise>/g);
 assert.equal(exercise.length,row.exercise_count,`${label}: no dropped exercises`);
 assert.equal(row.exercise_map.length,row.exercise_count);
 for(const [index,map] of row.exercise_map.entries()){
  assert.equal(map.ordinal,index);
  assert.equal(map.before_sha256,row.exercise_before[index]);
  assert.equal(map.after_sha256,sha(normalize(exercise[index])));
  assert.ok(map.task_objective.length>10&&map.solution_obligation.length>10,`${label}: retain each task and complete solution goal`);
  assert.equal(map.independently_reviewed,true);
 }
 assert.deepEqual(matches(source,/<summary>[\s\S]*?<\/summary>/g),row.summary_labels,`${label}: no added hiding or changed practice structure`);
 const allDetails=details(source);assert.equal(allDetails.length,row.details_count);
 const graphicTags=matches(source,/<(?:NumberDomains|Interactive|ExpressionTrees|Flow|VectorFigure|ConceptMap|MatrixComparison|MatrixProduct|Explorer|VectorLab|ParameterExplorer)\b[\s\S]*?\/>/g);
 for(const tag of graphicTags)assert.ok(!allDetails.some(d=>d.text.includes(tag)),`${label}: keep graphics visible`);
 assert.ok(row.learning_material_map.length>0,`${label}: learning-material dispositions required`);
 for(const unit of row.learning_material_map){
  assert.ok(unit.objective.length>10&&unit.retained_evidence.length>20);
  assert.ok(normalize(source).includes(normalize(unit.retained_evidence)),`${label}: retained material must be in the active summary, not only the archive`);
  assert.equal(unit.independently_reviewed,true);
 }
 const t=totals[row.locale]??={before:0,after:0,files:0};t.before+=row.before_prose_words;t.after+=row.after_prose_words;t.files++;
 exerciseCount+=exercise.length;graphicCount+=Object.values(row.graphics).reduce((a,b)=>a+b,0);tableCount+=Object.values(row.tables).reduce((a,b)=>a+b,0);displayCount+=row.displays.length;anchorCount+=row.anchors.length;
}
for(const locale of ['en','de','es']){
 const t=totals[locale];assert.equal(t.files,21);
 const actual=(t.before-t.after)/t.before;
 if(actual<coverage.prose_target.preferred_min||actual>coverage.prose_target.preferred_max)assert.ok(coverage.reduction_exceptions?.[locale]?.length>40,`${locale}: explicitly justify a departure from the approximate reduction target`);
 console.log(`${locale}: ${t.before} → ${t.after} authored prose words (${(actual*100).toFixed(2)}% shorter), including all closed practice/answers.`);
 const lessonFiles=(await readdir(`src/content/lessons/${locale}/analysis`)).filter(n=>n.endsWith('.mdx'));assert.equal(lessonFiles.length,20);
}
console.log(`Verified CURRENT summaries: 63 reviewed locale files, ${exerciseCount} mapped exercises, ${graphicCount} graphical invocations, ${tableCount} exact tables, ${displayCount} distinct displays and ${anchorCount} anchors. Semantic preservation relies on explicit independent full-text review, not word counts.`);
