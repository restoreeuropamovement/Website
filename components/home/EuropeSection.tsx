import { ContentBlocks } from "@/components/content/ContentBlocks";
import { Container } from "@/components/ui/Container";
import { EditorialImage } from "@/components/media/EditorialImage";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { images } from "@/content/images";
import { europe } from "@/content/home";

export function EuropeSection() {
  return (
    <Section tone="surface" bordered spacing="lg" labelledBy="europe">
      <Container>
        <Reveal className="max-w-4xl">
          <p className="eyebrow mb-8 flex items-center gap-3 text-burgundy">
            <span aria-hidden="true" className="h-px w-6 bg-burgundy/40" />
            {europe.eyebrow}
          </p>
          <h2 id="europe" className="font-serif text-display-2 font-normal text-ink">
            {europe.title}
          </h2>
          <p className="mt-6 font-serif text-display-4 leading-snug text-muted">{europe.subtitle}</p>
        </Reveal>

        <Reveal delay={0.08} className="mt-14 lg:mt-20">
          <ul className="grid gap-px border border-hairline bg-hairline md:grid-cols-3">
            {europe.nations.map((line) => (
              <li
                key={line}
                className="bg-surface p-8 font-serif text-[1.375rem] leading-snug text-ink lg:p-10 lg:text-[1.5rem]"
              >
                {line}
              </li>
            ))}
          </ul>
          <p className="mt-8 font-serif text-display-3 text-ink">{europe.together}</p>
        </Reveal>

        <div className="mt-16 grid gap-14 lg:mt-24 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start lg:gap-20">
          <Reveal delay={0.12}>
            <ContentBlocks blocks={europe.body} />

            <div className="mt-12 border-t border-hairline pt-8">
              <h3 className="eyebrow mb-6 text-muted">{europe.cooperation.title}</h3>
              <ul className="flex flex-wrap gap-x-3 gap-y-2.5">
                {europe.cooperation.items.map((item) => (
                  <li
                    key={item}
                    className="border border-rule px-4 py-2 text-[0.875rem] font-medium text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <EditorialImage
              slot={{
                ...images.arcade,
                caption:
                  "Subsidiarity, drawn as architecture: a shared order made of distinct, self-supporting bays.",
              }}
              aspect="aspect-[16/11]"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
