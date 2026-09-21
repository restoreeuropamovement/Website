/**
 * Locales.
 *
 * English is served from the bare paths — `/`, `/principles` — and every other
 * language from a prefix, `/de/principles`. English is not `/en/...` because
 * the site already exists at those addresses and moving them would break every
 * inbound link and start the search index again from nothing.
 *
 * `Locale` is a closed union rather than `string`, so a route, a dictionary and
 * a `hreflang` tag cannot disagree about which languages exist.
 */
export const LOCALES = ["en", "de", "fr", "pl", "it", "es"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

/** Everything except English, in the order the language switcher shows them. */
export const TRANSLATED_LOCALES = LOCALES.filter(
  (locale): locale is Exclude<Locale, "en"> => locale !== DEFAULT_LOCALE,
);

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** A translated locale only — what the `[locale]` segment is allowed to match. */
export function isTranslatedLocale(value: string): value is Exclude<Locale, "en"> {
  return isLocale(value) && value !== DEFAULT_LOCALE;
}

/**
 * Rewrites an English path for a locale.
 *
 * Every link in the shared chrome goes through this, so a reader who switched
 * to German stays in German when they click through rather than being dropped
 * back into English at the first navigation.
 */
export function localePath(locale: Locale, path: string): string {
  if (locale === DEFAULT_LOCALE) return path;
  if (path === "/") return `/${locale}`;
  return `/${locale}${path}`;
}

/**
 * Strips the locale prefix from a pathname, giving the English equivalent.
 * Used by the language switcher, which has to offer the *same page* in another
 * language rather than sending everyone back to the home page.
 */
export function stripLocale(pathname: string): string {
  const match = /^\/([a-z]{2})(?=\/|$)/.exec(pathname);
  if (match && match[1] && isTranslatedLocale(match[1])) {
    return pathname.slice(match[0].length) || "/";
  }
  return pathname;
}

/** Reads the locale a pathname is being served in. */
export function localeFromPath(pathname: string): Locale {
  const match = /^\/([a-z]{2})(?=\/|$)/.exec(pathname);
  return match && match[1] && isTranslatedLocale(match[1]) ? match[1] : DEFAULT_LOCALE;
}

/**
 * BCP-47 tag for `lang` and `hreflang`.
 *
 * Bare language subtags throughout: the text is written for speakers of a
 * language, not residents of a country, and `de-DE` would imply an Austrian
 * reader is being served something else.
 */
export function localeTag(locale: Locale): string {
  return locale;
}

/** Open Graph wants an underscored territory form. */
const OG_LOCALES: Record<Locale, string> = {
  en: "en_GB",
  de: "de_DE",
  fr: "fr_FR",
  pl: "pl_PL",
  it: "it_IT",
  es: "es_ES",
};

export function openGraphLocale(locale: Locale): string {
  return OG_LOCALES[locale];
}

export interface LanguageOption {
  readonly code: Locale;
  /** English name, for `alt` text and administrative listings. */
  readonly label: string;
  /** The name of the language in itself, for the switcher. */
  readonly endonym: string;
}

export const languages: readonly LanguageOption[] = [
  { code: "en", label: "English", endonym: "English" },
  { code: "de", label: "German", endonym: "Deutsch" },
  { code: "fr", label: "French", endonym: "Français" },
  { code: "pl", label: "Polish", endonym: "Polski" },
  { code: "it", label: "Italian", endonym: "Italiano" },
  { code: "es", label: "Spanish", endonym: "Español" },
];

export function localeEndonym(locale: Locale): string {
  return languages.find((language) => language.code === locale)?.endonym ?? locale;
}

export function localeLabel(locale: Locale): string {
  return languages.find((language) => language.code === locale)?.label ?? locale;
}

/**
 * The `alternates.languages` map for a page, given its English path.
 * Every translated page carries the full set plus `x-default`, which is what
 * tells a search engine these are the same document rather than duplicates.
 */
export function alternateLanguages(path: string): Record<string, string> {
  return {
    "x-default": path,
    ...Object.fromEntries(LOCALES.map((locale) => [localeTag(locale), localePath(locale, path)])),
  };
}
