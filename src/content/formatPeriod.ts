import type { Period } from "./types";

/**
 * "2025 — now", "2024 — 2025", or "2023" when a period starts and ends in the
 * same year. `now` is the word for ongoing periods, from labels.json.
 */
export function formatPeriod({ start, end }: Period, now: string): string {
  if (end === start) return String(start);
  return `${start} — ${end ?? now}`;
}
