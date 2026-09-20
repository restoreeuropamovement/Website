import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContentBlocks } from "@/components/content/ContentBlocks";
import { ArticleCard } from "@/components/journal/ArticleCard";
import { ArticleHero } from "@/components/journal/ArticleHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PLACEHOLDER_NOTICE } from "@/content/journal/articles";
import { renderInline } from "@/lib/inline";
import { getArticle, getArticles, getRelatedArticles } from "@/lib/journal";
import { site } from "@/lib/site";
import { articleSchema } from "@/lib/structured-data";

/**
 * Essays published after the build are rendered on demand and then cached, so
 * publishing from `/admin` does not require a redeploy. Admin mutations call
 * `revalidatePath` for an immediate update; this window is the backstop for
 * anything that misses.
 */
export const revalidate = 300;

export async function generateStaticParams() {
  return (await getArticles()).map((article) => ({ slug: article.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const article = await getArticle(slug);
  if (!article) return { title: "Essay not found" };

  return {
    title: article.title,
    description: article.standfirst,
    alternates: { canonical: `/journal/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.standfirst,
      url: `/journal/${article.slug}`,
      publishedTime: article.date,
      section: article.category,
      authors: [article.author],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.standfirst,
    },
  };
}

export default async function ArticlePage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const article = await getArticle(slug);
  if (!article) notFound();

  const related = await getRelatedArticles(article);

  return (
    <>
      <JsonLd data={articleSchema(article)} />
      <ArticleHero article={article} />

      <Container className="py-14 lg:py-20">
        <article className="mx-auto flex max-w-(--container-reading) flex-col gap-8">
          <p className="font-serif text-display-4 leading-snug text-ink">{article.standfirst}</p>

          <p className="border-l-2 border-gold/65 py-1 pl-5 text-[0.875rem] leading-relaxed text-muted">
            {PLACEHOLDER_NOTICE}
          </p>

          <ContentBlocks blocks={article.body} headingLevel={2} className="mt-2" />

          {article.footnotes && article.footnotes.length > 0 ? (
            <section aria-labelledby="notes-heading" className="mt-8 border-t border-hairline pt-8">
              <h2 id="notes-heading" className="eyebrow mb-6 text-muted">
                Notes
              </h2>
              <ol className="flex flex-col gap-4">
                {article.footnotes.map((footnote) => (
                  <li
                    key={footnote.id}
                    id={`fn-${footnote.id}`}
                    className="grid grid-cols-[1.75rem_1fr] items-baseline text-[0.9375rem] leading-relaxed text-muted"
                  >
                    <span className="numerals-tabular text-[0.75rem] font-medium text-burgundy">
                      {footnote.id}
                    </span>
                    <span>
                      {renderInline(footnote.text)}{" "}
                      {/* Bordered rather than coloured: a link inside running text
                          must be distinguishable by more than colour alone. */}
                      <a
                        href={`#fnref-${footnote.id}`}
                        className="ml-1 inline-flex size-5 translate-y-1 items-center justify-center border border-rule text-[0.75rem] leading-none text-muted no-underline transition-colors hover:border-burgundy hover:text-burgundy"
                        aria-label={`Return to reference ${footnote.id} in the text`}
                      >
                        <span aria-hidden="true">↩</span>
                      </a>
                    </span>
                  </li>
                ))}
              </ol>
            </section>
          ) : null}

          {article.citations && article.citations.length > 0 ? (
            <section
              aria-labelledby="references-heading"
              className="mt-4 border-t border-hairline pt-8"
            >
              <h2 id="references-heading" className="eyebrow mb-6 text-muted">
                References
              </h2>
              <dl className="flex flex-col">
                {article.citations.map((citation) => (
                  <div
                    key={citation.label}
                    className="grid gap-1 border-b border-hairline py-3.5 sm:grid-cols-[9rem_1fr] sm:gap-6"
                  >
                    <dt className="text-[0.875rem] font-medium text-ink">{citation.label}</dt>
                    <dd className="text-[0.9375rem] leading-relaxed text-muted">
                      {citation.detail}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 text-micro text-faint">
                References are to our own published documents. See the{" "}
                <Link href="/manifesto" className="underline underline-offset-4 hover:text-burgundy">
                  manifesto
                </Link>{" "}
                and{" "}
                <Link href="/principles" className="underline underline-offset-4 hover:text-burgundy">
                  principles
                </Link>
                .
              </p>
            </section>
          ) : null}
        </article>
      </Container>

      {related.length > 0 ? (
        <section
          aria-labelledby="related-heading"
          className="border-t border-hairline bg-surface py-14 lg:py-20"
        >
          <Container>
            <h2 id="related-heading" className="eyebrow mb-10 text-muted">
              Related essays
            </h2>
            <Reveal>
              <ul className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((item) => (
                  <li key={item.slug} className="flex">
                    <ArticleCard article={item} className="flex-1" />
                  </li>
                ))}
              </ul>
            </Reveal>
          </Container>
        </section>
      ) : null}

      <section className="border-t border-hairline bg-canvas-deep py-16 lg:py-20">
        <Container size="narrow" className="flex flex-col items-center gap-8 text-center">
          <h2 className="font-serif text-display-3 font-normal text-ink text-balance">
            {site.closing}
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button href="/journal" variant="secondary" size="lg">
              All essays
            </Button>
            <Button href="/join" size="lg">
              Get Involved
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
