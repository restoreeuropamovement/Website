import type { ContentBlock } from "@/lib/content-types";
import type { ExploreCardId, ObjectiveId, ParticipationId, StandForId } from "./structure";

/**
 * The home page, in one object.
 *
 * Bundled rather than exported piecemeal because a translation is a whole
 * page: `HomeContent` is this object's type, so a language file that omits a
 * section is a build error instead of a blank slab between two others.
 *
 * The page is a doorway, not the argument. It says what the movement is, what
 * it holds, what it is actually doing, and how to take part — and sends the
 * reader to the documents for the rest. The long-form case that used to run
 * down this page is on `/manifesto` and `/vision`, where somebody who wants it
 * will look for it.
 *
 * Words only. Routes, anchors, ordering and photographs are in
 * `structure.ts`; nothing here decides where a link goes.
 *
 * Deliberately not `as const`; see the note in `content/chrome/en.ts`.
 */
export const home = {
  /**
   * The name, one line of argument, one sentence of fact, two ways forward.
   *
   * The factual sentence has to survive a reader who knows nothing: it names
   * what kind of thing this is, what it is built on, and the one structural
   * choice that distinguishes it from the other European parties.
   */
  hero: {
    headline: "Europa is worth inheriting.",
    statement:
      "Restore Europa is a political movement of Europa's nations, built on a published manifesto and organised as a separate national wing in each country rather than as one European party.",
    primaryCta: "Read Our Principles",
    secondaryCta: "Get Involved",
  },

  standFor: {
    eyebrow: "What we stand for",
    title: "Five things we hold.",
    lede: "Five of sixteen. Each is argued at length on its own page, against the section of the manifesto it rests on.",
    allLabel: "All sixteen principles",
    readFull: "read the full principle",
    items: {
      family: {
        title: "Family & Human Life",
        statement:
          "A country that has made children unaffordable has already said something about what it values. The ordinary things — marrying, raising a family, keeping a home — should be within reach of ordinary people.",
      },
      nation: {
        title: "Nation & Continuity",
        statement:
          "A nation is a people with a memory, not a set of administrative borders. It is allowed to want to still recognise itself in a hundred years.",
      },
      property: {
        title: "Property & Economic Independence",
        statement:
          "Freedom is hard to exercise from a position of total dependence. Ownership should be spread widely — homes, land, trades, small firms — rather than gathered into a few institutions.",
      },
      technology: {
        title: "Human-Scale Technology",
        statement:
          "Not everything that can be built has to be adopted. A tool should leave people more capable of running their own lives, not less.",
      },
      subsidiarity: {
        title: "Authority & Subsidiarity",
        statement:
          "Nothing should be decided higher up than it can be decided well. What a family, a town or a nation can do for itself belongs to it.",
      },
    } satisfies Record<StandForId, { title: string; statement: string }>,
  },

  /**
   * The answer to "yes, but what do you actually do?".
   *
   * Four claims, each one checkable by following its own link. Deliberately
   * organisational rather than aspirational: what a movement believes is the
   * section above, and a list of things it would like the world to be is not
   * an answer to this question.
   */
  objectives: {
    eyebrow: "What we want to do",
    title: "Concretely, this is the work.",
    lede: "A movement is judged by what it builds, not by what it deplores. Four things are underway, and each of them can be checked by opening it.",
    items: {
      programme: {
        title: "Write the programme down.",
        body: "Ten areas, from the family and the economy to technology, health and foreign policy. Worked positions rather than slogans, each one tied back to the section of the manifesto it rests on and each one dated. A position you can quote is a position we can be held to.",
        linkLabel: "Read the policy catalogue",
      },
      wings: {
        title: "Build a wing in every European nation.",
        body: "Political work happens inside a country, under its own law and in its own conditions. Forty-seven nations are mapped. Each wing holds its own statutes, contests its own elections and answers to its own members rather than to a headquarters somewhere else.",
        linkLabel: "See the national wings",
      },
      members: {
        title: "Be a party of members, not of personalities.",
        body: "A movement made of members can be held to account by them. Nothing becomes a membership until a person has read the application — no form decides anything on its own, and what you write is encrypted before it is stored.",
        linkLabel: "Apply to join",
      },
      publication: {
        title: "Publish the whole argument.",
        body: "The manifesto is online in full and downloadable as plain text. Nothing is kept behind an email address, a form or a payment. Anyone who wants to disagree with this movement can read exactly what it said.",
        linkLabel: "Read the manifesto",
      },
    } satisfies Record<ObjectiveId, { title: string; body: string; linkLabel: string }>,
  },

  /**
   * A hundred and thirty words of the preamble, condensed.
   *
   * The Burke sentence is quoted because the manifesto quotes it, and because
   * it is the premise the rest of the document rests on. It is from the
   * *Reflections on the Revolution in France*, 1790.
   */
  manifesto: {
    eyebrow: "From the manifesto",
    title: "Preamble",
    body: [
      {
        type: "lead",
        text: "Europa is more than a continent, a market or an administrative space.",
      },
      {
        type: "paragraph",
        text: "It is a civilization — the product of Christianity and classical inheritance, of distinct peoples and languages, of generations of families, cultivated landscapes, towns and villages, churches, art, law, craftsmanship and memory.",
      },
      {
        type: "paragraph",
        text: "None of that was built by individuals detached from history. It was handed from one generation to the next. Burke gave the idea its standing formulation in 1790, against a revolution that proposed to begin again from reason alone: a society is a partnership, and because its ends cannot be reached inside one lifetime it is a partnership \u201cnot only between those who are living, but between those who are living, those who are dead, and those who are to be born\u201d.",
      },
      {
        type: "paragraph",
        text: "Modern Europa increasingly treats inheritance itself as suspect. We do not accept that this is progress.",
      },
    ] satisfies readonly ContentBlock[],
    cta: "Read the full manifesto",
  },

  explore: {
    eyebrow: "Explore",
    title: "Explore Restore Europa.",
    cards: {
      principles: {
        title: "Principles",
        blurb: "The sixteen commitments, argued one at a time.",
      },
      manifesto: {
        title: "Manifesto",
        blurb: "The founding document: a preamble and twenty-two sections, in full.",
      },
      policy: {
        title: "Policy",
        blurb: "Worked positions across ten areas, searchable and dated.",
      },
      vision: {
        title: "Vision",
        blurb: "What the programme would mean in an ordinary life.",
      },
      wings: {
        title: "Wings",
        blurb: "The national wing in each of forty-seven European nations.",
      },
      about: {
        title: "About",
        blurb: "Who we are, and how the movement is put together.",
      },
    } satisfies Record<ExploreCardId, { title: string; blurb: string }>,
  },

  /**
   * What joining means, stated so that nobody has to guess.
   *
   * Two roles, because `involvement_role` accepts two. The closing line says
   * what the site does *not* do, which is the part a reader is entitled to
   * know before typing an address into anything.
   */
  participation: {
    eyebrow: "Taking part",
    title: "What joining actually means.",
    lede: "Two ways in and one letter to write. None of them costs anything, because the movement is not yet able to receive money.",
    ways: {
      member: {
        title: "Member",
        note: "The ordinary way in",
        summary:
          "You are counted. Membership here is belonging rather than a subscription: when Restore Europa can receive contributions, members are the people who will be asked to support the work.",
        cta: "Apply to join",
      },
      volunteer: {
        title: "Volunteer",
        note: "As much time as you can spare",
        summary:
          "The same application, with the area you would help in — local organising, writing, translation, events, law, technology, farming, building, or something else you can do.",
        cta: "Apply as a volunteer",
      },
      chapter: {
        title: "A wing where you live",
        note: "Write first; there is no form",
        summary:
          "Being on the map does not mean a wing is constituted there yet. If you would help start the one in your country, say so — at this stage it is the most useful thing anyone can do for the movement.",
        cta: "Write about a local wing",
      },
    } satisfies Record<ParticipationId, { title: string; note: string; summary: string; cta: string }>,
    closing:
      "There is no mailing list to join and no newsletter to subscribe to. The only address this movement holds is one you typed into an application or an enquiry yourself, and it is encrypted before it is stored.",
  },
};
