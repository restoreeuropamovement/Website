import type { JournalArticle } from "@/lib/content-types";
import { journalImages } from "@/content/images";

/**
 * Placeholder essays.
 *
 * These exist to establish the journal's format and typography. They are
 * written by the editorial desk, argue from the published programme, and make
 * no empirical claims that would require a source — so nothing here is a
 * fabricated statistic, study or quotation. Replace them with commissioned work
 * as it is written.
 */
export const PLACEHOLDER_NOTICE =
  "This is a placeholder essay. It illustrates the journal's format and argues from our published programme; it contains no empirical claims and cites no external sources.";

export const articles: readonly JournalArticle[] = [
  {
    slug: "the-price-of-a-place-to-live",
    title: "The Price of a Place to Live",
    subtitle: "What happens to a society when housing stops being housing",
    standfirst:
      "A dwelling can be treated as shelter or as an asset. A society gets very different results depending on which it chooses — and it has usually chosen without deciding.",
    category: "Economics",
    date: "2026-05-18",
    author: "Restore Europe Editorial Desk",
    readingMinutes: 9,
    hero: journalImages.portal,
    featured: true,
    body: [
      {
        type: "lead",
        text: "There is an argument about housing that never quite gets made, because it sounds too simple to be serious: a house is a thing people live in.",
      },
      {
        type: "paragraph",
        text: "Everyone agrees with this in the abstract and almost no institution is organised as though it were true. Housing is financed as an asset class, taxed as an asset class, reported on as an asset class, and defended politically as an asset class. The people inside the buildings appear in that account as a demand curve.",
      },
      {
        type: "paragraph",
        text: "Two functions are being asked of the same object. As shelter, a dwelling should be abundant, durable and cheap relative to a normal wage. As an investment, it should be scarce, appreciating and expensive relative to a normal wage.[^1] These are not different emphases. They are opposite requirements, and a society cannot satisfy both at once.",
      },
      { type: "subheading", text: "What the conflict costs" },
      {
        type: "paragraph",
        text: "The consequences are not confined to the housing market, because settling somewhere is a precondition of most of the other things people do. Marriage, children, local association, service on a parish or municipal body, the slow accumulation of the sort of knowledge that makes someone useful to a place — all of it assumes that a person expects to still be there.",
      },
      {
        type: "pullquote",
        text: "A generation that cannot buy cannot easily settle; a generation that cannot settle will not build the institutions the next one inherits.",
      },
      {
        type: "paragraph",
        text: "This is why housing belongs in a discussion of civilization rather than a discussion of markets. It is not that the market has failed to clear. It is that the thing being cleared was never only a commodity.",
      },
      { type: "subheading", text: "What follows from treating habitation as primary" },
      {
        type: "paragraph",
        text: "Our position is stated in the manifesto: land and housing should principally serve the function of habitation and community, rather than becoming endlessly appreciating financial instruments disconnected from wages.[^2] That is a premise, not a policy, but policies follow from it fairly directly.",
      },
      {
        type: "list",
        marker: "rule",
        items: [
          "Supply should be judged against the earnings of the people expected to live in the housing, not against investor appetite.",
          "Credit and tax treatment should favour ownership and occupancy over accumulation of dwellings held as portfolio assets.",
          "Building should be durable, because the cheapest house over a century is rarely the cheapest house in the first year.",
          "Planning should permit the kind of settlement people can actually inhabit — which is a question about streets and scale, not only about unit counts.",
        ],
      },
      {
        type: "paragraph",
        text: "None of this abolishes property; it distributes it. The remedy for concentrated ownership has never been to own nothing collectively but to own something individually, which is the whole of the distributist case and most of the reason we make it.",
      },
      {
        type: "statement",
        text: "Housing policy is demographic policy conducted by other means.",
      },
      {
        type: "paragraph",
        text: "A country that finds this problem insoluble has not encountered an economic law. It has made a series of choices, each defensible on its own terms, whose combined effect is that ordinary earnings no longer reach the thing ordinary life requires. Choices of that kind can be revisited.",
      },
    ],
    footnotes: [
      {
        id: 1,
        text: "Stated this starkly, the tension is a simplification: some appreciation is compatible with affordability where incomes rise faster. The point is the direction of the pressure, not a claim about any particular market.",
      },
      {
        id: 2,
        text: "Manifesto, section IX — Against the Domination of Finance.",
      },
    ],
    citations: [
      { label: "Manifesto IX", detail: "Against the Domination of Finance — the function of finance and the treatment of land." },
      { label: "Manifesto VII", detail: "The Economic Order — distributism in ownership, and the case for many proprietors." },
      { label: "Principle 8", detail: "Property — the remedy for concentration is distribution." },
    ],
    related: ["many-proprietors", "what-a-town-remembers"],
  },
  {
    slug: "the-optional-becomes-compulsory",
    title: "The Optional Becomes Compulsory",
    subtitle: "On how a convenience turns into a condition of participation",
    standfirst:
      "Technologies are adopted as choices and retained as requirements. The interesting question is what happens in the interval, and who is consulted during it.",
    category: "Technology",
    date: "2026-04-27",
    author: "Restore Europe Editorial Desk",
    readingMinutes: 8,
    hero: journalImages.vault,
    body: [
      {
        type: "lead",
        text: "No one votes to make a technology compulsory. The transition happens by a sequence so ordinary that it is rarely noticed while it is under way.",
      },
      {
        type: "paragraph",
        text: "A capability appears and is optional. Enough people adopt it that institutions begin to assume it. Once institutions assume it, declining becomes expensive; once declining is expensive, it stops being a real option. At that point the technology is not a tool a person uses but a condition of taking part in ordinary life.",
      },
      {
        type: "pullquote",
        text: "What becomes necessary reshapes institutions, and institutions then reorganise society around the requirements of the technology.",
      },
      {
        type: "paragraph",
        text: "This sequence is what we mean by technological inevitability, and rejecting it is not the same as rejecting technology.[^1] Medicine, sanitation, engineering and genuine scientific knowledge are not the adversary here. The adversary is a habit of mind that treats each step as already settled because the previous step was taken.",
      },
      { type: "subheading", text: "A test, rather than a position" },
      {
        type: "paragraph",
        text: "We do not think it is possible to rule on technologies in advance, and we are suspicious of political movements that claim to. What can be done is to ask a consistent set of questions before a capability is allowed to become a requirement.",
      },
      {
        type: "list",
        marker: "numbered",
        items: [
          "Does it increase or reduce the competence of the person using it?",
          "Can someone decline it and still take part in ordinary civic and commercial life?",
          "Does it concentrate or distribute institutional power?",
          "Does it leave a human decision-maker where the consequences are legal or moral?",
          "Is the dependency it creates reversible, and at what cost?",
        ],
      },
      {
        type: "paragraph",
        text: "These questions are not hostile to innovation. They are the questions any serious engineering culture asks about failure modes, applied to societies rather than to structures.",
      },
      { type: "subheading", text: "The residual right" },
      {
        type: "paragraph",
        text: "What follows is modest and specific: citizens should retain meaningful access to physical money, face-to-face public services, repairable products, local commerce, private space that is not observed by default, and human judgment in decisions of consequence.[^2]",
      },
      {
        type: "paragraph",
        text: "Each of these is sometimes described as nostalgia. None of them is. They are the practical form in which independence survives a technical transition — the arrangements that keep a choice a choice.",
      },
      {
        type: "statement",
        text: "The existence of a technological capability does not create an obligation to deploy it.",
      },
    ],
    footnotes: [
      {
        id: 1,
        text: "Manifesto, section X — Technology Must Serve Man, which distinguishes technological subordination from primitivism explicitly.",
      },
      {
        id: 2,
        text: "Manifesto, section XI — The Right to a Human-Scale Life.",
      },
    ],
    citations: [
      { label: "Manifesto X", detail: "Technology Must Serve Man — the rejection of technological inevitability." },
      { label: "Manifesto XI", detail: "The Right to a Human-Scale Life — the access citizens should retain." },
      { label: "Principle 10", detail: "Technology — judging tools by their effect on autonomy and competence." },
    ],
    related: ["many-proprietors", "rotations-longer-than-a-career"],
  },
  {
    slug: "what-a-town-remembers",
    title: "What a Town Remembers",
    subtitle: "Building as though the place will still be there",
    standfirst:
      "Beauty in public building is often treated as a luxury to be traded away first. It is better understood as evidence of what a community expects of its own future.",
    category: "Architecture",
    date: "2026-03-30",
    author: "Restore Europe Editorial Desk",
    readingMinutes: 7,
    hero: journalImages.colonnade,
    body: [
      {
        type: "lead",
        text: "Civilization is expressed physically. Whatever a society believes about itself, its buildings record what it was actually prepared to pay for.",
      },
      {
        type: "paragraph",
        text: "This is why the argument about architecture is rarely about taste, even when it is conducted in the language of taste. A street built to be inhabited for two centuries and a street built to be refinanced in fifteen years are not two styles. They are two different propositions about how long anyone expects to stay.",
      },
      {
        type: "paragraph",
        text: "Human scale, local materials and respect for what already stands are usually described as constraints on design. In practice they are the accumulated result of people solving local problems with local means over a long period — which is a reasonable definition of knowledge.",
      },
      {
        type: "pullquote",
        text: "A civilization confident in itself should be capable of building beautifully again.",
      },
      { type: "subheading", text: "The economics are not the obstacle they are said to be" },
      {
        type: "paragraph",
        text: "Durable construction is more expensive at the outset and frequently cheaper across the life of the building. The reason it loses anyway is that the initial cost falls on the developer while the life-cycle cost falls on everyone who lives there afterwards — a division that no single participant in the process has an interest in correcting.[^1]",
      },
      {
        type: "paragraph",
        text: "That is a structural problem rather than a cultural one, and it is the kind of problem public policy exists to address: aligning the horizon of the decision with the horizon of its consequences.",
      },
      { type: "subheading", text: "Preservation is not embalming" },
      {
        type: "paragraph",
        text: "Historic buildings, churches, streetscapes and monuments should be preserved wherever reasonably possible. But a town preserved so thoroughly that nobody can live or trade in it has not been saved; it has been converted into a display.",
      },
      {
        type: "paragraph",
        text: "The countryside faces the same pair of failures from opposite directions — an extraction zone on one side, a museum with the inhabitants removed on the other.[^2] The aim in both cases is a place that continues to be used by the people whose place it is.",
      },
      {
        type: "statement",
        text: "New development should create places people can inhabit across generations.",
      },
    ],
    footnotes: [
      {
        id: 1,
        text: "A general statement of the incentive structure, not a claim about any particular jurisdiction or project.",
      },
      {
        id: 2,
        text: "Manifesto, section XII — Stewardship of the Natural World.",
      },
    ],
    citations: [
      { label: "Manifesto XIII", detail: "Town, Village and Architecture." },
      { label: "Principle 12", detail: "Architecture — human scale, local materials, regional tradition." },
    ],
    related: ["the-price-of-a-place-to-live", "a-continent-of-particulars"],
  },
  {
    slug: "rotations-longer-than-a-career",
    title: "Rotations Longer Than a Career",
    subtitle: "Stewardship as a problem of time horizons",
    standfirst:
      "Forestry is the clearest case of a decision whose consequences arrive after everyone involved in making it has gone. Most environmental questions have the same shape.",
    category: "Environment",
    date: "2026-02-19",
    author: "Restore Europe Editorial Desk",
    readingMinutes: 7,
    hero: journalImages.terraces,
    body: [
      {
        type: "lead",
        text: "A stand of timber planted now will be felled by people not yet born, on the judgment of people already dead. Almost nothing else in economic life is arranged that way, and it is worth asking why forestry manages it at all.",
      },
      {
        type: "paragraph",
        text: "The answer is institutional rather than moral. Where forests have been held well over long periods, they have usually been held by bodies whose existence outlasts any individual — families expecting to remain, municipalities, foundations, religious houses. The horizon of the owner matched the horizon of the asset.",
      },
      {
        type: "pullquote",
        text: "A generation may use an inheritance, and must maintain it. It does not own it outright.",
      },
      {
        type: "paragraph",
        text: "Most environmental questions have this structure. Soil, water, fisheries, built heritage and biodiversity all reward patience and punish extraction, and all of them are routinely managed by parties whose relevant time horizon is much shorter than the resource's.",
      },
      { type: "subheading", text: "Two positions we do not hold" },
      {
        type: "paragraph",
        text: "We reject an environmentalism that treats humanity as inherently parasitic — a view that, taken seriously, has no account of why anything should be preserved for anyone.[^1] We equally reject an economics in which any destruction is acceptable provided it raises short-term output.",
      },
      {
        type: "paragraph",
        text: "Between them is a position that is neither novel nor complicated: man belongs within nature, as its steward, answerable for what he leaves behind. It has the advantage of explaining both why the natural world matters and why human beings are entitled to use it.",
      },
      { type: "subheading", text: "What it implies" },
      {
        type: "list",
        items: [
          "Local agriculture and healthy soils, as a matter of national resilience as much as ecology.",
          "Durable and repairable products, because disposability is a transfer of cost to the future.",
          "Regional supply chains a community can actually observe.",
          "Responsible forestry on rotations set by the forest rather than by the accounting period.",
          "Restoration of damaged ecosystems where restoration is genuinely possible.",
        ],
      },
      {
        type: "statement",
        text: "The countryside must not become either an extraction zone or a museum.",
      },
    ],
    footnotes: [
      {
        id: 1,
        text: "Manifesto, section XII. The rejection is of a specific premise about human beings, not of environmental protection, which the same section requires.",
      },
    ],
    citations: [
      { label: "Manifesto XII", detail: "Stewardship of the Natural World." },
      { label: "Principle 11", detail: "Environment — stewardship rather than extraction or misanthropy." },
    ],
    related: ["what-a-town-remembers", "many-proprietors"],
  },
  {
    slug: "many-proprietors",
    title: "Many Proprietors",
    subtitle: "Why the distributist case is not a compromise between two systems",
    standfirst:
      "Widespread ownership is often read as a midpoint between capitalism and socialism. It is better read as a distinct claim about what property is for.",
    category: "Civilization",
    date: "2026-01-22",
    author: "Restore Europe Editorial Desk",
    readingMinutes: 8,
    hero: journalImages.tracery,
    body: [
      {
        type: "lead",
        text: "The twentieth century arranged its economic arguments around a single axis, and the habit has outlived the century. Either property is private and concentration is the price of efficiency, or property is collective and the state holds it on everyone's behalf.",
      },
      {
        type: "paragraph",
        text: "Distributism does not sit between these positions. It asks a different question: not who should own productive property in principle, but how many people should own some of it in fact.",
      },
      {
        type: "paragraph",
        text: "Put that way, the two familiar systems converge more than they differ. In one, a small number of firms and funds hold nearly everything; in the other, a small number of agencies do. From the position of a person who owns nothing, the distinction is less significant than it appears in theory.[^1]",
      },
      {
        type: "pullquote",
        text: "The objective should be many proprietors rather than few proprietors.",
      },
      { type: "subheading", text: "What ownership does that income does not" },
      {
        type: "paragraph",
        text: "Property is not merely accumulated income. It confers a kind of standing: a margin against misfortune, a basis for independent judgment, a reason to take a long view of the place one lives in, and something to hand on. Income, however adequate, does none of these on its own.",
      },
      {
        type: "paragraph",
        text: "This is why we treat the forms of ownership as a political question rather than a technical one — home ownership, family firms, independent trades, cooperatives and employee ownership, family agriculture, local and regional banking. They are not sentimental preferences. They are the arrangements under which property is held by many people at once.",
      },
      { type: "subheading", text: "Pro-enterprise, anti-domination" },
      {
        type: "paragraph",
        text: "None of this is an argument against business, and we are careful not to let it be read as one. Firms that produce useful goods, create livelihoods and serve the places they operate in should prosper, and should be allowed to grow.",
      },
      {
        type: "paragraph",
        text: "The line we draw is at domination: the point at which concentrated economic power can set public policy, hollow out viable communities or monopolise the markets people have no alternative but to enter.[^2] A market with many participants needs defending precisely because it is valuable.",
      },
      {
        type: "statement",
        text: "A society in which millions own nothing is not a society of property owners, whatever its law says about property.",
      },
    ],
    footnotes: [
      {
        id: 1,
        text: "This is an argument about the distribution of ownership, not a claim that the two systems are equivalent in other respects. The manifesto rejects both, for different reasons, in section VII and section XX.",
      },
      {
        id: 2,
        text: "Manifesto, section VII — The Economic Order.",
      },
    ],
    citations: [
      { label: "Manifesto VII", detail: "The Economic Order — distributist in ownership, corporatist in organization." },
      { label: "Manifesto VIII", detail: "Corporatism, Guilds and the Common Good." },
      { label: "Principle 8", detail: "Property — widespread ownership against permanent dependency." },
    ],
    related: ["the-price-of-a-place-to-live", "the-optional-becomes-compulsory"],
  },
  {
    slug: "a-continent-of-particulars",
    title: "A Continent of Particulars",
    subtitle: "Subsidiarity as an argument about competence, not sentiment",
    standfirst:
      "Deciding things close to where their effects are felt is usually defended as a matter of identity. The stronger case is that it produces better decisions.",
    category: "Europe",
    date: "2025-12-08",
    author: "Restore Europe Editorial Desk",
    readingMinutes: 6,
    hero: journalImages.portal,
    body: [
      {
        type: "lead",
        text: "Subsidiarity is a word that survives in European political language mainly as a courtesy. It is invoked, agreed with, and then set aside on the grounds that the matter at hand happens to be an exception.",
      },
      {
        type: "paragraph",
        text: "Stated properly it is demanding: nothing should be governed at a higher level when it can be governed competently at a lower one. The village should not surrender unnecessarily to the region, the region to the nation, or the nation to continental institutions.",
      },
      {
        type: "paragraph",
        text: "The usual defence of this is cultural — that peoples should keep their own character. That defence is sound, and it is not the strongest one available. The stronger argument is epistemic: bodies close to a problem generally know more about it, and bear the consequences of getting it wrong.",
      },
      {
        type: "pullquote",
        text: "Our vision is not a uniform Europe. It is a Europe whose diversity remains distinctly European.",
      },
      { type: "subheading", text: "What it does not mean" },
      {
        type: "paragraph",
        text: "Subsidiarity is not a synonym for doing less together. A great deal can only be done in common: defense, borders, strategic infrastructure, science, environmental protection, medicine, energy resilience and strategic industry are all cases where the competent level is plainly a high one.[^1]",
      },
      {
        type: "paragraph",
        text: "Nor is it a licence for a municipality to claim competence it does not have. The test is whether the lower body can actually perform the function — which means giving it real powers and real resources, and then accepting that it will sometimes decide differently from the centre.",
      },
      {
        type: "statement",
        text: "This is not administrative convenience. It is a principle of political liberty.",
      },
      {
        type: "paragraph",
        text: "A Europe arranged this way would be harder to summarise and easier to live in. Poland would remain recognizably Polish, Italy recognizably Italian, France recognizably French — and together they would remain European, which is the only sense in which the word has ever meant anything.",
      },
    ],
    footnotes: [
      {
        id: 1,
        text: "Manifesto, section VI — Europe as a Civilization of Nations, which lists the areas of cooperation directly.",
      },
    ],
    citations: [
      { label: "Manifesto VI", detail: "Europe as a Civilization of Nations." },
      { label: "Manifesto XV", detail: "Authority and Subsidiarity." },
      { label: "Principle 14", detail: "Subsidiarity — authority at the lowest competent level." },
    ],
    related: ["what-a-town-remembers", "many-proprietors"],
  },
];
