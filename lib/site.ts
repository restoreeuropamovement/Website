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
const DEFAULT_SITE_URL = "https://restoreeuropa.eu";

/**
 * `??` would be wrong here. A hosting dashboard that lists the variables a
 * project uses will happily create them with empty values, and an empty string
 * is neither null nor undefined — so `??` passes it straight through and the
 * first `new URL("")` fails the build with nothing to point at. Anything blank
 * is treated as absent.
 *
 * A value that is present but not a URL is a configuration mistake worth
 * failing on, but it should fail here, naming the variable, rather than deep
 * inside Next's metadata handling.
 */
function resolveSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!configured) return DEFAULT_SITE_URL;

  try {
    new URL(configured);
  } catch {
    throw new Error(
      `NEXT_PUBLIC_SITE_URL is set to ${JSON.stringify(configured)}, which is not a valid URL. ` +
        `Use a full origin including the scheme, for example ${DEFAULT_SITE_URL}, or leave it unset.`,
    );
  }

  return configured.replace(/\/$/, "");
}

export const SITE_URL = resolveSiteUrl();

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
   * Europa holds that…". Deliberately not an acronym: the policy catalogue
   * states positions in sentences, and initials read badly there.
   *
   * Untranslated in every language. It is the movement's name, not a phrase.
   */
  short: "Restore Europa",
  /**
   * The remainder of the full name. The stacked wordmark sets it beneath the
   * mark in small capitals, so the two together read "Restore Europa Movement"
   * without either line repeating the other.
   */
  descriptor: enChrome.site.descriptor,
  /** Formal name, used where an institution would sign itself. */
  name: "Restore Europa Movement",
  formal: "Restore Europa Movement",
  tagline: enChrome.site.tagline,
  description: enChrome.site.description,
  closing: enChrome.site.closing,
  locale: "en_GB",
  url: SITE_URL,
} as const;

/**
 * The platforms the movement can hold an account on.
 *
 * A union rather than `string` so that adding one is a type error until it has
 * a glyph in `components/layout/SocialLinks.tsx`. An account that renders as a
 * blank square is worse than one that does not render at all.
 */
export type SocialId = "instagram";

export interface Social {
  readonly id: SocialId;
  /** The platform's own name, for the accessible name of the link. */
  readonly label: string;
  /** Shown to the reader, `@` included, exactly as the platform writes it. */
  readonly handle: string;
  readonly href: string;
}

/**
 * Accounts the movement actually holds.
 *
 * Here rather than in `content/chrome/*` because a handle is a fact, not a
 * phrase: a translator edits words, and must never be able to change where a
 * link points. Only the heading above the list is translated.
 *
 * Deliberately short, and annotated as `readonly Social[]` rather than left to
 * infer so that emptying it stays valid. An account goes in once it exists and
 * somebody reads it — a link to a profile with nothing on it costs more trust
 * than the absence of a link.
 */
export const socials: readonly Social[] = [
  {
    id: "instagram",
    label: "Instagram",
    handle: "@restoreeuropa.eu",
    href: "https://www.instagram.com/restoreeuropa.eu/",
  },
];

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

