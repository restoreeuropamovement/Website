import { ContentBlocks } from "@/components/content/ContentBlocks";
import { Container } from "@/components/ui/Container";
import { EditorialImage } from "@/components/media/EditorialImage";
import { Section } from "@/components/ui/Section";
import type { HomeContent } from "@/content/home";
import { images } from "@/content/images";

export function EuropeSection({ content }: { readonly content: HomeContent["europe"] }) {
  return (
    <Section bordered labelledBy="europe">
      <Container>
        <h2 id="europe" className="max-w-4xl font-serif text-display-2 font-normal text-ink">
          {content.title}
        </h2>
        <p className="mt-3 max-w-2xl font-serif text-lede text-muted">{content.subtitle}</p>

        <p className="mt-8 max-w-3xl font-serif text-display-4 leading-snug text-ink">
          {content.nations.join(" ")} {content.together}
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start lg:gap-16">
          <div>
            <ContentBlocks blocks={content.body} />

            <div className="mt-8 border-t border-hairline pt-6">
              <h3 className="font-serif text-[0.9375rem] text-muted">
                {content.cooperation.title}
              </h3>
              <p className="mt-3 text-reading text-body/92">
                {content.cooperation.items.join(", ")}.
              </p>
            </div>
          </div>

          <EditorialImage
            slot={images.arcade}
            aspect="aspect-[16/11]"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>
      </Container>
    </Section>
  );
}
