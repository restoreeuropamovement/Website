/**
 * The national wings: everything about them that is not words.
 *
 * Slugs are live URLs and region ids are anchor targets, so both belong here
 * rather than in a language file. The index page used to derive its anchors by
 * lowercasing the region heading, which works exactly as long as the heading is
 * in English — `#western-europe` would have become `#westeuropa` the moment a
 * German edition existed, breaking every link already pointing at it.
 *
 * Endonyms are words, but they are not *translatable* words: a country's name
 * in its own language is the same on the Polish page as on the English one.
 * They are therefore structural. Where an endonym collides with the name the
 * current edition uses — "Österreich" under a German heading already reading
 * Österreich — the edition drops it, so the page never prints one word twice.
 */

export const wingRegionIds = ["western", "northern", "southern", "central-eastern"] as const;

/** Region order as it appears on the index. */
export type WingRegionId = (typeof wingRegionIds)[number];

/** The four levels of the movement, smallest first. */
export const wingLayerIds = ["chapter", "regional", "national", "european"] as const;

export type WingLayerId = (typeof wingLayerIds)[number];

/**
 * `national` is singled out on every wing page. It is compared by id, not by
 * label: the old `layer.label === "National wing"` test silently stopped
 * matching in every language but one.
 */
export const NATIONAL_LAYER: WingLayerId = "national";

/** What a national wing is answerable for. Identical across all of them. */
export const wingRemitIds = [
  "programme",
  "elections",
  "statutes",
  "chapters",
  "language",
  "europe",
] as const;

export type WingRemitId = (typeof wingRemitIds)[number];

export interface Endonym {
  /** The country's name in one of its own official languages. */
  readonly name: string;
  /** BCP-47 tag, so assistive technology pronounces it correctly. */
  readonly lang: string;
}

export interface WingStructure {
  /** Part of a published URL. Never derive this from a country name again. */
  readonly slug: string;
  readonly region: WingRegionId;
  readonly endonyms: readonly Endonym[];
}

export const wingStructure = [
  { slug: "albania", region: "southern", endonyms: [{ name: "Shqipëria", lang: "sq" }] },
  { slug: "andorra", region: "southern", endonyms: [{ name: "Andorra", lang: "ca" }] },
  { slug: "austria", region: "western", endonyms: [{ name: "Österreich", lang: "de" }] },
  {
    slug: "belgium",
    region: "western",
    endonyms: [
      { name: "België", lang: "nl" },
      { name: "Belgique", lang: "fr" },
      { name: "Belgien", lang: "de" },
    ],
  },
  {
    slug: "bosnia-and-herzegovina",
    region: "southern",
    endonyms: [{ name: "Bosna i Hercegovina", lang: "bs" }],
  },
  { slug: "bulgaria", region: "central-eastern", endonyms: [{ name: "България", lang: "bg" }] },
  { slug: "croatia", region: "southern", endonyms: [{ name: "Hrvatska", lang: "hr" }] },
  {
    slug: "cyprus",
    region: "southern",
    endonyms: [
      { name: "Κύπρος", lang: "el" },
      { name: "Kıbrıs", lang: "tr" },
    ],
  },
  { slug: "czechia", region: "central-eastern", endonyms: [{ name: "Česko", lang: "cs" }] },
  { slug: "denmark", region: "northern", endonyms: [{ name: "Danmark", lang: "da" }] },
  { slug: "estonia", region: "northern", endonyms: [{ name: "Eesti", lang: "et" }] },
  { slug: "finland", region: "northern", endonyms: [{ name: "Suomi", lang: "fi" }] },
  { slug: "france", region: "western", endonyms: [{ name: "France", lang: "fr" }] },
  { slug: "germany", region: "western", endonyms: [{ name: "Deutschland", lang: "de" }] },
  { slug: "greece", region: "southern", endonyms: [{ name: "Ελλάδα", lang: "el" }] },
  { slug: "hungary", region: "central-eastern", endonyms: [{ name: "Magyarország", lang: "hu" }] },
  { slug: "iceland", region: "northern", endonyms: [{ name: "Ísland", lang: "is" }] },
  { slug: "ireland", region: "northern", endonyms: [{ name: "Éire", lang: "ga" }] },
  { slug: "italy", region: "southern", endonyms: [{ name: "Italia", lang: "it" }] },
  { slug: "kosovo", region: "southern", endonyms: [{ name: "Kosova", lang: "sq" }] },
  { slug: "latvia", region: "northern", endonyms: [{ name: "Latvija", lang: "lv" }] },
  {
    slug: "liechtenstein",
    region: "western",
    endonyms: [{ name: "Liechtenstein", lang: "de" }],
  },
  { slug: "lithuania", region: "northern", endonyms: [{ name: "Lietuva", lang: "lt" }] },
  { slug: "luxembourg", region: "western", endonyms: [{ name: "Lëtzebuerg", lang: "lb" }] },
  { slug: "malta", region: "southern", endonyms: [{ name: "Malta", lang: "mt" }] },
  { slug: "moldova", region: "central-eastern", endonyms: [{ name: "Moldova", lang: "ro" }] },
  { slug: "monaco", region: "western", endonyms: [{ name: "Monaco", lang: "fr" }] },
  { slug: "montenegro", region: "southern", endonyms: [{ name: "Crna Gora", lang: "cnr" }] },
  { slug: "netherlands", region: "western", endonyms: [{ name: "Nederland", lang: "nl" }] },
  {
    slug: "north-macedonia",
    region: "southern",
    endonyms: [{ name: "Северна Македонија", lang: "mk" }],
  },
  { slug: "norway", region: "northern", endonyms: [{ name: "Norge", lang: "nb" }] },
  { slug: "poland", region: "central-eastern", endonyms: [{ name: "Polska", lang: "pl" }] },
  { slug: "portugal", region: "southern", endonyms: [{ name: "Portugal", lang: "pt" }] },
  { slug: "romania", region: "central-eastern", endonyms: [{ name: "România", lang: "ro" }] },
  { slug: "russia", region: "central-eastern", endonyms: [{ name: "Россия", lang: "ru" }] },
  { slug: "san-marino", region: "southern", endonyms: [{ name: "San Marino", lang: "it" }] },
  { slug: "serbia", region: "southern", endonyms: [{ name: "Србија", lang: "sr" }] },
  { slug: "slovakia", region: "central-eastern", endonyms: [{ name: "Slovensko", lang: "sk" }] },
  { slug: "slovenia", region: "southern", endonyms: [{ name: "Slovenija", lang: "sl" }] },
  { slug: "spain", region: "southern", endonyms: [{ name: "España", lang: "es" }] },
  { slug: "sweden", region: "northern", endonyms: [{ name: "Sverige", lang: "sv" }] },
  {
    slug: "switzerland",
    region: "western",
    endonyms: [
      { name: "Schweiz", lang: "de" },
      { name: "Suisse", lang: "fr" },
      { name: "Svizzera", lang: "it" },
      { name: "Svizra", lang: "rm" },
    ],
  },
  { slug: "ukraine", region: "central-eastern", endonyms: [{ name: "Україна", lang: "uk" }] },
  {
    slug: "united-kingdom",
    region: "northern",
    endonyms: [{ name: "United Kingdom", lang: "en" }],
  },
] as const satisfies readonly WingStructure[];

/**
 * Every slug, as a union. This is what makes a language file's country list
 * exhaustive: omit a nation and the build fails rather than the page rendering
 * a blank cell in one language.
 */
export type WingSlug = (typeof wingStructure)[number]["slug"];
