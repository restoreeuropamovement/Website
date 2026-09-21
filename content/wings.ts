import type { ContentBlock } from "@/lib/content-types";
import { slugify } from "@/lib/utils";

/**
 * The national wings.
 *
 * A wing is the national level of the movement, sitting between regional
 * coordination and the European movement as a whole. Nothing on these pages
 * asserts that a wing is constituted, staffed or active: they set out what a
 * national wing is, what it is answerable for, and how to help establish one.
 */

export type WingRegion =
  | "Northern Europe"
  | "Western Europe"
  | "Southern Europe"
  | "Central and Eastern Europe";

/** Region order as it appears on the index. */
export const wingRegions: readonly WingRegion[] = [
  "Western Europe",
  "Northern Europe",
  "Southern Europe",
  "Central and Eastern Europe",
];

export interface Endonym {
  /** The country's name in one of its own official languages. */
  readonly name: string;
  /** BCP-47 tag, so assistive technology pronounces it correctly. */
  readonly lang: string;
}

export interface Wing {
  readonly slug: string;
  readonly country: string;
  readonly region: WingRegion;
  /**
   * Empty where the country's own name matches the English one, so the page
   * does not print the same word twice.
   */
  readonly endonyms: readonly Endonym[];
}

type WingSeed = Omit<Wing, "slug">;

const seeds: readonly WingSeed[] = [
  // Western Europe
  { country: "Austria", region: "Western Europe", endonyms: [{ name: "Österreich", lang: "de" }] },
  {
    country: "Belgium",
    region: "Western Europe",
    endonyms: [
      { name: "België", lang: "nl" },
      { name: "Belgique", lang: "fr" },
      { name: "Belgien", lang: "de" },
    ],
  },
  { country: "France", region: "Western Europe", endonyms: [] },
  { country: "Germany", region: "Western Europe", endonyms: [{ name: "Deutschland", lang: "de" }] },
  { country: "Liechtenstein", region: "Western Europe", endonyms: [] },
  {
    country: "Luxembourg",
    region: "Western Europe",
    endonyms: [{ name: "Lëtzebuerg", lang: "lb" }],
  },
  { country: "Monaco", region: "Western Europe", endonyms: [] },
  { country: "Netherlands", region: "Western Europe", endonyms: [{ name: "Nederland", lang: "nl" }] },
  {
    country: "Switzerland",
    region: "Western Europe",
    endonyms: [
      { name: "Schweiz", lang: "de" },
      { name: "Suisse", lang: "fr" },
      { name: "Svizzera", lang: "it" },
      { name: "Svizra", lang: "rm" },
    ],
  },

  // Northern Europe
  { country: "Denmark", region: "Northern Europe", endonyms: [{ name: "Danmark", lang: "da" }] },
  { country: "Estonia", region: "Northern Europe", endonyms: [{ name: "Eesti", lang: "et" }] },
  { country: "Finland", region: "Northern Europe", endonyms: [{ name: "Suomi", lang: "fi" }] },
  { country: "Iceland", region: "Northern Europe", endonyms: [{ name: "Ísland", lang: "is" }] },
  { country: "Ireland", region: "Northern Europe", endonyms: [{ name: "Éire", lang: "ga" }] },
  { country: "Latvia", region: "Northern Europe", endonyms: [{ name: "Latvija", lang: "lv" }] },
  { country: "Lithuania", region: "Northern Europe", endonyms: [{ name: "Lietuva", lang: "lt" }] },
  { country: "Norway", region: "Northern Europe", endonyms: [{ name: "Norge", lang: "nb" }] },
  { country: "Sweden", region: "Northern Europe", endonyms: [{ name: "Sverige", lang: "sv" }] },
  { country: "United Kingdom", region: "Northern Europe", endonyms: [] },

  // Southern Europe
  { country: "Albania", region: "Southern Europe", endonyms: [{ name: "Shqipëria", lang: "sq" }] },
  { country: "Andorra", region: "Southern Europe", endonyms: [] },
  {
    country: "Bosnia and Herzegovina",
    region: "Southern Europe",
    endonyms: [{ name: "Bosna i Hercegovina", lang: "bs" }],
  },
  { country: "Croatia", region: "Southern Europe", endonyms: [{ name: "Hrvatska", lang: "hr" }] },
  {
    country: "Cyprus",
    region: "Southern Europe",
    endonyms: [
      { name: "Κύπρος", lang: "el" },
      { name: "Kıbrıs", lang: "tr" },
    ],
  },
  { country: "Greece", region: "Southern Europe", endonyms: [{ name: "Ελλάδα", lang: "el" }] },
  { country: "Italy", region: "Southern Europe", endonyms: [{ name: "Italia", lang: "it" }] },
  { country: "Kosovo", region: "Southern Europe", endonyms: [{ name: "Kosova", lang: "sq" }] },
  { country: "Malta", region: "Southern Europe", endonyms: [] },
  { country: "Montenegro", region: "Southern Europe", endonyms: [{ name: "Crna Gora", lang: "cnr" }] },
  {
    country: "North Macedonia",
    region: "Southern Europe",
    endonyms: [{ name: "Северна Македонија", lang: "mk" }],
  },
  { country: "Portugal", region: "Southern Europe", endonyms: [] },
  { country: "San Marino", region: "Southern Europe", endonyms: [] },
  { country: "Serbia", region: "Southern Europe", endonyms: [{ name: "Србија", lang: "sr" }] },
  { country: "Slovenia", region: "Southern Europe", endonyms: [{ name: "Slovenija", lang: "sl" }] },
  { country: "Spain", region: "Southern Europe", endonyms: [{ name: "España", lang: "es" }] },

  // Central and Eastern Europe
  {
    country: "Bulgaria",
    region: "Central and Eastern Europe",
    endonyms: [{ name: "България", lang: "bg" }],
  },
  { country: "Czechia", region: "Central and Eastern Europe", endonyms: [{ name: "Česko", lang: "cs" }] },
  {
    country: "Hungary",
    region: "Central and Eastern Europe",
    endonyms: [{ name: "Magyarország", lang: "hu" }],
  },
  { country: "Moldova", region: "Central and Eastern Europe", endonyms: [] },
  { country: "Poland", region: "Central and Eastern Europe", endonyms: [{ name: "Polska", lang: "pl" }] },
  { country: "Romania", region: "Central and Eastern Europe", endonyms: [{ name: "România", lang: "ro" }] },
  { country: "Russia", region: "Central and Eastern Europe", endonyms: [{ name: "Россия", lang: "ru" }] },
  {
    country: "Slovakia",
    region: "Central and Eastern Europe",
    endonyms: [{ name: "Slovensko", lang: "sk" }],
  },
  { country: "Ukraine", region: "Central and Eastern Europe", endonyms: [{ name: "Україна", lang: "uk" }] },
];

export const wings: readonly Wing[] = seeds
  .map((seed) => ({ ...seed, slug: slugify(seed.country) }))
  .sort((a, b) => a.country.localeCompare(b.country, "en"));

/* ------------------------------------------------------------------ copy */

export const wingsMeta = {
  eyebrow: "Organisation",
  title: "A wing in every European nation.",
  lede: "Restore Europe is organised as a movement of national wings rather than as a single continental party. Each nation carries its own — answerable to the people who live there, and to nobody abroad.",
  intro: [
    {
      type: "lead",
      text: "Our programme holds that nothing should be governed at a higher level when it can be governed competently at a lower one. A movement that argued for subsidiarity and then organised itself as one undifferentiated European body would not deserve to be believed.",
    },
    {
      type: "paragraph",
      text: "So the movement is built the other way round. The national wing is the level at which political work actually happens: it carries the programme into the conditions of one country, contests elections under that country's law, holds its own statutes, and answers to its own members.",
    },
    {
      type: "paragraph",
      text: "What the wings hold in common is the [manifesto](/manifesto) and the [principles](/principles) that follow from it. What they do not hold in common is a single template for politics, because the conditions of Portugal and Estonia are not the same conditions.",
    },
  ] satisfies readonly ContentBlock[],
  note: "Wings are being established across the continent. If you would like to help start the one where you live, say so through Get Involved — it is the most useful thing anyone can do for the movement at this stage.",
} as const;

/** One sentence opening each national page. */
export const wingLead = (country: string): string =>
  `The wing in ${country} is the national level of Restore Europe — the body that carries our programme into ${country}'s own political conditions, and the level at which members there decide how it is pursued.`;

export const wingBody: readonly ContentBlock[] = [
  {
    type: "paragraph",
    text: "A national wing is not a branch office receiving instructions. It holds its own statutes, selects its own candidates, sets its own priorities within the common programme, and is answerable to its own members rather than to any body outside the country.",
  },
  {
    type: "paragraph",
    text: "What it does not do is decide matters that belong to a smaller body. Where a chapter can do the work, the work belongs to the chapter. The same restraint the movement asks of the state, it asks first of itself.",
  },
];

/** The four levels, from the smallest upward. Shared by every wing page. */
export const wingLayers: readonly { readonly label: string; readonly note: string }[] = [
  {
    label: "Local chapter",
    note: "The town or district. Meetings, local political work, and candidate selection where chapters are established.",
  },
  {
    label: "Regional coordination",
    note: "Support between chapters and shared organisation. No competence a chapter can hold for itself.",
  },
  {
    label: "National wing",
    note: "Statutes, programme, compliance with national party and electoral law, and national candidacies.",
  },
  {
    label: "European movement",
    note: "Only what the nations genuinely cannot do apart: defence, borders, strategic infrastructure, science, energy.",
  },
];

/** What a national wing is answerable for. Identical across all of them. */
export const wingRemit: readonly { readonly term: string; readonly description: string }[] = [
  {
    term: "The programme, in context",
    description:
      "Applying the manifesto to the actual conditions of the country — its housing market, its demography, its industry, its landscape — without altering what the movement holds in common.",
  },
  {
    term: "Elections and candidates",
    description:
      "Registration, candidate selection and contesting elections under national party and electoral law, in whatever form that law takes.",
  },
  {
    term: "Statutes and compliance",
    description:
      "Its own constitution, membership register, accounts and statutory reporting, published in the country where it operates.",
  },
  {
    term: "Chapters and regions",
    description:
      "Establishing local chapters, supporting regional coordination, and resisting the temptation to absorb what either can do itself.",
  },
  {
    term: "Language and publication",
    description:
      "Producing and maintaining the authoritative text of our documents in the national language. Translations are the wing's responsibility, and are not published until they are good.",
  },
  {
    term: "Representation in Europe",
    description:
      "Speaking for its members within the wider movement, and cooperating with the other wings on the matters that genuinely require it.",
  },
];

/* --------------------------------------------------------------- lookups */

export function getWing(slug: string): Wing | undefined {
  return wings.find((wing) => wing.slug === slug);
}

export function getWingsByRegion(region: WingRegion): readonly Wing[] {
  return wings.filter((wing) => wing.region === region);
}

export function getWingCountries(): readonly string[] {
  return wings.map((wing) => wing.country);
}
