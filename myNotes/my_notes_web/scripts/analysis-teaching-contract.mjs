import {locales} from '../src/lib/i18n.ts';
import {presentationHashBeforeLocaleRetirement} from './localization-contract.mjs';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {sha,validateTeachingSource,validatePresentationReceipt} from './analysis-teaching-core.mjs';
export const teachingCoverage=JSON.parse(readFileSync('../docs/analysis-teaching-coverage.json','utf8'));
assert.equal(teachingCoverage.version,1);
assert.equal(teachingCoverage.status,'reviewed-teaching','Actual teaching edition requires independent semantic review');
const manifest=readFileSync('../docs/history/analysis-before-teaching/manifest.json','utf8');
assert.equal(sha(manifest),teachingCoverage.baseline_manifest_sha256,'Frozen baseline manifest changed');
const inputs=JSON.parse(manifest).filter(r=>locales.some(l=>r.path.includes(`/${l}/`)));
teachingCoverage.files=teachingCoverage.files.filter(r=>locales.some(l=>r.path.includes(`/${l}/`)));
assert.equal(teachingCoverage.files.length,7*locales.length);assert.equal(new Set(teachingCoverage.files.map(r=>r.path)).size,7*locales.length);
assert.deepEqual(teachingCoverage.files.map(r=>r.path).sort(),inputs.map(r=>r.path).sort(),'Review the actual teaching scope');
const reviewedReports=new Map;
function requireReport(review){
  assert.ok(review?.report&&review.report_sha256,'Exact review artifact required');
  if(!reviewedReports.has(review.report))reviewedReports.set(review.report,sha(readFileSync('../../'+review.report,'utf8')));
  assert.equal(reviewedReports.get(review.report),review.report_sha256,'Review artifact changed');
}
requireReport(teachingCoverage.presentation_review);
const actual=Object.fromEntries(Object.keys(teachingCoverage.presentation_review.sources).map(path=>[path,presentationHashBeforeLocaleRetirement(path,sha(readFileSync(path,'utf8')))]));
for(const path of ['src/components/interactive/Interactive.astro','src/components/interactive/AnalysisLab.astro','src/lib/interactive/analysis-scenes.ts','src/lib/interactive/analysis-copy.ts','src/components/AnalysisCourseIntroduction.astro','src/pages/[...path].astro','src/styles/analysis-lab.css'])assert.ok(path in actual,'Missing presentation dependency from review');
validatePresentationReceipt(actual,teachingCoverage.presentation_review);
const rows=new Map(teachingCoverage.files.map(r=>[r.path,r]));
for(const input of inputs){const row=rows.get(input.path);assert.equal(row.baseline,input.baseline);assert.equal(row.baseline_sha256,input.sha256);requireReport(row.review);}
/** Validate the real current edition BEFORE exposing its exact predecessor to historical gates. */
export function teachingBaselineSource(source,path){
  const row=rows.get(path);
  if(!row)return source;
  return validateTeachingSource(source,readFileSync('../../'+row.baseline,'utf8'),row,row.review);
}
