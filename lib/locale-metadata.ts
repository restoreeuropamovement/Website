import type { Metadata } from "next";
import {
  alternateLanguages,
  isTranslatedLocale,
  localePath,
  openGraphLocale,
  DEFAULT_LOCALE,
  type Locale,
} from "@/lib/i18n";

/** Narrows a raw `[locale]` segment, falling back rather than throwing. */
export function resolveLocale(value: string): Locale {
  return isTranslatedLocale(value) ? value : DEFAULT_LOCALE;
}

/**
 * Canonical and `hreflang` for one page in one language.
 *
 * Canonical is this address — not the English one — because each translation
 * is its own indexable page. `alternates.languages` then names all six so a
 * search engine pairs them instead of picking a winner and dropping the rest.
 */
export function localeAlternates(locale: Locale, path: string): Metadata["alternates"] {
  return {
    canonical: localePath(locale, path),
    languages: alternateLanguages(path),
  };
}

export function localeOpenGraph(
  locale: Locale,
  path: string,
  extra: { title?: string; description?: string; type?: "website" | "article" } = {},
): Metadata["openGraph"] {
  return {
    ...extra,
    url: localePath(locale, path),
    locale: openGraphLocale(locale),
  };
}
