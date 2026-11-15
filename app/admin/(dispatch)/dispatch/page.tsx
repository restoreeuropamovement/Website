import { markPostedAction, unmarkPostedAction } from "@/app/admin/(dispatch)/dispatch/actions";
import { PasskeyElevation } from "@/components/admin/PasskeyElevation";
import { recordAudit } from "@/lib/admin/audit";
import { clientContext } from "@/lib/admin/request";
import { isElevated, requireDispatchSession, type ActiveSession } from "@/lib/admin/session";
import { addressDoubts } from "@/lib/shop/address-check";
import { packingList, recentlyPosted, type OrderView } from "@/lib/shop/orders";
import { packingInstruction } from "@/lib/shop/packing";
import { retrieveCheckoutSession, shippingDetailsOf } from "@/lib/shop/stripe";
import { cn } from "@/lib/utils";

/**
 * The packing list: what to post, to whom, and in what envelope.
 *
 * Reachable by dispatch accounts and administrators. Without a passkey touch
 * it shows how many orders are waiting and what is in each — design and
 * quantity — so the stickers can be counted out. The names and addresses
 * appear only after one, because a list of people who bought this
 * movement's stickers is the thing the whole shop is built not to keep: they
 * are read from Stripe for this page view, written nowhere, and the viewing
 * is recorded in the audit log.
 */

const WHEN = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
const regionName = new Intl.DisplayNames(["en"], { type: "region" });

export default async function DispatchPage() {
  const session = await requireDispatchSession();
  const [waiting, posted] = await Promise.all([packingList(), recentlyPosted()]);
  const elevated = isElevated(session);

  return (
    <div className="flex flex-col gap-10">
      <header>
        <h1 className="font-serif text-display-2 font-normal text-ink">To post</h1>
        <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-muted">
          {waiting.length === 0
            ? "Nothing is waiting."
            : `${waiting.length} ${waiting.length === 1 ? "order is" : "orders are"} waiting, oldest first.`}{" "}
          Press &ldquo;Posted&rdquo; once an envelope is in the post; the customer&rsquo;s order page
          changes at once. Orders marked <span className="text-burgundy">test</span> were paid with a
          test card — don&rsquo;t post those, just clear them.
        </p>
      </header>

      {waiting.length > 0 && !elevated ? (
        <PasskeyElevation reason="The names and addresses to post to are shown after a passkey touch, for ten minutes at a time, so that a session left open on a shared computer cannot be used to copy them." />
      ) : null}

      {waiting.length > 0 ? (
        elevated ? (
          <RevealedList session={session} orders={waiting} />
        ) : (
          <ul className="flex flex-col border-t border-hairline">
            {waiting.map((order) => (
              <li key={order.id} className="border-b border-hairline py-4">
                <Summary order={order} />
              </li>
            ))}
          </ul>
        )
      ) : null}

      {posted.length > 0 ? (
        <section className="flex flex-col gap-4">
          <h2 className="eyebrow border-b border-hairline pb-3 text-muted">Posted in the last day</h2>
          <ul className="flex flex-col">
            {posted.map((order) => (
              <li key={order.id} className="flex flex-wrap items-center justify-between gap-4 border-b border-hairline py-3">
                <span className="text-[0.875rem] text-muted">
                  <span className="font-mono text-ink">{order.reference}</span> · {order.quantity} ×{" "}
                  {order.designTitle} · {regionName.of(order.country)}
                </span>
                <form action={unmarkPostedAction}>
                  <input type="hidden" name="id" value={order.id} />
                  <button
                    type="submit"
                    className="border border-rule px-3 py-1.5 text-micro text-muted transition-colors hover:border-burgundy hover:text-burgundy"
                  >
                    Undo — not posted yet
                  </button>
                </form>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}

function Summary({ order }: { readonly order: OrderView }) {
  return (
    <div className="flex flex-col gap-1">
      <p className="eyebrow flex flex-wrap items-center gap-x-3 text-muted">
        <span className="font-mono text-ink">{order.reference}</span>
        {order.livemode ? null : <span className="text-burgundy">test</span>}
        <span>paid {WHEN.format(order.paidAt ?? order.createdAt)}</span>
      </p>
      <p className="font-serif text-[1.1875rem] leading-snug text-ink">
        {order.quantity} × {order.designTitle}
      </p>
      <p className="text-[0.875rem] text-muted">
        {regionName.of(order.country)} · {packingInstruction(order.quantity, order.country, order.itemsMinor, order.currency)}
      </p>
    </div>
  );
}

async function RevealedList({
  session,
  orders,
}: {
  readonly session: ActiveSession;
  readonly orders: readonly OrderView[];
}) {
  const { ipHash } = await clientContext();
  await recordAudit({
    action: "shop.dispatch.reveal",
    outcome: "success",
    actorId: session.user.id,
    actorLabel: session.user.username,
    detail: { shown: orders.length },
    ipHash,
  });

  const addresses = await Promise.all(
    orders.map(async (order) => {
      if (!order.checkoutSessionId) return null;
      try {
        const shipping = shippingDetailsOf(await retrieveCheckoutSession(order.checkoutSessionId));
        if (!shipping) return null;
        const a = shipping.address;
        return {
          lines: [shipping.name, a.line1, a.line2, [a.postal_code, a.city].filter(Boolean).join(" "), a.state].filter(
            (line): line is string => Boolean(line),
          ),
          doubts: addressDoubts(order.country, a),
        };
      } catch {
        return null;
      }
    }),
  );

  return (
    <ul className="flex flex-col border-t border-hairline">
      {orders.map((order, index) => {
        const found = addresses[index];
        return (
          <li key={order.id} className="grid gap-5 border-b border-hairline py-5 sm:grid-cols-[1fr_auto]">
            <div className="flex flex-col gap-3">
              <Summary order={order} />
              {found ? (
                <>
                  <address
                    className={cn(
                      "border-l-2 pl-4 text-[0.9375rem] leading-relaxed not-italic text-ink",
                      found.doubts.length > 0 ? "border-burgundy" : "border-gold/60",
                    )}
                  >
                    {found.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                    <span className="block uppercase">{regionName.of(order.country)}</span>
                  </address>
                  {found.doubts.length > 0 ? (
                    <div className="border border-burgundy/50 bg-burgundy/5 p-3 text-[0.875rem] leading-relaxed" role="alert">
                      <p className="text-burgundy">Check this address before posting:</p>
                      <ul className="mt-1 list-disc pl-5 text-ink">
                        {found.doubts.map((doubt) => (
                          <li key={doubt}>{doubt}</li>
                        ))}
                      </ul>
                      <p className="mt-2 text-muted">
                        If it looks wrong, do not post it. Tell an administrator, who can reach the buyer through
                        Stripe.
                      </p>
                    </div>
                  ) : null}
                </>
              ) : (
                <p className="text-[0.875rem] text-burgundy">
                  The address could not be read from Stripe just now. Reload in a minute; if it persists,
                  tell an administrator.
                </p>
              )}
            </div>

            <form action={markPostedAction} className="flex flex-col gap-2 self-start sm:w-56">
              <input type="hidden" name="id" value={order.id} />
              <label className="flex flex-col gap-1">
                <span className="text-micro text-faint">Tracking number — only if it has one</span>
                <input
                  name="tracking"
                  maxLength={40}
                  autoComplete="off"
                  className="border border-rule bg-surface px-3 py-1.5 text-[0.875rem] text-ink focus:border-gold focus:outline-none"
                />
              </label>
              <button
                type="submit"
                className="border border-gold/70 bg-gold/10 px-4 py-2 text-[0.875rem] text-ink transition-colors hover:bg-gold/20"
              >
                {order.livemode ? "Posted" : "Clear test order"}
              </button>
            </form>
          </li>
        );
      })}
    </ul>
  );
}
