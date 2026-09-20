import type { Metadata } from "next";
import { EconomicOrderSection } from "@/components/home/EconomicOrderSection";
import { EuropeSection } from "@/components/home/EuropeSection";
import { Hero } from "@/components/home/Hero";
import { LifeAndWorkSection } from "@/components/home/LifeAndWorkSection";
import { PhilosophySection } from "@/components/home/PhilosophySection";
import { PoliticalCultureSection } from "@/components/home/PoliticalCultureSection";
import { PrinciplesSection } from "@/components/home/PrinciplesSection";
import { RestorationSection } from "@/components/home/RestorationSection";
import { StewardshipSection } from "@/components/home/StewardshipSection";
import { TechnologySection } from "@/components/home/TechnologySection";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/site";
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
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteSchema()} />
      <Hero />
      <PhilosophySection />
      <PrinciplesSection />
      <LifeAndWorkSection />
      <EconomicOrderSection />
      <TechnologySection />
      <StewardshipSection />
      <EuropeSection />
      <PoliticalCultureSection />
      <RestorationSection />
    </>
  );
}
