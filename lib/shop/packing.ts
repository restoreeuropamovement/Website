import type { ShippingZoneId, ShopQuantity } from "@/content/shop/structure";

/**
 * How each order is packed and which Austrian Post product it goes as, for
 * the packing list at `/admin/dispatch`. English, like the rest of the admin
 * surface.
 *
 * The reasoning, which is also the basis of the postage in the price book:
 * an 8 × 8 cm sticker on 80 g/m² paper with its backing weighs about a gram
 * and is about 0.14 mm thick. Ten in a C6 envelope come to about 15 g and
 * twenty-five to about 33 g, both under 5 mm thick — Austrian Post's Brief S
 * (up to 20 g) and Brief M (up to 75 g). From fifty upwards the stack is too
 * thick for either, and everything up to a thousand, laid in stacks side by
 * side, fits the 353 × 250 × 30 mm, 2 kg format: Päckchen S inside Austria,
 * Brief L abroad. No card stiffener in the two small formats, because one
 * would push ten stickers over 20 g and into the dearer format.
 *
 * Abroad means Economy: cheaper than Priority and slower, which a sticker
 * order can afford.
 */
export function packingInstruction(quantity: ShopQuantity, zone: ShippingZoneId): string {
  const domestic = zone === "domestic";
  if (quantity === 10) return `C6 envelope, no stiffener — ${domestic ? "Brief S" : "Brief S, Eco"}`;
  if (quantity === 25) return `C6 envelope, no stiffener — ${domestic ? "Brief M" : "Brief M, Eco"}`;
  const stacks = quantity >= 500 ? ", stacks laid side by side" : "";
  return `Board-backed B4 envelope${stacks} — ${domestic ? "Päckchen S" : "Brief L, Eco"}`;
}
