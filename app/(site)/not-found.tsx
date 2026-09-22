import type { Metadata } from "next";
import { RestoreEuropaMark } from "@/components/brand/RestoreEuropaMark";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { englishChrome } from "@/content/chrome";
import { routes, primaryNavIds } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

/**
 * English only, deliberately. A `not-found` boundary renders for addresses that
 * matched no route, so there is no locale segment to read and no honest way to
 * guess which language the reader wanted.
 */
export default function NotFound() {
  const { notFound, nav } = englishChrome;

  return (
    <Container size="narrow" className="flex flex-col items-center py-28 text-center lg:py-40">
      <RestoreEuropaMark className="h-16 w-auto" />
      <p className="eyebrow mt-10 text-burgundy">{notFound.eyebrow}</p>
      <h1 className="mt-5 font-serif text-display-2 font-normal text-ink text-balance">
        {notFound.title}
      </h1>
      <p className="mt-6 max-w-xl text-lede text-muted">{notFound.lede}</p>

      <nav aria-label={notFound.sectionsLabel} className="mt-12 w-full max-w-xl">
        <ul className="flex flex-col border-t border-hairline">
          {primaryNavIds.map((id) => (
            <li key={id} className="border-b border-hairline">
              <a
                href={routes[id]}
                className="flex flex-col gap-1 py-4 text-left transition-colors hover:text-burgundy"
              >
                <span className="font-serif text-display-4 text-ink">{nav[id].label}</span>
                <span className="text-[0.875rem] text-muted">{nav[id].description}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <Button href={routes.home} size="lg" className="mt-12">
        {notFound.backHome}
      </Button>
    </Container>
  );
}
