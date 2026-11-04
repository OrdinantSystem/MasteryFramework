import {readFileSync} from 'node:fs';
import {teachingCoverage,teachingBaselineSource} from './analysis-teaching-contract.mjs';
for(const row of teachingCoverage.files)teachingBaselineSource(readFileSync(row.path,'utf8'),row.path);
console.log(`Verified ${teachingCoverage.files.length} actual teaching editions, ${teachingCoverage.files.reduce((n,r)=>n+r.unit_map.length,0)} retained/reviewed paragraph units, all original tasks/answers/graphics and exact presentation review versions.`);
