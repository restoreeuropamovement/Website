import Image from "next/image";
import { ArrowDown, CalendarClock, HeartHandshake, Mail, ShieldCheck, Tag } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { preorder, type ShopEdition } from "@/content/shop";
import { fill } from "@/lib/format";
import { cn } from "@/lib/utils";

interface HeroSticker {
  readonly slug: string;
  readonly title: string;
  readonly previewUrl: string;
}

/**
 * The top of `/shop`: what is for sale, shown rather than described.
 *
 * Up to three designs fanned out like stickers dropped on a table, each
 * drifting slowly on its own angle. With a single design it is shown three
 * times, the copies behind dimmed, so the stack reads as a pile of the same
 * sticker rather than as one lonely square. CSS animation only — the hero
 * paints at once and costs nothing at hydration, and the reduced-motion
 * block in `styles/globals.css` stills it.
 */
export function ShopHero({
  edition,
  stickers,
  fromPrice,
}: {
  readonly edition: ShopEdition;
  readonly stickers: readonly HeroSticker[];
  /** The cheapest order the price book offers, already formatted; null hides the chip. */
  readonly fromPrice: string | null;
}) {
  const { text } = edition;
  const pile = stickers.length === 0 ? [] : [0, 1, 2].map((i) => stickers[i % stickers.length]!);

  return (
    <header className="relative overflow-hidden border-b border-hairline">
      {/* A warm wash behind the stack, so it sits in light rather than on flat black. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] size-[42rem] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-burgundy)_22%,transparent),transparent_65%)]"
      />

      <Container className="relative grid items-center gap-12 pt-12 pb-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16 lg:pt-16 lg:pb-24">
        <div className="animate-rise">
          <p className="eyebrow mb-5 text-burgundy">{text.meta.eyebrow}</p>
          <h1 className="font-serif text-display-1 font-normal text-balance text-ink">{text.meta.title}</h1>
          <p className="mt-6 max-w-xl text-lede text-muted">{text.meta.lede}</p>

          <ul className="mt-8 flex flex-wrap gap-2.5">
            {preorder ? (
              <li className="flex items-center gap-2 rounded-full border border-gold/60 bg-gold/10 px-3.5 py-1.5 text-[0.8125rem] text-ink">
                <CalendarClock className="size-3.5 text-gold" strokeWidth={1.75} aria-hidden="true" />
                {text.hero.preorder}
              </li>
            ) : null}
            {fromPrice ? (
              <Chip icon={<Tag className="size-3.5" strokeWidth={1.75} aria-hidden="true" />}>
                {fill(text.hero.from, { price: fromPrice })}
              </Chip>
            ) : null}
            <Chip icon={<Mail className="size-3.5" strokeWidth={1.75} aria-hidden="true" />}>{text.hero.posted}</Chip>
            <Chip icon={<ShieldCheck className="size-3.5" strokeWidth={1.75} aria-hidden="true" />}>
              {text.hero.noAccount}
            </Chip>
            <Chip icon={<HeartHandshake className="size-3.5" strokeWidth={1.75} aria-hidden="true" />}>
              {text.hero.supports}
            </Chip>
          </ul>

          <a
            href="#order"
            className="group mt-10 inline-flex items-center gap-2.5 text-[0.9375rem] text-ink underline decoration-rule decoration-1 underline-offset-[0.35em] transition-colors hover:text-burgundy hover:decoration-burgundy"
          >
            {text.hero.cta}
            <ArrowDown
              className="size-4 transition-transform duration-300 motion-safe:group-hover:translate-y-0.5"
              strokeWidth={1.75}
              aria-hidden="true"
            />
          </a>
        </div>

        {pile.length > 0 ? (
          <div aria-hidden="true" className="relative mx-auto hidden aspect-square w-full max-w-[30rem] animate-settle lg:block">
            <StickerCard sticker={pile[2]!} className="left-[2%] top-[14%] w-[62%] opacity-70" rotate={-11} delay="-2.5s" />
            <StickerCard sticker={pile[1]!} className="right-[2%] top-[4%] w-[60%] opacity-85" rotate={9} delay="-5s" />
            <StickerCard sticker={pile[0]!} className="left-[18%] top-[26%] w-[68%]" rotate={-2} delay="0s" />
          </div>
        ) : null}
      </Container>
    </header>
  );
}

function Chip({ icon, children }: { readonly icon: React.ReactNode; readonly children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-2 rounded-full border border-rule bg-surface/70 px-3.5 py-1.5 text-[0.8125rem] text-body">
      <span className="text-gold">{icon}</span>
      {children}
    </li>
  );
}

function StickerCard({
  sticker,
  className,
  rotate,
  delay,
}: {
  readonly sticker: HeroSticker;
  readonly className: string;
  readonly rotate: number;
  readonly delay: string;
}) {
  return (
    <div
      className={cn(
        "absolute aspect-square animate-float rounded-[6px] bg-ink p-[3.5%] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.75),0_8px_20px_-8px_rgba(0,0,0,0.6)]",
        className,
      )}
      style={{ "--float-rotate": `${rotate}deg`, transform: `rotate(${rotate}deg)`, animationDelay: delay } as React.CSSProperties}
    >
      <div className="relative size-full overflow-hidden rounded-[3px]">
        <Image src={sticker.previewUrl} alt="" fill sizes="320px" className="object-cover" />
      </div>
    </div>
  );
}
