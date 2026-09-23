import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { HomeContent } from "@/content/home";
import { images } from "@/content/images";
import { localePath, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

/**
 * The front of the paper: the name, large; a line of argument; two text links;
 * then the photograph as a figure underneath. Text is not set on the image.
 */
export function Hero({
  content,
  locale,
}: {
  readonly content: HomeContent["hero"];
  readonly locale: Locale;
}) {
  return (
    <section>
      <Container className="pt-14 pb-10 lg:pt-20 lg:pb-14">
        <h1 className="max-w-6xl font-serif text-display-masthead font-normal text-ink">
          {site.short}
        </h1>
        <p className="mt-6 max-w-2xl font-serif text-display-4 leading-snug text-ink sm:mt-8">
          {content.headline}
        </p>
        <p className="mt-3 max-w-xl font-serif text-lede text-muted">{content.subheadline}</p>
        {/*
          Buttons rather than the underlined text links these were. On a page
          whose every other line is also set in the reading face, two 15px
          links read as a footnote to the masthead instead of as the way in.
        */}
        <div className="mt-9 flex flex-col items-stretch gap-4 sm:mt-10 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center">
          <Button
            href={localePath(locale, content.primaryCta.href)}
            variant="primary"
            size="lg"
            block
          >
            {content.primaryCta.label}
          </Button>
          <Button
            href={localePath(locale, content.secondaryCta.href)}
            variant="secondary"
            size="lg"
            block
          >
            {content.secondaryCta.label}
          </Button>
        </div>
      </Container>

      <figure className="border-t border-hairline">
        <Image
          src={images.heroValley.src}
          alt={images.heroValley.alt}
          width={images.heroValley.width}
          height={images.heroValley.height}
          priority
          unoptimized
          sizes="100vw"
          className="h-[min(42vh,28rem)] w-full object-cover object-[32%_bottom] sm:object-bottom"
        />
      </figure>
    </section>
  );
}
