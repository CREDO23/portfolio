import { getEntry } from "astro:content";

// The one-entry collections. A missing entry fails the build with a clear
// message instead of rendering an empty page.

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
