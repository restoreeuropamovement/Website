import Link from "next/link";
import { Package, Ruler, ShieldCheck } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { preorder, shopSeller, stickerManufacturer, type ShopEdition } from "@/content/shop";
import { localePath } from "@/lib/i18n";
import { routes } from "@/lib/site";

const LINK =
  "underline decoration-rule underline-offset-4 transition-colors hover:text-burgundy hover:decoration-burgundy";

/** The sticker's specifications, how it is delivered, and its product-safety details. */
export function ShopDetails({ edition }: { readonly edition: ShopEdition }) {
  const { locale, text } = edition;
  const { specs, delivery } = text.sticker;
  const deliveryRows = preorder ? [delivery.preorderRow, ...delivery.rows] : delivery.rows;

  return (
    <section className="border-t border-hairline">
      <Container className="grid gap-6 py-16 md:grid-cols-2 lg:gap-8 lg:py-20">
        <Reveal>
          <Card icon={<Ruler className="size-4" strokeWidth={1.6} aria-hidden="true" />} title={specs.title} rows={specs.rows} />
        </Reveal>
        <Reveal delay={0.12}>
          <Card icon={<Package className="size-4" strokeWidth={1.6} aria-hidden="true" />} title={delivery.title} rows={deliveryRows} />
        </Reveal>
        <Reveal delay={0.2} className="md:col-span-2">
          <Card
            icon={<ShieldCheck className="size-4" strokeWidth={1.6} aria-hidden="true" />}
            title={text.safety.title}
            rows={[
              { label: text.safety.product, value: text.safety.productValue },
              {
                label: text.safety.manufacturer,
                value: `${stickerManufacturer.name}, ${stickerManufacturer.address} · ${stickerManufacturer.email}`,
              },
              { label: text.safety.seller, value: `${shopSeller.name} · ${shopSeller.email}` },
            ]}
          />
        </Reveal>
        <p className="flex flex-wrap gap-x-6 gap-y-2 text-[0.9375rem] text-muted md:col-span-2">
          <Link href={localePath(locale, routes.terms)} className={LINK}>
            {text.terms.shopLink}
          </Link>
          <Link href={localePath(locale, routes.withdraw)} className={LINK}>
            {text.withdrawal.shopLink}
          </Link>
        </p>
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
