import type { Metadata } from "next";

import { PrivacyDocument } from "@/components/legal/PrivacyDocument";
import { englishLegal } from "@/content/legal";
import { alternateLanguages } from "@/lib/i18n";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: englishLegal.privacy.metaTitle,
  description: englishLegal.privacy.description,
  alternates: {
    canonical: routes.privacy,
    languages: alternateLanguages(routes.privacy),
  },
};

export default function PrivacyPage() {
  return <PrivacyDocument edition={englishLegal} />;
}
