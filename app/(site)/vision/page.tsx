import type { Metadata } from "next";
import Link from "next/link";
import { ContentBlocks } from "@/components/content/ContentBlocks";
import { EditorialImage } from "@/components/media/EditorialImage";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
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
      <PageHeader kicker={visionMeta.eyebrow} title={visionMeta.title} lede={visionMeta.lede} />

      <Container className="py-12 lg:py-16">
        <ContentBlocks blocks={visionMeta.intro} className="max-w-(--container-reading)" />

        <div className="mt-12">
          <EditorialImage
            slot={images.valleyWide}
            aspect="aspect-[21/9] sm:aspect-[24/7]"
            sizes="100vw"
          />
        </div>

        <h2 className="mt-16 font-serif text-display-3 font-normal text-ink">A Europe where —</h2>

        <ol className="mt-2">
          {visionOutcomes.map((outcome, index) => (
            <li key={outcome.id} id={outcome.id}>
              <article className="grid gap-6 border-b border-hairline py-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] lg:gap-16 lg:py-12 xl:gap-24">
                <header className="flex gap-5">
                  <span className="numerals-tabular pt-2 text-[0.8125rem] text-muted">
                    {pad(index + 1)}
                  </span>
                  <div className="flex flex-col gap-3">
                    <h3 className="font-serif text-display-4 font-normal text-ink sm:text-display-3">
                      {outcome.title}
                    </h3>
                    <p className="text-[0.9375rem] text-muted">{outcome.summary}</p>
                  </div>
                </header>

                <div className="flex flex-col items-start gap-4 lg:pt-2">
                  <p className="text-reading text-body/92">{outcome.body}</p>
                  <Link
                    href={outcome.principle}
                    className="text-[0.875rem] text-ink underline decoration-rule underline-offset-[0.28em] hover:text-burgundy hover:decoration-burgundy"
                  >
                    The principle behind it
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ol>

        <div className="mt-16 max-w-(--container-reading)">
          <h2 className="font-serif text-display-3 font-normal text-ink text-balance">
            {visionClosing.statement}
          </h2>
          <div className="mt-6">
            <ContentBlocks blocks={visionClosing.body} />
          </div>
          <p className="mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-2 text-[0.9375rem]">
            <Link
              href="/manifesto"
              className="text-ink underline decoration-rule underline-offset-[0.28em] hover:text-burgundy hover:decoration-burgundy"
            >
              Read the manifesto
            </Link>
            <span className="text-faint" aria-hidden="true">
              ·
            </span>
            <Link
              href="/join"
              className="text-ink underline decoration-rule underline-offset-[0.28em] hover:text-burgundy hover:decoration-burgundy"
            >
              Get involved
            </Link>
          </p>
        </div>
      </Container>
    </>
  );
}
