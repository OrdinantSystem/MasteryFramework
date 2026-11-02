import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import {chapters,chapterFor} from './lib/navigation';
import {sourceCatalog,type SourceId} from './lib/sources';

const sourceIds=Object.keys(sourceCatalog) as [SourceId,...SourceId[]];
const chapterIds=chapters.map(c=>c.id) as [string,...string[]];
const reference=z.object({sourceId:z.enum(sourceIds),pages:z.array(z.number().int().positive()).min(1)});
const lessons = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/lessons' }),
  schema: z.object({
    course:z.enum(['linear-algebra','analysis']),
    chapter: z.enum(chapterIds),
    sourceId: z.enum(sourceIds),
    additionalSources:z.array(reference).default([]),
    thumbnail: z.enum(['shear-inverse','area','diagonal','signs','words','equivalence','negative-identity','inverse-product','sheet-recap','logic','quantifiers','number-sets','implication','parity','proof','irrational','boolean-laws','identity-laws','complement','de-morgan','nand']).optional(),
    locale: z.enum(['en', 'de', 'es']).default('en'),
    title: z.string(),
    description: z.string(),
    navTitle: z.string(),
    order: z.number().int().positive(),
    kind: z.enum(['concept', 'worked-problem', 'recap', 'note']),
    status: z.enum(['draft', 'published']).default('draft'),
    reviewStatus: z.enum(['unreviewed', 'needs-correction', 'reviewed']).default('unreviewed'),
    prerequisites: z.array(z.string()).default([]),
    sourcePages: z.array(z.number().int().positive()).default([]),
  }).superRefine((data,ctx)=>{
    if(chapterFor(data.chapter).course!==data.course)ctx.addIssue({code:'custom',message:'Chapter belongs to a different course'});
    const refs=[{sourceId:data.sourceId,pages:data.sourcePages},...data.additionalSources];
    if(new Set(refs.map(x=>x.sourceId)).size!==refs.length)ctx.addIssue({code:'custom',message:'Duplicate source reference'});
    for(const ref of refs)if(sourceCatalog[ref.sourceId].course!==data.course||ref.pages.some(p=>p>sourceCatalog[ref.sourceId].pages))ctx.addIssue({code:'custom',message:'Source course or page bounds mismatch'});
  }),
});

export const collections = { lessons };
