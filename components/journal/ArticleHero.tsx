import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import type { JournalArticle } from "@/lib/content-types";
import { formatDate } from "@/lib/utils";

export function ArticleHero({ article }: { readonly article: JournalArticle }) {
  return (
    <header className="border-b border-hairline bg-canvas-deep">
      <Container className="pt-10 pb-14 lg:pt-14 lg:pb-16">
        <Link
          href={`/journal?category=${encodeURIComponent(article.category)}`}
          className="group inline-flex items-center gap-2 text-[0.875rem] text-muted transition-colors hover:text-burgundy"
        >
          <ArrowLeft
            className="size-3.5 transition-transform group-hover:-translate-x-0.5"
            strokeWidth={1.75}
            aria-hidden="true"
          />
          {article.category}
        </Link>

        <h1 className="mt-8 max-w-4xl font-serif text-display-2 font-normal text-ink">
          {article.title}
        </h1>

        <p className="mt-5 max-w-3xl font-serif text-display-4 leading-snug text-muted">
          {article.subtitle}
        </p>

        <dl className="mt-10 flex flex-wrap items-baseline gap-x-8 gap-y-4 border-t border-hairline pt-6">
          <div className="flex items-baseline gap-2.5">
            <dt className="eyebrow text-faint">By</dt>
            <dd className="text-[0.9375rem] text-ink">{article.author}</dd>
          </div>
          <div className="flex items-baseline gap-2.5">
            <dt className="eyebrow text-faint">Published</dt>
            <dd className="text-[0.9375rem] text-ink">
              <time dateTime={article.date}>{formatDate(article.date)}</time>
            </dd>
          </div>
          <div className="flex items-baseline gap-2.5">
            <dt className="eyebrow text-faint">Reading time</dt>
            <dd className="text-[0.9375rem] text-ink">{article.readingMinutes} minutes</dd>
          </div>
        </dl>
      </Container>

      <figure className="border-t border-hairline">
        <Image
          src={article.hero.src}
          alt={article.hero.alt}
          width={article.hero.width}
          height={article.hero.height}
          unoptimized={article.hero.src.endsWith(".svg")}
          priority
          sizes="100vw"
          // Biased above centre: the subject of each architectural study sits in
          // the upper half, and a centred crop cuts the apex off.
          className="h-[clamp(12rem,30vw,26rem)] w-full object-cover object-[center_30%]"
        />
      </figure>
    </header>
  );
}
