import { Package, Ruler } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import type { ShopEdition } from "@/content/shop";

/** The sticker's specifications and how it is delivered, as two cards side by side. */
export function ShopDetails({ edition }: { readonly edition: ShopEdition }) {
  const { specs, delivery } = edition.text.sticker;

  return (
    <section className="border-t border-hairline">
      <Container className="grid gap-6 py-16 md:grid-cols-2 lg:gap-8 lg:py-20">
        <Reveal>
          <Card icon={<Ruler className="size-4" strokeWidth={1.6} aria-hidden="true" />} title={specs.title} rows={specs.rows} />
        </Reveal>
        <Reveal delay={0.12}>
          <Card icon={<Package className="size-4" strokeWidth={1.6} aria-hidden="true" />} title={delivery.title} rows={delivery.rows} />
        </Reveal>
      </Container>
    </section>
  );
}

function Card({
  icon,
  title,
  rows,
}: {
  readonly icon: React.ReactNode;
  readonly title: string;
  readonly rows: readonly { readonly label: string; readonly value: string }[];
}) {
  return (
    <div className="h-full rounded-[10px] border border-hairline bg-surface/50 p-6 lg:p-8">
      <h2 className="flex items-center gap-3 font-serif text-display-4 font-normal text-ink">
        <span className="flex size-9 items-center justify-center rounded-full border border-rule text-gold">{icon}</span>
        {title}
      </h2>
      <dl className="mt-6 divide-y divide-hairline border-t border-hairline">
        {rows.map((row) => (
          <div key={row.label} className="grid gap-1 py-3.5 sm:grid-cols-[7.5rem_1fr] sm:gap-4">
            <dt className="eyebrow pt-0.5 text-muted">{row.label}</dt>
            <dd className="text-[0.9375rem] leading-relaxed text-body">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
