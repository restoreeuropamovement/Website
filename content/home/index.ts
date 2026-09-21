import { createDictionary } from "@/lib/dictionary";
import { home as en } from "./en";

export type HomeContent = typeof en;

export const getHome = createDictionary<HomeContent>(en, {
  de: () => import("./de").then((m) => m.home),
  fr: () => import("./fr").then((m) => m.home),
  pl: () => import("./pl").then((m) => m.home),
  it: () => import("./it").then((m) => m.home),
  es: () => import("./es").then((m) => m.home),
});
