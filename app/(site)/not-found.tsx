import type { Metadata } from "next";
import { NotFoundView } from "@/components/layout/NotFoundView";
import { DEFAULT_LOCALE } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

/**
 * The 404 for the English site. Addresses under a language prefix are served
 * by `app/[locale]/not-found.tsx`, which knows which language to answer in.
 */
export default function NotFound() {
  return <NotFoundView locale={DEFAULT_LOCALE} />;
}
