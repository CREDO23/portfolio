import { getEntry } from "astro:content";

// Entries the page cannot render without. A missing one fails the build with
// a clear message instead of rendering an empty page.

function missing(id: string, path: string): never {
  throw new Error(`Missing content: add an entry with id "${id}" to ${path}.`);
}

export async function getSite() {
  const entry = await getEntry("site", "site");
  return entry?.data ?? missing("site", "src/content/json/site.json");
}

export async function getLabels() {
  const entry = await getEntry("labels", "labels");
  return entry?.data ?? missing("labels", "src/content/json/labels.json");
}

/** The whole entry, so callers can render() its Markdown body. */
export async function getIntro() {
  const entry = await getEntry("intro", "intro");
  return entry ?? missing("intro", "src/content/markdown/intro.md");
}

/** A page section's title and description, by its id in sections.json. */
export async function getSection(id: string) {
  const entry = await getEntry("sections", id);
  return entry?.data ?? missing(id, "src/content/json/sections.json");
}
