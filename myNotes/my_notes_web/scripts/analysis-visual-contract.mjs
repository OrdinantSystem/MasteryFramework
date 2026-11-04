import {locales} from '../src/lib/i18n.ts';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {teachingBaselineSource} from './analysis-teaching-contract.mjs';
const sha = s => createHash('sha256').update(s).digest('hex');
export const visualCoverage = JSON.parse(await readFile('../docs/analysis-visual-coverage.json','utf8'));
assert.equal(visualCoverage.version,1);
assert.equal(visualCoverage.files.length,60,'All twenty lessons in all three languages have a visual audit');
assert.equal(new Set(visualCoverage.files.map(row=>row.path)).size,60);
visualCoverage.files=visualCoverage.files.filter(row=>locales.some(l=>row.path.includes(`/${l}/`)));
/** Check the additive edition, then expose the unchanged independently reviewed summary to its original gates. */
export function reviewedSummarySource(source,path) {
  source=teachingBaselineSource(source,path);
  const row=visualCoverage.files.find(row=>row.path===path);
  if(!row){assert.ok(!source.includes('analysis-visual:start'),'Unregistered visual addition');return source;}
  assert.equal(sha(source),row.visual_source_sha256,`${path}: visual edition changed; review and record the actual addition`);
  for(const addition of row.additions){
    assert.equal(source.split(addition.block).length,2,`${path}: preserve each exact visible visual addition once`);
    source=source.replace(addition.block,'');
  }
  assert.ok(!source.includes('analysis-visual:start'),'Unregistered visual block');
  assert.equal(sha(source),row.reviewed_summary_sha256,`${path}: visual pass must preserve the entire reviewed summary, including all proofs and answers`);
  return source;
}
