/**
 * The shape of the about page, shared by all six languages.
 *
 * Section ids and their order, and nothing else. An id is an anchor somebody
 * may have linked to, so it cannot live in a file that gets rewritten once per
 * language — see content/manifesto/structure.ts, which exists for the same
 * reason.
 *
 * `as const` makes `AboutSectionId` the union of exactly these six, so a
 * translation that omits one is a build error rather than a missing section.
 */
export const aboutStructure = [
  "who-we-are",
  "why-restoration",
  "what-we-believe",
  "political-method",
  "how-we-organize",
  "democratic-commitment",
] as const;

export type AboutSectionId = (typeof aboutStructure)[number];

/**
 * How many leadership slots the page renders.
 *
 * The roles themselves are words and live in the language files; that there
 * are two of them, in this order, is structure. No leadership has been
 * appointed and no biographies are invented — these render as empty slots
 * until somebody actually holds them.
 */
export const leadershipStructure = ["leader", "co-leader"] as const;

export type LeadershipSlotId = (typeof leadershipStructure)[number];
