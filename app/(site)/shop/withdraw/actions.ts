"use server";

import { consumeRateLimit } from "@/lib/admin/rate-limit";
import { clientContext } from "@/lib/admin/request";
import { isLocale, type Locale } from "@/lib/i18n";
import { shopMode } from "@/lib/shop/config";
import { isOrderReference, normaliseReference, withdraw } from "@/lib/shop/withdrawal";
import type { WithdrawalErrorCode, WithdrawalState } from "./state";

/**
 * Withdrawing from a sticker purchase: the sixth server action on the public
 * site.
 *
 * `AGENTS.md` asks for the reasoning before a sixth, and here it is the law:
 * since 19 June 2026 an online shop must let a buyer withdraw through the
 * site itself, by a function that asks for their name, the contract and an
 * address to answer to, shows it back for an explicit confirmation, and
 * acknowledges it on a durable medium (Directive (EU) 2023/2673). A link to
 * the contact form does not meet that.
 *
 * It holds to the rules the other five do. It validates on the server. It
 * rate limits per connection and site-wide, like the intake and the contact
 * form, because it reads Stripe on a stranger's request. It stores nothing
 * anybody typed: the name and address are used to match the order and write
 * the acknowledgement, then dropped — see `lib/shop/withdrawal.ts`. It audits
 * the order id or "no match", never the details. And like the intake and the
 * signup it answers identically whatever is stored, so it is not an oracle
 * for which address bought which order.
 *
 * Two steps, as the law describes: the first press only shows the details
 * back; nothing is read or recorded until the second, "Confirm withdrawal".
 */

const RATE_LIMIT = 5;
const RATE_WINDOW_SECONDS = 60 * 60;
const GLOBAL_LIMIT = 100;

const EMAIL = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/;

export async function submitWithdrawal(previous: WithdrawalState, form: FormData): Promise<WithdrawalState> {
  const read = (name: string) => String(form.get(name) ?? "").trim();
  const localeValue = read("locale");
  const locale: Locale = isLocale(localeValue) ? localeValue : "en";

  if (shopMode() === "off") return { ...previous, status: "unavailable" };

  const values = {
    name: read("name").slice(0, 200),
    reference: normaliseReference(read("reference").slice(0, 40)),
    email: read("email").slice(0, 320),
  };

  if (read("step") === "edit") return { stage: "form", errors: [], values };

  const errors: WithdrawalErrorCode[] = [];
  if (values.name.length < 2) errors.push("name");
  if (!isOrderReference(values.reference)) errors.push("reference");
  if (!EMAIL.test(values.email)) errors.push("email");
  if (errors.length > 0) return { stage: "form", errors, values };

  if (read("step") !== "confirm") return { stage: "check", errors: [], values };

  const { ipHash } = await clientContext();
  const limit = await consumeRateLimit(`withdraw:${ipHash ?? "unknown"}`, RATE_LIMIT, RATE_WINDOW_SECONDS);
  if (!limit.allowed) return { stage: "check", errors: [], status: "throttled", values };
  const global = await consumeRateLimit("withdraw:all", GLOBAL_LIMIT, RATE_WINDOW_SECONDS);
  if (!global.allowed) return { stage: "check", errors: [], status: "unavailable", values };

  try {
    await withdraw({ ...values, locale }, ipHash ?? null);
  } catch (error) {
    console.error("[shop] withdrawal could not be processed", error instanceof Error ? error.message : "unknown");
    return { stage: "check", errors: [], status: "unavailable", values };
  }

  return { stage: "done", errors: [], values: { name: "", reference: values.reference, email: "" } };
}
