import { constantTimeEqual } from "@/lib/admin/crypto";
import { stripeSecretKey } from "@/lib/shop/config";

/**
 * The little of Stripe's API the shop uses, over `fetch`.
 *
 * Two calls and a signature check do not need a client library, and this
 * project's dependencies are kept to what serves requests. The same reasoning
 * put Resend behind `lib/email.ts` rather than an SDK: a few dozen lines that
 * can be read in full are a smaller thing to trust than a package that can.
 *
 * Every request names the API version it was written against, so a change to
 * the account's default version in the Stripe dashboard cannot change the
 * shape of what comes back. Upgrading is a deliberate edit of this constant
 * after reading Stripe's changelog for the two endpoints below.
 */
export const STRIPE_API_VERSION = "2026-10-28.endive";

const API = "https://api.stripe.com/v1";

/** Long enough for a slow day, short enough that a hung call does not hold a function open. */
const TIMEOUT_MS = 15_000;

export class StripeError extends Error {
  constructor(
    message: string,
    /** HTTP status, or 0 when Stripe was never reached. */
    readonly status: number,
    readonly type: string | null,
    readonly code: string | null,
  ) {
    super(message);
    this.name = "StripeError";
  }
}

type FormValue = string | number | boolean | null | undefined | FormObject | readonly FormValue[];
interface FormObject {
  readonly [key: string]: FormValue;
}

/**
 * Stripe's request encoding: `application/x-www-form-urlencoded`, with nested
 * objects as `a[b][c]=v` and arrays as `a[0]=v`. `null` and `undefined` are
 * omitted rather than sent as empty strings, which Stripe would read as an
 * instruction to clear a field.
 */
export function encodeForm(params: FormObject): string {
  const pairs: string[] = [];

  const walk = (prefix: string, value: FormValue) => {
    if (value === null || value === undefined) return;
    if (Array.isArray(value)) {
      value.forEach((item, index) => walk(`${prefix}[${index}]`, item));
      return;
    }
    if (typeof value === "object") {
      for (const [key, inner] of Object.entries(value as FormObject)) {
        walk(prefix ? `${prefix}[${key}]` : key, inner);
      }
      return;
    }
    pairs.push(`${encodeURIComponent(prefix)}=${encodeURIComponent(String(value))}`);
  };

  walk("", params);
  return pairs.join("&");
}

async function stripeRequest<T>(
  method: "GET" | "POST",
  path: string,
  options: { params?: FormObject; idempotencyKey?: string } = {},
): Promise<T> {
  const headers: Record<string, string> = {
    Authorization: `Bearer ${stripeSecretKey()}`,
    "Stripe-Version": STRIPE_API_VERSION,
  };

  let body: string | undefined;
  if (method === "POST") {
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    body = encodeForm(options.params ?? {});
    /*
     * Stripe replays the original response for a repeated key for twenty-four
     * hours, so a retried request after a timeout returns the session the
     * first attempt created instead of creating a second one.
     */
    if (options.idempotencyKey) headers["Idempotency-Key"] = options.idempotencyKey;
  }

  let response: Response;
  try {
    response = await fetch(`${API}${path}`, {
      method,
      headers,
      body,
      cache: "no-store",
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
  } catch (error) {
    throw new StripeError(
      `Stripe could not be reached: ${error instanceof Error ? error.message : String(error)}`,
      0,
      null,
      null,
    );
  }

  const payload = (await response.json().catch(() => null)) as
    | (T & { error?: undefined })
    | { error?: { message?: string; type?: string; code?: string } }
    | null;

  if (!response.ok || !payload || ("error" in payload && payload.error)) {
    const error = payload && "error" in payload ? payload.error : undefined;
    throw new StripeError(
      error?.message ?? `Stripe answered ${response.status}`,
      response.status,
      error?.type ?? null,
      error?.code ?? null,
    );
  }

  return payload as T;
}

export interface CheckoutSessionInput {
  readonly orderId: string;
  readonly reference: string;
  /** What the customer sees on Stripe's page as the item, already in their language. */
  readonly itemName: string;
  readonly itemsMinor: number;
  readonly shippingMinor: number;
  readonly shippingLabel: string;
  /** Shown above Stripe's address form, already in the customer's language. */
  readonly addressNote: string;
  /** Lower case, as Stripe writes currencies. */
  readonly currency: string;
  /** The one country the parcel may go to — the one the price was computed for. */
  readonly country: string;
  readonly locale: string;
  readonly successUrl: string;
  readonly cancelUrl: string;
}

/**
 * Opens a hosted Checkout page for one order.
 *
 * The address form on Stripe's page is limited to the single country the
 * customer chose on ours. Delivery is priced per destination, so letting the
 * address name another one would charge German postage for a parcel to
 * Spain; the narrowest list is the only one that keeps the quote true.
 *
 * Asks for no phone number and creates no Stripe customer: an email address,
 * a name and the address the parcel needs are all this order requires, and
 * the least a payment page collects is the least that can leak from it.
 *
 * Nothing personal goes into `metadata` or the idempotency key — only our
 * order id and reference — because Stripe stores both, shows them in its
 * dashboard, and says not to put personal data in either.
 */
export async function createCheckoutSession(
  input: CheckoutSessionInput,
): Promise<{ id: string; url: string }> {
  const session = await stripeRequest<{ id: string; url: string | null }>(
    "POST",
    "/checkout/sessions",
    {
      idempotencyKey: `checkout-${input.orderId}`,
      params: {
        mode: "payment",
        submit_type: "pay",
        client_reference_id: input.orderId,
        metadata: { order_id: input.orderId, reference: input.reference },
        payment_intent_data: {
          description: `Restore Europa order ${input.reference}`,
          metadata: { order_id: input.orderId, reference: input.reference },
        },
        line_items: [
          {
            quantity: 1,
            price_data: {
              currency: input.currency,
              unit_amount: input.itemsMinor,
              product_data: { name: input.itemName },
            },
          },
        ],
        /*
         * Payment methods are otherwise whatever the Stripe dashboard has
         * switched on — this API version refuses `payment_method_types`.
         * Klarna is excluded here as well as there, because Klarna's network
         * rules forbid its use by "political organizations, parties, or
         * initiatives", and a dashboard toggle is one somebody can flip back
         * without reading why it was off.
         */
        excluded_payment_method_types: ["klarna"],
        shipping_address_collection: { allowed_countries: [input.country] },
        custom_text: { shipping_address: { message: input.addressNote } },
        shipping_options: [
          {
            shipping_rate_data: {
              type: "fixed_amount",
              display_name: input.shippingLabel,
              fixed_amount: { amount: input.shippingMinor, currency: input.currency },
            },
          },
        ],
        locale: input.locale,
        /* An hour: long enough to find a card, short enough that an abandoned
           order stops being an open session by the end of the evening. */
        expires_at: Math.floor(Date.now() / 1000) + 60 * 60,
        success_url: input.successUrl,
        cancel_url: input.cancelUrl,
      },
    },
  );

  if (!session.url) throw new StripeError("Stripe created a session without a URL.", 200, null, null);
  return { id: session.id, url: session.url };
}

export interface StripeAddress {
  readonly line1: string | null;
  readonly line2: string | null;
  readonly postal_code: string | null;
  readonly city: string | null;
  readonly state: string | null;
  readonly country: string | null;
}

export interface CheckoutSession {
  readonly id: string;
  readonly livemode: boolean;
  readonly status: "open" | "complete" | "expired" | null;
  readonly payment_status: "paid" | "unpaid" | "no_payment_required";
  readonly amount_total: number | null;
  readonly currency: string | null;
  readonly client_reference_id: string | null;
  readonly payment_intent: string | null;
  readonly customer_details: { readonly email: string | null; readonly name: string | null } | null;
  readonly collected_information?: {
    readonly shipping_details?: { readonly name: string; readonly address: StripeAddress } | null;
  } | null;
  /** Where versions before 2025-03-31 put the same thing. Read as a fallback only. */
  readonly shipping_details?: { readonly name: string; readonly address: StripeAddress } | null;
}

export async function retrieveCheckoutSession(id: string): Promise<CheckoutSession> {
  return stripeRequest<CheckoutSession>("GET", `/checkout/sessions/${encodeURIComponent(id)}`);
}

export function shippingDetailsOf(
  session: CheckoutSession,
): { readonly name: string; readonly address: StripeAddress } | null {
  return session.collected_information?.shipping_details ?? session.shipping_details ?? null;
}

/** The shape a Checkout Session id has, checked before it is put in a URL path. */
export function isCheckoutSessionId(value: string): boolean {
  return /^cs_(test|live)_[A-Za-z0-9]{10,200}$/.test(value);
}

const encoder = new TextEncoder();

function hex(bytes: ArrayBuffer): string {
  return Array.from(new Uint8Array(bytes), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

/**
 * Whether a webhook body really came from Stripe.
 *
 * The `Stripe-Signature` header carries a timestamp `t` and one or more `v1`
 * signatures — more than one while a signing secret is being rolled. Each is
 * the hex HMAC-SHA256, keyed with the endpoint's secret, of `t`, a full stop,
 * and the body exactly as received. Any match is sufficient; the timestamp
 * must be within `toleranceSeconds` of now, which is what stops a captured
 * delivery being replayed next week.
 *
 * `payload` must be the raw text. A body that has been parsed and serialised
 * again is not the body that was signed, and will not verify.
 */
export async function verifyStripeSignature(
  payload: string,
  header: string | null,
  secret: string,
  toleranceSeconds = 300,
  nowSeconds = Math.floor(Date.now() / 1000),
): Promise<boolean> {
  if (!header) return false;

  let timestamp: number | null = null;
  const signatures: string[] = [];
  for (const part of header.split(",")) {
    const [key, value] = part.split("=", 2).map((piece) => piece?.trim());
    if (key === "t" && value && /^\d+$/.test(value)) timestamp = Number(value);
    if (key === "v1" && value) signatures.push(value);
  }
  if (timestamp === null || signatures.length === 0) return false;
  if (Math.abs(nowSeconds - timestamp) > toleranceSeconds) return false;

  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const expected = hex(await crypto.subtle.sign("HMAC", key, encoder.encode(`${timestamp}.${payload}`)));

  return signatures.some((signature) => constantTimeEqual(signature, expected));
}
