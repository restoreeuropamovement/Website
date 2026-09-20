import Link from "next/link";
import { listArticlesForAdmin } from "@/lib/admin/journal";
import { formatDate } from "@/lib/utils";
import { featureArticleAction, setStatusAction } from "./actions";

export default async function AdminJournalIndex() {
  const articles = await listArticlesForAdmin();

  return (
    <div className="flex flex-col gap-10">
      <header className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow mb-4 text-burgundy">Journal</p>
          <h1 className="font-serif text-display-2 font-normal text-ink">Essays</h1>
          <p className="mt-3 text-[0.9375rem] text-muted">
            {articles.length} {articles.length === 1 ? "essay" : "essays"}. Drafts are invisible to
            readers until published.
          </p>
        </div>

        <Link
          href="/admin/journal/new"
          className="border border-gold/70 bg-gold/10 px-5 py-2.5 text-[0.9375rem] text-ink transition-colors hover:bg-gold/20"
        >
          New essay
        </Link>
      </header>

      {articles.length === 0 ? (
        <p className="border-l-2 border-gold/65 py-1 pl-5 text-reading text-muted">
          The database has no essays yet. Run <code className="text-ink">npm run db:seed</code> to
          copy the six existing essays across from{" "}
          <code className="text-ink">content/journal/articles.ts</code>, or write a new one.
        </p>
      ) : (
        <ul className="flex flex-col border-t border-hairline">
          {articles.map((article) => (
            <li
              key={article.slug}
              className="flex flex-wrap items-baseline gap-x-6 gap-y-3 border-b border-hairline py-5"
            >
              <div className="min-w-0 flex-1">
                <p className="eyebrow mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-muted">
                  <span
                    className={
                      article.status === "published" ? "text-burgundy" : "text-gold"
                    }
                  >
                    {article.status === "published" ? "Published" : "Draft"}
                  </span>
                  <span aria-hidden="true" className="size-1 rotate-45 bg-gold/70" />
                  <span>{article.category}</span>
                  <span aria-hidden="true" className="size-1 rotate-45 bg-gold/70" />
                  <time dateTime={article.publishedOn}>{formatDate(article.publishedOn)}</time>
                  {article.featured ? (
                    <>
                      <span aria-hidden="true" className="size-1 rotate-45 bg-gold/70" />
                      <span className="text-gold">Featured</span>
                    </>
                  ) : null}
                </p>

                <h2 className="font-serif text-display-4 leading-snug text-ink">
                  <Link
                    href={`/admin/journal/${article.slug}`}
                    className="transition-colors hover:text-burgundy"
                  >
                    {article.title}
                  </Link>
                </h2>
                <p className="mt-1 text-micro text-faint">/journal/{article.slug}</p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {article.status === "published" && !article.featured ? (
                  <form action={featureArticleAction}>
                    <input type="hidden" name="slug" value={article.slug} />
                    <button
                      type="submit"
                      className="border border-rule px-3 py-1.5 text-micro text-muted transition-colors hover:border-gold hover:text-gold"
                    >
                      Feature
                    </button>
                  </form>
                ) : null}

                <form action={setStatusAction}>
                  <input type="hidden" name="slug" value={article.slug} />
                  <input
                    type="hidden"
                    name="status"
                    value={article.status === "published" ? "draft" : "published"}
                  />
                  <button
                    type="submit"
                    className="border border-rule px-3 py-1.5 text-micro text-muted transition-colors hover:border-burgundy hover:text-burgundy"
                  >
                    {article.status === "published" ? "Unpublish" : "Publish"}
                  </button>
                </form>

                {article.status === "published" ? (
                  <Link
                    href={`/journal/${article.slug}`}
                    className="border border-rule px-3 py-1.5 text-micro text-muted transition-colors hover:border-burgundy hover:text-burgundy"
                  >
                    View
                  </Link>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
