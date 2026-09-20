import { ContentBlocks } from "@/components/content/ContentBlocks";
import type { ManifestoSectionData } from "@/lib/content-types";
import { CopyLinkButton } from "./CopyLinkButton";

export function ManifestoSection({ section }: { readonly section: ManifestoSectionData }) {
  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-heading`}
      // Below `lg` the contents selector sits under the masthead, so anchored
      // sections need to clear both.
      className="scroll-mt-36 border-t border-hairline pt-12 first:border-t-0 first:pt-0 lg:scroll-mt-28 lg:pt-16"
    >
      <header className="mb-10">
        <div className="mb-5 flex items-center justify-between gap-4">
          <span className="eyebrow text-burgundy">{section.numeral}</span>
          <CopyLinkButton
            anchor={section.id}
            label={`Copy link to section ${section.numeral}, ${section.title}`}
          />
        </div>

        <h2
          id={`${section.id}-heading`}
          className="font-serif text-display-3 font-normal text-ink"
        >
          {section.title}
        </h2>

        <p className="mt-4 text-[1.0625rem] leading-relaxed text-muted text-balance">
          {section.summary}
        </p>
      </header>

      <ContentBlocks blocks={section.body} />
    </section>
  );
}
