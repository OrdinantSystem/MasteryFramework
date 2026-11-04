import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
const sha=source=>createHash('sha256').update(source).digest('hex');
const extension=JSON.parse(readFileSync('../docs/reasoning-shared-extension.json','utf8'));
/** Validate the complete new source, then reconstruct the exact prior Analysis dependency. */
export function sourceBeforeReasoningExtension(path,source){
 const row=extension.sources[path];
 if(!row)return source;
 assert.equal(sha(source),row.after_sha256,`${path}: reasoning extension changed; inspect and record its actual source`);
 for(const change of [...row.changes].reverse()){
  assert.equal(source.split(change.after).length,2,`${path}: extension must occur exactly once`);
  source=source.replace(change.after,change.before);
 }
 assert.equal(sha(source),row.before_sha256,`${path}: preserve the entire previous presentation source`);
 return source;
}
