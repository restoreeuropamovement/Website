import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import type { ShopEdition } from "@/content/shop";
import { plural } from "@/lib/format";
import { formatMoney } from "@/lib/shop/money";
import type { OrderView } from "@/lib/shop/orders";
import type { Tracking } from "@/lib/shop/providers";

/**
 * One order, as its customer sees it.
 *
 * Reached only through the address Stripe sends the customer back to, which
 * carries the Checkout Session id. That id is the whole credential: it is
 * long, random and issued to the person who paid, and the page shows nothing
 * a stranger holding it could misuse — no name, no address, only what was
 * ordered, where it is in the process, and the tracking number once there is
 * one, which the customer needs and which tells a stranger no more than the
 * carrier would.
 */
export function OrderStatusDocument({
  edition,
  order,
  tracking,
}: {
  readonly edition: ShopEdition;
  readonly order: OrderView | null;
  readonly tracking: Tracking | null;
}) {
  const { locale, text } = edition;
  const words = text.order;

  if (!order) {
    return (
      <>
        <PageHeader kicker={words.kicker} title={words.missingTitle} size="narrow" />
        <Container size="narrow" className="py-12">
          <p className="max-w-2xl text-reading text-body/92">{words.missingBody}</p>
        </Container>
      </>
    );
  }

  const country = new Intl.DisplayNames([locale], { type: "region" }).of(order.country) ?? order.country;

  return (
    <>
      <PageHeader
        kicker={words.kicker}
        title={order.reference}
        lede={words.status[order.status]}
        size="narrow"
      />
      <Container size="narrow" className="flex flex-col gap-10 py-12">
        {!order.livemode ? (
          <p className="border-l-2 border-burgundy py-1 pl-5 text-[0.9375rem] text-muted">{words.test}</p>
        ) : null}

        <dl className="flex flex-col border-t border-hairline">
          <Row label={words.design} value={order.designTitle} />
          <Row label={words.quantity} value={plural(locale, order.quantity, text.form.quantityOption)} />
          <Row label={words.destination} value={country} />
          <Row label={words.total} value={formatMoney(order.totalMinor, order.currency, locale)} />
          {tracking ? (
            <Row
              label={words.tracking}
              value={
                tracking.url ? (
                  <a href={tracking.url} rel="noopener noreferrer" className="underline underline-offset-4 hover:text-burgundy">
                    {tracking.carrier} {tracking.number}
                  </a>
                ) : (
                  `${tracking.carrier} ${tracking.number}`
                )
              }
            />
          ) : null}
        </dl>

        <p className="max-w-2xl text-[0.9375rem] leading-relaxed text-muted">{words.keep}</p>
      </Container>
    </>
  );
}

function Row({ label, value }: { readonly label: string; readonly value: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-hairline py-3">
      <dt className="text-[0.9375rem] text-muted">{label}</dt>
      <dd className="text-[0.9375rem] text-ink">{value}</dd>
    </div>
  );
}
