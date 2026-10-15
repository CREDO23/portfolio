import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

// One entry: the name, description and language used in the page head.
const site = defineCollection({
  loader: file("src/content/site.json"),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    lang: z.string(),
  }),
});

export const collections = { site };
