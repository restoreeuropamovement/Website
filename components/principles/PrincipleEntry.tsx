import Link from "next/link";
import { ContentBlocks } from "@/components/content/ContentBlocks";
import { EditorialImage } from "@/components/media/EditorialImage";
import { CopyLinkButton } from "@/components/manifesto/CopyLinkButton";
import { Reveal } from "@/components/ui/Reveal";
import type { Principle } from "@/lib/content-types";
import { cn, pad } from "@/lib/utils";

interface PrincipleEntryProps {
  readonly principle: Principle;
  /** Alternates down the page so the column rhythm never becomes a list. */
  readonly flipped: boolean;
}

export function PrincipleEntry({ principle, flipped }: PrincipleEntryProps) {
  return (
    <section
      id={principle.id}
      aria-labelledby={`${principle.id}-heading`}
      className="border-t border-hairline py-14 lg:py-20"
    >
      <Reveal>
        <div
          className={cn(
            "grid gap-8 lg:gap-16 xl:gap-24",
            // One class or the other — never both, since `cn` does not resolve
            // conflicting Tailwind utilities.
            flipped
              ? "lg:grid-cols-[minmax(0,1.18fr)_minmax(0,0.82fr)]"
              : "lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]",
          )}
        >
          <header className={cn("flex flex-col gap-4", flipped && "lg:order-2")}>
            <div className="flex items-center justify-between gap-4 lg:justify-start lg:gap-5">
              <span className="numerals-tabular eyebrow text-burgundy">{pad(principle.number)}</span>
              <span aria-hidden="true" className="h-px flex-1 bg-hairline lg:max-w-16" />
              <CopyLinkButton
                anchor={principle.id}
                label={`Copy link to ${principle.title}`}
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
                href={`/manifesto#${principle.manifesto}`}
                className="eyebrow w-fit text-faint underline decoration-hairline underline-offset-[0.4em] transition-colors hover:text-burgundy hover:decoration-burgundy"
              >
                In the manifesto
              </Link>
            ) : null}
          </header>

          <div className={cn("flex flex-col gap-8", flipped && "lg:order-1")}>
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
      </Reveal>
    </section>
  );
}
