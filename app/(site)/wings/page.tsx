import type { Metadata } from "next";

import { WingsDocument } from "@/components/wings/WingsDocument";
import { englishWings } from "@/content/wings";
import { alternateLanguages } from "@/lib/i18n";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: englishWings.meta.metaTitle,
  description: englishWings.meta.description,
  alternates: {
    canonical: routes.wings,
    languages: alternateLanguages(routes.wings),
  },
};

export default function WingsPage() {
  return <WingsDocument edition={englishWings} />;
}
