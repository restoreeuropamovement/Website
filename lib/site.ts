/**
 * Site-wide configuration.
 *
 * Canonical URLs, the sitemap and Open Graph tags are all built from `SITE_URL`,
 * so it has to be the origin visitors actually reach — scheme included, no
 * trailing slash. `NEXT_PUBLIC_SITE_URL` overrides the default, which is useful
 * for preview deployments where the origin differs per branch.
 *
 * The apex is canonical. If `www` is ever served as well it should redirect here
 * rather than answer, so that a page is not indexed at two addresses — and so
 * that `ADMIN_ORIGIN` has one value to match. Note that the WebAuthn relying
 * party in `lib/admin/env.ts` is the bare registrable domain, which covers apex
 * and `www` alike; only the origin is exact.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://restoreeuropa.eu"
).replace(/\/$/, "");

export const site = {
  /**
   * Dominant brand mark, and the name the prose uses as a subject — "Restore
   * Europe holds that…". Deliberately not an acronym: the policy catalogue
   * states positions in sentences, and initials read badly there.
   */
  short: "Restore Europe",
  /**
   * The remainder of the full name. The stacked wordmark sets it beneath the
   * mark in small capitals, so the two together read "Restore Europe Movement"
   * without either line repeating the other.
   */
  descriptor: "Movement",
  /** Formal name, used where an institution would sign itself. */
  name: "Restore Europe Movement",
  formal: "Restore Europe Movement",
  tagline: "For a Christian, European and Human-Scale Civilization.",
  description:
    "Restore Europe Movement is a political movement of Europe's national peoples, for a Christian, European and human-scale civilization: family, widespread property, national continuity, subsidiarity, stewardship and technology under human control.",
  closing: "Receive. Renew. Transmit.",
  locale: "en_GB",
  url: SITE_URL,
} as const;

export interface NavItem {
  readonly label: string;
  readonly href: string;
  /** Shown beneath the label in the fullscreen mobile navigation. */
  readonly description: string;
}

export const primaryNav: readonly NavItem[] = [
  {
    label: "Principles",
    href: "/principles",
    description: "The sixteen commitments that define our politics.",
  },
  {
    label: "Manifesto",
    href: "/manifesto",
    description: "The founding document, in full.",
  },
  {
    label: "Policy",
    href: "/policy",
    description: "Searchable positions, topic by topic.",
  },
  {
    label: "Vision",
    href: "/vision",
    description: "What the programme means in ordinary life.",
  },
  {
    label: "About",
    href: "/about",
    description: "Who we are and how we organise.",
  },
  {
    label: "Wings",
    href: "/wings",
    description: "The national wing in each European nation.",
  },
  {
    label: "Journal",
    href: "/journal",
    description: "Essays, analysis and argument.",
  },
];

export const ctaNav = {
    label: "Join the Movement",
  href: "/join",
} as const;

export const footerNav: readonly {
  readonly title: string;
  readonly items: readonly { readonly label: string; readonly href: string }[];
}[] = [
  {
    title: "The Movement",
    items: [
      { label: "Principles", href: "/principles" },
      { label: "Manifesto", href: "/manifesto" },
      { label: "Policy Catalogue", href: "/policy" },
      { label: "Vision", href: "/vision" },
      { label: "About", href: "/about" },
      { label: "National Wings", href: "/wings" },
      { label: "Journal", href: "/journal" },
      { label: "Get Involved", href: "/join" },
    ],
  },
  {
    title: "Contact",
    items: [
      { label: "Contact", href: "/contact" },
      { label: "Press", href: "/contact#press" },
      { label: "Research", href: "/contact#research" },
      { label: "Local Chapters", href: "/contact#chapters" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy", href: "/privacy" },
      { label: "Imprint", href: "/imprint" },
    ],
  },
];

/**
 * Social accounts are not yet established. These entries render as
 * non-interactive placeholders rather than dead links.
 */
export const socialPlaceholders: readonly { readonly label: string }[] = [
  { label: "Newsletter" },
  { label: "Video" },
  { label: "Discussion" },
  { label: "Press Releases" },
];

export interface LanguageOption {
  readonly code: string;
  readonly label: string;
  readonly endonym: string;
  readonly available: boolean;
}

/**
 * Only English exists. Translations are not fabricated; the other entries are
 * shown as forthcoming and are not selectable.
 */
export const languages: readonly LanguageOption[] = [
  { code: "EN", label: "English", endonym: "English", available: true },
  { code: "DE", label: "German", endonym: "Deutsch", available: false },
  { code: "FR", label: "French", endonym: "Français", available: false },
  { code: "PL", label: "Polish", endonym: "Polski", available: false },
  { code: "IT", label: "Italian", endonym: "Italiano", available: false },
  { code: "ES", label: "Spanish", endonym: "Español", available: false },
];
