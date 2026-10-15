// Item types for components, derived from the schemas in src/content.config.ts
// so they cannot drift from them.
import type { CollectionEntry } from "astro:content";

export type OpenSourceItem = CollectionEntry<"openSource">["data"];
export type ExperienceItem = CollectionEntry<"experience">["data"];
export type LabItem = CollectionEntry<"labs">["data"];
export type GuideItem = Extract<
  CollectionEntry<"writing">["data"],
  { kind: "guide" }
>;
export type PostItem = Extract<
  CollectionEntry<"writing">["data"],
  { kind: "post" }
>;
export type CommunityItem = CollectionEntry<"community">["data"];
export type EducationItem = CollectionEntry<"education">["data"];
export type ContactGroup = CollectionEntry<"contact">["data"];
export type SocialLink = CollectionEntry<"social">["data"];
export type SectionInfo = CollectionEntry<"sections">["data"];
export type Period = Pick<ExperienceItem, "start" | "end">;
export type Ordered = Pick<SectionInfo, "order">;
