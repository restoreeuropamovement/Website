import { RestoreEuropaMark } from "@/components/brand/RestoreEuropaMark";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getChrome } from "@/content/chrome";
import { DEFAULT_LOCALE, localePath, localeTag, type Locale } from "@/lib/i18n";
import { routes, primaryNavIds } from "@/lib/site";

/**
 * The page shown for an address that does not exist, in the reader's language.
 *
 * The links are rewritten for the locale: someone who mistyped a German
 * address is offered the German sections rather than being dropped back into
 * English. A `not-found` boundary renders outside `SiteChrome`, so this is
 * also where the translated subtree declares its `lang`.
 */
export async function NotFoundView({ locale }: { readonly locale: Locale }) {
  const { notFound, nav } = await getChrome(locale);

  return (
    <div lang={locale === DEFAULT_LOCALE ? undefined : localeTag(locale)}>
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
                  href={localePath(locale, routes[id])}
                  className="flex flex-col gap-1 py-4 text-left transition-colors hover:text-burgundy"
                >
                  <span className="font-serif text-display-4 text-ink">{nav[id].label}</span>
                  <span className="text-[0.875rem] text-muted">{nav[id].description}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Button href={localePath(locale, routes.home)} size="lg" className="mt-12">
          {notFound.backHome}
        </Button>
      </Container>
    </div>
  );
}
