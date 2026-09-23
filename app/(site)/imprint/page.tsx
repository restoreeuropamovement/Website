import type { Metadata } from "next";

import { ImprintDocument } from "@/components/legal/ImprintDocument";
import { englishLegal } from "@/content/legal";
import { alternateLanguages } from "@/lib/i18n";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: englishLegal.imprint.metaTitle,
  description: englishLegal.imprint.description,
  alternates: {
    canonical: routes.imprint,
    languages: alternateLanguages(routes.imprint),
  },
};

export default function ImprintPage() {
  return <ImprintDocument edition={englishLegal} />;
}
