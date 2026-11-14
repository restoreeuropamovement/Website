import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Lock } from "lucide-react";

import {
  cancelOrderAction,
  deleteShopDesignAction,
  moveShopDesignAction,
  processQueueAction,
  retryOrderAction,
  syncStatusesAction,
  toggleShopDesignAction,
} from "@/app/admin/(dashboard)/shop/actions";
import { PasskeyElevation } from "@/components/admin/PasskeyElevation";
import { ShopDesignUpload } from "@/components/admin/ShopDesignUpload";
import { recordAudit } from "@/lib/admin/audit";
import { hasBlobStorage, hasDatabase } from "@/lib/admin/env";
import { clientContext } from "@/lib/admin/request";
import { isElevated, requireSession, type ActiveSession } from "@/lib/admin/session";
import { listShopDesigns } from "@/lib/admin/shop-designs";
import { shopReadiness } from "@/lib/shop/config";
import { launchChecklist, launchConditionIds } from "@/lib/shop/launch";
import { formatMoney } from "@/lib/shop/money";
import { orderById, orderCounts, orderLastError, recentOrders, type OrderStatus, type OrderView } from "@/lib/shop/orders";
import { priceBook } from "@/lib/shop/price-book";
import { retrieveCheckoutSession, shippingDetailsOf } from "@/lib/shop/stripe";

/**
 * The sticker shop, from the inside.
 *
 * Three tiers, the same as the rest of this panel. Anything signed in sees
 * whether the shop could open, the orders as sales — design, quantity,
 * country, amount, state — and the designs. Nobody sees a customer without a
 * passkey touch, and even then not from this database, which holds none: the
 * address is fetched from Stripe for the one order asked about, and the
 * asking is written to the audit log.
 */

const WHEN = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
const money = (minor: number) => formatMoney(minor, "EUR", "en");

const STATUS_LABEL: Record<OrderStatus, string> = {
  checkout: "Awaiting payment",
  expired: "Not paid",
  paid: "Paid, queued",
  submitting: "Sending",
  retry: "Will retry",
  review: "Needs review",
  submitted: "With printer",
  in_production: "Printing",
  shipped: "Posted",
  delivered: "Delivered",
  cancelled: "Cancelled",
};

/** Failures after which the printer may already hold the order. Retrying is then a person's call. */
const UNCERTAIN = new Set(["mock-timeout", "adapter-threw", "stale-claim", "claim-lost"]);

export default async function AdminShopPage(props: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const session = await requireSession();
  const query = await props.searchParams;
  const readiness = shopReadiness();

  if (!hasDatabase()) {
    return (
      <div className="flex flex-col gap-6">
        <Header readiness={readiness} />
        <p className="border-l-2 border-burgundy py-1 pl-5 text-reading text-muted">
          <code className="text-ink">DATABASE_URL</code> is not set, so there are no orders or designs to show.
        </p>
      </div>
    );
  }

  const [counts, orders, designs] = await Promise.all([orderCounts(), recentOrders(), listShopDesigns()]);
  const revealId = typeof query.reveal === "string" ? query.reveal : null;
  const attention = (counts.byStatus.review ?? 0) + (counts.byStatus.retry ?? 0);

  return (
    <div className="flex flex-col gap-12">
      <Header readiness={readiness} />

      <dl className="flex flex-wrap gap-x-12 gap-y-4">
        <Figure label="Needs attention" value={String(attention)} />
        <Figure label="With the printer" value={String((counts.byStatus.submitted ?? 0) + (counts.byStatus.in_production ?? 0))} />
        <Figure label="Posted" value={String((counts.byStatus.shipped ?? 0) + (counts.byStatus.delivered ?? 0))} />
        <Figure label="Live takings, 30 days" value={money(counts.revenueMinor)} />
      </dl>

      <Readiness readiness={readiness} />

      <section className="flex flex-col gap-5">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-hairline pb-3">
          <h2 className="eyebrow text-muted">Orders</h2>
          <div className="flex flex-wrap gap-2">
            <form action={processQueueAction}>
              <SmallButton>Send everything due</SmallButton>
            </form>
            <form action={syncStatusesAction}>
              <SmallButton>Ask the printer for updates</SmallButton>
            </form>
          </div>
        </div>
        <p className="max-w-3xl text-[0.875rem] leading-relaxed text-faint">
          Paid orders go to the printer the moment Stripe confirms them, and again every night for anything still
          waiting. Unpaid and abandoned checkouts are not listed. Refunds are made in the Stripe dashboard; cancel the
          order here afterwards.
        </p>

        {revealId ? <Reveal session={session} orderId={revealId} /> : null}

        {orders.length === 0 ? (
          <p className="border-l-2 border-gold/65 py-1 pl-5 text-reading text-muted">No paid orders yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[56rem] border-collapse text-[0.875rem]">
              <thead>
                <tr className="border-b border-hairline text-left text-micro text-faint">
                  <th className="pb-2 font-normal">Order</th>
                  <th className="pb-2 font-normal">Design</th>
                  <th className="pb-2 text-right font-normal">Qty</th>
                  <th className="pb-2 font-normal">To</th>
                  <th className="pb-2 text-right font-normal">Total</th>
                  <th className="pb-2 font-normal">State</th>
                  <th className="pb-2 font-normal">Printer</th>
                  <th className="pb-2" />
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <OrderRow key={order.id} order={order} />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section id="designs" className="flex flex-col gap-6">
        <h2 className="eyebrow border-b border-hairline pb-3 text-muted">Designs</h2>
        {designs.length === 0 ? (
          <p className="border-l-2 border-gold/65 py-1 pl-5 text-reading text-muted">No designs yet.</p>
        ) : (
          <ul className="flex flex-col border-t border-hairline">
            {designs.map((design, index) => (
              <li key={design.id} className="flex flex-wrap items-start gap-x-6 gap-y-3 border-b border-hairline py-4">
                <div className="relative aspect-square w-24 shrink-0 border border-hairline bg-canvas-deep">
                  <Image src={design.previewUrl} alt={`Preview of ${design.title}`} fill sizes="96px" className="object-contain p-2" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="eyebrow mb-1.5 text-muted">
                    <span className={design.active ? "text-gold" : "text-faint"}>{design.active ? "On sale" : "Off"}</span>
                    {" · "}
                    {design.orders} {design.orders === 1 ? "order" : "orders"}
                  </p>
                  <p className="font-serif text-[1.1875rem] leading-snug text-ink">{design.title}</p>
                  {design.description ? (
                    <p className="mt-1 max-w-prose text-[0.875rem] text-muted">{design.description}</p>
                  ) : null}
                  <p className="mt-1 text-micro break-all text-faint">
                    Master: {design.printContentType}, {Math.round(design.printBytes / 1024)} KB · SHA-256{" "}
                    {design.printSha256.slice(0, 16)}…
                  </p>
                </div>
                <div className="flex flex-wrap items-start gap-2">
                  <a
                    href={design.printUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-rule px-3 py-1.5 text-micro text-muted hover:border-gold hover:text-gold"
                  >
                    <ExternalLink className="size-3" strokeWidth={1.75} aria-hidden="true" />
                    Master
                  </a>
                  <form action={toggleShopDesignAction}>
                    <input type="hidden" name="id" value={design.id} />
                    <input type="hidden" name="active" value={design.active ? "false" : "true"} />
                    <SmallButton>{design.active ? "Take off sale" : "Put on sale"}</SmallButton>
                  </form>
                  {index > 0 ? <MoveButton id={design.id} direction="up" /> : null}
                  {index < designs.length - 1 ? <MoveButton id={design.id} direction="down" /> : null}
                  {design.orders === 0 && hasBlobStorage() ? (
                    <details>
                      <summary className="cursor-pointer list-none border border-rule px-3 py-1.5 text-micro text-muted hover:border-burgundy hover:text-burgundy">
                        Delete
                      </summary>
                      <form action={deleteShopDesignAction} className="mt-2">
                        <input type="hidden" name="id" value={design.id} />
                        <button
                          type="submit"
                          className="border border-burgundy/60 px-3 py-1.5 text-micro text-burgundy hover:bg-burgundy/10"
                        >
                          Delete it and its files
                        </button>
                      </form>
                    </details>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        )}
        {hasBlobStorage() ? (
          <ShopDesignUpload />
        ) : (
          <p className="border-l-2 border-burgundy py-1 pl-5 text-reading text-muted">
            <code className="text-ink">BLOB_READ_WRITE_TOKEN</code> is not set, so designs cannot be uploaded.
          </p>
        )}
      </section>
    </div>
  );
}

function Header({ readiness }: { readonly readiness: ReturnType<typeof shopReadiness> }) {
  const label =
    readiness.mode === "off" ? "Closed" : readiness.open ? (readiness.mode === "live" ? "Live" : "Test mode") : "Closed — see below";
  return (
    <header>
      <p className="eyebrow mb-4 text-burgundy">Shop · {label}</p>
      <h1 className="font-serif text-display-2 font-normal text-ink">Stickers</h1>
      <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-muted">
        Orders are paid on Stripe and printed by the printer named in <code className="text-ink">SHOP_PRINT_PROVIDER</code>.
        This site keeps no customer details: names and addresses stay with Stripe and go to the printer for one parcel.
      </p>
    </header>
  );
}

function Readiness({ readiness }: { readonly readiness: ReturnType<typeof shopReadiness> }) {
  return (
    <section className="flex flex-col gap-5">
      <h2 className="eyebrow border-b border-hairline pb-3 text-muted">Before it can take real money</h2>
      {readiness.problems.length > 0 ? (
        <ul className="flex flex-col gap-1.5 border-l-2 border-burgundy py-1 pl-5">
          {readiness.problems.map((problem) => (
            <li key={problem} className="text-[0.875rem] leading-relaxed text-muted">
              {problem}
            </li>
          ))}
        </ul>
      ) : (
        <p className="border-l-2 border-gold/65 py-1 pl-5 text-[0.875rem] text-muted">
          Configured for {readiness.mode} mode. Nothing stands in the way.
        </p>
      )}
      <p className="text-[0.875rem] text-muted">
        Price book <code className="text-ink">{priceBook.id}</code>:{" "}
        {priceBook.status === "approved" ? "approved." : "provisional — usable in test mode only."}
      </p>
      <ul className="flex flex-col border-t border-hairline">
        {launchConditionIds.map((id) => {
          const condition = launchChecklist[id];
          return (
            <li key={id} className="flex gap-4 border-b border-hairline py-3">
              <span
                aria-hidden="true"
                className={`mt-1 size-3 shrink-0 border ${condition.done ? "border-gold bg-gold" : "border-rule"}`}
              />
              <div>
                <p className="text-[0.9375rem] text-ink">
                  {condition.title}
                  <span className="sr-only">{condition.done ? " (done)" : " (not done)"}</span>
                </p>
                <p className="mt-1 max-w-3xl text-[0.8125rem] leading-relaxed text-faint">{condition.detail}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <p className="text-micro text-faint">
        Ticked in <code>lib/shop/launch.ts</code>, by a commit that says what made each one true.
      </p>
    </section>
  );
}

function OrderRow({ order }: { readonly order: OrderView }) {
  const actionable = order.status === "review" || order.status === "retry" || order.status === "paid";
  const uncertain = order.lastErrorCode !== null && UNCERTAIN.has(order.lastErrorCode);

  return (
    <tr className="border-b border-hairline/60 align-top">
      <td className="py-2.5 pr-3">
        <span className="font-mono text-[0.8125rem] text-ink">{order.reference}</span>
        <span className="block text-micro text-faint">
          {WHEN.format(order.paidAt ?? order.createdAt)}
          {order.livemode ? "" : " · test"}
        </span>
      </td>
      <td className="py-2.5 pr-3 text-body">{order.designTitle}</td>
      <td className="numerals-tabular py-2.5 pr-3 text-right text-body">{order.quantity}</td>
      <td className="py-2.5 pr-3 text-body">{order.country}</td>
      <td className="numerals-tabular py-2.5 pr-3 text-right text-ink">{money(order.totalMinor)}</td>
      <td className="py-2.5 pr-3">
        <span className={order.status === "review" ? "text-burgundy" : "text-body"}>{STATUS_LABEL[order.status]}</span>
        {order.lastErrorCode ? (
          <span className="block font-mono text-micro text-faint">
            {order.lastErrorCode} · attempt {order.attempts}
          </span>
        ) : null}
      </td>
      <td className="py-2.5 pr-3 font-mono text-[0.8125rem] text-muted">{order.providerOrderId ?? "—"}</td>
      <td className="py-2.5">
        <div className="flex flex-wrap justify-end gap-1.5">
          <Link
            href={`/admin/shop?reveal=${order.id}`}
            className="border border-rule px-2.5 py-1 text-micro text-muted hover:border-gold hover:text-gold"
          >
            Details
          </Link>
          {actionable ? (
            <form action={retryOrderAction} title={uncertain ? "The printer may already hold this order. Check before sending." : undefined}>
              <input type="hidden" name="id" value={order.id} />
              <SmallButton>{uncertain ? "Send again (checked)" : "Send now"}</SmallButton>
            </form>
          ) : null}
          {actionable ? (
            <form action={cancelOrderAction}>
              <input type="hidden" name="id" value={order.id} />
              <SmallButton>Cancel</SmallButton>
            </form>
          ) : null}
        </div>
      </td>
    </tr>
  );
}

/**
 * One order's customer, fetched from Stripe on request.
 *
 * Behind a passkey touch for the reason the roll is: this is a person who
 * bought this movement's stickers, which is a political opinion with a name
 * and an address attached. Nothing shown here is written anywhere; the audit
 * row says that an order was looked at, never who it was for.
 */
async function Reveal({ session, orderId }: { readonly session: ActiveSession; readonly orderId: string }) {
  if (!/^[0-9a-f-]{36}$/.test(orderId)) return null;
  const order = await orderById(orderId);
  if (!order) return null;

  return (
    <div className="flex flex-col gap-4 border border-hairline bg-surface p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="font-mono text-[0.9375rem] text-ink">{order.reference}</h3>
        <Link href="/admin/shop" className="flex items-center gap-1.5 text-micro text-muted hover:text-ink">
          <Lock className="size-3" strokeWidth={1.75} aria-hidden="true" />
          Close
        </Link>
      </div>
      {isElevated(session) ? <Revealed session={session} order={order} /> : <PasskeyElevation />}
    </div>
  );
}

async function Revealed({ session, order }: { readonly session: ActiveSession; readonly order: OrderView }) {
  const { ipHash } = await clientContext();
  await recordAudit({
    action: "shop.order.reveal",
    outcome: "success",
    actorId: session.user.id,
    actorLabel: session.user.username,
    detail: { order: order.id },
    ipHash,
  });

  const lastError = await orderLastError(order.id);
  let customer: { name: string; email: string | null; lines: string[] } | null = null;
  let stripeProblem: string | null = null;
  if (order.checkoutSessionId) {
    try {
      const checkout = await retrieveCheckoutSession(order.checkoutSessionId);
      const shipping = shippingDetailsOf(checkout);
      if (shipping) {
        const a = shipping.address;
        customer = {
          name: shipping.name,
          email: checkout.customer_details?.email ?? null,
          lines: [a.line1, a.line2, [a.postal_code, a.city].filter(Boolean).join(" "), a.state, a.country].filter(
            (line): line is string => Boolean(line),
          ),
        };
      }
    } catch (error) {
      stripeProblem = error instanceof Error ? error.message : String(error);
    }
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div>
        <p className="eyebrow mb-2 text-muted">Ships to (from Stripe)</p>
        {customer ? (
          <address className="text-[0.9375rem] leading-relaxed not-italic text-ink">
            {customer.name}
            {customer.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            {customer.email ? <span className="mt-2 block text-muted">{customer.email}</span> : null}
          </address>
        ) : (
          <p className="text-[0.875rem] text-muted">{stripeProblem ?? "Stripe holds no shipping address for this order."}</p>
        )}
      </div>
      <div className="flex flex-col gap-2 text-[0.875rem] text-muted">
        <p className="eyebrow text-muted">Fulfilment</p>
        <p>
          {STATUS_LABEL[order.status]} · {order.attempts} attempt{order.attempts === 1 ? "" : "s"} · printer{" "}
          <code className="text-ink">{order.provider}</code>
        </p>
        {lastError ? <p className="border-l-2 border-burgundy/60 pl-3 text-muted">{lastError}</p> : null}
        <p className="text-micro text-faint">This view is recorded in the audit log.</p>
      </div>
    </div>
  );
}

function Figure({ label, value }: { readonly label: string; readonly value: string }) {
  return (
    <div>
      <dt className="text-micro text-faint">{label}</dt>
      <dd className="numerals-tabular font-serif text-display-3 text-ink">{value}</dd>
    </div>
  );
}

function SmallButton({ children }: { readonly children: React.ReactNode }) {
  return (
    <button
      type="submit"
      className="border border-rule px-3 py-1.5 text-micro text-muted transition-colors hover:border-gold hover:text-gold"
    >
      {children}
    </button>
  );
}

function MoveButton({ id, direction }: { readonly id: string; readonly direction: "up" | "down" }) {
  return (
    <form action={moveShopDesignAction}>
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="direction" value={direction} />
      <SmallButton>{direction === "up" ? "↑" : "↓"}</SmallButton>
    </form>
  );
}
