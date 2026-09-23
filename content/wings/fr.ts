import type { WingsText } from "./index";

export const wingsText: WingsText = {
  meta: {
    eyebrow: "Organisation",
    title: "Une branche dans chaque nation européenne.",
    metaTitle: "Branches nationales",
    lede: "Restore Europa est organisé comme un mouvement de branches nationales et non comme un parti continental unique. Chaque nation porte la sienne — responsable devant les gens qui y vivent, et devant personne à l'étranger.",
    description:
      "Restore Europa est organisé comme un mouvement de branches nationales — une par nation européenne, chacune responsable devant ses propres adhérents et ne retenant que ce que ses sections locales et ses régions ne peuvent pas porter.",
    intro: [
      {
        type: "lead",
        text: "Notre programme soutient que rien ne doit être gouverné à un niveau supérieur lorsqu'il peut l'être avec compétence à un niveau inférieur. Un mouvement qui plaiderait pour la subsidiarité puis s'organiserait comme un seul corps européen indifférencié ne mériterait pas d'être cru.",
      },
      {
        type: "paragraph",
        text: "Le mouvement est donc bâti dans l'autre sens. La branche nationale est le niveau où le travail politique se fait réellement : elle porte le programme dans les conditions d'un pays, se présente aux élections selon le droit de ce pays, tient ses propres statuts et répond à ses propres adhérents.",
      },
      {
        type: "paragraph",
        text: "Ce que les branches ont en commun, c'est le [manifeste][manifesto] et les [principes][principles] qui en découlent. Ce qu'elles n'ont pas en commun, c'est un modèle unique de politique, car les conditions du Portugal et celles de l'Estonie ne sont pas les mêmes.",
      },
    ],
    note: "Des branches se constituent partout sur le continent. Si vous souhaitez aider à lancer celle de votre pays, dites-le par « S'engager » — c'est, à ce stade, la chose la plus utile que quiconque puisse faire pour le mouvement.",
    mapLabel:
      "Une carte de l'Europe où les quarante-quatre nations énumérées sur cette page se détachent des terres qui les entourent.",
    mapCaption:
      "Les nations mises en évidence ici sont les quarante-quatre énumérées ci-dessous. Figurer sur la carte signifie que le mouvement s'organise autour de cette nation, non que sa branche soit constituée ou active.",
  },

  regions: {
    western: "Europe de l'Ouest",
    northern: "Europe du Nord",
    southern: "Europe du Sud",
    "central-eastern": "Europe centrale et orientale",
  },

  countries: {
    albania: "Albanie",
    andorra: "Andorre",
    austria: "Autriche",
    belgium: "Belgique",
    "bosnia-and-herzegovina": "Bosnie-Herzégovine",
    bulgaria: "Bulgarie",
    croatia: "Croatie",
    cyprus: "Chypre",
    czechia: "Tchéquie",
    denmark: "Danemark",
    estonia: "Estonie",
    finland: "Finlande",
    france: "France",
    germany: "Allemagne",
    greece: "Grèce",
    hungary: "Hongrie",
    iceland: "Islande",
    ireland: "Irlande",
    italy: "Italie",
    kosovo: "Kosovo",
    latvia: "Lettonie",
    liechtenstein: "Liechtenstein",
    lithuania: "Lituanie",
    luxembourg: "Luxembourg",
    malta: "Malte",
    moldova: "Moldavie",
    monaco: "Monaco",
    montenegro: "Monténégro",
    netherlands: "Pays-Bas",
    "north-macedonia": "Macédoine du Nord",
    norway: "Norvège",
    poland: "Pologne",
    portugal: "Portugal",
    romania: "Roumanie",
    russia: "Russie",
    "san-marino": "Saint-Marin",
    serbia: "Serbie",
    slovakia: "Slovaquie",
    slovenia: "Slovénie",
    spain: "Espagne",
    sweden: "Suède",
    switzerland: "Suisse",
    ukraine: "Ukraine",
    "united-kingdom": "Royaume-Uni",
  },

  index: {
    nationCount: { one: "{count} nation", other: "{count} nations" },
    closingTitle: "{count} nations. Un même héritage.",
    closingBody:
      "Chaque branche de cette page est un endroit où le travail doit être fait par ceux qui y vivent. Si c'est là que vous vivez, le mouvement a plus besoin de vous que d'un lecteur de plus.",
    getInvolved: "S'engager",
    howWeOrganise: "Comment nous nous organisons",
  },

  wing: {
    backLabel: "Branches nationales",
    kicker: "Branche nationale",
    lead: "La branche en {country} est le niveau national de Restore Europa — l'organe qui porte notre programme dans les conditions politiques propres à {country}, et le niveau auquel les adhérents de ce pays décident comment il est poursuivi.",
    body: [
      {
        type: "paragraph",
        text: "Une branche nationale n'est pas une succursale qui reçoit des instructions. Elle tient ses propres statuts, choisit ses propres candidats, fixe ses propres priorités dans le cadre du programme commun, et répond à ses propres adhérents plutôt qu'à un organe extérieur au pays.",
      },
      {
        type: "paragraph",
        text: "Ce qu'elle ne fait pas, c'est trancher des questions qui appartiennent à un corps plus petit. Là où une section locale peut faire le travail, le travail appartient à la section. La retenue que le mouvement demande à l'État, il se la demande d'abord à lui-même.",
      },
    ],
    metaTitle: "{country} — Branche nationale",
    metaDescription:
      "La branche de Restore Europa en {country} : le niveau national du mouvement, ce dont elle répond, et comment aider à la constituer.",
    ogTitle: "Restore Europa {country} — Branche nationale",
    ogDescription: "Le niveau national de Restore Europa en {country}.",
    notFound: "Branche introuvable",
    remitHeading: "Ce dont la branche répond",
    remitLede:
      "Les mêmes six responsabilités dans chaque nation. La manière de s'en acquitter appartient aux adhérents en {country}.",
    takePartHeading: "Aidez à constituer la branche en {country}.",
    takePartBody:
      "Une branche nationale se bâtit avec les gens qui vivent sous les conditions qu'elle existe pour changer. Dites-nous ce que vous pouvez faire — organiser, écrire, apporter une compétence professionnelle, ou simplement être compté.",
    getInvolved: "S'engager",
    contact: "Contact",
    neighboursHeading: "Autres branches en {region}",
  },

  chain: {
    caption: "Où se situe la branche",
    footnote:
      "À lire de bas en haut : un niveau ne prend que ce que celui du dessous ne peut pas tenir avec compétence.",
    nationalLabel: "{layer} — {country}",
  },

  layers: {
    chapter: {
      label: "Section locale",
      note: "La commune ou le quartier. Réunions, travail politique local et choix des candidats là où des sections existent.",
    },
    regional: {
      label: "Coordination régionale",
      note: "Appui entre sections et organisation partagée. Aucune compétence qu'une section peut tenir elle-même.",
    },
    national: {
      label: "Branche nationale",
      note: "Statuts, programme, conformité au droit national des partis et des élections, et candidatures nationales.",
    },
    european: {
      label: "Mouvement européen",
      note: "Seulement ce que les nations ne peuvent véritablement pas faire séparément : défense, frontières, infrastructures stratégiques, science, énergie.",
    },
  },

  remit: {
    programme: {
      term: "Le programme en contexte",
      description:
        "Appliquer le manifeste aux conditions réelles du pays — son marché du logement, sa démographie, son industrie, son paysage — sans altérer ce que le mouvement tient en commun.",
    },
    elections: {
      term: "Élections et candidats",
      description:
        "Enregistrement, choix des candidats et participation aux élections selon le droit national des partis et des élections, quelle que soit la forme de ce droit.",
    },
    statutes: {
      term: "Statuts et conformité",
      description:
        "Ses propres statuts, son registre d'adhérents, ses comptes et ses obligations déclaratives, publiés dans le pays où elle opère.",
    },
    chapters: {
      term: "Sections et régions",
      description:
        "Créer des sections locales, soutenir la coordination régionale, et résister à la tentation d'absorber ce que l'une ou l'autre peut faire seule.",
    },
    language: {
      term: "Langue et publication",
      description:
        "Produire et tenir à jour le texte de référence de nos documents dans la langue nationale. Les traductions relèvent de la branche et ne sont pas publiées avant d'être bonnes.",
    },
    europe: {
      term: "Représentation en Europe",
      description:
        "Parler pour ses adhérents au sein du mouvement plus large, et coopérer avec les autres branches sur les sujets qui l'exigent réellement.",
    },
  },
};
