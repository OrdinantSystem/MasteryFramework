import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {locales} from '../src/lib/i18n.ts';

// Keep the original semantic-review receipt frozen. This separate mechanical
// migration records only removal of Spanish entries from shared presentation copy.
const retirement=JSON.parse(readFileSync('../docs/localization-retirement.json','utf8'));
assert.deepEqual(retirement.supported_locales,locales);
export function presentationHashBeforeLocaleRetirement(path,currentHash){
  const change=retirement.presentation_sources[path];
  if(!change)return currentHash;
  assert.equal(currentHash,change.after_sha256,`${path}: presentation changed after locale retirement`);
  return change.before_sha256;
}
