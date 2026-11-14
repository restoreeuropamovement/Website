import type { ShopCountryId, ShopQuantity } from "@/content/shop/structure";
import { decryptPiiSafe, encryptPii } from "@/lib/admin/pii";
import { db } from "@/lib/db";
import type { Quote } from "@/lib/shop/price-book";
import type { Tracking } from "@/lib/shop/providers";
import type { CheckoutSession } from "@/lib/shop/stripe";

/**
 * The order table, and the transitions it allows.
 *
 * Every change of status is one `UPDATE … WHERE status = <the state it must
 * be in>`, so two requests racing — a webhook delivered twice, the return
 * page and the webhook arriving together, two administrators pressing retry
 * — cannot both make the same transition. Whichever lands first changes the
 * row; the other matches nothing and does nothing. There is no
 * read-then-write anywhere in this file for that reason.
 */

export type OrderStatus =
  | "checkout"
  | "expired"
  | "paid"
  | "submitting"
  | "retry"
  | "review"
  | "submitted"
  | "in_production"
  | "shipped"
  | "delivered"
  | "cancelled";

/** An unambiguous reference a person can read aloud: no 0/O, no 1/I/L. */
const REFERENCE_ALPHABET = "23456789ABCDEFGHJKMNPQRSTUVWXYZ";

function newReference(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(7));
  return `RE-${Array.from(bytes, (byte) => REFERENCE_ALPHABET[byte % REFERENCE_ALPHABET.length]).join("")}`;
}

export interface NewOrder {
  readonly designId: string;
  readonly quote: Extract<Quote, { ok: true }>;
  readonly provider: string;
  readonly livemode: boolean;
}

/**
 * Records an order before anyone is sent to pay for it, so that the payment
 * always has a row to land on. The row says `checkout` and nothing else until
 * Stripe confirms; an order abandoned at the payment page lapses to `expired`.
 */
export async function createOrder(order: NewOrder): Promise<{ id: string; reference: string }> {
  const { quote } = order;

  /* Seven characters from a thirty-one letter alphabet; a collision is
     astronomically unlikely, and the unique index makes one an error rather
     than a shared reference. Three attempts is generous. */
  for (let attempt = 0; attempt < 3; attempt += 1) {
    const reference = newReference();
    const rows = await db()<{ id: string }[]>`
      INSERT INTO shop_order
        (reference, livemode, design_id, quantity, country, currency,
         items_minor, shipping_minor, total_minor, price_book, provider)
      VALUES (
        ${reference}, ${order.livemode}, ${order.designId}, ${quote.quantity}, ${quote.country},
        ${quote.currency}, ${quote.itemsMinor}, ${quote.shippingMinor}, ${quote.totalMinor},
        ${quote.priceBook}, ${order.provider}
      )
      ON CONFLICT (reference) DO NOTHING
      RETURNING id
    `;
    if (rows[0]) return { id: rows[0].id, reference };
  }
  throw new Error("Could not allocate an order reference.");
}

/**
 * Removes an order whose payment page was never opened — Stripe refused or
 * could not be reached. Nothing was paid and nobody was sent anywhere, so the
 * row is not a record of anything; leaving it would be a sale in the admin
 * view that never existed.
 */
export async function discardUnstartedOrder(orderId: string): Promise<void> {
  await db()`
    DELETE FROM shop_order
     WHERE id = ${orderId} AND status = 'checkout' AND checkout_session_id IS NULL
  `;
}

/** Orders still waiting on a payment page old enough that Stripe has settled it one way or the other. */
export async function staleCheckouts(limit: number): Promise<readonly { id: string; sessionId: string | null }[]> {
  const rows = await db()<{ id: string; checkout_session_id: string | null }[]>`
    SELECT id, checkout_session_id
      FROM shop_order
     WHERE status = 'checkout' AND created_at < now() - interval '2 hours'
     ORDER BY created_at
     LIMIT ${limit}
  `;
  return rows.map((row) => ({ id: row.id, sessionId: row.checkout_session_id }));
}

export async function attachCheckoutSession(orderId: string, sessionId: string): Promise<void> {
  await db()`
    UPDATE shop_order
       SET checkout_session_id = ${sessionId}, updated_at = now()
     WHERE id = ${orderId} AND status = 'checkout'
  `;
}

export type PaymentVerdict =
  | { readonly kind: "paid"; readonly orderId: string; readonly reference: string }
  | { readonly kind: "already"; readonly orderId: string }
  | { readonly kind: "not-paid" }
  | { readonly kind: "unknown-order" }
  | { readonly kind: "mismatch"; readonly orderId: string; readonly reason: string };

/**
 * Marks an order paid on the strength of a Checkout Session read back from
 * Stripe — never on the strength of a webhook body alone, and never on
 * anything the browser said.
 *
 * The session must belong to the order, be paid, and be paid in exactly the
 * amount and currency the order recorded. A mismatch is not a payment to be
 * shrugged at: it means either this code or the price book changed between
 * quote and payment, or something tampered with the session, and in every one
 * of those cases a person should look before anything is printed. The order
 * goes to `review` with the reason, and nothing is sent to the printer.
 */
export async function confirmPayment(session: CheckoutSession): Promise<PaymentVerdict> {
  const sql = db();
  const [order] = await sql<
    { id: string; reference: string; status: OrderStatus; total_minor: number; currency: string; livemode: boolean }[]
  >`
    SELECT id, reference, status, total_minor, currency, livemode
      FROM shop_order
     WHERE checkout_session_id = ${session.id}
  `;
  if (!order) return { kind: "unknown-order" };
  if (order.status !== "checkout") return { kind: "already", orderId: order.id };
  if (session.payment_status !== "paid") return { kind: "not-paid" };

  const problem =
    session.client_reference_id !== order.id
      ? "the session names a different order"
      : session.livemode !== order.livemode
        ? "the session is from the other Stripe mode"
        : session.amount_total !== order.total_minor
          ? `Stripe charged ${session.amount_total} where the order says ${order.total_minor}`
          : (session.currency ?? "").toUpperCase() !== order.currency
            ? `Stripe charged in ${session.currency} where the order says ${order.currency}`
            : null;

  if (problem) {
    await sql`
      UPDATE shop_order
         SET status = 'review', paid_at = now(), payment_intent_id = ${session.payment_intent},
             last_error_code = 'payment-mismatch', updated_at = now()
       WHERE id = ${order.id} AND status = 'checkout'
    `;
    return { kind: "mismatch", orderId: order.id, reason: problem };
  }

  const updated = await sql`
    UPDATE shop_order
       SET status = 'paid', paid_at = now(), payment_intent_id = ${session.payment_intent},
           next_attempt_at = now(), updated_at = now()
     WHERE id = ${order.id} AND status = 'checkout'
    RETURNING id
  `;
  return updated.length > 0
    ? { kind: "paid", orderId: order.id, reference: order.reference }
    : { kind: "already", orderId: order.id };
}

/** An unpaid session lapsed, or an asynchronous payment failed. Nothing is owed. */
export async function expireOrder(sessionId: string): Promise<string | null> {
  const [row] = await db()<{ id: string }[]>`
    UPDATE shop_order
       SET status = 'expired', closed_at = now(), updated_at = now()
     WHERE checkout_session_id = ${sessionId} AND status = 'checkout'
    RETURNING id
  `;
  return row?.id ?? null;
}

export interface OrderView {
  readonly id: string;
  readonly reference: string;
  readonly status: OrderStatus;
  readonly livemode: boolean;
  readonly designId: string;
  readonly designTitle: string;
  readonly quantity: ShopQuantity;
  readonly country: ShopCountryId;
  readonly currency: "EUR";
  readonly itemsMinor: number;
  readonly shippingMinor: number;
  readonly totalMinor: number;
  readonly checkoutSessionId: string | null;
  readonly provider: string;
  readonly providerOrderId: string | null;
  readonly attempts: number;
  readonly lastErrorCode: string | null;
  readonly createdAt: Date;
  readonly paidAt: Date | null;
  readonly submittedAt: Date | null;
  readonly shippedAt: Date | null;
}

interface OrderRow {
  id: string;
  reference: string;
  status: OrderStatus;
  livemode: boolean;
  design_id: string;
  design_title: string;
  quantity: number;
  country: string;
  currency: string;
  items_minor: number;
  shipping_minor: number;
  total_minor: number;
  checkout_session_id: string | null;
  provider: string;
  provider_order_id: string | null;
  attempts: number;
  last_error_code: string | null;
  created_at: Date;
  paid_at: Date | null;
  submitted_at: Date | null;
  shipped_at: Date | null;
}

function orderFromRow(row: OrderRow): OrderView {
  return {
    id: row.id,
    reference: row.reference,
    status: row.status,
    livemode: row.livemode,
    designId: row.design_id,
    designTitle: row.design_title,
    quantity: row.quantity as ShopQuantity,
    country: row.country as ShopCountryId,
    currency: row.currency as "EUR",
    itemsMinor: row.items_minor,
    shippingMinor: row.shipping_minor,
    totalMinor: row.total_minor,
    checkoutSessionId: row.checkout_session_id,
    provider: row.provider,
    providerOrderId: row.provider_order_id,
    attempts: row.attempts,
    lastErrorCode: row.last_error_code,
    createdAt: row.created_at,
    paidAt: row.paid_at,
    submittedAt: row.submitted_at,
    shippedAt: row.shipped_at,
  };
}

const orderColumns = `o.id, o.reference, o.status, o.livemode, o.design_id, d.title AS design_title,
  o.quantity, o.country, o.currency, o.items_minor, o.shipping_minor, o.total_minor,
  o.checkout_session_id, o.provider, o.provider_order_id, o.attempts, o.last_error_code,
  o.created_at, o.paid_at, o.submitted_at, o.shipped_at`;

export async function orderBySession(sessionId: string): Promise<OrderView | null> {
  const sql = db();
  const [row] = await sql<OrderRow[]>`
    SELECT ${sql.unsafe(orderColumns)}
      FROM shop_order o JOIN shop_design d ON d.id = o.design_id
     WHERE o.checkout_session_id = ${sessionId}
  `;
  return row ? orderFromRow(row) : null;
}

export async function orderById(id: string): Promise<OrderView | null> {
  const sql = db();
  const [row] = await sql<OrderRow[]>`
    SELECT ${sql.unsafe(orderColumns)}
      FROM shop_order o JOIN shop_design d ON d.id = o.design_id
     WHERE o.id = ${id}
  `;
  return row ? orderFromRow(row) : null;
}

/**
 * The newest orders, for the admin page.
 *
 * Unpaid sessions are left out by default: an abandoned payment page is not
 * an order anybody has to act on, and on a busy evening they would bury the
 * ones that are.
 */
export async function recentOrders(limit = 100, includeUnpaid = false): Promise<readonly OrderView[]> {
  const sql = db();
  const rows = await sql<OrderRow[]>`
    SELECT ${sql.unsafe(orderColumns)}
      FROM shop_order o JOIN shop_design d ON d.id = o.design_id
     ${includeUnpaid ? sql`` : sql`WHERE o.status NOT IN ('checkout', 'expired')`}
     ORDER BY o.created_at DESC
     LIMIT ${limit}
  `;
  return rows.map(orderFromRow);
}

export interface OrderCounts {
  readonly byStatus: Readonly<Partial<Record<OrderStatus, number>>>;
  /** Paid orders over the last thirty days, live mode only. */
  readonly revenueMinor: number;
}

export async function orderCounts(): Promise<OrderCounts> {
  const sql = db();
  const rows = await sql<{ status: OrderStatus; n: string }[]>`
    SELECT status, count(*)::text AS n FROM shop_order GROUP BY status
  `;
  const [revenue] = await sql<{ total: string | null }[]>`
    SELECT sum(total_minor)::text AS total
      FROM shop_order
     WHERE livemode AND paid_at > now() - interval '30 days'
       AND status NOT IN ('checkout', 'expired', 'cancelled')
  `;
  return {
    byStatus: Object.fromEntries(rows.map((row) => [row.status, Number(row.n)])),
    revenueMinor: Number(revenue?.total ?? 0),
  };
}

/** The tracking details of an order, decrypted — for the customer's status page and the admin view. */
export async function orderTracking(orderId: string): Promise<Tracking | null> {
  const [row] = await db()<{ tracking_encrypted: string | null }[]>`
    SELECT tracking_encrypted FROM shop_order WHERE id = ${orderId}
  `;
  if (!row?.tracking_encrypted) return null;
  const plain = await decryptPiiSafe(row.tracking_encrypted);
  if (!plain) return null;
  try {
    return JSON.parse(plain) as Tracking;
  } catch {
    return null;
  }
}

/** The printer's own wording for the last failure. Encrypted at rest; see the schema. */
export async function orderLastError(orderId: string): Promise<string | null> {
  const [row] = await db()<{ last_error_encrypted: string | null }[]>`
    SELECT last_error_encrypted FROM shop_order WHERE id = ${orderId}
  `;
  return row?.last_error_encrypted ? decryptPiiSafe(row.last_error_encrypted) : null;
}

/**
 * Closes an order an administrator has dealt with by hand — refunded in
 * Stripe, or abandoned after review. Allowed from the states in which
 * nothing is with the printer, or in which the printer has said it is not.
 */
export async function cancelOrder(orderId: string): Promise<boolean> {
  const rows = await db()`
    UPDATE shop_order
       SET status = 'cancelled', closed_at = now(), next_attempt_at = NULL, updated_at = now()
     WHERE id = ${orderId} AND status IN ('paid', 'retry', 'review')
    RETURNING id
  `;
  return rows.length > 0;
}

/**
 * The packing list: orders the movement posts itself that have not gone yet,
 * oldest payment first, so whoever packs works through them in order.
 */
export async function packingList(limit = 100): Promise<readonly OrderView[]> {
  const sql = db();
  const rows = await sql<OrderRow[]>`
    SELECT ${sql.unsafe(orderColumns)}
      FROM shop_order o JOIN shop_design d ON d.id = o.design_id
     WHERE o.provider = 'self-dispatch' AND o.status IN ('submitted', 'in_production')
     ORDER BY o.paid_at
     LIMIT ${limit}
  `;
  return rows.map(orderFromRow);
}

/** What was marked posted in the last day, so a mistaken click can be undone. */
export async function recentlyPosted(): Promise<readonly OrderView[]> {
  const sql = db();
  const rows = await sql<OrderRow[]>`
    SELECT ${sql.unsafe(orderColumns)}
      FROM shop_order o JOIN shop_design d ON d.id = o.design_id
     WHERE o.provider = 'self-dispatch' AND o.status = 'shipped'
       AND o.shipped_at > now() - interval '1 day'
     ORDER BY o.shipped_at DESC
  `;
  return rows.map(orderFromRow);
}

/**
 * A person has posted this order. The tracking number is optional — a
 * letter has none — and is encrypted like any other, because Austrian Post
 * will tell anyone who holds it where the envelope went.
 */
export async function markPosted(orderId: string, trackingNumber: string | null): Promise<boolean> {
  const tracking = trackingNumber
    ? await encryptPii(JSON.stringify({ carrier: "Österreichische Post", number: trackingNumber, url: null }))
    : null;
  const rows = await db()`
    UPDATE shop_order
       SET status = 'shipped', shipped_at = now(), tracking_encrypted = ${tracking}, updated_at = now()
     WHERE id = ${orderId} AND provider = 'self-dispatch' AND status IN ('submitted', 'in_production')
    RETURNING id
  `;
  return rows.length > 0;
}

/** Undoes `markPosted` within a day of it — the envelope is still on the desk. */
export async function unmarkPosted(orderId: string): Promise<boolean> {
  const rows = await db()`
    UPDATE shop_order
       SET status = 'submitted', shipped_at = NULL, tracking_encrypted = NULL, updated_at = now()
     WHERE id = ${orderId} AND provider = 'self-dispatch' AND status = 'shipped'
       AND shipped_at > now() - interval '1 day'
    RETURNING id
  `;
  return rows.length > 0;
}

/** Puts an order an administrator has reviewed back in the queue. */
export async function requeueOrder(orderId: string): Promise<boolean> {
  const rows = await db()`
    UPDATE shop_order
       SET status = 'retry', next_attempt_at = now(), updated_at = now()
     WHERE id = ${orderId} AND status IN ('review', 'retry')
    RETURNING id
  `;
  return rows.length > 0;
}
