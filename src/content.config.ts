import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

// Shared shapes: declared once, composed into collections with .extend().

const nonEmpty = z.string().min(1);
const link = z.url();
// "" marks a link that is not ready yet; components hide what it would render.
const linkOrPlaceholder = z.union([link, z.literal("")]);

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

export const collections = {
  site,
  labels,
};
