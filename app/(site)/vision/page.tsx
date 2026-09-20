import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContentBlocks } from "@/components/content/ContentBlocks";
import { EditorialImage } from "@/components/media/EditorialImage";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/content/images";
import { visionClosing, visionMeta, visionOutcomes } from "@/content/vision";
import { pad } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Vision",
  description:
    "What Restore Europe's programme means in ordinary life: affordable homes, families that can raise children, work that leaves time for living, beautiful towns, protected nature, technology under human control and politics that serves people.",
  alternates: { canonical: "/vision" },
};

export default function VisionPage() {
  return (
    <>
      <header className="border-b border-hairline bg-canvas-deep pt-16 pb-14 lg:pt-24 lg:pb-20">
        <Container>
          <p className="eyebrow mb-6 flex items-center gap-3 text-burgundy">
            <span aria-hidden="true" className="h-px w-6 bg-burgundy/40" />
            {visionMeta.eyebrow}
          </p>
          <h1 className="max-w-4xl font-serif text-display-1 font-normal text-ink">
            {visionMeta.title}
          </h1>
          <p className="mt-8 max-w-(--container-reading) text-lede text-muted">{visionMeta.lede}</p>
        </Container>
      </header>

      <Container className="py-16 lg:py-24">
        <Reveal>
          <ContentBlocks blocks={visionMeta.intro} className="max-w-(--container-reading)" />
        </Reveal>

        <Reveal delay={0.08} className="mt-14 lg:mt-20">
          <EditorialImage
            slot={{
              ...images.valleyWide,
              caption:
                "Image slot reserved for commissioned photography of European countryside, towns and civic life.",
            }}
            aspect="aspect-[21/9] sm:aspect-[24/7]"
            sizes="100vw"
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-20 lg:mt-28">
          <h2 className="font-serif text-display-3 font-normal text-ink">A Europe where —</h2>
          <Divider className="mt-8" />
        </Reveal>

        <ol className="mt-4">
          {visionOutcomes.map((outcome, index) => (
            <li key={outcome.id} id={outcome.id}>
              <Reveal>
                <article className="grid gap-6 border-b border-hairline py-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] lg:gap-16 lg:py-16 xl:gap-24">
                  <header className="flex gap-5">
                    <span className="numerals-tabular eyebrow pt-2 text-burgundy/80">
                      {pad(index + 1)}
                    </span>
                    <div className="flex flex-col gap-3">
                      <h3 className="font-serif text-display-4 font-normal text-ink sm:text-display-3">
                        {outcome.title}
                      </h3>
                      <p className="text-[0.9375rem] text-muted">{outcome.summary}</p>
                    </div>
                  </header>

                  <div className="flex flex-col items-start gap-6 lg:pt-2">
                    <p className="text-reading text-body/92">{outcome.body}</p>
                    <Link
                      href={outcome.principle}
                      className="group inline-flex items-center gap-2 text-[0.875rem] font-medium text-ink transition-colors hover:text-burgundy"
                    >
                      The principle behind it
                      <ArrowRight
                        className="size-3.5 transition-transform group-hover:translate-x-0.5"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className="mt-20 lg:mt-28">
          <div className="mx-auto flex max-w-(--container-reading) flex-col gap-8">
            <h2 className="font-serif text-display-3 font-normal text-ink text-balance">
              {visionClosing.statement}
            </h2>
            <ContentBlocks blocks={visionClosing.body} />
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button href="/manifesto" size="lg">
                Read the Manifesto
              </Button>
              <Button href="/join" size="lg" variant="secondary">
                Get Involved
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </>
  );
}
