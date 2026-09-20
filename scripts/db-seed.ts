import postgres from "postgres";
import { articles } from "../content/journal/articles";

/**
 * Copies the bundled essays into the database.
 *
 * This is the one-way door in the move from file-based to database-backed
 * essays: `content/journal/articles.ts` remains the fallback the public site
 * uses when no database is configured, and this script transfers those six
 * pieces so the journal looks identical the moment the database takes over.
 *
 * `ON CONFLICT DO NOTHING` — an essay already in the database has been edited
 * there, and the bundled copy is by then the older version. Running this twice
 * must not revert anyone's work.
 *
 * Run with: npm run db:seed
 */
async function main(): Promise<void> {
  const url = process.env.DATABASE_URL;
  if (!url) {
    console.error("DATABASE_URL is not set. Put it in .env.local or export it.");
    process.exit(1);
  }

  const sql = postgres(url, {
    max: 1,
    ssl: process.env.DATABASE_SSL === "disable" ? false : "require",
  });

  try {
    let inserted = 0;

    for (const article of articles) {
      const rows = await sql`
        INSERT INTO journal_article (
          slug, title, subtitle, standfirst, category, published_on, author,
          reading_minutes, hero, featured, status, body, footnotes, citations, related
        ) VALUES (
          ${article.slug},
          ${article.title},
          ${article.subtitle},
          ${article.standfirst},
          ${article.category},
          ${article.date},
          ${article.author},
          ${article.readingMinutes},
          ${sql.json(article.hero as never)},
          ${article.featured ?? false},
          'published',
          ${sql.json(article.body as never)},
          ${sql.json((article.footnotes ?? []) as never)},
          ${sql.json((article.citations ?? []) as never)},
          ${(article.related ?? []) as string[]}
        )
        ON CONFLICT (slug) DO NOTHING
        RETURNING slug
      `;

      if (rows.length > 0) {
        inserted += 1;
        console.log(`  + ${article.slug}`);
      } else {
        console.log(`  · ${article.slug} (already present, left alone)`);
      }
    }

    console.log(`\nSeeded ${inserted} of ${articles.length} essays.`);
  } finally {
    await sql.end();
  }
}

main().catch((error) => {
  console.error("Seed failed:", error);
  process.exit(1);
});
