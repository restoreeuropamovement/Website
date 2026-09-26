import Link from "next/link";
import { EditorialImage } from "@/components/media/EditorialImage";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import type { HomeContent } from "@/content/home";
import { exploreCards } from "@/content/home/structure";
import type { ImageEdition } from "@/content/images";
import { localePath, type Locale } from "@/lib/i18n";
import { routes } from "@/lib/site";

/**
 * Six cards, six real pages, six photographs.
 *
 * Every card is a whole link rather than a card containing one: a reader
 * aiming at a picture expects the picture to be the target, and a small
 * "Read more" underneath a large image is a smaller target for no gain.
 *
 * The frame is fixed at 4:3 so the row tops and bottoms line up across three
 * photographs of different native ratios. Each slot carries its own `focus`
 * where a centred crop would cut the subject.
 */
export function ExploreGrid({
  content,
  images,
  locale,
}: {
  readonly content: HomeContent["explore"];
  readonly images: ImageEdition;
  readonly locale: Locale;
}) {
  return (
    <Section spacing="lg" bordered labelledBy="explore">
      <Container>
        <p className="eyebrow mb-4 text-burgundy">{content.eyebrow}</p>
        <h2 id="explore" className="font-serif text-display-3 font-normal text-ink">
          {content.title}
        </h2>

        <ul className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {exploreCards.map((card, index) => {
            const text = content.cards[card.id];
            return (
              <li key={card.id}>
                <Reveal delay={index * 0.05}>
                  <Link href={localePath(locale, routes[card.route])} className="group block">
                    <EditorialImage
                      slot={images[card.image]}
                      aspect="aspect-[4/3]"
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    />
                    <h3 className="mt-5 font-serif text-[1.375rem] leading-snug text-ink group-hover:text-burgundy">
                      {text.title}
                    </h3>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
                      {text.blurb}
                    </p>
                  </Link>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
