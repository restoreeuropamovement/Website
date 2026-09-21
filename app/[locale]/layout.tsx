import { notFound } from "next/navigation";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { isTranslatedLocale, TRANSLATED_LOCALES } from "@/lib/i18n";

/**
 * The public site in a language other than English.
 *
 * This tree sits beside `(site)` rather than inside it, because a route group
 * contributes no path segment: nesting it would apply the English chrome and
 * the translated chrome to the same page. English keeps the bare paths, so no
 * existing address moves and nothing already indexed breaks.
 *
 * `dynamicParams = false` with a closed `generateStaticParams` means only the
 * five registered languages exist. `/xx/principles` is a 404 rather than a
 * page rendered with a dictionary nobody wrote.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return TRANSLATED_LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  readonly children: React.ReactNode;
  readonly params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isTranslatedLocale(locale)) notFound();

  return <SiteChrome locale={locale}>{children}</SiteChrome>;
}
