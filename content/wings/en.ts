import type { WingsText } from "./index";

export const wingsText: WingsText = {
  meta: {
    eyebrow: "Organisation",
    title: "A wing in every European nation.",
    metaTitle: "National Wings",
    lede: "Restore Europa is organised as a movement of national wings rather than as a single continental party. Each nation carries its own — answerable to the people who live there, and to nobody abroad.",
    description:
      "Restore Europa is organised as a movement of national wings — one for each European nation, each answerable to its own members and holding only what its chapters and regions cannot.",
    intro: [
      {
        type: "lead",
        text: "Our programme holds that nothing should be governed at a higher level when it can be governed competently at a lower one. A movement that argued for subsidiarity and then organised itself as one undifferentiated European body would not deserve to be believed.",
      },
      {
        type: "paragraph",
        text: "So the movement is built the other way round. The national wing is the level at which political work actually happens: it carries the programme into the conditions of one country, contests elections under that country's law, holds its own statutes, and answers to its own members.",
      },
      {
        type: "paragraph",
        text: "What the wings hold in common is the [manifesto][manifesto] and the [principles][principles] that follow from it. What they do not hold in common is a single template for politics, because the conditions of Portugal and Estonia are not the same conditions.",
      },
    ],
    note: "Wings are being established across the continent. If you would like to help start the one where you live, say so through Get Involved — it is the most useful thing anyone can do for the movement at this stage.",
    mapLabel:
      "A map of Europe with the forty-four nations listed on this page picked out from the land around them.",
    mapCaption:
      "The nations picked out here are the forty-four listed below. Being on the map means the movement is organised around that nation, not that its wing is constituted or active.",
    mapHint: "Choose a nation on the map to open its wing.",
  },

  regions: {
    western: "Western Europe",
    northern: "Northern Europe",
    southern: "Southern Europe",
    "central-eastern": "Central and Eastern Europe",
  },

  countries: {
    albania: "Albania",
    andorra: "Andorra",
    austria: "Austria",
    belgium: "Belgium",
    "bosnia-and-herzegovina": "Bosnia and Herzegovina",
    bulgaria: "Bulgaria",
    croatia: "Croatia",
    cyprus: "Cyprus",
    czechia: "Czechia",
    denmark: "Denmark",
    estonia: "Estonia",
    finland: "Finland",
    france: "France",
    germany: "Germany",
    greece: "Greece",
    hungary: "Hungary",
    iceland: "Iceland",
    ireland: "Ireland",
    italy: "Italy",
    kosovo: "Kosovo",
    latvia: "Latvia",
    liechtenstein: "Liechtenstein",
    lithuania: "Lithuania",
    luxembourg: "Luxembourg",
    malta: "Malta",
    moldova: "Moldova",
    monaco: "Monaco",
    montenegro: "Montenegro",
    netherlands: "Netherlands",
    "north-macedonia": "North Macedonia",
    norway: "Norway",
    poland: "Poland",
    portugal: "Portugal",
    romania: "Romania",
    russia: "Russia",
    "san-marino": "San Marino",
    serbia: "Serbia",
    slovakia: "Slovakia",
    slovenia: "Slovenia",
    spain: "Spain",
    sweden: "Sweden",
    switzerland: "Switzerland",
    ukraine: "Ukraine",
    "united-kingdom": "United Kingdom",
  },

  index: {
    nationCount: { one: "{count} nation", other: "{count} nations" },
    closingTitle: "{count} nations. One inheritance.",
    closingBody:
      "Every wing on this page is a place where the work has to be done by people who live there. If that is where you live, the movement needs you more than it needs another reader.",
    getInvolved: "Get involved",
    howWeOrganise: "How we organise",
  },

  wing: {
    backLabel: "National wings",
    kicker: "National wing",
    lead: "The wing in {country} is the national level of Restore Europa — the body that carries our programme into {country}'s own political conditions, and the level at which members there decide how it is pursued.",
    body: [
      {
        type: "paragraph",
        text: "A national wing is not a branch office receiving instructions. It holds its own statutes, selects its own candidates, sets its own priorities within the common programme, and is answerable to its own members rather than to any body outside the country.",
      },
      {
        type: "paragraph",
        text: "What it does not do is decide matters that belong to a smaller body. Where a chapter can do the work, the work belongs to the chapter. The same restraint the movement asks of the state, it asks first of itself.",
      },
    ],
    metaTitle: "{country} — National Wing",
    metaDescription:
      "The Restore Europa wing in {country}: the national level of the movement, what it is answerable for, and how to help establish it.",
    ogTitle: "Restore Europa {country} — National Wing",
    ogDescription: "The national level of Restore Europa in {country}.",
    notFound: "Wing not found",
    remitHeading: "What the wing is answerable for",
    remitLede:
      "The same six responsibilities in every nation. How they are discharged is for the members in {country} to decide.",
    takePartHeading: "Help establish the wing in {country}.",
    takePartBody:
      "A national wing is built by the people who live under the conditions it exists to change. Tell us what you are able to do — organising, writing, professional expertise, or simply being counted.",
    getInvolved: "Get involved",
    contact: "Contact",
    neighboursHeading: "Other wings in {region}",
  },

  chain: {
    caption: "Where the wing sits",
    footnote:
      "Read upward: a level takes on only what the one beneath it cannot competently hold.",
    nationalLabel: "{layer} — {country}",
  },

  layers: {
    chapter: {
      label: "Local chapter",
      note: "The town or district. Meetings, local political work, and candidate selection where chapters are established.",
    },
    regional: {
      label: "Regional coordination",
      note: "Support between chapters and shared organisation. No competence a chapter can hold for itself.",
    },
    national: {
      label: "National wing",
      note: "Statutes, programme, compliance with national party and electoral law, and national candidacies.",
    },
    european: {
      label: "European movement",
      note: "Only what the nations genuinely cannot do apart: defence, borders, strategic infrastructure, science, energy.",
    },
  },

  remit: {
    programme: {
      term: "The programme, in context",
      description:
        "Applying the manifesto to the actual conditions of the country — its housing market, its demography, its industry, its landscape — without altering what the movement holds in common.",
    },
    elections: {
      term: "Elections and candidates",
      description:
        "Registration, candidate selection and contesting elections under national party and electoral law, in whatever form that law takes.",
    },
    statutes: {
      term: "Statutes and compliance",
      description:
        "Its own constitution, membership register, accounts and statutory reporting, published in the country where it operates.",
    },
    chapters: {
      term: "Chapters and regions",
      description:
        "Establishing local chapters, supporting regional coordination, and resisting the temptation to absorb what either can do itself.",
    },
    language: {
      term: "Language and publication",
      description:
        "Producing and maintaining the authoritative text of our documents in the national language. Translations are the wing's responsibility, and are not published until they are good.",
    },
    europe: {
      term: "Representation in Europe",
      description:
        "Speaking for its members within the wider movement, and cooperating with the other wings on the matters that genuinely require it.",
    },
  },
};
