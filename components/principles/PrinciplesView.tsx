import Link from "next/link";
import { PrincipleEntry } from "@/components/principles/PrincipleEntry";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { getPrinciples } from "@/content/principles";
import { localePath, type Locale } from "@/lib/i18n";
import { routes } from "@/lib/site";
import { pad } from "@/lib/utils";

/** The principles page in one language. Rendered by both public route trees. */
export async function PrinciplesView({ locale }: { readonly locale: Locale }) {
  const { meta, principles } = await getPrinciples(locale);

  return (
    <>
      <PageHeader kicker={meta.title} title={meta.subtitle} lede={meta.lede}>
        <nav aria-label={meta.indexNavLabel} className="mt-10">
          <h2 className="mb-3 font-serif text-[0.9375rem] text-muted">{meta.indexLabel}</h2>
          <ol className="grid gap-x-8 border-t border-hairline sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => (
              <li key={principle.id} className="border-b border-hairline">
                <Link
                  href={`#${principle.id}`}
                  className="flex items-baseline gap-3 py-3 text-[0.9375rem] text-muted hover:text-burgundy"
                >
                  <span className="numerals-tabular text-[0.8125rem] text-faint">
                    {pad(principle.number)}
                  </span>
                  {principle.title}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      </PageHeader>

      <Container>
        {principles.map((principle) => (
          <PrincipleEntry
            key={principle.id}
            principle={principle}
            locale={locale}
            inManifesto={meta.inManifesto}
            copyLinkTo={meta.copyLinkTo}
          />
        ))}
      </Container>

      <section className="border-t border-hairline py-12 lg:py-16">
        <Container size="narrow">
          <h2 className="font-serif text-display-3 font-normal text-ink text-balance">
            {meta.closingTitle}
          </h2>
          <p className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-2 text-[0.9375rem]">
            <Link
              href={localePath(locale, routes.manifesto)}
              className="text-ink underline decoration-rule underline-offset-[0.28em] hover:text-burgundy hover:decoration-burgundy"
            >
              {meta.readManifesto}
            </Link>
            <span className="text-faint" aria-hidden="true">
              ·
            </span>
            <Link
              href={localePath(locale, routes.vision)}
              className="text-ink underline decoration-rule underline-offset-[0.28em] hover:text-burgundy hover:decoration-burgundy"
            >
              {meta.whatThisMeans}
            </Link>
          </p>
        </Container>
      </section>
    </>
  );
}
