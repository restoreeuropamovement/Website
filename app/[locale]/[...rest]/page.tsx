import { notFound } from "next/navigation";

/**
 * Every address under a language prefix that matches nothing else.
 *
 * Without it, `/de/keine-seite` is rejected by the router before any of this
 * tree renders, and the reader is given the framework's stock English page.
 * Matching the address here and then failing puts the request inside the
 * locale layout, so `not-found.tsx` beside it can answer in German.
 *
 * `dynamicParams` overrides the closed set the layout declares: the languages
 * stay a fixed list, but the path after one does not have to be known in
 * advance for a 404 to be rendered in the right language.
 */
export const dynamicParams = true;

export default function LocaleCatchAll(): never {
  notFound();
}
