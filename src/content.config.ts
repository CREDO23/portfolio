import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";

// Shared shapes: declared once, composed into collections with .extend().

const nonEmpty = z.string().min(1);
const link = z.url();
// "" marks a link that is not ready yet; components hide what it would render.
const linkOrPlaceholder = z.union([link, z.literal("")]);
const year = z.number().int();

// `end: null` means ongoing ("now").
const period = z
  .object({ start: year, end: year.nullable() })
  .refine(({ start, end }) => end === null || end >= start, {
    message: "end must be null (ongoing) or a year no earlier than start",
    path: ["end"],
  });

const linkedItem = z.object({
  title: nonEmpty,
  href: link,
  description: nonEmpty,
});

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

// Built from `period` so its end >= start check carries over:
// `linkedItem.extend(period.shape)` would drop the check.
const openSource = listCollection(
  "src/content/json/open-source.json",
  period.extend(linkedItem.shape),
);

const experience = listCollection(
  "src/content/json/experience.json",
  period.extend({ role: nonEmpty, org: nonEmpty }),
);

const labs = listCollection(
  "src/content/json/labs.json",
  linkedItem.extend({ stack: nonEmpty }),
);

const writing = listCollection(
  "src/content/json/writing.json",
  z.discriminatedUnion("kind", [
    linkedItem.extend({ kind: z.literal("guide"), status: nonEmpty }),
    z.object({ kind: z.literal("post"), title: nonEmpty, href: link, year }),
  ]),
);

export const collections = {
  site,
  labels,
  sections,
  intro,
  openSource,
  experience,
  labs,
  writing,
};
