import Link from "next/link";
import { Wordmark } from "@/components/brand/Wordmark";
import { Container } from "@/components/ui/Container";
import { footerNav, site, socialPlaceholders } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-ink border-t border-hairline-inverse bg-ink text-canvas/70">
      <Container className="py-16 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,2fr)] lg:gap-20">
          <div className="flex flex-col gap-6">
            <Link href="/" className="w-fit text-canvas transition-opacity hover:opacity-70">
              <Wordmark variant="stacked" size="lg" />
              <span className="sr-only">— home</span>
            </Link>
            <p className="max-w-sm font-serif text-[1.125rem] leading-snug text-canvas/70 text-balance">
              {site.tagline}
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {footerNav.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <h2 className="eyebrow mb-5 text-canvas/58">{group.title}</h2>
                <ul className="flex flex-col gap-3">
                  {group.items.map((item) => (
                    <li key={`${group.title}-${item.href}`}>
                      <Link
                        href={item.href}
                        className="text-[0.9375rem] text-canvas/72 transition-colors hover:text-gold-soft"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-hairline-inverse pt-8">
          <h2 className="eyebrow mb-4 text-canvas/58">Channels</h2>
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {socialPlaceholders.map((item) => (
              <li
                key={item.label}
                className="flex items-baseline gap-2 text-[0.9375rem] text-canvas/62"
              >
                {item.label}
                <span className="eyebrow text-[0.5625rem] text-canvas/58">Not yet active</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 flex flex-col gap-8 border-t border-hairline-inverse pt-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="font-serif text-display-4 text-gold-soft">{site.closing}</p>
          <div className="flex flex-col gap-1.5 text-micro text-canvas/62 sm:text-right">
            <p>
              © {year} {site.formal}
            </p>
            <p>This site is under construction. Organisational details are published as they are confirmed.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
