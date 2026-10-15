import type { Ordered, Period } from "./types";

/** File order: Astro returns entries sorted by id, so lists sort by this. */
export function byFileOrder(a: Ordered, b: Ordered): number {
  return a.order - b.order;
}

/**
 * Newest first (AGENTS.md): later start first; on the same start, ongoing
 * first, then later end. Equal periods keep file order.
 */
export function byNewest(a: Period & Ordered, b: Period & Ordered): number {
  if (a.start !== b.start) return b.start - a.start;
  if (a.end !== b.end) {
    if (a.end === null) return -1;
    if (b.end === null) return 1;
    return b.end - a.end;
  }
  return byFileOrder(a, b);
}
