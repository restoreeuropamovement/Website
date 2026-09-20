import type { JournalCategory } from "@/lib/content-types";

/**
 * The journal's categories, in editorial order.
 *
 * Kept in its own module with no imports beyond a type, because both client
 * components (`CategoryFilter`, the admin editor) and server code need it. It
 * used to live in `lib/journal.ts`; once that module gained a database
 * connection, importing it from a client component would have pulled the
 * Postgres driver into the browser bundle.
 */
export const journalCategories: readonly JournalCategory[] = [
  "Civilization",
  "Economics",
  "Technology",
  "Environment",
  "Architecture",
  "Europe",
  "Demography",
  "Culture",
  "Foreign Policy",
];
