import type { Metadata } from "next";

import { NewsletterDocument } from "@/components/newsletter/NewsletterDocument";
import { englishNewsletter } from "@/content/newsletter";
import { alternateLanguages } from "@/lib/i18n";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: englishNewsletter.metaTitle,
  description: englishNewsletter.description,
  alternates: {
    canonical: routes.newsletter,
    languages: alternateLanguages(routes.newsletter),
  },
};

export default function NewsletterPage() {
  return <NewsletterDocument edition={englishNewsletter} />;
}
