import type { Metadata } from "next";
import { RestoreEuropeMark } from "@/components/brand/RestoreEuropeMark";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { primaryNav } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Container size="narrow" className="flex flex-col items-center py-28 text-center lg:py-40">
      <RestoreEuropeMark className="w-8 text-rule" />
      <p className="eyebrow mt-10 text-burgundy">Error 404</p>
      <h1 className="mt-5 font-serif text-display-2 font-normal text-ink text-balance">
        This page does not exist.
      </h1>
      <p className="mt-6 max-w-xl text-lede text-muted">
        The address may have changed, or it may never have been here. The main sections of the site
        are below.
      </p>

      <nav aria-label="Main sections" className="mt-12 w-full max-w-xl">
        <ul className="flex flex-col border-t border-hairline">
          {primaryNav.map((item) => (
            <li key={item.href} className="border-b border-hairline">
              <a
                href={item.href}
                className="flex flex-col gap-1 py-4 text-left transition-colors hover:text-burgundy"
              >
                <span className="font-serif text-display-4 text-ink">{item.label}</span>
                <span className="text-[0.875rem] text-muted">{item.description}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <Button href="/" size="lg" className="mt-12">
        Return to the front page
      </Button>
    </Container>
  );
}
