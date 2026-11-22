import { revalidateTag, unstable_cache } from "next/cache";

import { stickerStock } from "@/content/shop/structure";
import { db } from "@/lib/db";

/**
 * How many stickers are left to sell.
 *
 * An order counts against the stock from the moment its payment page opens,
 * not from when it is paid: otherwise two people could each be shown the last
 * hundred, and both pay. A page that is never paid stops counting when its
 * session lapses (an hour; the window below allows a little more) or when
 * Stripe reports it expired. Cancelled orders give their stickers back.
 * Test and live orders are counted separately, so testing never uses up the
 * real stock.
 *
 * The page reads a cached figure, for the reason the design list is cached:
 * a query per visit would wake the database for every glance at the shop.
 * Every change to an order's claim expires the cache (`releaseStockCache`),
 * and a quarter-hour limit covers the one change no code makes: an unpaid
 * page quietly passing its hour. Checkout itself always counts afresh.
 */

export const SHOP_STOCK_TAG = "shop-stock";

async function claimed(livemode: boolean): Promise<number> {
  const [row] = await db()<{ total: string | null }[]>`
    SELECT sum(quantity)::text AS total
      FROM shop_order
     WHERE livemode = ${livemode}
       AND status NOT IN ('expired', 'cancelled')
       AND (status <> 'checkout' OR created_at > now() - interval '70 minutes')
  `;
  return Number(row?.total ?? 0);
}

const cachedClaimed = unstable_cache(claimed, ["shop-stock-claimed"], {
  tags: [SHOP_STOCK_TAG],
  revalidate: 900,
});

/** Stickers left, for the page. Cached; see above. */
export async function remainingStock(livemode: boolean): Promise<number> {
  return Math.max(0, stickerStock - (await cachedClaimed(livemode)));
}

/** Stickers left, counted now, for checkout. May be negative if an order just took more than there was. */
export async function remainingStockNow(livemode: boolean): Promise<number> {
  return stickerStock - (await claimed(livemode));
}

/**
 * Expires the page's figure after an order claims or gives back stickers.
 * Outside a request — a script, a test — there is no cache to expire, and
 * that is not an error.
 */
export function releaseStockCache(): void {
  try {
    revalidateTag(SHOP_STOCK_TAG, { expire: 0 });
  } catch {
    /* No request context: nothing cached to expire. */
  }
}
