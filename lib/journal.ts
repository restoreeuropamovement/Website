import { articles as bundledArticles } from "@/content/journal/articles";
import { db, hasDatabase } from "@/lib/db";
import { journalCategories } from "@/lib/journal-categories";
import type {
  Citation,
  ContentBlock,
  Footnote,
  ImageSlot,
  JournalArticle,
  JournalCategory,
} from "@/lib/content-types";

/**
 * Public read access to the journal.
 *
 * The journal has two possible sources, and which one is in use depends only on
 * whether `DATABASE_URL` is set:
 *
 *   **No database** — essays come from `content/journal/articles.ts`, exactly as
 *   they did before the admin surface existed. The site therefore builds, ships
 *   and serves with no infrastructure whatsoever, which keeps `npm run check`
 *   honest on a laptop and keeps the public site independent of the editing
 *   tools.
 *
 *   **Database configured** — it becomes the source of truth and only rows with
 *   `status = 'published'` are ever returned. Drafts are invisible here; they
 *   exist solely inside `/admin`.
 *
 * A configured-but-failing database is deliberately *not* caught and papered
 * over with the bundled copy. Silently swapping sources would make an
 * unpublished essay reappear during an outage, and would hide the fault.
 */

/**
 * Re-exported for server callers. The list itself lives in a module free of any
 * database import, so client components can read it without dragging the driver
 * into the browser bundle.
 */
export { journalCategories };

const byDateDescending = (a: JournalArticle, b: JournalArticle) => b.date.localeCompare(a.date);

export interface JournalRow {
  slug: string;
  title: string;
  subtitle: string;
  standfirst: string;
  category: string;
  published_on: string;
  author: string;
  reading_minutes: number;
  hero: ImageSlot;
  featured: boolean;
  body: ContentBlock[];
  footnotes: Footnote[];
  citations: Citation[];
  related: string[];
}

export function rowToArticle(row: JournalRow): JournalArticle {
  return {
    slug: row.slug,
    title: row.title,
    subtitle: row.subtitle,
    standfirst: row.standfirst,
    category: row.category as JournalCategory,
    date: row.published_on,
    author: row.author,
    readingMinutes: row.reading_minutes,
    hero: row.hero,
    featured: row.featured,
    body: row.body,
    footnotes: row.footnotes,
    citations: row.citations,
    related: row.related,
  };
}

/**
 * The column list every read shares. `published_on` is rendered as text in SQL
 * rather than relying on the driver's date handling, so the value that reaches
 * the renderer is the same `YYYY-MM-DD` string the bundled content module uses
 * and no timezone can shift a publication date by a day.
 */
const articleColumns = `
  slug, title, subtitle, standfirst, category,
  to_char(published_on, 'YYYY-MM-DD') AS published_on,
  author, reading_minutes, hero, featured, body, footnotes, citations, related
`;

export async function getArticles(): Promise<readonly JournalArticle[]> {
  if (!hasDatabase()) return [...bundledArticles].sort(byDateDescending);

  const sql = db();
  const rows = await sql<JournalRow[]>`
    SELECT ${sql.unsafe(articleColumns)}
    FROM journal_article
    WHERE status = 'published'
    ORDER BY published_on DESC
  `;
  return rows.map(rowToArticle);
}

export async function getArticle(slug: string): Promise<JournalArticle | undefined> {
  if (!hasDatabase()) return bundledArticles.find((article) => article.slug === slug);

  const sql = db();
  const [row] = await sql<JournalRow[]>`
    SELECT ${sql.unsafe(articleColumns)}
    FROM journal_article
    WHERE slug = ${slug} AND status = 'published'
  `;
  return row ? rowToArticle(row) : undefined;
}

export async function getFeaturedArticle(): Promise<JournalArticle | undefined> {
  const sorted = await getArticles();
  return sorted.find((article) => article.featured) ?? sorted[0];
}

export async function getRelatedArticles(
  article: JournalArticle,
): Promise<readonly JournalArticle[]> {
  const all = await getArticles();
  const bySlug = new Map(all.map((candidate) => [candidate.slug, candidate]));

  const explicit = (article.related ?? [])
    .map((slug) => bySlug.get(slug))
    .filter((related): related is JournalArticle => related !== undefined);

  if (explicit.length >= 2) return explicit.slice(0, 3);

  // Fall back to the most recent pieces in the same category.
  const sameCategory = all.filter(
    (candidate) =>
      candidate.slug !== article.slug &&
      candidate.category === article.category &&
      !explicit.some((related) => related.slug === candidate.slug),
  );

  return [...explicit, ...sameCategory].slice(0, 3);
}

/** Categories that currently have at least one published essay. */
export async function getActiveCategories(): Promise<readonly JournalCategory[]> {
  const all = await getArticles();
  const present = new Set(all.map((article) => article.category));
  return journalCategories.filter((category) => present.has(category));
}
