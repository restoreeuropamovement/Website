import { ExploreGrid } from "@/components/home/ExploreGrid";
import { Hero } from "@/components/home/Hero";
import { ImageBreak } from "@/components/home/ImageBreak";
import { ManifestoPreview } from "@/components/home/ManifestoPreview";
import { ObjectivesSection } from "@/components/home/ObjectivesSection";
import { ParticipationSection } from "@/components/home/ParticipationSection";
import { StandForSection } from "@/components/home/StandForSection";
import { getHome } from "@/content/home";
import { getImages } from "@/content/images";
import type { Locale } from "@/lib/i18n";

/**
 * The home page in one language.
 *
 * A doorway rather than the argument. It says what the movement is, what it
 * holds, what it is actually doing, quotes the opening of the founding
 * document, and then shows the way to each part of the site and to the three
 * ways of taking part. The long-form case this page used to make in nine
 * sections is on `/manifesto` and `/vision`, which is where a reader who wants
 * it goes looking.
 *
 * Both the English route and `app/[locale]` render this, so a reader who
 * switches language mid-page lands on the same section rather than on a
 * differently-arranged page.
 *
 * The grounds alternate — `deep` for the two passages that are meant to be
 * read, `canvas` for the two that are meant to be scanned, a `surface` slab
 * for the ask. The step between `canvas` and `canvas-deep` is small by design;
 * it groups the page into movements without turning it into stripes.
 */
export async function HomeSections({ locale }: { readonly locale: Locale }) {
  /*
   * The photographs are the same in every language; what they are described as
   * is not. A slot arrives here already carrying the `alt` of this edition, so
   * a reader using a screen reader in Polish is told what is in the picture in
   * Polish rather than being handed the one English paragraph on the page.
   */
  const [home, images] = await Promise.all([getHome(locale), getImages(locale)]);

  return (
    <>
      <Hero content={home.hero} image={images.heroValley} locale={locale} />
      <StandForSection content={home.standFor} locale={locale} />
      <ObjectivesSection content={home.objectives} locale={locale} />
      <ManifestoPreview content={home.manifesto} locale={locale} />
      {/* A beech wood between the document and the way in: the inheritance itself. */}
      <ImageBreak slot={images.woodland} />
      <ExploreGrid content={home.explore} images={images} locale={locale} />
      <ParticipationSection content={home.participation} locale={locale} />
    </>
  );
}
