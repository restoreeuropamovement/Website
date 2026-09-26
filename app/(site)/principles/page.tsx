import type { Metadata } from "next";
import { PrinciplesView } from "@/components/principles/PrinciplesView";
import { principlesMeta } from "@/content/principles";
import { DEFAULT_LOCALE, alternateLanguages } from "@/lib/i18n";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: principlesMeta.title,
  description:
    "The sixteen principles of Restore Europa Movement: moral order, family, nation, immigration, Europa, economy, property, work, technology, environment, architecture, education, subsidiarity, democracy and foreign policy.",
  alternates: {
    canonical: routes.principles,
    languages: alternateLanguages(routes.principles),
  },
};

export default function PrinciplesPage() {
  return <PrinciplesView locale={DEFAULT_LOCALE} />;
}
