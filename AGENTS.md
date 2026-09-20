<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Restore Europe Movement

## Project conventions

- Routes live in `app/`, split into three route groups. `app/(site)` is the public site and owns the
  navbar, footer and analytics; `app/admin/(entry)` holds the unauthenticated pages (sign-in,
  first-passkey enrolment); `app/admin/(dashboard)` holds everything behind the session gate. Route
  groups do not appear in URLs — they exist so the admin surface inherits none of the public chrome.
  `app/layout.tsx` is a bare document shell; put nothing page-specific in it.
- Presentation components live in `components/`, grouped by domain.
- **All long-form political text lives in `content/`**, never inside a component. Components read typed
  content modules and render them. If you are asked to change wording, edit `content/`.
- Content is expressed as typed `ContentBlock[]` (see `lib/content-types.ts`) and rendered by
  `components/content/ContentBlocks.tsx`. Inline `**bold**`, `*italic*` and `[^1]` footnote markers are
  supported by `lib/inline.tsx`.
- Server Components by default. Add `"use client"` only for genuine interaction (nav, forms, scroll
  progress, filters, reveal-on-scroll).
- Design tokens are defined once in `styles/globals.css` under `@theme`. Use the semantic Tailwind
  classes (`bg-canvas`, `text-muted`, `border-hairline`, …) rather than raw hex values.
- `cn()` concatenates; it does **not** resolve conflicting Tailwind utilities. Never emit two
  utilities for the same property — pick one with a ternary, or wrap the element. In particular,
  do not pass `hidden` to a component whose base classes already set `display`.
- Animation must respect `prefers-reduced-motion`; use `components/ui/Reveal.tsx` rather than ad-hoc
  motion wrappers. Reduced motion and no-script are handled by stylesheet rules on `[data-reveal]`,
  not by branching in the component — a branch would break hydration.
- Source Serif 4 is loaded upright only. Authoring italic copy means re-enabling the italic face in
  `app/layout.tsx`, which costs about a tenth of the page weight.

## The administrative surface

`/admin` is real, not a mock. It is unlisted, `noindex`, excluded from the sitemap, and reachable
only with an enrolled passkey. Read `README.md` → "Administrative surface" before changing it.

- **Never weaken the env contract.** `lib/admin/env.ts` gives no variable a default and throws when
  one is missing. A secret with a fallback is a published credential. The checks are lazy on
  purpose: the public site must build and serve with none of them set.
- **Two policies, deliberately.** Public pages get the static CSP in `next.config.ts`
  (`'unsafe-inline'`, so 138 pages stay prerendered); admin pages get a per-request nonce with
  `strict-dynamic` from `proxy.ts`. Do not merge them.
- **Gating is layered.** `proxy.ts` does a cheap stateless cookie check and sets headers;
  `app/admin/(dashboard)/layout.tsx` performs the authoritative database check. A proxy alone is not
  authorisation — never rely on it as the only gate.
- Mutations are Server Actions that call `requireSession()` first, then write an `admin_audit` row.
  Keep both; an unaudited mutation is a gap.
- Journal essays are edited in the line-based notation defined by `lib/admin/journal-syntax.ts`,
  which round-trips `ContentBlock[]` losslessly. Extending `ContentBlock` means extending both the
  parser and the serialiser, or saving will silently drop the new block type.
- In Next.js 16 the old `middleware.ts` is `proxy.ts`. Do not reintroduce the former.

## The membership roll

`member` is the most sensitive table in the project. A membership list for a political movement is,
in the wrong hands, a list of people to be reported to an employer or named publicly, and GDPR
treats the political opinion it implies as Article 9 special-category data. The design assumes the
table will one day be read by someone who should not have it.

- **Names and email addresses are encrypted** by `lib/admin/pii.ts` (AES-256-GCM, key from
  `MEMBER_ENCRYPTION_KEY`, never in the database). `country`, `involvement_role` and `interest_area`
  are in the clear because the admin view sorts and counts on them and none identifies a person.
- **Encryption is non-deterministic on purpose**, so those columns cannot be indexed or searched in
  SQL. Search decrypts candidates and filters in memory — see `searchMembersRevealed`. Do not
  "optimise" this into a deterministic index: that would let whoever steals the table test who is
  in it.
- **Reading requires `requireElevatedSession()`**, not merely `requireSession()`. Being signed in
  shows counts by country; names need a passkey assertion from the last few minutes. A stolen
  session cookie must never be enough to copy the roll.
- **Reads are audited, not just writes** (`member.reveal`). For this table disclosure is the harm,
  so the act of looking is the event worth recording.
- **Never write personal data into `admin_audit`.** It is not encrypted. Search terms are stored as
  keyed digests via `queryDigest`, so "was this person looked up?" stays answerable while the log
  never accumulates names. The same applies to erasure: log the id, never the address.
- **There is no export function, deliberately.** Do not add one. A downloadable file is the form in
  which such lists escape, and it is the failure this whole design exists to prevent.
- **Nothing is a membership until the address confirms it.** Anyone can type a third party's email
  into a public form; enrolling an opponent to damage them is a real tactic. Unconfirmed rows are
  pruned automatically.
- The public intake is the one server action on the public site. Its reply must not vary with what
  is already stored, or it becomes an oracle for testing whether a named person is a member.

## Commands

```bash
npm run dev        # development server
npm run check      # lint + typecheck + production build
npm run artwork    # regenerate the placeholder SVG artwork in public/images
npm run db:migrate # apply db/schema.sql (idempotent)
npm run db:seed    # copy the bundled essays into the database (idempotent)
```

## Editing content

| What                       | Where                            |
| -------------------------- | -------------------------------- |
| Manifesto                  | `content/manifesto.ts`           |
| Homepage copy              | `content/home.ts`                |
| Principles                 | `content/principles.ts`          |
| Vision                     | `content/vision.ts`              |
| About                      | `content/about.ts`               |
| National wings             | `content/wings.ts`               |
| Journal essays             | `content/journal/articles.ts`    |
| Legal pages                | `content/legal.ts`               |
| Navigation, site metadata  | `lib/site.ts`                    |
| Policy catalogue           | `content/policy.ts`              |

Journal essays are the one exception to "content lives in `content/`". Once `DATABASE_URL` is set,
`lib/journal.ts` reads them from Postgres and `content/journal/articles.ts` becomes the seed for
`npm run db:seed` and the fallback for deployments with no database. Edit published essays through
`/admin/journal`, not the module.

## Non-negotiables

- No fabricated facts, statistics, quotations, names, addresses or email addresses.
- `/contact` is frontend-only and must say so. `/join` is genuinely connected and says that instead;
  `/admin` is a genuine backend, and its analytics figures come from the Vercel API or are reported
  as unavailable — never estimated, never placeheld with plausible numbers.
- **Changing what the site collects means editing `/privacy` first**, not afterwards. The privacy
  note makes specific promises about encryption, step-up authentication, audit logging, retention
  and the absence of any export. Weakening any of those without rewriting it turns a design document
  into a false statement to the people who trusted it.
- Criticism is directed at systems, institutions and ideas — never at groups of people.
