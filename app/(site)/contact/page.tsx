import type { Metadata } from "next";

import { ContactDocument } from "@/components/forms/ContactDocument";
import { englishInvolvement } from "@/content/involvement";
import { alternateLanguages } from "@/lib/i18n";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: englishInvolvement.contact.metaTitle,
  description: englishInvolvement.contact.description,
  alternates: {
    canonical: routes.contact,
    languages: alternateLanguages(routes.contact),
  },
};

export default function ContactPage() {
  return <ContactDocument edition={englishInvolvement} />;
}
