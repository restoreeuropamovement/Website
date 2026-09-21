/**
 * The manifesto's skeleton: which sections exist, in what order, under what
 * numeral, and at what anchor.
 *
 * Shared by every language. A translation supplies text only, keyed by these
 * ids — so no translator can renumber a section, reorder the document, or move
 * an anchor that the policy catalogue's `manifestoBasis` links to.
 *
 * Numbering has been regularised against the received text, which numbered
 * *Work* as XIII a second time and *Restoration* as XXIII. They are set here as
 * XVIII and XXII so the sequence runs unbroken. No wording was altered.
 */
export interface ManifestoSectionStructure {
  /** Anchor id, and the key every translation is written against. */
  readonly id: string;
  /** Roman numeral as it appears in the document. Em dash for the preamble. */
  readonly numeral: string;
}

/**
 * `as const` so that `ManifestoSectionId` is a union of the actual ids rather
 * than plain `string`. That is what makes a translation missing a section — or
 * inventing one — a type error instead of a blank page.
 */
export const manifestoStructure = [
  { id: "preamble", numeral: "—" },
  { id: "moral-order", numeral: "I" },
  { id: "person-not-atom", numeral: "II" },
  { id: "family", numeral: "III" },
  { id: "nation", numeral: "IV" },
  { id: "immigration", numeral: "V" },
  { id: "europe", numeral: "VI" },
  { id: "economic-order", numeral: "VII" },
  { id: "corporatism", numeral: "VIII" },
  { id: "finance", numeral: "IX" },
  { id: "technology", numeral: "X" },
  { id: "human-scale-life", numeral: "XI" },
  { id: "stewardship", numeral: "XII" },
  { id: "architecture", numeral: "XIII" },
  { id: "education", numeral: "XIV" },
  { id: "subsidiarity", numeral: "XV" },
  { id: "democracy", numeral: "XVI" },
  { id: "culture", numeral: "XVII" },
  { id: "work", numeral: "XVIII" },
  { id: "foreign-policy", numeral: "XIX" },
  { id: "what-we-reject", numeral: "XX" },
  { id: "what-we-seek", numeral: "XXI" },
  { id: "restoration", numeral: "XXII" },
] as const satisfies readonly ManifestoSectionStructure[];

export type ManifestoSectionId = (typeof manifestoStructure)[number]["id"];
