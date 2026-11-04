import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
export const sha=s=>createHash('sha256').update(s).digest('hex');
export const normalize=s=>s.replace(/\s+/g,' ').trim();
export const matches=(s,re)=>[...s.matchAll(re)].map(m=>m[0]);
export const body=s=>s.replace(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/,'');
export const units=s=>body(s).split(/\n\s*\n/).map(normalize).filter(Boolean);
const exerciseRE=/<Exercise\b[\s\S]*?<\/Exercise>/g;
const displayRE=/<Math\b[\s\S]*?\/>|(?<!\\)\$\$[\s\S]*?(?<!\\)\$\$/g;
export const graphicRE=/<(?:NumberDomains|Interactive|ExpressionTrees|AnalysisProof|Flow|VectorFigure|ConceptMap|MatrixComparison|MatrixProduct|Explorer|VectorLab|ParameterExplorer)\b[\s\S]*?\/>/g;
const counts=items=>{const out=new Map;for(const s of items)out.set(s,(out.get(s)||0)+1);return out;};
const occurrences=(s,t)=>s.split(t).length-1;
function contexts(source){
  const s=normalize(source),ranges=[],stack=[];
  for(const m of s.matchAll(/<details(?:\s[^>]*)?>|<\/details>/g)){
    if(m[0].startsWith('</')){
      assert.ok(stack.length,'Unmatched disclosure');const start=stack.pop();
      const summary=s.slice(start,m.index).match(/^\s*<summary>([\s\S]*?)<\/summary>/)?.[1]||'';
      const role=/^(?:hint|hinweis|pista)(?:\s|$)/iu.test(summary)?'hint':/^(?:reference|referenz|respuesta|lösung|solution|soluci[oó]n)/iu.test(summary)?'reference':'optional-task';
      ranges.push({start,end:m.index,role});
    }
    else stack.push(m.index+m[0].length);
  }
  assert.equal(stack.length,0,'Unclosed disclosure');
  for(const m of s.matchAll(/<Exercise\b[^>]*>[\s\S]*?<\/Exercise>/g))ranges.push({start:m.index+m[0].indexOf('>')+1,end:m.index+m[0].lastIndexOf('</Exercise>'),role:'exercise-solution'});
  return {s,roleAt:index=>ranges.filter(r=>r.start<=index&&index<r.end).sort((a,b)=>b.start-a.start)[0]?.role||'article'};
}
export function sourceUnits(source){
  const raw=body(source),ctx=contexts(raw);
  return [...raw.matchAll(/\S[\s\S]*?(?=\n\s*\n|$)/g)].map(m=>{
    const prefix=normalize(raw.slice(0,m.index));
    return {text:normalize(m[0]),role:ctx.roleAt(prefix.length+(prefix?1:0))};
  });
}
function countInRole(ctx,needle,role){
  let total=0,index=ctx.s.indexOf(needle);
  while(index>=0){if(ctx.roleAt(index)===role)total++;index=ctx.s.indexOf(needle,index+needle.length);}
  return total;
}
export function visibleOccurrence(source,needle){
  const {s,roleAt}=contexts(source);
  let index=s.indexOf(needle);
  while(index>=0){if(roleAt(index)==='article')return true;index=s.indexOf(needle,index+needle.length);}
  return false;
}
export function validateTeachingSource(source,baseline,row,receipt){
  assert.equal(sha(baseline),row.baseline_sha256,'Frozen teaching baseline changed');
  assert.equal(sha(source),row.current_sha256,'Teaching source changed after independent review');
  assert.ok(receipt?.baseline_full_read&&receipt?.current_full_read&&receipt?.including_answers,'Full old/current semantic review required');
  assert.equal(receipt.verdict,'pass','Pending or failed semantic review');
  assert.equal(receipt.current_sha256,row.current_sha256,'Stale semantic source receipt');
  assert.equal(receipt.baseline_sha256,row.baseline_sha256,'Stale semantic baseline receipt');
  const front=s=>s.match(/^---\r?\n[\s\S]*?\r?\n---/)[0];
  assert.equal(front(source),front(baseline),'Preserve metadata and reviewStatus');
  const currentContext=contexts(source),n=currentContext.s,oldUnits=sourceUnits(baseline);
  assert.equal(row.unit_map.length,oldUnits.length,'Every original paragraph/markup unit must have a disposition');
  const required=[];
  for(const [i,old] of oldUnits.entries()){
    const unit=row.unit_map[i];assert.equal(unit.ordinal,i);assert.equal(unit.before_sha256,sha(old.text),'Baseline unit identity mismatch');
    assert.ok(unit.reason.length>12&&unit.evidence.length,'Explain retained teaching role');
    if(unit.disposition==='retained')assert.deepEqual(unit.evidence,[old],'Retained units must preserve original text and task/hint/answer role');
    else assert.equal(unit.disposition,'reworded','Explicitly review intentional rewording');
    for(const e of unit.evidence){
      assert.ok(e.text.length&&n.includes(e.text),'Lost original prose, prompt, hint or reference reasoning');
      assert.ok(['article','optional-task','hint','reference','exercise-solution'].includes(e.role),'Explicit teaching role required');
      assert.ok(countInRole(currentContext,e.text,e.role)>0,'Original prompt, hint or answer changed its disclosure role');
      required.push(JSON.stringify([e.text,e.role]));
    }
  }
  for(const [key,count] of counts(required)){const [text,role]=JSON.parse(key);assert.ok(countInRole(currentContext,text,role)>=count,'Repeated original units cannot be silently substituted or moved into answers');}
  for(const re of [exerciseRE,/(?:^\|.*\|\r?\n?)+/gm,displayRE])for(const [item,count] of counts(matches(baseline,re).map(normalize)))assert.ok(occurrences(n,item)>=count,'Lost/duplicated substitute for an original exercise, table or display');
  for(const id of matches(baseline,/<span id="[^"]+"><\/span>/g))assert.equal(occurrences(source,id),occurrences(baseline,id),'Lost or duplicated stable anchor');
  const oldGraphics=matches(baseline,graphicRE).map(normalize);
  assert.equal(row.representations.length,oldGraphics.length,'Account for every original graphical invocation');
  for(const [i,old] of oldGraphics.entries()){
    const item=row.representations[i];assert.equal(item.before,old);assert.ok(n.includes(item.after),'Lost original graphical relationship');assert.ok(visibleOccurrence(source,item.after),'Core graphic hidden');
    const id=old.match(/\bid="([^"]+)"/)?.[1];if(id)assert.ok(item.after.includes(`id="${id}"`),'Preserve graphical anchors');
  }
  const oldExercise=counts(matches(baseline,exerciseRE).map(normalize)),added=[];
  for(const item of matches(source,exerciseRE).map(normalize)){const left=oldExercise.get(item)||0;if(left)oldExercise.set(item,left-1);else added.push(item);}
  assert.equal(added.length,row.new_tasks.length,'Every new task needs a reviewed question/solution objective');
  for(const [i,text] of added.entries()){const task=row.new_tasks[i];assert.equal(task.sha256,sha(text));assert.ok(task.question_objective.length>20&&task.solution_obligation.length>20,'New tasks need substantive obligations');}
  return baseline;
}
export function validatePresentationReceipt(actual,review){
  assert.equal(review?.verdict,'pass','Presentation semantic review required');
  assert.ok(review.full_sources_read&&review.report,'Presentation read receipt required');
  assert.deepEqual(actual,review.sources,'Shared presentation changed after review');
}
