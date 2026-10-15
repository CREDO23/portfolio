import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";

// Shared shapes: declared once, composed into collections with .extend().

const nonEmpty = z.string().min(1);
const link = z.url();
// "" marks a link that is not ready yet; components hide what it would render.
const linkOrPlaceholder = z.union([link, z.literal("")]);

// Astro returns entries sorted by id, not in file order, so each list item
// records its position in the file. Sort with src/content/listOrder.ts.
const ordered = z.object({ order: z.number().int() });

function listCollection<Item extends z.ZodType>(path: string, item: Item) {
  return defineCollection({
    loader: file(path, {
      parser: (text) =>
        (JSON.parse(text) as Record<string, unknown>[]).map((entry, order) => ({
          ...entry,
          order,
        })),
    }),
    schema: item.and(ordered),
  });
}

// Collections, in page order.

const site = defineCollection({
  loader: file("src/content/json/site.json"),
  schema: z.object({
    name: nonEmpty,
    description: nonEmpty,
    lang: nonEmpty,
    email: z.email(),
    location: nonEmpty,
    availability: nonEmpty,
    cvUrl: linkOrPlaceholder,
    linkedinUrl: link,
    blogUrl: link,
  }),
});

// Fixed UI words, so no component holds text.
const labels = defineCollection({
  loader: file("src/content/json/labels.json"),
  schema: z.object({
    emailMe: nonEmpty,
    bookCall: nonEmpty,
    downloadCv: nonEmpty,
    linkedinProfile: nonEmpty,
    allPosts: nonEmpty,
    skipToContent: nonEmpty,
  }),
});

const sections = listCollection(
  "src/content/json/sections.json",
  z.object({
    id: nonEmpty,
    title: nonEmpty,
    description: nonEmpty.optional(),
    // Header label; omitted when the section is not in the nav.
    nav: nonEmpty.optional(),
  }),
);

const intro = defineCollection({
  loader: glob({ pattern: "intro.md", base: "./src/content/markdown" }),
  schema: z.object({ headline: nonEmpty }),
});

export const collections = {
  site,
  labels,
  sections,
  intro,
};
