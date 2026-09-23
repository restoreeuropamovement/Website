import type { ManifestoSectionData } from "@/lib/content-types";
import type { ManifestoText } from "./index";

export const manifestoMeta = {
  title: "Manifesto of European Integral Restorationism",
  subtitle: "For a Christian, European and Human-Scale Civilization",
  /**
   * No edition has been adopted by a founding assembly yet, so no date or
   * version is asserted here.
   */
  status: "Founding document · Text under review before formal adoption",
} as const;

/**
 * The manifesto, in full.
 *
 * Section numbering has been regularised: the received text numbered *Work* as
 * XIII (a second time) and *Restoration* as XXIII. They are set here as XVIII
 * and XXII so the sequence runs unbroken. No wording has been altered.
 */
export const manifestoSections: readonly ManifestoSectionData[] = [
  {
    id: "preamble",
    numeral: "—",
    title: "Preamble",
    summary: "Europe is a civilization, and an inheritance that was handed on rather than invented.",
    body: [
      { type: "lead", text: "Europe is more than a continent, a market, or an administrative space." },
      {
        type: "paragraph",
        text: "It is a civilization: the product of Christianity, classical inheritance, distinct historical peoples, languages and nations, generations of families, cultivated landscapes, towns and villages, churches and monasteries, art, philosophy, law, craftsmanship, sacrifice and memory.",
      },
      {
        type: "paragraph",
        text: "This inheritance was not created by abstract individuals detached from history. It was handed from one generation to another.",
      },
      {
        type: "paragraph",
        text: "Burke gave the idea its standing formulation in 1790, against a revolution that proposed to begin again from reason alone. A society, he wrote, is a partnership — and because the ends of that partnership cannot be reached within a single lifetime, it is a partnership “not only between those who are living, but between those who are living, those who are dead, and those who are to be born”. Whatever else is disputed in the pages that follow, that sentence is the premise underneath all of it.",
      },
      { type: "paragraph", text: "Yet modern Europe increasingly treats inheritance itself as suspect." },
      {
        type: "paragraph",
        text: "The dominant order has elevated individual autonomy above obligation, consumption above continuity, economic growth above community, technological capability above human judgment, and administrative uniformity above the particular character of peoples and places. It has progressively weakened the institutions that once stood between the isolated individual and centralized power: family, parish, guild, municipality, region and nation.",
      },
      { type: "paragraph", text: "We reject the assumption that this process constitutes inevitable progress." },
      {
        type: "paragraph",
        text: "We also reject the belief that restoration means mechanically recreating a particular century. The past contained injustice, poverty, violence and error. Restoration does not mean historical reenactment.",
      },
      {
        type: "paragraph",
        text: "It means recovering principles that modern society has discarded and applying them intelligently to the conditions of the present.",
      },
      {
        type: "paragraph",
        text: "Our aim is therefore neither revolution for its own sake nor conservation of the existing order.",
      },
      { type: "statement", text: "Our aim is restoration." },
    ],
  },
  {
    id: "moral-order",
    numeral: "I",
    title: "The Moral Order",
    summary: "Political society cannot be permanently neutral about the good it exists to protect.",
    body: [
      {
        type: "lead",
        text: "We reject the liberal proposition that political society can remain permanently neutral concerning the good.",
      },
      {
        type: "paragraph",
        text: "Every civilization embodies judgments about what deserves protection, what should be encouraged, what constitutes justice and what kind of human being it hopes to cultivate.",
      },
      {
        type: "paragraph",
        text: "We affirm that moral truth does not originate in the preferences of the individual, the commands of the state, market demand or technological possibility.",
      },
      { type: "statement", text: "Human beings possess dignity because they are persons created by God." },
      {
        type: "paragraph",
        text: "Political authority therefore exists neither to manufacture a new humanity nor merely to administer competing appetites. Its proper purpose is the common good: the social conditions under which persons, families and communities may live virtuously and flourish.",
      },
      {
        type: "paragraph",
        text: "European civilization cannot be understood apart from Christianity. We therefore affirm the Christian, and particularly Catholic, inheritance of Europe as a foundational element of its civilization.",
      },
      {
        type: "paragraph",
        text: "What we reject is not the existence of disagreement, but the doctrine that European public life must behave as though its own religious inheritance never existed.",
      },
    ],
  },
  {
    id: "person-not-atom",
    numeral: "II",
    title: "The Person Is Not an Atom",
    summary: "We begin not with the autonomous individual but with the person in relation.",
    body: [
      { type: "lead", text: "Liberal individualism begins with the autonomous individual." },
      { type: "statement", text: "We begin with the person-in-relation." },
      {
        type: "paragraph",
        text: "Every human being enters a world already containing parents, family, language, culture, homeland, duties, history and moral obligations. These are not meaningless constraints from which liberation must endlessly proceed. They are among the conditions that make a fully human life possible.",
      },
      { type: "paragraph", text: "Rights are real, but rights cannot survive without duties." },
      {
        type: "paragraph",
        text: "Freedom is real, but freedom is not simply the absence of restraint. Genuine freedom includes the capacity to pursue what is good.",
      },
      { type: "paragraph", text: "A healthy political order therefore balances:" },
      {
        type: "list",
        marker: "rule",
        items: [
          "freedom with responsibility,",
          "rights with duties,",
          "individual dignity with social obligation,",
          "authority with subsidiarity.",
        ],
      },
    ],
  },
  {
    id: "family",
    numeral: "III",
    title: "The Family",
    summary: "The first institution of civilization, which precedes the state and must be made materially possible.",
    body: [
      { type: "lead", text: "The family is the first institution of civilization and precedes the state." },
      {
        type: "paragraph",
        text: "We affirm the family formed around marriage between man and woman, the raising of children, intergenerational obligation and the care of the young and old as the fundamental social institution upon which political society depends.",
      },
      {
        type: "list",
        marker: "rule",
        items: [
          "An economy that makes family formation economically impossible is disordered.",
          "A labor system that treats parenthood as an inconvenience is disordered.",
          "A housing system that turns permanent ownership into an unattainable privilege is disordered.",
        ],
      },
      {
        type: "paragraph",
        text: "A culture that teaches permanent adolescence, consumerism and isolation cannot sustain civilization.",
      },
      {
        type: "paragraph",
        text: "Public policy should therefore make family formation materially possible through affordable housing, family taxation, parental support, stable employment and the availability of time outside economic production.",
      },
      {
        type: "paragraph",
        text: "The demographic renewal of Europe should come principally through making family life possible for Europeans themselves, not through treating permanent mass immigration as a substitute for the birth and continuity of future generations.",
      },
    ],
  },
  {
    id: "nation",
    numeral: "IV",
    title: "Nation, People and Homeland",
    summary: "Humanity is universal; civilization is particular. European peoples may keep their continuity.",
    body: [
      { type: "lead", text: "Humanity is universal. Civilization is particular." },
      {
        type: "paragraph",
        text: "People belong not only to humanity in the abstract but to actual communities shaped by history.",
      },
      {
        type: "paragraph",
        text: "The nation is therefore not merely an administrative jurisdiction. It is an intergenerational community united by historical memory, language, customs, institutions, territory and a sense of common destiny.",
      },
      { type: "paragraph", text: "European peoples have a legitimate interest in maintaining their historical continuity." },
      {
        type: "paragraph",
        text: "Equality of human dignity does not imply that every country must become culturally interchangeable with every other country.",
      },
      {
        type: "list",
        marker: "none",
        items: [
          "A Polish city should remain recognizably Polish.",
          "An Italian city should remain recognizably Italian.",
          "A French village should remain recognizably French.",
        ],
      },
      {
        type: "paragraph",
        text: "The preservation of the historical cultures and peoples of Europe is no more inherently hateful than the preservation of the cultures and historical identities of other civilizations.",
      },
      { type: "statement", text: "We therefore defend continuity." },
    ],
  },
  {
    id: "immigration",
    numeral: "V",
    title: "Immigration and Integration",
    summary: "Admission at levels compatible with genuine integration; citizenship as membership, not residence.",
    body: [
      { type: "lead", text: "Immigration policy must serve the long-term common good of the receiving nation." },
      {
        type: "paragraph",
        text: "No society possesses an unlimited capacity for demographic transformation without consequences for social trust, housing, cultural continuity, infrastructure and political cohesion.",
      },
      {
        type: "paragraph",
        text: "Immigration should therefore be limited to levels compatible with genuine integration, social stability and the demographic and cultural continuity of the receiving society.",
      },
      { type: "paragraph", text: "Citizenship should represent membership rather than mere residence." },
      {
        type: "paragraph",
        text: "Naturalization should require meaningful knowledge of the national language, history and institutions, respect for the constitutional order, and genuine attachment to the country.",
      },
      { type: "statement", text: "Those who lawfully become citizens must be treated as citizens." },
      {
        type: "paragraph",
        text: "Humanitarian obligations cannot be interpreted as requiring European societies to relinquish control over their demographic future.",
      },
      { type: "paragraph", text: "Borders are legitimate institutions." },
      {
        type: "paragraph",
        text: "Hospitality without order eventually destroys the conditions under which hospitality itself is possible.",
      },
    ],
  },
  {
    id: "europe",
    numeral: "VI",
    title: "Europe as a Civilization of Nations",
    summary: "Cooperation among sovereign nations, governed throughout by subsidiarity.",
    body: [
      { type: "lead", text: "European unity should not require the destruction of European nations." },
      {
        type: "paragraph",
        text: "We reject both absolute national isolation and the transformation of Europe into a centralized post-national administrative state.",
      },
      {
        type: "paragraph",
        text: "Europe should instead become a civilizational community of sovereign nations cooperating in areas where cooperation genuinely serves their shared interests.",
      },
      { type: "paragraph", text: "The principle governing European political organization should be subsidiarity:" },
      {
        type: "statement",
        text: "Nothing should be governed at a higher level when it can be governed competently at a lower one.",
      },
      {
        type: "list",
        marker: "rule",
        items: [
          "The village should not surrender unnecessarily to the region.",
          "The region should not surrender unnecessarily to the nation.",
          "The nation should not surrender unnecessarily to continental institutions.",
        ],
      },
      {
        type: "paragraph",
        text: "Europe should cooperate in defense, borders, strategic infrastructure, science, environmental protection and civilizational preservation while retaining the historical identities and political autonomy of its nations.",
      },
      { type: "paragraph", text: "Our vision is not a uniform Europe." },
      { type: "statement", text: "It is a Europe whose diversity remains distinctly European." },
    ],
  },
  {
    id: "economic-order",
    numeral: "VII",
    title: "The Economic Order",
    summary: "Neither unrestricted capitalism nor centralized socialism: many proprietors rather than few.",
    body: [
      { type: "lead", text: "We reject both unrestricted capitalism and centralized socialism." },
      { type: "statement", text: "Economic life exists for human beings. Human beings do not exist for economic life." },
      {
        type: "paragraph",
        text: "This position is older than we are. Leo XIII set out its shape in Rerum Novarum in 1891, defending the right to own productive property against socialism while condemning the conditions industrial capitalism had produced — refusing, in other words, to accept that the two available answers were the only ones. Hilaire Belloc pressed the argument further in The Servile State in 1912, predicting that a society with concentrated ownership would not become socialist but would settle into something else: security for the propertyless, purchased with permanent unfreedom. We think he read the direction of travel correctly.",
      },
      { type: "paragraph", text: "The corporation is a legal and economic instrument, not a sovereign institution." },
      {
        type: "paragraph",
        text: "Businesses perform an indispensable function when they produce useful goods, create livelihoods, develop knowledge and serve the communities within which they operate.",
      },
      { type: "paragraph", text: "But corporate power must remain subordinate to the common good." },
      {
        type: "paragraph",
        text: "A corporation should not possess the practical ability to dominate political institutions, destroy viable communities, manipulate citizens into permanent dependency, monopolize essential markets or reorganize society solely according to the requirements of profit and efficiency.",
      },
      {
        type: "list",
        marker: "none",
        items: ["Profit is legitimate.", "Enterprise is legitimate.", "Economic success is legitimate."],
      },
      { type: "paragraph", text: "But none of these constitutes the highest purpose of society." },
      { type: "paragraph", text: "The proper relationship must therefore be clear:" },
      {
        type: "statement",
        text: "The economy exists for the person, the family and the community; the person, the family and the community do not exist for the economy.",
      },
      { type: "paragraph", text: "Where corporations contribute to human flourishing, they should prosper." },
      {
        type: "paragraph",
        text: "Where concentrated corporate power threatens genuine competition, family life, political independence, human dignity or the survival of local communities, society possesses the legitimate authority to restrain it.",
      },
      {
        type: "paragraph",
        text: "We seek neither the abolition of private enterprise nor government ownership of economic life.",
      },
      {
        type: "paragraph",
        text: "We seek an economy in which enterprise remains a servant of civilization rather than becoming its master.",
      },
      {
        type: "paragraph",
        text: "Private property is an important source of independence and responsibility. The solution to excessive private ownership is therefore not the abolition of property but its wider distribution.",
      },
      { type: "paragraph", text: "Our economic ideal is distributist in ownership and corporatist in organization." },
      { type: "paragraph", text: "We seek a society characterized by:" },
      {
        type: "list",
        marker: "rule",
        items: [
          "widespread home ownership;",
          "family-owned enterprises;",
          "independent craftsmen and trades;",
          "small and medium-sized firms;",
          "cooperatives and employee ownership;",
          "family agriculture;",
          "local and regional banking;",
          "apprenticeships and vocational institutions;",
          "strong professional associations;",
          "limits on monopolistic concentration.",
        ],
      },
      {
        type: "paragraph",
        text: "A civilization in which millions own nothing while a small number of corporations, financial institutions or state agencies own almost everything cannot meaningfully be called a society of property owners.",
      },
      { type: "statement", text: "The objective should therefore be many proprietors rather than few proprietors." },
    ],
  },
  {
    id: "corporatism",
    numeral: "VIII",
    title: "Corporatism, Guilds and the Common Good",
    summary: "Vocational bodies with real standing in economic life — and independent of the state.",
    body: [
      {
        type: "lead",
        text: "The conflict between labor and capital should not be treated as the permanent organizing principle of economic life.",
      },
      {
        type: "paragraph",
        text: "Workers, employers, craftsmen, farmers and professions participate in a common economic organism.",
      },
      {
        type: "paragraph",
        text: "Modern versions of guilds, professional chambers and vocational corporations should therefore participate in economic governance.",
      },
      {
        type: "paragraph",
        text: "These institutions should establish professional standards, apprenticeships, labor conditions, mediation mechanisms and sectoral representation while remaining sufficiently independent of centralized state administration.",
      },
      {
        type: "paragraph",
        text: "Political representation itself may include not only territorial representation but structured representation of the principal social and vocational bodies of society.",
      },
      { type: "paragraph", text: "This corporatism must remain subordinate to subsidiarity." },
      {
        type: "paragraph",
        text: "We reject a system in which occupational organizations become mere instruments of an omnipotent state.",
      },
      { type: "statement", text: "Neither corporation nor government should absorb civil society." },
    ],
  },
  {
    id: "finance",
    numeral: "IX",
    title: "Against the Domination of Finance",
    summary: "Finance is necessary; financial domination is not. Land and housing are for habitation.",
    body: [
      { type: "lead", text: "Finance is necessary." },
      { type: "statement", text: "Financial domination is not." },
      {
        type: "paragraph",
        text: "The proper function of finance is to direct savings toward productive activity, housing, enterprise and long-term investment.",
      },
      {
        type: "paragraph",
        text: "An economy dominated by speculation, asset inflation, predatory debt and financial extraction gradually separates wealth from productive contribution.",
      },
      {
        type: "paragraph",
        text: "Public policy should therefore privilege productive investment over speculation and family ownership over permanent indebtedness.",
      },
      {
        type: "paragraph",
        text: "Land and housing should principally serve the function of habitation and community, not become endlessly appreciating financial instruments disconnected from wages.",
      },
      { type: "paragraph", text: "Markets are useful mechanisms." },
      { type: "statement", text: "They are not moral authorities." },
      {
        type: "paragraph",
        text: "Where the market undermines the foundations upon which society depends, political society possesses the right to regulate it.",
      },
    ],
  },
  {
    id: "technology",
    numeral: "X",
    title: "Technology Must Serve Man",
    summary: "Against technological inevitability. The machine must adapt itself to man.",
    body: [
      { type: "lead", text: "Technological development is not synonymous with human progress." },
      {
        type: "paragraph",
        text: "A society can become technologically more advanced while becoming socially weaker, psychologically less healthy, politically more centralized and environmentally more destructive.",
      },
      {
        type: "paragraph",
        text: "We therefore reject technological inevitability: the belief that whatever can be invented must be adopted and whatever increases efficiency must be considered progress.",
      },
      { type: "paragraph", text: "The technological system possesses a tendency toward expansion." },
      {
        type: "paragraph",
        text: "A technology introduced as optional may become economically necessary. What becomes necessary shapes institutions. Institutions then reorganize society around the requirements of the technology.",
      },
      { type: "paragraph", text: "Human beings eventually adapt themselves to the machine." },
      {
        type: "paragraph",
        text: "Ivan Illich described this sequence in Tools for Conviviality in 1973, arguing that a tool passes a second watershed beyond which it stops serving the purpose it was adopted for and begins imposing purposes of its own — his examples were medicine, schooling and the motor car, none of which he thought anyone had chosen to submit to. E. F. Schumacher published Small Is Beautiful the same year, asking what an economics would look like that took the scale of human life as a constraint rather than an inconvenience. Neither man was a reactionary, and neither is comfortable reading for us either.",
      },
      { type: "paragraph", text: "Our principle is the reverse:" },
      { type: "statement", text: "The machine must adapt itself to man." },
      {
        type: "paragraph",
        text: "Technology should be judged by whether it strengthens or weakens human autonomy, family life, community, meaningful work, privacy, political decentralization and the natural environment.",
      },
      {
        type: "paragraph",
        text: "We therefore distinguish between technology that serves genuine human needs and technology whose principal effect is dependency, surveillance, distraction or social atomization.",
      },
      {
        type: "paragraph",
        text: "Medicine, sanitation, scientific knowledge and genuinely beneficial engineering are not enemies.",
      },
      { type: "paragraph", text: "Neither must every traditional practice be preserved merely because it is traditional." },
      { type: "paragraph", text: "Our doctrine is not primitive romanticism." },
      { type: "statement", text: "It is technological subordination." },
    ],
  },
  {
    id: "human-scale-life",
    numeral: "XI",
    title: "The Right to a Human-Scale Life",
    summary: "Ordinary participation in society must not require total technological dependence.",
    body: [
      {
        type: "lead",
        text: "Modern citizens increasingly require technological systems simply to participate in ordinary society.",
      },
      { type: "paragraph", text: "This dependency should not be unlimited." },
      { type: "paragraph", text: "Citizens should retain meaningful access to:" },
      {
        type: "list",
        marker: "rule",
        items: [
          "physical money;",
          "face-to-face public services;",
          "non-digital identification where practicable;",
          "physical books and educational materials;",
          "repairable products;",
          "local commerce;",
          "private spaces free from permanent surveillance;",
          "human decision-makers in matters of serious legal or moral consequence.",
        ],
      },
      {
        type: "paragraph",
        text: "Children in particular should be protected from industries whose profit models depend upon maximizing psychological dependence and attention capture.",
      },
      {
        type: "paragraph",
        text: "Artificial intelligence and automation should be evaluated not merely according to productivity but according to their effects upon human competence, employment, autonomy and institutional power.",
      },
      {
        type: "statement",
        text: "The existence of a technological capability does not create an obligation to deploy it.",
      },
    ],
  },
  {
    id: "stewardship",
    numeral: "XII",
    title: "Stewardship of the Natural World",
    summary: "Nature is neither a commodity without limit nor a divinity — it is an inheritance held in trust.",
    body: [
      { type: "lead", text: "The natural world is neither a commodity without limit nor a divinity to be worshipped." },
      { type: "statement", text: "It is an inheritance entrusted to humanity." },
      {
        type: "paragraph",
        text: "Burke put the thought more exactly than we can. Writing in 1790, he described those alive at any moment as “temporary possessors and life-renters” in the commonwealth, who should not think themselves its entire masters. He was arguing about constitutions rather than forests, but the structure of the obligation is identical, and it is the reason this section sits in a political document at all.",
      },
      {
        type: "paragraph",
        text: "Forests, rivers, farmland, mountains, coastlines and biodiversity should be protected not only because they possess economic value but because human civilization itself depends upon a stable relationship with the natural world.",
      },
      { type: "paragraph", text: "We reject an environmentalism that views humanity as inherently parasitic." },
      {
        type: "paragraph",
        text: "We equally reject an economic ideology in which any destruction can be justified if it increases short-term output.",
      },
      { type: "paragraph", text: "Environmental policy should encourage:" },
      {
        type: "list",
        items: [
          "local agriculture,",
          "healthy soils,",
          "clean water,",
          "durable products,",
          "repair rather than disposability,",
          "regional supply chains,",
          "responsible forestry,",
          "restoration of damaged ecosystems,",
          "and settlement patterns that preserve both human community and natural landscapes.",
        ],
      },
      {
        type: "paragraph",
        text: "The countryside must not become either an industrial extraction zone or a museum from which ordinary human life has been expelled.",
      },
      { type: "statement", text: "Man belongs within nature, but as its steward." },
    ],
  },
  {
    id: "architecture",
    numeral: "XIII",
    title: "Town, Village and Architecture",
    summary: "Civilization is expressed physically. A confident society can build beautifully again.",
    body: [
      { type: "lead", text: "Civilization is expressed physically." },
      { type: "paragraph", text: "Architecture influences the way people understand beauty, belonging and continuity." },
      {
        type: "paragraph",
        text: "The case against mid-century planning was not made first by conservatives. Jane Jacobs made it in The Death and Life of Great American Cities in 1961, on the grounds that planners were destroying the dense, mixed, unglamorous street life that actually made neighbourhoods safe and habitable. Christopher Alexander and his colleagues tried to set out in A Pattern Language, in 1977, what the alternative would consist of in practice, down to the width of a doorway. We would rather borrow from people who did that work than assert a preference for beauty and leave it there.",
      },
      {
        type: "paragraph",
        text: "European towns should therefore cease treating ugliness and placelessness as signs of progress.",
      },
      {
        type: "paragraph",
        text: "Public architecture should respect human scale, local materials, regional traditions and the existing character of historic settlements.",
      },
      {
        type: "paragraph",
        text: "Historical buildings, churches, streetscapes and monuments should be preserved wherever reasonably possible.",
      },
      {
        type: "paragraph",
        text: "New development should create places people can inhabit across generations rather than disposable environments designed primarily around traffic flows, investment portfolios and short-term construction economics.",
      },
      { type: "statement", text: "A civilization confident in itself should be capable of building beautifully again." },
    ],
  },
  {
    id: "education",
    numeral: "XIV",
    title: "Education",
    summary: "Transmit the inheritance before attempting to transform it; parents remain the primary educators.",
    body: [
      { type: "lead", text: "Education should transmit civilization before attempting to transform it." },
      {
        type: "paragraph",
        text: "Every generation possesses an obligation to introduce the next to the inheritance it has received.",
      },
      { type: "paragraph", text: "Education should therefore include serious study of:" },
      {
        type: "list",
        items: [
          "Christianity,",
          "European and national history,",
          "classical civilization,",
          "philosophy,",
          "literature,",
          "science,",
          "mathematics,",
          "music,",
          "art,",
          "craftsmanship,",
          "and civic responsibility.",
        ],
      },
      {
        type: "paragraph",
        text: "Historical understanding should not degenerate into teaching young Europeans that their civilization constitutes little more than an accumulation of guilt.",
      },
      {
        type: "statement",
        text: "A people unable to respect its ancestors will eventually cease to care about its descendants.",
      },
      {
        type: "paragraph",
        text: "Parents remain the primary educators of their children, and educational authority should therefore respect parental responsibility and institutional pluralism.",
      },
    ],
  },
  {
    id: "subsidiarity",
    numeral: "XV",
    title: "Authority and Subsidiarity",
    summary: "Authority is necessary, but it must be distributed to the lowest competent level.",
    body: [
      { type: "lead", text: "We reject both anarchic individualism and totalizing state power." },
      { type: "paragraph", text: "Authority is necessary because political communities require order." },
      { type: "paragraph", text: "But authority must be distributed." },
      {
        type: "paragraph",
        text: "The principle has a name and a source. Pius XI set it out in Quadragesimo Anno in 1931: it is an injustice, and a disturbance of right order, to assign to a greater and higher association what lesser and subordinate bodies can do. He treated this as a question of justice rather than of efficient administration, which is a considerably stronger claim and a harder one to satisfy.",
      },
      {
        type: "paragraph",
        text: "The concentration of social, economic, technological and governmental power in a few institutions makes genuine freedom impossible.",
      },
      { type: "statement", text: "Political power should therefore be exercised at the lowest competent level." },
      {
        type: "list",
        marker: "rule",
        items: [
          "Families should govern family matters.",
          "Municipalities should govern local matters.",
          "Regions should retain meaningful autonomy.",
          "Nations should govern national matters.",
        ],
      },
      {
        type: "paragraph",
        text: "Higher authorities should intervene principally when lower institutions cannot adequately perform a necessary function.",
      },
      { type: "paragraph", text: "This is not administrative convenience." },
      { type: "statement", text: "It is a principle of political liberty." },
      {
        type: "paragraph",
        text: "We should be candid about where this leaves the argument. The European treaties already profess subsidiarity: Article 5 of the Treaty on European Union binds the Union to act only where the objectives of a proposed action cannot be sufficiently achieved by the member states. Our quarrel is therefore not with the principle, which our opponents also claim to hold, but with who is permitted to judge whether it has been kept, and with what follows when the answer is no.",
      },
    ],
  },
  {
    id: "democracy",
    numeral: "XVI",
    title: "Democracy, Representation and the State",
    summary: "Constitutional government, broadened representation, and cooperation where the common good requires it.",
    body: [
      { type: "lead", text: "Liberalism and democracy are not identical concepts." },
      {
        type: "paragraph",
        text: "A society can reject philosophical liberalism while retaining elections, representation, constitutional limits and public participation.",
      },
      {
        type: "paragraph",
        text: "Government should possess sufficient authority to defend the common good, yet remain restrained by law, subsidiarity, institutional counterweights and the dignity of the person.",
      },
      { type: "paragraph", text: "Representation should be broadened beyond professional party machines." },
      {
        type: "paragraph",
        text: "Territorial representation may be complemented by representation of families, municipalities, professions, workers, agriculture, universities and other enduring institutions of civil society.",
      },
      {
        type: "paragraph",
        text: "Political leadership should be understood as stewardship rather than permanent ideological mobilization.",
      },
      { type: "paragraph", text: "The state is necessary." },
      { type: "statement", text: "The state is not God." },
      {
        type: "paragraph",
        text: "Political disagreement is legitimate and necessary. A healthy political order does not require all parties to think alike.",
      },
      { type: "paragraph", text: "Yet political competition must not become an end in itself." },
      {
        type: "paragraph",
        text: "Where the fundamental interests of the nation and its people are concerned, political parties should possess the capacity to act beyond partisan advantage. Questions concerning national security, critical infrastructure, demographic stability, the protection of families, constitutional continuity and the long-term prosperity of the people should not be reduced to permanent electoral warfare.",
      },
      { type: "paragraph", text: "Opposition is necessary, but opposition for its own sake is destructive." },
      {
        type: "paragraph",
        text: "The purpose of political parties is not merely to defeat one another. Their first obligation is to serve the people and the political community to which they belong.",
      },
      {
        type: "paragraph",
        text: "We therefore seek a political culture in which serious disagreement remains possible while cooperation across party lines is expected whenever the enduring common good of the nation requires it.",
      },
      {
        type: "list",
        marker: "none",
        items: [
          "The nation must stand above the party.",
          "The common good must stand above faction.",
          "The people must stand above the political class.",
        ],
      },
    ],
  },
  {
    id: "culture",
    numeral: "XVII",
    title: "Culture Against Homogenization",
    summary: "Languages, traditions and craftsmanship belong to ordinary life, not to the tourist economy.",
    body: [
      {
        type: "lead",
        text: "Global consumer culture increasingly makes cities, lifestyles, entertainment and commercial environments interchangeable.",
      },
      { type: "statement", text: "We oppose this homogenization." },
      {
        type: "paragraph",
        text: "Languages, regional dialects, folk traditions, festivals, music, cuisine, craftsmanship and historical memory should not survive merely as tourist attractions.",
      },
      { type: "paragraph", text: "They should form part of ordinary life." },
      {
        type: "paragraph",
        text: "Cultural policy should strengthen local creation rather than merely importing whatever possesses the greatest global commercial reach.",
      },
      {
        type: "paragraph",
        text: "European civilization should remain open to learning from other civilizations without dissolving itself into them.",
      },
      { type: "statement", text: "Exchange is not the same as erasure." },
    ],
  },
  {
    id: "work",
    numeral: "XVIII",
    title: "Work",
    summary: "Work possesses dignity, but work is not the purpose of human existence.",
    body: [
      { type: "lead", text: "Work is more than a transaction in which time is exchanged for wages." },
      { type: "statement", text: "Work possesses dignity, but work is not the purpose of human existence." },
      {
        type: "paragraph",
        text: "Human beings were not created merely to produce, consume, accumulate and repeat the cycle until death.",
      },
      {
        type: "paragraph",
        text: "Economic systems should provide the material foundation for human flourishing rather than consume the lives they are supposed to support.",
      },
      {
        type: "paragraph",
        text: "A society is disordered when ordinary people must surrender nearly all of their waking lives merely to maintain housing, food and basic security; when parents scarcely see their children; when communities disappear because everyone is exhausted by work; or when increased productivity enriches institutions while producing no corresponding increase in human freedom.",
      },
      { type: "paragraph", text: "Economic progress should therefore be judged partly by a simple question:" },
      { type: "statement", text: "Does it give ordinary people greater command over their own lives?" },
      {
        type: "paragraph",
        text: "Productivity should ultimately create greater security, more leisure, stronger families and greater freedom from unnecessary toil.",
      },
      {
        type: "paragraph",
        text: "The purpose of economic life is not to maximize the number of hours that can be extracted from human beings.",
      },
      {
        type: "paragraph",
        text: "People require time for family, friendship, worship, contemplation, nature, craftsmanship, learning, community, celebration and rest.",
      },
      { type: "paragraph", text: "These are not economically unproductive interruptions to life." },
      { type: "paragraph", text: "They are among the reasons for which economic life exists." },
      {
        type: "paragraph",
        text: "We reject a civilization in which human beings become servants of systems originally created to serve them.",
      },
      {
        type: "statement",
        text: "Man must work in order to live. He must never be reduced to living merely in order to work.",
      },
      {
        type: "paragraph",
        text: "Through work, human beings participate in society, acquire competence, produce useful things and support families.",
      },
      {
        type: "paragraph",
        text: "An economy that destroys meaningful occupations merely because their replacement increases numerical efficiency should therefore consider what is lost as well as what is gained.",
      },
      {
        type: "paragraph",
        text: "Craftsmanship, agriculture, engineering, care work, teaching and skilled trades deserve renewed social status.",
      },
      {
        type: "paragraph",
        text: "Automation should free people from genuinely degrading labor where possible, but it should not become an unquestioned objective to eliminate human participation from every economically productive activity.",
      },
      { type: "statement", text: "Human competence is itself a social good." },
    ],
  },
  {
    id: "foreign-policy",
    numeral: "XIX",
    title: "Foreign Policy",
    summary: "Strategic independence, prudence, and a strong presumption against unnecessary war.",
    body: [
      { type: "lead", text: "Europe should seek independence rather than imperial ambition." },
      {
        type: "paragraph",
        text: "European nations should possess the capacity to defend themselves, secure their borders and maintain strategic independence in food, energy, infrastructure, medicine and essential industry.",
      },
      {
        type: "paragraph",
        text: "We reject permanent dependence upon distant powers for the basic conditions of national survival.",
      },
      {
        type: "paragraph",
        text: "We also reject ideological wars whose purpose is to reconstruct foreign civilizations according to abstract political models.",
      },
      { type: "paragraph", text: "Different civilizations possess different histories." },
      { type: "statement", text: "Peaceful relations do not require cultural uniformity." },
      {
        type: "paragraph",
        text: "Foreign policy should be governed by prudence, legitimate national interest, defense of the innocent where realistically possible, and a strong presumption against unnecessary war.",
      },
    ],
  },
  {
    id: "what-we-reject",
    numeral: "XX",
    title: "What We Reject",
    summary: "Ten refusals, stated plainly — of ideas and systems, not of peoples.",
    body: [
      {
        type: "list",
        marker: "rule",
        items: [
          "We reject **liberal individualism**, because society is more than a contract between autonomous individuals.",
          "We reject **materialism**, because man cannot be reduced to economic appetite.",
          "We reject **communism**, because abolishing property and subordinating society to the centralized state destroys both freedom and organic social institutions.",
          "We reject **laissez-faire absolutism**, because markets must remain subordinate to the common good.",
          "We reject **technocracy**, because expertise and technological capability do not confer moral authority.",
          "We reject **consumerism**, because acquisition cannot provide a civilization with purpose.",
          "We reject **historical nihilism**, because a civilization unable to love anything in its inheritance cannot survive.",
          "We reject **political terrorism**, because the deliberate destruction of innocent life cannot build a moral order.",
          "We reject **totalitarianism**, because neither party, corporation, ideology nor state may rightfully absorb the whole of human life.",
          "And we reject **the worship of progress for progress's sake**.",
        ],
      },
    ],
  },
  {
    id: "what-we-seek",
    numeral: "XXI",
    title: "What We Seek",
    summary: "The positive programme: what a restored European order would look like.",
    body: [
      {
        type: "lead",
        text: "We seek a Europe in which the church bell, the family table, the local market, the workshop, the farm, the town square, the university, the forest and the nation once again belong to a coherent social order.",
      },
      {
        type: "list",
        marker: "rule",
        items: [
          "We seek nations confident enough to preserve themselves without requiring hatred of others.",
          "We seek families capable of raising children without economic ruin.",
          "We seek widespread ownership rather than permanent dependency.",
          "We seek markets without market worship.",
          "We seek authority without totalitarianism.",
          "We seek technology without technological domination.",
          "We seek environmental stewardship without contempt for humanity.",
          "We seek Christianity without coercing belief.",
          "We seek patriotism.",
          "We seek continuity without stagnation.",
          "We seek progress where progress is genuinely human and restraint where progress has become merely another word for dissolution.",
        ],
      },
    ],
  },
  {
    id: "restoration",
    numeral: "XXII",
    title: "Restoration",
    summary: "History cannot be reversed, but direction can be changed.",
    body: [
      { type: "lead", text: "Our movement does not demand that Europe become a museum." },
      { type: "paragraph", text: "Nor do we demand that history be reversed." },
      { type: "paragraph", text: "History cannot be reversed." },
      { type: "statement", text: "But direction can be changed." },
      {
        type: "list",
        marker: "none",
        items: [
          "Institutions can be rebuilt.",
          "Families can recover confidence.",
          "Communities can regain power.",
          "Property can again become widespread.",
          "Technology can again become a servant.",
          "Landscapes can be restored.",
          "Churches can again fill with life.",
          "Nations can remember what they are.",
          "Europe can become recognizably itself.",
        ],
      },
      { type: "paragraph", text: "The choice before us is therefore not simply between past and future." },
      { type: "paragraph", text: "It is between two different futures." },
      {
        type: "paragraph",
        text: "One is increasingly centralized, technological, rootless, commodified and interchangeable: a civilization in which man possesses greater power over the external world while exercising progressively less control over the systems governing his own life.",
      },
      { type: "paragraph", text: "The other accepts limits." },
      {
        type: "paragraph",
        text: "It recognizes that some things must be inherited rather than invented, protected rather than optimized, loved rather than priced.",
      },
      { type: "statement", text: "We choose the second." },
      {
        type: "list",
        marker: "rule",
        items: [
          "We choose family over atomization.",
          "Community over isolation.",
          "Property over dependency.",
          "Stewardship over exploitation.",
          "Beauty over placelessness.",
          "Nation over rootlessness.",
          "Faith over nihilism.",
          "Human judgment over technological inevitability.",
          "Civilization over dissolution.",
          "And restoration over surrender.",
        ],
      },
      { type: "paragraph", text: "Europe must once again become conscious of what it is." },
      { type: "paragraph", text: "Not because other civilizations are without value." },
      {
        type: "paragraph",
        text: "Because no civilization can survive after deciding that its own continuation is morally unnecessary.",
      },
      { type: "paragraph", text: "Our inheritance was not ours to create." },
      { type: "paragraph", text: "It is not ours to discard." },
      { type: "statement", text: "It is ours to receive, renew and transmit." },
    ],
  },
];

/**
 * The same words in the shape a translation has to match.
 *
 * Derived rather than authored twice. `manifestoSections` keeps its own shape
 * because the page, the plain-text download and the policy catalogue's
 * cross-references all read it; this is the view the dictionary is typed on.
 * Every other module under `content/` exports its words under one name, and
 * `npm run test:i18n` compares each `en.ts` with the language files beside it —
 * without this the manifesto would be the one document outside that check.
 */
export const manifestoText: ManifestoText = {
  meta: {
    title: manifestoMeta.title,
    subtitle: manifestoMeta.subtitle,
    status: manifestoMeta.status,
  },
  sections: Object.fromEntries(
    manifestoSections.map((section) => [
      section.id,
      { title: section.title, summary: section.summary, body: section.body },
    ]),
  ) as ManifestoText["sections"],
};
