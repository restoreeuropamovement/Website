import Link from "next/link";
import { Wordmark } from "@/components/brand/Wordmark";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Container } from "@/components/ui/Container";
import type { ChromeContent } from "@/content/chrome";
import { localePath, type Locale } from "@/lib/i18n";
import { routes, site } from "@/lib/site";

export function Footer({
  chrome,
  locale,
}: {
  readonly chrome: ChromeContent;
  readonly locale: Locale;
}) {
  const year = new Date().getFullYear();

  /* Built here rather than in `lib/site.ts` so that each label is read from the
     dictionary by name. A group and its links cannot fall out of step, and a
     translation file never contains a URL. */
  const groups = [
    {
      title: chrome.footer.movement.title,
      items: [
        { label: chrome.footer.movement.principles, href: routes.principles },
        { label: chrome.footer.movement.manifesto, href: routes.manifesto },
        { label: chrome.footer.movement.policy, href: routes.policy },
        { label: chrome.footer.movement.vision, href: routes.vision },
        { label: chrome.footer.movement.about, href: routes.about },
        { label: chrome.footer.movement.wings, href: routes.wings },
        { label: chrome.footer.movement.join, href: routes.join },
      ],
    },
    {
      title: chrome.footer.contact.title,
      items: [
        { label: chrome.footer.contact.contact, href: routes.contact },
        { label: chrome.footer.contact.press, href: routes.press },
        { label: chrome.footer.contact.research, href: routes.research },
        { label: chrome.footer.contact.chapters, href: routes.chapters },
      ],
    },
    {
      title: chrome.footer.legal.title,
      items: [
        { label: chrome.footer.legal.privacy, href: routes.privacy },
        { label: chrome.footer.legal.imprint, href: routes.imprint },
      ],
    },
  ];

  return (
    <footer className="on-ink border-t border-hairline-inverse bg-ink text-canvas/70">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,2fr)] lg:gap-20">
          <div className="flex flex-col gap-6">
            <Link
              href={localePath(locale, routes.home)}
              className="w-fit text-canvas transition-opacity hover:opacity-70"
            >
              <Wordmark variant="stacked" size="lg" descriptor={chrome.site.descriptor} />
              <span className="sr-only">— {chrome.common.home}</span>
            </Link>
            <p className="max-w-sm font-serif text-[1.125rem] leading-snug text-canvas/70 text-balance">
              {chrome.site.tagline}
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {groups.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <h2 className="eyebrow mb-5 text-canvas/58">{group.title}</h2>
                <ul className="flex flex-col gap-3">
                  {group.items.map((item) => (
                    <li key={`${group.title}-${item.href}`}>
                      <Link
                        href={localePath(locale, item.href)}
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

        <div className="mt-16 flex flex-col gap-8 border-t border-hairline-inverse pt-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="font-serif text-display-4 text-gold-soft">{chrome.site.closing}</p>
          <LanguageSwitcher current={locale} label={chrome.common.language} />
        </div>

        <div className="mt-10 border-t border-hairline-inverse pt-6 text-micro text-canvas/62">
          <p>
            © {year} {site.formal}
          </p>
        </div>
      </Container>
    </footer>
  );
}
