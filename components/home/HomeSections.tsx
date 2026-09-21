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
import { getHome } from "@/content/home";
import type { Locale } from "@/lib/i18n";

/**
 * The home page in one language.
 *
 * Both the English route and `app/[locale]` render this, so the order of the
 * argument is the same everywhere: a reader who switches language mid-page
 * lands on the same section rather than a differently-arranged page.
 */
export async function HomeSections({ locale }: { readonly locale: Locale }) {
  const home = await getHome(locale);

  return (
    <>
      <Hero content={home.hero} locale={locale} />
      <PhilosophySection content={home.philosophy} />
      <PrinciplesSection content={home.principles} locale={locale} />
      <LifeAndWorkSection content={home.lifeAndWork} />
      <EconomicOrderSection content={home.economicOrder} />
      <TechnologySection content={home.technology} />
      <StewardshipSection content={home.stewardship} />
      <EuropeSection content={home.europe} />
      <PoliticalCultureSection content={home.politicalCulture} />
      <RestorationSection content={home.restoration} locale={locale} />
    </>
  );
}
