import Link from "next/link";
import { ContentBlocks } from "@/components/content/ContentBlocks";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { HomeContent } from "@/content/home";
import { localePath, type Locale } from "@/lib/i18n";

export function RestorationSection({
  content,
  locale,
}: {
  readonly content: HomeContent["restoration"];
  readonly locale: Locale;
}) {
  return (
    <Section spacing="lg" bordered labelledBy="restoration">
      <Container size="narrow">
        <h2 id="restoration" className="font-serif text-display-2 font-normal text-ink text-balance">
          {content.statement}
        </h2>

        <div className="mt-8">
          <ContentBlocks blocks={content.body} className="max-w-(--container-reading)" />
        </div>

        <p className="mt-8 font-serif text-display-4 leading-snug text-muted">{content.closing}</p>

        <p className="mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-2 text-[0.9375rem]">
          <Link
            href={localePath(locale, content.primaryCta.href)}
            className="text-ink underline decoration-rule underline-offset-[0.28em] hover:text-burgundy hover:decoration-burgundy"
          >
            {content.primaryCta.label}
          </Link>
          <span className="text-faint" aria-hidden="true">
            ·
          </span>
          <Link
            href={localePath(locale, content.secondaryCta.href)}
            className="text-ink underline decoration-rule underline-offset-[0.28em] hover:text-burgundy hover:decoration-burgundy"
          >
            {content.secondaryCta.label}
          </Link>
        </p>
      </Container>
    </Section>
  );
}
