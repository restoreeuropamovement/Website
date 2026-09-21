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
  version: "Version 0.2",
  /** ISO date of the catalogue as a whole. */
  date: "2026-09-21",
  framework: "European Integral Restorationism",
  lede:
    "This catalogue answers a narrow question: what does Restore Europe hold on this issue? It does not replace the manifesto. The manifesto sets out the worldview; this sets out searchable, topic-by-topic positions.",
  body: [
    "Where Catholic moral teaching is clear, Restore Europe generally adopts it as the moral baseline, and states civil-law implementation separately. One departure is recorded explicitly: on capital punishment Restore Europe takes the older traditional allowance for exceptional cases rather than the contemporary abolitionist position.",
    "The catalogue distinguishes the constitutional order Restore Europe seeks from European law as it currently stands. Several positions — on nationality, on deprivation of citizenship, on speech, on the public standing of religion and on capital punishment — would require constitutional or treaty change before they could be enacted in particular European states. Where that is so, the entry says it.",
    "Version 0.2 settles the questions version 0.1 had left open: the European institutional relationship, asylum, deportation, wages, taxation, pensions, housing, labour representation, digital identity and currency, biometric surveillance, genetic engineering, sentencing, the energy mix and every standing question of foreign policy. Where a v0.2 formulation revised an earlier entry, the newer text governs.",
  ],
} as const;

/**
 * Shown wherever the catalogue is listed. The version number is not decoration:
 * a catalogue that says which of its positions are settled is more use than one
 * that presents every line with the same confidence.
 */
export const CATALOGUE_NOTICE =
  "Every question in this catalogue carries a position. Entries marked Derived follow the direction of the manifesto without their implementation being fixed, and several name the legal or treaty change they would require. Positions are revised as the movement decides; the version and date above say which text you are reading.";

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
    related: ["asylum-and-international-protection", "citizenship-general-principle", "naturalization", "demographic-renewal"],
    keywords: ["immigration", "migration", "borders", "integration", "asylum"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "asylum-and-international-protection",
    title: "Asylum and International Protection",
    category: "nation",
    status: "Agreed Policy",
    shortAnswer:
      "Asylum is protection from genuine persecution or serious danger, not a general mechanism for choosing a preferred country of settlement.",
    position: [
      "Protection should normally be provided in the first genuinely safe country available and, where practicable, as close as possible to the displaced person's home region. European states retain the right to reject unfounded claims and remove persons with no lawful basis to remain.",
    ],
    policies: [
      "Maintain access to asylum for persons credibly alleging persecution or serious harm.",
      "Require prompt registration, identity checks and security screening.",
      "Use accelerated procedures for applicants from generally safe countries, while preserving an individual opportunity to show that the presumption does not apply to them.",
      "Apply a strong first-safe-country or safe-third-country principle where effective protection is genuinely available.",
      "Distinguish refugees from ordinary economic migrants; economic hardship alone is not asylum.",
      "Prioritize regional humanitarian assistance and controlled resettlement of particularly vulnerable refugees where appropriate.",
      "Rejected applicants should be removed promptly after applicable review rights are exhausted.",
      "Temporary wartime protection should remain temporary and be reviewed when conditions materially change.",
      "Unaccompanied minors and persons with genuine vulnerabilities receive separate safeguards.",
    ],
    implementationNote:
      "The policy depends on individualized protection screening and the non-refoulement principle. Existing European and international obligations would constrain any attempt to remove a person to a place where they face persecution, torture or comparable serious harm.",
    manifestoBasis: ["nation", "immigration", "europe", "foreign-policy"],
    related: ["immigration", "asylum-work-and-public-assistance", "deportation-of-criminal-offenders", "foreign-aid"],
    keywords: ["asylum", "refugees", "first safe country", "safe third country", "non-refoulement", "temporary protection", "return"],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "asylum-work-and-public-assistance",
    title: "Asylum, Work and Public Assistance",
    category: "nation",
    status: "Agreed Policy",
    shortAnswer:
      "Protection should facilitate self-sufficiency rather than permanent welfare dependency.",
    position: [
      "Persons admitted for protection who are capable of working should be expected to become economically self-supporting as rapidly as reasonably possible. Pending claims should not automatically open access to the full ordinary welfare system.",
    ],
    policies: [
      "Permit lawful work as early as administratively practicable.",
      "Expect able-bodied adults to seek work once employment is legally available.",
      "During claim determination, focus assistance on necessary accommodation, food, essential healthcare and basic necessities rather than unrestricted cash support.",
      "Allow proportionate work, language and cooperation requirements where lawful.",
      "Do not create preferential access to scarce public benefits over citizens in comparable need.",
      "End integration-oriented support after final rejection and transfer the person into the return system.",
      "Preserve emergency necessities and appropriate support for children and persons genuinely unable to support themselves.",
    ],
    implementationNote:
      "Under the 1951 Refugee Convention, recognized refugees lawfully staying in a contracting state receive treaty protections concerning employment and public relief. A policy seeking to exclude recognized refugees altogether from covered public relief would require examination of treaty obligations rather than ordinary legislation alone.",
    manifestoBasis: ["family", "immigration", "economic-order", "subsidiarity", "work"],
    related: ["asylum-and-international-protection", "welfare-and-social-assistance", "work", "immigration"],
    keywords: ["asylum", "welfare", "work requirement", "self-sufficiency", "refugees", "public assistance", "temporary protection"],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "deportation-of-criminal-offenders",
    title: "Deportation of Non-Citizen Criminal Offenders",
    category: "nation",
    status: "Agreed Policy",
    shortAnswer:
      "A non-citizen convicted of a qualifying serious criminal offence should ordinarily lose the right to remain and receive a permanent re-entry ban.",
    position: [
      "Citizenship and foreign residence are distinct statuses. Serious intentional criminal offending by a non-citizen may justify termination of residence after conviction through a fair criminal process.",
    ],
    policies: [
      "Require a lawful criminal conviction before criminal deportation.",
      "Serious violent crime, serious sexual offences, robbery, organized crime, terrorism, trafficking, serious drug distribution, serious fraud and comparable intentional offences presumptively trigger removal.",
      "Repeated offending may justify removal even where individual offences are less serious.",
      "Where imprisonment is imposed, removal ordinarily follows completion of the custodial sentence unless lawful earlier transfer is available.",
      "Attach a permanent re-entry prohibition to qualifying criminal deportations.",
      "Minor administrative or trivial offences do not automatically trigger permanent expulsion.",
      "Naturalized citizens are governed by separate citizenship-revocation rules and are not treated as foreign residents unless citizenship has first been lawfully revoked.",
      "Citizens may not be deported from their own country.",
    ],
    implementationNote:
      "A lawfully resident foreign national currently benefits from procedural safeguards against expulsion under European human-rights law. Removal may also be barred where return would expose the person to prohibited ill-treatment. The intended model is therefore rapid after final conviction, but still legally reviewable where binding obligations require it.",
    manifestoBasis: ["nation", "immigration", "subsidiarity", "democracy"],
    related: ["immigration", "revocation-of-naturalized-citizenship", "criminal-sentencing", "asylum-and-international-protection"],
    keywords: ["deportation", "criminal offenders", "expulsion", "re-entry ban", "residence permit", "public order", "removal"],
    lastUpdated: "2026-09-21",
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
    title: "Eligibility for High Public Office",
    category: "nation",
    status: "Agreed Policy",
    shortAnswer:
      "The highest offices of the nation are reserved for citizens with a birth, descent and historical connection to the country rather than acquired citizenship alone.",
    position: [
      "Ordinary citizenship and eligibility for supreme constitutional, security and military offices are distinct questions. Naturalization alone does not create eligibility for the highest offices of state.",
    ],
    policies: [
      "Apply heightened eligibility rules to head of state, head of government, defence and internal-security leadership, senior armed-forces command, senior intelligence leadership and other offices of exceptional constitutional authority.",
      "Require citizenship from birth and a demonstrable ancestral or historical national connection.",
      "Require substantial national roots, command of the national language and an established record of loyalty to the constitutional and national order.",
      "Ordinary naturalization, regardless of duration, does not by itself confer eligibility for these offices.",
      "Define precisely by statute which offices fall within the restricted category.",
    ],
    implementationNote:
      "Rules based on descent, birth or ethnic origin would face major equality and non-discrimination challenges under current European and international human-rights law. Any implementation would require unusually precise legal criteria and potentially constitutional or treaty change.",
    manifestoBasis: ["nation", "immigration", "subsidiarity", "democracy"],
    related: ["voting-rights-after-naturalization", "naturalization", "authority-democracy-and-subsidiarity", "citizenship-by-descent"],
    keywords: ["high public office", "president", "prime minister", "citizenship by birth", "descent", "national continuity", "eligibility", "ministers", "allegiance"],
    lastUpdated: "2026-09-21",
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
    status: "Agreed Policy",
    shortAnswer:
      "Restore Europe supports fundamental reform of the European Union into a limited framework for cooperation among sovereign European nations, with most political powers returned to the member states.",
    position: [
      "European cooperation should continue, but continental institutions should possess only those competences that genuinely require action at European level. Restore Europe rejects movement toward a centralized post-national state and applies subsidiarity strictly.",
    ],
    policies: [
      "Return substantial legislative and regulatory competences to member states.",
      "Keep family policy, education, culture, religion, ordinary criminal law and most domestic social policy principally national.",
      "Retain European cooperation where scale genuinely makes it useful, including selected cross-border infrastructure, scientific cooperation, trade, border coordination and strategic security.",
      "Prevent EU institutions from imposing a uniform moral or cultural programme on member nations.",
      "Preserve national sovereignty, constitutional identity and historical continuity.",
      "Seek a European civilizational framework that recognizes Europe's Christian inheritance while preserving national political autonomy.",
    ],
    implementationNote:
      "Article 5 of the Treaty on European Union already recognizes conferral, subsidiarity and proportionality. This policy would demand a materially stricter application of those principles and substantial treaty and institutional reform.",
    manifestoBasis: ["europe", "subsidiarity", "democracy"],
    related: ["europe-as-a-civilization-of-nations", "authority-democracy-and-subsidiarity", "nation-and-historical-continuity"],
    keywords: ["European Union", "EU", "sovereignty", "subsidiarity", "European Commission", "treaty reform", "Christian Europe", "Brussels", "competences"],
    lastUpdated: "2026-09-21",
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
    title: "Minimum Wage and the Just Wage",
    category: "economy",
    status: "Agreed Policy",
    shortAnswer:
      "Every worker is entitled to a just wage sufficient for a dignified life and the reasonable support of a family.",
    position: [
      "Catholic social teaching sets a substantive just-wage standard rather than one universal statutory mechanism. Restore Europe therefore favours sectoral and regional wage-setting through representative institutions, backed by statutory protection where necessary.",
    ],
    policies: [
      "Establish the principle of a legally protected just wage.",
      "Normally determine wage floors at the appropriate sectoral or regional level through workers, employers and vocational bodies.",
      "Permit guilds, chambers and collective institutions to negotiate standards appropriate to productivity, skills and sector conditions.",
      "Allow statutory minimum protection where bargaining institutions fail to secure a just wage.",
      "Take family needs into account rather than treating individual subsistence as the sole standard.",
      "Use family allowances or child benefits where appropriate so that raising children does not create an unreasonable economic penalty.",
      "Consider enterprise viability, productivity and employment opportunities.",
    ],
    implementationNote:
      "The Catechism describes a just wage as the legitimate fruit of work and says fair pay must consider needs, contributions, productivity, the condition of the business and the common good. Laborem Exercens explicitly connects just remuneration to the ability to establish and maintain a family.",
    manifestoBasis: ["moral-order", "economic-order", "corporatism", "work"],
    related: ["work", "guilds-chambers-and-corporatist-representation", "trade-unions-and-vocational-representation", "taxation"],
    keywords: ["minimum wage", "just wage", "living wage", "family wage", "workers", "guilds", "collective bargaining", "pay", "wage floor"],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "taxation",
    title: "Taxation",
    category: "economy",
    status: "Derived",
    shortAnswer:
      "Taxation is legitimate for the common good but should be fair, family-sensitive, non-confiscatory and compatible with broad ownership, productive work and subsidiarity.",
    position: [
      "The tax system should finance legitimate public functions without becoming a mechanism for eliminating private property, discouraging family formation or unnecessarily centralizing social responsibilities.",
    ],
    policies: [
      "Apply taxes by clear law, reasonably and fairly.",
      "Keep the overall burden compatible with household independence, saving, productive enterprise and broad property ownership.",
      "Give substantial recognition to dependent children and avoid marriage or child-rearing penalties.",
      "Prefer productive work and long-term investment over speculative extraction where tax design can distinguish them coherently.",
      "Avoid disproportionate compliance burdens on small firms, family enterprises, farms and craftsmen.",
      "Collect revenue at the lowest competent level where practicable.",
      "Use moderate progression in income taxation while avoiding punitive marginal rates.",
      "Protect ordinary family homes, farms and operating family businesses from inheritance-tax structures that force unnecessary liquidation.",
      "Remain cautious toward recurrent general wealth taxes that can tax illiquid property independently of income.",
      "Use reduced consumption-tax treatment for essentials where practicable.",
    ],
    limits: [
      "Exact rates are not prescribed and remain a national implementation question.",
    ],
    implementationNote:
      "Catholic social teaching treats payment of taxes as part of solidarity, while requiring reasonable and fair application, integrity in public spending and special attention to families.",
    manifestoBasis: ["family", "economic-order", "corporatism", "finance", "subsidiarity"],
    related: ["family", "private-property-and-broad-ownership", "minimum-wage", "pensions", "housing-restrictions"],
    keywords: ["tax", "taxation", "income tax", "corporate tax", "VAT", "inheritance tax", "wealth tax", "family taxation", "subsidiarity"],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "pensions",
    title: "Pensions",
    category: "economy",
    status: "Agreed Policy",
    shortAnswer:
      "A mixed pension system should combine basic old-age security with occupational provision, personal savings, family property and intergenerational responsibility.",
    position: [
      "Older people who have contributed to society should not face destitution, but retirement provision should not make citizens wholly dependent on one centralized state system.",
    ],
    policies: [
      "Guarantee a basic pension sufficient to protect elderly citizens from poverty.",
      "Encourage occupational and sectoral pension funds organized through employers, guilds, professional chambers and other intermediate institutions.",
      "Encourage private retirement saving and long-term household asset ownership.",
      "Credit periods devoted to raising children or providing substantial family care when calculating public pension entitlements.",
      "Avoid pension rules that structurally penalize marriage, parenthood or family care.",
      "Maintain fiscal sustainability so one generation does not impose unpayable obligations on the next.",
      "Permit national variation in the balance between public, occupational and private provision.",
    ],
    implementationNote:
      "The model applies solidarity and subsidiarity: a public floor where lower institutions cannot provide adequate security, combined with occupational institutions, household saving and private ownership.",
    manifestoBasis: ["family", "economic-order", "corporatism", "subsidiarity", "work"],
    related: ["welfare-and-social-assistance", "family", "guilds-chambers-and-corporatist-representation", "taxation"],
    keywords: ["pensions", "retirement", "old age", "social security", "pension funds", "family", "savings", "property"],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "housing-restrictions",
    title: "Detailed Housing Restrictions",
    category: "economy",
    status: "Derived",
    shortAnswer:
      "Housing should principally serve habitation and community, with policy aimed at widespread family ownership rather than permanent financial extraction.",
    position: [
      "Private property is protected, while proportionate restrictions may address practices that turn scarce housing into a vehicle for artificial scarcity, monopoly or speculative accumulation.",
    ],
    policies: [
      "Make widespread owner-occupation a central housing objective.",
      "Expand supply where compatible with infrastructure, local character and environmental stewardship.",
      "Reduce unnecessary planning barriers to appropriate family housing while preserving historic settlements and landscapes.",
      "Give reasonable support to first-time buyers and families.",
      "Discourage predatory mortgage structures and encourage predictable long-term finance.",
      "Permit stronger regulation of bulk residential acquisition by dominant institutional investors where it materially displaces ordinary buyers.",
      "Permit additional taxation or regulation of long-term vacant investment property where scarcity is severe.",
      "Protect family homes, family farms and ordinary inherited property from forced liquidation.",
      "Support cooperatives and locally rooted ownership models where they broaden meaningful ownership.",
      "Prefer proportionate tenant protections over rent-control systems that make new housing economically impossible.",
    ],
    implementationNote:
      "The manifesto already states that housing should serve habitation and community rather than function principally as an appreciating financial asset. Detailed restrictions should be calibrated nationally and locally.",
    manifestoBasis: ["family", "economic-order", "finance", "architecture"],
    related: ["housing-and-financialization", "private-property-and-broad-ownership", "architecture-and-historic-preservation", "taxation"],
    keywords: ["housing", "home ownership", "rent", "land", "property", "financialization", "mortgages", "institutional investors"],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "trade-unions-and-vocational-representation",
    title: "Trade Unions, Guilds and Vocational Representation",
    category: "economy",
    status: "Agreed Policy",
    shortAnswer:
      "Workers may organize independently, while labour relations should move toward a corporatist system of permanent sectoral institutions representing workers, employers and professions.",
    position: [
      "Restore Europe rejects both worker powerlessness before concentrated capital and permanent class conflict as the organizing principle of economic life.",
    ],
    policies: [
      "Protect the right to form and join independent trade unions.",
      "Protect lawful collective bargaining over wages and working conditions.",
      "Establish sectoral chambers or vocational corporations representing workers, employers, craftsmen and professions.",
      "Allow those bodies to negotiate wage floors, apprenticeships, professional standards and dispute-resolution mechanisms.",
      "Encourage mediation and negotiated settlement before prolonged industrial conflict.",
      "Preserve a proportionate right to strike while protecting genuinely essential services through continuity requirements.",
      "Prevent unions from becoming compulsory organs of the state.",
      "Prevent employers from controlling supposedly independent worker organizations.",
      "Permit genuine plural representation rather than one state-controlled union.",
    ],
    implementationNote:
      "The manifesto expressly supports modern guilds, professional chambers and vocational corporations while rejecting occupational bodies as instruments of an omnipotent state. Catholic teaching also recognizes trade-union organization and proportionate strike action.",
    manifestoBasis: ["economic-order", "corporatism", "subsidiarity", "work"],
    related: ["guilds-chambers-and-corporatist-representation", "minimum-wage", "work", "corporations-and-monopolies"],
    keywords: ["trade unions", "guilds", "corporatism", "collective bargaining", "strikes", "vocational chambers", "labour conditions"],
    lastUpdated: "2026-09-21",
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
    related: ["digital-identification", "central-bank-digital-currencies", "technology-general-doctrine", "surveillance"],
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
    related: ["artificial-intelligence", "facial-recognition", "communications-metadata-retention", "digital-identification"],
    keywords: ["surveillance", "privacy", "facial recognition", "CCTV", "data retention"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "children-social-media-and-attention-capture",
    title: "Children and Social Media",
    category: "technology",
    status: "Manifesto Core",
    secondaryStatus: "Derived",
    shortAnswer:
      "Children should receive strong legal protection from social-media systems designed to maximize compulsive attention and psychological dependence.",
    position: [
      "Parents remain the primary guardians of children, while the state may regulate commercial systems that deliberately exploit children's developmental vulnerability.",
    ],
    policies: [
      "Provide substantially stronger privacy and discoverability defaults for minors.",
      "Restrict manipulative engagement systems aimed at maximizing compulsive use by children.",
      "Severely restrict targeted behavioural advertising to children.",
      "Require effective parental controls.",
      "Do not require pupils to maintain commercial social-media accounts for ordinary schooling.",
      "Permit limits on night-time notification and engagement mechanisms aimed at minors.",
      "Design age assurance to minimize identity-data collection.",
      "Use a general framework of highly restricted access under 13, strong parental and minor protections at 13–15, broader but still protected access at 16–17, and ordinary adult rules at 18.",
    ],
    implementationNote:
      "The manifesto expressly states that children should be protected from industries whose profit models depend on maximizing psychological dependence. The exact age-verification mechanism remains an implementation question.",
    manifestoBasis: ["family", "technology", "human-scale-life", "education"],
    related: ["family", "pornography", "purpose-of-education", "technology-general-doctrine", "digital-identification"],
    keywords: ["social media", "children", "minors", "attention capture", "addiction", "parental controls", "age verification", "smartphones"],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "digital-identification",
    title: "Digital Identification",
    category: "technology",
    status: "Derived",
    shortAnswer:
      "Digital identification may exist as an optional convenience, but ordinary civic participation must not require compulsory digital-only identity.",
    position: [
      "Citizens should retain meaningful non-digital access and should not be forced into a universal identity architecture capable of routine behavioural surveillance.",
    ],
    policies: [
      "Keep physical identification available wherever reasonably practicable.",
      "Do not deny essential public services merely because a person refuses a smartphone or digital-ID application.",
      "Collect only data necessary for the stated administrative purpose.",
      "Separate identity systems from general behavioural-surveillance systems.",
      "Require clear legal authority and auditability for access to identity data.",
      "Prohibit social-credit systems and political or religious behavioural scoring.",
      "Avoid automatically linking medical, financial, educational, travel and communications records into one universal state profile.",
    ],
    implementationNote:
      "The manifesto explicitly protects non-digital identification where practicable and rejects unlimited technological dependence.",
    manifestoBasis: ["technology", "human-scale-life"],
    related: ["cash-and-non-digital-access", "surveillance", "central-bank-digital-currencies", "technology-general-doctrine"],
    keywords: ["digital ID", "electronic identity", "privacy", "surveillance", "social credit", "non-digital access", "identity"],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "central-bank-digital-currencies",
    title: "Central Bank Digital Currencies",
    category: "technology",
    status: "Derived",
    shortAnswer:
      "A CBDC must not replace physical cash or become a compulsory, programmable system of transaction surveillance.",
    position: [
      "A central-bank digital currency may be tolerated as an optional payment instrument only under strict privacy and decentralization safeguards.",
    ],
    policies: [
      "Do not abolish cash in favour of a mandatory CBDC.",
      "Do not require salaries, benefits or ordinary transactions to use CBDC infrastructure exclusively.",
      "Do not permit routine government monitoring of every lawful transaction.",
      "Prohibit programmable political restrictions on otherwise lawful purchases.",
      "Prohibit artificial expiry of citizens' money.",
      "Prohibit use of CBDCs for social-credit systems.",
      "Preserve meaningful private transactions within proportionate anti-crime rules.",
    ],
    implementationNote:
      "The manifesto does not name CBDCs, but explicitly guarantees meaningful access to physical money and rejects unnecessary technological dependency and surveillance.",
    manifestoBasis: ["technology", "human-scale-life"],
    related: ["cash-and-non-digital-access", "digital-identification", "cryptocurrency", "finance-lending-and-usury"],
    keywords: ["CBDC", "digital euro", "cash", "programmable money", "financial privacy", "digital currency"],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "cryptocurrency",
    title: "Cryptocurrency",
    category: "technology",
    status: "Derived",
    shortAnswer:
      "Lawful cryptocurrency ownership and transfer should remain permitted, while fraud, theft and abusive centralized custody remain regulated.",
    position: [
      "Cryptocurrency is neither inherently liberating nor inherently illegitimate. It should be judged according to whether it serves legitimate economic purposes without producing fraud, predatory speculation or unnecessary dependence.",
    ],
    policies: [
      "Permit lawful ownership and transfer of cryptocurrency.",
      "Apply ordinary criminal law to fraud, theft, market manipulation and deceptive promotion.",
      "Regulate exchanges holding customer assets proportionately for solvency, custody and anti-fraud purposes.",
      "Distinguish decentralized protocols from centralized custodial businesses.",
      "Do not prohibit private cryptocurrency merely to protect a monopoly for a future CBDC.",
      "Use clear and administratively reasonable tax treatment.",
      "Do not prohibit privacy-preserving technology merely because privacy is technically possible.",
    ],
    implementationNote:
      "Cryptocurrency is not specifically addressed in the manifesto. This position is derived from private property, opposition to concentrated financial domination and technological subordination rather than technological prohibition.",
    manifestoBasis: ["economic-order", "finance", "technology", "human-scale-life"],
    related: ["central-bank-digital-currencies", "finance-lending-and-usury", "cash-and-non-digital-access", "private-property-and-broad-ownership"],
    keywords: ["cryptocurrency", "Bitcoin", "digital assets", "blockchain", "decentralization", "financial privacy"],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "facial-recognition",
    title: "Facial Recognition",
    category: "technology",
    status: "Derived",
    shortAnswer:
      "Permanent or indiscriminate facial-recognition surveillance of the general population should be prohibited.",
    position: [
      "Facial recognition may have narrow legitimate uses for serious criminal investigations, but public space should not become a permanently monitored biometric environment.",
    ],
    policies: [
      "Prohibit universal real-time facial tracking of citizens in ordinary public life.",
      "Prohibit permanent biometric cataloguing of everyone entering streets, shops, churches, demonstrations or public transport.",
      "Permit targeted use for serious criminal investigations subject to legal authorization, necessity, proportionality and time limits.",
      "Require lawful standards for biometric watchlists and correction of false identification.",
      "Do not routinely catalogue political or religious gatherings biometrically.",
      "Restrict private companies from constructing permanent biometric profiles without a strong lawful basis.",
    ],
    implementationNote:
      "The manifesto does not name facial recognition, but expressly protects meaningful private spaces free from permanent surveillance.",
    manifestoBasis: ["technology", "human-scale-life"],
    related: ["surveillance", "communications-metadata-retention", "digital-identification", "technology-general-doctrine"],
    keywords: ["facial recognition", "biometrics", "CCTV", "surveillance", "privacy", "public space"],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "communications-metadata-retention",
    title: "Communications Metadata Retention",
    category: "technology",
    status: "Derived",
    shortAnswer:
      "Indiscriminate permanent retention of the communications metadata of the entire population should be rejected.",
    position: [
      "The state may obtain communications records for legitimate investigations, but ordinary citizens should not be treated as permanent suspects.",
    ],
    policies: [
      "Reject indefinite mass retention of everyone's communications metadata.",
      "Permit targeted preservation and access for investigation of serious crime and national-security threats.",
      "Normally require judicial or comparably independent authorization for access.",
      "Use limited retention periods and delete unrelated data when lawful retention expires.",
      "Do not make bulk surveillance the default architecture of communications infrastructure.",
      "Maintain strong oversight of law-enforcement and intelligence access.",
    ],
    implementationNote:
      "Metadata retention is not named directly in the manifesto. The policy follows from its explicit rejection of permanent surveillance and technological centralization.",
    manifestoBasis: ["technology", "human-scale-life", "subsidiarity"],
    related: ["surveillance", "facial-recognition", "digital-identification", "free-speech-and-public-doctrine"],
    keywords: ["metadata", "data retention", "communications surveillance", "privacy", "telecommunications", "intelligence"],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "genetic-engineering",
    title: "Genetic Engineering",
    category: "technology",
    status: "Derived",
    shortAnswer:
      "Therapeutic genetic medicine may be legitimate, while heritable enhancement and the instrumentalization of embryonic human life face a strong prohibition.",
    position: [
      "Restore Europe distinguishes treatment of disease from projects aimed at redesigning human nature or selecting preferred human traits.",
    ],
    policies: [
      "Permit legitimate somatic gene therapy directed toward treatment of disease, subject to medical safety standards.",
      "Prohibit genetic experimentation that treats human embryos merely as disposable research material where this conflicts with protection of human life from conception.",
      "Maintain a strong presumption against heritable germline enhancement.",
      "Prohibit commercial creation of genetically selected or engineered designer children.",
      "Distinguish therapy from enhancement of intelligence, appearance, strength or other preferred traits.",
      "Reject eugenic state programmes.",
      "Protect genetic information as highly sensitive personal data.",
    ],
    implementationNote:
      "The manifesto does not settle genetic engineering in detail. The position is derived from Catholic anthropology, protection of life from conception and the principle that technological capability does not itself create moral legitimacy.",
    manifestoBasis: ["moral-order", "person-not-atom", "family", "technology"],
    related: ["transhumanism-and-human-enhancement", "catholic-medical-ethics", "abortion", "technology-general-doctrine"],
    keywords: ["genetic engineering", "gene editing", "CRISPR", "germline", "embryos", "gene therapy", "designer babies", "eugenics"],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "transhumanism-and-human-enhancement",
    title: "Transhumanism and Human Enhancement",
    category: "technology",
    status: "Derived",
    shortAnswer:
      "Medicine may heal and restore, but human beings should not be treated as raw material for technological optimization or replacement.",
    position: [
      "Human dignity does not depend on intelligence, strength, longevity, productivity or technological augmentation.",
    ],
    policies: [
      "Permit therapeutic prosthetics, implants and assistive technologies.",
      "Distinguish restoration of normal human function from ideological projects to replace ordinary humanity with engineered successors.",
      "Prohibit compelled neurological, cybernetic or genetic augmentation as a condition of work or civic participation.",
      "Do not create legally privileged classes of technologically modified persons.",
      "Subject military enhancement programmes to strict ethical review.",
      "Impose stringent restrictions on brain-computer interfaces that compromise mental privacy or autonomy.",
      "Generally prohibit heritable enhancement of future generations.",
    ],
    implementationNote:
      "The manifesto's anthropology strongly constrains transhumanist projects, but detailed implementation is derived rather than explicit.",
    manifestoBasis: ["moral-order", "person-not-atom", "technology", "human-scale-life"],
    related: ["genetic-engineering", "technology-general-doctrine", "artificial-intelligence", "catholic-medical-ethics"],
    keywords: ["transhumanism", "human enhancement", "cybernetics", "brain-computer interface", "augmentation", "human dignity", "bioethics"],
    lastUpdated: "2026-09-21",
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
    related: ["criminal-sentencing", "death-penalty", "recreational-drugs", "firearms-and-self-defense"],
    keywords: ["prisons", "sentencing", "punishment", "rehabilitation", "criminal justice"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "criminal-sentencing",
    title: "Criminal Sentencing",
    category: "government",
    status: "Agreed Policy",
    shortAnswer:
      "Punishment should be proportionate to gravity and culpability, protect society, provide restitution where possible and pursue rehabilitation where realistic.",
    position: [
      "Sentencing should distinguish sharply between minor wrongdoing and deliberate grave violence. Criminal punishment may legitimately serve protection, proportionate retribution, restoration of public order, restitution, deterrence and rehabilitation.",
    ],
    policies: [
      "Require conviction through a lawful and fair process before punishment.",
      "Treat intent, premeditation, cruelty, abuse of vulnerable victims, organized criminality and repeated serious offending as aggravating factors.",
      "Prefer proportionate fines, restitution, community service, probation and treatment for appropriate minor or non-violent offences.",
      "Use substantial imprisonment for serious violence, robbery, kidnapping, serious organized crime, major trafficking, serious corruption, major fraud, serious sexual offences and repeated violent offending.",
      "Treat rape and serious sexual abuse of children as exceptionally grave crimes.",
      "Use long-term or life imprisonment where appropriate in the gravest non-capital cases.",
      "Permit narrowly regulated protective measures after sentence only where an offender demonstrably remains a grave danger and due process is maintained.",
      "For legal precision, punish criminal sexual conduct such as abuse, exploitation, grooming and illegal child-abuse material rather than a psychiatric diagnosis or attraction by itself.",
    ],
    limits: [
      "Exact numeric sentencing ranges remain a matter for later criminal-code drafting rather than being invented without an evidentiary basis.",
    ],
    implementationNote:
      "The catalogue's existing prison doctrine already combines proportionate punishment, protection of society, restitution and rehabilitation.",
    manifestoBasis: ["moral-order", "person-not-atom", "subsidiarity", "democracy", "what-we-reject"],
    related: ["prisons-punishment-and-rehabilitation", "death-penalty", "capital-punishment-for-aggravated-sexual-crimes", "deportation-of-criminal-offenders"],
    keywords: ["criminal sentencing", "punishment", "prison", "murder", "rape", "child sexual abuse", "rehabilitation", "restitution"],
    lastUpdated: "2026-09-21",
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
    related: ["capital-punishment-for-aggravated-sexual-crimes", "prisons-punishment-and-rehabilitation", "criminal-sentencing", "catholic-confessional-state"],
    keywords: ["death penalty", "capital punishment", "execution", "murder", "abolition"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "capital-punishment-for-aggravated-sexual-crimes",
    title: "Capital Punishment for Aggravated Sexual Crimes",
    category: "government",
    status: "Agreed Policy",
    shortAnswer:
      "The death penalty may be legally available, but not mandatory, for the most aggravated forms of rape and child sexual abuse.",
    position: [
      "Restore Europe places exceptionally aggravated sexual crimes within the category of offences that may qualify for capital punishment, subject to the same unusually strict procedural and evidentiary safeguards as other capital cases.",
    ],
    policies: [
      "Potentially qualifying cases include aggravated rape involving exceptional brutality, repeated or serial rape, rape involving kidnapping or torture, aggravated sexual abuse of children, systematic abuse of multiple children and organized sexual exploitation in exceptionally grave circumstances.",
      "A full and fair criminal trial is mandatory.",
      "The death penalty may not be imposed where serious residual doubt remains about guilt.",
      "Require meaningful appellate review and review of materially exculpatory new evidence before execution.",
      "Use corroborating and forensic evidence wherever reasonably obtainable; weak or uncertain proof must never support a death sentence.",
      "Keep life imprisonment available even where an offence technically qualifies for capital punishment.",
      "No execution of minors.",
    ],
    implementationNote:
      "This expands the catalogue's existing capital-punishment position beyond homicide-based offences. It remains an explicit departure from the contemporary abolitionist position of the Catholic Catechism. Capital punishment is prohibited across the current Council of Europe system, including under Protocol No. 13 to the ECHR for states bound by it, so implementation would require major legal and treaty change.",
    manifestoBasis: ["moral-order", "democracy"],
    related: ["death-penalty", "criminal-sentencing", "prisons-punishment-and-rehabilitation"],
    keywords: ["death penalty", "capital punishment", "aggravated rape", "child sexual abuse", "sexual violence", "evidentiary threshold", "life imprisonment"],
    lastUpdated: "2026-09-21",
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
    related: ["energy-policy", "climate-policy", "right-to-repair", "architecture-and-historic-preservation"],
    keywords: ["environment", "stewardship", "nature", "biodiversity", "farmland"],
    lastUpdated: "2026-09-15",
  },
  {
    slug: "energy-policy",
    title: "Energy Policy: General Doctrine",
    category: "environment",
    status: "Derived",
    shortAnswer:
      "Energy policy should be judged by reliability, strategic resilience, affordability, environmental stewardship and long-term human welfare rather than loyalty to one technology.",
    position: [
      "Energy is strategic infrastructure. European nations should retain sufficient domestic and diversified capacity to preserve political independence, productive industry and household security.",
    ],
    policies: [
      "Maintain diverse and resilient domestic energy supplies.",
      "Reduce dangerous dependence on strategically unreliable foreign suppliers.",
      "Evaluate technologies by lifecycle environmental impact, reliability, cost, land use and strategic resilience.",
      "Maintain sufficient dispatchable generation for grid stability.",
      "Invest in transmission and storage where technically and economically justified.",
      "Avoid policies that make ordinary heating, transport or electricity economically inaccessible.",
      "Protect landscapes and local communities.",
      "Permit technological pluralism rather than one mandated energy source everywhere.",
    ],
    implementationNote:
      "The manifesto establishes environmental stewardship and strategic independence but does not specify a detailed energy mix.",
    manifestoBasis: ["stewardship", "foreign-policy"],
    related: ["nuclear-energy", "fossil-fuels", "renewable-energy", "climate-policy", "environmental-stewardship"],
    keywords: ["energy security", "electricity", "reliability", "strategic infrastructure", "affordability", "stewardship", "energy"],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "nuclear-energy",
    title: "Nuclear Energy",
    category: "environment",
    status: "Derived",
    shortAnswer:
      "Nuclear power may be permitted and supported where it is safe, reliable, strategically useful and environmentally responsible.",
    position: [
      "The manifesto contains no categorical anti-nuclear principle. Nuclear energy should be evaluated pragmatically rather than ideologically.",
    ],
    policies: [
      "Permit construction and continued operation of plants meeting demanding safety standards.",
      "Require credible long-term nuclear-waste management.",
      "Preserve domestic nuclear engineering competence where viable.",
      "Evaluate modern reactor technologies according to demonstrated safety and economic performance.",
      "Allow nuclear energy to form part of a diversified low-emission system.",
      "Do not require nuclear deployment where local circumstances make another mix more rational.",
    ],
    implementationNote:
      "This is a derived policy judgment, not an explicit manifesto commitment. It should remain subject to technical safety, waste-management and economic review.",
    manifestoBasis: ["technology", "stewardship", "foreign-policy"],
    related: ["energy-policy", "fossil-fuels", "renewable-energy", "nuclear-weapons"],
    keywords: ["nuclear power", "nuclear energy", "reactors", "energy security", "electricity", "nuclear waste"],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "fossil-fuels",
    title: "Fossil Fuels",
    category: "environment",
    status: "Derived",
    shortAnswer:
      "Fossil fuels should not be prohibited ideologically irrespective of their strategic or economic function, but unnecessary pollution and avoidable dependency should be reduced.",
    position: [
      "Coal, oil and gas should be judged by environmental costs, reliability, strategic necessity and available substitutes.",
    ],
    policies: [
      "No immediate blanket prohibition of fossil fuels.",
      "Preserve necessary supplies for transport, industry, heating and strategic reserves while alternatives are developed.",
      "Reduce severe air pollution and environmentally destructive extraction practices.",
      "Encourage efficiency where it reduces both cost and resource consumption.",
      "Avoid dependence on hostile or unreliable foreign suppliers.",
      "Transition away from particularly damaging uses when reliable and economically realistic substitutes exist.",
      "Avoid transition schedules that destroy essential industrial capacity or make basic energy unaffordable.",
    ],
    implementationNote:
      "The manifesto requires stewardship but does not specify fossil-fuel phase-out dates.",
    manifestoBasis: ["stewardship", "foreign-policy"],
    related: ["energy-policy", "nuclear-energy", "renewable-energy", "climate-policy"],
    keywords: ["fossil fuels", "coal", "oil", "natural gas", "energy security", "pollution"],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "renewable-energy",
    title: "Renewable Energy",
    category: "environment",
    status: "Derived",
    shortAnswer:
      "Renewable energy should be supported where technically sound, economically reasonable and compatible with landscapes, communities and grid reliability.",
    position: [
      "Wind, solar, hydro, geothermal and other sources are tools rather than moral ends and should be assessed according to local conditions.",
    ],
    policies: [
      "Permit and support renewable generation where it makes economic and environmental sense.",
      "Protect historic landscapes and ecologically sensitive areas from poorly planned industrial development.",
      "Avoid unnecessary destruction of productive farmland for low-density energy projects.",
      "Account honestly for storage, transmission and backup requirements.",
      "Support local and community energy ownership where viable.",
      "Do not mandate deployment merely to meet numerical targets without regard to reliability and local cost.",
    ],
    implementationNote:
      "This follows the manifesto's stewardship and human-scale principles but is not explicitly specified there.",
    manifestoBasis: ["stewardship", "architecture"],
    related: ["energy-policy", "nuclear-energy", "fossil-fuels", "architecture-and-historic-preservation"],
    keywords: ["renewable energy", "solar", "wind", "hydroelectricity", "geothermal", "grid reliability", "landscape"],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "climate-policy",
    title: "Climate Policy",
    category: "environment",
    status: "Derived",
    shortAnswer:
      "Environmental stewardship includes prudent climate mitigation and adaptation, but climate policy does not justify unlimited centralized control or policies that impose disproportionate hardship for negligible benefit.",
    position: [
      "Climate risks should be addressed through practical environmental policy, technological development, resilient infrastructure and effective international cooperation where problems genuinely cross borders.",
    ],
    policies: [
      "Support economically rational reductions in greenhouse-gas emissions.",
      "Prioritize measures with measurable environmental benefit.",
      "Use nuclear, renewable, efficiency and other technologies according to practical results.",
      "Invest in adaptation and resilience against flooding, heat, drought, wildfire and other hazards.",
      "Protect forests, soils, water systems and ecosystems that strengthen resilience.",
      "Avoid policies that disproportionately impoverish ordinary families while producing negligible environmental benefit.",
      "Reject use of climate policy as a blanket justification for permanent mass surveillance or compulsory digital control.",
      "Set exact emissions targets only after technical analysis of scientific evidence, feasibility and economic conditions.",
    ],
    limits: [
      "The manifesto does not specify net-zero dates, carbon-tax rates, temperature targets or binding emissions quotas. Those numerical questions are not inferred here.",
    ],
    manifestoBasis: ["technology", "stewardship", "foreign-policy"],
    related: ["energy-policy", "environmental-stewardship", "fossil-fuels", "renewable-energy"],
    keywords: ["climate change", "emissions", "carbon", "adaptation", "resilience", "environment", "energy", "stewardship"],
    lastUpdated: "2026-09-21",
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
    status: "Derived",
    shortAnswer:
      "Restore Europe is sceptical of permanent dependence on NATO and favours greater national and European strategic independence.",
    position: [
      "Defensive cooperation may be useful, but NATO membership and alignment should not be treated as unquestionable or permanent requirements.",
    ],
    policies: [
      "Build credible national and European defensive capabilities.",
      "Reduce permanent strategic dependence on the United States.",
      "Retain the ability to cooperate with NATO states on intelligence, defence technology, exercises and genuine common threats.",
      "Do not participate in wars merely to demonstrate alliance solidarity.",
      "Keep national constitutional control over deployment of armed forces.",
      "Reject ideological wars intended to remake foreign societies.",
      "Keep long-term NATO membership open to reassessment if strategic independence can be secured through a more appropriate defensive structure.",
    ],
    implementationNote:
      "NATO Article 5 treats an armed attack on one member as an attack on all and obliges each ally to assist, while leaving each ally to determine the action it deems necessary. The manifesto supports strategic independence but does not itself require withdrawal from NATO.",
    manifestoBasis: ["foreign-policy", "subsidiarity", "what-we-reject"],
    related: ["foreign-policy-doctrine", "united-states", "russia", "conscription"],
    keywords: ["NATO", "Article 5", "collective defence", "strategic independence", "European defence", "military alliances", "alliance"],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "russia",
    title: "Russia",
    category: "foreign-policy",
    status: "Agreed Policy",
    shortAnswer:
      "Neither permanent alignment with Russia nor permanent ideological hostility toward Russia.",
    position: [
      "Russia is a foreign power with which European nations may cooperate where interests coincide and oppose where interests conflict.",
    ],
    policies: [
      "Judge relations by concrete European and national interests.",
      "Maintain diplomatic channels wherever possible.",
      "Cooperate in trade, security or other matters where materially beneficial and morally permissible.",
      "Maintain strategic independence in energy, defence and critical infrastructure.",
      "Do not permit excessive Russian leverage over European political or economic institutions.",
      "Do not enter wars against Russia merely for ideological or geopolitical prestige.",
      "Permit proportionate responses to grave violations of peace or severe attacks on innocent populations.",
      "Seek negotiated settlements where realistic.",
    ],
    implementationNote:
      "This is a non-alignment doctrine, not a factual judgment on particular current disputes.",
    manifestoBasis: ["foreign-policy"],
    related: ["foreign-policy-doctrine", "ukraine", "nato", "sanctions"],
    keywords: ["Russia", "Russian Federation", "Europe", "neutrality", "strategic independence", "diplomacy", "Moscow"],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "ukraine",
    title: "Ukraine",
    category: "foreign-policy",
    status: "Agreed Policy",
    shortAnswer:
      "Restore Europe does not make political alignment with either Ukraine or Russia an independent objective of European foreign policy.",
    position: [
      "Policy toward the Russia–Ukraine war should be governed by legitimate national interest, protection of innocent life, escalation risk and a realistic pursuit of peace rather than ideological loyalty to either side.",
    ],
    policies: [
      "Maintain humanitarian concern for civilians affected by war.",
      "Support serious efforts toward a negotiated and durable peace where realistic.",
      "Avoid open-ended military commitments without a concrete national-security justification.",
      "Do not treat reconstruction, regime change or permanent geopolitical confrontation as automatic European obligations.",
      "Judge military assistance individually according to national interest, proportionality, escalation risk and moral limits on the use of force.",
      "Distinguish humanitarian assistance to civilians from direct participation in military conflict.",
      "Avoid permanent hostility toward either the Ukrainian or Russian people.",
    ],
    implementationNote:
      "This position applies the manifesto's strong presumption against unnecessary war and preference for strategic independence.",
    manifestoBasis: ["foreign-policy"],
    related: ["foreign-policy-doctrine", "russia", "nato", "foreign-aid"],
    keywords: ["Ukraine", "Russia", "war", "neutrality", "peace negotiations", "military aid", "foreign policy", "Kyiv"],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "united-states",
    title: "United States",
    category: "foreign-policy",
    status: "Agreed Policy",
    shortAnswer:
      "Constructive cooperation with the United States without political, military, technological or cultural dependency.",
    position: [
      "The United States may be an important partner, but European nations should retain strategic and cultural autonomy.",
    ],
    policies: [
      "Maintain normal diplomatic and commercial relations.",
      "Cooperate on defence, science, intelligence and trade where interests genuinely coincide.",
      "Reduce critical dependence on American military protection and strategic infrastructure.",
      "Reduce excessive dependence on dominant foreign technology platforms.",
      "Protect European institutions from foreign political or corporate interference.",
      "Maintain cultural independence from imported commercial homogenization.",
      "Reject automatic alignment with American foreign-policy priorities.",
    ],
    implementationNote:
      "The policy is cooperation without dependency rather than hostility or isolation.",
    manifestoBasis: ["europe", "technology", "culture", "foreign-policy"],
    related: ["foreign-policy-doctrine", "nato", "culture-and-homogenization", "china"],
    keywords: ["United States", "America", "strategic autonomy", "European independence", "technology", "NATO", "Atlanticism"],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "china",
    title: "China",
    category: "foreign-policy",
    status: "Agreed Policy",
    shortAnswer:
      "Pragmatic relations with China combined with strong protection against strategic dependence and control of critical infrastructure.",
    position: ["China should be treated neither as an ideological enemy nor as a model for Europe."],
    policies: [
      "Maintain diplomatic relations and lawful trade.",
      "Diversify supply chains where excessive dependency creates strategic vulnerability.",
      "Protect critical infrastructure, defence industries and sensitive technologies from foreign control.",
      "Review investment in strategically sensitive sectors for national-security risks.",
      "Avoid dependence on China for essential medicines, telecommunications, energy technology or military-relevant supply chains.",
      "Resist espionage, covert political influence and imported social-credit-style systems.",
      "Cooperate in science and commerce where appropriate.",
      "Avoid unnecessary military confrontation where European security is not directly implicated.",
    ],
    implementationNote: "The doctrine is trade where useful and independence where necessary.",
    manifestoBasis: ["economic-order", "technology", "foreign-policy"],
    related: ["foreign-policy-doctrine", "economic-order", "united-states", "digital-identification"],
    keywords: ["China", "PRC", "trade", "strategic dependence", "critical infrastructure", "supply chains", "surveillance", "Beijing"],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "israel-and-palestine",
    title: "Israel and Palestine",
    category: "foreign-policy",
    status: "Agreed Policy",
    shortAnswer:
      "No permanent alignment with either Israel or Palestine; policy should focus on innocent life, regional stability, lawful diplomacy and concrete European interests.",
    position: [
      "The conflict should not become a permanent organizing principle of European foreign or domestic politics.",
    ],
    policies: [
      "Maintain diplomatic relations according to ordinary national interest.",
      "Do not grant unconditional political support to either side.",
      "Condemn deliberate attacks on civilians regardless of perpetrator.",
      "Sell no arms, and conduct no military-industrial cooperation, with any party to the conflict while it continues.",
      "Permit humanitarian assistance where it reliably reaches civilians in genuine need.",
      "Avoid direct military involvement absent an extraordinary threat satisfying strict legitimate-defence criteria.",
      "Support realistic diplomatic efforts capable of reducing violence.",
      "Do not permit imported sectarian intimidation or political violence within Europe.",
    ],
    implementationNote:
      "This is non-alignment, not indifference to civilian harm or international humanitarian obligations. The arms restriction applies to every party without exception: it follows from the presumption against fuelling a conflict Europe is not party to, and is not a measure directed at one state.",
    manifestoBasis: ["foreign-policy", "what-we-reject"],
    related: ["foreign-policy-doctrine", "foreign-aid", "sanctions"],
    keywords: ["Israel", "Palestine", "Gaza", "Middle East", "neutrality", "humanitarian aid", "foreign policy"],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "foreign-aid",
    title: "Foreign Aid",
    category: "foreign-policy",
    status: "Derived",
    shortAnswer:
      "Foreign aid should be limited, accountable and focused on concrete humanitarian or developmental needs rather than ideological nation-building or permanent dependency.",
    position: [
      "Government's first obligations are toward its own political community, while genuine humanitarian duties remain.",
    ],
    policies: [
      "Prioritize emergency assistance after war, famine, natural disaster and comparable humanitarian catastrophes.",
      "Prefer aid delivered near affected populations where effective.",
      "Require transparency and auditing.",
      "Terminate programmes substantially captured by corruption or patronage.",
      "Reject aid designed principally to impose ideological or cultural transformation.",
      "Prefer assistance that builds local capacity rather than indefinite dependency.",
      "Permit support for medicine, food security, clean water and reconstruction where demonstrably effective.",
      "Keep aid subordinate to legitimate domestic fiscal obligations.",
    ],
    implementationNote:
      "The manifesto does not specify foreign-aid budgets or mechanisms. This is derived from prudence, humanitarian concern and the presumption against ideological intervention.",
    manifestoBasis: ["moral-order", "immigration", "foreign-policy"],
    related: ["foreign-policy-doctrine", "asylum-and-international-protection", "sanctions"],
    keywords: ["foreign aid", "humanitarian aid", "development assistance", "charity", "international development", "refugees"],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "sanctions",
    title: "Sanctions",
    category: "foreign-policy",
    status: "Agreed Policy",
    shortAnswer:
      "Economic sanctions are exceptional instruments for exceptionally grave cases, not routine tools of ideological alignment.",
    position: [
      "Sanctions may be justified where grave wrongdoing is clearly identified and non-military coercion has a realistic prospect of limiting it without disproportionate harm to civilians.",
    ],
    policies: [
      "Require a serious and clearly identified objective.",
      "Prefer targeted measures against responsible officials, organizations, military assets or financial networks over indiscriminate civilian punishment.",
      "Use sanctions only where less coercive alternatives are insufficient.",
      "Assess whether measures have a reasonable prospect of achieving their objective.",
      "Consider foreseeable harm to innocent civilians.",
      "Review sanctions periodically and remove them when their legitimate purpose ends or costs become disproportionate.",
      "Maintain humanitarian exemptions for essential civilian goods wherever practicable.",
      "Reserve very broad economic sanctions for exceptionally grave circumstances.",
    ],
    implementationNote:
      "The policy applies proportionality and prudence to non-military coercion. It does not create an automatic sanctions policy toward any named state.",
    manifestoBasis: ["foreign-policy", "what-we-reject"],
    related: ["foreign-policy-doctrine", "russia", "foreign-aid", "israel-and-palestine"],
    keywords: ["sanctions", "embargo", "asset freeze", "foreign policy", "economic coercion", "humanitarian exemptions"],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "conscription",
    title: "Military Service and National Preparedness",
    category: "foreign-policy",
    status: "Agreed Policy",
    shortAnswer:
      "A strong volunteer military, trained reserves and a physically capable population are preferred to routine universal peacetime conscription.",
    position: [
      "Military service is honourable and necessary for defence, but ordinary armed forces should principally be composed of people who freely choose to serve.",
    ],
    policies: [
      "Maintain professional and volunteer armed forces capable of credible territorial defence.",
      "Encourage service through serious training, social respect and appropriate conditions rather than routine coercion.",
      "Maintain a trained reserve and voluntary reserve training.",
      "Do not use universal peacetime conscription as the ordinary model.",
      "Permit temporary compulsory national-defence service in an extreme defensive emergency threatening national survival where genuinely necessary.",
      "Provide appropriate civilian national service for genuine conscientious objectors.",
      "Keep armed forces subject to moral and legal limits and reject manifestly unlawful orders.",
      "Strengthen school physical education with serious progressive fitness, swimming, first aid, navigation, outdoor competence and age-appropriate civil-defence skills, with reasonable medical and disability accommodations.",
    ],
    implementationNote:
      "Catholic social teaching recognizes legitimate national defence while also recognizing conscientious objection and moral limits on the conduct of armed forces.",
    manifestoBasis: ["person-not-atom", "education", "work", "foreign-policy"],
    related: ["foreign-policy-doctrine", "nato", "purpose-of-education", "work"],
    keywords: ["conscription", "military service", "national service", "reserves", "physical fitness", "schools", "civil defence", "conscientious objection", "draft"],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "nuclear-weapons",
    title: "Nuclear Weapons",
    category: "foreign-policy",
    status: "Agreed Policy",
    shortAnswer:
      "Restore Europe supports verifiable multilateral reduction and eventual abolition of nuclear weapons.",
    position: [
      "Nuclear weapons create risks and destructive capacities of a different order from ordinary conventional arms and should not be normalized as permanent instruments of policy.",
    ],
    policies: [
      "Work toward internationally verifiable reduction and eventual abolition of nuclear arsenals.",
      "Support serious arms-control and non-proliferation agreements.",
      "Oppose deliberate nuclear attacks on civilian populations.",
      "Oppose development of nuclear weapons merely for geopolitical prestige.",
      "Seek reciprocal and verifiable disarmament rather than measures that leave one country uniquely exposed to nuclear coercion.",
      "Maintain strong verification systems against secret retention of prohibited arsenals.",
      "Support measures reducing accidental or unauthorized nuclear launch risk.",
      "Oppose proliferation to additional nuclear-armed states.",
      "Keep nuclear-energy policy separate from nuclear-weapons policy.",
    ],
    implementationNote:
      "Pope Francis has repeatedly described both the use and possession of nuclear weapons as immoral and called for disarmament. The adopted policy follows that contemporary Catholic direction.",
    manifestoBasis: ["foreign-policy", "what-we-reject"],
    related: ["foreign-policy-doctrine", "nato", "nuclear-energy"],
    keywords: ["nuclear weapons", "nuclear disarmament", "deterrence", "non-proliferation", "arms control", "strategic weapons"],
    lastUpdated: "2026-09-21",
  },
];

/**
 * Questions recorded as undecided rather than inferred from the ideology, so
 * that the gaps stay visible instead of being quietly filled in.
 *
 * Empty since version 0.2, which settled the last of them. It is kept rather
 * than deleted because the next question the movement cannot yet answer should
 * be written down here rather than left out of the catalogue — and the page
 * renders this section only when it has something to say.
 */
export const openQueue: readonly string[] = [];

/**
 * What remains unsettled *inside* adopted positions: the direction is decided,
 * the number is not. Listed separately from `openQueue`, because an adopted
 * position awaiting a rate is a different thing from no position at all.
 */
export const derivedDetailQueue: readonly string[] = [
  "Exact tax rates and thresholds",
  "Exact criminal sentencing ranges",
  "The age-verification mechanism for social media",
  "Net-zero dates, carbon prices and emissions quotas",
  "Office-by-office criteria for restricted public offices",
];
