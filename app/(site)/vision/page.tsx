import type { Metadata } from "next";

import { VisionDocument } from "@/components/vision/VisionDocument";
import { englishVision } from "@/content/vision";
import { alternateLanguages, DEFAULT_LOCALE } from "@/lib/i18n";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: englishVision.meta.metaTitle,
  description: englishVision.meta.description,
  alternates: {
    canonical: routes.vision,
    languages: alternateLanguages(routes.vision),
  },
};

export default function VisionPage() {
  return <VisionDocument edition={englishVision} locale={DEFAULT_LOCALE} />;
}
