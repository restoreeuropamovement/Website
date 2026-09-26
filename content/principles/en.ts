import type { ContentBlock } from "@/lib/content-types";

/**
 * The sixteen principles, as text.
 *
 * Structure — numbering, anchors, manifesto links, images — lives in
 * `structure.ts` and is shared by every language. This file and its
 * translations carry nothing but words, keyed by the anchor id.
 *
 * Deliberately not `as const`; see the note in `content/chrome/en.ts`.
 */
export const principlesContent = {
  meta: {
    title: "Principles",
    subtitle: "Sixteen commitments, stated plainly",
    lede: "These are the positions from which our politics follows. Each is set out here in short; the full argument is made in the manifesto.",
    indexLabel: "Index",
    indexNavLabel: "Principles index",
    inManifesto: "In the manifesto",
    /** Prefix for the copy-link button's accessible name. */
    copyLinkTo: "Copy link to",
    closingTitle: "Each principle is argued in full in the manifesto.",
    readManifesto: "Read the manifesto",
    whatThisMeans: "What this means in practice",
  },

  items: {
    "moral-order": {
      title: "Moral Order",
      statement:
        "A political community cannot be permanently neutral about the good it exists to protect.",
      summary: "The common good as the purpose of political authority.",
      body: [
        {
          type: "paragraph",
          text: "Every society makes judgments about what deserves protection, what should be encouraged, and what kind of life it hopes its people will be able to lead. A state that claims to make no such judgments has usually made them already, and simply declined to say so.",
        },
        {
          type: "paragraph",
          text: "Human dignity does not originate in preference, in market demand, in administrative convenience or in technological possibility. Political authority exists neither to manufacture a new humanity nor merely to referee competing appetites, but to secure the conditions under which persons, families and communities can live well.",
        },
        {
          type: "paragraph",
          text: "European civilization cannot be understood apart from Christianity, and we affirm that inheritance openly. What we reject is not disagreement — disagreement is the normal condition of a free society — but the demand that European public life conduct itself as though its own religious inheritance had never existed.",
        },
      ] satisfies readonly ContentBlock[],
    },

    "person-and-community": {
      title: "The Person and Community",
      statement: "We begin with the person in relation, not with the isolated individual.",
      summary: "Rights and duties, freedom and responsibility, held together.",
      body: [
        {
          type: "paragraph",
          text: "Nobody arrives in the world unattached. Each of us enters a place that already contains parents, a language, a culture, a homeland, obligations and a history. These are not constraints to be escaped. They are among the conditions that make a full human life possible in the first place.",
        },
        {
          type: "paragraph",
          text: "Rights are real, and they do not survive long without corresponding duties. Freedom is real, and it amounts to more than the absence of restraint: it includes the capacity to pursue what is genuinely good.",
        },
        {
          type: "paragraph",
          text: "A sound political order therefore holds four pairs in balance: freedom with responsibility, rights with duties, individual dignity with social obligation, and authority with subsidiarity.",
        },
      ] satisfies readonly ContentBlock[],
    },

    family: {
      title: "Family",
      statement:
        "Society should make family formation, parenthood and a meaningful human life materially possible.",
      summary: "The first institution of civilization, and the one most easily undermined.",
      body: [
        {
          type: "paragraph",
          text: "The family is the first institution of civilization and precedes the state. Almost everything a society depends upon — the raising of children, the care of the old, the transmission of language and belief, the ordinary work of holding a community together — happens there first.",
        },
        {
          type: "paragraph",
          text: "An economy that makes family formation financially impossible is disordered. So is a labour system that treats parenthood as an inconvenience, and a housing market that turns ownership into an unattainable privilege. These are not private misfortunes; they are policy outcomes, and they can be changed by policy.",
        },
        {
          type: "paragraph",
          text: "We therefore support affordable housing, family taxation, parental support, stable employment and the availability of time outside economic production. Europa's demographic renewal should come principally from making family life possible for Europeans themselves.",
        },
      ] satisfies readonly ContentBlock[],
    },

    "nation-and-continuity": {
      title: "Nation and Continuity",
      statement:
        "European nations have a legitimate right to preserve their historical identity, culture and continuity.",
      summary: "The nation as an intergenerational community, not an administrative unit.",
      body: [
        {
          type: "paragraph",
          text: "Humanity is universal; civilization is particular. People belong not only to humanity in the abstract but to actual communities shaped by history — communities held together by memory, language, custom, institutions, territory and a sense of common destiny.",
        },
        {
          type: "paragraph",
          text: "Equality of human dignity does not require that every country become culturally interchangeable with every other. A Polish city should remain recognizably Polish, an Italian city recognizably Italian, a French village recognizably French.",
        },
        {
          type: "paragraph",
          text: "Preserving the historical cultures and peoples of Europa is no more inherently hostile than preserving the cultures and historical identities of any other civilization. We defend continuity, and we defend it for everyone.",
        },
      ] satisfies readonly ContentBlock[],
    },

    "immigration-and-integration": {
      title: "Immigration and Integration",
      statement:
        "Immigration should be limited to levels compatible with genuine integration and social stability.",
      summary: "Borders as legitimate institutions; citizenship as membership.",
      body: [
        {
          type: "paragraph",
          text: "Immigration policy must serve the long-term common good of the receiving country. No society has an unlimited capacity for demographic change without consequences for social trust, housing, infrastructure, cultural continuity and political cohesion.",
        },
        {
          type: "paragraph",
          text: "Citizenship should represent membership rather than mere residence. Naturalization should require real knowledge of the national language, history and institutions, respect for the constitutional order, and genuine attachment to the country.",
        },
        {
          type: "statement",
          text: "Those who lawfully become citizens must be treated as citizens.",
        },
        {
          type: "paragraph",
          text: "That commitment is not a qualification or an afterthought. Membership, once granted, is full. Our argument concerns the scale and terms of admission, and it is directed at policy — never at the people who have arrived under it.",
        },
      ] satisfies readonly ContentBlock[],
    },

    europe: {
      title: "Europa",
      statement:
        "A civilizational community of sovereign nations, cooperating where cooperation serves them.",
      summary: "Unity without uniformity; subsidiarity as the governing rule.",
      body: [
        {
          type: "paragraph",
          text: "European unity should not require the dissolution of European nations. We reject both absolute national isolation and the transformation of Europa into a centralized post-national administrative state.",
        },
        {
          type: "paragraph",
          text: "The governing principle should be subsidiarity: nothing ought to be decided at a higher level when it can be decided competently at a lower one. The village should not surrender unnecessarily to the region, the region to the nation, or the nation to continental institutions.",
        },
        {
          type: "paragraph",
          text: "That still leaves a great deal Europeans can only do together — defense, borders, strategic infrastructure, science, environmental protection, medicine, energy resilience and strategic industry. Our vision is not a uniform Europa, but a Europa whose diversity remains distinctly European.",
        },
      ] satisfies readonly ContentBlock[],
    },

    "economic-order": {
      title: "Economic Order",
      statement:
        "Enterprise is legitimate; economic institutions remain subordinate to the common good.",
      summary: "Neither unrestricted capitalism nor centralized socialism.",
      body: [
        {
          type: "paragraph",
          text: "Private property, enterprise, profit and economic success are all legitimate. None of them is the highest purpose of a society. The corporation is a legal and economic instrument — indispensable, and not sovereign.",
        },
        {
          type: "paragraph",
          text: "Where firms produce useful goods, create livelihoods, develop knowledge and serve the places they operate in, they should prosper. Where concentrated economic power begins to dominate political institutions, hollow out viable communities or monopolize essential markets, society has the legitimate authority to restrain it.",
        },
        {
          type: "paragraph",
          text: "This is not a position against business. It is a position against domination. Our economic ideal is distributist in ownership and corporatist in organization: many proprietors rather than few.",
        },
      ] satisfies readonly ContentBlock[],
    },

    property: {
      title: "Property",
      statement:
        "A free society requires widespread ownership rather than permanent dependency upon a small number of institutions.",
      summary: "The remedy for concentration is distribution, not abolition.",
      body: [
        {
          type: "paragraph",
          text: "Property is a source of independence and responsibility. Someone who owns a home, a holding, a workshop or a share of the firm they work in has a standing in society that no amount of consumption replaces.",
        },
        {
          type: "paragraph",
          text: "The answer to concentrated ownership is therefore not the abolition of property but its wider distribution: home ownership, family-owned enterprises, independent trades, small and medium-sized firms, cooperatives and employee ownership, family agriculture, local and regional banking.",
        },
        {
          type: "paragraph",
          text: "A society in which millions own nothing while a few institutions own nearly everything cannot meaningfully be described as a society of property owners, whatever its laws say about property.",
        },
      ] satisfies readonly ContentBlock[],
    },

    work: {
      title: "Work",
      statement: "Work possesses dignity, but work is not the purpose of human existence.",
      summary: "An economy should provide the basis for a life, not consume it.",
      body: [
        {
          type: "paragraph",
          text: "Through work people participate in society, acquire competence, make useful things and support families. That is real, and it deserves respect — particularly in craftsmanship, agriculture, engineering, care work, teaching and the skilled trades.",
        },
        {
          type: "paragraph",
          text: "But an economy is meant to provide the material foundation for human life, not to consume the lives it was built to support. Where productivity rises, some part of the gain should appear as security, leisure, family time and independence rather than solely as output.",
        },
        {
          type: "paragraph",
          text: "Automation should relieve people of genuinely degrading labour. It should not become an unexamined goal to remove human participation from every productive activity. Human competence is itself a social good.",
        },
      ] satisfies readonly ContentBlock[],
    },

    technology: {
      title: "Technology",
      statement:
        "Technology should strengthen human competence, autonomy and community rather than reorganize society around technological necessity.",
      summary: "Against technological inevitability, not against technology.",
      body: [
        {
          type: "paragraph",
          text: "Technological development is not the same thing as human progress. A society can grow more capable while becoming socially weaker, more centralized and less free.",
        },
        {
          type: "paragraph",
          text: "We reject technological inevitability — the assumption that whatever can be built must be adopted, and that whatever raises efficiency counts as progress. A tool introduced as optional can become economically necessary; what becomes necessary reshapes institutions; institutions then reorganize society around it.",
        },
        {
          type: "paragraph",
          text: "Citizens should retain meaningful access to physical money, face-to-face public services, repairable products, local commerce, private space free of permanent surveillance, and human decision-makers where legal or moral consequences are serious. The existence of a capability creates no obligation to deploy it.",
        },
      ] satisfies readonly ContentBlock[],
    },

    environment: {
      title: "Environment",
      statement:
        "Land, water and living systems are inheritances to cultivate, protect and transmit.",
      summary: "Christian stewardship rather than either extraction or misanthropy.",
      body: [
        {
          type: "paragraph",
          text: "Forests, rivers, farmland, mountains, coastlines and biodiversity are not disposable commodities. A generation may use them and is obliged to maintain them; it does not own them outright.",
        },
        {
          type: "paragraph",
          text: "We reject an environmentalism that treats humanity as inherently parasitic, and equally an economics in which any destruction is acceptable provided it raises short-term output. Policy should favour local agriculture, healthy soils, clean water, durable and repairable products, regional supply chains, responsible forestry and the restoration of damaged ecosystems.",
        },
        {
          type: "paragraph",
          text: "The countryside should be neither an extraction zone nor a museum from which ordinary life has been removed. Man belongs within nature — as its steward, answerable for what he leaves behind.",
        },
      ] satisfies readonly ContentBlock[],
    },

    architecture: {
      title: "Architecture",
      statement: "Public building should respect human scale, local materials and regional tradition.",
      summary: "Civilization is expressed physically, and can be built well again.",
      body: [
        {
          type: "paragraph",
          text: "Architecture shapes how people understand beauty, belonging and continuity. European towns should stop treating ugliness and placelessness as marks of progress.",
        },
        {
          type: "paragraph",
          text: "Historic buildings, churches, streetscapes and monuments should be preserved wherever reasonably possible. New development should produce places people can inhabit across generations, rather than disposable environments designed around traffic flows, investment portfolios and short construction cycles.",
        },
        {
          type: "statement",
          text: "A civilization confident in itself should be capable of building beautifully again.",
        },
      ] satisfies readonly ContentBlock[],
    },

    education: {
      title: "Education",
      statement: "Education should transmit civilization before attempting to transform it.",
      summary: "Inheritance first; parents as primary educators.",
      body: [
        {
          type: "paragraph",
          text: "Every generation has an obligation to introduce the next to what it received. Serious study of Christianity, of European and national history, of classical civilization, philosophy, literature, science, mathematics, music, art, craftsmanship and civic responsibility belongs in that inheritance.",
        },
        {
          type: "paragraph",
          text: "Historical understanding should be honest about failure and crime without degenerating into the teaching that European civilization amounts to little more than accumulated guilt. A people unable to respect its ancestors will eventually cease to care about its descendants.",
        },
        {
          type: "paragraph",
          text: "Parents remain the primary educators of their children. Educational authority should respect parental responsibility and institutional pluralism.",
        },
      ] satisfies readonly ContentBlock[],
    },

    subsidiarity: {
      title: "Subsidiarity",
      statement: "Political authority should be exercised at the lowest competent level.",
      summary: "Distributed authority as a condition of political liberty.",
      body: [
        {
          type: "paragraph",
          text: "We reject both anarchic individualism and totalizing state power. Authority is necessary, because political communities require order. But authority must be distributed.",
        },
        {
          type: "paragraph",
          text: "Families should govern family matters, municipalities local matters, regions retain meaningful autonomy, and nations govern national matters. Higher authorities should intervene principally where lower institutions cannot adequately perform a necessary function.",
        },
        {
          type: "paragraph",
          text: "The concentration of social, economic, technological and governmental power in a small number of institutions makes genuine freedom impossible. Subsidiarity is not an administrative convenience; it is a principle of political liberty.",
        },
      ] satisfies readonly ContentBlock[],
    },

    democracy: {
      title: "Democracy",
      statement:
        "Constitutional government, broadened representation, and cooperation where the common good requires it.",
      summary: "Elections, limits, counterweights — and a party culture that serves.",
      body: [
        {
          type: "paragraph",
          text: "Government should have sufficient authority to defend the common good and remain restrained by law, by subsidiarity, by institutional counterweights and by the dignity of the person. We are committed to elections, to constitutional limits and to public participation.",
        },
        {
          type: "paragraph",
          text: "Representation should be broadened beyond professional party machines. Territorial representation can be complemented by the representation of families, municipalities, professions, workers, agriculture, universities and other enduring institutions of civil society.",
        },
        {
          type: "paragraph",
          text: "Political disagreement is legitimate and necessary; permanent partisan warfare is not. Where the enduring interests of a nation are concerned, parties should be capable of acting beyond partisan advantage. The state is necessary. The state is not God.",
        },
      ] satisfies readonly ContentBlock[],
    },

    "foreign-policy": {
      title: "Foreign Policy",
      statement: "Strategic independence, prudence, and a strong presumption against unnecessary war.",
      summary: "Independence rather than imperial ambition.",
      body: [
        {
          type: "paragraph",
          text: "European nations should be able to defend themselves, secure their borders and maintain strategic independence in food, energy, infrastructure, medicine and essential industry. Permanent dependence on distant powers for the basic conditions of national survival is not a settled arrangement; it is an unexamined risk.",
        },
        {
          type: "paragraph",
          text: "We also reject ideological wars intended to reconstruct foreign civilizations according to abstract political models. Different civilizations have different histories, and peaceful relations do not require cultural uniformity.",
        },
        {
          type: "paragraph",
          text: "Foreign policy should be governed by prudence, by legitimate national interest, by the defense of the innocent where that is realistically possible, and by a strong presumption against unnecessary war.",
        },
      ] satisfies readonly ContentBlock[],
    },
  },
};
