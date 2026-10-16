import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";

// Shared shapes: declared once, composed into collections with .extend().

const nonEmpty = z.string().min(1);
const link = z.url();
// "" marks a link that is not ready yet; components hide what it would render.
const linkOrPlaceholder = z.union([link, z.literal("")]);
// A file served from public/, e.g. "/thierry-bakera-cv.pdf". A single leading
// slash: "//host/x" would point to another site.
const publicFile = z
  .string()
  .regex(/^\/[^/]/, "must be a file in public/, like /file.pdf");
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
    // The meta description and the Intro headline. Search results show
    // about 155 characters; anything longer gets cut off there.
    description: nonEmpty,
    lang: nonEmpty,
    email: z.email(),
    location: nonEmpty,
    availability: nonEmpty,
    cvUrl: z.union([publicFile, linkOrPlaceholder], {
      error:
        'must be a file in public/ like /cv.pdf, a full URL, or "" while not ready',
    }),
    // Social preview: 1200×630, the size BaseLayout declares to crawlers.
    ogImage: publicFile,
    ogImageAlt: nonEmpty,
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
    // Shown for ongoing periods: "2025 — now".
    now: nonEmpty,
    // Screen-reader name of the header nav.
    mainNav: nonEmpty,
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
    // Shows the nav entry as a Pill (Contact).
    navPill: z.boolean().optional(),
  }),
);

const intro = defineCollection({
  loader: glob({ pattern: "intro.md", base: "./src/content/markdown" }),
  // No frontmatter: the headline is site.description, kept in one place.
  schema: z.strictObject({}),
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

const community = listCollection(
  "src/content/json/community.json",
  period.extend({
    org: nonEmpty,
    href: link.optional(),
    role: nonEmpty,
    description: nonEmpty,
  }),
);

const education = listCollection(
  "src/content/json/education.json",
  period.extend(linkedItem.shape),
);

// The component builds the mailto: link from site.email and emailSubject.
const contact = listCollection(
  "src/content/json/contact.json",
  z.object({
    title: nonEmpty,
    text: nonEmpty,
    emailSubject: nonEmpty,
    bookingUrl: linkOrPlaceholder,
    showCv: z.boolean(),
  }),
);

// The Email entry takes its address from site.email, so it is set in one place.
const social = listCollection(
  "src/content/json/social.json",
  z.union(
    [
      z.object({ label: nonEmpty, href: link }),
      z.object({ label: nonEmpty, siteEmail: z.literal(true) }),
    ],
    { error: 'needs an href, or "siteEmail": true for the Email link' },
  ),
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
  community,
  education,
  contact,
  social,
};
