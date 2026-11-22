import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getShop, type ShopEdition } from "@/content/shop";
import type { Locale } from "@/lib/i18n";
import { shopMode } from "@/lib/shop/config";

/**
 * What both `/shop/withdraw` routes need. The page exists whenever the shop
 * does — test or live, open or not — because a buyer's right to withdraw
 * outlasts the shop's being open.
 */
export async function loadWithdrawPage(locale: Locale): Promise<ShopEdition> {
  if (shopMode() === "off") notFound();
  return getShop(locale);
}

/** Never in search results: it is for people who have bought, and they arrive by link. */
export const withdrawRobots: Metadata["robots"] = { index: false, follow: false };

export function initialReference(query: Record<string, string | string[] | undefined>): string {
  const value = query.reference;
  return typeof value === "string" ? value.slice(0, 40) : "";
}
