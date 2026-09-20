import type { PolicyCategoryData, PolicyEntry, PolicyStatus } from "@/lib/content-types";

/**
 * The policy catalogue.
 *
 * The manifesto carries the worldview; this answers the narrower question of
 * what the movement holds on a particular issue. Every entry carries a status,
 * so an adopted position can be told apart from one that has not been decided,
 * and an entry that departs from existing law says so in its own words rather
 * than describing itself as settled.
 */
export const policyMeta = {
  eyebrow: "Positions",
  title: "Policy Catalogue",
  version: "Version 0.1",
  /** ISO date of the catalogue as a whole. */
  date: "2026-09-15",
  framework: "European Integral Restorationism",
  lede:
    "This catalogue answers a narrow question: what does Restore Europe hold on this issue? It does not replace the manifesto. The manifesto sets out the worldview; this sets out searchable, topic-by-topic positions.",
  body: [
    "Where Catholic moral teaching is clear, Restore Europe generally adopts it as the moral baseline, and states civil-law implementation separately. One departure is recorded explicitly: on capital punishment Restore Europe takes the older traditional allowance for exceptional cases rather than the contemporary abolitionist position.",
    "The catalogue distinguishes the constitutional order Restore Europe seeks from European law as it currently stands. Several positions — on nationality, on deprivation of citizenship, on speech and on the public standing of religion — would require constitutional or treaty change before they could be enacted in particular European states. Where that is so, the entry says it.",
  ],
} as const;

/**
 * Shown wherever the catalogue is listed. The version number is not decoration:
 * these are working positions and several are recorded as undecided.
 */
export const CATALOGUE_NOTICE =
  "This is version 0.1 of a working document. Entries marked Open have no adopted position, and entries marked Derived have not had their implementation settled. Nothing here should be read as a finished legislative programme.";

/** What each status means. Shown on the index, above the catalogue itself. */
export const statusLegend: readonly {
  readonly status: PolicyStatus;
  readonly description: string;
}[] = [
  {
    status: "Manifesto Core",
    description:
      "Explicitly established by the Manifesto of European Integral Restorationism.",
  },
  {
    status: "Agreed Policy",
    description: "A position specified for this catalogue after the manifesto was written.",
  },
  {
    status: "Derived",
    description:
      "Strongly implied by the manifesto or by an agreed position, but the implementation is not settled.",
  },
  { status: "Open", description: "No position has been adopted." },
];

export const policyCategories: readonly PolicyCategoryData[] = [
  {
    id: "constitutional",
    numeral: "I",
    title: "Constitutional, Religious and Moral Order",
    summary: "The place of religion in public life, and the moral questions law cannot avoid.",
  },
  {
    id: "family",
    numeral: "II",
    title: "Family, Demography and Social Order",
    summary: "The household as the first institution, and what public policy owes it.",
  },
  {
    id: "nation",
    numeral: "III",
    title: "Nation, Citizenship, Immigration and Europe",
    summary: "Membership of a political community, and the European order between nations.",
  },
  {
    id: "economy",
    numeral: "IV",
    title: "Economy, Property, Finance and Work",
    summary: "Ownership, enterprise, credit and the dignity of labour.",
  },
  {
    id: "technology",
    numeral: "V",
    title: "Technology, AI and Human-Scale Life",
    summary: "What may be built, what should be deployed, and what must remain within reach.",
  },
  {
    id: "education",
    numeral: "VI",
    title: "Education, Culture and Public Life",
    summary: "What is transmitted to the next generation, and who decides it.",
  },
  {
    id: "government",
    numeral: "VII",
    title: "Government, Justice and Public Order",
    summary: "Authority, its limits, and the treatment of those who break the law.",
  },
  {
    id: "healthcare",
    numeral: "VIII",
    title: "Healthcare",
    summary: "Access to necessary care, and the ethics practised within it.",
  },
  {
    id: "environment",
    numeral: "IX",
    title: "Environment, Land and Settlement",
    summary: "Stewardship of an inheritance that was not made by us.",
  },
  {
    id: "foreign-policy",
    numeral: "X",
    title: "Foreign Policy and Defense",
    summary: "Strategic independence, and a standing presumption against unnecessary war.",
  },
];

export const policyEntries: readonly PolicyEntry[] = [
  /* ------------------------------------------------ I. Constitutional order */
  {
    slug: "catholic-confessional-state",
    title: "Catholic Confessional State",
    category: "constitutional",
    status: "Agreed Policy",
    shortAnswer:
      "Restore Europe supports formal constitutional recognition of Catholicism as the principal public religion, and rejects the claim that the state can be morally or religiously neutral.",
    position: [
      "Restore Europe supports a deeply embedded Catholic confessional political order. The state should formally recognize Catholicism as the principal public religion and should not claim moral or religious neutrality.",
    ],
    policies: [
      "Catholicism should receive formal constitutional recognition.",
      "Catholic moral teaching may inform public law and public institutions.",
      "The Church and the temporal state remain institutionally distinct, but the state is not metaphysically supreme.",
      "Catholic feast days, churches, symbols, processions, schools and public traditions should be protected.",
      "The state should cooperate with the Church on family, education, morality and social questions.",
    ],
    principle:
      "The state governs temporal affairs; the Church governs spiritual affairs; temporal authority remains subject to the higher moral order.",
    limits: [
      "Restore Europe does not support forced conversion.",
      "This model is not direct clerical government of ordinary state administration.",
    ],
    implementationNote:
      "Formal establishment of a confessional order would require constitutional change in most European states, and is stated here as the order Restore Europe seeks rather than as a description of current law.",
    manifestoBasis: ["moral-order", "democracy"],
    related: ["blasphemy-and-sacrilege", "state-schools-and-christianity", "catholic-medical-ethics"],
    keywords: ["Catholic state", "confessional state", "integralism", "church and state", "establishment"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "abortion",
    title: "Abortion",
    category: "constitutional",
    status: "Agreed Policy",
    shortAnswer:
      "Restore Europe holds that human life must be protected from conception, and that elective direct abortion should be prohibited.",
    position: [
      "Restore Europe follows Catholic teaching that human life must be respected and protected from conception. Elective direct abortion should be prohibited.",
    ],
    policies: [
      "Legal protection of unborn human life from conception.",
      "Prohibition of elective direct abortion.",
      "Material, medical and social support for pregnant women and families.",
      "Support for adoption and practical alternatives to abortion.",
      "Medical treatment intended to save the mother may remain permissible where the death of the unborn child is an unintended secondary effect rather than the intended means or end.",
    ],
    principle:
      "Human dignity and the right to life do not begin only when the state chooses to recognize them.",
    manifestoBasis: ["moral-order", "family"],
    related: ["family", "euthanasia-and-assisted-suicide", "catholic-medical-ethics"],
    keywords: ["abortion", "unborn", "conception", "pro-life", "termination"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "euthanasia-and-assisted-suicide",
    title: "Euthanasia and Assisted Suicide",
    category: "constitutional",
    status: "Agreed Policy",
    shortAnswer:
      "Restore Europe opposes direct euthanasia and assisted suicide, supports palliative care, and allows the refusal of extraordinary or disproportionate treatment.",
    position: [
      "Restore Europe opposes direct euthanasia and assisted suicide and supports palliative care, while allowing refusal of extraordinary or disproportionate treatment.",
    ],
    policies: [
      "Direct euthanasia prohibited.",
      "Assisted suicide prohibited.",
      "Strong hospice and palliative-care provision.",
      "Patients may refuse extraordinary, excessively burdensome or disproportionate treatment.",
      "Pain relief remains legitimate where death is not intended.",
    ],
    manifestoBasis: ["moral-order", "person-not-atom"],
    related: ["abortion", "universal-healthcare-access", "catholic-medical-ethics"],
    keywords: ["euthanasia", "assisted suicide", "assisted dying", "palliative care", "hospice"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "marriage-and-sexual-ethics",
    title: "Marriage and Sexual Ethics",
    category: "constitutional",
    status: "Agreed Policy",
    shortAnswer:
      "Restore Europe recognizes civil marriage as the union of one man and one woman, and centres family law on the natural family.",
    position: [
      "Restore Europe recognizes civil marriage exclusively as the union of one man and one woman and follows Catholic moral teaching on sexuality.",
    ],
    policies: [
      "Same-sex marriage is not legally recognized as marriage.",
      "Family law is centred on the natural family of mother, father and children.",
      "Religious institutions may not be compelled to recognize or celebrate same-sex unions.",
      "Adoption policy should prioritize a child's relationship to a mother and father.",
    ],
    manifestoBasis: ["family", "moral-order"],
    related: ["family", "contraception", "sex-education-in-schools"],
    keywords: ["marriage", "same-sex marriage", "family law", "adoption", "civil marriage"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "contraception",
    title: "Contraception",
    category: "constitutional",
    status: "Agreed Policy",
    shortAnswer:
      "Restore Europe opposes artificial contraception and rejects a public culture that treats permanent avoidance of fertility as the normal foundation of sexual life, without criminalizing private adult possession.",
    position: [
      "Restore Europe follows Catholic teaching in opposing artificial contraception and rejects a public culture that treats the permanent avoidance of fertility as the normal foundation of sexual life.",
    ],
    policies: [
      "No state promotion of artificial contraception.",
      "No ordinary taxpayer subsidy of contraception, except where a medication is genuinely prescribed for a separate medical purpose.",
      "Restrictions on contraception advertising directed at minors.",
      "Schools should not present contraception as the morally neutral default solution to sexual behaviour.",
      "Natural fertility awareness and natural family planning are treated differently from artificial contraception.",
    ],
    limits: ["This position does not impose a criminal ban on private adult possession of contraception."],
    manifestoBasis: ["family", "moral-order"],
    related: ["family", "demographic-renewal", "sex-education-in-schools"],
    keywords: ["contraception", "birth control", "NFP", "natural family planning", "fertility"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "pornography",
    title: "Pornography",
    category: "constitutional",
    status: "Agreed Policy",
    shortAnswer: "Restore Europe supports the complete legal prohibition of pornography.",
    position: ["Restore Europe supports the complete legal prohibition of pornography."],
    policies: [
      "Production, financing, commercial distribution, sale and public display prohibited.",
      "Online hosting and knowing commercial provision prohibited.",
      "Deliberate possession or acquisition of pornographic material prohibited.",
      "The strongest penalties apply to commercial producers, distributors, exploitative platforms, and material involving coercion, trafficking or minors.",
      "The legal definition should exclude legitimate medicine, anatomy, science, classical art and non-pornographic literature.",
    ],
    principle:
      "Sexuality and the human body should not be reduced to commercial objects for stimulation and consumption.",
    manifestoBasis: ["moral-order", "human-scale-life"],
    related: ["prostitution", "children-social-media-and-attention-capture", "free-speech-and-public-doctrine"],
    keywords: ["pornography", "porn", "adult content", "explicit content", "obscenity"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "prostitution",
    title: "Prostitution",
    category: "constitutional",
    status: "Agreed Policy",
    shortAnswer:
      "Restore Europe supports the complete legal prohibition of prostitution and its commercial facilitation, with exit support for those leaving it.",
    position: ["Restore Europe supports the complete legal prohibition of prostitution and its commercial facilitation."],
    policies: [
      "Buying sexual services prohibited.",
      "Selling sexual services prohibited.",
      "Brothels, pimping and commercial facilitation prohibited.",
      "Advertising prostitution prohibited.",
      "Sex trafficking and coercive exploitation punished especially severely.",
      "Exit programmes, housing, addiction treatment and vocational assistance available to people leaving prostitution.",
    ],
    manifestoBasis: ["moral-order", "person-not-atom"],
    related: ["pornography", "welfare-and-social-assistance", "prisons-punishment-and-rehabilitation"],
    keywords: ["prostitution", "brothels", "sex work", "pimping", "trafficking"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "recreational-drugs",
    title: "Recreational Drugs",
    category: "constitutional",
    status: "Agreed Policy",
    shortAnswer:
      "Restore Europe supports keeping recreational narcotics, including recreational cannabis, illegal, with heavier penalties for traffickers than for dependent users.",
    position: [
      "Restore Europe generally supports keeping recreational narcotics, including recreational cannabis, illegal.",
    ],
    policies: [
      "Commercial production and trafficking prohibited.",
      "Recreational sale prohibited.",
      "Possession remains unlawful, with penalties proportionate to the offence.",
      "Dealers and organized traffickers face stronger penalties than dependent users.",
      "Treatment, detoxification and rehabilitation available for addiction.",
      "Genuine medical use is treated separately from recreational use.",
    ],
    manifestoBasis: ["moral-order", "human-scale-life"],
    related: ["alcohol", "gambling", "prisons-punishment-and-rehabilitation"],
    keywords: ["drugs", "cannabis", "marijuana", "narcotics", "decriminalization"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "alcohol",
    title: "Alcohol",
    category: "constitutional",
    status: "Agreed Policy",
    shortAnswer:
      "Alcohol remains lawful for adults in moderate use. Restore Europe opposes drunkenness, abuse and conduct that harms others.",
    position: [
      "Alcohol remains legal for adults when used moderately. Restore Europe opposes drunkenness, abuse and conduct that harms others.",
    ],
    policies: [
      "Sales to minors prohibited.",
      "Drunk driving and alcohol-related public disorder punished.",
      "Advertising directed at minors restricted.",
      "Alcoholism treatment supported.",
      "Traditional moderate consumption remains lawful.",
    ],
    manifestoBasis: ["moral-order", "culture"],
    related: ["recreational-drugs", "gambling", "universal-healthcare-access"],
    keywords: ["alcohol", "beer", "wine", "drunkenness", "temperance"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "gambling",
    title: "Gambling",
    category: "constitutional",
    status: "Agreed Policy",
    shortAnswer:
      "Gambling may remain lawful in limited adult forms, strictly regulated against addiction, fraud and exploitation.",
    position: [
      "Gambling may remain legal in limited adult forms but should be strictly regulated against addiction, fraud and exploitation.",
    ],
    policies: [
      "Gambling by minors prohibited.",
      "Advertising to young or vulnerable people restricted.",
      "Predatory or deliberately manipulative gambling mechanics restricted or prohibited.",
      "High-risk online gambling subject to strict regulation.",
      "Self-exclusion and addiction-treatment systems required.",
      "Fraud, illegal betting operations and match-fixing punished severely.",
    ],
    manifestoBasis: ["moral-order", "finance"],
    related: ["alcohol", "recreational-drugs", "finance-lending-and-usury"],
    keywords: ["gambling", "betting", "casino", "sports betting", "loot boxes"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "blasphemy-and-sacrilege",
    title: "Blasphemy and Sacrilege",
    category: "constitutional",
    status: "Agreed Policy",
    shortAnswer:
      "Unbelief, criticism and theological argument remain lawful. Deliberate desecration of the sacred may be prohibited.",
    position: [
      "Restore Europe distinguishes unbelief and criticism from deliberate public profanation. Atheism and theological disagreement are not themselves criminal offences, while deliberate desecration of the sacred may be prohibited.",
    ],
    policies: [
      "Atheism and private unbelief remain lawful.",
      "Criticism of Church leaders and theological debate remain lawful.",
      "Deliberate desecration of consecrated objects, churches or sacred Christian rites may be criminalized.",
      "Anti-Christian vandalism remains punishable under ordinary criminal law, and may carry an aggravating sacrilege element.",
    ],
    principle: "Protect the sacred without criminalizing doubt, disagreement or intellectual inquiry.",
    implementationNote:
      "Several European states have repealed blasphemy provisions in recent decades, so this would mean reinstating a narrower offence rather than retaining an existing one.",
    manifestoBasis: ["moral-order", "democracy"],
    related: ["free-speech-and-public-doctrine", "catholic-confessional-state"],
    keywords: ["blasphemy", "sacrilege", "atheism", "desecration", "vandalism"],
    lastUpdated: "2026-09-15",
  },

  /* ------------------------------------------------------------- II. Family */
  {
    slug: "family",
    title: "Family",
    category: "family",
    status: "Manifesto Core",
    shortAnswer:
      "The family formed around marriage is the fundamental social institution, and public policy should make marriage and child-rearing materially realistic.",
    position: [
      "The family formed around marriage between man and woman, the raising of children, intergenerational obligation and the care of the young and the old is the fundamental social institution.",
    ],
    policies: [
      "Family-oriented taxation.",
      "Parental support.",
      "Affordable family housing.",
      "Stable employment, and sufficient time outside economic production.",
      "Public policy should make marriage and child-rearing materially realistic.",
    ],
    manifestoBasis: ["family"],
    related: ["marriage-and-sexual-ethics", "demographic-renewal", "welfare-and-social-assistance", "housing-and-financialization"],
    keywords: ["family", "children", "marriage", "parents", "household"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "demographic-renewal",
    title: "Demographic Renewal",
    category: "family",
    status: "Manifesto Core",
    shortAnswer:
      "Europe should answer demographic decline by making family formation viable for its own population rather than by permanent mass immigration.",
    position: [
      "Europe should address demographic decline principally by making family formation and child-rearing viable for its own population, rather than using permanent mass immigration as a substitute for births.",
    ],
    manifestoBasis: ["family", "immigration"],
    related: ["family", "immigration", "housing-and-financialization", "contraception"],
    keywords: ["demography", "birth rate", "fertility", "population", "decline"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "sunday-rest-and-trading",
    title: "Sunday Rest and Trading",
    category: "family",
    status: "Agreed Policy",
    shortAnswer:
      "Sunday should be restored as the common day of worship, family and rest, with ordinary commercial activity substantially restricted.",
    position: [
      "Sunday should be restored as the normal common day of worship, family and rest. Ordinary commercial activity should therefore be substantially restricted.",
    ],
    policies: [
      "Ordinary shops normally closed on Sundays.",
      "The owner of a small shop may personally choose to open and work, but ordinary employees should not be routinely required to work.",
      "Hospitals, emergency services, critical infrastructure, necessary public transport and pharmacies may operate.",
      "Hospitality may operate under separate rules, because Sunday demand is intrinsic to its function.",
      "Exceptions should remain narrow enough that Sunday does not become an ordinary commercial day.",
    ],
    principle:
      "A shared day of rest protects worship, family life and community from total economic colonization.",
    manifestoBasis: ["family", "work", "culture"],
    related: ["work", "family", "catholic-confessional-state"],
    keywords: ["Sunday trading", "shops", "Sabbath", "day of rest", "opening hours"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "welfare-and-social-assistance",
    title: "Welfare and Social Assistance",
    category: "family",
    status: "Agreed Policy",
    shortAnswer:
      "A safety net directed primarily at citizens, families and those genuinely unable to support themselves, expressing solidarity without becoming permanent avoidable dependency.",
    position: [
      "Restore Europe supports a social safety net directed primarily toward citizens, families and people genuinely unable to support themselves. Welfare should express solidarity without becoming a permanent system of avoidable dependency.",
    ],
    policies: [
      "Priority for citizens and their families, children, carers, disabled people, elderly people and households facing genuine hardship.",
      "Able-bodied working-age recipients normally expected to seek work, training or rehabilitation.",
      "Non-citizens normally expected to work and support themselves rather than migrate for long-term welfare.",
      "Contribution-based benefits may remain available to lawful foreign workers who have actually paid into the relevant system.",
      "Welfare fraud triggers repayment and proportionate penalties.",
      "Catholic, Christian and historic charitable institutions may play a major role, with transparent auditing of public funds.",
    ],
    principle:
      "Family, parish and local institutions should act before remote central bureaucracy, where they can competently do so.",
    implementationNote:
      "Eligibility here turns on citizenship and contribution record, not on ethnicity. Restricting benefits by nationality would also engage equal-treatment rules for lawfully resident workers in several European systems.",
    manifestoBasis: ["subsidiarity", "family"],
    related: ["family", "citizenship-general-principle", "universal-healthcare-access", "authority-democracy-and-subsidiarity"],
    keywords: ["welfare", "benefits", "social assistance", "safety net", "dependency"],
    lastUpdated: "2026-09-15",
  },

  /* ------------------------------------------------------------- III. Nation */
  {
    slug: "nation-and-historical-continuity",
    title: "Nation and Historical Continuity",
    category: "nation",
    status: "Manifesto Core",
    shortAnswer:
      "The nation is an intergenerational historical community, and European peoples have a legitimate interest in maintaining cultural and historical continuity.",
    position: [
      "The nation is an intergenerational historical community shaped by memory, language, customs, institutions, territory and a sense of common destiny. European peoples have a legitimate interest in maintaining cultural and historical continuity.",
    ],
    manifestoBasis: ["nation"],
    related: ["citizenship-general-principle", "immigration", "europe-as-a-civilization-of-nations", "culture-and-homogenization"],
    keywords: ["nation", "people", "homeland", "continuity", "identity"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "immigration",
    title: "Immigration",
    category: "nation",
    status: "Manifesto Core",
    shortAnswer:
      "Immigration should be limited to levels compatible with genuine integration, social stability, infrastructure capacity and demographic continuity.",
    position: [
      "Immigration should be limited to levels compatible with genuine integration, social stability, infrastructure capacity, and the demographic and cultural continuity of the receiving nation.",
    ],
    policies: [
      "Borders remain legitimate political institutions.",
      "Immigration policy must serve the long-term common good of the receiving nation.",
      "Humanitarian obligations do not require relinquishing control over demographic policy.",
    ],
    manifestoBasis: ["immigration"],
    related: ["citizenship-general-principle", "naturalization", "demographic-renewal", "welfare-and-social-assistance"],
    keywords: ["immigration", "migration", "borders", "integration", "asylum"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "citizenship-general-principle",
    title: "Citizenship: General Principle",
    category: "nation",
    status: "Agreed Policy",
    shortAnswer:
      "Citizenship is membership of a historical political community rather than a function of residence, and Restore Europe rejects automatic territorial birthright citizenship as a general rule.",
    position: [
      "Citizenship is membership in a historical political community, not merely residence. Restore Europe rejects automatic territorial birthright citizenship as a general rule.",
    ],
    policies: [
      "Citizenship normally passes through citizen parentage.",
      "Birth on national territory to non-citizen parents does not by itself confer citizenship.",
      "Naturalization requires deep linguistic, cultural, civic and patriotic assimilation.",
      "Naturalization is an admission into the national political community rather than an automatic entitlement generated by residence.",
    ],
    manifestoBasis: ["nation", "immigration"],
    related: ["naturalization", "citizenship-by-descent", "voting-rights-after-naturalization", "dual-citizenship"],
    keywords: ["citizenship", "birthright", "jus soli", "jus sanguinis", "nationality"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "naturalization",
    title: "Naturalization",
    category: "nation",
    status: "Agreed Policy",
    shortAnswer:
      "The normal route requires around fifteen years of lawful residence before an application may be made, with demanding assimilation requirements.",
    position: [
      "The normal Restore Europe naturalization route requires approximately fifteen years of lawful residence before an application may be made, together with exceptionally demanding assimilation requirements.",
    ],
    policies: [
      "Fluency in the national language.",
      "Extensive knowledge of national history, culture, traditions and institutions.",
      "Respect for the constitutional order and the country's Christian and historical character.",
      "Demonstrated loyalty and long-term participation in the country.",
      "Lawful conduct and economic self-sufficiency where reasonably possible.",
    ],
    limits: ["Fifteen years of residence does not automatically guarantee naturalization."],
    implementationNote:
      "Ordinary residence requirements across Europe currently run to between five and ten years, so this would lengthen rather than adjust existing practice.",
    manifestoBasis: ["immigration", "nation"],
    related: ["citizenship-general-principle", "voting-rights-after-naturalization", "dual-citizenship", "revocation-of-naturalized-citizenship"],
    keywords: ["naturalization", "residence", "assimilation", "language requirement", "citizenship test"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "citizenship-by-descent",
    title: "Citizenship by Descent and Restoration",
    category: "nation",
    status: "Agreed Policy",
    shortAnswer:
      "Documented national descent may justify a substantially faster restoration route than ordinary naturalization.",
    position: [
      "Documented national descent may justify a substantially faster citizenship-restoration route than ordinary naturalization.",
    ],
    policies: [
      "A child of a citizen ordinarily inherits that parent's citizenship regardless of place of birth.",
      "A person with documented national parentage or close national descent may receive a facilitated return or restoration route.",
      "The working proposal for such a facilitated route is approximately five years, rather than the ordinary fifteen.",
    ],
    implementationNote:
      "Descent here means documented citizenship or national lineage. It does not create separate civil rights by broad racial or ethnic classification.",
    manifestoBasis: ["nation"],
    related: ["citizenship-general-principle", "naturalization", "dual-citizenship"],
    keywords: ["descent", "ancestry", "restoration", "repatriation", "jus sanguinis"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "voting-rights-after-naturalization",
    title: "Voting Rights After Naturalization",
    category: "nation",
    status: "Agreed Policy",
    shortAnswer:
      "Naturalized citizens should wait a further four years after naturalization before receiving full voting rights.",
    position: [
      "Naturalized citizens should not receive voting rights immediately upon naturalization. A further four-year citizenship period should normally precede full voting rights.",
    ],
    policies: [
      "Ordinary route: fifteen years of lawful residence before eligibility to apply for naturalization.",
      "After naturalization: four additional years before full voting rights.",
    ],
    implementationNote:
      "Withholding the franchise from existing citizens would require constitutional change in states where the vote attaches to citizenship itself.",
    manifestoBasis: ["democracy", "nation"],
    related: ["naturalization", "citizenship-general-principle", "high-public-office"],
    keywords: ["voting rights", "franchise", "suffrage", "elections", "waiting period"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "high-public-office",
    title: "High Public Office",
    category: "nation",
    status: "Derived",
    shortAnswer:
      "Restore Europe favours stricter eligibility requirements for the highest offices than for ordinary citizenship or voting, with the exact periods undecided.",
    position: [
      "Restore Europe favours substantially stricter eligibility requirements for the highest public offices than for ordinary citizenship or voting.",
    ],
    policies: [
      "Long-standing citizenship.",
      "Long-term residence in the country.",
      "Complete command of the national language.",
      "Deep knowledge of national history, institutions and culture.",
      "Demonstrated patriotic commitment, and absence of conflicting foreign political allegiance.",
      "Additional security and integrity requirements.",
    ],
    limits: [
      "The exact waiting periods and office-by-office rules remain open.",
      "Ethnicity is not a legal qualification for office.",
    ],
    manifestoBasis: ["democracy"],
    related: ["voting-rights-after-naturalization", "naturalization", "authority-democracy-and-subsidiarity"],
    keywords: ["public office", "eligibility", "president", "ministers", "allegiance"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "dual-citizenship",
    title: "Dual Citizenship",
    category: "nation",
    status: "Agreed Policy",
    shortAnswer:
      "Dual citizenship between European countries is generally accepted; non-European citizens naturalizing into a European nation would be expected to renounce their former citizenship.",
    position: [
      "Restore Europe generally accepts dual citizenship between European countries, but expects non-European citizens who naturalize into a European nation to renounce their previous non-European citizenship.",
    ],
    policies: [
      "European-to-European dual citizenship generally permitted.",
      "Non-European naturalizing citizens normally required to renounce their former citizenship.",
      "Exceptions may be considered where renunciation is legally impossible or would create exceptional hardship.",
    ],
    principle: "Distinct European nations are political communities within a broader European civilization.",
    implementationNote:
      "Europe is understood here geographically and through the movement's own network of national wings, rather than as EU membership.",
    manifestoBasis: ["nation", "europe"],
    related: ["naturalization", "citizenship-general-principle", "europe-as-a-civilization-of-nations"],
    keywords: ["dual citizenship", "dual nationality", "renunciation", "second passport"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "revocation-of-naturalized-citizenship",
    title: "Revocation of Naturalized Citizenship",
    category: "nation",
    status: "Agreed Policy",
    shortAnswer:
      "Naturalized citizenship may be revoked judicially in exceptionally serious cases such as fraudulent naturalization, treason or terrorism.",
    position: [
      "Naturalized citizenship may be revoked in exceptionally serious circumstances, such as fraudulent naturalization, treason, terrorism or other narrowly defined conduct gravely prejudicial to the state.",
    ],
    policies: [
      "Revocation must follow a judicial process.",
      "Grounds must be defined by statute rather than vague executive discretion.",
      "A high evidentiary standard and a right of appeal are required.",
      "Fraud in the naturalization process is a direct ground for revocation.",
      "Treason and terrorism may justify revocation.",
      "Restore Europe favours the possibility of revocation in exceptionally grave cases even where statelessness might result.",
    ],
    implementationNote:
      "International and European law place substantial restrictions on rendering a person stateless, and removal normally requires a receiving state legally able and willing to admit the person. This belongs to the constitutional order Restore Europe seeks, and would require treaty or constitutional change.",
    manifestoBasis: ["nation", "democracy"],
    related: ["naturalization", "citizenship-general-principle", "prisons-punishment-and-rehabilitation"],
    keywords: ["revocation", "deprivation", "statelessness", "treason", "terrorism"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "europe-as-a-civilization-of-nations",
    title: "Europe as a Civilization of Nations",
    category: "nation",
    status: "Manifesto Core",
    shortAnswer:
      "Europe should be a civilizational community of sovereign nations, not a centralized post-national state.",
    position: [
      "Europe should be a civilizational community of sovereign nations, not a centralized post-national state.",
    ],
    policies: [
      "European cooperation in defense, borders, strategic infrastructure, science, environmental protection and civilizational preservation.",
      "National political autonomy and historic identity retained.",
      "Subsidiarity governs the division of powers.",
    ],
    manifestoBasis: ["europe", "subsidiarity"],
    related: ["european-union-institutional-relationship", "nation-and-historical-continuity", "foreign-policy-doctrine", "authority-democracy-and-subsidiarity"],
    keywords: ["Europe", "sovereignty", "confederation", "subsidiarity", "post-national"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "european-union-institutional-relationship",
    title: "European Union: Institutional Relationship",
    category: "nation",
    status: "Open",
    shortAnswer:
      "No position has been adopted on whether Restore Europe seeks radical reform of the EU, replacement by a confederation, selective withdrawal of competences, or another model.",
    position: [
      "The manifesto rejects centralized post-national government, but does not settle whether Restore Europe seeks radical reform of the existing European Union, replacement by a confederation, selective withdrawal of competences, or another institutional model.",
    ],
    manifestoBasis: ["europe"],
    related: ["europe-as-a-civilization-of-nations"],
    keywords: ["European Union", "EU", "Brussels", "treaties", "competences"],
    lastUpdated: "2026-09-15",
  },

  /* ------------------------------------------------------------ IV. Economy */
  {
    slug: "economic-order",
    title: "Economic Order",
    category: "economy",
    status: "Manifesto Core",
    shortAnswer:
      "Restore Europe rejects both unrestricted capitalism and centralized socialism. Its economic ideal is distributist in ownership and corporatist in organization.",
    position: [
      "Restore Europe rejects both unrestricted capitalism and centralized socialism. Its economic ideal is distributist in ownership and corporatist in organization.",
    ],
    manifestoBasis: ["economic-order"],
    related: ["private-property-and-broad-ownership", "guilds-chambers-and-corporatist-representation", "finance-lending-and-usury", "work"],
    keywords: ["economy", "distributism", "corporatism", "capitalism", "socialism"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "private-property-and-broad-ownership",
    title: "Private Property and Broad Ownership",
    category: "economy",
    status: "Manifesto Core",
    shortAnswer:
      "Property is a source of independence and responsibility. The answer to concentration is wider ownership, not the abolition of property.",
    position: [
      "Private property is a source of independence and responsibility. The response to excessive concentration is wider ownership rather than the abolition of property.",
    ],
    policies: [
      "Widespread home ownership.",
      "Family-owned enterprises.",
      "Independent craftsmen and trades.",
      "Small and medium-sized firms.",
      "Cooperatives and employee ownership.",
      "Family agriculture.",
      "Local and regional banking.",
    ],
    principle: "Many proprietors rather than few.",
    manifestoBasis: ["economic-order"],
    related: ["economic-order", "housing-and-financialization", "corporations-and-monopolies", "finance-lending-and-usury"],
    keywords: ["property", "ownership", "distributism", "cooperatives", "smallholders"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "corporations-and-monopolies",
    title: "Corporations and Monopolies",
    category: "economy",
    status: "Manifesto Core",
    shortAnswer:
      "Corporations are legitimate instruments but remain subordinate to the common good, and concentrated corporate power may be restrained.",
    position: [
      "Corporations are legitimate instruments but must remain subordinate to the common good. Excessive concentrated corporate power may be restrained.",
    ],
    policies: [
      "Strong competition and anti-monopoly policy.",
      "Restraint where firms dominate political institutions or essential markets.",
      "Protection of viable communities, family life and political independence from destructive concentration.",
    ],
    manifestoBasis: ["economic-order"],
    related: ["private-property-and-broad-ownership", "economic-order", "finance-lending-and-usury"],
    keywords: ["corporations", "monopoly", "antitrust", "competition", "concentration"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "guilds-chambers-and-corporatist-representation",
    title: "Guilds, Chambers and Corporatist Representation",
    category: "economy",
    status: "Manifesto Core",
    shortAnswer:
      "Workers, employers, craftsmen, farmers and professions should participate in sectoral institutions setting standards, apprenticeships and labour conditions.",
    position: [
      "Workers, employers, craftsmen, farmers and professions should participate in sectoral institutions capable of setting standards, apprenticeships, labour conditions and mediation mechanisms.",
    ],
    policies: [
      "Professional chambers and vocational corporations should remain sufficiently independent of centralized government.",
      "Occupational organizations may have structured representation in public life.",
      "Corporatism remains subordinate to subsidiarity.",
    ],
    manifestoBasis: ["corporatism", "subsidiarity"],
    related: ["economic-order", "work", "minimum-wage", "authority-democracy-and-subsidiarity"],
    keywords: ["guilds", "chambers", "corporatism", "apprenticeships", "trades"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "finance-lending-and-usury",
    title: "Finance, Lending and Usury",
    category: "economy",
    status: "Agreed Policy",
    shortAnswer:
      "Finance should serve productive activity. Legitimate lending and reasonable return are accepted; exploitative interest and debt traps are not.",
    position: [
      "Finance should serve productive activity. Restore Europe accepts legitimate lending and a reasonable return on capital, while opposing exploitative interest, predatory lending and debt traps.",
    ],
    policies: [
      "Tight restrictions or caps on payday-style predatory lending.",
      "Transparent disclosure of the full cost of credit.",
      "Restrictions on abusive late fees and compounding penalties.",
      "Courts may void clearly unconscionable loan terms.",
      "Policy should favour productive lending for homes, family businesses and long-term investment.",
      "Local and regional banking encouraged.",
    ],
    manifestoBasis: ["finance"],
    related: ["housing-and-financialization", "private-property-and-broad-ownership", "gambling", "economic-order"],
    keywords: ["finance", "usury", "interest", "lending", "debt", "banks"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "housing-and-financialization",
    title: "Housing and Financialization",
    category: "economy",
    status: "Manifesto Core",
    shortAnswer:
      "Housing should principally serve habitation and community rather than function as an endlessly appreciating financial asset.",
    position: [
      "Housing should principally serve habitation and community rather than function primarily as an endlessly appreciating financial asset.",
    ],
    policies: [
      "Widespread home ownership is a central goal.",
      "Speculative and concentrated ownership may be restrained where it prevents ordinary family ownership.",
    ],
    manifestoBasis: ["finance", "architecture"],
    related: ["private-property-and-broad-ownership", "finance-lending-and-usury", "family", "architecture-and-historic-preservation"],
    keywords: ["housing", "home ownership", "rent", "speculation", "landlords"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "work",
    title: "Work",
    category: "economy",
    status: "Manifesto Core",
    shortAnswer:
      "Work has dignity but is not the purpose of human existence. Economic progress should increase security, leisure and command over one's own life.",
    position: [
      "Work has dignity but is not the purpose of human existence. Economic progress should increase security, leisure, family time, meaningful work and command over one's life.",
    ],
    policies: [
      "Renewed social status for craftsmanship, agriculture, engineering, care work, teaching and skilled trades.",
      "Productivity gains should not merely increase labour extraction.",
      "Automation should not eliminate meaningful human participation solely for numerical efficiency.",
    ],
    manifestoBasis: ["work", "human-scale-life"],
    related: ["automation", "sunday-rest-and-trading", "guilds-chambers-and-corporatist-representation", "minimum-wage"],
    keywords: ["work", "labour", "employment", "craftsmanship", "leisure"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "minimum-wage",
    title: "Minimum Wage",
    category: "economy",
    status: "Open",
    shortAnswer:
      "No position has been adopted on whether wages should be set by statutory minimum, sectoral floors, guild agreements, collective bargaining or a combination.",
    position: [
      "Restore Europe supports dignified labour conditions and family-compatible economic life, but has not decided whether wages should be set through a statutory minimum wage, sectoral wage floors, guild and chamber agreements, collective bargaining, or a combination of these.",
    ],
    manifestoBasis: ["work", "corporatism"],
    related: ["work", "guilds-chambers-and-corporatist-representation", "taxation"],
    keywords: ["minimum wage", "wages", "collective bargaining", "pay", "wage floor"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "taxation",
    title: "Taxation",
    category: "economy",
    status: "Open",
    shortAnswer:
      "No rates have been adopted. Future tax policy should be consistent with family formation, broad property ownership, productive investment and subsidiarity.",
    position: [
      "Specific income-tax, corporate-tax, VAT, inheritance-tax and wealth-tax rates have not been adopted. Future tax policy should be consistent with family formation, broad property ownership, productive investment and subsidiarity.",
    ],
    manifestoBasis: ["economic-order", "subsidiarity"],
    related: ["family", "private-property-and-broad-ownership", "minimum-wage"],
    keywords: ["tax", "taxation", "income tax", "VAT", "inheritance tax", "wealth tax"],
    lastUpdated: "2026-09-15",
  },

  /* --------------------------------------------------------- V. Technology */
  {
    slug: "technology-general-doctrine",
    title: "Technology: General Doctrine",
    category: "technology",
    status: "Manifesto Core",
    shortAnswer:
      "Technological development is not synonymous with human progress, and should be judged by its effects on autonomy, family, community and work.",
    position: [
      "Technological development is not synonymous with human progress. Technology should be judged by whether it strengthens or weakens autonomy, family life, community, meaningful work, privacy, decentralization and the natural environment.",
    ],
    principle: "The machine must adapt itself to man.",
    manifestoBasis: ["technology", "human-scale-life"],
    related: ["artificial-intelligence", "automation", "cash-and-non-digital-access", "right-to-repair"],
    keywords: ["technology", "progress", "human scale", "innovation"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    category: "technology",
    status: "Manifesto Core",
    secondaryStatus: "Derived",
    shortAnswer:
      "AI may be used as a tool but should not displace human judgment merely because automation is technically possible or economically efficient.",
    position: [
      "AI may be used as a tool, but should not displace human judgment simply because automation is technically possible or economically efficient.",
    ],
    policies: [
      "AI should be evaluated by its effects on human competence, employment, autonomy and institutional power.",
      "Human decision-makers should remain available in matters of serious legal or moral consequence.",
      "The existence of a capability does not create an obligation to deploy it.",
    ],
    manifestoBasis: ["technology"],
    related: ["automation", "surveillance", "technology-general-doctrine", "purpose-of-education"],
    keywords: ["artificial intelligence", "AI", "machine learning", "automation", "algorithms"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "automation",
    title: "Automation",
    category: "technology",
    status: "Manifesto Core",
    shortAnswer:
      "Automation may remove genuinely degrading labour, but removing human participation from productive activity is not an unquestioned good.",
    position: [
      "Automation may remove genuinely degrading labour, but eliminating human participation from productive activity should not be an unquestioned objective.",
    ],
    principle: "Human competence is itself a social good.",
    manifestoBasis: ["technology", "work"],
    related: ["work", "artificial-intelligence", "technology-general-doctrine"],
    keywords: ["automation", "robots", "jobs", "deskilling", "efficiency"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "cash-and-non-digital-access",
    title: "Cash and Non-Digital Access",
    category: "technology",
    status: "Manifesto Core",
    shortAnswer:
      "Citizens should retain meaningful access to physical money and to face-to-face public services.",
    position: ["Citizens should retain meaningful access to physical money and face-to-face public services."],
    policies: [
      "Physical cash should remain available.",
      "Essential civic participation should not require a smartphone.",
      "Non-digital identification should remain available where practicable.",
      "Government services should preserve human-accessible alternatives.",
    ],
    manifestoBasis: ["human-scale-life", "technology"],
    related: ["digital-id-and-cbdcs", "technology-general-doctrine", "surveillance"],
    keywords: ["cash", "money", "digital exclusion", "banking", "in person"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "right-to-repair",
    title: "Right to Repair",
    category: "technology",
    status: "Manifesto Core",
    shortAnswer:
      "Citizens should retain meaningful access to repairable products, against unnecessary disposability and technological lock-in.",
    position: [
      "Citizens should retain meaningful access to repairable products. Restore Europe favours policy that resists unnecessary disposability and technological lock-in.",
    ],
    manifestoBasis: ["technology", "stewardship"],
    related: ["technology-general-doctrine", "environmental-stewardship", "work"],
    keywords: ["right to repair", "repairability", "disposability", "lock-in", "spare parts"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "surveillance",
    title: "Surveillance",
    category: "technology",
    status: "Manifesto Core",
    secondaryStatus: "Derived",
    shortAnswer:
      "Citizens should retain meaningful private spaces free from permanent surveillance, with the detailed rules not yet settled.",
    position: ["Citizens should retain meaningful private spaces free from permanent surveillance."],
    limits: [
      "Exact rules on facial recognition, metadata retention, CCTV and intelligence powers remain open.",
    ],
    manifestoBasis: ["human-scale-life", "technology"],
    related: ["artificial-intelligence", "cash-and-non-digital-access", "digital-id-and-cbdcs", "free-speech-and-public-doctrine"],
    keywords: ["surveillance", "privacy", "facial recognition", "CCTV", "data retention"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "children-social-media-and-attention-capture",
    title: "Children, Social Media and Attention Capture",
    category: "technology",
    status: "Manifesto Core",
    secondaryStatus: "Derived",
    shortAnswer:
      "Children should be protected from industries whose profit models depend on maximizing psychological dependence.",
    position: [
      "Children should be protected from industries whose profit models depend on maximizing psychological dependence and attention capture.",
    ],
    policies: [
      "Stronger restrictions on addictive design directed at minors.",
      "School policy may restrict smartphones and manipulative digital platforms.",
    ],
    limits: ["Detailed age limits and platform rules remain to be adopted."],
    manifestoBasis: ["technology", "family"],
    related: ["family", "pornography", "purpose-of-education", "technology-general-doctrine"],
    keywords: ["social media", "children", "smartphones", "addiction", "attention"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "digital-id-and-cbdcs",
    title: "Digital ID and Central Bank Digital Currencies",
    category: "technology",
    status: "Derived",
    secondaryStatus: "Open",
    shortAnswer:
      "Compulsory digital-only identity would conflict with the human-scale principle; whether a CBDC should be prohibited outright or merely constrained is undecided.",
    position: [
      "Compulsory digital-only identity would conflict with Restore Europe's human-scale principle. Physical money and non-digital identification should remain available.",
    ],
    limits: [
      "Whether a central-bank digital currency should be prohibited entirely, or merely constrained alongside cash, remains open.",
    ],
    manifestoBasis: ["human-scale-life", "technology"],
    related: ["cash-and-non-digital-access", "surveillance", "technology-general-doctrine"],
    keywords: ["digital ID", "CBDC", "digital currency", "identity", "cashless"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "transhumanism-and-human-enhancement",
    title: "Transhumanism and Human Enhancement",
    category: "technology",
    status: "Open",
    shortAnswer:
      "The movement's anthropology strongly constrains transhumanist projects, but no detailed policy on genetic or cybernetic enhancement has been adopted.",
    position: [
      "Restore Europe's Catholic anthropology and its principle of technological subordination strongly constrain transhumanist projects, but a detailed policy on genetic enhancement, cybernetic augmentation and related technologies has not been adopted.",
    ],
    manifestoBasis: ["moral-order", "technology"],
    related: ["technology-general-doctrine", "artificial-intelligence", "catholic-medical-ethics"],
    keywords: ["transhumanism", "enhancement", "genetic engineering", "augmentation", "bioethics"],
    lastUpdated: "2026-09-15",
  },

  /* ---------------------------------------------------------- VI. Education */
  {
    slug: "purpose-of-education",
    title: "Purpose of Education",
    category: "education",
    status: "Manifesto Core",
    shortAnswer:
      "Education should transmit civilization before attempting to transform it, with serious study of Christianity, history, classical civilization, the sciences and the arts.",
    position: [
      "Education should transmit civilization before attempting to transform it. Christianity, national and European history, classical civilization, philosophy, literature, science, mathematics, music, art, craftsmanship and civic responsibility should all receive serious study.",
    ],
    manifestoBasis: ["education"],
    related: ["state-schools-and-christianity", "private-catholic-and-independent-schools", "homeschooling", "universities-and-academic-freedom"],
    keywords: ["education", "curriculum", "schools", "transmission", "classical"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "homeschooling",
    title: "Homeschooling",
    category: "education",
    status: "Agreed Policy",
    shortAnswer:
      "Homeschooling should be legal and protected, because parents are the primary educators of their children.",
    position: [
      "Homeschooling should be legal and protected, because parents are the primary educators of their children.",
    ],
    policies: [
      "Parents may homeschool.",
      "Explicitly Catholic homeschooling is permitted.",
      "The state may require basic competence in literacy, mathematics and civic knowledge.",
      "Periodic assessment may verify that children are actually receiving an education.",
      "The state should not use oversight to impose ideological conformity.",
    ],
    implementationNote:
      "Home education is currently prohibited or tightly restricted in several European states, so this would require legislative change in those jurisdictions.",
    manifestoBasis: ["education", "family", "subsidiarity"],
    related: ["private-catholic-and-independent-schools", "purpose-of-education", "sex-education-in-schools", "family"],
    keywords: ["homeschooling", "home education", "parents", "curriculum"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "private-catholic-and-independent-schools",
    title: "Private, Catholic and Independent Schools",
    category: "education",
    status: "Agreed Policy",
    shortAnswer:
      "A plural education system including Catholic, private, classical, vocational and monastic schools, with public funding able to follow families.",
    position: [
      "Restore Europe supports a plural education system including Catholic schools, private schools, classical schools, vocational institutions, monastic schools and homeschooling.",
    ],
    policies: [
      "Catholic schools legally protected.",
      "Independent schools may maintain distinct curricula and moral character.",
      "Public funding may follow families through vouchers, tax credits or equivalent systems.",
      "Catholic schools may teach Catholic doctrine and organize school life according to Catholic moral teaching.",
      "Basic academic standards may be required without enforcing ideological conformity.",
    ],
    manifestoBasis: ["education", "subsidiarity"],
    related: ["homeschooling", "state-schools-and-christianity", "purpose-of-education", "universities-and-academic-freedom"],
    keywords: ["private schools", "Catholic schools", "vouchers", "school choice", "independent schools"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "universities-and-academic-freedom",
    title: "Universities and Academic Freedom",
    category: "education",
    status: "Agreed Policy",
    shortAnswer:
      "Universities should retain genuine academic freedom while ceasing to operate as institutions of compulsory ideological propagation.",
    position: [
      "Universities should retain genuine academic freedom while ceasing to operate as institutions of compulsory ideological propagation.",
    ],
    policies: [
      "Liberal, Marxist, secular, Catholic, nationalist and other theories may be studied and debated academically.",
      "Public universities should not institutionally impose liberal or progressive ideology as unquestionable doctrine.",
      "Students should not be required to profess ideological positions unrelated to academic competence.",
      "Hiring and promotion should not discriminate against lawful Catholic, conservative or traditionalist scholarship.",
      "Christianity, classical civilization, European history, philosophy and the Western intellectual tradition should receive serious institutional space.",
    ],
    principle: "Education should pursue truth rather than manufacture ideological conformity.",
    manifestoBasis: ["education", "democracy"],
    related: ["purpose-of-education", "free-speech-and-public-doctrine", "private-catholic-and-independent-schools"],
    keywords: ["universities", "academic freedom", "higher education", "research", "ideology"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "state-schools-and-christianity",
    title: "State Schools and Christianity",
    category: "education",
    status: "Agreed Policy",
    shortAnswer:
      "State schools should have a Christian civilizational orientation rather than a secularist one.",
    position: ["State schools should have a Christian civilizational orientation rather than a secularist one."],
    policies: [
      "Christianity should be taught as foundational to European civilization, history, philosophy, morality, art and culture.",
      "Catholic teaching should have a recognized place in public education in Catholic-majority societies.",
      "Secularism should not be presented as the only intellectually legitimate worldview.",
      "National and European history should be taught as an inheritance rather than merely as accumulated guilt.",
    ],
    implementationNote:
      "Several European states constitutionally require confessional neutrality in public education, which this position would require them to revisit.",
    manifestoBasis: ["education", "moral-order"],
    related: ["catholic-confessional-state", "purpose-of-education", "private-catholic-and-independent-schools"],
    keywords: ["state schools", "religious education", "secularism", "Christianity", "public education"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "sex-education-in-schools",
    title: "Sex Education in Schools",
    category: "education",
    status: "Agreed Policy",
    shortAnswer:
      "Schools may teach factual reproductive biology, but moral formation on sexuality belongs primarily to parents and chosen religious institutions.",
    position: [
      "Parents and the Church should be the primary authorities for sexual and moral formation. Schools may teach factual reproductive biology, but should not bypass parental authority with explicit ideological or sexual instruction.",
    ],
    policies: [
      "Biology may cover anatomy, human reproduction, pregnancy and health.",
      "Moral teaching on sexuality, contraception and relationships belongs primarily to parents and chosen religious institutions.",
      "Parents should be informed of relevant curricula, and may withdraw children from material beyond basic biological instruction.",
      "Schools should not expose minors to pornographic or sexually explicit instructional material.",
    ],
    manifestoBasis: ["education", "family"],
    related: ["contraception", "homeschooling", "marriage-and-sexual-ethics", "family"],
    keywords: ["sex education", "RSE", "curriculum", "parental rights", "consent"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "culture-and-homogenization",
    title: "Culture Against Homogenization",
    category: "education",
    status: "Manifesto Core",
    shortAnswer:
      "Languages, dialects, festivals, music, cuisine and craftsmanship should remain living parts of ordinary life rather than museum pieces.",
    position: [
      "Languages, dialects, festivals, music, cuisine, craftsmanship and historical memory should remain living parts of ordinary European life, rather than museum pieces or tourist products.",
    ],
    manifestoBasis: ["culture"],
    related: ["nation-and-historical-continuity", "architecture-and-historic-preservation", "purpose-of-education"],
    keywords: ["culture", "dialects", "festivals", "tradition", "homogenization"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "architecture-and-historic-preservation",
    title: "Architecture and Historic Preservation",
    category: "education",
    status: "Manifesto Core",
    shortAnswer:
      "Public architecture should respect human scale, local materials and regional tradition, and historic fabric should be preserved wherever reasonably possible.",
    position: [
      "Public architecture should respect human scale, local materials, regional traditions and historic character. Churches, streetscapes, monuments and significant historic buildings should be preserved wherever reasonably possible.",
    ],
    manifestoBasis: ["architecture"],
    related: ["culture-and-homogenization", "housing-and-financialization", "environmental-stewardship"],
    keywords: ["architecture", "preservation", "heritage", "towns", "human scale"],
    lastUpdated: "2026-09-15",
  },

  /* --------------------------------------------------------- VII. Government */
  {
    slug: "authority-democracy-and-subsidiarity",
    title: "Authority, Democracy and Subsidiarity",
    category: "government",
    status: "Manifesto Core",
    shortAnswer:
      "Power should be exercised at the lowest competent level. Elections, representation and constitutional limits coexist with a rejection of philosophical liberalism.",
    position: [
      "Restore Europe rejects both anarchic individualism and totalizing state power. Elections, representation, constitutional limits and public participation may coexist with a rejection of philosophical liberalism.",
    ],
    policies: [
      "Power should be exercised at the lowest competent level.",
      "Families govern family matters; municipalities local matters; regions retain meaningful autonomy; nations govern national matters.",
      "Government remains restrained by law, subsidiarity and institutional counterweights.",
      "Political disagreement and opposition remain legitimate.",
    ],
    manifestoBasis: ["subsidiarity", "democracy"],
    related: ["free-speech-and-public-doctrine", "europe-as-a-civilization-of-nations", "welfare-and-social-assistance", "high-public-office"],
    keywords: ["subsidiarity", "democracy", "authority", "federalism", "liberalism"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "free-speech-and-public-doctrine",
    title: "Free Speech and Public Doctrine",
    category: "government",
    status: "Agreed Policy",
    shortAnswer:
      "Broad political and academic discussion is protected; speech that directly incites violence, terrorism or criminal conduct is not.",
    position: [
      "Restore Europe supports broad political and academic discussion, but does not treat speech as unlimited where it directly incites violence, terrorism or criminal conduct, or amounts to deliberate profanation of the sacred.",
    ],
    policies: [
      "Criticism of government remains lawful.",
      "Political and theological disagreement remains lawful.",
      "Communism, secularism and liberalism may be discussed and argued for by individuals, even though they do not define the constitutional order.",
      "Direct incitement to violence or terrorism may be prohibited.",
      "Pornography remains prohibited under separate policy.",
      "Deliberate sacrilege may be restricted under the blasphemy policy.",
    ],
    principle: "A confessional constitutional order need not become a system of thought-policing.",
    manifestoBasis: ["democracy", "moral-order"],
    related: ["blasphemy-and-sacrilege", "universities-and-academic-freedom", "pornography", "authority-democracy-and-subsidiarity"],
    keywords: ["free speech", "expression", "censorship", "incitement", "press"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "prisons-punishment-and-rehabilitation",
    title: "Prisons, Punishment and Rehabilitation",
    category: "government",
    status: "Agreed Policy",
    shortAnswer:
      "Proportionate punishment, protection of society, restitution where possible, and serious rehabilitation aimed at repentance and reintegration.",
    position: [
      "Criminal justice should combine proportionate punishment, protection of society, restitution where possible, and serious rehabilitation aimed at repentance and reintegration.",
    ],
    policies: [
      "Sentences proportionate to the seriousness of the crime.",
      "Long-term incapacitation for dangerous violent and repeat offenders where necessary.",
      "Prisons should maintain discipline and order.",
      "Prisoners should have access to work, education, vocational training, spiritual care and addiction treatment.",
      "Punishment should not be deliberately degrading or cruel.",
    ],
    principle: "Justice is neither vengeance nor permissiveness.",
    manifestoBasis: ["moral-order", "democracy"],
    related: ["death-penalty", "recreational-drugs", "firearms-and-self-defense", "prostitution"],
    keywords: ["prisons", "sentencing", "punishment", "rehabilitation", "criminal justice"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "death-penalty",
    title: "Death Penalty",
    category: "government",
    status: "Agreed Policy",
    shortAnswer:
      "Restore Europe accepts the traditional legitimacy of capital punishment in principle, reserved for exceptional cases involving the gravest crimes.",
    position: [
      "Restore Europe accepts the traditional Catholic legitimacy of capital punishment in principle, but reserves it for exceptional cases involving the gravest crimes.",
    ],
    policies: [
      "Potentially applicable to aggravated intentional murder, mass murder, terrorism involving deliberate killing, genocide and comparably grave offences.",
      "Only after a full and fair trial, a high evidentiary threshold and a meaningful right of appeal.",
      "No execution where serious doubt remains about guilt.",
      "No execution of minors.",
      "Imposed only by legitimate civil authority, and never used merely for vengeance.",
    ],
    implementationNote:
      "This is an explicit departure from the contemporary abolitionist position of the Catholic Catechism, adopting the older traditional allowance instead. Capital punishment is also prohibited across the Council of Europe, so this would require withdrawal from or amendment of existing treaty commitments.",
    manifestoBasis: ["moral-order"],
    related: ["prisons-punishment-and-rehabilitation", "revocation-of-naturalized-citizenship", "catholic-confessional-state"],
    keywords: ["death penalty", "capital punishment", "execution", "murder", "abolition"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "firearms-and-self-defense",
    title: "Firearms and Self-Defense",
    category: "government",
    status: "Agreed Policy",
    shortAnswer:
      "Regulated civilian firearm ownership for lawful purposes, under licensing, training and secure-storage requirements.",
    position: [
      "Restore Europe supports regulated civilian firearm ownership for lawful purposes, including self-defense, hunting, sport shooting and collecting.",
    ],
    policies: [
      "Licensing required.",
      "Mandatory safety training.",
      "Secure storage requirements.",
      "Stronger scrutiny for public or concealed carry.",
      "Serious violent offenders lose firearm rights.",
      "Illegal trafficking and criminal possession punished heavily.",
    ],
    principle:
      "The state need not monopolize every means of legitimate self-defense, but firearm ownership carries serious responsibilities.",
    manifestoBasis: ["subsidiarity", "moral-order"],
    related: ["prisons-punishment-and-rehabilitation", "authority-democracy-and-subsidiarity"],
    keywords: ["firearms", "guns", "self-defense", "hunting", "licensing"],
    lastUpdated: "2026-09-15",
  },

  /* --------------------------------------------------------- VIII. Healthcare */
  {
    slug: "universal-healthcare-access",
    title: "Universal Healthcare Access",
    category: "healthcare",
    status: "Agreed Policy",
    shortAnswer:
      "Universal access to essential and medically necessary care, with safeguards against overuse and waste.",
    position: [
      "Restore Europe supports universal access to essential and medically necessary healthcare, while permitting safeguards against overuse and waste.",
    ],
    policies: [
      "Emergency care available to everyone.",
      "Primary care, essential medicines, maternity care and treatment of serious illness accessible.",
      "Modest co-payments may apply to non-essential or low-priority services.",
      "Children, low-income households, serious chronic illness and emergencies may be exempt from co-payments.",
      "General practitioners may serve as gatekeepers before specialist care where medically appropriate.",
      "Prevention, rehabilitation and palliative care should receive strong support.",
      "Fraud, unnecessary procedures and over-prescription actively controlled.",
    ],
    principle:
      "Necessary care should not be denied because a person is poor, but healthcare resources are finite and should be used responsibly.",
    manifestoBasis: ["moral-order", "subsidiarity"],
    related: ["catholic-medical-ethics", "euthanasia-and-assisted-suicide", "welfare-and-social-assistance", "abortion"],
    keywords: ["healthcare", "universal", "co-payments", "hospitals", "medicine"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "catholic-medical-ethics",
    title: "Catholic Medical Ethics",
    category: "healthcare",
    status: "Agreed Policy",
    shortAnswer:
      "Public healthcare should respect Catholic medical ethics, and Catholic hospitals should be free to maintain their own ethical standards.",
    position: [
      "Public healthcare should respect Catholic medical ethics. Procedures regarded by Restore Europe as morally impermissible under Catholic teaching should not receive ordinary public funding, and Catholic hospitals should be free to maintain their ethical standards.",
    ],
    manifestoBasis: ["moral-order"],
    related: ["abortion", "euthanasia-and-assisted-suicide", "contraception", "universal-healthcare-access"],
    keywords: ["medical ethics", "conscience", "Catholic hospitals", "bioethics", "funding"],
    lastUpdated: "2026-09-15",
  },

  /* ------------------------------------------------------- IX. Environment */
  {
    slug: "environmental-stewardship",
    title: "Environmental Stewardship",
    category: "environment",
    status: "Manifesto Core",
    shortAnswer:
      "Nature is an inheritance entrusted to humanity rather than a commodity without limit or a divinity, and should be stewarded accordingly.",
    position: [
      "Nature is an inheritance entrusted to humanity rather than a commodity without limit or a divinity. Restore Europe supports stewardship of forests, rivers, farmland, mountains, coastlines and biodiversity.",
    ],
    policies: [
      "Healthy soils and clean water.",
      "Local agriculture and regional supply chains.",
      "Responsible forestry.",
      "Durable products and repair rather than disposability.",
      "Restoration of damaged ecosystems.",
      "Settlement patterns that preserve both community and landscape.",
    ],
    manifestoBasis: ["stewardship"],
    related: ["energy-and-climate-policy", "right-to-repair", "architecture-and-historic-preservation", "private-property-and-broad-ownership"],
    keywords: ["environment", "stewardship", "nature", "biodiversity", "farmland"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "energy-and-climate-policy",
    title: "Energy and Climate Policy",
    category: "environment",
    status: "Open",
    shortAnswer:
      "No positions have been adopted on nuclear power, fossil fuels, renewable energy, carbon taxation or emissions targets.",
    position: [
      "Detailed positions on nuclear power, fossil fuels, renewable energy, carbon taxation and emissions targets remain to be adopted.",
    ],
    manifestoBasis: ["stewardship"],
    related: ["environmental-stewardship", "taxation"],
    keywords: ["energy", "climate", "nuclear", "fossil fuels", "renewables", "emissions"],
    lastUpdated: "2026-09-15",
  },

  /* ---------------------------------------------------- X. Foreign policy */
  {
    slug: "foreign-policy-doctrine",
    title: "Foreign Policy Doctrine",
    category: "foreign-policy",
    status: "Manifesto Core",
    shortAnswer:
      "Strategic independence rather than imperial ambition, guided by prudence, legitimate national interest and a strong presumption against unnecessary war.",
    position: [
      "European foreign policy should seek strategic independence rather than imperial ambition. It should be guided by prudence, legitimate national interest, defense of the innocent where realistically possible, and a strong presumption against unnecessary war.",
    ],
    policies: [
      "Strategic independence in food, energy, infrastructure, medicine and essential industry.",
      "Opposition to ideological wars aimed at reconstructing foreign civilizations according to abstract political models.",
      "European nations should possess the capacity to defend themselves and secure their borders.",
    ],
    manifestoBasis: ["foreign-policy"],
    related: ["europe-as-a-civilization-of-nations", "nato", "conscription", "nuclear-weapons"],
    keywords: ["foreign policy", "defense", "strategic independence", "war", "intervention"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "nato",
    title: "NATO",
    category: "foreign-policy",
    status: "Open",
    shortAnswer: "No position has been adopted.",
    position: [
      "No final Restore Europe position has been adopted on NATO membership, reform or alternatives to it.",
    ],
    manifestoBasis: ["foreign-policy"],
    related: ["foreign-policy-doctrine", "united-states", "russia"],
    keywords: ["NATO", "alliance", "collective defense", "Article 5"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "russia",
    title: "Russia",
    category: "foreign-policy",
    status: "Open",
    shortAnswer: "No position has been adopted.",
    position: ["No final Restore Europe position has been adopted on relations with Russia."],
    manifestoBasis: ["foreign-policy"],
    related: ["foreign-policy-doctrine", "ukraine", "nato"],
    keywords: ["Russia", "Moscow", "sanctions", "energy"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "ukraine",
    title: "Ukraine",
    category: "foreign-policy",
    status: "Open",
    shortAnswer: "No position has been adopted.",
    position: ["No final Restore Europe position has been adopted on Ukraine."],
    manifestoBasis: ["foreign-policy"],
    related: ["foreign-policy-doctrine", "russia", "nato"],
    keywords: ["Ukraine", "Kyiv", "war", "reconstruction"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "united-states",
    title: "United States",
    category: "foreign-policy",
    status: "Open",
    shortAnswer: "No position has been adopted.",
    position: ["No final Restore Europe position has been adopted on relations with the United States."],
    manifestoBasis: ["foreign-policy"],
    related: ["foreign-policy-doctrine", "nato"],
    keywords: ["United States", "America", "Atlanticism", "trade"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "china",
    title: "China",
    category: "foreign-policy",
    status: "Open",
    shortAnswer: "No position has been adopted.",
    position: ["No final Restore Europe position has been adopted on relations with China."],
    manifestoBasis: ["foreign-policy"],
    related: ["foreign-policy-doctrine", "economic-order"],
    keywords: ["China", "Beijing", "trade", "supply chains"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "israel-and-palestine",
    title: "Israel and Palestine",
    category: "foreign-policy",
    status: "Open",
    shortAnswer: "No position has been adopted.",
    position: ["No final Restore Europe position has been adopted on Israel and Palestine."],
    manifestoBasis: ["foreign-policy"],
    related: ["foreign-policy-doctrine"],
    keywords: ["Israel", "Palestine", "Middle East"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "conscription",
    title: "Conscription",
    category: "foreign-policy",
    status: "Open",
    shortAnswer: "No position has been adopted.",
    position: [
      "No final Restore Europe position has been adopted on conscription, national service or a professional volunteer force.",
    ],
    manifestoBasis: ["foreign-policy"],
    related: ["foreign-policy-doctrine", "work"],
    keywords: ["conscription", "national service", "draft", "military"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "nuclear-weapons",
    title: "Nuclear Weapons",
    category: "foreign-policy",
    status: "Open",
    shortAnswer: "No position has been adopted.",
    position: ["No final Restore Europe position has been adopted on nuclear weapons or deterrence."],
    manifestoBasis: ["foreign-policy"],
    related: ["foreign-policy-doctrine", "nato"],
    keywords: ["nuclear weapons", "deterrence", "disarmament", "proliferation"],
    lastUpdated: "2026-09-15",
  },
];

/**
 * Section XI of the catalogue. These are recorded as undecided rather than
 * inferred from the ideology, and are listed so that the gaps are visible
 * instead of being quietly filled in.
 */
export const openQueue: readonly string[] = [
  "Exact EU institutional model",
  "Minimum-wage mechanism",
  "Income tax",
  "Corporate tax",
  "VAT",
  "Inheritance tax",
  "Wealth tax",
  "Pensions",
  "Detailed housing restrictions",
  "Trade-union model",
  "Detailed asylum procedure",
  "Deportation procedure",
  "Exact high-office waiting periods",
  "Central bank digital currencies",
  "Cryptocurrency",
  "Facial recognition",
  "Metadata retention",
  "Detailed social-media age rules",
  "Genetic engineering",
  "Transhumanist enhancement",
  "Nuclear energy",
  "Fossil fuels",
  "Renewable energy",
  "Climate targets",
  "NATO",
  "Russia",
  "Ukraine",
  "United States",
  "China",
  "Israel and Palestine",
  "Foreign aid",
  "Sanctions",
  "Conscription",
  "Nuclear weapons",
  "Exact criminal sentencing ranges",
];
