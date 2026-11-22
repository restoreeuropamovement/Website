import {
  needsCustomsDeclaration,
  shippingZoneFor,
  type ShopCountryId,
  type ShopQuantity,
} from "@/content/shop/structure";
import { formatMoney, type ShopCurrency } from "@/lib/shop/money";

/**
 * How each order is packed and which Austrian Post product it goes as, for
 * the packing list at `/admin/dispatch`. English, like the rest of the admin
 * surface.
 *
 * The reasoning, which is also the basis of the postage in the price book.
 * A 98 × 98 mm sticker on 80 g/m² paper with its backing weighs an estimated
 * 1.5 g and is about 0.14 mm thick (Estimate: the paper and liner weights
 * over the sticker's area; weigh the first envelopes to confirm).
 *
 *   10   about 15 g in a C6 envelope, about 20 g together: on Brief S's 20 g
 *        limit, so it goes as Brief M rather than risk postage due being
 *        charged to the buyer at the door.
 *   25   about 38 g and 3.5 mm in a C6 envelope: Brief M (up to 75 g, 5 mm).
 *   50+  75 g of stickers alone passes Brief M, so everything from fifty to a
 *        thousand goes in the 353 × 250 × 30 mm, 2 kg format: Päckchen S
 *        inside Austria, Brief L abroad. A thousand is about 1.65 kg packed,
 *        and fits as six stacks of about 2.3 cm side by side.
 *
 * Austrian Post charges that large format the same up to 2 kg, so the postage
 * stops rising at fifty. No card stiffener in the letters: it would only add
 * weight to an envelope already near its limit.
 *
 * Abroad means Economy: cheaper than Priority and slower, which a sticker
 * order can afford. Outside the EU's customs territory a goods letter needs a
 * CN22 declaration on the front; the value declared is what the stickers were
 * sold for, without postage, which is the figure customs asks for.
 */
export function packingInstruction(
  quantity: ShopQuantity,
  country: ShopCountryId,
  itemsMinor: number,
  currency: ShopCurrency,
): string {
  const domestic = shippingZoneFor(country) === "domestic";
  const customs = needsCustomsDeclaration(country)
    ? ` · CN22 customs form: "printed paper stickers", ${formatMoney(itemsMinor, currency, "en")}, sale of goods`
    : "";
  return `${envelope(quantity, domestic)}${customs}`;
}

function envelope(quantity: ShopQuantity, domestic: boolean): string {
  if (quantity <= 25) return `C6 envelope, no stiffener, at most 75 g — ${domestic ? "Brief M" : "Brief M, Eco"}`;
  const stacks = quantity >= 250 ? ", stacks no higher than 2.5 cm laid side by side" : "";
  return `Board-backed B4 envelope${stacks} — ${domestic ? "Päckchen S" : "Brief L, Eco"}`;
}
