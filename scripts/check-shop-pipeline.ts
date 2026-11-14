/**
 * The order pipeline, end to end, against a real Postgres.
 *
 * `scripts/check-shop.ts` tests the pieces that need nothing; this tests what
 * they do together and to the database: an order recorded, paid, refused for
 * a wrong amount, sent, retried, rescued from a dead claim, moved forward by
 * the printer's news, and lapsed by a signed webhook — with the schema's own
 * constraints checked on the way, and the audit log searched afterwards for
 * any trace of the buyer.
 *
 * Stripe is a stand-in for `fetch` on api.stripe.com, so no account and no
 * network are needed; the printer is the mock. Run it before ticking
 * `launchChecklist.supplier` with a real adapter swapped in for the mock.
 *
 * Not part of `npm run check`, because it needs a database, and it refuses
 * any database but a local one:
 *
 *   npm run db:dev          # in one terminal
 *   DATABASE_URL=postgres://postgres:postgres@127.0.0.1:5433/postgres DATABASE_SSL=disable \
 *     sh -c "npm run db:migrate && npm run test:shop-pipeline"
 */
import { createHmac, randomBytes } from "node:crypto";

/*
 * Local databases only. This writes orders, designs and audit entries, and an
 * audit entry cannot be removed from the chain afterwards without breaking it.
 */
const target = process.env.DATABASE_URL ? new URL(process.env.DATABASE_URL).hostname : "";
if (!["127.0.0.1", "localhost", "::1"].includes(target)) {
  console.error(
    `Refusing to run against ${target || "no database"}. Point DATABASE_URL at the local one \`npm run db:dev\` serves.`,
  );
  process.exit(1);
}

process.env.SHOP_MODE = "test";
process.env.STRIPE_SECRET_KEY = "sk_test_e2e";
process.env.STRIPE_WEBHOOK_SECRET = "whsec_e2e_secret";
process.env.SHOP_PRINT_PROVIDER = "mock";
process.env.MEMBER_ENCRYPTION_KEY = randomBytes(32).toString("base64url");
process.env.ADMIN_SESSION_SECRET = randomBytes(48).toString("base64url");

let failures = 0;
const check = (label: string, ok: boolean, detail = "") => {
  console.log(`${ok ? "  ok  " : "  FAIL"}  ${label}${detail ? ` — ${detail}` : ""}`);
  if (!ok) failures += 1;
};

/* A stand-in for api.stripe.com that remembers what it was asked to create. */
const sessions = new Map<string, Record<string, unknown>>();
let chargeOverride: number | null = null;
const realFetch = globalThis.fetch;
globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
  const url = String(input);
  if (!url.startsWith("https://api.stripe.com/")) return realFetch(input, init);
  const headers = new Headers(init?.headers);
  if (headers.get("Stripe-Version") !== "2026-10-28.endive") throw new Error("version header missing");

  if (init?.method === "POST" && url.endsWith("/v1/checkout/sessions")) {
    const body = new URLSearchParams(String(init.body));
    const id = `cs_test_${randomBytes(12).toString("hex")}`;
    const items = Number(body.get("line_items[0][price_data][unit_amount]"));
    const shipping = Number(body.get("shipping_options[0][shipping_rate_data][fixed_amount][amount]"));
    sessions.set(id, {
      id,
      livemode: false,
      status: "complete",
      payment_status: "paid",
      amount_total: items + shipping,
      currency: body.get("line_items[0][price_data][currency]"),
      client_reference_id: body.get("client_reference_id"),
      payment_intent: `pi_${id.slice(8, 20)}`,
      customer_details: { email: "buyer@example.invalid", name: "Test Buyer" },
      collected_information: {
        shipping_details: {
          name: "Test Buyer",
          address: {
            line1: "Teststraße 1",
            line2: null,
            postal_code: "10115",
            city: "Berlin",
            state: null,
            country: body.get("shipping_address_collection[allowed_countries][0]"),
          },
        },
      },
      _idempotency: headers.get("Idempotency-Key"),
    });
    return new Response(JSON.stringify({ id, url: `https://checkout.stripe.com/c/pay/${id}` }), { status: 200 });
  }

  const match = /\/v1\/checkout\/sessions\/([^/?]+)$/.exec(url);
  if (match && (!init?.method || init.method === "GET")) {
    const session = sessions.get(decodeURIComponent(match[1]!));
    if (!session) return new Response(JSON.stringify({ error: { message: "No such session" } }), { status: 404 });
    return new Response(
      JSON.stringify(chargeOverride === null ? session : { ...session, amount_total: chargeOverride }),
      { status: 200 },
    );
  }
  return new Response(JSON.stringify({ error: { message: `unstubbed ${url}` } }), { status: 400 });
}) as typeof fetch;

async function main() {
  const { db } = await import("../lib/db");
  const { quote, priceBook } = await import("../lib/shop/price-book");
  const orders = await import("../lib/shop/orders");
  const { createCheckoutSession, retrieveCheckoutSession } = await import("../lib/shop/stripe");
  const fulfilment = await import("../lib/shop/fulfilment");
  const { POST } = await import("../app/api/shop/stripe/route");
  const sql = db();

  const slug = `e2e-${randomBytes(4).toString("hex")}`;
  const [design] = await sql<{ id: string }[]>`
    INSERT INTO shop_design (slug, title, preview_url, preview_pathname, print_url, print_pathname,
                             print_content_type, print_bytes, print_sha256, active)
    VALUES (${slug}, 'E2E design', 'https://x.invalid/p.png', 'shop/previews/p.png',
            'https://x.invalid/m.pdf', 'shop/print/m.pdf', 'application/pdf', 1234, 'abc', true)
    RETURNING id`;

  async function newPaidCandidate(quantity = 50, country = "DE") {
    const priced = quote(priceBook, quantity, country);
    if (!priced.ok) throw new Error("bad quote");
    const order = await orders.createOrder({ designId: design!.id, quote: priced, provider: "mock", livemode: false });
    const session = await createCheckoutSession({
      orderId: order.id, reference: order.reference, itemName: "x", itemsMinor: priced.itemsMinor,
      shippingMinor: priced.shippingMinor, shippingLabel: "Postage", currency: "eur", country: priced.country,
      locale: "de", successUrl: "https://x.invalid/s", cancelUrl: "https://x.invalid/c",
    });
    await orders.attachCheckoutSession(order.id, session.id);
    return { order, session, priced };
  }
  const status = async (id: string) =>
    (await sql<{ status: string; attempts: number; last_error_code: string | null }[]>`
      SELECT status, attempts, last_error_code FROM shop_order WHERE id = ${id}`)[0]!;

  console.log("payment");
  const a = await newPaidCandidate();
  check("the order starts in checkout", (await status(a.order.id)).status === "checkout");
  check("the session carried the order's idempotency key", sessions.get(a.session.id)?._idempotency === `checkout-${a.order.id}`);
  const first = await orders.confirmPayment(await retrieveCheckoutSession(a.session.id));
  check("Stripe's paid session marks the order paid", first.kind === "paid", first.kind);
  const again = await orders.confirmPayment(await retrieveCheckoutSession(a.session.id));
  check("a second confirmation changes nothing", again.kind === "already", again.kind);

  console.log("submission");
  const sent = await fulfilment.submitOrder(a.order.id);
  check("a paid order goes to the printer", sent.outcome === "submitted", JSON.stringify(sent));
  const twice = await fulfilment.submitOrder(a.order.id);
  check("it cannot be sent twice", twice.outcome === "not-due", twice.outcome);
  const [row] = await sql<{ provider_order_id: string | null }[]>`SELECT provider_order_id FROM shop_order WHERE id = ${a.order.id}`;
  check("submitted carries the printer's id", Boolean(row?.provider_order_id?.startsWith("MOCK-")));

  console.log("amount mismatch");
  const b = await newPaidCandidate(10, "FR");
  chargeOverride = 1;
  const mismatch = await orders.confirmPayment(await retrieveCheckoutSession(b.session.id));
  chargeOverride = null;
  check("a wrong charge is refused and sent to review", mismatch.kind === "mismatch" && (await status(b.order.id)).status === "review");
  check("a mismatched order is never sent by the queue", (await fulfilment.submitOrder(b.order.id)).outcome === "not-due");

  console.log("printer failures");
  const c = await newPaidCandidate(100, "AT");
  await orders.confirmPayment(await retrieveCheckoutSession(c.session.id));
  process.env.SHOP_MOCK_FAILURE = "unavailable";
  const down = await fulfilment.submitOrder(c.order.id);
  check("an unreachable printer means retry", down.outcome === "retry" && (await status(c.order.id)).status === "retry");
  check("a retry waits for its backoff", (await fulfilment.submitOrder(c.order.id)).outcome === "not-due");
  await sql`UPDATE shop_order SET next_attempt_at = now() WHERE id = ${c.order.id}`;
  process.env.SHOP_MOCK_FAILURE = "rejected";
  const refused = await fulfilment.submitOrder(c.order.id);
  check("a refusal goes to review", refused.outcome === "review" && (await status(c.order.id)).last_error_code === "mock-rejected");
  delete process.env.SHOP_MOCK_FAILURE;
  check("review is re-queued only by a person", await orders.requeueOrder(c.order.id));
  const resent = await fulfilment.submitOrder(c.order.id);
  check("and then it goes", resent.outcome === "submitted", JSON.stringify(resent));
  check("the encrypted printer error is cleared on success", (await orders.orderLastError(c.order.id)) === null);

  const d = await newPaidCandidate(25, "NL");
  await orders.confirmPayment(await retrieveCheckoutSession(d.session.id));
  process.env.SHOP_MOCK_FAILURE = "ambiguous";
  const unsure = await fulfilment.submitOrder(d.order.id);
  check("an uncertain answer from an idempotent printer is retried", unsure.outcome === "retry");
  check("its error text is stored encrypted and readable", ((await orders.orderLastError(d.order.id)) ?? "").includes("timed out"));
  delete process.env.SHOP_MOCK_FAILURE;
  await sql`UPDATE shop_order SET next_attempt_at = now() WHERE id = ${d.order.id}`;
  const queue = await fulfilment.processQueue();
  check("the queue sends what is due", queue.submitted >= 1, JSON.stringify(queue));

  console.log("stale claims");
  const e = await newPaidCandidate(10, "DE");
  await orders.confirmPayment(await retrieveCheckoutSession(e.session.id));
  await sql`UPDATE shop_order SET status = 'submitting', updated_at = now() - interval '1 hour' WHERE id = ${e.order.id}`;
  await fulfilment.processQueue();
  check("an abandoned claim is recovered and sent", (await status(e.order.id)).status === "submitted");

  console.log("reconciliation");
  const { reconcileCheckouts } = await import("../lib/shop/payments");
  const g = await newPaidCandidate(50, "IT");
  const orphan = await orders.createOrder({
    designId: design!.id,
    quote: quote(priceBook, 10, "DE") as Extract<ReturnType<typeof quote>, { ok: true }>,
    provider: "mock",
    livemode: false,
  });
  await sql`UPDATE shop_order SET created_at = now() - interval '3 hours' WHERE id IN (${g.order.id}, ${orphan.id})`;
  const reconciled = await reconcileCheckouts();
  check("a payment whose webhook never came is found and confirmed", (await status(g.order.id)).status === "paid", JSON.stringify(reconciled));
  check("an order whose payment page never opened is removed", (await sql`SELECT 1 FROM shop_order WHERE id = ${orphan.id}`).length === 0);
  check("the reconciled order is sent by the next queue run", (await fulfilment.processQueue()).submitted >= 1 && (await status(g.order.id)).status === "submitted");

  console.log("self-dispatch");
  const packingOrder = async (quantity: number, country: string) => {
    const priced = quote(priceBook, quantity, country);
    if (!priced.ok) throw new Error("bad quote");
    const order = await orders.createOrder({ designId: design!.id, quote: priced, provider: "self-dispatch", livemode: false });
    const session = await createCheckoutSession({
      orderId: order.id, reference: order.reference, itemName: "x", itemsMinor: priced.itemsMinor,
      shippingMinor: priced.shippingMinor, shippingLabel: "Postage", currency: "eur", country: priced.country,
      locale: "de", successUrl: "https://x.invalid/s", cancelUrl: "https://x.invalid/c",
    });
    await orders.attachCheckoutSession(order.id, session.id);
    await orders.confirmPayment(await retrieveCheckoutSession(session.id));
    return order;
  };
  const h = await packingOrder(25, "AT");
  const packed = await fulfilment.submitOrder(h.id);
  check("a self-dispatch order is accepted onto the packing list", packed.outcome === "submitted" && packed.providerOrderId === `PACK-${h.reference}`);
  check("it appears on the packing list", (await orders.packingList()).some((o) => o.id === h.id));
  check("posting it without tracking works", await orders.markPosted(h.id, null));
  check("it leaves the packing list", !(await orders.packingList()).some((o) => o.id === h.id));
  check("it can be undone within the day", await orders.unmarkPosted(h.id));
  check("posting it with a tracking number works", await orders.markPosted(h.id, "RR123456789AT"));
  check("the tracking number is stored encrypted", (await orders.orderTracking(h.id))?.number === "RR123456789AT");
  check("an order for another provider cannot be marked posted here", !(await orders.markPosted(e.order.id, null)));
  check("the nightly sync leaves in-house orders alone", (await fulfilment.syncStatuses()).changed >= 0 && (await status(h.id)).status === "shipped");

  console.log("status sync");
  await sql`UPDATE shop_order SET submitted_at = now() - interval '20 minutes' WHERE id = ${a.order.id}`;
  await fulfilment.syncStatuses();
  check("the printer's news moves the order forward", (await status(a.order.id)).status === "delivered");
  const tracking = await orders.orderTracking(a.order.id);
  check("tracking is stored encrypted and readable", tracking?.carrier === "Mock Post");
  const [raw] = await sql<{ tracking_encrypted: string }[]>`SELECT tracking_encrypted FROM shop_order WHERE id = ${a.order.id}`;
  check("tracking is not in the clear", Boolean(raw?.tracking_encrypted.startsWith("v1.")) && !raw!.tracking_encrypted.includes("MOCK"));

  console.log("webhook");
  const f = await newPaidCandidate(10, "ES");
  const event = JSON.stringify({ id: "evt_x", type: "checkout.session.expired", livemode: false, data: { object: { id: f.session.id } } });
  const t = Math.floor(Date.now() / 1000);
  const signature = createHmac("sha256", "whsec_e2e_secret").update(`${t}.${event}`).digest("hex");
  const forged = await POST(new Request("https://x/api/shop/stripe", { method: "POST", body: event, headers: { "stripe-signature": `t=${t},v1=${"0".repeat(64)}` } }));
  check("a forged webhook is refused", forged.status === 400);
  check("and changes nothing", (await status(f.order.id)).status === "checkout");
  const real = await POST(new Request("https://x/api/shop/stripe", { method: "POST", body: event, headers: { "stripe-signature": `t=${t},v1=${signature}` } }));
  check("a signed expiry is accepted", real.status === 200);
  check("and lapses the order", (await status(f.order.id)).status === "expired");
  const liveEvent = event.replace('"livemode":false', '"livemode":true');
  const liveSig = createHmac("sha256", "whsec_e2e_secret").update(`${t}.${liveEvent}`).digest("hex");
  const crossed = await POST(new Request("https://x/api/shop/stripe", { method: "POST", body: liveEvent, headers: { "stripe-signature": `t=${t},v1=${liveSig}` } }));
  check("a live event at a test deployment is ignored", crossed.status === 200 && (await crossed.json()).ignored === true);

  const [audit] = await sql<{ n: string }[]>`
    SELECT count(*)::text AS n FROM admin_audit
     WHERE action LIKE 'shop.%' AND (detail::text ILIKE '%Test Buyer%' OR detail::text ILIKE '%Teststra%' OR detail::text ILIKE '%example.invalid%')`;
  check("no audit row carries the buyer's name, street or email", audit?.n === "0");
  await sql.end();

  /* Deliberate constraint violations, each on a connection of its own: a
     refused statement can leave PGlite's socket server out of step with the
     client, so nothing else shares a connection with one. */
  const { default: postgres } = await import("postgres");
  const fresh = () => postgres(process.env.DATABASE_URL!, { ssl: false, max: 1 });
  const refuses = async (statement: (s: ReturnType<typeof fresh>) => Promise<unknown>) => {
    const s = fresh();
    try {
      await statement(s);
      return false;
    } catch (error) {
      return /check constraint/i.test(String(error));
    } finally {
      await s.end();
    }
  };

  console.log("schema guards");
  check(
    "the schema refuses 'submitted' without the printer's id",
    await refuses((s) => s`UPDATE shop_order SET status = 'submitted', provider_order_id = NULL WHERE id = ${e.order.id}`),
  );
  check(
    "the schema refuses a total that is not the sum of its parts",
    await refuses((s) => s`UPDATE shop_order SET total_minor = total_minor + 1 WHERE id = ${e.order.id}`),
  );
  check(
    "the schema refuses a status outside the workflow",
    await refuses((s) => s`UPDATE shop_order SET status = 'shipped-ish' WHERE id = ${e.order.id}`),
  );

  const cleanup = fresh();
  await cleanup`DELETE FROM shop_order WHERE design_id = ${design!.id}`;
  await cleanup`DELETE FROM shop_design WHERE id = ${design!.id}`;
  await cleanup.end();

  console.log(failures === 0 ? "\nAll pipeline checks passed." : `\n${failures} pipeline check(s) failed.`);
  process.exit(failures === 0 ? 0 : 1);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
