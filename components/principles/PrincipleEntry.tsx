import Link from "next/link";
import { ContentBlocks } from "@/components/content/ContentBlocks";
import { EditorialImage } from "@/components/media/EditorialImage";
import { CopyLinkButton } from "@/components/manifesto/CopyLinkButton";
import type { Principle } from "@/lib/content-types";
import { localePath, type Locale } from "@/lib/i18n";
import { routes } from "@/lib/site";
import { pad } from "@/lib/utils";

interface PrincipleEntryProps {
  readonly principle: Principle;
  readonly locale: Locale;
  readonly inManifesto: string;
  readonly copyLinkTo: string;
  /** The copy button's other two words, shared with the manifesto. */
  readonly copied: string;
  readonly copiedAnnouncement: string;
}

export function PrincipleEntry({
  principle,
  locale,
  inManifesto,
  copyLinkTo,
  copied,
  copiedAnnouncement,
}: PrincipleEntryProps) {
  return (
    <section
      id={principle.id}
      aria-labelledby={`${principle.id}-heading`}
      className="border-t border-hairline py-12 lg:py-16"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-16 xl:gap-24">
        <header className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-4 lg:justify-start lg:gap-5">
            <span className="numerals-tabular text-[0.8125rem] text-muted">
              {pad(principle.number)}
            </span>
            <CopyLinkButton
              anchor={principle.id}
              label={`${copyLinkTo} ${principle.title}`}
              copied={copied}
              copiedAnnouncement={copiedAnnouncement}
            />
          </div>

          <h2
            id={`${principle.id}-heading`}
            className="font-serif text-display-3 font-normal text-ink"
          >
            {principle.title}
          </h2>

          {principle.manifesto ? (
            <Link
              href={`${localePath(locale, routes.manifesto)}#${principle.manifesto}`}
              className="w-fit text-[0.8125rem] text-muted underline decoration-hairline underline-offset-[0.4em] hover:text-burgundy hover:decoration-burgundy"
            >
              {inManifesto}
            </Link>
          ) : null}
        </header>

        <div className="flex flex-col gap-8">
          <p className="font-serif text-display-4 leading-snug text-ink text-balance">
            {principle.statement}
          </p>
          <ContentBlocks blocks={principle.body} className="max-w-(--container-reading)" />

          {principle.image ? (
            <EditorialImage
              slot={principle.image}
              aspect="aspect-[21/9]"
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="mt-2"
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}
