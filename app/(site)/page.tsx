import type { Metadata } from "next";
import { HomeSections } from "@/components/home/HomeSections";
import { JsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_LOCALE, alternateLanguages } from "@/lib/i18n";
import { routes, site } from "@/lib/site";
import { websiteSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  /*
   * `absolute` opts out of the root layout's `%s · Restore Europe` template.
   * Without it the home page reads "Restore Europe Movement · Restore Europe",
   * which says the name twice — the template exists to identify the site on
   * subpages, and the home page is already the site.
   */
  title: { absolute: site.name },
  description: site.description,
  alternates: {
    canonical: routes.home,
    languages: alternateLanguages(routes.home),
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteSchema()} />
      <HomeSections locale={DEFAULT_LOCALE} />
    </>
  );
}
