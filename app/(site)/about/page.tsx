import type { Metadata } from "next";

import { AboutDocument } from "@/components/about/AboutDocument";
import { englishAbout } from "@/content/about";
import { alternateLanguages, DEFAULT_LOCALE } from "@/lib/i18n";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: englishAbout.meta.metaTitle,
  description: englishAbout.meta.description,
  alternates: {
    canonical: routes.about,
    languages: alternateLanguages(routes.about),
  },
};

export default function AboutPage() {
  return <AboutDocument edition={englishAbout} locale={DEFAULT_LOCALE} />;
}
