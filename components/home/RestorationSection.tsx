import { ContentBlocks } from "@/components/content/ContentBlocks";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { restoration } from "@/content/home";

export function RestorationSection() {
  return (
    <Section tone="deep" bordered spacing="lg" labelledBy="restoration">
      <Container size="narrow">
        <Reveal className="flex flex-col items-center text-center">
          <p className="eyebrow mb-8 text-burgundy">{restoration.eyebrow}</p>
          <h2 id="restoration" className="font-serif text-display-2 font-normal text-ink text-balance">
            {restoration.statement}
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="mt-12">
          <ContentBlocks blocks={restoration.body} className="mx-auto max-w-(--container-reading)" />
        </Reveal>

        <Reveal delay={0.12} className="mt-14">
          <Divider variant="mark" />
          <ul className="mt-10 flex flex-wrap justify-center gap-x-4 gap-y-3">
            {restoration.themes.map((theme, index) => (
              <li key={theme} className="flex items-center gap-4">
                {index > 0 ? <span aria-hidden="true" className="size-1 rotate-45 bg-gold/60" /> : null}
                <span className="font-serif text-[1.125rem] text-ink">{theme}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.16} className="mt-14 flex flex-col items-center gap-10">
          <p className="max-w-2xl text-center font-serif text-display-4 leading-snug text-muted text-balance">
            {restoration.closing}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button href={restoration.primaryCta.href} size="lg">
              {restoration.primaryCta.label}
            </Button>
            <Button href={restoration.secondaryCta.href} size="lg" variant="secondary">
              {restoration.secondaryCta.label}
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
