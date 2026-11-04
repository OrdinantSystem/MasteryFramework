import {locales} from '../src/lib/i18n.ts';
import assert from 'node:assert/strict';
import {readFileSync,writeFileSync,mkdirSync,copyFileSync,mkdtempSync} from 'node:fs';
import {dirname,join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
const root=fileURLToPath(new URL('../../../',import.meta.url)),app=fileURLToPath(new URL('../',import.meta.url));
const contract=JSON.parse(readFileSync(root+'/myNotes/docs/analysis-summary-coverage.json','utf8'));
assert.equal(contract.status,'reviewed-summary','Only run acceptance fixtures after actual independent review');
const scratch=process.env.TMPDIR||join(app,'.astro');mkdirSync(scratch,{recursive:true});
const temp=mkdtempSync(join(scratch,'analysis-summary-gate-')),cwd=temp+'/myNotes/my_notes_web';
const put=(path,s)=>{mkdirSync(dirname(path),{recursive:true});writeFileSync(path,s);};
const copy=(from,to)=>{mkdirSync(dirname(to),{recursive:true});copyFileSync(from,to);};
for(const r of contract.files.filter(r=>locales.includes(r.locale))){copy(app+'/'+r.path,cwd+'/'+r.path);copy(root+'/'+r.archive,temp+'/'+r.archive);}
for(const p of Object.keys(contract.legacy_contracts))copy(root+'/'+p,temp+'/'+p);
for(const s of ['verify-analysis-summary.mjs','analysis-prose.mjs','analysis-visual-contract.mjs','analysis-teaching-contract.mjs','analysis-teaching-core.mjs','localization-contract.mjs'])copy(app+'/scripts/'+s,cwd+'/scripts/'+s);
copy(root+'/myNotes/docs/analysis-visual-coverage.json',temp+'/myNotes/docs/analysis-visual-coverage.json');
const teaching=JSON.parse(readFileSync(root+'/myNotes/docs/analysis-teaching-coverage.json','utf8'));
copy(root+'/myNotes/docs/localization-retirement.json',temp+'/myNotes/docs/localization-retirement.json');
copy(app+'/src/lib/i18n.ts',cwd+'/src/lib/i18n.ts');
copy(root+'/myNotes/docs/analysis-teaching-coverage.json',temp+'/myNotes/docs/analysis-teaching-coverage.json');
copy(root+'/myNotes/docs/history/analysis-before-teaching/manifest.json',temp+'/myNotes/docs/history/analysis-before-teaching/manifest.json');
for(const row of teaching.files.filter(r=>locales.some(l=>r.path.includes(`/${l}/`)))){copy(root+'/'+row.baseline,temp+'/'+row.baseline);copy(root+'/'+row.review.report,temp+'/'+row.review.report);}
copy(root+'/'+teaching.presentation_review.report,temp+'/'+teaching.presentation_review.report);
for(const p of Object.keys(teaching.presentation_review.sources))copy(app+'/'+p,cwd+'/'+p);
const target=temp+'/myNotes/docs/analysis-summary-coverage.json',results=[];
const sha=s=>createHash('sha256').update(s).digest('hex');
function run(name,mutate,expected){
 const c=structuredClone(contract),restore=[];
 const edit=(row,change,renew=false)=>{const path=cwd+'/'+row.path,old=readFileSync(path,'utf8'),next=change(old);assert.notEqual(next,old);restore.push([path,old]);put(path,next);if(renew){row.after_sha256=sha(next);row.review.reviewed_sha256=row.after_sha256;}};
 mutate(c,edit);put(target,JSON.stringify(c));
 const p=spawnSync(process.execPath,['scripts/verify-analysis-summary.mjs'],{cwd,encoding:'utf8'});
 for(const [path,s] of restore)put(path,s);
 assert.equal(p.status===0,expected,`${name}: ${p.stdout}\n${p.stderr}`);results.push({name,expected_pass:expected,actual_pass:p.status===0});
}
run('reviewed actual supported-locale contract',()=>{},true);
run('unreviewed contract rejected',c=>c.status='editing',false);
run('stale current content hash rejected', (c,e)=>e(c.files[0],s=>s+'\nChanged prose.\n'),false);
run('pending semantic unit rejected',c=>c.files[0].learning_material_map[0].independently_reviewed=false,false);
run('pending exercise review rejected',c=>c.files.find(r=>r.exercise_count).exercise_map[0].independently_reviewed=false,false);
run('missing exercise rejected even if version hashes renewed',(c,e)=>e(c.files.find(r=>r.exercise_count),s=>s.replace(/<Exercise\b[\s\S]*?<\/Exercise>/,''),true),false);
run('missing graphic rejected even if version hashes renewed',(c,e)=>e(c.files.find(r=>Object.keys(r.graphics).length),s=>s.replace(/<(?:NumberDomains|Interactive|ExpressionTrees|Flow|VectorFigure|ConceptMap|MatrixComparison|MatrixProduct|Explorer|VectorLab|ParameterExplorer|Thumbnail)\b[\s\S]*?\/>/,''),true),false);
run('overview recall inventory incomplete',c=>c.files.find(r=>r.kind==='guide').recall_questions.pop(),false);
run('overview reference problem not reviewed',c=>c.files.find(r=>r.kind==='guide').review.reference_tasks_reviewed=false,false);
run('same-size substitute review set rejected',c=>c.files[0].path='src/content/lessons/en/linear-algebra/not-analysis.mdx',false);
if(process.env.SUMMARY_FIXTURE_REPORT)put(process.env.SUMMARY_FIXTURE_REPORT,JSON.stringify({fixture_directory:temp,results},null,2)+'\n');
console.log('Passed',results.length,'positive/negative current-summary acceptance fixtures.');
