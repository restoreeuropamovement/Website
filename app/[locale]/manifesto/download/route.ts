import { notFound } from "next/navigation";
import { getChrome } from "@/content/chrome";
import { getManifesto } from "@/content/manifesto";
import { isTranslatedLocale, TRANSLATED_LOCALES } from "@/lib/i18n";
import { manifestoDownloadHeaders, renderManifestoText } from "@/lib/manifesto-text";

/**
 * The manifesto as plain text, in one of the five translated languages.
 *
 * A route handler rather than a rewrite of the English one, for the same
 * reason `app/[locale]` exists at all: English keeps the bare path, so
 * `/manifesto/download` does not move and nothing already linking to it
 * breaks.
 *
 * `dynamicParams = false` with the closed list below means only the five
 * registered languages exist here, exactly as in the layout above — a request
 * for `/xx/manifesto/download` is a 404 rather than a file rendered from a
 * dictionary nobody wrote.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return TRANSLATED_LOCALES.map((locale) => ({ locale }));
}

export async function GET(
  _request: Request,
  context: { params: Promise<{ locale: string }> },
): Promise<Response> {
  const { locale } = await context.params;
  if (!isTranslatedLocale(locale)) notFound();

  const [edition, chrome] = await Promise.all([getManifesto(locale), getChrome(locale)]);

  return new Response(renderManifestoText(edition, chrome.site.closing), {
    headers: manifestoDownloadHeaders(edition),
  });
}
