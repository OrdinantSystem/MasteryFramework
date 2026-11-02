import assert from 'node:assert/strict';
import {readFile,readdir} from 'node:fs/promises';
import {processes} from '../src/lib/learning/diagrams.ts';
import {studyTemplates} from '../src/lib/learning/templates.ts';
import {questionLenses} from '../src/lib/learning/questions.ts';
import {courses,areas,chaptersFor} from '../src/lib/navigation.ts';
assert.equal(new Set(courses.map(c=>c.id)).size,courses.length);
for(const course of courses){assert.ok(areas.some(a=>a.id===course.area));assert.ok(chaptersFor(course.id).length);}
for(const [name,graph] of Object.entries(processes)){
 const ids=new Set(graph.nodes.map(n=>n.id));assert.equal(ids.size,graph.nodes.length);
 for(const n of graph.nodes){assert.ok(n.x>=0&&n.x+350<=940);assert.ok(n.y>=0&&n.y+90<=graph.height);for(const l of ['en','de','es'])assert.ok(n.label[l]&&n.detail[l]);}
 for(const edge of graph.edges){assert.ok(ids.has(edge.from)&&ids.has(edge.to));assert.notEqual(edge.from,edge.to);}
 const visited=new Set(),visit=id=>{if(visited.has(id))return;visited.add(id);graph.edges.filter(e=>e.from===id).forEach(e=>visit(e.to));};visit(graph.nodes[0].id);assert.equal(visited.size,ids.size,`${name}: every stage must be reachable`);
 for(const n of graph.nodes.filter(n=>n.decision)){const branches=graph.edges.filter(e=>e.from===n.id);assert.equal(branches.length,2);assert.ok(branches.every(e=>e.label),'Decision branches need explicit outcomes');}
}
assert.equal(questionLenses.length,6);assert.equal(new Set(questionLenses.map(q=>q.id)).size,6);
for(const locale of ['en','de','es']){
 for(const [kind,entry] of Object.entries(studyTemplates[locale]))assert.equal(await readFile(`public/templates/${kind}.${locale}.md`,'utf8'),entry.join('\n\n'),'Visible template and download must agree');
 const dir=`src/content/lessons/${locale}/learning`,names=await readdir(dir);assert.equal(names.length,17);
 const sources=await Promise.all(names.map(name=>readFile(`${dir}/${name}`,'utf8')));
 assert.equal(sources.filter(s=>/^sourceId: "transcript-/m.test(s)).length,4);
 for(const source of sources){assert.match(source,/sourcePages: \[\]/);assert.match(source,/sourceLocations:/);assert.match(source,/reviewStatus: "unreviewed"/);}
}
console.log('Verified three process graphs and branches, six question lenses, nine localized template downloads, and 51 learning lessons with section/timestamp provenance.');
