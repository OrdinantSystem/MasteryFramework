import organization from './analysis-organization.json' with {type:'json'};
import type {Locale} from './i18n';
export interface AnalysisDestination {key:string|null;anchor:string}
export interface AnalysisAlias extends AnalysisDestination {order:number;title:string;fragments:Record<string,AnalysisDestination>}
export const analysisAliases=organization.aliases as Record<Locale,Record<string,AnalysisAlias>>;
export const canonicalAnalysisKeys=new Set(organization.lessons.map(lesson=>lesson.key));
