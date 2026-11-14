import { hasDatabase, hasMemberEncryptionKey } from "@/lib/admin/env";
import { outstandingLaunchConditions } from "@/lib/shop/launch";
import { priceBook } from "@/lib/shop/price-book";
import { printProvider, type PrintProvider } from "@/lib/shop/providers";

/**
 * Environment for the sticker shop.
 *
 * The same contract as `lib/admin/env.ts`: nothing has a default, nothing is
 * read at module scope, and the public site builds and serves with none of it
 * set. Unset, the shop does not exist — `/shop` answers 404 and nothing in the
 * site links to it.
 *
 * Three modes, chosen by `SHOP_MODE`:
 *
 *   (unset)  closed.
 *   test     Stripe's test keys and a printer that prints nothing. The whole
 *            flow runs and nobody is charged or sent anything.
 *   live     real payments and a real printer. Refused until everything in
 *            `shopReadiness` holds, the launch checklist included.
 *
 * The two non-closed modes are kept from crossing over by the keys themselves:
 * Stripe secret keys say which mode they belong to in their prefix, so a live
 * key in test mode, or a test key in live mode, is a configuration error the
 * shop refuses to open with rather than a surprise on somebody's statement.
 */

export type ShopMode = "off" | "test" | "live";

export function shopMode(): ShopMode {
  const mode = process.env.SHOP_MODE?.trim();
  return mode === "test" || mode === "live" ? mode : "off";
}

function required(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`${name} is not set. The shop refuses to run without it — see README.md, "Sticker shop".`);
  }
  return value;
}

/**
 * The Stripe secret key, checked against the mode.
 *
 * `sk_` is a full secret key and `rk_` a restricted one; a restricted key
 * with write access to Checkout Sessions and read access to them is all the
 * shop needs and is the better thing to deploy.
 */
export function stripeSecretKey(): string {
  const key = required("STRIPE_SECRET_KEY");
  const mode = shopMode();
  const prefix = mode === "live" ? /^(sk|rk)_live_/ : /^(sk|rk)_test_/;
  if (!prefix.test(key)) {
    throw new Error(
      `STRIPE_SECRET_KEY is not a ${mode === "live" ? "live" : "test"}-mode key, and SHOP_MODE is "${mode}". The two must agree.`,
    );
  }
  return key;
}

/** The signing secret of the webhook endpoint at /api/shop/stripe. */
export function stripeWebhookSecret(): string {
  const secret = required("STRIPE_WEBHOOK_SECRET");
  if (!secret.startsWith("whsec_")) {
    throw new Error("STRIPE_WEBHOOK_SECRET should start with whsec_. Copy it from the endpoint's page in the Stripe dashboard.");
  }
  return secret;
}

export function configuredPrintProvider(): PrintProvider | null {
  return printProvider(process.env.SHOP_PRINT_PROVIDER?.trim());
}

export interface ShopReadiness {
  readonly mode: ShopMode;
  /** Whether the order form may be shown and checkout started. */
  readonly open: boolean;
  /** Every reason it is not open, in words an administrator can act on. */
  readonly problems: readonly string[];
}

/**
 * Whether the shop may take an order, and if not, everything that stands in
 * the way — all of it, not the first thing found, so the admin page is a
 * checklist rather than a sequence of surprises.
 *
 * Checks presence and shape only. It does not call Stripe or the printer: a
 * readiness check that could fail because a third party was slow would close
 * the shop for reasons that have nothing to do with its configuration.
 */
export function shopReadiness(): ShopReadiness {
  const mode = shopMode();
  if (mode === "off") {
    return { mode, open: false, problems: ['SHOP_MODE is not set to "test" or "live".'] };
  }

  const problems: string[] = [];
  const check = (test: () => unknown, message?: string) => {
    try {
      test();
    } catch (error) {
      problems.push(message ?? (error instanceof Error ? error.message : String(error)));
    }
  };

  if (!hasDatabase()) problems.push("DATABASE_URL is not set, so there is nowhere to record an order.");
  if (!hasMemberEncryptionKey()) {
    problems.push("MEMBER_ENCRYPTION_KEY is not set, so tracking numbers and printer errors cannot be stored.");
  }
  check(stripeSecretKey);
  check(stripeWebhookSecret);

  const provider = configuredPrintProvider();
  if (!provider) {
    problems.push(
      `SHOP_PRINT_PROVIDER does not name a known printer (${JSON.stringify(process.env.SHOP_PRINT_PROVIDER ?? "")}).`,
    );
  } else {
    if (!provider.configured()) problems.push(`The printer "${provider.id}" is missing its credentials.`);
    if (mode === "test" && provider.placesRealOrders) {
      problems.push(`Test mode cannot use "${provider.id}", which places real orders. Use the mock printer.`);
    }
    if (mode === "live" && !provider.placesRealOrders) {
      problems.push(`Live mode cannot use "${provider.id}", which prints nothing. Real payments need a real printer.`);
    }
  }

  if (mode === "live") {
    if (priceBook.status !== "approved") {
      problems.push(`The price book "${priceBook.id}" is provisional. Live prices must be checked against the printer's quotes.`);
    }
    const outstanding = outstandingLaunchConditions();
    if (outstanding.length > 0) {
      problems.push(`The launch checklist has ${outstanding.length} unmet condition${outstanding.length === 1 ? "" : "s"}.`);
    }
  }

  return { mode, open: problems.length === 0, problems };
}
