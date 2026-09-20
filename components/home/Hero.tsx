import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { images } from "@/content/images";
import { hero } from "@/content/home";

/**
 * Near-full-height opening. The artwork carries the lower two thirds; the type
 * sits on the light sky above it, with a restrained scrim guaranteeing contrast
 * whatever photograph eventually replaces the placeholder.
 */
export function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-4.5rem)] flex-col overflow-hidden lg:min-h-[calc(100svh-5rem)]">
      <div className="absolute inset-0 -z-10">
        <Image
          src={images.heroValley.src}
          alt={images.heroValley.alt}
          width={images.heroValley.width}
          height={images.heroValley.height}
          priority
          unoptimized
          // Narrow viewports crop to a thin vertical slice; offsetting it moves
          // the church tower out from behind the centred buttons.
          className="animate-settle size-full object-cover object-[32%_bottom] sm:object-bottom"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-b from-canvas from-16% via-canvas/55 via-38% to-canvas/0 to-58%"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-canvas to-transparent"
        />
      </div>

      <Container className="flex flex-1 flex-col pt-16 pb-10 sm:pt-20 lg:pt-24">
        <div className="max-w-4xl">
          <h1
            className="animate-rise font-serif text-display-1 font-normal text-ink"
            style={{ animationDelay: "0.05s" }}
          >
            {hero.headline}
          </h1>

          <p
            className="animate-rise mt-7 max-w-2xl font-serif text-display-4 leading-snug text-muted text-balance"
            style={{ animationDelay: "0.18s" }}
          >
            {hero.subheadline}
          </p>

          <div
            className="animate-rise mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
            style={{ animationDelay: "0.3s" }}
          >
            <Button href={hero.primaryCta.href} size="lg">
              {hero.primaryCta.label}
            </Button>
            <Button
              href={hero.secondaryCta.href}
              size="lg"
              variant="secondary"
              // Opaque, because the landscape sits directly behind it.
              className="bg-canvas"
            >
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>

      <div
        className="animate-rise border-t border-hairline bg-canvas"
        style={{ animationDelay: "0.45s" }}
      >
        <Container className="py-5">
          <h2 className="sr-only">What we stand for</h2>
          <ul className="flex flex-wrap items-center gap-x-3 gap-y-2 sm:gap-x-4">
            {hero.pillars.map((pillar, index) => (
              <li key={pillar} className="flex items-center gap-3 sm:gap-4">
                {index > 0 ? (
                  <span aria-hidden="true" className="size-1 rotate-45 bg-gold/70" />
                ) : null}
                <span className="eyebrow text-muted">{pillar}</span>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
}
