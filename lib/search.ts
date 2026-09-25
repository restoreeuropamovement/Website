/**
 * A small ranked text search, written for a catalogue of a hundred documents
 * in six languages.
 *
 * The version this replaces lowercased the query, split it on whitespace and
 * required every term to appear as a literal substring. On a catalogue of
 * ninety-eight positions that is mostly a machine for returning nothing: one
 * transposed letter, one plural, or one word the catalogue happens to express
 * differently, and a reader concludes the movement has no position on their
 * issue. Silence is the worst answer a catalogue of positions can give.
 *
 * Nothing here knows what a policy is. It takes weighted fields of text and
 * returns scored ids, so the same code serves an edition in any language.
 *
 * Four properties are deliberate:
 *
 *   - **No dependency and no per-language rule tables.** Everything is
 *     character-level, which is what lets Polish and German be handled as
 *     well as English without six stemmers to maintain.
 *   - **Run on the server.** Searching is a GET form and the result is a
 *     linkable page; ranking a hundred documents costs well under a
 *     millisecond, so there is no reason for any of this to reach a browser.
 *   - **Tiers dominate fields.** An exact hit anywhere always outranks a
 *     fuzzy hit in a title. A reader who spelled the word correctly is not
 *     shown a guess above their own word.
 *   - **Terms are conjunctive.** Adding a word narrows the result, as it did
 *     before. Widening happens along the other axis — spelling, inflection
 *     and vocabulary — not by ignoring half of what was typed.
 */

/* ------------------------------------------------------------------ */
/* Folding                                                            */
/* ------------------------------------------------------------------ */

/**
 * Letters that survive Unicode decomposition as themselves.
 *
 * `NFD` splits an accent off its letter, so `é` folds to `e` and `ą` to `a`
 * for nothing. These do not decompose: `ł` is its own letter, and `ß` and the
 * two French ligatures are single code points standing for two letters. Six
 * entries is the whole table for six languages — the reason to fold at all is
 * that a reader on a foreign keyboard types `lodz`, `strasse` and `coeur`.
 */
const INDIVISIBLE: Readonly<Record<string, string>> = {
  ß: "ss",
  ł: "l",
  œ: "oe",
  æ: "ae",
  đ: "d",
  ø: "o",
};

/**
 * The form the index and the query are both compared in.
 *
 * Case folding is locale-independent on purpose. `toLocaleLowerCase` differs
 * from `toLowerCase` only for Turkish and Lithuanian, neither of which the
 * site is published in, and an index folded one way and a query folded
 * another is a class of bug with no symptom other than silence.
 */
export function fold(value: string): string {
  return value
    .toLowerCase()
    .replace(/[ßłœæđø]/g, (letter) => INDIVISIBLE[letter] ?? letter)
    .normalize("NFD")
    .replace(/\p{M}+/gu, "");
}

/** Words, by the Unicode definition of a letter rather than the ASCII one. */
export function tokenize(value: string): string[] {
  return fold(value)
    .split(/[^\p{L}\p{N}]+/u)
    .filter((token) => token.length > 0);
}

/**
 * How many leading characters stand for the word.
 *
 * This is the whole of the morphology, and it is deliberately not a stemmer.
 * Every language the site is published in inflects at the end of the word:
 * `taxation`/`taxes`, `Abtreibung`/`Abtreibungen`, `podatki`/`podatku`/
 * `podatkowy`, `aborcja`/`aborcji`. Truncating to a fixed prefix collapses
 * those together without knowing anything about any of them, which is why
 * prefix truncation holds up in Polish — where a suffix table would need to
 * cover seven cases in three genders — as well as it does in English.
 *
 * Six is the usual figure for this on European languages: long enough that
 * `europe` and `euthanasia` stay apart, short enough that a Polish noun keeps
 * its stem under declension.
 */
const STEM_LENGTH = 6;

export function stem(token: string): string {
  return token.length > STEM_LENGTH ? token.slice(0, STEM_LENGTH) : token;
}

/**
 * Shortest query token that may match on a prefix.
 *
 * Two characters would make `eu` a prefix of a quarter of the catalogue. At
 * three, `tax` reaches `taxation` and `war` reaches `warfare`, and the tier
 * system keeps both below anything spelled out in full.
 */
const MIN_PREFIX = 3;

/**
 * How much longer than the word in the text the reader's word may be.
 *
 * Asymmetric on purpose. A reader typing *less* than the text holds is
 * ordinary — `tax` for `taxation` — and is allowed to run as far as it likes.
 * A reader typing *more* is a suffix, not a different word, and three
 * characters is about the length of one: `Abtreibungen` reaches
 * `Abtreibung`, while `Nationaldienst` does not reach `Nation`. Without the
 * limit, German and Polish compounding turns every long word into a match
 * for the common short word it happens to begin with.
 */
const MAX_SUFFIX = 3;

/**
 * How much misspelling a word of a given length is allowed.
 *
 * Scaled, because a fixed budget of one is useless on `subsidiarity` and
 * catastrophic on `pill`, which is one edit from `bill`, `will`, `till`,
 * `pull` and `pile`. Under five characters nothing is forgiven at all.
 */
function editBudget(length: number): number {
  if (length < 5) return 0;
  if (length < 8) return 1;
  return 2;
}

/**
 * Optimal string alignment distance, bounded.
 *
 * Damerau's transposition rather than plain Levenshtein because the typos
 * this exists for are overwhelmingly transpositions — `abortoin`,
 * `euthanaisa` — and counting those as one edit rather than two is what lets
 * the budget above stay tight enough to be safe.
 *
 * Returns as soon as the budget is exceeded, so the cost on a corpus this
 * size is dominated by the length check above the loop.
 */
export function withinEditDistance(a: string, b: string, budget: number): boolean {
  if (budget <= 0) return a === b;
  if (Math.abs(a.length - b.length) > budget) return false;
  if (a === b) return true;

  let twoBack: number[] = [];
  let oneBack: number[] = Array.from({ length: b.length + 1 }, (_, j) => j);

  for (let i = 1; i <= a.length; i += 1) {
    const current: number[] = new Array<number>(b.length + 1);
    current[0] = i;
    let best = i;

    for (let j = 1; j <= b.length; j += 1) {
      const substitution = a[i - 1] === b[j - 1] ? 0 : 1;
      let value = Math.min(
        (current[j - 1] ?? 0) + 1,
        (oneBack[j] ?? 0) + 1,
        (oneBack[j - 1] ?? 0) + substitution,
      );
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        value = Math.min(value, (twoBack[j - 2] ?? 0) + 1);
      }
      current[j] = value;
      if (value < best) best = value;
    }

    if (best > budget) return false;
    twoBack = oneBack;
    oneBack = current;
  }

  return (oneBack[b.length] ?? Infinity) <= budget;
}

/* ------------------------------------------------------------------ */
/* Tiers                                                              */
/* ------------------------------------------------------------------ */

/**
 * How a query token reached a document, best first.
 *
 * The gaps between the bases are wider than any field weight can be, so the
 * tier decides the order and the field only breaks ties inside it. That is
 * the rule "an exact match always outranks a fuzzy one", expressed as
 * arithmetic rather than as a sort comparator nobody can read.
 */
export const TIERS = {
  /** The reader's word, as written in the text. */
  exact: 4,
  /** The same word under inflection, or the start of a longer one. */
  stem: 3,
  /** Another word for the same thing, from the synonym map. */
  synonym: 2,
  /** The word the reader probably meant. */
  fuzzy: 1,
} as const;

export type Tier = (typeof TIERS)[keyof typeof TIERS];

const TIER_BASE: Record<Tier, number> = {
  4: 1000,
  3: 100,
  2: 40,
  1: 10,
};

/** How a query token relates to one token that is actually in the corpus. */
function compareTokens(query: string, indexed: string): Tier | undefined {
  if (query === indexed) return TIERS.exact;

  if (query.length >= MIN_PREFIX && indexed.startsWith(query)) return TIERS.stem;
  if (
    indexed.length >= 4 &&
    query.length - indexed.length <= MAX_SUFFIX &&
    query.startsWith(indexed)
  ) {
    return TIERS.stem;
  }
  if (Math.abs(query.length - indexed.length) <= MAX_SUFFIX && stem(query) === stem(indexed)) {
    return TIERS.stem;
  }

  /*
   * Nothing is guessed about the first letter. Typing it wrong is far rarer
   * than typing any other letter wrong, and requiring it cuts the false
   * matches of a one-edit budget on a five-letter word from dozens to a
   * handful: `leben` stops reaching `geben`, `abortoin` still reaches
   * `abortion`.
   */
  if (query[0] !== indexed[0]) return undefined;

  if (withinEditDistance(query, indexed, editBudget(query.length))) return TIERS.fuzzy;
  /*
   * A misspelling of an inflected word is two failures at once — `aborcaj`
   * for `aborcji` is a wrong letter *and* a case ending — and neither check
   * above catches it alone. Comparing the truncated stems catches the pair,
   * and is restricted to long words because on short ones the stem is the
   * word and the check above has already run.
   */
  if (
    query.length > STEM_LENGTH &&
    /*
     * Only what an ending could account for. Forgiving the tail entirely
     * would make every word truncating to `transg`, `transh` or `transp` one
     * edit from every other, and `transgender` — a word the catalogue does
     * not use — would be answered with `transhumanism`, `transfer` and
     * `transition`. An inflection is a syllable, not five letters.
     */
    query.length - STEM_LENGTH <= MAX_SUFFIX &&
    indexed.length - STEM_LENGTH <= MAX_SUFFIX
  ) {
    const queryStem = stem(query);
    if (withinEditDistance(queryStem, stem(indexed), editBudget(queryStem.length))) {
      return TIERS.fuzzy;
    }
  }

  return undefined;
}

/* ------------------------------------------------------------------ */
/* The index                                                          */
/* ------------------------------------------------------------------ */

/** A run of text and what a hit in it is worth. */
export interface SearchField {
  readonly weight: number;
  readonly text: string;
}

export interface SearchDocument {
  readonly id: string;
  readonly fields: readonly SearchField[];
}

/**
 * A field reduced to its tokens, space-separated and space-delimited.
 *
 * Kept beside the postings so that a phrase can be required to be a phrase.
 * `Recht auf Leben` as three independent tokens matches most of a German
 * catalogue, because every entry contains `Recht` and `auf` somewhere;
 * as a run of adjacent tokens it matches the entries that say it.
 */
interface IndexedField {
  readonly weight: number;
  readonly run: string;
}

export interface SearchIndex {
  /** Token to the documents holding it, each with its best field weight. */
  readonly postings: ReadonlyMap<string, ReadonlyMap<string, number>>;
  /** Every distinct token, scanned once per query token for near spellings. */
  readonly vocabulary: readonly string[];
  /** Adjacent-token text per document, for phrase lookups. */
  readonly runs: ReadonlyMap<string, readonly IndexedField[]>;
  /**
   * Document ids in the order they were indexed. Results are collected in
   * this order so that equal scores come back in the caller's own sequence —
   * for a catalogue, the editorial one — rather than in hash order.
   */
  readonly order: readonly string[];
}

export function buildIndex(documents: readonly SearchDocument[]): SearchIndex {
  const postings = new Map<string, Map<string, number>>();
  const runs = new Map<string, IndexedField[]>();

  for (const document of documents) {
    const indexed: IndexedField[] = [];
    for (const field of document.fields) {
      const tokens = tokenize(field.text);
      if (tokens.length === 0) continue;
      indexed.push({ weight: field.weight, run: ` ${tokens.join(" ")} ` });

      for (const token of tokens) {
        let holders = postings.get(token);
        if (holders === undefined) {
          holders = new Map<string, number>();
          postings.set(token, holders);
        }
        const existing = holders.get(document.id);
        if (existing === undefined || field.weight > existing) {
          holders.set(document.id, field.weight);
        }
      }
    }
    runs.set(document.id, indexed);
  }

  return {
    postings,
    vocabulary: [...postings.keys()],
    runs,
    order: documents.map((document) => document.id),
  };
}

/* ------------------------------------------------------------------ */
/* Synonyms                                                           */
/* ------------------------------------------------------------------ */

/**
 * Phrases the reader might type, grouped by what they mean.
 *
 * A group is a set of words for one thing, not a rule pointing at a document.
 * Typing any member widens the search to the others, and whichever of them
 * the catalogue actually uses is what finds the entry. Nothing here asserts
 * that a word belongs to a position; the text does that.
 */
export interface SynonymTable {
  /** Folded phrase to the groups it belongs to. */
  readonly groups: ReadonlyMap<string, readonly (readonly string[][])[]>;
  /** Longest phrase in the table, in tokens. */
  readonly span: number;
}

export function buildSynonymTable(groups: readonly (readonly string[])[]): SynonymTable {
  const index = new Map<string, (readonly string[][])[]>();
  let span = 1;

  for (const group of groups) {
    const tokenized = group.map((phrase) => tokenize(phrase)).filter((tokens) => tokens.length > 0);
    if (tokenized.length < 2) continue;

    for (const tokens of tokenized) {
      if (tokens.length > span) span = tokens.length;
      const key = tokens.join(" ");
      const others = tokenized.filter((other) => other.join(" ") !== key);
      if (others.length === 0) continue;
      const existing = index.get(key);
      if (existing === undefined) index.set(key, [others]);
      else existing.push(others);
    }
  }

  return { groups: index, span };
}

/* ------------------------------------------------------------------ */
/* Queries                                                            */
/* ------------------------------------------------------------------ */

/** One thing the reader asked for, and the other ways of saying it. */
export interface QueryTerm {
  readonly tokens: readonly string[];
  readonly variants: readonly (readonly string[])[];
}

/** Bounds the work a pathological query can ask for. */
const MAX_TERMS = 12;
const MAX_VARIANTS = 32;

/**
 * Splits a raw query into terms, longest synonym phrase first.
 *
 * Greedy rather than exhaustive: `gay marriage` is taken as one term because
 * the table holds it as one, and only what is left over is read word by word.
 * Two words that happen to sit next to each other cost nothing, because a
 * phrase absent from the table simply falls through to its tokens.
 */
export function parseQuery(raw: string, synonyms: SynonymTable): QueryTerm[] {
  const tokens = tokenize(raw);
  const terms: QueryTerm[] = [];

  let cursor = 0;
  while (cursor < tokens.length && terms.length < MAX_TERMS) {
    const remaining = tokens.length - cursor;
    let width = Math.min(synonyms.span, remaining);

    for (; width >= 1; width -= 1) {
      const window = tokens.slice(cursor, cursor + width);
      const key = window.join(" ");
      const found = synonyms.groups.get(key);
      if (found === undefined && width > 1) continue;

      const variants: string[][] = [];
      const seen = new Set<string>([key]);
      for (const group of found ?? []) {
        for (const other of group) {
          const signature = other.join(" ");
          if (seen.has(signature) || variants.length >= MAX_VARIANTS) continue;
          seen.add(signature);
          variants.push([...other]);
        }
      }

      terms.push({ tokens: window, variants });
      cursor += width;
      break;
    }
  }

  return terms;
}

/* ------------------------------------------------------------------ */
/* Matching                                                           */
/* ------------------------------------------------------------------ */

interface Match {
  readonly tier: Tier;
  readonly weight: number;
}

export interface SearchHit {
  readonly id: string;
  readonly score: number;
  /** How many of the reader's terms were reached at all. */
  readonly matched: number;
}

/**
 * Holds the per-query token work so a page can ask for results and for
 * suggestions without scanning the vocabulary twice.
 */
class Matcher {
  private readonly cache = new Map<string, ReadonlyMap<string, Match>>();

  constructor(
    private readonly index: SearchIndex,
    /**
     * How prominent a *synonym* has to be to count.
     *
     * A synonym is already a substitution for what the reader typed, so
     * reaching an entry that merely mentions the substitute somewhere in its
     * argument is two steps away from anything the reader asked for. Above
     * this weight — in practice a title, a keyword or the short answer — the
     * word is what the entry is *about*, and the substitution holds.
     */
    private readonly synonymMinWeight: number,
  ) {}

  private token(token: string): ReadonlyMap<string, Match> {
    const cached = this.cache.get(token);
    if (cached !== undefined) return cached;

    const hits = new Map<string, Match>();
    for (const candidate of this.index.vocabulary) {
      const tier = compareTokens(token, candidate);
      if (tier === undefined) continue;
      const holders = this.index.postings.get(candidate);
      if (holders === undefined) continue;
      for (const [id, weight] of holders) {
        const previous = hits.get(id);
        if (
          previous === undefined ||
          tier > previous.tier ||
          (tier === previous.tier && weight > previous.weight)
        ) {
          hits.set(id, { tier, weight });
        }
      }
    }

    this.cache.set(token, hits);
    return hits;
  }

  /** Every token of a phrase must be present; the weakest tier governs. */
  private sequence(tokens: readonly string[]): ReadonlyMap<string, Match> {
    let accumulated: Map<string, Match> | undefined;

    for (const token of tokens) {
      const here = this.token(token);
      if (here.size === 0) return new Map();
      if (accumulated === undefined) {
        accumulated = new Map(here);
        continue;
      }
      const narrowed = new Map<string, Match>();
      for (const [id, match] of accumulated) {
        const other = here.get(id);
        if (other === undefined) continue;
        narrowed.set(id, {
          tier: Math.min(match.tier, other.tier) as Tier,
          weight: Math.max(match.weight, other.weight),
        });
      }
      if (narrowed.size === 0) return narrowed;
      accumulated = narrowed;
    }

    return accumulated ?? new Map();
  }

  /** A run of adjacent tokens, as the text actually holds it. */
  private phrase(tokens: readonly string[]): ReadonlyMap<string, Match> {
    const needle = ` ${tokens.join(" ")} `;
    const hits = new Map<string, Match>();

    for (const [id, fields] of this.index.runs) {
      let weight = 0;
      for (const field of fields) {
        if (field.weight > weight && field.run.includes(needle)) weight = field.weight;
      }
      if (weight > 0) hits.set(id, { tier: TIERS.exact, weight });
    }

    return hits;
  }

  /**
   * One of the other words for the thing.
   *
   * Stricter than the reader's own words in two ways: a phrase has to be
   * present as a phrase, and a single word has to be spelled as it is
   * written — inflected, but not guessed at. A guess at the spelling of a
   * guess at the meaning is not a search result, it is noise.
   */
  private variant(tokens: readonly string[]): ReadonlyMap<string, Match> {
    const raw = tokens.length > 1 ? this.phrase(tokens) : this.sequence(tokens);
    const kept = new Map<string, Match>();

    for (const [id, match] of raw) {
      if (match.tier < TIERS.stem) continue;
      if (match.weight < this.synonymMinWeight) continue;
      kept.set(id, { tier: TIERS.synonym, weight: match.weight });
    }

    return kept;
  }

  /** A term, including whatever the synonym map offers for it. */
  term(term: QueryTerm): ReadonlyMap<string, Match> {
    const best = new Map<string, Match>(this.sequence(term.tokens));

    for (const alternative of term.variants) {
      for (const [id, match] of this.variant(alternative)) {
        const previous = best.get(id);
        if (
          previous === undefined ||
          match.tier > previous.tier ||
          (match.tier === previous.tier && match.weight > previous.weight)
        ) {
          best.set(id, match);
        }
      }
    }

    return best;
  }
}

function score(matches: readonly Match[]): number {
  return matches.reduce((total, match) => total + TIER_BASE[match.tier] + match.weight, 0);
}

/**
 * The result of one query: what matched everything asked for, and what came
 * closest to it.
 *
 * Both come out of the same pass. A page that only ever showed results would
 * have nothing to say when there are none, and the empty page is the failure
 * this search was rewritten to fix.
 */
export interface SearchOutcome {
  readonly hits: readonly SearchHit[];
  readonly near: readonly SearchHit[];
}

/**
 * `hits` are the documents holding every term; `near` are the documents
 * holding some of them, best coverage first, for "did you mean".
 *
 * Both are returned in score order. Ties keep the order the documents were
 * given in, because `Array.prototype.sort` is stable and that order is the
 * catalogue's own editorial sequence.
 */
export function search(
  index: SearchIndex,
  terms: readonly QueryTerm[],
  options: { readonly nearLimit?: number; readonly synonymMinWeight?: number } = {},
): SearchOutcome {
  if (terms.length === 0) return { hits: [], near: [] };

  const matcher = new Matcher(index, options.synonymMinWeight ?? 0);
  const perTerm = terms.map((term) => matcher.term(term));

  const collected = new Map<string, Match[]>();
  for (const matches of perTerm) {
    for (const [id, match] of matches) {
      const existing = collected.get(id);
      if (existing === undefined) collected.set(id, [match]);
      else existing.push(match);
    }
  }

  const hits: SearchHit[] = [];
  const near: SearchHit[] = [];

  for (const id of index.order) {
    const matches = collected.get(id);
    if (matches === undefined) continue;
    const hit: SearchHit = { id, score: score(matches), matched: matches.length };
    if (matches.length === terms.length) hits.push(hit);
    else near.push(hit);
  }

  hits.sort((a, b) => b.score - a.score);
  near.sort((a, b) => b.matched - a.matched || b.score - a.score);

  return { hits, near: near.slice(0, options.nearLimit ?? 5) };
}
