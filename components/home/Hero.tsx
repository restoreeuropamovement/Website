import Image from "next/image";
import { RestoreEuropaMark } from "@/components/brand/RestoreEuropaMark";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { HomeContent } from "@/content/home";
import type { ImageSlot } from "@/lib/content-types";
import { localePath, type Locale } from "@/lib/i18n";
import { routes, site } from "@/lib/site";

/**
 * The front of the paper: the name, one line of argument, one sentence saying
 * plainly what this is, and the two ways forward, with the mark large beside
 * them. The photograph is a band underneath — text is never set on the image.
 *
 * The factual sentence earns its place. A reader arriving from a shared link
 * knows nothing, and a masthead that offers only a slogan makes them work out
 * what kind of organisation this even is before deciding whether to care.
 */
export function Hero({
  content,
  image,
  locale,
}: {
  readonly content: HomeContent["hero"];
  readonly image: ImageSlot;
  readonly locale: Locale;
}) {
  return (
    <section>
      <Container className="pt-14 pb-10 lg:pt-20 lg:pb-14">
        {/*
          Two columns from `lg`, because the masthead only fills about half the
          measure and the rest of the band was empty ground. The mark takes the
          other half at a size that makes it the emblem of the page rather than
          a favicon that wandered in.

          The `lg` threshold matters: the text column needs its own width to
          keep the masthead on one line, and below that the mark would either
          squeeze the name or drop beneath it and push the photograph off the
          first screen. On a phone the mark in the navbar is the one that does
          this work.
        */}
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_minmax(0,24rem)]">
          <div>
            <h1 className="font-serif text-display-masthead font-normal text-ink">{site.short}</h1>

            <p className="mt-8 max-w-2xl font-serif text-display-4 leading-snug text-ink sm:mt-10">
              {content.headline}
            </p>
            <p className="mt-5 max-w-2xl text-reading leading-relaxed text-body">
              {content.statement}
            </p>

            <div className="mt-9 flex flex-col items-stretch gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center">
              <Button
                href={localePath(locale, routes.principles)}
                variant="primary"
                size="lg"
                block
              >
                {content.primaryCta}
              </Button>
              <Button href={localePath(locale, routes.join)} variant="secondary" size="lg" block>
                {content.secondaryCta}
              </Button>
            </div>
          </div>

          <RestoreEuropaMark className="hidden w-full text-ink lg:block" />
        </div>
      </Container>

      <figure className="border-t border-hairline">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          priority
          sizes="100vw"
          className="h-[min(42vh,28rem)] w-full object-cover object-[32%_bottom] sm:object-bottom"
        />
      </figure>
    </section>
  );
}
