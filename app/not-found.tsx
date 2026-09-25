import type { Metadata } from "next";
import { NotFoundView } from "@/components/layout/NotFoundView";
import { DEFAULT_LOCALE } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

/**
 * The last resort: an address that matched no route at all, including one with
 * a prefix that is not a language the site speaks. English, because an unknown
 * prefix is no evidence of what the reader reads. Without this file such an
 * address gets the framework's own stock page instead of the movement's.
 */
export default function RootNotFound() {
  return <NotFoundView locale={DEFAULT_LOCALE} />;
}
