import type { Metadata } from "next";
import { Download } from "lucide-react";
import { CopyLinkButton } from "@/components/manifesto/CopyLinkButton";
import { LanguageSelector } from "@/components/manifesto/LanguageSelector";
import { ManifestoMobileNav } from "@/components/manifesto/ManifestoMobileNav";
import { ManifestoSection } from "@/components/manifesto/ManifestoSection";
import { ManifestoSidebar } from "@/components/manifesto/ManifestoSidebar";
import { ReadingProgress } from "@/components/manifesto/ReadingProgress";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { manifestoMeta, manifestoSections } from "@/content/manifesto";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: manifestoMeta.title,
  description:
    "The founding document of Restore Europe Movement: twenty-two sections on moral order, family, nation, economy, technology, stewardship, subsidiarity and restoration.",
  alternates: { canonical: "/manifesto" },
  openGraph: {
    title: `${manifestoMeta.title} · ${site.short}`,
    description: manifestoMeta.subtitle,
    url: "/manifesto",
    type: "article",
  },
};

const sectionLinks = manifestoSections.map(({ id, numeral, title }) => ({ id, numeral, title }));

export default function ManifestoPage() {
  return (
    <>
      <header className="border-b border-hairline bg-canvas-deep pt-16 pb-14 lg:pt-24 lg:pb-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-20">
            <div>
              <p className="eyebrow mb-6 flex items-center gap-3 text-burgundy">
                <span aria-hidden="true" className="h-px w-6 bg-burgundy/40" />
                Founding document
              </p>
              <h1 className="max-w-4xl font-serif text-display-2 font-normal text-ink">
                {manifestoMeta.title}
              </h1>
              <p className="mt-6 max-w-2xl font-serif text-display-4 leading-snug text-muted">
                {manifestoMeta.subtitle}
              </p>
            </div>

            <div className="flex flex-col gap-8 lg:pt-4">
              <div className="flex flex-col gap-3">
                <Button href="/manifesto/download" variant="secondary" download>
                  <Download className="size-4" strokeWidth={1.5} aria-hidden="true" />
                  Download Manifesto
                  <span className="eyebrow text-faint">TXT</span>
                </Button>
                <p className="text-micro text-faint">
                  {manifestoMeta.status}
                </p>
              </div>
              <LanguageSelector />
            </div>
          </div>
        </Container>
      </header>

      <ReadingProgress targetId="manifesto-body" />

      <Container className="pb-24 lg:pb-32">
        <ManifestoMobileNav sections={sectionLinks} />

        <div className="grid gap-16 pt-12 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16 lg:pt-20 xl:grid-cols-[17rem_minmax(0,1fr)] xl:gap-24">
          <div className="hidden lg:block">
            <ManifestoSidebar sections={sectionLinks} />
          </div>

          <article id="manifesto-body" className="flex max-w-(--container-reading) flex-col gap-12 lg:gap-16">
            {manifestoSections.map((section) => (
              <ManifestoSection key={section.id} section={section} />
            ))}

            <footer className="border-t border-hairline pt-10">
              <div className="flex flex-wrap items-center justify-between gap-6">
                {/* Burgundy rather than gold: gold does not reach AA on a light ground. */}
                <p className="font-serif text-display-4 text-burgundy">{site.closing}</p>
                <CopyLinkButton anchor="manifesto-body" label="Copy link to the manifesto" />
              </div>
              <p className="mt-8 text-[0.9375rem] leading-relaxed text-muted">
                This text is the reference version. Where a passage is disputed within the
                movement, the disagreement is recorded rather than resolved by amendment in
                silence.
              </p>
            </footer>
          </article>
        </div>
      </Container>
    </>
  );
}
