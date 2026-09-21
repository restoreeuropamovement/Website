import type { ContentBlock } from "@/lib/content-types";

/**
 * The home page, in one object.
 *
 * Bundled rather than exported piecemeal because a translation is a whole
 * page: `HomeContent` is this object's type, so a language file that omits a
 * section is a build error instead of a blank slab between two others.
 *
 * `href` values are internal paths and are the same in every language — the
 * locale prefix is added when they are rendered, not stored here. A translator
 * editing one is editing a route.
 *
 * Deliberately not `as const`; see the note in `content/chrome/en.ts`.
 */
export const home = {
  hero: {
    /** The name is the headline; this is the line that follows it. */
    headline: "Europe is worth inheriting.",
    subheadline: "For a Christian, European and human-scale civilization.",
    primaryCta: { label: "Read Our Principles", href: "/principles" },
    secondaryCta: { label: "Read the Manifesto", href: "/manifesto" },
  },

  philosophy: {
    eyebrow: "The central question",
    statement: ["The economy exists for man.", "Man does not exist for the economy."],
    body: [
      {
        type: "lead",
        text: "Political and economic systems are instruments. They exist to make a good human life possible — not the reverse.",
      },
      {
        type: "paragraph",
        text: "A civilization cannot be measured by output alone. Gross domestic product, consumption, productivity, administrative efficiency and technological capability describe a society's means. They say almost nothing about whether the people living inside it can raise families, keep homes, know their neighbors, practice a craft, or rest.",
      },
      {
        type: "paragraph",
        text: "When those means are treated as ends, the institutions that hold ordinary life together are quietly dismantled to serve them. That is not progress. It is a transfer of purpose from the person to the system.",
      },
    ] satisfies readonly ContentBlock[],
    requirements: {
      title: "Human beings require time and space for",
      items: [
        "Family",
        "Friendship",
        "Faith",
        "Community",
        "Nature",
        "Learning",
        "Craftsmanship",
        "Beauty",
        "Rest",
      ],
    },
    reductions: {
      title: "A civilization cannot be reduced to",
      items: [
        "Gross domestic product",
        "Consumption",
        "Productivity",
        "Administrative efficiency",
        "Technological capability",
      ],
    },
  },

  principles: {
    title: "What we hold, stated briefly.",
    allLabel: "All sixteen principles",
    readFull: "read the full principle",
    items: [
      {
        number: "01",
        title: "Family & Human Life",
        statement:
          "Society should make family formation, parenthood and a meaningful human life materially possible.",
        href: "/principles#family",
      },
      {
        number: "02",
        title: "Nation & Continuity",
        statement:
          "European nations have a legitimate right to preserve their historical identity, culture and continuity.",
        href: "/principles#nation-and-continuity",
      },
      {
        number: "03",
        title: "Property & Economic Independence",
        statement:
          "A free society requires widespread ownership rather than permanent dependency upon a small number of institutions.",
        href: "/principles#property",
      },
      {
        number: "04",
        title: "Human-Scale Technology",
        statement:
          "Technology should strengthen human competence, autonomy and community rather than reorganize society around technological necessity.",
        href: "/principles#technology",
      },
      {
        number: "05",
        title: "Stewardship & Beauty",
        statement:
          "Land, architecture and nature are inheritances to cultivate, protect and transmit.",
        href: "/principles#environment",
      },
      {
        number: "06",
        title: "Authority & Subsidiarity",
        statement: "Political authority should be exercised at the lowest competent level.",
        href: "/principles#subsidiarity",
      },
    ],
  },

  lifeAndWork: {
    eyebrow: "Work and life",
    statement: "We were not created to work until we die.",
    body: [
      {
        type: "lead",
        text: "Work possesses real dignity. Through it people acquire competence, produce useful things, support families and take part in the life of a community.",
      },
      {
        type: "paragraph",
        text: "But work is not the total purpose of human existence. An economic system is meant to provide the material basis for a life — not to consume the life it was built to support.",
      },
      {
        type: "paragraph",
        text: "A society has lost its bearings when ordinary people must surrender nearly all their waking hours simply to secure housing and food; when parents rarely see their children; when communities thin out because everyone is exhausted.",
      },
    ] satisfies readonly ContentBlock[],
    diagram: {
      top: "Work",
      middle: "supports",
      bottom: "Life",
      /* Punctuation is language-specific: French sets a narrow no-break space
         before a colon, so the separator belongs here and not in the markup. */
      separator: ": ",
      /* Lower case: these run on from "Work supports Life:" as one sentence. */
      orbit: ["family", "friendship", "faith", "community", "nature", "learning", "craft", "rest"],
    },
    outcome: {
      title: "What productivity should purchase",
      lead: "Gains in what a society can produce ought to appear somewhere in the lives of the people producing it.",
      items: [
        "Greater security against ordinary misfortune",
        "Leisure that is genuinely one's own",
        "Time with children and parents",
        "Autonomy in how a working life is arranged",
        "Independence from permanent debt and dependency",
      ],
    },
  },

  economicOrder: {
    eyebrow: "Economic order",
    statement: "Markets without market worship.",
    body: [
      {
        type: "lead",
        text: "Private property is legitimate. Enterprise is legitimate. Profit is legitimate. Economic success is legitimate.",
      },
      {
        type: "paragraph",
        text: "None of these is the highest purpose of a society. Economic institutions are indispensable and must remain subordinate to the common good — which is not a restriction imposed on enterprise from outside, but the reason enterprise is worth protecting in the first place.",
      },
      {
        type: "paragraph",
        text: "This is not a position against business. It is a position against domination: against the point at which a market ceases to be a means of exchange among many participants and becomes an instrument of control by a few.",
      },
    ] satisfies readonly ContentBlock[],
    pillars: [
      {
        title: "Enterprise",
        lead: "What we support",
        items: [
          "Entrepreneurship",
          "Productive investment",
          "Family businesses",
          "Independent trades",
          "Small and medium-sized firms",
        ],
      },
      {
        title: "Ownership",
        lead: "What we widen",
        items: [
          "Home ownership",
          "Cooperatives",
          "Employee ownership",
          "Family farms",
          "Local and regional banking",
          "Broader ownership of capital",
        ],
      },
      {
        title: "Limits",
        lead: "What we restrain",
        items: [
          "Monopolistic concentration",
          "Regulatory capture",
          "Financial extraction",
          "Speculative housing markets",
          "Corporate domination of politics",
        ],
      },
    ],
    key: "The economy exists for the person, the family and the community.",
  },

  technology: {
    eyebrow: "Technology",
    statement: "The machine must adapt itself to man.",
    body: [
      {
        type: "lead",
        text: "Restore Europe is not against technology. We reject technological inevitability — the assumption that whatever can be built must be adopted, and that whatever raises efficiency must count as progress.",
      },
      {
        type: "paragraph",
        text: "A technology introduced as optional can become economically necessary. What becomes necessary reshapes institutions, and institutions then reorganize society around the requirements of the technology. At the end of that sequence, people are adapting themselves to the machine.",
      },
      {
        type: "paragraph",
        text: "Each technology should be judged by what it does to human autonomy, family life, community, privacy, meaningful work, human competence and political decentralization.",
      },
    ] satisfies readonly ContentBlock[],
    liberates: {
      title: "Technology that liberates",
      items: [
        "Medicine",
        "Sanitation",
        "Engineering",
        "Scientific discovery",
        "Useful tools",
        "Automation of dangerous labor",
      ],
    },
    dominates: {
      title: "Technology that dominates",
      items: [
        "Mass surveillance",
        "Attention manipulation",
        "Forced digital dependency",
        "Algorithmic control",
        "Unnecessary elimination of human agency",
        "Systems that make participation impossible without total technological dependence",
      ],
    },
    closing: ["We are not opposed to technology.", "We oppose technological domination."],
  },

  stewardship: {
    eyebrow: "Stewardship",
    title: "Stewardship",
    body: [
      {
        type: "lead",
        text: "Forests, farmland, rivers, mountains, coastlines, biodiversity and historic settlements are inherited goods. They were received from people who are gone and are owed to people not yet born.",
      },
      {
        type: "paragraph",
        text: "That makes them something other than disposable commodities. A generation may use them, and must maintain them; it does not own them outright.",
      },
      {
        type: "paragraph",
        text: "This is not an argument that treats humanity as a blight on the natural world, nor one that treats any destruction as acceptable if it raises short-term output. Man belongs within nature — as its steward, answerable for what he leaves behind.",
      },
    ] satisfies readonly ContentBlock[],
    categoriesTitle: "What is held in trust",
    categories: [
      { title: "Forests", note: "Responsible forestry and long rotations." },
      { title: "Agriculture", note: "Healthy soils and family farming." },
      { title: "Water", note: "Clean rivers, aquifers and coasts." },
      { title: "Biodiversity", note: "Habitat kept intact, not merely catalogued." },
      { title: "Landscape", note: "Settlement patterns that respect the land." },
      { title: "Architecture", note: "Building for generations, not for cycles." },
      { title: "Regional Production", note: "Supply chains a region can see." },
      { title: "Durability & Repair", note: "Things made to be mended." },
    ],
  },

  europe: {
    eyebrow: "Europe",
    title: "A Europe of nations.",
    subtitle: "Cooperation without homogenization.",
    nations: [
      "Poland should remain recognizably Polish.",
      "Italy should remain recognizably Italian.",
      "France should remain recognizably French.",
    ],
    together: "And together they remain European.",
    body: [
      {
        type: "lead",
        text: "The principle that should govern European political organization is subsidiarity: nothing ought to be decided at a higher level when it can be decided competently at a lower one.",
      },
      {
        type: "paragraph",
        text: "The village should not surrender unnecessarily to the region, the region to the nation, or the nation to continental institutions. Where a smaller body can do the work well, the work belongs to it — not as an administrative convenience, but as a condition of political liberty.",
      },
      {
        type: "paragraph",
        text: "This leaves a great deal that Europeans can only do together. National and local identity remain politically meaningful precisely because cooperation is confined to the matters that genuinely require it.",
      },
    ] satisfies readonly ContentBlock[],
    cooperation: {
      title: "Where European cooperation belongs",
      items: [
        "Defense",
        "Strategic infrastructure",
        "Borders",
        "Science",
        "Environmental protection",
        "Medicine",
        "Energy resilience",
        "Strategic industry",
      ],
    },
  },

  politicalCulture: {
    eyebrow: "Political culture",
    statement: "Country before party.",
    body: [
      {
        type: "lead",
        text: "Political disagreement is necessary. Permanent partisan warfare is not.",
      },
      {
        type: "paragraph",
        text: "Where the enduring interests of a nation and its people are at stake — national security, critical infrastructure, demographic stability, the protection of families, constitutional continuity — political movements should be capable of cooperating across party lines.",
      },
      {
        type: "paragraph",
        text: "The purpose of a political party is not merely to defeat another party. Its purpose is to serve the political community. Opposition is necessary; opposition for its own sake is corrosive.",
      },
    ] satisfies readonly ContentBlock[],
    hierarchy: [
      { label: "People", note: "The political community itself, across generations." },
      { label: "Nation", note: "Its continuity, security and common life." },
      { label: "Institutions", note: "The offices that hold both in trust." },
      { label: "Party", note: "An instrument of service, and the last of the four." },
    ],
    clarification:
      "This is an order of service and responsibility, not a chain of command. It describes what a party owes, not authority a party may claim. Nothing in it licenses rule without consent: political authority remains answerable to law, to constitutional limits and to the people.",
  },

  restoration: {
    eyebrow: "Restoration",
    statement: "Restoration, not surrender.",
    body: [
      {
        type: "lead",
        text: "Restoration does not mean recreating a particular historical century. The past held injustice, poverty, violence and error; none of it is owed our nostalgia.",
      },
      {
        type: "paragraph",
        text: "It means recovering the principles that modern society has discarded, and applying them intelligently to the conditions we actually live in. History cannot be reversed. Direction can be changed.",
      },
    ] satisfies readonly ContentBlock[],
    closing: "Our inheritance was not ours to create. It is not ours to discard.",
    primaryCta: { label: "Read the Manifesto", href: "/manifesto" },
    secondaryCta: { label: "Our Vision", href: "/vision" },
  },
};
