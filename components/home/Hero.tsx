import Image from "next/image";
import Link from "next/link";
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
        <p className="mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-2 text-[0.9375rem]">
          <Link
            href={localePath(locale, content.primaryCta.href)}
            className="text-ink underline decoration-rule underline-offset-[0.28em] hover:text-burgundy hover:decoration-burgundy"
          >
            {content.primaryCta.label}
          </Link>
          <span className="text-faint" aria-hidden="true">
            ·
          </span>
          <Link
            href={localePath(locale, content.secondaryCta.href)}
            className="text-ink underline decoration-rule underline-offset-[0.28em] hover:text-burgundy hover:decoration-burgundy"
          >
            {content.secondaryCta.label}
          </Link>
        </p>
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
