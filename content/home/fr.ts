import type { ContentBlock } from "@/lib/content-types";
import type { HomeContent } from "./index";

export const home: HomeContent = {
  hero: {
    headline: "L'Europe mérite d'être reçue en héritage.",
    subheadline: "Pour une civilisation chrétienne, européenne et à l'échelle humaine.",
    primaryCta: { label: "Lire nos principes", href: "/principles" },
    secondaryCta: { label: "Lire le Manifeste", href: "/manifesto" },
  },

  philosophy: {
    eyebrow: "La question centrale",
    statement: ["L'économie existe pour l'homme.", "L'homme n'existe pas pour l'économie."],
    body: [
      {
        type: "lead",
        text: "Les systèmes politiques et économiques sont des instruments. Ils existent pour rendre possible une vie humaine bonne — et non l'inverse.",
      },
      {
        type: "paragraph",
        text: "Une civilisation ne se mesure pas à sa seule production. Le produit intérieur brut, la consommation, la productivité, l'efficacité administrative et la capacité technologique décrivent les moyens d'une société. Ils ne disent presque rien de la capacité de ceux qui y vivent à élever une famille, à garder un foyer, à connaître leurs voisins, à exercer un métier ou à se reposer.",
      },
      {
        type: "paragraph",
        text: "Lorsque ces moyens sont traités comme des fins, les institutions qui tiennent ensemble la vie ordinaire sont démantelées sans bruit pour les servir. Ce n'est pas le progrès. C'est un transfert de finalité de la personne vers le système.",
      },
    ] satisfies readonly ContentBlock[],
    requirements: {
      title: "L'être humain a besoin de temps et d'espace pour",
      items: [
        "La famille",
        "L'amitié",
        "La foi",
        "La communauté",
        "La nature",
        "L'étude",
        "L'artisanat",
        "La beauté",
        "Le repos",
      ],
    },
    reductions: {
      title: "Ce à quoi une civilisation ne se réduit pas",
      items: [
        "Le produit intérieur brut",
        "La consommation",
        "La productivité",
        "L'efficacité administrative",
        "La capacité technologique",
      ],
    },
  },

  principles: {
    title: "Ce que nous défendons, brièvement énoncé.",
    allLabel: "Les seize principes",
    readFull: "lire le principe en entier",
    items: [
      {
        number: "01",
        title: "Famille et vie humaine",
        statement:
          "La société doit rendre matériellement possibles la fondation d'une famille, la parentalité et une vie humaine qui ait un sens.",
        href: "/principles#family",
      },
      {
        number: "02",
        title: "Nation et continuité",
        statement:
          "Les nations européennes ont le droit légitime de préserver leur identité historique, leur culture et leur continuité.",
        href: "/principles#nation-and-continuity",
      },
      {
        number: "03",
        title: "Propriété et indépendance économique",
        statement:
          "Une société libre exige une propriété largement répartie plutôt qu'une dépendance permanente à l'égard d'un petit nombre d'institutions.",
        href: "/principles#property",
      },
      {
        number: "04",
        title: "Une technique à l'échelle humaine",
        statement:
          "La technique doit renforcer la compétence, l'autonomie et la communauté humaines plutôt que de réorganiser la société autour de la nécessité technique.",
        href: "/principles#technology",
      },
      {
        number: "05",
        title: "Intendance et beauté",
        statement:
          "La terre, l'architecture et la nature sont des héritages à cultiver, à protéger et à transmettre.",
        href: "/principles#environment",
      },
      {
        number: "06",
        title: "Autorité et subsidiarité",
        statement: "L'autorité politique doit s'exercer à l'échelon compétent le plus bas.",
        href: "/principles#subsidiarity",
      },
    ],
  },

  lifeAndWork: {
    eyebrow: "Le travail et la vie",
    statement: "Nous n'avons pas été créés pour travailler jusqu'à la mort.",
    body: [
      {
        type: "lead",
        text: "Le travail possède une dignité réelle. Par lui, on acquiert une compétence, on produit des choses utiles, on fait vivre une famille et on prend part à la vie d'une communauté.",
      },
      {
        type: "paragraph",
        text: "Mais le travail n'est pas la finalité totale de l'existence humaine. Un système économique est fait pour fournir la base matérielle d'une vie — non pour dévorer la vie qu'il avait pour tâche de soutenir.",
      },
      {
        type: "paragraph",
        text: "Une société a perdu ses repères lorsque les gens ordinaires doivent céder la quasi-totalité de leurs heures de veille pour seulement se loger et se nourrir ; lorsque les parents ne voient guère leurs enfants ; lorsque les communautés se vident parce que tout le monde est épuisé.",
      },
    ] satisfies readonly ContentBlock[],
    diagram: {
      top: "Travail",
      middle: "soutient",
      bottom: "Vie",
      separator: " : ",
      orbit: ["famille", "amitié", "foi", "communauté", "nature", "étude", "métier", "repos"],
    },
    outcome: {
      title: "Ce que la productivité devrait acheter",
      lead: "Ce qu'une société gagne en capacité de production devrait se voir quelque part dans la vie de ceux qui produisent.",
      items: [
        "Une plus grande sécurité face aux malheurs ordinaires",
        "Un temps libre qui soit vraiment le sien",
        "Du temps avec ses enfants et ses parents",
        "De l'autonomie dans l'organisation de sa vie professionnelle",
        "L'indépendance à l'égard de la dette et de la dépendance permanentes",
      ],
    },
  },

  economicOrder: {
    eyebrow: "L'ordre économique",
    statement: "Des marchés, sans culte du marché.",
    body: [
      {
        type: "lead",
        text: "La propriété privée est légitime. L'entreprise est légitime. Le profit est légitime. La réussite économique est légitime.",
      },
      {
        type: "paragraph",
        text: "Aucune de ces choses n'est la fin la plus haute d'une société. Les institutions économiques sont indispensables et doivent rester subordonnées au bien commun — lequel n'est pas une contrainte imposée de l'extérieur à l'entreprise, mais la raison même pour laquelle l'entreprise mérite d'être protégée.",
      },
      {
        type: "paragraph",
        text: "Ce n'est pas une position contre les entreprises. C'est une position contre la domination : contre le moment où un marché cesse d'être un moyen d'échange entre de nombreux participants pour devenir un instrument de contrôle aux mains de quelques-uns.",
      },
    ] satisfies readonly ContentBlock[],
    pillars: [
      {
        title: "Entreprise",
        lead: "Ce que nous soutenons",
        items: [
          "L'esprit d'entreprise",
          "L'investissement productif",
          "Les entreprises familiales",
          "Les métiers indépendants",
          "Les petites et moyennes entreprises",
        ],
      },
      {
        title: "Propriété",
        lead: "Ce que nous élargissons",
        items: [
          "L'accession à la propriété",
          "Les coopératives",
          "L'actionnariat salarié",
          "Les exploitations agricoles familiales",
          "La banque locale et régionale",
          "Une propriété du capital plus largement répartie",
        ],
      },
      {
        title: "Limites",
        lead: "Ce que nous contenons",
        items: [
          "La concentration monopolistique",
          "La capture réglementaire",
          "La captation financière",
          "La spéculation sur le logement",
          "La mainmise des grandes entreprises sur la politique",
        ],
      },
    ],
    key: "L'économie existe pour la personne, la famille et la communauté.",
  },

  technology: {
    eyebrow: "La technique",
    statement: "La machine doit s'adapter à l'homme.",
    body: [
      {
        type: "lead",
        text: "Restore Europa n'est pas hostile à la technique. Nous refusons l'inéluctabilité technologique — l'idée que tout ce qui peut être construit doit être adopté, et que tout ce qui accroît l'efficacité vaut nécessairement comme un progrès.",
      },
      {
        type: "paragraph",
        text: "Une technique introduite comme facultative peut devenir économiquement nécessaire. Ce qui devient nécessaire remodèle les institutions, et les institutions réorganisent ensuite la société autour des exigences de la technique. Au bout de cet enchaînement, ce sont les hommes qui s'adaptent à la machine.",
      },
      {
        type: "paragraph",
        text: "Chaque technique doit être jugée à ce qu'elle fait à l'autonomie humaine, à la vie de famille, à la communauté, à la vie privée, au travail qui a du sens, à la compétence humaine et à la décentralisation politique.",
      },
    ] satisfies readonly ContentBlock[],
    liberates: {
      title: "La technique qui libère",
      items: [
        "La médecine",
        "L'assainissement",
        "L'ingénierie",
        "La découverte scientifique",
        "Les outils utiles",
        "L'automatisation des travaux dangereux",
      ],
    },
    dominates: {
      title: "La technique qui domine",
      items: [
        "La surveillance de masse",
        "La manipulation de l'attention",
        "La dépendance numérique imposée",
        "Le contrôle algorithmique",
        "La suppression inutile du pouvoir d'agir humain",
        "Les systèmes qui rendent toute participation impossible sans dépendance technologique totale",
      ],
    },
    closing: [
      "Nous ne nous opposons pas à la technique.",
      "Nous nous opposons à la domination technique.",
    ],
  },

  stewardship: {
    eyebrow: "L'intendance",
    title: "L'intendance",
    body: [
      {
        type: "lead",
        text: "Les forêts, les terres agricoles, les rivières, les montagnes, les littoraux, la biodiversité, les villes et les villages anciens sont des biens hérités. Ils ont été reçus de ceux qui ne sont plus, et ils sont dus à ceux qui ne sont pas encore nés.",
      },
      {
        type: "paragraph",
        text: "Cela en fait autre chose que des marchandises jetables. Une génération peut en user, et doit les entretenir ; elle n'en a pas la pleine propriété.",
      },
      {
        type: "paragraph",
        text: "Ce n'est pas là un raisonnement qui ferait de l'humanité un fléau pour le monde naturel, ni un raisonnement qui tiendrait n'importe quelle destruction pour acceptable dès lors qu'elle augmente la production à court terme. L'homme a sa place au sein de la nature — comme son intendant, comptable de ce qu'il laisse derrière lui.",
      },
    ] satisfies readonly ContentBlock[],
    categoriesTitle: "Ce qui nous est confié en dépôt",
    categories: [
      { title: "Forêts", note: "Une sylviculture responsable et de longues rotations." },
      { title: "Agriculture", note: "Des sols sains et une agriculture familiale." },
      { title: "Eau", note: "Des rivières, des nappes et des côtes propres." },
      { title: "Biodiversité", note: "Des habitats préservés, et pas seulement recensés." },
      { title: "Paysage", note: "Des formes d'habitat qui respectent la terre." },
      { title: "Architecture", note: "Bâtir pour des générations, non pour des cycles." },
      {
        title: "Production régionale",
        note: "Des chaînes d'approvisionnement qu'une région peut voir.",
      },
      { title: "Durabilité et réparation", note: "Des objets faits pour être réparés." },
    ],
  },

  europe: {
    eyebrow: "L'Europe",
    title: "Une Europe des nations.",
    subtitle: "Coopération sans uniformisation.",
    nations: [
      "La Pologne doit rester reconnaissable comme polonaise.",
      "L'Italie doit rester reconnaissable comme italienne.",
      "La France doit rester reconnaissable comme française.",
    ],
    together: "Et ensemble, elles demeurent européennes.",
    body: [
      {
        type: "lead",
        text: "Le principe qui doit gouverner l'organisation politique de l'Europe est la subsidiarité : rien ne doit être décidé à un échelon supérieur lorsque cela peut l'être avec compétence à un échelon inférieur.",
      },
      {
        type: "paragraph",
        text: "Le village ne doit pas céder sans nécessité devant la région, ni la région devant la nation, ni la nation devant les institutions continentales. Là où un corps plus petit peut bien faire le travail, le travail lui revient — non par commodité administrative, mais comme condition de la liberté politique.",
      },
      {
        type: "paragraph",
        text: "Il reste bien des choses que les Européens ne peuvent faire qu'ensemble. L'identité nationale et locale conserve un sens politique précisément parce que la coopération est bornée aux matières qui l'exigent réellement.",
      },
    ] satisfies readonly ContentBlock[],
    cooperation: {
      title: "Ce qui relève de la coopération européenne",
      items: [
        "Défense",
        "Infrastructures stratégiques",
        "Frontières",
        "Science",
        "Protection de l'environnement",
        "Médecine",
        "Résilience énergétique",
        "Industrie stratégique",
      ],
    },
  },

  politicalCulture: {
    eyebrow: "La culture politique",
    statement: "Le pays avant le parti.",
    body: [
      {
        type: "lead",
        text: "Le désaccord politique est nécessaire. La guerre partisane permanente ne l'est pas.",
      },
      {
        type: "paragraph",
        text: "Lorsque les intérêts durables d'une nation et de son peuple sont en jeu — sécurité nationale, infrastructures critiques, stabilité démographique, protection des familles, continuité constitutionnelle — les mouvements politiques doivent être capables de coopérer par-delà les clivages partisans.",
      },
      {
        type: "paragraph",
        text: "La raison d'être d'un parti politique n'est pas seulement de battre un autre parti. Elle est de servir la communauté politique. L'opposition est nécessaire ; l'opposition pour elle-même est corrosive.",
      },
    ] satisfies readonly ContentBlock[],
    hierarchy: [
      { label: "Peuple", note: "La communauté politique elle-même, à travers les générations." },
      { label: "Nation", note: "Sa continuité, sa sécurité et sa vie commune." },
      { label: "Institutions", note: "Les charges qui ont l'un et l'autre en dépôt." },
      { label: "Parti", note: "Un instrument de service, et le dernier des quatre." },
    ],
    clarification:
      "Il s'agit d'un ordre de service et de responsabilité, non d'une chaîne de commandement. Il décrit ce qu'un parti doit, non une autorité qu'un parti pourrait revendiquer. Rien n'y autorise un pouvoir sans consentement : l'autorité politique demeure comptable devant la loi, devant les limites constitutionnelles et devant le peuple.",
  },

  restoration: {
    eyebrow: "Restauration",
    statement: "Restaurer, non renoncer.",
    body: [
      {
        type: "lead",
        text: "Restaurer ne signifie pas recréer tel ou tel siècle du passé. Le passé a connu l'injustice, la pauvreté, la violence et l'erreur ; rien de tout cela ne mérite notre nostalgie.",
      },
      {
        type: "paragraph",
        text: "C'est retrouver les principes que la société moderne a écartés, et les appliquer intelligemment aux conditions dans lesquelles nous vivons réellement. On ne renverse pas le cours de l'histoire. On peut en changer la direction.",
      },
    ] satisfies readonly ContentBlock[],
    closing: "Notre héritage, il ne nous appartenait pas de le créer. Il ne nous appartient pas de nous en défaire.",
    primaryCta: { label: "Lire le Manifeste", href: "/manifesto" },
    secondaryCta: { label: "Notre vision", href: "/vision" },
  },
};
