import { EconomicOrderSection } from "@/components/home/EconomicOrderSection";
import { EuropeSection } from "@/components/home/EuropeSection";
import { Hero } from "@/components/home/Hero";
import { ImageBreak } from "@/components/home/ImageBreak";
import { JoinSection } from "@/components/home/JoinSection";
import { LifeAndWorkSection } from "@/components/home/LifeAndWorkSection";
import { PhilosophySection } from "@/components/home/PhilosophySection";
import { PoliticalCultureSection } from "@/components/home/PoliticalCultureSection";
import { PrinciplesSection } from "@/components/home/PrinciplesSection";
import { RestorationSection } from "@/components/home/RestorationSection";
import { StewardshipSection } from "@/components/home/StewardshipSection";
import { TechnologySection } from "@/components/home/TechnologySection";
import { getHome } from "@/content/home";
import { images } from "@/content/images";
import type { Locale } from "@/lib/i18n";

/**
 * The home page in one language.
 *
 * Both the English route and `app/[locale]` render this, so the order of the
 * argument is the same everywhere: a reader who switches language mid-page
 * lands on the same section rather than a differently-arranged page.
 *
 * The grounds alternate — `deep` for the philosophy, the economic order and
 * Europe, `canvas` between them, an `ink` slab for the ask at the end. Every
 * section used to be the default tone at the default spacing, which meant nine
 * screens that were each individually well set and collectively one
 * undifferentiated column. The step between `canvas` and `canvas-deep` is
 * small by design; it groups the argument into movements without turning the
 * page into stripes.
 */
export async function HomeSections({ locale }: { readonly locale: Locale }) {
  const home = await getHome(locale);

  return (
    <>
      <Hero content={home.hero} locale={locale} />
      <PhilosophySection content={home.philosophy} />
      <PrinciplesSection content={home.principles} locale={locale} />
      <LifeAndWorkSection content={home.lifeAndWork} />
      {/* Hand tools ranged on a workshop wall, after the section on work. */}
      <ImageBreak slot={images.workshop} />
      <EconomicOrderSection content={home.economicOrder} />
      <TechnologySection content={home.technology} />
      <StewardshipSection content={home.stewardship} />
      <EuropeSection content={home.europe} />
      <PoliticalCultureSection content={home.politicalCulture} />
      {/* A market square that has stood: what "restoration" is about to mean. */}
      <ImageBreak slot={images.oldTown} />
      <RestorationSection content={home.restoration} locale={locale} />
      <JoinSection content={home.join} locale={locale} />
    </>
  );
}
