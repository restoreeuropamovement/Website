import { Download } from "lucide-react";
import { CopyLinkButton } from "@/components/manifesto/CopyLinkButton";
import { ManifestoMobileNav } from "@/components/manifesto/ManifestoMobileNav";
import { ManifestoSection } from "@/components/manifesto/ManifestoSection";
import { ManifestoSidebar } from "@/components/manifesto/ManifestoSidebar";
import { ReadingProgress } from "@/components/manifesto/ReadingProgress";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getChrome } from "@/content/chrome";
import type { ManifestoEdition } from "@/content/manifesto";
import { localePath } from "@/lib/i18n";

/**
 * Renders one edition of the manifesto.
 *
 * Shared by the English page and every translation, so the two cannot drift
 * apart in layout, navigation or footer — a translated edition that quietly
 * lost the section index would be worse than no translation.
 */
export async function ManifestoDocument({
  edition,
  bcp47,
}: {
  readonly edition: ManifestoEdition;
  /** Language tag for the article element, so the page is announced correctly. */
  readonly bcp47: string;
}) {
  const sectionLinks = edition.sections.map(({ id, numeral, title }) => ({ id, numeral, title }));
  const { labels } = edition;
  /*
   * The three words that close the document belong to the shared chrome — the
   * footer sets them too — so they are read from there rather than from the
   * English `site` constant, which would have left one English line at the end
   * of five translated manifestos.
   */
  const chrome = await getChrome(edition.locale);
  const closing = chrome.site.closing;

  return (
    <>
      <header className="border-b border-hairline">
        <Container>
          <div className="grid gap-12 py-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-20 lg:py-12">
            <div>
              <p className="mb-3 font-serif text-[0.9375rem] text-muted">{labels.eyebrow}</p>
              <h1 className="max-w-4xl font-serif text-display-2 font-normal text-ink" lang={bcp47}>
                {edition.title}
              </h1>
              <p
                className="mt-6 max-w-2xl font-serif text-display-4 leading-snug text-muted"
                lang={bcp47}
              >
                {edition.subtitle}
              </p>
            </div>

            <div className="flex flex-col gap-8 lg:pt-4">
              <div className="flex flex-col gap-3">
                {/*
                  The download is generated from this edition, so the file a
                  German reader gets is the German text under a German name.
                */}
                <Button
                  href={localePath(edition.locale, "/manifesto/download")}
                  variant="secondary"
                  download
                >
                  <Download className="size-4" strokeWidth={1.5} aria-hidden="true" />
                  {labels.download}
                  {/* A file format rather than a word; the same in six languages. */}
                  <span className="eyebrow text-faint">TXT</span>
                </Button>
                <p className="text-micro text-faint">{edition.status}</p>
              </div>
            </div>
          </div>
        </Container>
      </header>

      <ReadingProgress targetId="manifesto-body" label={labels.progressLabel} />

      <Container className="pb-24 lg:pb-32">
        <ManifestoMobileNav sections={sectionLinks} contents={labels.contents} />

        <div className="grid gap-16 pt-12 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16 lg:pt-20 xl:grid-cols-[17rem_minmax(0,1fr)] xl:gap-24">
          <div className="hidden lg:block">
            <ManifestoSidebar
              sections={sectionLinks}
              heading={labels.contents}
              navLabel={labels.contentsNavLabel}
            />
          </div>

          <article
            id="manifesto-body"
            lang={bcp47}
            className="flex max-w-(--container-reading) flex-col gap-12 lg:gap-16"
          >
            {edition.sections.map((section) => (
              <ManifestoSection
                key={section.id}
                section={section}
                labels={labels}
                copied={chrome.common.copied}
                copiedAnnouncement={chrome.common.copiedToClipboard}
              />
            ))}

            <footer className="border-t border-hairline pt-10">
              <div className="flex flex-wrap items-center justify-between gap-6">
                {/* Burgundy rather than gold: gold does not reach AA on a light ground. */}
                <p className="font-serif text-display-4 text-burgundy">{closing}</p>
                <CopyLinkButton
                  anchor="manifesto-body"
                  label={labels.copyDocument}
                  copied={chrome.common.copied}
                  copiedAnnouncement={chrome.common.copiedToClipboard}
                />
              </div>
              <p className="mt-8 text-[0.9375rem] leading-relaxed text-muted">
                {labels.reference}
              </p>
            </footer>
          </article>
        </div>
      </Container>
    </>
  );
}
