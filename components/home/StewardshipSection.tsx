import Image from "next/image";
import { ContentBlocks } from "@/components/content/ContentBlocks";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { HomeContent } from "@/content/home";
import { images } from "@/content/images";

export function StewardshipSection({
  content,
}: {
  readonly content: HomeContent["stewardship"];
}) {
  return (
    <Section labelledBy="stewardship" className="overflow-hidden">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          <h2 id="stewardship" className="font-serif text-display-2 font-normal text-ink">
            {content.title}
          </h2>
          <ContentBlocks blocks={content.body} />
        </div>
      </Container>

      <figure className="mt-12 border-y border-hairline">
        <Image
          src={images.woodland.src}
          alt={images.woodland.alt}
          width={images.woodland.width}
          height={images.woodland.height}
          unoptimized
          sizes="100vw"
          className="h-[min(38vh,26rem)] w-full object-cover"
        />
      </figure>

      <Container>
        <h3 className="mt-10 font-serif text-[0.9375rem] text-muted">{content.categoriesTitle}</h3>
        <ul className="mt-4 columns-1 sm:columns-2 sm:gap-x-12">
          {content.categories.map((category) => (
            <li key={category.title} className="break-inside-avoid border-t border-hairline py-3">
              <span className="font-serif text-ink">{category.title}</span>
              <span className="text-muted"> — {category.note}</span>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
