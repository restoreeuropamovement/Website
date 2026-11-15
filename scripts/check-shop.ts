/**
 * Guards the sticker shop's arithmetic and its two security boundaries.
 *
 * What is tested is what would cost somebody money or let somebody in if it
 * broke quietly: the price book (a typo is a wrong charge), the quote (the
 * server's arithmetic is the only arithmetic that counts), Stripe's webhook
 * signature (a forged "paid" is a free print run), the request encoding (a
 * malformed field is a checkout that charges the wrong amount), and the line
 * between test and live (a test card must never buy a real print job, and a
 * real payment must never go to a simulation).
 *
 * Runs in `npm run check`. Needs no database, no Stripe account and no network.
 */
import { createHmac } from "node:crypto";

import {
  dispatchCountry,
  isShopCountry,
  needsCustomsDeclaration,
  shippingZoneFor,
  shopCountryIds,
  shopQuantities,
} from "../content/shop/structure";
import { wingStructure } from "../content/wings/structure";
import { addressDoubts } from "../lib/shop/address-check";
import { shopReadiness } from "../lib/shop/config";
import { outstandingLaunchConditions } from "../lib/shop/launch";
import { addMinor, formatMoney } from "../lib/shop/money";
import { offeredCountries, priceBook, priceBookProblems, quote } from "../lib/shop/price-book";
import { mockProvider } from "../lib/shop/providers/mock";
import { selfDispatchProvider } from "../lib/shop/providers/self-dispatch";
import { encodeForm, verifyStripeSignature, type StripeAddress } from "../lib/shop/stripe";

/**
 * Every wing's postal destination, or `null` where the shop cannot deliver.
 * A new wing fails the check until it is given a line here, so the shop never
 * quietly leaves out a country the movement has just added.
 */
const wingDestinations: Readonly<Record<string, string | null>> = {
  albania: "AL", andorra: "AD", austria: "AT", belgium: "BE", "bosnia-and-herzegovina": "BA",
  bulgaria: "BG", croatia: "HR", cyprus: "CY", czechia: "CZ", denmark: "DK", england: "GB",
  estonia: "EE", finland: "FI", france: "FR", germany: "DE", greece: "GR", hungary: "HU",
  iceland: "IS", ireland: "IE", italy: "IT", kosovo: "XK", latvia: "LV", liechtenstein: "LI",
  lithuania: "LT", luxembourg: "LU", malta: "MT", moldova: "MD", monaco: "MC", montenegro: "ME",
  netherlands: "NL", "north-macedonia": "MK", "northern-ireland": "GB", norway: "NO", poland: "PL",
  portugal: "PT", romania: "RO", russia: null, "san-marino": "SM", scotland: "GB", serbia: "RS",
  slovakia: "SK", slovenia: "SI", spain: "ES", sweden: "SE", switzerland: "CH", ukraine: "UA",
  wales: "GB",
};

let failures = 0;

function check(label: string, condition: boolean, detail = ""): void {
  if (condition) return;
  failures += 1;
  console.error(`  FAIL  ${label}${detail ? ` — ${detail}` : ""}`);
}

function prices(): void {
  const problems = priceBookProblems(priceBook);
  check("every figure in the price book is whole cents", problems.length === 0, problems.join("; "));

  for (const country of offeredCountries(priceBook)) {
    for (const quantity of shopQuantities) {
      const result = quote(priceBook, quantity, country);
      if (!result.ok) continue;
      check(
        `the total for ${quantity} to ${country} is the sum of its parts`,
        result.totalMinor === result.itemsMinor + result.shippingMinor,
      );
      check(`the quote for ${quantity} to ${country} names the price book`, result.priceBook === priceBook.id);
    }
  }

  check("a quantity off the list is refused", quote(priceBook, 73, "DE").ok === false);
  check("a fractional quantity is refused", quote(priceBook, 10.5, "DE").ok === false);
  check("a quantity sent as a string is refused", quote(priceBook, "10" as unknown as number, "DE").ok === false);
  check("a country off the list is refused", quote(priceBook, 10, "US").ok === false);
  check("Russia is refused while Austrian Post takes no goods for it", quote(priceBook, 10, "RU").ok === false);
  check("a lower-case country is refused", quote(priceBook, 10, "de").ok === false);
  check("every destination has postage", offeredCountries(priceBook).length === shopCountryIds.length);
  check("no destination is listed twice", new Set(shopCountryIds).size === shopCountryIds.length);

  const missing = wingStructure.map((wing) => wing.slug).filter((slug) => !(slug in wingDestinations));
  check("every wing has a shop decision", missing.length === 0, missing.join(", "));
  for (const [slug, code] of Object.entries(wingDestinations)) {
    if (code !== null) check(`the ${slug} wing can order`, isShopCountry(code), code);
  }

  check("larger orders never cost less", shopQuantities.every((q, i) => i === 0 || priceBook.items[q] >= priceBook.items[shopQuantities[i - 1]!]));
  check("the dispatch country is the domestic zone", shippingZoneFor(dispatchCountry) === "domestic");
  check("every other country is the Europe zone", shopCountryIds.every((c) => c === dispatchCountry || shippingZoneFor(c) === "europe"));
  check("an EU destination needs no customs form", !needsCustomsDeclaration("DE") && !needsCustomsDeclaration("MC"));
  check("a destination outside the customs union does", needsCustomsDeclaration("CH") && needsCustomsDeclaration("GB"));
  const at = (fields: Partial<StripeAddress>, country: "DE" | "GB" | "NL" | "IE" = "DE") =>
    addressDoubts(country, { line1: "Hauptstraße 12", line2: null, postal_code: "10115", city: "Berlin", state: null, country, ...fields });
  check("a good German address raises nothing", at({}).length === 0, at({}).join("; "));
  check("a German postcode with a digit missing is flagged", at({ postal_code: "1011" }).length === 1);
  check("a street with no number is flagged", at({ line1: "Hauptstraße" }).length === 1);
  check("a town that is only a number is flagged", at({ city: "10115" }).length === 1);
  check("a Dutch postcode is accepted with or without its space", at({ postal_code: "1012 ab" }, "NL").length === 0 && at({ postal_code: "1012AB" }, "NL").length === 0);
  check("a British house name is not flagged", at({ line1: "Rose Cottage", postal_code: "SW1A 1AA", city: "London" }, "GB").length === 0);
  check("an Irish address without an Eircode is not flagged", at({ line1: "Main Street 4", postal_code: null, city: "Galway" }, "IE").length === 0);
  check("every destination has a postcode rule", shopCountryIds.every((c) => addressDoubts(c, { line1: "x 1 y", line2: null, postal_code: "!", city: "Town", state: null, country: c }).length === 1));

  check(
    "posting abroad never costs less than at home",
    shopQuantities.every((q) => (priceBook.shipping.europe[q] ?? 0) >= (priceBook.shipping.domestic[q] ?? 0)),
  );

  check("adds minor units exactly", addMinor(10, 20, 70) === 100);
  let threw = false;
  try {
    addMinor(1.5);
  } catch {
    threw = true;
  }
  check("refuses fractions of a cent", threw);
  check("formats euros in German", formatMoney(1250, "EUR", "de").replace(/\s/g, " ") === "12,50 €");
  check("formats euros in English", formatMoney(1250, "EUR", "en") === "€12.50");
}

function encoding(): void {
  const encoded = encodeForm({
    mode: "payment",
    line_items: [{ quantity: 1, price_data: { currency: "eur", unit_amount: 1490, product_data: { name: "50 stickers — Ā & b" } } }],
    shipping_address_collection: { allowed_countries: ["DE"] },
    omitted: null,
  });
  const expected = [
    "mode=payment",
    "line_items%5B0%5D%5Bquantity%5D=1",
    "line_items%5B0%5D%5Bprice_data%5D%5Bcurrency%5D=eur",
    "line_items%5B0%5D%5Bprice_data%5D%5Bunit_amount%5D=1490",
    `line_items%5B0%5D%5Bprice_data%5D%5Bproduct_data%5D%5Bname%5D=${encodeURIComponent("50 stickers — Ā & b")}`,
    "shipping_address_collection%5Ballowed_countries%5D%5B0%5D=DE",
  ].join("&");
  check("encodes nested Stripe parameters", encoded === expected, encoded);
}

async function signatures(): Promise<void> {
  const secret = "whsec_test_secret_for_check_shop";
  const body = JSON.stringify({ id: "evt_1", type: "checkout.session.completed" });
  const now = 1_800_000_000;
  const sign = (t: number, payload: string, key = secret) =>
    createHmac("sha256", key).update(`${t}.${payload}`).digest("hex");

  const header = `t=${now},v1=${sign(now, body)}`;
  check("accepts Stripe's own signature", await verifyStripeSignature(body, header, secret, 300, now));
  check(
    "accepts any matching v1 during a secret roll",
    await verifyStripeSignature(body, `t=${now},v1=${"0".repeat(64)},v1=${sign(now, body)}`, secret, 300, now),
  );
  check("refuses a changed body", !(await verifyStripeSignature(`${body} `, header, secret, 300, now)));
  check("refuses the wrong secret", !(await verifyStripeSignature(body, `t=${now},v1=${sign(now, body, "whsec_other")}`, secret, 300, now)));
  check("refuses a replay from ten minutes ago", !(await verifyStripeSignature(body, header, secret, 300, now + 600)));
  check("refuses a missing header", !(await verifyStripeSignature(body, null, secret, 300, now)));
  check("refuses a header with no v1", !(await verifyStripeSignature(body, `t=${now},v0=${sign(now, body)}`, secret, 300, now)));
}

async function provider(): Promise<void> {
  const job = {
    orderId: "0b6c2f4e-9d1a-4c7b-8e3f-5a2d1c0b9e8f",
    reference: "RE-TEST123",
    quantity: 25 as const,
    design: { slug: "test", printUrl: "https://example.invalid/x.pdf", printSha256: "0", printContentType: "application/pdf", finishedMm: 80, bleedMm: 2 },
    shipTo: { name: "Test", line1: "1 Test Street", line2: null, postalCode: "10115", city: "Berlin", state: null, country: "DE" as const },
  };
  const first = await mockProvider.submit(job);
  const second = await mockProvider.submit(job);
  check("the mock accepts a job", first.kind === "accepted");
  check(
    "the mock gives the same order the same id, as an idempotent printer would",
    first.kind === "accepted" && second.kind === "accepted" && first.providerOrderId === second.providerOrderId,
  );
  check("the mock is a simulation", mockProvider.kind === "simulation");

  const packed = await selfDispatchProvider.submit(job);
  const packedAgain = await selfDispatchProvider.submit(job);
  check("self-dispatch is in-house", selfDispatchProvider.kind === "in-house");
  check(
    "self-dispatch puts the same order on the packing list once",
    packed.kind === "accepted" && packedAgain.kind === "accepted" && packed.providerOrderId === packedAgain.providerOrderId,
  );
  check("self-dispatch reports nothing it does not know", (await selfDispatchProvider.status("PACK-X", new Date())).ok === false);

  const minutesAgo = (m: number) => new Date(Date.now() - m * 60_000);
  const at = async (m: number) => {
    const status = await mockProvider.status("MOCK-0B6C2F4E", minutesAgo(m));
    return status.ok ? status.state : "error";
  };
  check("the mock moves an order forward over time", (await at(1)) === "accepted" && (await at(3)) === "in_production" && (await at(10)) === "shipped" && (await at(60)) === "delivered");
}

function gating(): void {
  const saved = { ...process.env };
  const set = (values: Record<string, string | undefined>) => {
    for (const [key, value] of Object.entries(values)) {
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
  };
  const base = {
    DATABASE_URL: "postgres://check/shop",
    MEMBER_ENCRYPTION_KEY: "k".repeat(43),
    STRIPE_WEBHOOK_SECRET: "whsec_check",
    SHOP_PRINT_PROVIDER: "mock",
  };

  try {
    set({ SHOP_MODE: undefined });
    check("closed when SHOP_MODE is unset", shopReadiness().mode === "off" && !shopReadiness().open);

    set({ ...base, SHOP_MODE: "test", STRIPE_SECRET_KEY: "sk_test_check" });
    check("test mode opens with a test key and the mock", shopReadiness().open, shopReadiness().problems.join("; "));

    set({ ...base, SHOP_MODE: "test", STRIPE_SECRET_KEY: "sk_live_check" });
    check("test mode refuses a live key", !shopReadiness().open);

    set({ ...base, SHOP_MODE: "test", STRIPE_SECRET_KEY: "sk_test_check", STRIPE_WEBHOOK_SECRET: undefined });
    check("test mode refuses to open without a webhook secret", !shopReadiness().open);

    set({ ...base, SHOP_MODE: "test", STRIPE_SECRET_KEY: "sk_test_check", SHOP_PRINT_PROVIDER: "nonexistent" });
    check("an unknown printer keeps the shop closed", !shopReadiness().open);

    set({ ...base, SHOP_MODE: "test", STRIPE_SECRET_KEY: "sk_test_check", SHOP_PRINT_PROVIDER: "self-dispatch" });
    check("test mode opens with self-dispatch", shopReadiness().open, shopReadiness().problems.join("; "));

    set({ ...base, SHOP_MODE: "live", STRIPE_SECRET_KEY: "sk_live_check", SHOP_PRINT_PROVIDER: "self-dispatch" });
    check(
      "live mode accepts self-dispatch as a real dispatch",
      !shopReadiness().problems.some((p) => p.includes("self-dispatch")),
    );

    set({ ...base, SHOP_MODE: "live", STRIPE_SECRET_KEY: "sk_live_check" });
    const live = shopReadiness();
    check("live mode refuses the mock printer", !live.open && live.problems.some((p) => p.includes("sends nothing")));
    check(
      "live mode refuses a provisional price book",
      priceBook.status === "approved" || live.problems.some((p) => p.includes("provisional")),
    );
    check(
      "live mode refuses an unmet launch checklist",
      outstandingLaunchConditions().length === 0 || live.problems.some((p) => p.includes("launch checklist")),
    );

    set({ ...base, SHOP_MODE: "live", STRIPE_SECRET_KEY: "sk_test_check" });
    check("live mode refuses a test key", !shopReadiness().open);

    set({ ...base, SHOP_MODE: "LIVE", STRIPE_SECRET_KEY: "sk_live_check" });
    check("an unrecognised mode is closed, not live", shopReadiness().mode === "off");
  } finally {
    for (const key of Object.keys(process.env)) if (!(key in saved)) delete process.env[key];
    Object.assign(process.env, saved);
  }
}

async function main(): Promise<void> {
  prices();
  encoding();
  await signatures();
  await provider();
  gating();

  if (failures > 0) {
    console.error(`\n${failures} shop check(s) failed.`);
    process.exit(1);
  }
  console.log(
    `Shop: the price book, Stripe signatures, request encoding, the mock printer and the test/live line all hold.`,
  );
}

void main();
