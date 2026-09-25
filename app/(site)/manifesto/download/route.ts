import { englishEdition } from "@/content/manifesto";
import { manifestoDownloadHeaders, renderManifestoText } from "@/lib/manifesto-text";
import { site } from "@/lib/site";

/**
 * The English manifesto as plain text, generated from the same content module
 * the page renders. There is no separate document to keep in sync, and nothing
 * here is fetched from a backend. `app/[locale]/manifesto/download` serves the
 * other five from the same renderer.
 */
export function GET() {
  return new Response(renderManifestoText(englishEdition, site.closing), {
    headers: manifestoDownloadHeaders(englishEdition),
  });
}
