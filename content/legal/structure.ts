/**
 * The two legal pages: ids and ordering only.
 *
 * Section ids are anchor targets — `/privacy#how-it-is-protected` is the
 * address the movement will give when somebody asks how the roll is held — so
 * they are fixed here rather than derived from a heading that changes with the
 * language.
 *
 * The order of the imprint's particulars is also structural, and deliberately
 * so: the page says they will be published "in this order", which is a promise
 * about the sequence rather than about the words.
 */

export const privacySectionIds = [
  "what-we-collect",
  "membership",
  "how-it-is-protected",
  "forms",
  "analytics",
  "fonts-and-assets",
  "server-logs",
  "your-rights",
] as const;

export type PrivacySectionId = (typeof privacySectionIds)[number];

export const imprintEntryIds = [
  "publisher",
  "legal-form",
  "registered-address",
  "responsible",
  "register",
  "represented-by",
  "supervisory-authority",
] as const;

export type ImprintEntryId = (typeof imprintEntryIds)[number];
