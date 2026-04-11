import { defineCollection, z } from 'astro:content';

const sections = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    order: z.number(),
    icon: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = { sections };
