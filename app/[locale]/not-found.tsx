import type { Metadata } from "next";
import { NotFoundView } from "@/components/layout/NotFoundView";
import { requestLocale } from "@/lib/request-locale";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

/**
 * The 404 for an address under a language prefix. A boundary is given no
 * `params`, so the language comes from what the locale layout recorded while
 * rendering the same request.
 */
export default function LocaleNotFound() {
  return <NotFoundView locale={requestLocale()} />;
}
