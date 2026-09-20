import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArticleCard } from "@/components/journal/ArticleCard";
import { CategoryFilter } from "@/components/journal/CategoryFilter";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PLACEHOLDER_NOTICE } from "@/content/journal/articles";
import type { JournalCategory } from "@/lib/content-types";
import { getActiveCategories, getArticles, getFeaturedArticle, journalCategories } from "@/lib/journal";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  /* The layout template appends "· Restore Europe", so naming the movement here
   * too would read "Restore Europe Journal · Restore Europe". */
  title: "Journal",
  description:
    "Essays and analysis from Restore Europe Movement on civilization, economics, technology, environment, architecture, Europe, demography, culture and foreign policy.",
  alternates: { canonical: "/journal" },
};

function parseCategory(value: string | string[] | undefined): JournalCategory | undefined {
  const candidate = Array.isArray(value) ? value[0] : value;
  return journalCategories.find((category) => category === candidate);
}

export default async function JournalPage(props: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const searchParams = await props.searchParams;
  const active = parseCategory(searchParams.category);

  const [all, featured, available] = await Promise.all([
    getArticles(),
    getFeaturedArticle(),
    getActiveCategories(),
  ]);

  const filtered = active ? all.filter((article) => article.category === active) : all;
  // The featured essay already appears above the fold in the unfiltered view.
  const secondary = active ? filtered : filtered.filter((article) => article.slug !== featured?.slug);

  return (
    <>
      <header className="border-b border-hairline bg-canvas-deep pt-16 pb-14 lg:pt-24 lg:pb-16">
        <Container>
          <p className="eyebrow mb-6 flex items-center gap-3 text-burgundy">
            <span aria-hidden="true" className="h-px w-6 bg-burgundy/40" />
            Publication
          </p>
          <h1 className="font-serif text-display-1 font-normal text-ink">Restore Europe Journal</h1>
          <p className="mt-8 max-w-(--container-reading) text-lede text-muted">
            Essays, analysis and argument from the movement: the reasoning behind our positions,
            set out at a length that allows it to be examined.
          </p>
          <p className="mt-6 max-w-(--container-reading) border-l-2 border-gold/65 py-1 pl-5 text-[0.9375rem] leading-relaxed text-muted">
            The journal is being established. The essays currently published are placeholders that
            demonstrate the format; commissioned work will replace them.
          </p>
        </Container>
      </header>

      {featured && !active ? (
        <section aria-labelledby="featured-heading" className="border-b border-hairline">
          <Container className="py-14 lg:py-20">
            <h2 id="featured-heading" className="eyebrow mb-8 text-muted">
              Featured
            </h2>

            <Reveal>
              <article className="group grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
                <Link
                  href={`/journal/${featured.slug}`}
                  className="relative aspect-[16/10] overflow-hidden border border-hairline bg-canvas-deep lg:aspect-[4/3]"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <Image
                    src={featured.hero.src}
                    alt=""
                    width={featured.hero.width}
                    height={featured.hero.height}
                    unoptimized={featured.hero.src.endsWith(".svg")}
                    priority
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="size-full object-cover transition-transform duration-700 ease-(--ease-editorial) group-hover:scale-[1.015]"
                  />
                </Link>

                <div className="flex flex-col gap-5">
                  <p className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-1 text-muted">
                    <span className="text-burgundy">{featured.category}</span>
                    <span aria-hidden="true" className="size-1 rotate-45 bg-gold/70" />
                    <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                    <span aria-hidden="true" className="size-1 rotate-45 bg-gold/70" />
                    <span>{featured.readingMinutes} min read</span>
                  </p>

                  <h3 className="font-serif text-display-2 font-normal text-ink">
                    <Link
                      href={`/journal/${featured.slug}`}
                      className="transition-colors group-hover:text-burgundy"
                    >
                      {featured.title}
                    </Link>
                  </h3>

                  <p className="font-serif text-display-4 leading-snug text-muted">
                    {featured.subtitle}
                  </p>
                  <p className="max-w-xl text-reading text-body/92">{featured.standfirst}</p>
                </div>
              </article>
            </Reveal>
          </Container>
        </section>
      ) : null}

      <Container className="py-14 lg:py-20">
        <CategoryFilter active={active} available={available} />

        <h2 className="sr-only">{active ? `Essays in ${active}` : "All essays"}</h2>

        {secondary.length > 0 ? (
          <Reveal>
            <ul className="mt-12 grid gap-x-10 gap-y-14 border-t border-hairline pt-12 sm:grid-cols-2 lg:grid-cols-3">
              {secondary.map((article) => (
                <li key={article.slug} className="flex">
                  <ArticleCard article={article} className="flex-1" />
                </li>
              ))}
            </ul>
          </Reveal>
        ) : (
          <p className="mt-12 border-t border-hairline pt-12 text-reading text-muted">
            No essays have been published in this category yet.{" "}
            <Link href="/journal" className="underline underline-offset-4 hover:text-burgundy">
              View all essays
            </Link>
            .
          </p>
        )}

        <p className="mt-16 border-t border-hairline pt-8 text-micro leading-relaxed text-faint">
          {PLACEHOLDER_NOTICE}
        </p>
      </Container>
    </>
  );
}
