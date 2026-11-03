import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
const coverage=JSON.parse(await readFile('../docs/analysis-summary-coverage.json','utf8'));
assert.equal(coverage.baseline_commit,'4bb67fc7345a5c1bfb29a8b3703f15c50b4e77c3');
// Legacy gates retain their literal meaning against a hash-checked historical
// stage. The mandatory summary verifier checks the actual rewritten content.
export async function historicalAnalysisInput(path){
 const row=coverage.files.find(row=>row.path===path);
 assert.ok(row,`No historical Analysis input for ${path}`);
 const source=await readFile('../../'+row.archive,'utf8');
 assert.equal(createHash('sha256').update(source).digest('hex'),row.before_sha256);
 return source;
}
export const historicalAnalysisLabel='historical 4bb67fc baseline (active summaries checked separately)';
