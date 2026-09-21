import { chrome as enChrome } from "@/content/chrome/en";

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

/**
 * The English strings are read from `content/chrome/en.ts` rather than written
 * twice. Anything here that a reader sees in their own language comes from the
 * chrome dictionary for that locale; `site` is the fallback for the few places
 * with no locale in hand — the root document metadata, the Open Graph image and
 * the plain-text manifesto download.
 */
export const site = {
  /**
   * Dominant brand mark, and the name the prose uses as a subject — "Restore
   * Europe holds that…". Deliberately not an acronym: the policy catalogue
   * states positions in sentences, and initials read badly there.
   *
   * Untranslated in every language. It is the movement's name, not a phrase.
   */
  short: "Restore Europe",
  /**
   * The remainder of the full name. The stacked wordmark sets it beneath the
   * mark in small capitals, so the two together read "Restore Europe Movement"
   * without either line repeating the other.
   */
  descriptor: enChrome.site.descriptor,
  /** Formal name, used where an institution would sign itself. */
  name: "Restore Europe Movement",
  formal: "Restore Europe Movement",
  tagline: enChrome.site.tagline,
  description: enChrome.site.description,
  closing: enChrome.site.closing,
  locale: "en_GB",
  url: SITE_URL,
} as const;

/**
 * Every public address, by id.
 *
 * Labels live in `content/chrome/*`, keyed by the same ids. Keeping the two
 * apart means a translator edits words and never a URL, and adding a page is
 * one entry here plus one label per language rather than a hunt through the
 * navigation, the footer and the error page.
 */
export const routes = {
  home: "/",
  principles: "/principles",
  manifesto: "/manifesto",
  policy: "/policy",
  vision: "/vision",
  about: "/about",
  wings: "/wings",
  join: "/join",
  contact: "/contact",
  press: "/contact#press",
  research: "/contact#research",
  chapters: "/contact#chapters",
  privacy: "/privacy",
  imprint: "/imprint",
} as const;

export type RouteId = keyof typeof routes;

/** The masthead, in order. Each id is a key of both `routes` and `chrome.nav`. */
export const primaryNavIds = [
  "principles",
  "manifesto",
  "policy",
  "vision",
  "about",
  "wings",
] as const;

export type PrimaryNavId = (typeof primaryNavIds)[number];

/** The one call to action carried in the masthead. */
export const ctaRoute = routes.join;

