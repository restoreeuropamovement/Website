/**
 * The words of `/materials`, and only the words.
 *
 * What is deliberately not here: the categories' ids and their order, which
 * are in `structure.ts`; the route, which is in `lib/site.ts`; the file
 * formats and sizes, which are facts about a file rather than sentences about
 * it and are formatted by `lib/materials.ts` in the reader's own locale.
 *
 * The title and description of each individual file are not here either, and
 * never will be. They are typed by an administrator into `/admin/materials`
 * and stored in the database — operator-entered data, in the same category as
 * a journal essay, rather than site copy somebody could translate. A poster
 * uploaded on Tuesday cannot wait for five translations before it is
 * downloadable, and a language file that grew an entry per upload would stop
 * being a document and become a queue.
 *
 * Deliberately not `as const`, like every other language source here: frozen
 * literal types would let a translation only ever be assigned the English
 * words back.
 */
export const materialsText = {
  meta: {
    eyebrow: "Materials",
    title: "Made to be taken and used.",
    /** The `<title>`, which is not the headline. */
    metaTitle: "Materials",
    lede: "The movement's mark, and the sheets, stickers and images made from it. Everything here is published to be downloaded.",
    /** For `<meta name="description">`, which differs from the on-page lede. */
    description:
      "Logos, posters, stickers, wallpapers and images of the Restore Europa Movement, free to download.",
  },

  /**
   * A heading and one line for each shelf. The anchor comes from the id in
   * `structure.ts`, not from the heading, so the same section sits at the same
   * address in all six editions.
   */
  categories: {
    logo: {
      label: "Logos",
      note: "The mark and the wordmark, in the forms they are drawn in.",
    },
    poster: {
      label: "Posters",
      note: "Sheets at a size worth printing.",
    },
    sticker: {
      label: "Stickers",
      note: "Small sheets, made to be printed and cut.",
    },
    wallpaper: {
      label: "Wallpapers",
      note: "For a telephone or a screen.",
    },
    social: {
      label: "Social",
      note: "Images sized for the accounts the movement holds.",
    },
  },

  /**
   * One sentence of practical help, shown beside the downloads on the shelves
   * whose files get printed and put up in public.
   *
   * Which shelves those are is not decided here — it is
   * `materialImprintCategoryIds` in `structure.ts`, because it is a fact about
   * what a poster is rather than a word anybody translates.
   *
   * It is general on purpose, and must stay that way. It names no country, no
   * statute and no penalty, and it says nothing about what any particular law
   * demands, because nobody here has established that and a confident sentence
   * about it would be exactly the fabricated fact `AGENTS.md` forbids. What is
   * being said is only what the movement knows about its own artwork — there is
   * a blank field on it — and the one honest instruction that follows: find out
   * what your own country expects.
   */
  imprint: {
    note: "The artwork leaves a blank field for the name and address of a person responsible for the item; fill it in before putting anything up in public. What is required differs from country to country, so check what applies where you are.",
  },

  file: {
    /** The affordance on each item. */
    download: "Download",
    /**
     * The link's accessible name, so a screen reader announces which file is
     * being downloaded rather than the twentieth "Download" on the page.
     * Takes `{title}`.
     */
    downloadLabel: "Download {title}",
  },

  /** Nothing has been published. The page is reachable and the shelf is bare. */
  empty: {
    title: "Nothing published yet.",
    body: "This page fills as the files are made.",
  },

  /**
   * Something quite different: the list could not be read at all. Kept apart
   * from `empty` because "nobody has made one" and "this copy of the site
   * cannot see the catalogue" are different sentences, and printing the first
   * when the second is true would be a small lie told confidently.
   */
  unavailable: {
    title: "The catalogue is not connected.",
    body: "This copy of the site has no database, so the list of files cannot be read. Nothing has been withdrawn.",
  },

  /**
   * The one thing the page says that is not a description of a file.
   *
   * It states facts and stops: what the files carry, that no terms of use have
   * been published, and that the imprint is where the movement sets out what it
   * can and cannot yet say about itself. It does not invent a rule, a licence
   * or a code of conduct — those are the movement's to decide and have not been
   * decided, and a page that made them up would be asserting policy on behalf
   * of people who never agreed to it.
   */
  usage: {
    title: "Using these",
    body: "Everything here carries the movement's name and mark, so whatever is made from it will be read as speaking for the movement. No terms of use have been published yet, and the movement is not yet registered.",
    /** Label of the link that follows. The address is in `lib/site.ts`. */
    imprintLink: "Imprint",
  },
};
