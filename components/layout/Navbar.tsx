"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wordmark } from "@/components/brand/Wordmark";
import { Container } from "@/components/ui/Container";
import { LanguageMenu } from "./LanguageMenu";
import { MobileNavigation } from "./MobileNavigation";
import type { ChromeContent } from "@/content/chrome";
import { localePath, stripLocale, type Locale } from "@/lib/i18n";
import { ctaRoute, primaryNavIds, routes } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * A solid masthead. It does not glass over, fade in, or wait for a scroll
 * threshold — those are landing-page habits, and they make the bar feel like a
 * product site rather than a newspaper.
 */
export function Navbar({
  chrome,
  locale,
}: {
  readonly chrome: ChromeContent;
  readonly locale: Locale;
}) {
  const pathname = usePathname();
  /* Compared without the locale prefix, so /de/principles marks Principles
     active in exactly the way /principles does. */
  const current = stripLocale(pathname);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-canvas">
      <Container className="flex h-16 items-center justify-between gap-6 lg:h-18">
        <Link
          href={localePath(locale, routes.home)}
          className="shrink-0 text-ink transition-opacity hover:opacity-70"
        >
          <Wordmark descriptor={chrome.site.descriptor} />
          {/* Part of the link text rather than an aria-label, so the accessible
              name still contains the visible wordmark. */}
          <span className="sr-only">— {chrome.common.home}</span>
        </Link>

        <nav aria-label={chrome.common.primaryNavLabel} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {primaryNavIds.map((id) => {
              const href = routes[id];
              const active = current === href || current.startsWith(`${href}/`);
              return (
                <li key={id}>
                  <Link
                    href={localePath(locale, href)}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "inline-flex h-9 items-center px-2.5 text-[0.8125rem] xl:px-3",
                      active ? "text-ink" : "text-muted hover:text-ink",
                    )}
                  >
                    {chrome.nav[id].label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2 lg:gap-3">
          <Link
            href={localePath(locale, ctaRoute)}
            className="hidden text-[0.8125rem] text-ink underline decoration-rule underline-offset-[0.28em] hover:text-burgundy hover:decoration-burgundy lg:inline"
          >
            {chrome.cta.label}
          </Link>
          <LanguageMenu current={locale} label={chrome.common.language} />
          <MobileNavigation chrome={chrome} locale={locale} />
        </div>
      </Container>
    </header>
  );
}
