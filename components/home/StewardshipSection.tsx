import Image from "next/image";
import { ContentBlocks } from "@/components/content/ContentBlocks";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { images } from "@/content/images";
import { stewardship } from "@/content/home";

export function StewardshipSection() {
  return (
    <Section spacing="lg" labelledBy="stewardship" className="overflow-hidden">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-24">
          <Reveal>
            <p className="eyebrow mb-8 flex items-center gap-3 text-burgundy">
              <span aria-hidden="true" className="h-px w-6 bg-burgundy/40" />
              {stewardship.eyebrow}
            </p>
            <h2 id="stewardship" className="font-serif text-display-2 font-normal text-ink">
              {stewardship.title}
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <ContentBlocks blocks={stewardship.body} />
          </Reveal>
        </div>
      </Container>

      <Reveal delay={0.12} className="mt-16 lg:mt-20">
        <figure className="relative border-y border-hairline">
          <Image
            src={images.woodland.src}
            alt={images.woodland.alt}
            width={images.woodland.width}
            height={images.woodland.height}
            unoptimized
            sizes="100vw"
            className="h-[42vh] max-h-[34rem] min-h-[15rem] w-full object-cover"
          />
        </figure>
      </Reveal>

      <Container>
        <Reveal delay={0.16} className="mt-16 lg:mt-20">
          <h3 className="eyebrow mb-8 text-muted">What is held in trust</h3>
          <ul className="grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
            {stewardship.categories.map((category) => (
              <li key={category.title} className="flex flex-col gap-2 bg-canvas p-7">
                <h4 className="font-serif text-[1.25rem] text-ink">{category.title}</h4>
                <p className="text-[0.9375rem] leading-relaxed text-muted">{category.note}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}
