import type { AboutText } from "./index";

export const aboutText: AboutText = {
  meta: {
    eyebrow: "About",
    title: "A political movement, organised for the long term.",
    metaTitle: "About",
    lede: "Restore Europa Movement is being built as a durable political project rather than a campaign. This page sets out who we are, how we work, and the limits we place on ourselves.",
    description:
      "Who Restore Europa Movement is, why we describe our politics as restoration, how we organise, and our commitment to peaceful, constitutional and democratic political participation.",
  },

  onThisPage: "On this page",

  sections: {
    "who-we-are": {
      title: "Who We Are",
      body: [
        {
          type: "lead",
          text: "Restore Europa is a European political movement founded on the conviction that Europe is a civilization worth continuing, and that continuing it is a matter of ordinary politics rather than of sentiment.",
        },
        {
          type: "paragraph",
          text: "We are organising as a party of members rather than of personalities: local groups, a research and writing function, and a programme that is published in full and argued in public. Our positions are set out in the [manifesto][manifesto] and summarised in our [principles][principles].",
        },
        {
          type: "note",
          text: "The movement is in formation. Governing bodies, statutes, officers and registered particulars will be published here as they are established, and not before.",
        },
      ],
    },

    "why-restoration": {
      title: "Why Restoration",
      body: [
        {
          type: "paragraph",
          text: "Conservatism has often meant defending whatever arrangement happens to exist. Revolution means discarding it. Neither describes what we are attempting.",
        },
        {
          type: "paragraph",
          text: "Restoration means recovering principles that a society has abandoned and applying them intelligently to present conditions. It does not mean recreating a particular century: the past contained injustice, poverty, violence and error, and none of it is owed our nostalgia.",
        },
        {
          type: "statement",
          text: "History cannot be reversed. Direction can be changed.",
        },
      ],
    },

    "what-we-believe": {
      title: "What We Believe",
      body: [
        {
          type: "paragraph",
          text: "In short: that the person is prior to the system; that the family is the first institution of civilization; that European nations may legitimately preserve their continuity; that property should be widely held rather than concentrated; that authority belongs at the lowest competent level; that the natural and built inheritance is held in trust; and that technology must remain subordinate to human judgment.",
        },
        {
          type: "paragraph",
          text: "We affirm the Christian, and particularly Catholic, inheritance of Europe as foundational to its civilization — without coercing belief, and without supposing that a shared public inheritance requires private uniformity.",
        },
        {
          type: "paragraph",
          text: "Each of these is stated at length, with its reasoning, in the [manifesto][manifesto].",
        },
      ],
    },

    "political-method": {
      title: "Our Political Method",
      body: [
        {
          type: "paragraph",
          text: "We argue in public, at length, under our own name. Our programme is published in full rather than distributed as slogans, because a political movement that cannot state its reasoning is asking for trust it has not earned.",
        },
        {
          type: "paragraph",
          text: "We direct criticism at systems, institutions, incentives and ideas. We do not describe groups of people as enemies, and we do not campaign on contempt. Where we disagree with other political movements, we say what the disagreement is.",
        },
        {
          type: "paragraph",
          text: "Where the enduring interests of a nation require it, we will cooperate across party lines. Opposition is a necessary part of democratic life; opposition for its own sake is not.",
        },
      ],
    },

    "how-we-organize": {
      title: "How We Organize",
      body: [
        {
          type: "paragraph",
          text: "The intended structure follows the principle we argue for elsewhere: competence at the lowest level that can hold it.",
        },
        {
          type: "definitions",
          items: [
            {
              term: "Local chapters",
              description:
                "The basic unit. Meetings, local political work, and candidate selection where chapters are established and registered.",
            },
            {
              term: "Regional coordination",
              description:
                "Support between chapters, shared organisation, and representation upward. No competence that a chapter can exercise itself.",
            },
            {
              term: "National wings",
              description:
                "One for each European nation, each holding its own statutes, programme and candidacies under its own country's law. See [the wings][wings].",
            },
            {
              term: "Research and publication",
              description:
                "The [policy catalogue][policy] and the maintenance of the manifesto as a living reference text.",
            },
          ],
        },
        {
          type: "note",
          text: "No chapter has yet been formally constituted. Enquiries about establishing a chapter, or a [national wing][wings], are handled through [Get Involved][join].",
        },
      ],
    },

    "democratic-commitment": {
      title: "Our Commitment to Democratic Political Participation",
      body: [
        {
          type: "lead",
          text: "Restore Europa pursues its aims exclusively through lawful, peaceful and constitutional political participation.",
        },
        {
          type: "list",
          marker: "rule",
          items: [
            "We participate through elections, public argument, publication and lawful association.",
            "We accept the constitutional order and the rule of law, including outcomes we lose.",
            "We reject political violence in all forms, without qualification or exception.",
            "We reject terrorism, and regard the deliberate destruction of innocent life as incapable of building any moral order.",
            "We reject totalitarianism, whether of party, corporation, ideology or state.",
            "We reject racial hatred and any politics that treats human beings as of unequal dignity.",
            "We expect members and representatives to hold to these commitments, and regard their breach as disqualifying.",
          ],
        },
        {
          type: "paragraph",
          text: "These are not disclaimers. They follow directly from what we argue: that political authority exists to serve the common good, that it is answerable to law, and that a movement claiming to defend a civilization cannot do so by methods that destroy the conditions of civilized life.",
        },
      ],
    },
  },

  actions: {
    getInvolved: "Get involved",
    contact: "Contact",
  },
};
