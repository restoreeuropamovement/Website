import Image from "next/image";
import Link from "next/link";
import type { JournalArticle } from "@/lib/content-types";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface ArticleCardProps {
  readonly article: JournalArticle;
  /** `lead` gives the piece an image; `compact` is a text-only row. */
  readonly variant?: "lead" | "compact";
  readonly className?: string;
}

export function ArticleCard({ article, variant = "lead", className }: ArticleCardProps) {
  if (variant === "compact") {
    return (
      <article className={cn("group", className)}>
        <Link href={`/journal/${article.slug}`} className="flex flex-col gap-3 py-6">
          <Meta article={article} />
          <h3 className="font-serif text-display-4 font-normal text-ink transition-colors group-hover:text-burgundy">
            {article.title}
          </h3>
          <p className="text-[0.9375rem] leading-relaxed text-muted">{article.subtitle}</p>
        </Link>
      </article>
    );
  }

  return (
    <article className={cn("group flex flex-col", className)}>
      <Link href={`/journal/${article.slug}`} className="flex flex-1 flex-col gap-5">
        <div className="relative aspect-[16/10] overflow-hidden border border-hairline bg-canvas-deep">
          <Image
            src={article.hero.src}
            alt={article.hero.alt}
            width={article.hero.width}
            height={article.hero.height}
            unoptimized={article.hero.src.endsWith(".svg")}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="size-full object-cover transition-transform duration-700 ease-(--ease-editorial) group-hover:scale-[1.02]"
          />
        </div>

        <div className="flex flex-1 flex-col gap-3">
          <Meta article={article} />
          <h3 className="font-serif text-display-4 font-normal text-ink transition-colors group-hover:text-burgundy">
            {article.title}
          </h3>
          <p className="text-[0.9375rem] leading-relaxed text-muted">{article.standfirst}</p>
        </div>
      </Link>
    </article>
  );
}

function Meta({ article }: { readonly article: JournalArticle }) {
  return (
    <p className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-1 text-muted">
      <span className="text-burgundy">{article.category}</span>
      <span aria-hidden="true" className="size-1 rotate-45 bg-gold/70" />
      <time dateTime={article.date}>{formatDate(article.date)}</time>
      <span aria-hidden="true" className="size-1 rotate-45 bg-gold/70" />
      <span>{article.readingMinutes} min read</span>
    </p>
  );
}
