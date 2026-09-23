import type { VisionText } from "./index";

/**
 * The vision page in English, which is also the type every translation is
 * checked against. Words only — ids, ordering and links live in structure.ts.
 */
export const visionText: VisionText = {
  meta: {
    eyebrow: "Vision",
    title: "What should Europe be for?",
    metaTitle: "Vision",
    lede: "Political programmes are easy to state and hard to picture. This page describes the ordinary life our principles are meant to make possible — not a slogan, but a set of conditions you could test against your own street.",
    description:
      "What Restore Europa's programme means in ordinary life: affordable homes, families that can raise children, work that leaves time for living, beautiful towns, protected nature, technology under human control and politics that serves people.",
    intro: [
      {
        type: "lead",
        text: "Every political order is an answer to a question it rarely states out loud: what is all this effort for?",
      },
      {
        type: "paragraph",
        text: "Our answer is that it is for people — for their families, their communities, their work, their faith and the places they live in. What follows is that answer written out in specifics, so that it can be argued with.",
      },
    ],
  },

  outcomesHeading: "A Europe where —",
  principleLink: "The principle behind it",

  outcomes: {
    homes: {
      title: "Ordinary people can afford homes",
      summary: "Housing that a normal wage can reach.",
      body: "A dwelling is first a place to live and only incidentally an asset. Where housing is priced as an investment instrument, ordinary earnings stop being enough to buy one — and a generation that cannot buy cannot easily settle, marry, or plan. Policy should treat habitation as the primary purpose of housing and bring supply, credit and taxation into line with it.",
    },
    children: {
      title: "Families can raise children without financial ruin",
      summary: "Parenthood as a normal life, not a luxury.",
      body: "Most people who want children want fewer obstacles, not incentives. Housing costs, insecure work, the price of care and the absence of time are the obstacles that matter. A society that finds those problems insoluble has decided, in practice, that its own continuation is optional.",
    },
    time: {
      title: "Work leaves time for life",
      summary: "An economy that funds a life rather than consuming it.",
      body: "Work is worth doing and deserves respect. It is not the whole of a life. Where productivity rises, some part of that gain should return to people as security, leisure and time with the people they are responsible for — not solely as output.",
    },
    towns: {
      title: "Towns remain beautiful",
      summary: "Places built to be inhabited across generations.",
      body: "Beauty in public building is not decoration. It is the visible evidence that a community expects to still be there in a century. Human scale, local materials and respect for what already stands cost less over a building's life than the disposable alternative.",
    },
    nature: {
      title: "Nature is protected",
      summary: "Stewardship of what was received.",
      body: "Forests, farmland, rivers and coasts were handed over in a particular condition and are owed to people not yet born. Protecting them is neither anti-human nor sentimental; it is the ordinary obligation of anyone who holds something in trust.",
    },
    technology: {
      title: "Technology remains under human control",
      summary: "Tools that answer to people.",
      body: "New capability should be adopted because it makes life better, not because it exists. Where a system removes human judgment from decisions with serious legal or moral consequences, the burden of proof belongs to the system.",
    },
    privacy: {
      title: "Citizens retain privacy",
      summary: "Space that is not observed by default.",
      body: "Private life is a precondition of independent thought and of free association. Cash, unmonitored space, and the ability to take part in ordinary society without continuous identification are not nostalgic attachments; they are the practical form privacy takes.",
    },
    enterprise: {
      title: "Small enterprises can survive",
      summary: "Room for the firm that is not the largest.",
      body: "Independent trades, family firms and small and medium-sized businesses hold local economies together and distribute ownership widely. They fail less from competition than from regulatory burdens written for very large firms and markets that have already consolidated.",
    },
    identity: {
      title: "Nations preserve their identity",
      summary: "Places that remain recognizably themselves.",
      body: "A country's language, customs, festivals and built character are not a tourism asset. They are the texture of ordinary life, and they survive only if they are lived rather than curated.",
    },
    communities: {
      title: "Communities retain real authority",
      summary: "Decisions taken where their effects are felt.",
      body: "A municipality that can decide nothing of consequence will not attract people willing to serve in it. Subsidiarity means giving smaller bodies genuine competence and the resources to exercise it, not the appearance of consultation.",
    },
    politics: {
      title: "Politics serves people rather than parties or corporations",
      summary: "Office as stewardship.",
      body: "Political disagreement is necessary and permanent partisan warfare is not. Where the enduring interests of a country are at stake, parties should be capable of cooperating; and no private interest should be able to set public policy by weight of resources alone.",
    },
  },

  closing: {
    statement: "None of this requires a new kind of human being.",
    body: [
      {
        type: "paragraph",
        text: "It requires institutions that assume people will marry, raise children, hold property, belong somewhere and eventually grow old — and that are built accordingly.",
      },
      {
        type: "paragraph",
        text: "That is a modest description of a good society. It is also, at present, a demanding one.",
      },
    ],
    readManifesto: "Read the manifesto",
    getInvolved: "Get involved",
  },
};
