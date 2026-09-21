-- Restore Europe Movement administrative schema.
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
-- 'pending'. There is no scheduled deletion, because an unreviewed row is
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
  -- Editorial, not cryptographic: 'pending' is an application an administrator
  -- has entered but not yet vetted, 'confirmed' is a member. Nothing expires or
  -- is deleted on a timer — an unreviewed row is somebody's application.
  status             text NOT NULL DEFAULT 'pending'
                       CHECK (status IN ('pending', 'confirmed')),
  confirmed_at       timestamptz,
  created_at         timestamptz NOT NULL DEFAULT now()
);

-- Added separately from the table so that `npm run db:migrate` upgrades a
-- database created before the public intake collected these two.
ALTER TABLE member ADD COLUMN IF NOT EXISTS region_encrypted  text;
ALTER TABLE member ADD COLUMN IF NOT EXISTS message_encrypted text;

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
