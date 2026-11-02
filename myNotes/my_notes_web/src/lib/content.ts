import {getCollection} from 'astro:content';
import {validateOutline,type CourseId} from './navigation';
import type {Locale} from './i18n';
export const base=import.meta.env.BASE_URL.replace(/\/$/,'');
export const url=(path='')=>`${base}/${path.replace(/^\//,'')}`;
export const localeUrl=(locale:Locale='en',path='')=>url(`${locale==='en'?'':locale+'/'}${path}`);
export const courseUrl=(course:CourseId,locale:Locale='en')=>localeUrl(locale,`${course}/`);
export const lessonUrl=(key:string,locale:Locale='en',course:CourseId='linear-algebra')=>localeUrl(locale,`${course==='analysis'?'analysis/':''}lessons/${key}/`);
export async function getLessons(locale:Locale='en',course?:CourseId) {
 const all=await getCollection('lessons');
 const published=all.filter(l=>l.data.status==='published'&&l.data.locale===locale).map(l=>({...l,key:l.id.split('/').at(-1)!})).sort((a,b)=>a.data.course.localeCompare(b.data.course)||a.data.order-b.data.order);
 validateOutline(published.map(l=>({course:l.data.course,chapter:l.data.chapter,order:l.data.order})));
 if(new Set(published.map(l=>l.data.course+':'+l.data.order)).size!==published.length)throw new Error('Duplicate lesson order in a course');
 if(new Set(published.map(l=>l.data.course+':'+l.key)).size!==published.length)throw new Error('Duplicate lesson key in a course');
 for(const l of published) {
  for(const lang of ['en','de','es'])if(!all.some(entry=>entry.data.locale===lang&&entry.id.split('/').at(-1)===l.key&&entry.data.status==='published'&&entry.data.course===l.data.course&&entry.data.chapter===l.data.chapter&&entry.data.order===l.data.order&&entry.data.sourceId===l.data.sourceId&&JSON.stringify(entry.data.sourcePages)===JSON.stringify(l.data.sourcePages)&&JSON.stringify(entry.data.additionalSources)===JSON.stringify(l.data.additionalSources)))throw new Error(`Missing/mismatched translation ${lang}/${l.data.course}/${l.key}`);
  if(!l.id.startsWith(locale+'/'))throw new Error(`Locale folder mismatch ${l.id}`);
  const cohort=published.filter(p=>p.data.course===l.data.course),ids=new Set(cohort.map(l=>l.key));
  for(const id of l.data.prerequisites)if(!ids.has(id))throw new Error(`Unavailable course prerequisite ${l.data.course}/${id}`);
  const visit=(key:string,stack:Set<string>)=>{if(stack.has(key))throw new Error(`Prerequisite cycle ${key}`);cohort.find(p=>p.key===key)!.data.prerequisites.forEach(p=>visit(p,new Set([...stack,key])))};
  visit(l.key,new Set());
 }
 return course?published.filter(l=>l.data.course===course):published;
}
