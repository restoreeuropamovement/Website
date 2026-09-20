import type { ImageSlot, JournalCategory } from "@/lib/content-types";
import {
  parseBody,
  parseCitations,
  parseFootnotes,
  serializeBody,
  serializeCitations,
  serializeFootnotes,
} from "@/lib/admin/journal-syntax";
import { db, jsonb } from "@/lib/db";
import { journalCategories } from "@/lib/journal-categories";

/**
 * Journal records as the admin surface sees them — drafts included.
 *
 * Everything written through this module is validated first. The editor is
 * authenticated, but "the only person who can reach this is trusted" is how
 * stored-XSS and broken pages get shipped: a hero image pointing at
 * `javascript:` or an off-site host would be rendered into every reader's
 * browser, and a malformed body would break the essay for everyone.
 */

export interface AdminArticleSummary {
  readonly slug: string;
  readonly title: string;
  readonly category: string;
  readonly status: "draft" | "published";
  readonly publishedOn: string;
  readonly updatedAt: Date;
  readonly featured: boolean;
}

export interface ArticleDraft {
  slug: string;
  title: string;
  subtitle: string;
  standfirst: string;
  category: string;
  publishedOn: string;
  author: string;
  readingMinutes: number;
  heroSrc: string;
  heroAlt: string;
  heroWidth: number;
  heroHeight: number;
  heroCaption: string;
  heroPlaceholder: boolean;
  featured: boolean;
  status: "draft" | "published";
  bodySource: string;
  footnotesSource: string;
  citationsSource: string;
  related: string;
}

export const emptyDraft: ArticleDraft = {
  slug: "",
  title: "",
  subtitle: "",
  standfirst: "",
  category: "Civilization",
  publishedOn: new Date().toISOString().slice(0, 10),
  author: "",
  readingMinutes: 8,
  heroSrc: "/images/journal/colonnade.svg",
  heroAlt: "",
  heroWidth: 1600,
  heroHeight: 1000,
  heroCaption: "",
  heroPlaceholder: true,
  featured: false,
  status: "draft",
  bodySource: "",
  footnotesSource: "",
  citationsSource: "",
  related: "",
};

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
/**
 * Artwork is served from `/public` and nothing is hotlinked — the same rule
 * `next.config.ts` enforces by trusting no remote image host. Anchoring the
 * pattern at both ends is what rejects `javascript:`, protocol-relative `//`
 * hosts and `../` traversal rather than merely discouraging them.
 */
const IMAGE_PATTERN = /^\/images\/[a-z0-9][a-z0-9/_-]*\.(?:svg|png|jpg|jpeg|webp|avif)$/i;
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

export interface ValidationResult {
  readonly errors: readonly string[];
}

export function validateDraft(draft: ArticleDraft): ValidationResult {
  const errors: string[] = [];

  if (!SLUG_PATTERN.test(draft.slug)) {
    errors.push("Slug must be lowercase words separated by single hyphens.");
  }
  if (draft.slug.length > 120) errors.push("Slug is too long.");
  if (!draft.title.trim()) errors.push("Title is required.");
  if (draft.title.length > 200) errors.push("Title is too long.");
  if (!draft.standfirst.trim()) errors.push("Standfirst is required.");
  if (!journalCategories.includes(draft.category as JournalCategory)) {
    errors.push("Category is not one the journal publishes under.");
  }
  if (!DATE_PATTERN.test(draft.publishedOn)) {
    errors.push("Publication date must be in YYYY-MM-DD form.");
  }
  if (!draft.author.trim()) errors.push("Author is required.");
  if (!Number.isInteger(draft.readingMinutes) || draft.readingMinutes < 1 || draft.readingMinutes > 180) {
    errors.push("Reading time must be a whole number of minutes between 1 and 180.");
  }
  if (!IMAGE_PATTERN.test(draft.heroSrc)) {
    errors.push("Hero image must be a local path under /images/ — remote artwork is not served.");
  }
  if (!draft.heroAlt.trim()) {
    errors.push("Hero alternative text is required; artwork is never decorative by accident.");
  }
  if (!Number.isInteger(draft.heroWidth) || draft.heroWidth < 1) errors.push("Hero width is invalid.");
  if (!Number.isInteger(draft.heroHeight) || draft.heroHeight < 1) errors.push("Hero height is invalid.");
  if (parseBody(draft.bodySource).length === 0) errors.push("The essay body is empty.");

  const related = parseRelated(draft.related);
  if (related.some((slug) => !SLUG_PATTERN.test(slug))) {
    errors.push("Related essays must be a comma-separated list of slugs.");
  }
  if (related.includes(draft.slug)) errors.push("An essay cannot be related to itself.");

  return { errors };
}

function parseRelated(value: string): string[] {
  return value
    .split(",")
    .map((slug) => slug.trim())
    .filter(Boolean);
}

export async function listArticlesForAdmin(): Promise<readonly AdminArticleSummary[]> {
  const rows = await db()<
    {
      slug: string;
      title: string;
      category: string;
      status: "draft" | "published";
      published_on: string;
      updated_at: Date;
      featured: boolean;
    }[]
  >`
    SELECT slug, title, category, status,
           to_char(published_on, 'YYYY-MM-DD') AS published_on,
           updated_at, featured
    FROM journal_article
    ORDER BY published_on DESC, updated_at DESC
  `;

  return rows.map((row) => ({
    slug: row.slug,
    title: row.title,
    category: row.category,
    status: row.status,
    publishedOn: row.published_on,
    updatedAt: row.updated_at,
    featured: row.featured,
  }));
}

export async function loadDraft(slug: string): Promise<ArticleDraft | null> {
  const [row] = await db()<
    {
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
      status: "draft" | "published";
      body: Parameters<typeof serializeBody>[0];
      footnotes: Parameters<typeof serializeFootnotes>[0];
      citations: Parameters<typeof serializeCitations>[0];
      related: string[];
    }[]
  >`
    SELECT slug, title, subtitle, standfirst, category,
           to_char(published_on, 'YYYY-MM-DD') AS published_on,
           author, reading_minutes, hero, featured, status, body, footnotes, citations, related
    FROM journal_article
    WHERE slug = ${slug}
  `;

  if (!row) return null;

  return {
    slug: row.slug,
    title: row.title,
    subtitle: row.subtitle,
    standfirst: row.standfirst,
    category: row.category,
    publishedOn: row.published_on,
    author: row.author,
    readingMinutes: row.reading_minutes,
    heroSrc: row.hero.src,
    heroAlt: row.hero.alt,
    heroWidth: row.hero.width,
    heroHeight: row.hero.height,
    heroCaption: row.hero.caption ?? "",
    heroPlaceholder: row.hero.placeholder ?? false,
    featured: row.featured,
    status: row.status,
    bodySource: serializeBody(row.body),
    footnotesSource: serializeFootnotes(row.footnotes),
    citationsSource: serializeCitations(row.citations),
    related: row.related.join(", "),
  };
}

export async function saveDraft(draft: ArticleDraft, originalSlug?: string): Promise<void> {
  const sql = db();

  const hero: ImageSlot = {
    src: draft.heroSrc,
    alt: draft.heroAlt.trim(),
    width: draft.heroWidth,
    height: draft.heroHeight,
    ...(draft.heroCaption.trim() ? { caption: draft.heroCaption.trim() } : {}),
    ...(draft.heroPlaceholder ? { placeholder: true } : {}),
  };

  const values = {
    title: draft.title.trim(),
    subtitle: draft.subtitle.trim(),
    standfirst: draft.standfirst.trim(),
    category: draft.category,
    published_on: draft.publishedOn,
    author: draft.author.trim(),
    reading_minutes: draft.readingMinutes,
    hero: jsonb(hero),
    featured: draft.featured,
    status: draft.status,
    body: jsonb(parseBody(draft.bodySource)),
    footnotes: jsonb(parseFootnotes(draft.footnotesSource)),
    citations: jsonb(parseCitations(draft.citationsSource)),
    related: parseRelated(draft.related),
  };

  // A rename is an update to a different primary key, so it is handled as an
  // explicit UPDATE rather than an upsert that would leave the old row behind.
  if (originalSlug && originalSlug !== draft.slug) {
    await sql`
      UPDATE journal_article
      SET slug = ${draft.slug}, ${sql(values)}, updated_at = now()
      WHERE slug = ${originalSlug}
    `;
    return;
  }

  await sql`
    INSERT INTO journal_article ${sql({ slug: draft.slug, ...values })}
    ON CONFLICT (slug) DO UPDATE SET ${sql(values)}, updated_at = now()
  `;
}

/**
 * At most one essay is featured. Done in a transaction so the site never has two
 * featured essays, nor none, between the two statements.
 */
export async function setFeatured(slug: string): Promise<void> {
  const sql = db();
  await sql.begin(async (tx) => {
    await tx`UPDATE journal_article SET featured = false WHERE featured = true`;
    await tx`UPDATE journal_article SET featured = true, updated_at = now() WHERE slug = ${slug}`;
  });
}

export async function setStatus(slug: string, status: "draft" | "published"): Promise<void> {
  await db()`
    UPDATE journal_article SET status = ${status}, updated_at = now() WHERE slug = ${slug}
  `;
}

export async function deleteArticle(slug: string): Promise<void> {
  await db()`DELETE FROM journal_article WHERE slug = ${slug}`;
}
