import { createDictionary } from "@/lib/dictionary";
import { chrome as en } from "./en";

/**
 * The shared chrome, per language.
 *
 * `ChromeContent` is the English object's own type, so every translation has
 * to match it key for key. A German file that forgets `footer.legal.title` is
 * a type error at build time rather than a blank heading in production.
 */
export type ChromeContent = typeof en;

export const getChrome = createDictionary<ChromeContent>(en, {
  de: () => import("./de").then((m) => m.chrome),
  fr: () => import("./fr").then((m) => m.chrome),
  pl: () => import("./pl").then((m) => m.chrome),
  it: () => import("./it").then((m) => m.chrome),
  es: () => import("./es").then((m) => m.chrome),
});

export { chrome as englishChrome } from "./en";
