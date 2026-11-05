import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import {chapters,chapterFor,courses,type CourseId} from './lib/navigation';
import {sourceCatalog,type SourceId} from './lib/sources';
import {locales} from './lib/i18n';

const sourceIds=Object.keys(sourceCatalog) as [SourceId,...SourceId[]];
const chapterIds=chapters.map(c=>c.id) as [string,...string[]];
const courseIds=courses.map(c=>c.id) as [CourseId,...CourseId[]];
const reference=z.object({sourceId:z.enum(sourceIds),pages:z.array(z.number().int().positive()).default([]),locations:z.array(z.string().trim().min(1)).default([])});
const lessons = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/lessons' }),
  schema: z.object({
    course:z.enum(courseIds),
    chapter: z.enum(chapterIds),
    sourceId: z.enum(sourceIds),
    additionalSources:z.array(reference).default([]),
    thumbnail: z.enum(['reasoning-arguments','reasoning-inquiry','reasoning-counterexample','reasoning-patterns','reasoning-proof','reasoning-equality','reasoning-algebra','reasoning','shear-inverse','area','diagonal','signs','words','equivalence','negative-identity','inverse-product','sheet-recap','logic','quantifiers','number-sets','implication','parity','proof','irrational','boolean-laws','identity-laws','complement','de-morgan','nand','learning-cycle','bloom','concept-map','explanation','practice','retrieval','workflow','hints','feedback','evidence','tutor','records','experiment','transcript']).optional(),
    locale: z.enum(locales).default('en'),
    title: z.string(),
    description: z.string(),
    navTitle: z.string(),
    order: z.number().int().positive(),
    kind: z.enum(['concept', 'worked-problem', 'recap', 'note']),
    status: z.enum(['draft', 'published']).default('draft'),
    reviewStatus: z.enum(['unreviewed', 'needs-correction', 'reviewed']).default('unreviewed'),
    prerequisites: z.array(z.string()).default([]),
    sourceLocations:z.array(z.string().trim().min(1)).default([]),
    sourcePages: z.array(z.number().int().positive()).default([]),
  }).superRefine((data,ctx)=>{
    if(chapterFor(data.chapter).course!==data.course)ctx.addIssue({code:'custom',message:'Chapter belongs to a different course'});
    const refs=[{sourceId:data.sourceId,pages:data.sourcePages,locations:data.sourceLocations},...data.additionalSources];
    if(new Set(refs.map(x=>x.sourceId)).size!==refs.length)ctx.addIssue({code:'custom',message:'Duplicate source reference'});
    for(const ref of refs){
      const source=sourceCatalog[ref.sourceId];
      if(source.course!==data.course||ref.pages.some(p=>p>source.pages))ctx.addIssue({code:'custom',message:'Source course or page bounds mismatch'});
      if(source.kind!=='pdf'&&(ref.pages.length>0||ref.locations.length===0))ctx.addIssue({code:'custom',message:'Text sources need section/timestamp locations, not PDF page numbers'});
    }
  }),
});

const courseGuides = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/course-guides' }),
  schema: z.object({
    course:z.enum(courseIds), locale:z.enum(locales), title:z.string(),
    reviewStatus:z.enum(['unreviewed','needs-correction','reviewed']).default('unreviewed'),
    sourceId:z.enum(sourceIds), sourcePages:z.array(z.number().int().positive()).default([]),
    sourceLocations:z.array(z.string()).default([]), additionalSources:z.array(reference).default([]),
  }).superRefine((data,ctx)=>{
    for(const ref of [{sourceId:data.sourceId,pages:data.sourcePages,locations:data.sourceLocations},...data.additionalSources]){
      const source=sourceCatalog[ref.sourceId];
      if(source.course!==data.course||ref.pages.some(p=>p>source.pages))ctx.addIssue({code:'custom',message:'Course-guide source mismatch'});
      if(source.kind!=='pdf'&&(ref.pages.length>0||!ref.locations.length))ctx.addIssue({code:'custom',message:'Course-guide text source needs locations'});
    }
  }),
});

export const collections = { lessons, courseGuides };
