-- Restore Europa Movement administrative schema.
--
-- Requires PostgreSQL 13 or later for the built-in `gen_random_uuid()`; no
-- extensions are needed, so the script runs without superuser privileges on
-- managed hosts.
--
-- Every statement is idempotent. `npm run db:migrate` may be run repeatedly and
-- against an existing database without destroying data.

-- ---------------------------------------------------------------------------
-- Identity
-- ---------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS admin_user (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  username      text NOT NULL UNIQUE,
  display_name  text NOT NULL,
  created_at    timestamptz NOT NULL DEFAULT now(),
  disabled_at   timestamptz
);

-- One row per enrolled passkey. A user may hold several, which is the supported
-- way to avoid being locked out when a device is lost.
--
-- `public_key` is a public key: it carries no secret and is useless to an
-- attacker who reads this table. That asymmetry is the point of WebAuthn — there
-- is no password hash here to crack offline, and nothing replayable to steal.
CREATE TABLE IF NOT EXISTS admin_credential (
  id            text PRIMARY KEY,                    -- base64url credential ID
  user_id       uuid NOT NULL REFERENCES admin_user(id) ON DELETE CASCADE,
  public_key    bytea NOT NULL,
  -- Signature counter. A value that fails to advance can indicate a cloned
  -- authenticator, so it is persisted and checked on every assertion.
  counter       bigint NOT NULL DEFAULT 0,
  device_type   text NOT NULL,                        -- singleDevice | multiDevice
  backed_up     boolean NOT NULL DEFAULT false,
  transports    text[] NOT NULL DEFAULT '{}',
  label         text NOT NULL,
  created_at    timestamptz NOT NULL DEFAULT now(),
  last_used_at  timestamptz
);

CREATE INDEX IF NOT EXISTS admin_credential_user_idx ON admin_credential (user_id);

-- An invitation to become an administrator.
--
-- The second administrator is the hard one. The first is established by
-- `ADMIN_BOOTSTRAP_TOKEN` into an empty credential table, and that window shuts
-- permanently the moment it is used; after it, the only enrolment path is an
-- already signed-in administrator adding another device to their own account.
-- That left no way to admit a second person at all, short of sharing one
-- passkey — which would make `admin_audit` unable to say which of them read the
-- membership roll.
--
-- `token_hash` is the SHA-256 of the token, never the token, for the same
-- reason as `admin_session.id`: whoever reads this table cannot reconstruct a
-- link that would let them enrol. The row is therefore not a credential.
--
-- The account is created by the inviter, not by the invitee: `user_id`
-- references a row in `admin_user` that already exists and holds no credential
-- yet. Whoever holds the link proves only that they were sent it, and enrols a
-- passkey against an identity somebody already authorised — they cannot choose
-- the username the audit log will show.
CREATE TABLE IF NOT EXISTS admin_invite (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  token_hash  text NOT NULL UNIQUE,
  user_id     uuid NOT NULL REFERENCES admin_user(id) ON DELETE CASCADE,
  -- Nulled rather than cascaded: an invitation is evidence of who admitted
  -- whom, and it should survive the inviter's own account being removed.
  invited_by  uuid REFERENCES admin_user(id) ON DELETE SET NULL,
  created_at  timestamptz NOT NULL DEFAULT now(),
  expires_at  timestamptz NOT NULL,
  consumed_at timestamptz,
  revoked_at  timestamptz
);

CREATE INDEX IF NOT EXISTS admin_invite_user_idx ON admin_invite (user_id);

-- ---------------------------------------------------------------------------
-- Ceremony state
-- ---------------------------------------------------------------------------

-- WebAuthn challenges are held server-side, expire quickly and are consumed
-- exactly once. Keeping them out of the client is what prevents an attacker from
-- choosing the value the authenticator signs.
CREATE TABLE IF NOT EXISTS admin_challenge (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  kind        text NOT NULL CHECK (kind IN ('registration', 'authentication')),
  challenge   text NOT NULL,
  user_id     uuid REFERENCES admin_user(id) ON DELETE CASCADE,
  created_at  timestamptz NOT NULL DEFAULT now(),
  expires_at  timestamptz NOT NULL,
  consumed_at timestamptz
);

CREATE INDEX IF NOT EXISTS admin_challenge_expiry_idx ON admin_challenge (expires_at);

-- ---------------------------------------------------------------------------
-- Sessions
-- ---------------------------------------------------------------------------

-- `id` is the SHA-256 of the bearer token, never the token itself. Whoever reads
-- this table therefore cannot mint a usable cookie from its contents.
CREATE TABLE IF NOT EXISTS admin_session (
  id            text PRIMARY KEY,
  user_id       uuid NOT NULL REFERENCES admin_user(id) ON DELETE CASCADE,
  created_at    timestamptz NOT NULL DEFAULT now(),
  last_seen_at  timestamptz NOT NULL DEFAULT now(),
  expires_at    timestamptz NOT NULL,
  revoked_at    timestamptz,
  -- Keyed hash, not an address. Enough to spot a session moving between
  -- networks; not enough to reconstruct who was reading what.
  ip_hash       text,
  user_agent    text
);

CREATE INDEX IF NOT EXISTS admin_session_user_idx ON admin_session (user_id);
CREATE INDEX IF NOT EXISTS admin_session_expiry_idx ON admin_session (expires_at);

-- Step-up authentication.
--
-- Signing in is not sufficient to read the membership roll: that requires a
-- fresh passkey assertion, which sets this column a few minutes into the
-- future. The consequence is the point — a stolen session cookie yields the
-- journal and aggregate statistics, but not one member's name, because the
-- attacker cannot produce the authenticator.
--
-- Added separately from the table so that `npm run db:migrate` upgrades a
-- database created before members existed.
ALTER TABLE admin_session ADD COLUMN IF NOT EXISTS elevated_until timestamptz;

-- ---------------------------------------------------------------------------
-- Audit
-- ---------------------------------------------------------------------------

-- Append-only by convention: nothing in the application issues UPDATE or DELETE
-- against this table. Failed sign-in attempts are recorded as well as successful
-- ones, because the failures are the interesting ones.
CREATE TABLE IF NOT EXISTS admin_audit (
  id          bigserial PRIMARY KEY,
  at          timestamptz NOT NULL DEFAULT now(),
  actor_id    uuid REFERENCES admin_user(id) ON DELETE SET NULL,
  actor_label text,
  action      text NOT NULL,
  outcome     text NOT NULL CHECK (outcome IN ('success', 'failure')),
  detail      jsonb NOT NULL DEFAULT '{}'::jsonb,
  ip_hash     text
);

CREATE INDEX IF NOT EXISTS admin_audit_at_idx ON admin_audit (at DESC);

-- Fixed-window counters for throttling authentication ceremonies.
CREATE TABLE IF NOT EXISTS admin_rate_limit (
  bucket       text PRIMARY KEY,
  window_start timestamptz NOT NULL DEFAULT now(),
  count        integer NOT NULL DEFAULT 0
);

-- ---------------------------------------------------------------------------
-- Journal
-- ---------------------------------------------------------------------------

-- The structured fields of `JournalArticle` (see lib/content-types.ts) are held
-- as jsonb so the existing `ContentBlock[]` model survives the move to the
-- database unchanged and the renderer needs no alteration.
CREATE TABLE IF NOT EXISTS journal_article (
  slug            text PRIMARY KEY,
  title           text NOT NULL,
  subtitle        text NOT NULL DEFAULT '',
  standfirst      text NOT NULL DEFAULT '',
  category        text NOT NULL,
  published_on    date NOT NULL,
  author          text NOT NULL,
  reading_minutes integer NOT NULL DEFAULT 1,
  hero            jsonb NOT NULL,
  featured        boolean NOT NULL DEFAULT false,
  status          text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  body            jsonb NOT NULL DEFAULT '[]'::jsonb,
  footnotes       jsonb NOT NULL DEFAULT '[]'::jsonb,
  citations       jsonb NOT NULL DEFAULT '[]'::jsonb,
  related         text[] NOT NULL DEFAULT '{}',
  created_at      timestamptz NOT NULL DEFAULT now(),
  updated_at      timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS journal_article_published_idx
  ON journal_article (status, published_on DESC);

-- ---------------------------------------------------------------------------
-- Membership
-- ---------------------------------------------------------------------------

-- The most sensitive table in this database, and the reason several things here
-- look more awkward than they would elsewhere.
--
-- A membership roll for a political movement is, in the wrong hands, a list of
-- people to be reported to an employer, named publicly, or worse. Under GDPR the
-- political opinion it implies is Article 9 special-category data. So the design
-- assumes this table will one day be read by somebody who should not have it,
-- and tries to make that event survivable:
--
--   * `name_encrypted` and `email_encrypted` are AES-256-GCM ciphertext under a
--     key held in the environment and never in this database. A leaked dump,
--     backup or `SELECT *` yields nothing legible. See lib/admin/pii.ts.
--   * Encryption is non-deterministic, so identical names give different
--     ciphertexts and the table cannot be mined for "do these two rows share a
--     surname". This is why neither column is indexed or searchable in SQL.
--   * `email_digest` is a keyed HMAC, not a plain hash. It exists so the intake
--     can reject a duplicate and an erasure request can find its record —
--     without an unkeyed digest that anyone could recompute to test whether a
--     given address appears here. The key is not in this database either.
--   * `country` is the one identifying-ish field left in the clear, and only
--     because sorting and per-country counts are the whole point of the admin
--     view. A country alone identifies nobody; combined with the row's mere
--     existence it says no more than the row already does.
--   * `region_encrypted` and `message_encrypted` are encrypted for the same
--     reason the name is. A region narrows a person far more than a country,
--     and free text is where people disclose their employer, their family and
--     their legal exposure. Neither is ever written to `admin_audit`.
--
-- Two things write here: the public intake at `app/(site)/join/actions.ts`, and
-- an administrator entering an application from `/admin/members`. Both land as
-- 'new'. There is no scheduled deletion, because an unreviewed row is
-- somebody's application rather than a stale token.
CREATE TABLE IF NOT EXISTS member (
  id                 uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name_encrypted     text NOT NULL,
  email_encrypted    text NOT NULL,
  email_digest       text NOT NULL UNIQUE,
  country            text NOT NULL,
  -- Region and message are encrypted for the same reason the name is. A region
  -- is far narrower than a country, and the message is free text — which is
  -- where people mention an employer, a family situation or a legal one. The
  -- admin view aggregates by country only, so neither needs to be readable in
  -- SQL and both are kept where a stolen table cannot read them.
  region_encrypted   text,
  message_encrypted  text,
  -- Both drawn from fixed lists in content/involvement.ts, so neither is free
  -- text and neither narrows a person down on its own.
  involvement_role   text NOT NULL,
  interest_area      text NOT NULL,
  -- Editorial, not cryptographic. Five states, and the order is the path an
  -- application takes through a person's judgement:
  --
  --   'new'       nobody has looked at it yet
  --   'reviewing' somebody is considering it
  --   'awaiting'  written to, and the movement is waiting for a reply
  --   'confirmed' accepted — member or volunteer, per involvement_role
  --   'declined'  considered and turned down
  --
  -- 'awaiting' is distinct from 'reviewing' because they differ in who owes
  -- the next move, which is the only question worth asking of this queue
  -- daily. Merged, the applicant nobody wrote back to is invisible.
  --
  -- 'declined' earns its place by preventing a treadmill. Without it the only
  -- way to clear a rejected application is to erase the row, which also erases
  -- the email digest that would recognise the same person reapplying, so the
  -- same application returns as unread indefinitely. The cost is that the
  -- movement holds a record about somebody it turned down, which /privacy
  -- states plainly rather than leaving to be discovered.
  --
  -- Nothing expires or is deleted on a timer, in any state. An unreviewed row
  -- is somebody's application, not a stale token.
  status             text NOT NULL DEFAULT 'new'
                       CHECK (status IN ('new', 'reviewing', 'awaiting', 'confirmed', 'declined')),
  -- In its current state since. Set on insert and on every transition, so the
  -- queue can be worked oldest-first by how long somebody has been waiting on
  -- a decision rather than by when their application happened to arrive.
  status_changed_at  timestamptz NOT NULL DEFAULT now(),
  confirmed_at       timestamptz,
  -- What an administrator wrote about the application while vetting it.
  --
  -- Encrypted, and not optional about it. This is the field most likely to
  -- record a judgement about a named person — "spoke to her, sounded unsure",
  -- "works for a ministry" — and it is exactly the sentence that must not be
  -- legible in a stolen dump. Never written to admin_audit for the same reason.
  notes_encrypted    text,
  created_at         timestamptz NOT NULL DEFAULT now()
);

-- Added separately from the table so that `npm run db:migrate` upgrades a
-- database created before the public intake collected these two.
ALTER TABLE member ADD COLUMN IF NOT EXISTS region_encrypted  text;
ALTER TABLE member ADD COLUMN IF NOT EXISTS message_encrypted text;
ALTER TABLE member
  ADD COLUMN IF NOT EXISTS status_changed_at timestamptz NOT NULL DEFAULT now();
ALTER TABLE member ADD COLUMN IF NOT EXISTS notes_encrypted text;

-- Widening the two-state toggle into the four-state pipeline above.
--
-- Dropped before the UPDATE rather than after, because the old constraint does
-- not permit the value the UPDATE is about to write. Dropping and recreating is
-- what makes this idempotent: ADD CONSTRAINT has no IF NOT EXISTS.
ALTER TABLE member DROP CONSTRAINT IF EXISTS member_status_check;
UPDATE member SET status = 'new' WHERE status = 'pending';
ALTER TABLE member
  ADD CONSTRAINT member_status_check
  CHECK (status IN ('new', 'reviewing', 'awaiting', 'confirmed', 'declined'));
ALTER TABLE member ALTER COLUMN status SET DEFAULT 'new';

CREATE INDEX IF NOT EXISTS member_country_idx ON member (country);
CREATE INDEX IF NOT EXISTS member_status_idx ON member (status, created_at DESC);

-- ---------------------------------------------------------------------------
-- Correspondence
-- ---------------------------------------------------------------------------
--
-- Enquiries sent through /contact. Less sensitive than `member` — writing to an
-- organisation is not the same as belonging to it — but held to the same rules,
-- because the distinction is thinner than it looks: "I am thinking of joining"
-- in a message body is a political opinion whatever table it sits in.
--
-- Name, address and body are encrypted. `subject` is drawn from the fixed list
-- in content/involvement.ts, so it is not free text and is left readable for
-- sorting. Unlike the roll there is no uniqueness constraint: a person may
-- legitimately write twice.
CREATE TABLE IF NOT EXISTS enquiry (
  id                uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name_encrypted    text NOT NULL,
  email_encrypted   text NOT NULL,
  subject           text NOT NULL,
  message_encrypted text NOT NULL,
  -- Editorial: 'new' until somebody has dealt with it.
  status            text NOT NULL DEFAULT 'new'
                      CHECK (status IN ('new', 'handled')),
  created_at        timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS enquiry_status_idx ON enquiry (status, created_at DESC);

-- ---------------------------------------------------------------------------
-- Newsletter
-- ---------------------------------------------------------------------------
--
-- Addresses that asked to receive the journal by email. Held to the same rules
-- as the roll — encrypted value, keyed digest for matching — because the
-- inference is nearly as strong: subscribing to a political movement's letter
-- is not membership, but it is not nothing either, and the two lists would be
-- equally damaging in the same hands.
--
-- Two things here differ deliberately from `member`, and both follow from the
-- difference between an application and a subscription.
--
-- First, **nothing is delivered until the address confirms.** A membership
-- application is reviewed by a person, so a malicious third-party submission is
-- caught by that review. Nobody reviews a subscription, so the confirmation
-- click is the only thing standing between the form and using this movement to
-- mail somebody who never asked. Until `confirmed_at` is set the row receives
-- nothing but its own confirmation request.
--
-- Second, **an unconfirmed row does expire**, which is the opposite of the rule
-- on `member`. There, an unreviewed row is somebody's application and deleting
-- it on a timer would discard it. Here, an unconfirmed row is the residue of an
-- address that never consented — possibly typed by someone else entirely — so
-- keeping it is the harm rather than the service. `subscriber_confirm_expiry_idx`
-- exists to make that sweep cheap.
CREATE TABLE IF NOT EXISTS subscriber (
  id                     uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email_encrypted        text NOT NULL,
  email_digest           text NOT NULL UNIQUE,

  -- SHA-256 of the token that was mailed out, never the token. Same reasoning
  -- as `admin_session.id`: whoever reads this table cannot reconstruct a link
  -- that would confirm somebody else's address. Cleared once confirmed, so a
  -- captured old message cannot be replayed.
  --
  -- There is deliberately no matching column for unsubscribing. A confirmation
  -- must work once and then expire, which needs stored state; an unsubscribe
  -- link must keep working in an issue sent two years ago, which cannot. So the
  -- unsubscribe tag is derived on demand from the row's id under the key in
  -- `MEMBER_ENCRYPTION_KEY` (see `unsubscribeTag`), giving a link that never
  -- goes stale while leaving nothing in the table that would let whoever steals
  -- it unsubscribe the entire list.
  confirm_token_hash     text,
  confirm_expires_at     timestamptz,
  confirmed_at           timestamptz,

  unsubscribed_at        timestamptz,

  -- Which language edition they subscribed from. Not personal data, and not
  -- currently acted on — the letter is written in English — but it is the only
  -- honest signal of which translation would be worth the effort first.
  locale                 text NOT NULL DEFAULT 'en',

  created_at             timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS subscriber_confirmed_idx
  ON subscriber (confirmed_at) WHERE unsubscribed_at IS NULL;
CREATE INDEX IF NOT EXISTS subscriber_confirm_expiry_idx
  ON subscriber (confirm_expires_at) WHERE confirmed_at IS NULL;

-- One row per essay actually sent out.
--
-- The unique constraint on the slug is the point of the table: it makes sending
-- the same essay to the list twice impossible rather than merely unlikely. An
-- accidental second dispatch is the kind of mistake that costs a movement its
-- subscribers and its sending reputation at the same time.
CREATE TABLE IF NOT EXISTS newsletter_dispatch (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  article_slug text NOT NULL UNIQUE REFERENCES journal_article(slug) ON DELETE CASCADE,
  sent_at      timestamptz NOT NULL DEFAULT now(),
  -- Counts, not addresses. Enough to know a dispatch happened and roughly how
  -- it went; never a record of who received what.
  recipients   integer NOT NULL DEFAULT 0,
  failures     integer NOT NULL DEFAULT 0
);

-- ---------------------------------------------------------------------------
-- Traffic measurement
-- ---------------------------------------------------------------------------
--
-- Three tables that together answer questions Vercel Web Analytics cannot:
-- what the year looked like, who is reading right now, and how long a page
-- holds someone. Each is built so that the answer survives without the
-- question "which person was that?" ever becoming answerable.
--
-- The rule these share with `member`: assume the table will one day be read by
-- someone who should not have it. None of them stores an address, an IP, a
-- user agent, or any value that persists in a reader's browser.

-- Vercel's daily figures, copied out before the plan forgets them.
--
-- The Hobby plan grants access to the latest 31 days and refuses older ranges
-- outright, so a yearly view is not a matter of asking differently: the data
-- ceases to exist. A nightly job writes each day here, and history accumulates
-- from the day that job first runs. Nothing before it can ever be recovered.
--
-- Keyed by day and upserted, so re-running the job is harmless and a day
-- captured while still in progress is corrected by the next night's pass.
--
-- `countries` is a plain object of ISO code to visitor count. It is a snapshot
-- of an already-aggregated public statistic, not a set of records about
-- people, which is why it can sit here in the clear when almost nothing else
-- in this schema can.
CREATE TABLE IF NOT EXISTS traffic_day (
  day         date PRIMARY KEY,
  visitors    integer NOT NULL DEFAULT 0,
  pageviews   integer NOT NULL DEFAULT 0,
  countries   jsonb NOT NULL DEFAULT '{}'::jsonb,
  captured_at timestamptz NOT NULL DEFAULT now()
);

-- Who is on the site in the last minute or so.
--
-- `token` is a random value the browser generates per tab and keeps only in a
-- JavaScript variable. It is never written to a cookie, to localStorage or to
-- sessionStorage, so it does not survive a reload and cannot be used to
-- recognise a returning reader — which is what keeps the site's claim to set
-- nothing on your device true, and keeps the cookie banner unnecessary.
--
-- Rows are swept on every read. The table is therefore a picture of the last
-- ninety seconds rather than a log: there is no history here to subpoena,
-- because yesterday's rows no longer exist.
CREATE TABLE IF NOT EXISTS presence (
  token     text PRIMARY KEY,
  route     text NOT NULL,
  last_seen timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS presence_last_seen_idx ON presence (last_seen);

-- How long pages hold people, summed and never itemised.
--
-- The privacy question here is the whole design. A table of "this person spent
-- four minutes on that page" is a behavioural record whatever it is keyed on,
-- so no such row is ever written: the beacon's reading is added straight into
-- a running total for the day and the route, and the individual figure is
-- discarded in the same statement that consumes it.
--
-- What can be recovered from this table is "the manifesto held readers for an
-- average of three minutes in September". What cannot be recovered, by anyone,
-- including us, is anything about a reader.
CREATE TABLE IF NOT EXISTS page_engagement (
  day      date NOT NULL,
  route    text NOT NULL,
  locale   text NOT NULL,
  -- Whole seconds of foreground time, summed across every reading.
  seconds  bigint NOT NULL DEFAULT 0,
  -- How many readings that sum is made of, so a mean can be taken honestly.
  readings integer NOT NULL DEFAULT 0,
  PRIMARY KEY (day, route, locale)
);

CREATE INDEX IF NOT EXISTS page_engagement_day_idx ON page_engagement (day DESC);
