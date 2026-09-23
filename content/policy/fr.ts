import type { PolicyText } from "./index";

export const policyText: PolicyText = {
  meta: {
    eyebrow: "Positions",
    title: "Catalogue programmatique",
    metaTitle: "Catalogue programmatique",
    version: "Version 0.3",
    framework: "Restaurationnisme intégral européen",
    lede: "Ce catalogue répond à une question étroite : que soutient Restore Europa sur tel sujet ? Il ne remplace pas le manifeste. Le manifeste expose la vision du monde ; le catalogue expose des positions consultables, sujet par sujet.",
    description:
      "Positions consultables, sujet par sujet, du mouvement Restore Europa, chacune signalant à quel point elle est arrêtée : ordre moral, famille, citoyenneté, économie, technique, éducation, justice, santé, environnement et politique étrangère.",
    body: [
      "Là où l'enseignement moral catholique est clair, Restore Europa l'adopte généralement comme référence morale, et énonce séparément sa mise en œuvre en droit civil. Une divergence est consignée explicitement : sur la peine capitale, Restore Europa retient l'ancienne permission traditionnelle pour les cas exceptionnels plutôt que la position abolitionniste contemporaine.",
      "Le catalogue distingue l'ordre constitutionnel que recherche Restore Europa du droit européen tel qu'il se présente aujourd'hui. Plusieurs positions — sur la nationalité, sur la déchéance de la citoyenneté, sur la parole, sur le statut public de la religion et sur la peine capitale — exigeraient une révision constitutionnelle ou une modification des traités avant de pouvoir être adoptées dans tel ou tel État européen. Là où il en va ainsi, la notice le dit.",
      "La version 0.2 tranche les questions que la version 0.1 avait laissées ouvertes : la relation institutionnelle européenne, l'asile, l'éloignement, les salaires, la fiscalité, les retraites, le logement, la représentation du travail, l'identité et la monnaie numériques, la surveillance biométrique, le génie génétique, la peine, le bouquet énergétique et toute question pendante de politique étrangère. Là où une formulation de la v0.2 a révisé une notice antérieure, c'est le texte le plus récent qui fait foi.",
      "La version 0.3 ajoute l'ensemble consacré à la remigration et à son exécution. Il distingue la citoyenneté, le statut de séjour, l'expulsion pénale, le retour après asile et le contrôle de la nationalité, au lieu de traiter la remigration comme un pouvoir unique et indifférencié ; il est rédigé comme une politique constitutionnelle et législative proposée, le droit européen et international en vigueur étant signalé séparément dans chaque notice. Deux notices antérieures — la naturalisation et l'expulsion des délinquants non citoyens — sont refondues dans les formulations les plus récentes plutôt que maintenues en double à côté d'elles.",
    ],
    notice:
      "Chaque question de ce catalogue est assortie d'une position. Les notices marquées Dérivée suivent la direction du manifeste sans que leur mise en œuvre soit arrêtée, et plusieurs nomment la modification légale ou conventionnelle qu'elles exigeraient. Les positions sont révisées à mesure que le mouvement décide ; la version et la date ci-dessus indiquent quel texte vous lisez.",
  },

  labels: {
    version: "Version",
    date: "Date",
    framework: "Cadre",
    entries: "Notices",
  },

  index: {
    legendHeading: "Légende des statuts",
    showingAll: {
      one: "Affichage de l'unique position.",
      other: "Affichage de la totalité des {count} positions.",
    },
    showingSome: {
      one: "{count} position sur {total} correspond.",
      other: "{count} positions sur {total} correspondent.",
    },
    noMatch: "Rien dans le catalogue ne correspond à cette recherche.",
    showAll: "Afficher toutes les positions",
    openQueue: {
      heading: "Questions en attente d'élaboration",
      body: "Ces questions sont consignées comme non tranchées plutôt que déduites de l'idéologie. Elles sont énumérées pour que les lacunes restent visibles au lieu d'être discrètement comblées.",
      items: [],
    },
    derivedQueue: {
      heading: "Arrêté quant à la direction, non quant au détail",
      body: "Chaque question du catalogue est désormais assortie d'une position. Voici les chiffres, à l'intérieur de ces positions, qui n'ont pas été fixés et qui ne seront pas inventés tant qu'il n'existera pas de base pour les établir.",
      items: [
        "Les taux et les seuils d'imposition exacts",
        "Les échelles de peines exactes",
        "Le mécanisme de vérification de l'âge pour les réseaux sociaux",
        "Les échéances de neutralité carbone, les prix du carbone et les quotas d'émissions",
        "Les critères, fonction par fonction, applicables aux charges publiques réservées",
        "Les délais de carence accordés aux résidents étrangers après une perte d'emploi involontaire",
        "Les durées d'absence propres à chaque titre et les plafonds de rétention administrative",
      ],
    },
  },

  filters: {
    searchLabel: "Rechercher parmi les positions",
    searchPlaceholder: "avortement, subsidiarité, naturalisation…",
    searchButton: "Rechercher",
    clear: "Effacer",
    sectionNavLabel: "Filtrer les positions par section",
    sectionHeading: "Section",
    allSections: "Toutes",
    statusNavLabel: "Filtrer les positions par statut",
    statusHeading: "Statut",
    anyStatus: "Tous",
  },

  entry: {
    breadcrumb: "Catalogue programmatique",
    positionHeading: "Position",
    policiesHeading: "Mesures",
    principleHeading: "Principe",
    limitsHeading: "Limites et points non tranchés",
    implementationHeading: "Note de mise en œuvre",
    basisHeading: "Fondement dans le manifeste",
    keywordsHeading: "Termes de recherche",
    lastUpdatedBefore: "Dernière mise à jour le",
    lastUpdatedAfter: ".",
    relatedHeading: "Positions liées",
    allPositions: "Toutes les positions",
    readManifesto: "Lire le manifeste",
    notFound: "Position introuvable",
  },

  statuses: {
    "manifesto-core": {
      label: "Noyau du manifeste",
      description: "Explicitement établie par le Manifeste du restaurationnisme intégral européen.",
    },
    agreed: {
      label: "Position adoptée",
      description: "Une position précisée pour ce catalogue après la rédaction du manifeste.",
    },
    derived: {
      label: "Dérivée",
      description:
        "Fortement impliquée par le manifeste ou par une position adoptée, mais dont la mise en œuvre n'est pas arrêtée.",
    },
    open: {
      label: "Ouverte",
      description: "Aucune position n'a été adoptée.",
    },
  },

  categories: {
    constitutional: {
      title: "Ordre constitutionnel, religieux et moral",
      summary:
        "La place de la religion dans la vie publique, et les questions morales que le droit ne peut éviter.",
    },
    family: {
      title: "Famille, démographie et ordre social",
      summary: "Le foyer comme première institution, et ce que l'action publique lui doit.",
    },
    nation: {
      title: "Nation, citoyenneté, immigration et Europe",
      summary: "L'appartenance à une communauté politique, et l'ordre européen entre les nations.",
    },
    economy: {
      title: "Économie, propriété, finance et travail",
      summary: "La propriété, l'entreprise, le crédit et la dignité du travail.",
    },
    technology: {
      title: "Technique, intelligence artificielle et vie à l'échelle humaine",
      summary:
        "Ce qui peut être construit, ce qui doit être déployé, et ce qui doit rester à portée de main.",
    },
    education: {
      title: "Éducation, culture et vie publique",
      summary: "Ce qui est transmis à la génération suivante, et qui en décide.",
    },
    government: {
      title: "Gouvernement, justice et ordre public",
      summary: "L'autorité, ses limites, et le traitement de ceux qui enfreignent la loi.",
    },
    healthcare: {
      title: "Santé",
      summary: "L'accès aux soins nécessaires, et l'éthique qui s'y pratique.",
    },
    environment: {
      title: "Environnement, terre et habitat",
      summary: "L'intendance d'un héritage que nous n'avons pas fait.",
    },
    "foreign-policy": {
      title: "Politique étrangère et défense",
      summary:
        "L'indépendance stratégique, et une présomption permanente contre la guerre inutile.",
    },
  },

  entries: {
    "catholic-confessional-state": {
      title: "État confessionnel catholique",
      shortAnswer:
        "Restore Europa soutient la reconnaissance constitutionnelle formelle du catholicisme comme religion publique principale, et récuse la thèse selon laquelle l'État pourrait être moralement ou religieusement neutre.",
      position: [
        "Restore Europa soutient un ordre politique confessionnel catholique profondément enraciné. L'État doit reconnaître formellement le catholicisme comme religion publique principale et ne doit pas se réclamer d'une neutralité morale ou religieuse.",
      ],
      policies: [
        "Le catholicisme doit recevoir une reconnaissance constitutionnelle formelle.",
        "L'enseignement moral catholique peut inspirer le droit public et les institutions publiques.",
        "L'Église et l'État temporel demeurent institutionnellement distincts, mais l'État n'est pas métaphysiquement suprême.",
        "Les fêtes catholiques, les églises, les symboles, les processions, les écoles et les traditions publiques doivent être protégés.",
        "L'État doit coopérer avec l'Église sur les questions de famille, d'éducation, de morale et de société.",
      ],
      principle:
        "L'État gouverne les affaires temporelles ; l'Église gouverne les affaires spirituelles ; l'autorité temporelle demeure soumise à l'ordre moral supérieur.",
      limits: [
        "Restore Europa ne soutient pas la conversion forcée.",
        "Ce modèle n'est pas le gouvernement clérical direct de l'administration ordinaire de l'État.",
      ],
      implementationNote:
        "L'établissement formel d'un ordre confessionnel exigerait une révision constitutionnelle dans la plupart des États européens ; il est énoncé ici comme l'ordre que recherche Restore Europa, et non comme une description du droit en vigueur.",
      keywords: [
        "État catholique",
        "État confessionnel",
        "intégralisme",
        "Église et État",
        "religion d'État",
      ],
    },

    abortion: {
      title: "Avortement",
      shortAnswer:
        "Restore Europa tient que la vie humaine doit être protégée dès la conception, et que l'avortement direct de convenance doit être interdit.",
      position: [
        "Restore Europa suit l'enseignement catholique selon lequel la vie humaine doit être respectée et protégée dès la conception. L'avortement direct de convenance doit être interdit.",
      ],
      policies: [
        "Protection légale de la vie humaine à naître dès la conception.",
        "Interdiction de l'avortement direct de convenance.",
        "Soutien matériel, médical et social aux femmes enceintes et aux familles.",
        "Soutien à l'adoption et aux solutions concrètes autres que l'avortement.",
        "Un traitement médical destiné à sauver la mère peut demeurer licite lorsque la mort de l'enfant à naître en est un effet secondaire non voulu, et non le moyen ou la fin recherchés.",
      ],
      principle:
        "La dignité humaine et le droit à la vie ne commencent pas au moment seulement où l'État choisit de les reconnaître.",
      keywords: [
        "avortement",
        "enfant à naître",
        "conception",
        "pro-vie",
        "interruption de grossesse",
      ],
    },

    "euthanasia-and-assisted-suicide": {
      title: "Euthanasie et suicide assisté",
      shortAnswer:
        "Restore Europa s'oppose à l'euthanasie directe et au suicide assisté, soutient les soins palliatifs et admet le refus d'un traitement extraordinaire ou disproportionné.",
      position: [
        "Restore Europa s'oppose à l'euthanasie directe et au suicide assisté et soutient les soins palliatifs, tout en admettant le refus d'un traitement extraordinaire ou disproportionné.",
      ],
      policies: [
        "Euthanasie directe interdite.",
        "Suicide assisté interdit.",
        "Offre solide de soins palliatifs et de structures d'accompagnement de la fin de vie.",
        "Les patients peuvent refuser un traitement extraordinaire, excessivement pénible ou disproportionné.",
        "Le soulagement de la douleur demeure légitime lorsque la mort n'est pas recherchée.",
      ],
      keywords: [
        "euthanasie",
        "suicide assisté",
        "aide à mourir",
        "soins palliatifs",
        "fin de vie",
      ],
    },

    "marriage-and-sexual-ethics": {
      title: "Mariage et éthique sexuelle",
      shortAnswer:
        "Restore Europa reconnaît le mariage civil comme l'union d'un homme et d'une femme, et centre le droit de la famille sur la famille naturelle.",
      position: [
        "Restore Europa reconnaît le mariage civil exclusivement comme l'union d'un homme et d'une femme et suit l'enseignement moral catholique en matière de sexualité.",
      ],
      policies: [
        "Le mariage entre personnes de même sexe n'est pas juridiquement reconnu comme mariage.",
        "Le droit de la famille est centré sur la famille naturelle formée de la mère, du père et des enfants.",
        "Les institutions religieuses ne peuvent être contraintes de reconnaître ou de célébrer des unions entre personnes de même sexe.",
        "La politique de l'adoption doit donner la priorité au lien de l'enfant avec un père et une mère.",
      ],
      keywords: [
        "mariage",
        "mariage entre personnes de même sexe",
        "droit de la famille",
        "adoption",
        "mariage civil",
      ],
    },

    contraception: {
      title: "Contraception",
      shortAnswer:
        "Restore Europa s'oppose à la contraception artificielle et récuse une culture publique qui fait de l'évitement permanent de la fécondité le fondement normal de la vie sexuelle, sans pénaliser la détention privée par des adultes.",
      position: [
        "Restore Europa suit l'enseignement catholique en s'opposant à la contraception artificielle et récuse une culture publique qui fait de l'évitement permanent de la fécondité le fondement normal de la vie sexuelle.",
      ],
      policies: [
        "Aucune promotion de la contraception artificielle par l'État.",
        "Aucune prise en charge ordinaire de la contraception par le contribuable, sauf lorsqu'un médicament est véritablement prescrit à une autre fin médicale.",
        "Restrictions de la publicité pour la contraception dirigée vers les mineurs.",
        "Les écoles ne doivent pas présenter la contraception comme la solution moralement neutre allant de soi aux comportements sexuels.",
        "La connaissance naturelle de la fécondité et les méthodes naturelles de régulation des naissances sont traitées différemment de la contraception artificielle.",
      ],
      limits: [
        "Cette position n'instaure pas d'interdiction pénale de la détention privée de contraceptifs par des adultes.",
      ],
      keywords: [
        "contraception",
        "pilule",
        "méthodes naturelles",
        "régulation des naissances",
        "fécondité",
      ],
    },

    pornography: {
      title: "Pornographie",
      shortAnswer: "Restore Europa soutient l'interdiction légale complète de la pornographie.",
      position: ["Restore Europa soutient l'interdiction légale complète de la pornographie."],
      policies: [
        "Production, financement, distribution commerciale, vente et exposition publique interdits.",
        "Hébergement en ligne et fourniture commerciale en connaissance de cause interdits.",
        "Détention ou acquisition délibérée de matériel pornographique interdites.",
        "Les peines les plus lourdes s'appliquent aux producteurs commerciaux, aux distributeurs, aux plateformes d'exploitation et au matériel impliquant la contrainte, la traite ou des mineurs.",
        "La définition légale doit exclure la médecine légitime, l'anatomie, la science, l'art classique et la littérature non pornographique.",
      ],
      principle:
        "La sexualité et le corps humain ne doivent pas être réduits à des objets commerciaux de stimulation et de consommation.",
      keywords: [
        "pornographie",
        "porno",
        "contenu pour adultes",
        "contenu explicite",
        "outrage aux bonnes mœurs",
      ],
    },

    prostitution: {
      title: "Prostitution",
      shortAnswer:
        "Restore Europa soutient l'interdiction légale complète de la prostitution et de son organisation commerciale, avec un accompagnement à la sortie pour celles et ceux qui la quittent.",
      position: [
        "Restore Europa soutient l'interdiction légale complète de la prostitution et de son organisation commerciale.",
      ],
      policies: [
        "Achat de services sexuels interdit.",
        "Vente de services sexuels interdite.",
        "Maisons closes, proxénétisme et organisation commerciale interdits.",
        "Publicité pour la prostitution interdite.",
        "Traite à des fins sexuelles et exploitation par contrainte punies avec une sévérité particulière.",
        "Programmes de sortie, hébergement, traitement des addictions et aide à la formation professionnelle accessibles aux personnes qui quittent la prostitution.",
      ],
      keywords: [
        "prostitution",
        "maisons closes",
        "travail du sexe",
        "proxénétisme",
        "traite des êtres humains",
      ],
    },

    "recreational-drugs": {
      title: "Drogues récréatives",
      shortAnswer:
        "Restore Europa soutient le maintien de l'illégalité des stupéfiants récréatifs, cannabis récréatif compris, avec des peines plus lourdes pour les trafiquants que pour les usagers dépendants.",
      position: [
        "Restore Europa soutient généralement le maintien de l'illégalité des stupéfiants récréatifs, cannabis récréatif compris.",
      ],
      policies: [
        "Production commerciale et trafic interdits.",
        "Vente récréative interdite.",
        "La détention demeure illicite, avec des peines proportionnées à l'infraction.",
        "Les revendeurs et les trafiquants organisés encourent des peines plus lourdes que les usagers dépendants.",
        "Traitement, sevrage et réhabilitation disponibles en cas d'addiction.",
        "L'usage médical véritable est traité séparément de l'usage récréatif.",
      ],
      keywords: ["drogues", "cannabis", "marijuana", "stupéfiants", "dépénalisation"],
    },

    alcohol: {
      title: "Alcool",
      shortAnswer:
        "L'alcool demeure licite pour les adultes en usage modéré. Restore Europa s'oppose à l'ivresse, à l'abus et aux conduites qui nuisent à autrui.",
      position: [
        "L'alcool demeure légal pour les adultes lorsqu'il est consommé avec modération. Restore Europa s'oppose à l'ivresse, à l'abus et aux conduites qui nuisent à autrui.",
      ],
      policies: [
        "Vente aux mineurs interdite.",
        "Conduite en état d'ivresse et troubles à l'ordre public liés à l'alcool sanctionnés.",
        "Publicité dirigée vers les mineurs restreinte.",
        "Traitement de l'alcoolisme soutenu.",
        "La consommation traditionnelle modérée demeure licite.",
      ],
      keywords: ["alcool", "bière", "vin", "ivresse", "tempérance"],
    },

    gambling: {
      title: "Jeux d'argent",
      shortAnswer:
        "Les jeux d'argent peuvent demeurer licites sous des formes limitées réservées aux adultes, strictement encadrées contre l'addiction, la fraude et l'exploitation.",
      position: [
        "Les jeux d'argent peuvent demeurer légaux sous des formes limitées réservées aux adultes, mais doivent être strictement encadrés contre l'addiction, la fraude et l'exploitation.",
      ],
      policies: [
        "Jeux d'argent interdits aux mineurs.",
        "Publicité dirigée vers les jeunes ou les personnes vulnérables restreinte.",
        "Mécaniques de jeu prédatrices ou délibérément manipulatrices restreintes ou interdites.",
        "Jeux d'argent en ligne à haut risque soumis à une réglementation stricte.",
        "Dispositifs d'auto-exclusion et de traitement de l'addiction obligatoires.",
        "Fraude, opérations de paris illégales et matchs truqués sévèrement sanctionnés.",
      ],
      keywords: ["jeux d'argent", "paris", "casino", "paris sportifs", "loot boxes"],
    },

    "blasphemy-and-sacrilege": {
      title: "Blasphème et sacrilège",
      shortAnswer:
        "L'incroyance, la critique et la discussion théologique demeurent licites. La profanation délibérée du sacré peut être interdite.",
      position: [
        "Restore Europa distingue l'incroyance et la critique de la profanation publique délibérée. L'athéisme et le désaccord théologique ne constituent pas en eux-mêmes des infractions pénales, tandis que la profanation délibérée du sacré peut être interdite.",
      ],
      policies: [
        "L'athéisme et l'incroyance privée demeurent licites.",
        "La critique des responsables de l'Église et le débat théologique demeurent licites.",
        "La profanation délibérée d'objets consacrés, d'églises ou de rites chrétiens sacrés peut être érigée en infraction pénale.",
        "Le vandalisme antichrétien demeure punissable au titre du droit pénal ordinaire, et peut comporter une circonstance aggravante de sacrilège.",
      ],
      principle:
        "Protéger le sacré sans faire un délit du doute, du désaccord ou de la recherche intellectuelle.",
      implementationNote:
        "Plusieurs États européens ont abrogé leurs dispositions sur le blasphème au cours des dernières décennies ; il s'agirait donc de rétablir une infraction plus étroite plutôt que d'en conserver une existante.",
      keywords: ["blasphème", "sacrilège", "athéisme", "profanation", "vandalisme"],
    },

    family: {
      title: "Famille",
      shortAnswer:
        "La famille formée autour du mariage est l'institution sociale fondamentale, et l'action publique doit rendre le mariage et l'éducation des enfants matériellement réalistes.",
      position: [
        "La famille formée autour du mariage de l'homme et de la femme, de l'éducation des enfants, de l'obligation entre les générations et du soin donné aux plus jeunes comme aux plus âgés est l'institution sociale fondamentale.",
      ],
      policies: [
        "Une fiscalité familiale.",
        "Un soutien à la parentalité.",
        "Un logement familial abordable.",
        "Des emplois stables, et un temps suffisant soustrait à la production économique.",
        "L'action publique doit rendre le mariage et l'éducation des enfants matériellement réalistes.",
      ],
      keywords: ["famille", "enfants", "mariage", "parents", "foyer"],
    },

    "demographic-renewal": {
      title: "Renouveau démographique",
      shortAnswer:
        "L'Europe doit répondre au déclin démographique en rendant la fondation d'une famille possible pour sa propre population plutôt que par une immigration de masse permanente.",
      position: [
        "L'Europe doit traiter le déclin démographique principalement en rendant la fondation d'une famille et l'éducation des enfants possibles pour sa propre population, plutôt qu'en recourant à une immigration de masse permanente comme substitut aux naissances.",
      ],
      keywords: ["démographie", "natalité", "fécondité", "population", "déclin"],
    },

    "sunday-rest-and-trading": {
      title: "Repos dominical et ouverture des commerces",
      shortAnswer:
        "Le dimanche doit être rétabli comme jour commun du culte, de la famille et du repos, l'activité commerciale ordinaire étant fortement restreinte.",
      position: [
        "Le dimanche doit être rétabli comme jour commun normal du culte, de la famille et du repos. L'activité commerciale ordinaire doit donc être fortement restreinte.",
      ],
      policies: [
        "Les commerces ordinaires normalement fermés le dimanche.",
        "Le propriétaire d'un petit commerce peut personnellement choisir d'ouvrir et de travailler, mais les employés ordinaires ne doivent pas être habituellement tenus de travailler.",
        "Les hôpitaux, les services d'urgence, les infrastructures critiques, les transports publics nécessaires et les pharmacies peuvent fonctionner.",
        "L'hôtellerie et la restauration peuvent relever de règles distinctes, la demande du dimanche étant intrinsèque à leur fonction.",
        "Les exceptions doivent rester assez étroites pour que le dimanche ne devienne pas un jour commercial ordinaire.",
      ],
      principle:
        "Un jour de repos partagé protège le culte, la vie de famille et la communauté d'une colonisation économique totale.",
      keywords: [
        "ouverture dominicale",
        "commerces",
        "sabbat",
        "jour de repos",
        "horaires d'ouverture",
      ],
    },

    "welfare-and-social-assistance": {
      title: "Protection sociale et aide sociale",
      shortAnswer:
        "Un filet de sécurité dirigé avant tout vers les citoyens, les familles et ceux qui sont véritablement incapables de subvenir à leurs besoins, exprimant la solidarité sans devenir une dépendance permanente et évitable.",
      position: [
        "Restore Europa soutient un filet de sécurité sociale dirigé avant tout vers les citoyens, les familles et les personnes véritablement incapables de subvenir à leurs besoins. L'aide sociale doit exprimer la solidarité sans devenir un système permanent de dépendance évitable.",
      ],
      policies: [
        "Priorité aux citoyens et à leurs familles, aux enfants, aux aidants, aux personnes handicapées, aux personnes âgées et aux foyers confrontés à une détresse véritable.",
        "Les bénéficiaires en âge de travailler et aptes au travail sont normalement tenus de chercher un emploi, une formation ou une réadaptation.",
        "Les non-citoyens sont normalement tenus de travailler et de subvenir à leurs besoins plutôt que de migrer en vue d'une aide sociale de longue durée.",
        "Les prestations contributives peuvent demeurer accessibles aux travailleurs étrangers en situation régulière qui ont effectivement cotisé au régime concerné.",
        "La fraude aux prestations entraîne le remboursement et des sanctions proportionnées.",
        "Les institutions caritatives catholiques, chrétiennes et historiques peuvent jouer un rôle majeur, avec un contrôle transparent des fonds publics.",
      ],
      principle:
        "La famille, la paroisse et les institutions locales doivent agir avant la bureaucratie centrale lointaine, là où elles peuvent le faire avec compétence.",
      implementationNote:
        "L'éligibilité repose ici sur la citoyenneté et l'historique de cotisation, non sur l'origine ethnique. Restreindre les prestations en fonction de la nationalité mettrait aussi en jeu les règles d'égalité de traitement applicables aux travailleurs résidant légalement, dans plusieurs systèmes européens.",
      keywords: [
        "protection sociale",
        "prestations",
        "aide sociale",
        "filet de sécurité",
        "dépendance",
      ],
    },
    "nation-and-historical-continuity": {
      title: "Nation et continuité historique",
      shortAnswer:
        "La nation est une communauté historique à travers les générations, et les peuples d'Europe ont un intérêt légitime à maintenir leur continuité culturelle et historique.",
      position: [
        "La nation est une communauté historique à travers les générations, façonnée par la mémoire, la langue, les coutumes, les institutions, le territoire et le sentiment d'un destin commun. Les peuples d'Europe ont un intérêt légitime à maintenir leur continuité culturelle et historique.",
      ],
      keywords: ["nation", "peuple", "patrie", "continuité", "identité"],
    },

    immigration: {
      title: "Immigration",
      shortAnswer:
        "L'immigration doit être limitée à des niveaux compatibles avec une intégration réelle, la stabilité sociale, la capacité des infrastructures et la continuité démographique.",
      position: [
        "L'immigration doit être limitée à des niveaux compatibles avec une intégration réelle, la stabilité sociale, la capacité des infrastructures, et la continuité démographique et culturelle de la nation d'accueil.",
      ],
      policies: [
        "Les frontières demeurent des institutions politiques légitimes.",
        "La politique migratoire doit servir le bien commun de long terme de la nation d'accueil.",
        "Les obligations humanitaires n'exigent pas de renoncer à la maîtrise de la politique démographique.",
      ],
      keywords: ["immigration", "migration", "frontières", "intégration", "asile"],
    },

    "asylum-and-international-protection": {
      title: "Asile et protection internationale",
      shortAnswer:
        "L'asile est une protection contre une persécution véritable ou un danger grave, non un mécanisme général permettant de choisir un pays d'installation préféré.",
      position: [
        "La protection doit normalement être accordée dans le premier pays véritablement sûr disponible et, dans la mesure du possible, aussi près que possible de la région d'origine de la personne déplacée. Les États européens conservent le droit de rejeter les demandes infondées et d'éloigner les personnes sans titre légal les autorisant à demeurer sur leur territoire.",
      ],
      policies: [
        "Maintenir l'accès à l'asile pour les personnes alléguant de manière crédible une persécution ou un préjudice grave.",
        "Exiger un enregistrement rapide, des vérifications d'identité et un contrôle de sécurité.",
        "Recourir à des procédures accélérées pour les demandeurs venant de pays généralement sûrs, tout en préservant la possibilité individuelle de démontrer que la présomption ne leur est pas applicable.",
        "Appliquer fermement le principe du premier pays sûr ou du pays tiers sûr là où une protection effective est véritablement disponible.",
        "Distinguer les réfugiés des migrants économiques ordinaires ; la seule difficulté économique n'ouvre pas droit à l'asile.",
        "Donner la priorité à l'aide humanitaire régionale et à la réinstallation encadrée des réfugiés particulièrement vulnérables lorsque cela est approprié.",
        "Les demandeurs déboutés doivent être éloignés rapidement une fois épuisées les voies de recours applicables.",
        "La protection temporaire accordée en temps de guerre doit demeurer temporaire et être réexaminée lorsque les conditions changent de manière substantielle.",
        "Les mineurs non accompagnés et les personnes présentant des vulnérabilités véritables bénéficient de garanties distinctes.",
      ],
      implementationNote:
        "La politique repose sur un examen individualisé du besoin de protection et sur le principe de non-refoulement. Les obligations européennes et internationales existantes limiteraient toute tentative d'éloigner une personne vers un lieu où elle serait exposée à la persécution, à la torture ou à un préjudice grave comparable.",
      keywords: [
        "asile",
        "réfugiés",
        "premier pays sûr",
        "pays tiers sûr",
        "non-refoulement",
        "protection temporaire",
        "retour",
      ],
    },

    "asylum-work-and-public-assistance": {
      title: "Asile, travail et aide publique",
      shortAnswer:
        "La protection doit favoriser l'autonomie plutôt qu'une dépendance permanente à l'aide sociale.",
      position: [
        "Les personnes admises au titre de la protection qui sont capables de travailler doivent être tenues de devenir économiquement autonomes aussi rapidement que raisonnablement possible. Une demande en cours d'examen ne doit pas ouvrir automatiquement l'accès à l'ensemble du système ordinaire d'aide sociale.",
      ],
      policies: [
        "Autoriser le travail légal dès que cela est administrativement praticable.",
        "Attendre des adultes aptes au travail qu'ils cherchent un emploi dès que l'accès à l'emploi est légalement ouvert.",
        "Pendant l'examen de la demande, concentrer l'aide sur l'hébergement nécessaire, l'alimentation, les soins de santé essentiels et les besoins élémentaires plutôt que sur un soutien financier sans restriction.",
        "Admettre des exigences proportionnées de travail, de langue et de coopération là où la loi le permet.",
        "Ne pas créer d'accès préférentiel à des prestations publiques rares au détriment des citoyens se trouvant dans un besoin comparable.",
        "Mettre fin au soutien orienté vers l'intégration après un rejet définitif et faire entrer la personne dans le dispositif de retour.",
        "Préserver les nécessités d'urgence et un soutien adapté pour les enfants et les personnes véritablement incapables de subvenir à leurs besoins.",
      ],
      implementationNote:
        "En vertu de la Convention de 1951 relative au statut des réfugiés, les réfugiés reconnus qui résident régulièrement dans un État contractant bénéficient de protections conventionnelles en matière d'emploi et d'assistance publique. Une politique visant à exclure entièrement les réfugiés reconnus de l'assistance publique couverte exigerait un examen des obligations conventionnelles, et non une simple législation ordinaire.",
      keywords: [
        "asile",
        "aide sociale",
        "obligation de travailler",
        "autonomie",
        "réfugiés",
        "assistance publique",
        "protection temporaire",
      ],
    },

    "deportation-of-criminal-offenders": {
      title: "Expulsion pénale et interdictions de retour",
      shortAnswer:
        "Les non-citoyens auteurs d'infractions graves sont éloignés au terme de la procédure pénale et définitivement exclus ; les manquements ordinaires au droit du séjour emportent normalement une interdiction de retour de dix ans.",
      position: [
        "La citoyenneté et la résidence étrangère sont des statuts distincts. Une délinquance intentionnelle grave commise par un non-citoyen peut justifier qu'il soit mis fin à son séjour après condamnation au terme d'une procédure pénale équitable.",
        "La résidence étrangère ne confère pas le même droit permanent au séjour que la citoyenneté. Un non-citoyen condamné pour une infraction grave figurant dans la liste doit ordinairement perdre son séjour et être éloigné au terme de la procédure pénale applicable.",
      ],
      policies: [
        "Exiger une condamnation régulière pour l'infraction invoquée avant toute expulsion pénale.",
        "Les violences graves, les infractions sexuelles graves, le vol avec violence, la criminalité organisée, le terrorisme, la traite, le trafic de stupéfiants d'ampleur, l'escroquerie grave et les infractions intentionnelles comparables déclenchent en principe l'éloignement.",
        "La récidive peut justifier l'éloignement même lorsque les infractions prises isolément sont moins graves.",
        "Traiter le meurtre intentionnel, le viol, les abus sexuels graves sur enfants, le terrorisme, la traite grave, les violences organisées graves et les infractions graves comparables comme relevant en principe de l'interdiction définitive.",
        "Assortir d'une interdiction définitive de retour les éloignements justifiés par une criminalité grave relevant de cette liste ou par une menace grave pour la sécurité nationale.",
        "Appliquer une interdiction de retour de dix ans par défaut aux manquements graves au droit ordinaire du séjour, tels que l'entrée irrégulière délibérée, le séjour irrégulier répété ou le contournement délibéré d'une décision de retour, sous réserve des règles de proportionnalité prévues par la loi d'application.",
        "Permettre des sanctions plus courtes pour les manquements véritablement mineurs ou purement techniques au droit du séjour, lorsqu'une interdiction de dix ans serait disproportionnée.",
        "Exécuter l'éloignement après l'exécution de la peine d'emprisonnement, à moins qu'un transfèrement légal ou un éloignement anticipé ne soit possible.",
        "Les infractions administratives mineures ou vénielles n'entraînent pas automatiquement une expulsion définitive.",
        "Maintenir les citoyens naturalisés dans le cadre distinct de la déchéance de la citoyenneté tant que celle-ci n'a pas d'abord été régulièrement retirée.",
        "Les citoyens ne peuvent être expulsés de leur propre pays.",
      ],
      implementationNote:
        "Un ressortissant étranger en séjour régulier bénéficie actuellement de garanties procédurales contre l'expulsion au titre du droit européen des droits de l'homme. L'éloignement peut aussi être exclu lorsque le retour exposerait la personne à des mauvais traitements prohibés. Le modèle visé est donc rapide après condamnation définitive, mais reste susceptible d'un contrôle juridictionnel là où des obligations contraignantes l'exigent. En l'état de l'article 11 de la directive « retour » de l'Union, les interdictions d'entrée ne doivent ordinairement pas excéder cinq ans, mais peuvent dépasser cette durée lorsque la personne représente une menace grave pour l'ordre public, la sécurité publique ou la sécurité nationale. Une interdiction de dix ans par défaut pour l'entrée irrégulière ordinaire irait donc au-delà de la règle actuelle de l'Union.",
      keywords: [
        "expulsion",
        "expulsion pénale",
        "délinquants étrangers",
        "éloignement",
        "interdiction de retour",
        "dix ans",
        "interdiction définitive",
        "meurtre",
        "viol",
        "terrorisme",
        "séjour irrégulier",
        "titre de séjour",
        "ordre public",
        "reconduite à la frontière",
      ],
    },

    "citizenship-general-principle": {
      title: "Citoyenneté : principe général",
      shortAnswer:
        "La citoyenneté est l'appartenance à une communauté politique historique plutôt qu'une conséquence de la résidence, et Restore Europa récuse le droit du sol automatique comme règle générale.",
      position: [
        "La citoyenneté est l'appartenance à une communauté politique historique, et non une simple résidence. Restore Europa récuse le droit du sol automatique comme règle générale.",
      ],
      policies: [
        "La citoyenneté se transmet normalement par la filiation d'un parent citoyen.",
        "La naissance sur le territoire national de parents non citoyens ne confère pas à elle seule la citoyenneté.",
        "La naturalisation exige une assimilation linguistique, culturelle, civique et patriotique profonde.",
        "La naturalisation est une admission dans la communauté politique nationale, et non un droit automatique engendré par la résidence.",
      ],
      keywords: ["citoyenneté", "droit du sol", "jus soli", "jus sanguinis", "nationalité"],
    },

    naturalization: {
      title: "Assimilation et naturalisation",
      shortAnswer:
        "La citoyenneté exige un niveau sensiblement plus élevé que la résidence ordinaire ou l'intégration : une assimilation réussie à la communauté politique nationale.",
      position: [
        "La voie de naturalisation normale de Restore Europa exige environ quinze ans de résidence régulière avant qu'une demande puisse être déposée, ainsi que des exigences d'assimilation exceptionnellement rigoureuses.",
        "La naturalisation n'est pas la conséquence automatique du temps passé dans le pays. Les demandeurs doivent satisfaire à des exigences rigoureuses de langue, de connaissances civiques, de conduite et d'attachement avant que la citoyenneté ne soit accordée.",
      ],
      policies: [
        "Conserver la voie de résidence normale d'environ quinze ans prévue par le catalogue avant qu'une naturalisation ordinaire puisse être sollicitée.",
        "Exiger une maîtrise pratique avancée de la langue nationale et une connaissance substantielle de l'histoire, des institutions et de l'ordre constitutionnel.",
        "Le respect de l'ordre constitutionnel et du caractère chrétien et historique du pays.",
        "Exiger un comportement durablement respectueux de la loi et des déclarations sincères devant les autorités chargées du séjour et de la nationalité.",
        "Exiger la preuve d'un attachement durable au pays et non de la seule résidence.",
        "Admettre des examens objectifs de langue et de connaissances civiques.",
        "Refuser la naturalisation lorsqu'une criminalité grave, le terrorisme, une escroquerie grave ou une tromperie délibérée sur l'identité demeurent rédhibitoires.",
        "Ne pas faire d'un réexamen civique périodique un motif automatique d'expulsion d'une personne dont la citoyenneté a été acquise régulièrement et de bonne foi ; la déchéance après naturalisation relève de notices distinctes.",
      ],
      limits: ["Quinze ans de résidence ne garantissent pas automatiquement la naturalisation."],
      implementationNote:
        "Les conditions de résidence ordinaires vont actuellement de cinq à dix ans à travers l'Europe ; il s'agirait donc d'allonger la pratique existante plutôt que de l'ajuster. Le manifeste énonce déjà que la naturalisation doit exiger une connaissance substantielle de la langue, de l'histoire et des institutions, le respect de l'ordre constitutionnel et un attachement véritable au pays. La présente notice rassemble ces exigences en une norme d'assimilation propre au mouvement.",
      keywords: [
        "naturalisation",
        "assimilation",
        "résidence",
        "langue",
        "exigence linguistique",
        "connaissances civiques",
        "test de citoyenneté",
        "attachement",
      ],
    },

    "citizenship-by-descent": {
      title: "Citoyenneté par filiation et réintégration",
      shortAnswer:
        "Une filiation nationale documentée peut justifier une voie de réintégration sensiblement plus rapide que la naturalisation ordinaire.",
      position: [
        "Une filiation nationale documentée peut justifier une voie de réintégration dans la citoyenneté sensiblement plus rapide que la naturalisation ordinaire.",
      ],
      policies: [
        "L'enfant d'un citoyen hérite ordinairement de la citoyenneté de ce parent, quel que soit son lieu de naissance.",
        "Une personne dont la filiation nationale ou l'ascendance nationale proche est documentée peut bénéficier d'une voie facilitée de retour ou de réintégration.",
        "La proposition de travail pour une telle voie facilitée est d'environ cinq ans, au lieu des quinze ans ordinaires.",
      ],
      implementationNote:
        "La filiation s'entend ici d'une citoyenneté ou d'une ascendance nationale documentée. Elle ne crée pas de droits civils distincts fondés sur une classification raciale ou ethnique large.",
      keywords: ["filiation", "ascendance", "réintégration", "rapatriement", "jus sanguinis"],
    },

    "voting-rights-after-naturalization": {
      title: "Droit de vote après la naturalisation",
      shortAnswer:
        "Les citoyens naturalisés doivent attendre quatre années supplémentaires après la naturalisation avant d'obtenir la plénitude du droit de vote.",
      position: [
        "Les citoyens naturalisés ne doivent pas obtenir le droit de vote immédiatement au moment de la naturalisation. Une période de citoyenneté de quatre années supplémentaires doit normalement précéder la plénitude du droit de vote.",
      ],
      policies: [
        "Voie ordinaire : quinze ans de résidence régulière avant de pouvoir demander la naturalisation.",
        "Après la naturalisation : quatre années supplémentaires avant la plénitude du droit de vote.",
      ],
      implementationNote:
        "Priver du droit de suffrage des personnes déjà citoyennes exigerait une révision constitutionnelle dans les États où le vote est attaché à la citoyenneté elle-même.",
      keywords: ["droit de vote", "suffrage", "corps électoral", "élections", "délai d'attente"],
    },

    "high-public-office": {
      title: "Éligibilité aux hautes charges publiques",
      shortAnswer:
        "Les plus hautes charges de la nation sont réservées aux citoyens ayant un lien de naissance, de filiation et d'histoire avec le pays, plutôt qu'à la seule citoyenneté acquise.",
      position: [
        "La citoyenneté ordinaire et l'éligibilité aux charges constitutionnelles, de sécurité et militaires suprêmes sont deux questions distinctes. La naturalisation seule ne crée pas d'éligibilité aux plus hautes charges de l'État.",
      ],
      policies: [
        "Appliquer des règles d'éligibilité renforcées au chef de l'État, au chef du gouvernement, à la direction de la défense et de la sécurité intérieure, au haut commandement des forces armées, à la direction des services de renseignement et aux autres charges d'une autorité constitutionnelle exceptionnelle.",
        "Exiger la citoyenneté depuis la naissance et un lien national ancestral ou historique démontrable.",
        "Exiger un enracinement national substantiel, la maîtrise de la langue nationale et une loyauté avérée envers l'ordre constitutionnel et national.",
        "La naturalisation ordinaire, quelle qu'en soit l'ancienneté, ne confère pas à elle seule l'éligibilité à ces charges.",
        "Définir précisément par la loi quelles charges relèvent de la catégorie réservée.",
      ],
      implementationNote:
        "Des règles fondées sur la filiation, la naissance ou l'origine ethnique se heurteraient à des objections majeures d'égalité et de non-discrimination au regard du droit européen et international des droits de l'homme en vigueur. Toute mise en œuvre exigerait des critères juridiques d'une précision inhabituelle et, éventuellement, une révision constitutionnelle ou conventionnelle.",
      keywords: [
        "hautes charges publiques",
        "président",
        "premier ministre",
        "citoyenneté de naissance",
        "filiation",
        "continuité nationale",
        "éligibilité",
        "ministres",
        "allégeance",
      ],
    },

    "dual-citizenship": {
      title: "Double citoyenneté",
      shortAnswer:
        "La double citoyenneté entre pays européens est généralement acceptée ; les citoyens non européens qui se font naturaliser dans une nation européenne seraient tenus de renoncer à leur citoyenneté antérieure.",
      position: [
        "Restore Europa accepte généralement la double citoyenneté entre pays européens, mais attend des citoyens non européens qui se font naturaliser dans une nation européenne qu'ils renoncent à leur citoyenneté non européenne antérieure.",
      ],
      policies: [
        "Double citoyenneté d'un pays européen à l'autre généralement permise.",
        "Les citoyens non européens qui se font naturaliser sont normalement tenus de renoncer à leur citoyenneté antérieure.",
        "Des exceptions peuvent être envisagées lorsque la renonciation est juridiquement impossible ou créerait une difficulté exceptionnelle.",
      ],
      principle:
        "Les nations européennes distinctes sont des communautés politiques au sein d'une civilisation européenne plus vaste.",
      implementationNote:
        "L'Europe s'entend ici géographiquement et à travers le réseau de sections nationales du mouvement, et non comme l'appartenance à l'Union européenne.",
      keywords: ["double citoyenneté", "double nationalité", "renonciation", "second passeport"],
    },

    "revocation-of-naturalized-citizenship": {
      title: "Déchéance de la citoyenneté acquise par naturalisation",
      shortAnswer:
        "La citoyenneté acquise par naturalisation peut être retirée par voie judiciaire dans des cas exceptionnellement graves, tels que la naturalisation frauduleuse, la trahison ou le terrorisme.",
      position: [
        "La citoyenneté acquise par naturalisation peut être retirée dans des circonstances exceptionnellement graves, telles que la naturalisation frauduleuse, la trahison, le terrorisme ou d'autres conduites étroitement définies gravement préjudiciables à l'État.",
      ],
      policies: [
        "La déchéance doit suivre une procédure judiciaire.",
        "Les motifs doivent être définis par la loi plutôt que laissés à une appréciation vague de l'exécutif.",
        "Un niveau de preuve élevé et un droit de recours sont exigés.",
        "La fraude dans la procédure de naturalisation est un motif direct de déchéance.",
        "La trahison et le terrorisme peuvent justifier la déchéance.",
        "Restore Europa est favorable à la possibilité d'une déchéance dans les cas exceptionnellement graves, même lorsque l'apatridie pourrait en résulter.",
      ],
      implementationNote:
        "Le droit international et européen impose des restrictions substantielles au fait de rendre une personne apatride, et l'éloignement suppose normalement un État d'accueil juridiquement en mesure d'admettre la personne et disposé à le faire. Cela relève de l'ordre constitutionnel que recherche Restore Europa, et exigerait une modification des traités ou une révision constitutionnelle.",
      keywords: ["déchéance de nationalité", "retrait", "apatridie", "trahison", "terrorisme"],
    },

    "remigration-general-principle": {
      title: "Remigration : principe général",
      shortAnswer:
        "La remigration est le retour organisé des personnes qui n'ont pas ou qui perdent une base légale de séjour, associé à une politique de retour volontaire, à une exécution stricte des conditions de séjour et au réexamen des statuts obtenus par fraude ou par une irrégularité qualifiée.",
      position: [
        "Restore Europa tient le statut migratoire pour conditionnel : il dépend d'une admission régulière, du respect des conditions de séjour, de l'ordre public et, le cas échéant, d'une intégration réussie. La remigration n'est pas définie comme un éloignement fondé sur la seule race ; elle opère par le statut juridique, l'historique migratoire, la conduite pénale, la fraude, les motifs de sécurité et des conditions de séjour clairement définies.",
      ],
      policies: [
        "Exécuter les décisions de retour définitives à l'égard des personnes sans droit légal au séjour.",
        "Recourir au retour volontaire lorsqu'il est réaliste et au retour contraint lorsque la base légale du séjour a cessé.",
        "Réexaminer le séjour ou la nationalité obtenus par fraude ou tromperie substantielle.",
        "Permettre le retrait du statut de séjour des non-citoyens pour criminalité grave, menaces graves pour la sécurité et autres motifs légaux expressément définis.",
        "Maintenir la citoyenneté, le séjour permanent, le séjour temporaire, le statut d'asile et la présence irrégulière comme des catégories juridiquement distinctes.",
        "Ne pas traiter le seul écoulement du temps comme créant un droit automatique au séjour lorsque le statut sous-jacent demeure temporaire ou conditionnel.",
        "Appliquer des procédures et des exigences de preuve individuelles plutôt qu'une expulsion collective fondée sur la seule catégorie ethnique ou raciale.",
      ],
      implementationNote:
        "Le droit européen en vigueur impose des contraintes procédurales et de droits de l'homme substantielles au retour et à l'expulsion. La présente notice énonce l'architecture de la politique proposée ; sa mise en œuvre exigerait la conformité aux engagements juridiques incompatibles, leur modification ou le retrait de ceux-ci. Le manifeste existant du mouvement traite déjà la citoyenneté comme une appartenance et non comme une simple résidence, et soutient une immigration maîtrisée, compatible avec l'intégration, la stabilité et la continuité nationale.",
      keywords: [
        "remigration",
        "retour",
        "application du droit des étrangers",
        "séjour",
        "expulsion",
        "intégration",
        "nationalité",
      ],
    },

    "integration-general-definition": {
      title: "Intégration : définition générale",
      shortAnswer:
        "L'intégration désigne une incorporation linguistique, civique, économique et sociale démontrable à la nation d'accueil ; la seule résidence ne suffit pas.",
      position: [
        "L'intégration se mesure à la conduite, à la compétence et à une participation durable. Elle se distingue de la citoyenneté et du niveau d'assimilation plus élevé qu'exige la naturalisation.",
      ],
      policies: [
        "Exiger une maîtrise fonctionnelle de la principale langue nationale, normalement autour de B1–B2 selon le statut recherché.",
        "Exiger une connaissance élémentaire de l'histoire nationale, des institutions, du droit, des devoirs civiques et de la structure constitutionnelle.",
        "Tenir une criminalité grave et persistante, la criminalité organisée, le terrorisme, l'escroquerie grave et la fraude migratoire délibérée pour de forts indices contraires à l'intégration.",
        "Attendre des non-citoyens aptes au travail et en âge de travailler qu'ils participent par l'emploi, le travail indépendant, l'éducation, la formation professionnelle, une prise en charge familiale reconnue ou une autre contribution légitime.",
        "Considérer une dépendance évitable et prolongée à l'aide publique comme un facteur défavorable à l'intégration, en exemptant l'incapacité réelle, le handicap, la retraite, le chômage temporaire et une prise en charge substantielle.",
        "Admettre la preuve d'une participation locale par le travail, l'éducation, les paroisses, les associations, les clubs et d'autres institutions communautaires, sans rendre obligatoire l'appartenance à une organisation particulière.",
        "Exiger le respect de l'ordre constitutionnel légal sans exiger une conformité idéologique à chaque politique gouvernementale.",
        "Apprécier l'intégration sur la base d'éléments individuels documentés plutôt que de la seule race.",
      ],
      implementationNote:
        "Le droit de l'Union relatif aux résidents de longue durée permet actuellement aux États membres d'imposer des conditions d'intégration et exige des ressources stables et régulières pour l'acquisition du statut de longue durée. La politique sépare les conceptions de la nation historique fondées sur l'ascendance du critère juridique administrable consistant à savoir si tel résident est intégré.",
      keywords: [
        "intégration",
        "langue",
        "connaissances civiques",
        "autonomie",
        "séjour",
        "ordre public",
        "participation",
      ],
    },

    "regularized-irregular-immigration": {
      title: "Immigration irrégulière régularisée",
      shortAnswer:
        "Une légalisation ultérieure n'efface pas automatiquement un historique avéré d'entrée ou de séjour irréguliers ; les cas antérieurement régularisés peuvent être réexaminés individuellement au regard du nouveau cadre juridique.",
      position: [
        "Restore Europa rejette la thèse selon laquelle toute régularisation ou amnistie passée devrait être tenue pour constitutionnellement intouchable. Lorsque des documents fiables établissent une entrée irrégulière antérieure, un séjour irrégulier, une fausse identité ou une autre irrégularité substantielle, l'historique de séjour qui en résulte peut être réexaminé individuellement.",
      ],
      policies: [
        "Permettre le réexamen individuel des statuts de séjour issus d'amnisties antérieures, de régularisations massives ou de programmes exceptionnels comparables.",
        "Exiger de l'État qu'il prouve l'historique migratoire pertinent à partir de documents et d'éléments de preuve ; l'irrégularité ne peut être simplement présumée.",
        "Réexaminer l'intégralité du dossier initial, y compris l'identité, l'historique d'entrée, l'historique d'asile, la base du séjour, les titres ultérieurs et toute procédure de naturalisation.",
        "Distinguer la simple irrégularité antérieure de la fraude substantielle, de la fausse identité ou de la dissimulation, qui peuvent emporter des conséquences plus lourdes.",
        "Lorsque le statut survit au réexamen mené sous l'empire de la loi nouvelle, il demeure valable sous réserve des conditions ordinaires de séjour.",
        "Lorsque le statut n'aurait pas été accordé au regard de la règle nouvelle applicable et que la constitution permet un réexamen rétroactif, le retrait et le retour peuvent s'ensuivre par une décision individuelle assortie d'une procédure de recours.",
      ],
      limits: [
        "La présente notice ne tient pas tout citoyen naturalisé pour frauduleux au seul motif qu'une période antérieure de séjour a été irrégulière ; la fraude et la régularisation régulière demeurent des notions distinctes.",
      ],
      implementationNote:
        "Il s'agit d'un pouvoir de réexamen rétroactif proposé, qui va au-delà de la stabilité normalement attachée aux décisions administratives définitives. Il exigerait une habilitation constitutionnelle claire, des règles de prescription définies et des garanties procédurales.",
      keywords: [
        "régularisation",
        "amnistie",
        "entrée irrégulière",
        "séjour irrégulier",
        "réexamen du statut",
        "historique migratoire",
      ],
    },

    "employment-and-self-sufficiency-of-foreign-residents": {
      title: "Emploi et autonomie des résidents étrangers",
      shortAnswer:
        "Les résidents non citoyens aptes au travail sont tenus de rester économiquement autonomes et ne bénéficient ordinairement pas du même droit ouvert à l'aide sociale que les citoyens.",
      position: [
        "La résidence étrangère est accordée à des fins déterminées et demeure conditionnelle. Les résidents en capacité de travailler doivent normalement subvenir à leurs besoins par l'emploi, le travail indépendant, les études, la formation ou une prise en charge reconnue, plutôt que par une dépendance permanente et évitable à l'aide publique.",
      ],
      policies: [
        "Exiger des résidents non citoyens temporaires et ordinaires qu'ils conservent des moyens d'existence légaux suffisants, sous réserve de délais de carence raisonnables après une perte d'emploi involontaire.",
        "Admettre l'emploi, le travail indépendant, les études à temps plein, la formation professionnelle et une prise en charge familiale substantielle comme une participation légitime.",
        "Prévoir des exceptions pour le handicap réel, l'incapacité, la retraite, les enfants et les difficultés temporaires malgré des efforts raisonnables pour travailler.",
        "Limiter l'aide sociale ordinaire, hors urgence, pour les non-citoyens là où cela est constitutionnellement et légalement permis.",
        "Préserver l'alimentation, l'hébergement et les soins médicalement nécessaires en cas d'urgence lorsque leur refus violerait des obligations juridiques ou humanitaires élémentaires.",
        "Traiter une dépendance évitable et répétée à l'aide publique comme un motif possible de réexamen du séjour lorsque le titre était expressément subordonné à l'autonomie.",
        "Maintenir la citoyenneté acquise à part : le simple chômage ne transforme pas automatiquement un citoyen en résident irrégulier.",
      ],
      limits: [
        "Le délai de carence exact après une perte d'emploi devrait être fixé par la loi d'application plutôt qu'inscrit en dur dans le principe constitutionnel.",
      ],
      implementationNote:
        "Les règles de l'Union relatives aux résidents de longue durée exigent des ressources stables et régulières pour acquérir ce statut, mais le droit en vigueur accorde aussi aux résidents de longue durée des protections importantes et ne permet pas l'expulsion pour des motifs purement économiques. Le cadre proposé par le mouvement irait plus loin pour certaines catégories de séjour des non-citoyens.",
      keywords: [
        "autonomie",
        "emploi",
        "aide sociale",
        "résidents étrangers",
        "titre de séjour",
        "participation économique",
      ],
    },

    "probationary-naturalization": {
      title: "Naturalisation probatoire",
      shortAnswer:
        "La citoyenneté nouvellement acquise est soumise à une période probatoire de dix ans, assortie de règles de déchéance renforcées pour des motifs graves étroitement définis.",
      position: [
        "La naturalisation crée la citoyenneté, mais pendant les dix premières années l'État conserve un pouvoir renforcé de rouvrir la procédure et de retirer la citoyenneté acquise pour des manquements graves déterminés ou pour des vices substantiels affectant la base de la naturalisation.",
      ],
      policies: [
        "Fixer la période probatoire à dix ans à compter de la date d'acquisition de la citoyenneté.",
        "Permettre la déchéance pour fraude substantielle à la naturalisation, fausse identité ou dissimulation délibérée d'un fait disqualifiant.",
        "Permettre la déchéance pour les crimes exceptionnellement graves commis après la naturalisation, tels que les définit la notice distincte consacrée à la citoyenneté et à la criminalité grave.",
        "Permettre la déchéance pour terrorisme, trahison ou conduite constituant une menace exceptionnellement grave pour la sécurité nationale, lorsque la loi le prévoit expressément.",
        "Exiger une procédure individuelle, juridictionnelle ou quasi juridictionnelle, la preuve du motif légal et un droit de recours effectif.",
        "Ne pas faire du simple chômage, d'un désaccord politique ou d'un test civique manqué un motif automatique de déchéance à lui seul.",
        "Au terme des dix ans, appliquer les protections ordinaires de la citoyenneté, sous réserve des motifs permanents tirés de la fraude et des autres motifs exceptionnels de déchéance retenus ailleurs dans le catalogue.",
      ],
      implementationNote:
        "Il s'agit d'une dérogation constitutionnelle proposée aux systèmes qui tiennent la naturalisation pour immédiatement indiscernable de la citoyenneté par naissance à toutes fins de privation. Les instruments internationaux existants en matière de nationalité encadrent la privation, en particulier lorsqu'elle créerait l'apatridie ; ces conflits exigeraient un traitement constitutionnel et conventionnel explicite.",
      keywords: [
        "citoyenneté probatoire",
        "naturalisation",
        "déchéance",
        "dix ans",
        "fraude",
        "criminalité grave",
      ],
    },

    "residence-permit-withdrawal": {
      title: "Retrait du titre de séjour",
      shortAnswer:
        "Le statut de séjour des non-citoyens se perd plus facilement que la citoyenneté et peut être retiré lorsque des conditions définies d'admission ou de séjour continu sont substantiellement violées.",
      position: [
        "Le séjour est une autorisation juridique conditionnelle. Une criminalité grave, une fraude substantielle, des menaces graves pour la sécurité et le manquement persistant à des conditions de séjour expressément énoncées peuvent justifier le retrait et le retour.",
      ],
      policies: [
        "Retirer le titre ou en refuser le renouvellement en cas de fraude substantielle sur l'identité ou le séjour.",
        "Retirer le séjour en cas de crime violent ou sexuel grave, de terrorisme, de criminalité organisée grave et de délinquance grave comparable, sous réserve du cadre distinct de l'expulsion pénale.",
        "Retirer le séjour lorsque la personne constitue une menace grave et établie pour la sécurité nationale.",
        "Permettre un réexamen en cas de dépendance évitable et répétée à l'aide sociale lorsque l'autonomie était une condition expresse du titre.",
        "Permettre un réexamen en cas de manquement grave et persistant aux exigences d'intégration applicables lorsque le statut était expressément subordonné à l'intégration.",
        "Admettre qu'une absence prolongée mette fin au statut de séjour ; la loi ordinaire d'application devrait fixer le seuil par type de titre, dans une fourchette d'environ deux à cinq ans.",
        "Notifier les motifs et ménager une possibilité individuelle de contester la décision.",
      ],
      implementationNote:
        "Le droit de l'Union en vigueur protège davantage les résidents de longue durée. La directive actuelle relative aux résidents de longue durée admet la perte du statut après des absences déterminées et ne permet l'expulsion qu'en cas de menace réelle et suffisamment grave pour l'ordre public ou la sécurité ; des considérations économiques ne sauraient à elles seules justifier l'expulsion. La politique proposée par le mouvement exigerait donc des modifications là où elle est plus large que les règles actuelles de l'Union.",
      keywords: [
        "titre de séjour",
        "retrait",
        "fraude",
        "criminalité grave",
        "intégration",
        "absence",
        "sécurité publique",
      ],
    },

    "voluntary-return-and-reintegration": {
      title: "Retour volontaire et réintégration",
      shortAnswer:
        "L'État peut financer une aide au retour modeste et versée une seule fois lorsqu'un non-citoyen retourne volontairement et durablement dans le pays dont il a la nationalité ou dans un autre pays habilité à l'admettre.",
      position: [
        "Le retour volontaire est préférable à un éloignement coercitif coûteux lorsqu'il atteint la même fin légale avec promptitude et fiabilité.",
      ],
      policies: [
        "Prendre en charge des frais de voyage raisonnables au titre d'un programme agréé de retour volontaire.",
        "Admettre une aide limitée et unique à la réinstallation ou à la réintégration lorsqu'elle accroît sensiblement la probabilité d'un retour durable.",
        "Subordonner l'aide au départ effectif et au respect de l'arrangement de retour convenu.",
        "Ne pas créer de droit à des aides au retour répétées.",
        "Lorsqu'une interdiction de retour s'applique, le départ volontaire ne l'efface pas automatiquement, sauf disposition légale expresse contraire.",
        "Se coordonner, lorsque cela est nécessaire, avec les autorités du pays de destination ou avec des organisations reconnues pour établir les documents de voyage et l'accueil.",
        "Préférer le départ volontaire à la rétention ou à l'éloignement forcé lorsqu'il n'existe pas de risque sérieux de fuite, de criminalité ou d'atteinte à la sécurité.",
      ],
      implementationNote:
        "La présente notice est un mécanisme de mise en œuvre et non un jugement moral sur la personne qui repart. Elle vise à rendre le retour plus rapide, moins coûteux et plus ordonné là où la coopération est possible.",
      keywords: [
        "retour volontaire",
        "réintégration",
        "aide à la réinstallation",
        "frais de voyage",
        "programme de retour",
      ],
    },

    "naturalized-citizenship-and-exceptionally-serious-crime": {
      title: "Citoyenneté acquise et criminalité exceptionnellement grave",
      shortAnswer:
        "La citoyenneté acquise peut être retirée pour une catégorie étroitement définie de crimes exceptionnellement graves, suivie de l'éloignement lorsque les exigences de nationalité et de retour qui en découlent peuvent être légalement satisfaites.",
      position: [
        "La naturalisation ne place pas tout acte ultérieur hors du droit de la nationalité. L'ordre constitutionnel proposé permet le retrait de la citoyenneté acquise pour certaines conduites exceptionnellement graves postérieures à la naturalisation, tout en laissant la criminalité ordinaire au système de justice pénale.",
      ],
      policies: [
        "Limiter ce pouvoir à une catégorie énumérée de crimes exceptionnellement graves, tels que le meurtre intentionnel, le viol, les abus sexuels aggravés sur enfants, le terrorisme et les infractions graves comparables.",
        "Exiger une condamnation pénale définitive avant tout retrait de citoyenneté fondé sur un crime.",
        "Exiger une procédure de nationalité distincte déterminant si les conditions légales du retrait sont réunies.",
        "Ménager un recours effectif avant que l'éloignement ne soit exécuté.",
        "Lorsque la citoyenneté est retirée et que la personne possède une autre nationalité ou peut légalement la recouvrer, appliquer le cadre ordinaire du retour.",
        "Lorsque la nationalité est contestée, procéder à sa détermination plutôt que de présumer que le seul lieu de naissance oblige un État à accueillir la personne.",
        "Ne pas faire de l'ascendance seule le critère de déclenchement pénal ; la distinction opérante est la citoyenneté acquise jointe à une conduite qualifiée.",
      ],
      implementationNote:
        "La Convention de 1961 sur la réduction des cas d'apatridie interdit en général la privation de nationalité lorsqu'elle rendrait une personne apatride, sous réserve d'exceptions définies, dont la nationalité obtenue par fraude et certains motifs conservés au titre de l'article 8. Un pouvoir plus large exigerait un traitement explicite de ces engagements conventionnels. Détruire un passeport n'efface pas la nationalité ; le passeport est la preuve de la nationalité, non sa source juridique.",
      keywords: [
        "citoyenneté acquise",
        "déchéance",
        "criminalité grave",
        "meurtre",
        "viol",
        "terrorisme",
        "nationalité",
      ],
    },

    "return-readmission-identity-and-removal-procedure": {
      title: "Retour, réadmission, identité et procédure d'éloignement",
      shortAnswer:
        "La politique de retour suit un modèle d'exécution hybride : identification et rétention en vue de l'éloignement lorsque cela est nécessaire, puis statut temporaire restreint si l'éloignement demeure provisoirement impossible, avec la poursuite des efforts pour établir la nationalité et obtenir la réadmission.",
      position: [
        "Une décision de retour définitive doit pouvoir être exécutée en pratique. L'État devrait donc maintenir des mécanismes de vérification d'identité, de rétention, de présentation et de réadmission, plutôt que de laisser la destruction de documents ou le défaut de coopération produire automatiquement un séjour permanent.",
      ],
      policies: [
        "Engager immédiatement la vérification de l'identité et de la nationalité lorsqu'une personne éloignable ne dispose pas de documents fiables.",
        "Recourir aux passeports, aux documents expirés, aux registres d'état civil, aux empreintes digitales ou à d'autres données biométriques là où la loi le permet, aux documents de famille, aux vérifications consulaires, aux indices linguistiques et biographiques ainsi qu'aux accords de réadmission pour établir l'identité et la nationalité.",
        "Traiter la destruction ou la dissimulation délibérée de documents comme une circonstance aggravante dans l'exécution, tout en reconnaissant que détruire un passeport ne met pas fin à la nationalité.",
        "Admettre la rétention administrative lorsqu'elle est nécessaire à l'identification, à la prévention de la fuite ou à un éloignement imminent, sous réserve de limites légales définies et d'efforts continus en vue de l'éloignement.",
        "Si l'éloignement ne peut être exécuté dans la durée maximale légale de rétention, faire passer la personne à un statut temporaire restreint plutôt qu'au séjour permanent ordinaire.",
        "Le statut restreint peut comporter des obligations de présentation, des restrictions de résidence, la coopération continue aux procédures d'identification et une aide publique limitée.",
        "Ne pas laisser le seul écoulement du temps passé sous statut restreint aboutir automatiquement à la citoyenneté ou au séjour permanent.",
        "Reprendre l'éloignement dès que la nationalité, les documents de voyage et une réadmission légale deviennent disponibles.",
        "Recourir aux accords de réadmission et à la pression diplomatique pour obliger les pays à accepter les personnes dont la nationalité est établie au regard de leur propre droit.",
        "Permettre aux membres d'une famille de partir ensemble lorsque les parents sont éloignés et que les enfants ont le droit de les accompagner ; les questions autonomes de nationalité, de garde et de protection de l'enfance appellent une décision individuelle.",
        "Appliquer les nouvelles règles constitutionnelles en matière d'immigration aux statuts existants lorsque la loi prévoit expressément un réexamen rétroactif, sous réserve des procédures de réexamen énoncées ailleurs dans cet ensemble.",
      ],
      implementationNote:
        "Le droit du retour de l'Union limite actuellement la rétention à la période appropriée la plus brève tant que les dispositions d'éloignement sont activement poursuivies, et comporte des durées maximales et des garanties spécifiques. Le modèle hybride proposé reprend la séquence générale d'une rétention suivie d'un statut restreint lorsque l'éloignement immédiat est impossible, la durée exacte dépendant de l'ordre juridique finalement retenu. Le lieu de naissance est un indice utile, mais il n'établit pas à lui seul la nationalité ni une obligation inconditionnelle pour un pays de réadmettre une personne. La réadmission dépend du droit de la nationalité, des preuves et des accords applicables. Est véritablement apatride celui qu'aucun État ne considère comme son ressortissant par application de sa législation. Le système proposé exige donc une détermination de la nationalité, plutôt que de supposer que l'apatridie peut toujours être supprimée en rattachant la personne à son pays de naissance.",
      keywords: [
        "procédure de retour",
        "réadmission",
        "rétention",
        "identité",
        "nationalité",
        "statut restreint",
        "apatridie",
        "unité familiale",
        "rétroactivité",
      ],
    },

    "europe-as-a-civilization-of-nations": {
      title: "L'Europe, civilisation de nations",
      shortAnswer:
        "L'Europe doit être une communauté de civilisation formée de nations souveraines, non un État centralisé post-national.",
      position: [
        "L'Europe doit être une communauté de civilisation formée de nations souveraines, non un État centralisé post-national.",
      ],
      policies: [
        "Coopération européenne en matière de défense, de frontières, d'infrastructures stratégiques, de science, de protection de l'environnement et de sauvegarde de la civilisation.",
        "Autonomie politique nationale et identité historique conservées.",
        "La subsidiarité gouverne la répartition des compétences.",
      ],
      keywords: ["Europe", "souveraineté", "confédération", "subsidiarité", "post-national"],
    },

    "european-union-institutional-relationship": {
      title: "Union européenne : relation institutionnelle",
      shortAnswer:
        "Restore Europa soutient une réforme fondamentale de l'Union européenne en un cadre limité de coopération entre nations européennes souveraines, la plupart des pouvoirs politiques étant restitués aux États membres.",
      position: [
        "La coopération européenne doit se poursuivre, mais les institutions continentales ne doivent détenir que les compétences qui exigent véritablement une action à l'échelon européen. Restore Europa récuse toute évolution vers un État centralisé post-national et applique strictement la subsidiarité.",
      ],
      policies: [
        "Restituer aux États membres des compétences législatives et réglementaires substantielles.",
        "Maintenir principalement nationales la politique familiale, l'éducation, la culture, la religion, le droit pénal ordinaire et la plus grande part de la politique sociale interne.",
        "Conserver la coopération européenne là où l'échelle la rend véritablement utile, notamment pour certaines infrastructures transfrontalières, la coopération scientifique, le commerce, la coordination des frontières et la sécurité stratégique.",
        "Empêcher les institutions de l'Union d'imposer un programme moral ou culturel uniforme aux nations membres.",
        "Préserver la souveraineté nationale, l'identité constitutionnelle et la continuité historique.",
        "Rechercher un cadre civilisationnel européen qui reconnaisse l'héritage chrétien de l'Europe tout en préservant l'autonomie politique nationale.",
      ],
      implementationNote:
        "L'article 5 du traité sur l'Union européenne reconnaît déjà l'attribution, la subsidiarité et la proportionnalité. Cette politique exigerait une application matériellement plus stricte de ces principes, ainsi qu'une réforme conventionnelle et institutionnelle substantielle.",
      keywords: [
        "Union européenne",
        "UE",
        "souveraineté",
        "subsidiarité",
        "Commission européenne",
        "réforme des traités",
        "Europe chrétienne",
        "Bruxelles",
        "compétences",
      ],
    },

    "economic-order": {
      title: "Ordre économique",
      shortAnswer:
        "Restore Europa refuse aussi bien le capitalisme sans frein que le socialisme centralisé. Son idéal économique est distributiste quant à la propriété et corporatiste quant à l'organisation.",
      position: [
        "Restore Europa refuse aussi bien le capitalisme sans frein que le socialisme centralisé. Son idéal économique est distributiste quant à la propriété et corporatiste quant à l'organisation.",
      ],
      keywords: ["économie", "distributisme", "corporatisme", "capitalisme", "socialisme"],
    },

    "private-property-and-broad-ownership": {
      title: "Propriété privée et propriété largement répartie",
      shortAnswer:
        "La propriété est une source d'indépendance et de responsabilité. La réponse à la concentration est une propriété plus largement répartie, non l'abolition de la propriété.",
      position: [
        "La propriété privée est une source d'indépendance et de responsabilité. La réponse à une concentration excessive est une propriété plus largement répartie plutôt que l'abolition de la propriété.",
      ],
      policies: [
        "Une accession à la propriété du logement largement répandue.",
        "Des entreprises familiales.",
        "Des artisans et des métiers indépendants.",
        "Des petites et moyennes entreprises.",
        "Des coopératives et l'actionnariat salarié.",
        "Une agriculture familiale.",
        "Une banque locale et régionale.",
      ],
      principle: "Beaucoup de propriétaires plutôt que quelques-uns.",
      keywords: [
        "propriété",
        "possession",
        "distributisme",
        "coopératives",
        "petits propriétaires",
      ],
    },

    "corporations-and-monopolies": {
      title: "Sociétés commerciales et monopoles",
      shortAnswer:
        "Les sociétés commerciales sont des instruments légitimes mais demeurent subordonnées au bien commun, et la puissance économique concentrée peut être contenue.",
      position: [
        "Les sociétés commerciales sont des instruments légitimes mais doivent demeurer subordonnées au bien commun. Une puissance économique concentrée excessive peut être contenue.",
      ],
      policies: [
        "Une politique de concurrence et de lutte contre les monopoles vigoureuse.",
        "Une mise sous contrainte là où des entreprises dominent les institutions politiques ou des marchés essentiels.",
        "La protection des communautés viables, de la vie de famille et de l'indépendance politique contre une concentration destructrice.",
      ],
      keywords: [
        "sociétés commerciales",
        "monopole",
        "droit de la concurrence",
        "concurrence",
        "concentration",
      ],
    },

    "guilds-chambers-and-corporatist-representation": {
      title: "Corps de métier, chambres et représentation corporatiste",
      shortAnswer:
        "Les salariés, les employeurs, les artisans, les agriculteurs et les professions doivent prendre part à des institutions de branche fixant les règles, l'apprentissage et les conditions de travail.",
      position: [
        "Les salariés, les employeurs, les artisans, les agriculteurs et les professions doivent prendre part à des institutions de branche capables de fixer les règles de la profession, l'apprentissage, les conditions de travail et les mécanismes de médiation.",
      ],
      policies: [
        "Les chambres professionnelles et les corporations de métier doivent demeurer suffisamment indépendantes de l'administration centrale.",
        "Les organisations professionnelles peuvent disposer d'une représentation structurée dans la vie publique.",
        "Le corporatisme demeure subordonné à la subsidiarité.",
      ],
      keywords: [
        "corps de métier",
        "chambres de métiers",
        "corporatisme",
        "apprentissage",
        "artisanat",
      ],
    },

    "finance-lending-and-usury": {
      title: "Finance, crédit et usure",
      shortAnswer:
        "La finance doit servir l'activité productive. Le prêt légitime et un rendement raisonnable sont admis ; l'intérêt abusif et les pièges de l'endettement ne le sont pas.",
      position: [
        "La finance doit servir l'activité productive. Restore Europa admet le prêt légitime et un rendement raisonnable du capital, tout en s'opposant à l'intérêt abusif, au crédit prédateur et aux pièges de l'endettement.",
      ],
      policies: [
        "Restrictions strictes ou plafonnement du crédit prédateur de type crédit sur salaire.",
        "Information transparente sur le coût total du crédit.",
        "Restrictions des pénalités de retard abusives et des intérêts composés punitifs.",
        "Les tribunaux peuvent annuler des clauses de prêt manifestement léonines.",
        "L'action publique doit favoriser le crédit productif destiné au logement, aux entreprises familiales et à l'investissement de long terme.",
        "La banque locale et régionale encouragée.",
      ],
      keywords: ["finance", "usure", "intérêt", "crédit", "dette", "banques"],
    },

    "housing-and-financialization": {
      title: "Logement et financiarisation",
      shortAnswer:
        "Le logement doit servir principalement à habiter et à faire communauté plutôt que fonctionner comme un actif financier indéfiniment valorisé.",
      position: [
        "Le logement doit servir principalement à habiter et à faire communauté plutôt que fonctionner d'abord comme un actif financier indéfiniment valorisé.",
      ],
      policies: [
        "L'accession à la propriété du logement largement répandue est un objectif central.",
        "La propriété spéculative et concentrée peut être contenue là où elle empêche la propriété familiale ordinaire.",
      ],
      keywords: ["logement", "accession à la propriété", "loyer", "spéculation", "bailleurs"],
    },

    work: {
      title: "Travail",
      shortAnswer:
        "Le travail possède une dignité, mais il n'est pas la finalité de l'existence humaine. Le progrès économique doit accroître la sécurité, le loisir et la maîtrise de sa propre vie.",
      position: [
        "Le travail possède une dignité, mais il n'est pas la finalité de l'existence humaine. Le progrès économique doit accroître la sécurité, le loisir, le temps passé en famille, le travail qui a du sens et la maîtrise de sa propre vie.",
      ],
      policies: [
        "Un rang social retrouvé pour l'artisanat, l'agriculture, l'ingénierie, les métiers du soin, l'enseignement et les métiers qualifiés.",
        "Les gains de productivité ne doivent pas se borner à accroître l'extraction de travail.",
        "L'automatisation ne doit pas supprimer la participation humaine qui a du sens au seul motif de l'efficacité chiffrée.",
      ],
      keywords: ["travail", "emploi", "salariat", "artisanat", "loisir"],
    },

    "minimum-wage": {
      title: "Salaire minimum et juste salaire",
      shortAnswer:
        "Tout travailleur a droit à un juste salaire suffisant pour une vie digne et pour l'entretien raisonnable d'une famille.",
      position: [
        "La doctrine sociale de l'Église fixe une exigence substantielle de juste salaire plutôt qu'un mécanisme légal universel unique. Restore Europa est donc favorable à une fixation des salaires par branche et par région au moyen d'institutions représentatives, appuyée si nécessaire par une protection légale.",
      ],
      policies: [
        "Établir le principe d'un juste salaire protégé par la loi.",
        "Déterminer normalement les planchers salariaux à l'échelon sectoriel ou régional approprié, par les salariés, les employeurs et les organismes professionnels.",
        "Permettre aux corps de métier, aux chambres et aux institutions collectives de négocier des normes adaptées à la productivité, aux qualifications et aux conditions de la branche.",
        "Admettre une protection minimale légale là où les institutions de négociation ne parviennent pas à garantir un juste salaire.",
        "Prendre en compte les besoins de la famille plutôt que de traiter la subsistance individuelle comme seule norme.",
        "Recourir, lorsque cela est approprié, aux allocations familiales ou aux prestations pour enfant, afin que l'éducation des enfants n'entraîne pas de pénalité économique déraisonnable.",
        "Tenir compte de la viabilité de l'entreprise, de la productivité et des possibilités d'emploi.",
      ],
      implementationNote:
        "Le Catéchisme décrit le juste salaire comme le fruit légitime du travail et précise qu'une rémunération équitable doit tenir compte des besoins, des contributions, de la productivité, de la situation de l'entreprise et du bien commun. Laborem exercens relie explicitement la juste rémunération à la possibilité de fonder et d'entretenir une famille.",
      keywords: [
        "salaire minimum",
        "juste salaire",
        "salaire vital",
        "salaire familial",
        "travailleurs",
        "corps de métier",
        "négociation collective",
        "rémunération",
        "plancher salarial",
      ],
    },

    taxation: {
      title: "Fiscalité",
      shortAnswer:
        "L'impôt est légitime au service du bien commun, mais il doit être équitable, attentif à la famille, non confiscatoire et compatible avec une propriété largement répartie, le travail productif et la subsidiarité.",
      position: [
        "Le système fiscal doit financer les fonctions publiques légitimes sans devenir un mécanisme d'élimination de la propriété privée, de découragement de la fondation d'une famille ou de centralisation inutile des responsabilités sociales.",
      ],
      policies: [
        "Appliquer les impôts par une loi claire, de manière raisonnable et équitable.",
        "Maintenir la charge globale compatible avec l'indépendance des ménages, l'épargne, l'entreprise productive et une propriété largement répartie.",
        "Reconnaître substantiellement la charge des enfants et éviter de pénaliser le mariage ou l'éducation des enfants.",
        "Préférer le travail productif et l'investissement de long terme à l'extraction spéculative là où la conception de l'impôt peut les distinguer de façon cohérente.",
        "Éviter des charges de conformité disproportionnées pour les petites entreprises, les entreprises familiales, les exploitations agricoles et les artisans.",
        "Lever l'impôt à l'échelon compétent le plus bas lorsque cela est praticable.",
        "User d'une progressivité modérée de l'impôt sur le revenu tout en évitant des taux marginaux punitifs.",
        "Protéger les logements familiaux ordinaires, les exploitations agricoles familiales et les entreprises familiales en activité des mécanismes de droits de succession qui contraignent à une liquidation inutile.",
        "Rester prudent à l'égard des impôts généraux récurrents sur la fortune, qui peuvent frapper un patrimoine illiquide indépendamment du revenu.",
        "Appliquer un traitement réduit de la taxe sur la consommation aux biens de première nécessité lorsque cela est praticable.",
      ],
      limits: [
        "Les taux exacts ne sont pas prescrits et demeurent une question nationale de mise en œuvre.",
      ],
      implementationNote:
        "La doctrine sociale de l'Église range le paiement de l'impôt parmi les exigences de la solidarité, tout en réclamant une application raisonnable et équitable, l'intégrité de la dépense publique et une attention particulière aux familles.",
      keywords: [
        "impôt",
        "fiscalité",
        "impôt sur le revenu",
        "impôt sur les sociétés",
        "TVA",
        "droits de succession",
        "impôt sur la fortune",
        "quotient familial",
        "subsidiarité",
      ],
    },

    pensions: {
      title: "Retraites",
      shortAnswer:
        "Un système de retraite mixte doit combiner une sécurité vieillesse de base, la prévoyance professionnelle, l'épargne personnelle, le patrimoine familial et la responsabilité entre les générations.",
      position: [
        "Les personnes âgées qui ont contribué à la société ne doivent pas connaître le dénuement, mais la préparation de la retraite ne doit pas rendre les citoyens entièrement dépendants d'un seul régime d'État centralisé.",
      ],
      policies: [
        "Garantir une pension de base suffisante pour protéger les citoyens âgés de la pauvreté.",
        "Encourager les fonds de retraite professionnels et sectoriels organisés par les employeurs, les corps de métier, les chambres professionnelles et d'autres institutions intermédiaires.",
        "Encourager l'épargne-retraite privée et la détention d'un patrimoine de long terme par les ménages.",
        "Valider les périodes consacrées à l'éducation des enfants ou à une aide familiale substantielle dans le calcul des droits à la pension publique.",
        "Éviter des règles de retraite qui pénalisent structurellement le mariage, la parentalité ou l'aide familiale.",
        "Maintenir la soutenabilité budgétaire afin qu'une génération n'impose pas à la suivante des obligations impossibles à honorer.",
        "Permettre une variation nationale de l'équilibre entre prévoyance publique, professionnelle et privée.",
      ],
      implementationNote:
        "Le modèle applique la solidarité et la subsidiarité : un socle public là où les institutions inférieures ne peuvent assurer une sécurité suffisante, combiné à des institutions professionnelles, à l'épargne des ménages et à la propriété privée.",
      keywords: [
        "retraites",
        "pension",
        "vieillesse",
        "sécurité sociale",
        "fonds de pension",
        "famille",
        "épargne",
        "propriété",
      ],
    },

    "housing-restrictions": {
      title: "Encadrement détaillé du logement",
      shortAnswer:
        "Le logement doit servir principalement à habiter et à faire communauté, l'action publique visant une propriété familiale largement répandue plutôt qu'une extraction financière permanente.",
      position: [
        "La propriété privée est protégée, tandis que des restrictions proportionnées peuvent viser les pratiques qui font d'un logement rare un instrument de rareté artificielle, de monopole ou d'accumulation spéculative.",
      ],
      policies: [
        "Faire de l'accession largement répandue à la propriété occupée un objectif central de la politique du logement.",
        "Développer l'offre là où cela est compatible avec les infrastructures, le caractère des lieux et l'intendance de l'environnement.",
        "Réduire les obstacles d'urbanisme inutiles au logement familial approprié, tout en préservant les bourgs historiques et les paysages.",
        "Apporter un soutien raisonnable aux primo-accédants et aux familles.",
        "Décourager les montages hypothécaires prédateurs et encourager un financement de long terme prévisible.",
        "Permettre une réglementation plus stricte des acquisitions résidentielles en bloc par des investisseurs institutionnels dominants là où elles évincent matériellement les acquéreurs ordinaires.",
        "Permettre une imposition ou une réglementation supplémentaire des biens d'investissement durablement vacants là où la pénurie est grave.",
        "Protéger les logements familiaux, les fermes familiales et le patrimoine ordinaire reçu en héritage contre la liquidation forcée.",
        "Soutenir les coopératives et les modèles de propriété enracinés localement là où ils élargissent une propriété qui a du sens.",
        "Préférer des protections proportionnées des locataires aux systèmes d'encadrement des loyers qui rendent la construction neuve économiquement impossible.",
      ],
      implementationNote:
        "Le manifeste énonce déjà que le logement doit servir à habiter et à faire communauté plutôt que fonctionner principalement comme un actif financier en voie de valorisation. Les restrictions détaillées doivent être calibrées à l'échelon national et local.",
      keywords: [
        "logement",
        "accession à la propriété",
        "loyer",
        "foncier",
        "propriété",
        "financiarisation",
        "crédit immobilier",
        "investisseurs institutionnels",
      ],
    },

    "trade-unions-and-vocational-representation": {
      title: "Syndicats, corps de métier et représentation professionnelle",
      shortAnswer:
        "Les travailleurs peuvent s'organiser librement, tandis que les relations de travail doivent évoluer vers un système corporatiste d'institutions de branche permanentes représentant les salariés, les employeurs et les professions.",
      position: [
        "Restore Europa refuse aussi bien l'impuissance des travailleurs devant le capital concentré que le conflit de classes permanent comme principe d'organisation de la vie économique.",
      ],
      policies: [
        "Protéger le droit de fonder des syndicats indépendants et d'y adhérer.",
        "Protéger la négociation collective licite sur les salaires et les conditions de travail.",
        "Instituer des chambres de branche ou des corporations de métier représentant les salariés, les employeurs, les artisans et les professions.",
        "Permettre à ces organismes de négocier des planchers salariaux, l'apprentissage, les normes professionnelles et les mécanismes de règlement des différends.",
        "Encourager la médiation et le règlement négocié avant tout conflit social prolongé.",
        "Préserver un droit de grève proportionné tout en protégeant les services véritablement essentiels par des exigences de continuité.",
        "Empêcher les syndicats de devenir des organes obligatoires de l'État.",
        "Empêcher les employeurs de contrôler des organisations de travailleurs prétendument indépendantes.",
        "Permettre une représentation véritablement plurielle plutôt qu'un syndicat unique contrôlé par l'État.",
      ],
      implementationNote:
        "Le manifeste soutient expressément les corporations modernes, les chambres professionnelles et les corps de métier, tout en refusant que les organismes professionnels soient les instruments d'un État tout-puissant. L'enseignement catholique reconnaît également l'organisation syndicale et une action de grève proportionnée.",
      keywords: [
        "syndicats",
        "corps de métier",
        "corporatisme",
        "négociation collective",
        "grèves",
        "chambres de métiers",
        "conditions de travail",
      ],
    },
    "technology-general-doctrine": {
      title: "La technique : doctrine générale",
      shortAnswer:
        "Le développement technique n'est pas synonyme de progrès humain, et doit être jugé à ses effets sur l'autonomie, la famille, la communauté et le travail.",
      position: [
        "Le développement technique n'est pas synonyme de progrès humain. La technique doit être jugée à ce qu'elle renforce ou affaiblit : l'autonomie, la vie de famille, la communauté, le travail qui a du sens, la vie privée, la décentralisation et le milieu naturel.",
      ],
      principle: "La machine doit s'adapter à l'homme.",
      keywords: ["technique", "progrès", "échelle humaine", "innovation"],
    },

    "artificial-intelligence": {
      title: "Intelligence artificielle",
      shortAnswer:
        "L'intelligence artificielle peut être utilisée comme un outil, mais elle ne doit pas se substituer au jugement humain au seul motif que l'automatisation est techniquement possible ou économiquement efficace.",
      position: [
        "L'intelligence artificielle peut être utilisée comme un outil, mais elle ne doit pas se substituer au jugement humain simplement parce que l'automatisation est techniquement possible ou économiquement efficace.",
      ],
      policies: [
        "L'intelligence artificielle doit être évaluée à ses effets sur la compétence humaine, l'emploi, l'autonomie et le pouvoir des institutions.",
        "Des décideurs humains doivent rester disponibles pour les questions ayant des conséquences juridiques ou morales graves.",
        "De ce qu'une capacité existe, il ne suit aucune obligation de la mettre en œuvre.",
      ],
      keywords: [
        "intelligence artificielle",
        "IA",
        "apprentissage automatique",
        "automatisation",
        "algorithmes",
      ],
    },

    automation: {
      title: "Automatisation",
      shortAnswer:
        "L'automatisation peut supprimer un travail véritablement avilissant, mais retirer la participation humaine à l'activité productive n'est pas un bien que l'on cesse d'interroger.",
      position: [
        "L'automatisation peut supprimer un travail véritablement avilissant, mais supprimer la participation humaine à l'activité productive ne doit pas être un objectif que l'on cesse d'interroger.",
      ],
      principle: "La compétence humaine est en elle-même un bien social.",
      keywords: ["automatisation", "robots", "emplois", "perte de savoir-faire", "efficacité"],
    },

    "cash-and-non-digital-access": {
      title: "Argent liquide et accès non numérique",
      shortAnswer:
        "Les citoyens doivent conserver un accès réel à la monnaie physique et à des services publics où l'on peut s'adresser à une personne.",
      position: [
        "Les citoyens doivent conserver un accès réel à la monnaie physique et à des services publics où l'on peut s'adresser à une personne.",
      ],
      policies: [
        "L'argent liquide doit rester disponible.",
        "La participation civique essentielle ne doit pas exiger un téléphone intelligent.",
        "Des moyens d'identification non numériques doivent rester disponibles là où cela est praticable.",
        "Les services publics doivent conserver des solutions accessibles auprès d'une personne.",
      ],
      keywords: [
        "argent liquide",
        "monnaie",
        "exclusion numérique",
        "services bancaires",
        "accueil physique",
      ],
    },

    "right-to-repair": {
      title: "Droit à la réparation",
      shortAnswer:
        "Les citoyens doivent conserver un accès réel à des produits réparables, contre l'obsolescence inutile et l'enfermement technologique.",
      position: [
        "Les citoyens doivent conserver un accès réel à des produits réparables. Restore Europa est favorable à une politique qui résiste à l'obsolescence inutile et à l'enfermement technologique.",
      ],
      keywords: [
        "droit à la réparation",
        "réparabilité",
        "obsolescence",
        "enfermement propriétaire",
        "pièces détachées",
      ],
    },

    surveillance: {
      title: "Surveillance",
      shortAnswer:
        "Les citoyens doivent conserver des espaces privés réels, soustraits à la surveillance permanente ; les règles détaillées ne sont pas encore arrêtées.",
      position: [
        "Les citoyens doivent conserver des espaces privés réels, soustraits à la surveillance permanente.",
      ],
      limits: [
        "Les règles exactes relatives à la reconnaissance faciale, à la conservation des métadonnées, à la vidéosurveillance et aux pouvoirs des services de renseignement demeurent ouvertes.",
      ],
      keywords: [
        "surveillance",
        "vie privée",
        "reconnaissance faciale",
        "vidéosurveillance",
        "conservation des données",
      ],
    },

    "children-social-media-and-attention-capture": {
      title: "Les enfants et les réseaux sociaux",
      shortAnswer:
        "Les enfants doivent recevoir une protection légale forte contre les systèmes de réseaux sociaux conçus pour maximiser l'attention compulsive et la dépendance psychologique.",
      position: [
        "Les parents demeurent les premiers gardiens de leurs enfants, tandis que l'État peut réglementer les systèmes commerciaux qui exploitent délibérément la vulnérabilité liée au développement de l'enfant.",
      ],
      policies: [
        "Prévoir des réglages par défaut nettement plus protecteurs de la vie privée et de la visibilité des mineurs.",
        "Restreindre les systèmes d'engagement manipulateurs visant à maximiser l'usage compulsif par les enfants.",
        "Restreindre sévèrement la publicité comportementale ciblée dirigée vers les enfants.",
        "Exiger des contrôles parentaux efficaces.",
        "Ne pas exiger des élèves qu'ils entretiennent des comptes commerciaux de réseaux sociaux pour la scolarité ordinaire.",
        "Permettre de limiter les notifications nocturnes et les mécanismes d'engagement visant les mineurs.",
        "Concevoir la vérification de l'âge de manière à réduire au minimum la collecte de données d'identité.",
        "Retenir un cadre général d'accès très restreint avant 13 ans, de fortes protections parentales et propres aux mineurs de 13 à 15 ans, un accès plus large mais encore protégé de 16 à 17 ans, et les règles ordinaires applicables aux adultes à 18 ans.",
      ],
      implementationNote:
        "Le manifeste énonce expressément que les enfants doivent être protégés des industries dont le modèle économique repose sur la maximisation de la dépendance psychologique. Le mécanisme exact de vérification de l'âge demeure une question de mise en œuvre.",
      keywords: [
        "réseaux sociaux",
        "enfants",
        "mineurs",
        "captation de l'attention",
        "addiction",
        "contrôle parental",
        "vérification de l'âge",
        "téléphones intelligents",
      ],
    },

    "digital-identification": {
      title: "Identification numérique",
      shortAnswer:
        "L'identification numérique peut exister comme commodité facultative, mais la participation civique ordinaire ne doit pas exiger une identité obligatoirement et exclusivement numérique.",
      position: [
        "Les citoyens doivent conserver un accès non numérique réel et ne doivent pas être contraints d'entrer dans une architecture d'identité universelle capable d'une surveillance comportementale de routine.",
      ],
      policies: [
        "Maintenir l'identification physique disponible partout où cela est raisonnablement praticable.",
        "Ne pas refuser les services publics essentiels au seul motif qu'une personne refuse un téléphone intelligent ou une application d'identité numérique.",
        "Ne collecter que les données nécessaires à la finalité administrative déclarée.",
        "Séparer les systèmes d'identité des systèmes généraux de surveillance comportementale.",
        "Exiger une base légale claire et une traçabilité pour l'accès aux données d'identité.",
        "Interdire les systèmes de crédit social et la notation comportementale politique ou religieuse.",
        "Éviter de relier automatiquement les données médicales, financières, scolaires, de déplacement et de communication en un profil d'État universel.",
      ],
      implementationNote:
        "Le manifeste protège explicitement l'identification non numérique là où elle est praticable et refuse une dépendance technologique sans limite.",
      keywords: [
        "identité numérique",
        "identité électronique",
        "vie privée",
        "surveillance",
        "crédit social",
        "accès non numérique",
        "identité",
      ],
    },

    "central-bank-digital-currencies": {
      title: "Monnaies numériques de banque centrale",
      shortAnswer:
        "Une monnaie numérique de banque centrale ne doit ni remplacer l'argent liquide ni devenir un système obligatoire et programmable de surveillance des transactions.",
      position: [
        "Une monnaie numérique de banque centrale peut être tolérée comme instrument de paiement facultatif, à la seule condition de garanties strictes de confidentialité et de décentralisation.",
      ],
      policies: [
        "Ne pas abolir l'argent liquide au profit d'une monnaie numérique de banque centrale obligatoire.",
        "Ne pas exiger que les salaires, les prestations ou les transactions ordinaires passent exclusivement par l'infrastructure d'une monnaie numérique de banque centrale.",
        "Ne pas permettre une surveillance gouvernementale de routine de chaque transaction licite.",
        "Interdire les restrictions politiques programmables sur des achats par ailleurs licites.",
        "Interdire l'expiration artificielle de l'argent des citoyens.",
        "Interdire l'usage des monnaies numériques de banque centrale à des fins de crédit social.",
        "Préserver des transactions privées réelles dans le cadre de règles proportionnées de lutte contre la criminalité.",
      ],
      implementationNote:
        "Le manifeste ne nomme pas les monnaies numériques de banque centrale, mais il garantit explicitement un accès réel à la monnaie physique et refuse une dépendance technologique et une surveillance inutiles.",
      keywords: [
        "MNBC",
        "euro numérique",
        "argent liquide",
        "monnaie programmable",
        "confidentialité financière",
        "monnaie numérique",
      ],
    },

    cryptocurrency: {
      title: "Cryptomonnaies",
      shortAnswer:
        "La détention et le transfert licites de cryptomonnaies doivent demeurer permis, tandis que la fraude, le vol et la conservation centralisée abusive restent réglementés.",
      position: [
        "La cryptomonnaie n'est en soi ni libératrice ni illégitime. Elle doit être jugée selon qu'elle sert des fins économiques légitimes sans produire de fraude, de spéculation prédatrice ou de dépendance inutile.",
      ],
      policies: [
        "Permettre la détention et le transfert licites de cryptomonnaies.",
        "Appliquer le droit pénal ordinaire à la fraude, au vol, à la manipulation de marché et à la promotion trompeuse.",
        "Réglementer de façon proportionnée les plateformes d'échange détenant les avoirs de leurs clients, à des fins de solvabilité, de conservation et de lutte contre la fraude.",
        "Distinguer les protocoles décentralisés des entreprises centralisées de conservation.",
        "Ne pas interdire les cryptomonnaies privées dans le seul but de protéger le monopole d'une future monnaie numérique de banque centrale.",
        "Appliquer un traitement fiscal clair et administrativement raisonnable.",
        "Ne pas interdire les techniques protectrices de la vie privée au seul motif que la confidentialité est techniquement possible.",
      ],
      implementationNote:
        "La cryptomonnaie n'est pas traitée spécifiquement dans le manifeste. Cette position découle de la propriété privée, de l'opposition à la domination financière concentrée et de la subordination de la technique, plutôt que d'une interdiction technologique.",
      keywords: [
        "cryptomonnaie",
        "Bitcoin",
        "actifs numériques",
        "chaîne de blocs",
        "décentralisation",
        "confidentialité financière",
      ],
    },

    "facial-recognition": {
      title: "Reconnaissance faciale",
      shortAnswer:
        "La surveillance permanente ou indiscriminée de la population générale par reconnaissance faciale doit être interdite.",
      position: [
        "La reconnaissance faciale peut avoir des usages légitimes étroits pour les enquêtes pénales graves, mais l'espace public ne doit pas devenir un environnement biométrique surveillé en permanence.",
      ],
      policies: [
        "Interdire le suivi facial universel en temps réel des citoyens dans la vie publique ordinaire.",
        "Interdire le fichage biométrique permanent de toute personne entrant dans les rues, les commerces, les églises, les manifestations ou les transports publics.",
        "Permettre un usage ciblé pour les enquêtes pénales graves, sous réserve d'une autorisation légale, de la nécessité, de la proportionnalité et de limites de durée.",
        "Exiger des normes légales pour les listes de surveillance biométrique et la correction des identifications erronées.",
        "Ne pas ficher biométriquement de manière habituelle les rassemblements politiques ou religieux.",
        "Empêcher les entreprises privées de constituer des profils biométriques permanents sans une base légale solide.",
      ],
      implementationNote:
        "Le manifeste ne nomme pas la reconnaissance faciale, mais il protège expressément des espaces privés réels soustraits à la surveillance permanente.",
      keywords: [
        "reconnaissance faciale",
        "biométrie",
        "vidéosurveillance",
        "surveillance",
        "vie privée",
        "espace public",
      ],
    },

    "communications-metadata-retention": {
      title: "Conservation des métadonnées de communication",
      shortAnswer:
        "La conservation permanente et indiscriminée des métadonnées de communication de toute la population doit être refusée.",
      position: [
        "L'État peut obtenir des données de communication pour des enquêtes légitimes, mais les citoyens ordinaires ne doivent pas être traités comme des suspects permanents.",
      ],
      policies: [
        "Refuser la conservation généralisée et indéfinie des métadonnées de communication de tous.",
        "Permettre la conservation et l'accès ciblés pour les enquêtes sur la criminalité grave et les menaces contre la sécurité nationale.",
        "Exiger normalement une autorisation judiciaire ou celle d'une autorité indépendante comparable pour tout accès.",
        "Recourir à des durées de conservation limitées et supprimer les données sans rapport lorsque la conservation légale prend fin.",
        "Ne pas faire de la surveillance de masse l'architecture par défaut des infrastructures de communication.",
        "Maintenir un contrôle rigoureux de l'accès des services répressifs et de renseignement.",
      ],
      implementationNote:
        "La conservation des métadonnées n'est pas nommée directement dans le manifeste. Cette politique découle de son refus explicite de la surveillance permanente et de la centralisation technologique.",
      keywords: [
        "métadonnées",
        "conservation des données",
        "surveillance des communications",
        "vie privée",
        "télécommunications",
        "renseignement",
      ],
    },

    "genetic-engineering": {
      title: "Génie génétique",
      shortAnswer:
        "La médecine génétique thérapeutique peut être légitime, tandis que l'amélioration héréditaire et l'instrumentalisation de la vie humaine embryonnaire se heurtent à une interdiction forte.",
      position: [
        "Restore Europa distingue le traitement de la maladie des projets visant à refaire la nature humaine ou à sélectionner des caractères humains préférés.",
      ],
      policies: [
        "Permettre la thérapie génique somatique légitime orientée vers le traitement de la maladie, sous réserve des normes de sécurité médicale.",
        "Interdire l'expérimentation génétique qui traite les embryons humains comme un simple matériau de recherche jetable, lorsque cela entre en conflit avec la protection de la vie humaine dès la conception.",
        "Maintenir une présomption forte contre l'amélioration germinale héréditaire.",
        "Interdire la création commerciale d'enfants génétiquement sélectionnés ou modifiés sur commande.",
        "Distinguer la thérapie de l'amélioration de l'intelligence, de l'apparence, de la force ou d'autres caractères préférés.",
        "Refuser les programmes eugénistes d'État.",
        "Protéger l'information génétique comme une donnée personnelle hautement sensible.",
      ],
      implementationNote:
        "Le manifeste ne tranche pas le génie génétique dans le détail. La position découle de l'anthropologie catholique, de la protection de la vie dès la conception et du principe selon lequel la capacité technique ne crée pas par elle-même de légitimité morale.",
      keywords: [
        "génie génétique",
        "édition du génome",
        "CRISPR",
        "lignée germinale",
        "embryons",
        "thérapie génique",
        "bébés sur mesure",
        "eugénisme",
      ],
    },

    "transhumanism-and-human-enhancement": {
      title: "Transhumanisme et augmentation de l'homme",
      shortAnswer:
        "La médecine peut guérir et restaurer, mais les êtres humains ne doivent pas être traités comme la matière première d'une optimisation ou d'un remplacement technologiques.",
      position: [
        "La dignité humaine ne dépend ni de l'intelligence, ni de la force, ni de la longévité, ni de la productivité, ni de l'augmentation technologique.",
      ],
      policies: [
        "Permettre les prothèses thérapeutiques, les implants et les technologies d'assistance.",
        "Distinguer la restauration d'une fonction humaine normale des projets idéologiques visant à remplacer l'humanité ordinaire par des successeurs conçus techniquement.",
        "Interdire toute augmentation neurologique, cybernétique ou génétique imposée comme condition d'un emploi ou d'une participation civique.",
        "Ne pas créer de catégories juridiquement privilégiées de personnes technologiquement modifiées.",
        "Soumettre les programmes militaires d'augmentation à un contrôle éthique strict.",
        "Imposer des restrictions rigoureuses aux interfaces cerveau-machine qui compromettent la vie privée mentale ou l'autonomie.",
        "Interdire généralement l'amélioration héréditaire des générations futures.",
      ],
      implementationNote:
        "L'anthropologie du manifeste limite fortement les projets transhumanistes, mais la mise en œuvre détaillée est dérivée plutôt qu'explicite.",
      keywords: [
        "transhumanisme",
        "augmentation de l'homme",
        "cybernétique",
        "interface cerveau-machine",
        "augmentation",
        "dignité humaine",
        "bioéthique",
      ],
    },

    "purpose-of-education": {
      title: "Finalité de l'éducation",
      shortAnswer:
        "L'éducation doit transmettre la civilisation avant de chercher à la transformer, avec une étude sérieuse du christianisme, de l'histoire, de la civilisation classique, des sciences et des arts.",
      position: [
        "L'éducation doit transmettre la civilisation avant de chercher à la transformer. Le christianisme, l'histoire nationale et européenne, la civilisation classique, la philosophie, la littérature, les sciences, les mathématiques, la musique, l'art, l'artisanat et la responsabilité civique doivent tous faire l'objet d'une étude sérieuse.",
      ],
      keywords: [
        "éducation",
        "programmes scolaires",
        "écoles",
        "transmission",
        "humanités classiques",
      ],
    },

    homeschooling: {
      title: "Instruction en famille",
      shortAnswer:
        "L'instruction en famille doit être légale et protégée, parce que les parents sont les premiers éducateurs de leurs enfants.",
      position: [
        "L'instruction en famille doit être légale et protégée, parce que les parents sont les premiers éducateurs de leurs enfants.",
      ],
      policies: [
        "Les parents peuvent instruire leurs enfants en famille.",
        "L'instruction en famille explicitement catholique est permise.",
        "L'État peut exiger des compétences élémentaires en lecture et en écriture, en mathématiques et en connaissances civiques.",
        "Une évaluation périodique peut vérifier que les enfants reçoivent effectivement une instruction.",
        "L'État ne doit pas se servir du contrôle pour imposer une conformité idéologique.",
      ],
      implementationNote:
        "L'instruction à domicile est actuellement interdite ou étroitement restreinte dans plusieurs États européens ; cela exigerait donc une modification législative dans ces ordres juridiques.",
      keywords: ["instruction en famille", "école à la maison", "parents", "programmes scolaires"],
    },

    "private-catholic-and-independent-schools": {
      title: "Écoles privées, catholiques et indépendantes",
      shortAnswer:
        "Un système éducatif pluriel comprenant des écoles catholiques, privées, classiques, professionnelles et monastiques, le financement public pouvant suivre les familles.",
      position: [
        "Restore Europa soutient un système éducatif pluriel comprenant des écoles catholiques, des écoles privées, des écoles classiques, des établissements professionnels, des écoles monastiques et l'instruction en famille.",
      ],
      policies: [
        "Écoles catholiques protégées par la loi.",
        "Les écoles indépendantes peuvent conserver des programmes et un caractère moral propres.",
        "Le financement public peut suivre les familles par des chèques éducation, des crédits d'impôt ou des dispositifs équivalents.",
        "Les écoles catholiques peuvent enseigner la doctrine catholique et organiser la vie scolaire selon l'enseignement moral catholique.",
        "Des normes scolaires élémentaires peuvent être exigées sans imposer de conformité idéologique.",
      ],
      keywords: [
        "écoles privées",
        "écoles catholiques",
        "chèque éducation",
        "libre choix de l'école",
        "écoles indépendantes",
      ],
    },

    "universities-and-academic-freedom": {
      title: "Universités et liberté académique",
      shortAnswer:
        "Les universités doivent conserver une liberté académique véritable tout en cessant de fonctionner comme des institutions de propagation idéologique obligatoire.",
      position: [
        "Les universités doivent conserver une liberté académique véritable tout en cessant de fonctionner comme des institutions de propagation idéologique obligatoire.",
      ],
      policies: [
        "Les théories libérales, marxistes, laïques, catholiques, nationalistes et autres peuvent être étudiées et débattues sur le plan académique.",
        "Les universités publiques ne doivent pas imposer institutionnellement l'idéologie libérale ou progressiste comme une doctrine indiscutable.",
        "Les étudiants ne doivent pas être tenus de professer des positions idéologiques sans rapport avec la compétence académique.",
        "Le recrutement et la promotion ne doivent pas discriminer les travaux catholiques, conservateurs ou traditionalistes licites.",
        "Le christianisme, la civilisation classique, l'histoire européenne, la philosophie et la tradition intellectuelle occidentale doivent recevoir une place institutionnelle sérieuse.",
      ],
      principle:
        "L'éducation doit poursuivre la vérité plutôt que fabriquer une conformité idéologique.",
      keywords: [
        "universités",
        "liberté académique",
        "enseignement supérieur",
        "recherche",
        "idéologie",
      ],
    },

    "state-schools-and-christianity": {
      title: "Écoles publiques et christianisme",
      shortAnswer:
        "Les écoles publiques doivent avoir une orientation civilisationnelle chrétienne plutôt que laïciste.",
      position: [
        "Les écoles publiques doivent avoir une orientation civilisationnelle chrétienne plutôt que laïciste.",
      ],
      policies: [
        "Le christianisme doit être enseigné comme fondateur de la civilisation, de l'histoire, de la philosophie, de la morale, de l'art et de la culture européens.",
        "L'enseignement catholique doit avoir une place reconnue dans l'éducation publique des sociétés à majorité catholique.",
        "Le laïcisme ne doit pas être présenté comme la seule vision du monde intellectuellement légitime.",
        "L'histoire nationale et européenne doit être enseignée comme un héritage, et non comme une simple culpabilité accumulée.",
      ],
      implementationNote:
        "Plusieurs États européens imposent constitutionnellement la neutralité confessionnelle dans l'enseignement public, ce que cette position leur imposerait de réexaminer.",
      keywords: [
        "écoles publiques",
        "enseignement religieux",
        "laïcisme",
        "christianisme",
        "éducation publique",
      ],
    },

    "sex-education-in-schools": {
      title: "Éducation sexuelle à l'école",
      shortAnswer:
        "Les écoles peuvent enseigner la biologie factuelle de la reproduction, mais la formation morale en matière de sexualité revient d'abord aux parents et aux institutions religieuses choisies.",
      position: [
        "Les parents et l'Église doivent être les premières autorités en matière de formation sexuelle et morale. Les écoles peuvent enseigner la biologie factuelle de la reproduction, mais ne doivent pas contourner l'autorité parentale par un enseignement idéologique ou sexuel explicite.",
      ],
      policies: [
        "La biologie peut traiter de l'anatomie, de la reproduction humaine, de la grossesse et de la santé.",
        "L'enseignement moral relatif à la sexualité, à la contraception et aux relations revient d'abord aux parents et aux institutions religieuses choisies.",
        "Les parents doivent être informés des programmes concernés, et peuvent retirer leurs enfants des contenus allant au-delà de l'enseignement biologique élémentaire.",
        "Les écoles ne doivent pas exposer les mineurs à des supports pédagogiques pornographiques ou sexuellement explicites.",
      ],
      keywords: [
        "éducation sexuelle",
        "EVARS",
        "programmes scolaires",
        "droits des parents",
        "consentement",
      ],
    },
    "culture-and-homogenization": {
      title: "La culture contre l'uniformisation",
      shortAnswer:
        "Les langues, les parlers régionaux, les fêtes, la musique, la cuisine et l'artisanat doivent demeurer des éléments vivants de la vie ordinaire plutôt que des pièces de musée.",
      position: [
        "Les langues, les parlers régionaux, les fêtes, la musique, la cuisine, l'artisanat et la mémoire historique doivent demeurer des éléments vivants de la vie européenne ordinaire, et non des pièces de musée ou des produits touristiques.",
      ],
      keywords: ["culture", "parlers régionaux", "fêtes", "tradition", "uniformisation"],
    },

    "architecture-and-historic-preservation": {
      title: "Architecture et protection du patrimoine",
      shortAnswer:
        "L'architecture publique doit respecter l'échelle humaine, les matériaux locaux et la tradition régionale, et le tissu historique doit être préservé partout où cela reste raisonnablement possible.",
      position: [
        "L'architecture publique doit respecter l'échelle humaine, les matériaux locaux, les traditions régionales et le caractère historique des lieux. Les églises, les ensembles urbains, les monuments et les édifices historiques importants doivent être préservés partout où cela reste raisonnablement possible.",
      ],
      keywords: [
        "architecture",
        "protection du patrimoine",
        "patrimoine",
        "bourgs",
        "échelle humaine",
      ],
    },

    "authority-democracy-and-subsidiarity": {
      title: "Autorité, démocratie et subsidiarité",
      shortAnswer:
        "Le pouvoir doit s'exercer à l'échelon compétent le plus bas. Les élections, la représentation et les limites constitutionnelles coexistent avec le refus du libéralisme philosophique.",
      position: [
        "Restore Europa refuse aussi bien l'individualisme anarchique qu'un pouvoir d'État qui absorbe tout. Les élections, la représentation, les limites constitutionnelles et la participation des citoyens peuvent coexister avec le refus du libéralisme philosophique.",
      ],
      policies: [
        "Le pouvoir doit s'exercer à l'échelon compétent le plus bas.",
        "Aux familles de régler les affaires familiales ; aux communes les affaires locales ; aux régions de conserver une autonomie réelle ; aux nations de régler les affaires nationales.",
        "Le gouvernement demeure tenu par la loi, par la subsidiarité et par les contrepoids institutionnels.",
        "Le désaccord politique et l'opposition demeurent légitimes.",
      ],
      keywords: ["subsidiarité", "démocratie", "autorité", "fédéralisme", "libéralisme"],
    },

    "free-speech-and-public-doctrine": {
      title: "Liberté d'expression et doctrine publique",
      shortAnswer:
        "La discussion politique et académique au sens large est protégée ; les propos qui incitent directement à la violence, au terrorisme ou à la commission d'infractions ne le sont pas.",
      position: [
        "Restore Europa soutient une discussion politique et académique large, mais ne tient pas la parole pour illimitée lorsqu'elle incite directement à la violence, au terrorisme ou à la commission d'infractions, ou qu'elle constitue une profanation délibérée du sacré.",
      ],
      policies: [
        "La critique du gouvernement demeure licite.",
        "Le désaccord politique et théologique demeure licite.",
        "Le communisme, le laïcisme et le libéralisme peuvent être discutés et défendus par des individus, quoiqu'ils ne définissent pas l'ordre constitutionnel.",
        "L'incitation directe à la violence ou au terrorisme peut être interdite.",
        "La pornographie demeure interdite au titre d'une position distincte.",
        "Le sacrilège délibéré peut être restreint au titre de la position sur le blasphème.",
      ],
      principle:
        "Un ordre constitutionnel confessionnel n'a pas besoin de devenir un système de police de la pensée.",
      keywords: ["liberté d'expression", "expression", "censure", "incitation", "presse"],
    },

    "prisons-punishment-and-rehabilitation": {
      title: "Prisons, peine et réinsertion",
      shortAnswer:
        "Une peine proportionnée, la protection de la société, la réparation lorsqu'elle est possible et une réinsertion sérieuse visant le repentir et le retour dans la société.",
      position: [
        "La justice pénale doit combiner une peine proportionnée, la protection de la société, la réparation lorsqu'elle est possible et une réinsertion sérieuse visant le repentir et le retour dans la société.",
      ],
      policies: [
        "Des peines proportionnées à la gravité de l'infraction.",
        "Une neutralisation de longue durée pour les délinquants violents et récidivistes dangereux lorsque cela est nécessaire.",
        "Les prisons doivent maintenir la discipline et l'ordre.",
        "Les détenus doivent avoir accès au travail, à l'instruction, à la formation professionnelle, à l'assistance spirituelle et au traitement des addictions.",
        "La peine ne doit être ni délibérément avilissante ni cruelle.",
      ],
      principle: "La justice n'est ni la vengeance ni la permissivité.",
      keywords: ["prisons", "peines", "sanction", "réinsertion", "justice pénale"],
    },

    "criminal-sentencing": {
      title: "Peines pénales",
      shortAnswer:
        "La peine doit être proportionnée à la gravité et à la culpabilité, protéger la société, assurer la réparation lorsqu'elle est possible et rechercher la réinsertion lorsqu'elle est réaliste.",
      position: [
        "Le prononcé de la peine doit distinguer nettement le manquement mineur de la violence grave délibérée. La sanction pénale peut légitimement servir la protection, une rétribution proportionnée, le rétablissement de l'ordre public, la réparation, la dissuasion et la réinsertion.",
      ],
      policies: [
        "Exiger une condamnation au terme d'une procédure régulière et équitable avant toute peine.",
        "Traiter l'intention, la préméditation, la cruauté, l'abus de victimes vulnérables, la criminalité organisée et la récidive d'infractions graves comme des circonstances aggravantes.",
        "Préférer des amendes proportionnées, la réparation, le travail d'intérêt général, la mise à l'épreuve et le traitement pour les infractions mineures ou non violentes qui s'y prêtent.",
        "Recourir à un emprisonnement substantiel pour les violences graves, le vol avec violence, l'enlèvement, la criminalité organisée grave, la traite d'ampleur, la corruption grave, l'escroquerie d'ampleur, les infractions sexuelles graves et la récidive de violences.",
        "Traiter le viol et les abus sexuels graves sur enfants comme des crimes exceptionnellement graves.",
        "Recourir à l'emprisonnement de longue durée ou à perpétuité lorsque cela est approprié dans les cas les plus graves non passibles de la peine capitale.",
        "Ne permettre des mesures de sûreté étroitement encadrées après la peine que lorsqu'un condamné demeure manifestement un grave danger et que les garanties procédurales sont maintenues.",
        "Par souci de précision juridique, sanctionner les comportements sexuels pénalement répréhensibles — abus, exploitation, manœuvres de mise en confiance à des fins sexuelles et images illicites d'abus sur enfants — plutôt qu'un diagnostic psychiatrique ou une attirance en elle-même.",
      ],
      limits: [
        "Les échelles de peines chiffrées exactes relèvent d'une rédaction ultérieure du code pénal, plutôt que d'être inventées sans base probante.",
      ],
      implementationNote:
        "La doctrine pénitentiaire déjà présente dans le catalogue combine une peine proportionnée, la protection de la société, la réparation et la réinsertion.",
      keywords: [
        "peines pénales",
        "sanction",
        "prison",
        "meurtre",
        "viol",
        "abus sexuels sur enfants",
        "réinsertion",
        "réparation",
      ],
    },

    "death-penalty": {
      title: "Peine de mort",
      shortAnswer:
        "Restore Europa admet en principe la légitimité traditionnelle de la peine capitale, réservée à des cas exceptionnels impliquant les crimes les plus graves.",
      position: [
        "Restore Europa admet en principe la légitimité catholique traditionnelle de la peine capitale, mais la réserve à des cas exceptionnels impliquant les crimes les plus graves.",
      ],
      policies: [
        "Potentiellement applicable au meurtre intentionnel aggravé, au meurtre de masse, au terrorisme comportant un homicide délibéré, au génocide et aux infractions d'une gravité comparable.",
        "Seulement après un procès complet et équitable, un niveau de preuve élevé et un droit de recours effectif.",
        "Aucune exécution lorsqu'un doute sérieux subsiste sur la culpabilité.",
        "Aucune exécution de mineurs.",
        "Prononcée seulement par une autorité civile légitime, et jamais employée par simple vengeance.",
      ],
      implementationNote:
        "Il s'agit d'une divergence explicite avec la position abolitionniste contemporaine du Catéchisme catholique, au profit de l'ancienne permission traditionnelle. La peine capitale est en outre prohibée dans l'ensemble du Conseil de l'Europe ; cela exigerait donc de se retirer d'engagements conventionnels existants ou de les modifier.",
      keywords: ["peine de mort", "peine capitale", "exécution", "meurtre", "abolition"],
    },

    "capital-punishment-for-aggravated-sexual-crimes": {
      title: "Peine capitale pour les crimes sexuels aggravés",
      shortAnswer:
        "La peine de mort peut être légalement encourue, sans être obligatoire, pour les formes les plus aggravées de viol et d'abus sexuels sur enfants.",
      position: [
        "Restore Europa range les crimes sexuels exceptionnellement aggravés dans la catégorie des infractions susceptibles d'être passibles de la peine capitale, sous réserve des mêmes garanties procédurales et probatoires d'une rigueur inhabituelle que les autres affaires capitales.",
      ],
      policies: [
        "Les cas potentiellement concernés comprennent le viol aggravé d'une brutalité exceptionnelle, le viol répété ou en série, le viol accompagné d'enlèvement ou de torture, les abus sexuels aggravés sur enfants, les abus systématiques sur plusieurs enfants et l'exploitation sexuelle organisée dans des circonstances exceptionnellement graves.",
        "Un procès pénal complet et équitable est obligatoire.",
        "La peine de mort ne peut être prononcée lorsqu'un doute résiduel sérieux subsiste sur la culpabilité.",
        "Exiger un contrôle d'appel effectif et l'examen de toute preuve nouvelle matériellement disculpatoire avant l'exécution.",
        "Recourir à des preuves corroborantes et médico-légales partout où elles peuvent raisonnablement être obtenues ; une preuve faible ou incertaine ne doit jamais fonder une condamnation à mort.",
        "Conserver la réclusion à perpétuité comme peine disponible même lorsqu'une infraction entre techniquement dans le champ de la peine capitale.",
        "Aucune exécution de mineurs.",
      ],
      implementationNote:
        "Cela étend la position du catalogue sur la peine capitale au-delà des infractions fondées sur l'homicide. Cela demeure une divergence explicite avec la position abolitionniste contemporaine du Catéchisme catholique. La peine capitale est prohibée dans l'ensemble du système actuel du Conseil de l'Europe, notamment par le Protocole n° 13 à la Convention européenne des droits de l'homme pour les États qui y sont liés ; sa mise en œuvre exigerait donc une modification juridique et conventionnelle majeure.",
      keywords: [
        "peine de mort",
        "peine capitale",
        "viol aggravé",
        "abus sexuels sur enfants",
        "violences sexuelles",
        "niveau de preuve",
        "réclusion à perpétuité",
      ],
    },

    "firearms-and-self-defense": {
      title: "Armes à feu et légitime défense",
      shortAnswer:
        "Une détention civile d'armes à feu réglementée pour des usages licites, soumise à autorisation, à formation et à des obligations de stockage sécurisé.",
      position: [
        "Restore Europa soutient une détention civile d'armes à feu réglementée pour des usages licites, notamment la légitime défense, la chasse, le tir sportif et la collection.",
      ],
      policies: [
        "Autorisation obligatoire.",
        "Formation à la sécurité obligatoire.",
        "Obligations de stockage sécurisé.",
        "Examen renforcé pour le port public ou dissimulé.",
        "Les auteurs de violences graves perdent le droit de détenir une arme à feu.",
        "Trafic illégal et détention délictueuse lourdement sanctionnés.",
      ],
      principle:
        "L'État n'a pas besoin de monopoliser tous les moyens de légitime défense, mais la détention d'une arme à feu comporte de graves responsabilités.",
      keywords: ["armes à feu", "armes", "légitime défense", "chasse", "autorisation de détention"],
    },

    "universal-healthcare-access": {
      title: "Accès universel aux soins",
      shortAnswer:
        "Un accès universel aux soins essentiels et médicalement nécessaires, assorti de garde-fous contre le recours excessif et le gaspillage.",
      position: [
        "Restore Europa soutient un accès universel aux soins de santé essentiels et médicalement nécessaires, tout en admettant des garde-fous contre le recours excessif et le gaspillage.",
      ],
      policies: [
        "Soins d'urgence accessibles à tous.",
        "Soins primaires, médicaments essentiels, soins de maternité et traitement des maladies graves accessibles.",
        "De modestes participations financières peuvent s'appliquer aux prestations non essentielles ou de faible priorité.",
        "Les enfants, les ménages à faible revenu, les maladies chroniques graves et les urgences peuvent être exonérés de participation financière.",
        "Les médecins généralistes peuvent jouer un rôle d'orientation avant l'accès aux soins spécialisés lorsque cela est médicalement approprié.",
        "La prévention, la réadaptation et les soins palliatifs doivent être fortement soutenus.",
        "Fraude, actes inutiles et surprescription activement maîtrisés.",
      ],
      principle:
        "Les soins nécessaires ne doivent pas être refusés parce qu'une personne est pauvre, mais les ressources de santé sont limitées et doivent être employées de façon responsable.",
      keywords: ["santé", "universel", "participation financière", "hôpitaux", "médecine"],
    },

    "catholic-medical-ethics": {
      title: "Éthique médicale catholique",
      shortAnswer:
        "Le système public de santé doit respecter l'éthique médicale catholique, et les hôpitaux catholiques doivent être libres de maintenir leurs propres exigences éthiques.",
      position: [
        "Le système public de santé doit respecter l'éthique médicale catholique. Les actes que Restore Europa tient pour moralement inadmissibles au regard de l'enseignement catholique ne doivent pas recevoir de financement public ordinaire, et les hôpitaux catholiques doivent être libres de maintenir leurs exigences éthiques.",
      ],
      keywords: [
        "éthique médicale",
        "clause de conscience",
        "hôpitaux catholiques",
        "bioéthique",
        "financement",
      ],
    },

    "environmental-stewardship": {
      title: "L'intendance de l'environnement",
      shortAnswer:
        "La nature est un héritage confié à l'homme plutôt qu'une marchandise sans limite ou une divinité, et doit être administrée en conséquence.",
      position: [
        "La nature est un héritage confié à l'homme plutôt qu'une marchandise sans limite ou une divinité. Restore Europa soutient l'intendance des forêts, des rivières, des terres agricoles, des montagnes, des littoraux et de la biodiversité.",
      ],
      policies: [
        "Des sols sains et une eau propre.",
        "L'agriculture locale et les chaînes d'approvisionnement régionales.",
        "Une sylviculture responsable.",
        "Des produits durables et la réparation plutôt que le jetable.",
        "La restauration des écosystèmes abîmés.",
        "Des formes d'habitat qui préservent à la fois la communauté et le paysage.",
      ],
      keywords: ["environnement", "intendance", "nature", "biodiversité", "terres agricoles"],
    },

    "energy-policy": {
      title: "Politique énergétique : doctrine générale",
      shortAnswer:
        "La politique énergétique doit être jugée à la fiabilité, à la résilience stratégique, au coût abordable, à l'intendance de l'environnement et au bien-être humain de long terme, plutôt qu'à la fidélité à une technologie.",
      position: [
        "L'énergie est une infrastructure stratégique. Les nations européennes doivent conserver une capacité nationale et diversifiée suffisante pour préserver leur indépendance politique, leur industrie productive et la sécurité des ménages.",
      ],
      policies: [
        "Maintenir des approvisionnements énergétiques nationaux divers et résilients.",
        "Réduire une dépendance dangereuse à l'égard de fournisseurs étrangers stratégiquement peu fiables.",
        "Évaluer les technologies à l'aune de leur impact environnemental sur tout le cycle de vie, de leur fiabilité, de leur coût, de leur emprise foncière et de leur résilience stratégique.",
        "Maintenir une production pilotable suffisante pour la stabilité du réseau.",
        "Investir dans le transport et le stockage d'électricité là où cela est techniquement et économiquement justifié.",
        "Éviter les politiques qui rendent le chauffage, les transports ou l'électricité ordinaires économiquement inaccessibles.",
        "Protéger les paysages et les communautés locales.",
        "Admettre un pluralisme technologique plutôt qu'une source d'énergie unique imposée partout.",
      ],
      implementationNote:
        "Le manifeste établit l'intendance de l'environnement et l'indépendance stratégique, mais ne précise pas de bouquet énergétique détaillé.",
      keywords: [
        "sécurité énergétique",
        "électricité",
        "fiabilité",
        "infrastructure stratégique",
        "coût de l'énergie",
        "intendance",
        "énergie",
      ],
    },

    "nuclear-energy": {
      title: "Énergie nucléaire",
      shortAnswer:
        "Le nucléaire peut être permis et soutenu là où il est sûr, fiable, stratégiquement utile et respectueux de l'environnement.",
      position: [
        "Le manifeste ne comporte aucun principe antinucléaire catégorique. L'énergie nucléaire doit être évaluée de manière pragmatique plutôt qu'idéologique.",
      ],
      policies: [
        "Permettre la construction et la poursuite de l'exploitation des centrales satisfaisant à des normes de sûreté exigeantes.",
        "Exiger une gestion crédible des déchets nucléaires sur le long terme.",
        "Préserver la compétence nationale en ingénierie nucléaire là où elle est viable.",
        "Évaluer les technologies de réacteurs modernes selon leur sûreté et leurs performances économiques démontrées.",
        "Admettre que l'énergie nucléaire fasse partie d'un système diversifié à faibles émissions.",
        "Ne pas imposer le déploiement du nucléaire là où les circonstances locales rendent un autre bouquet plus rationnel.",
      ],
      implementationNote:
        "Il s'agit d'un jugement politique dérivé, et non d'un engagement explicite du manifeste. Il doit demeurer soumis à un examen technique de sûreté, de gestion des déchets et de viabilité économique.",
      keywords: [
        "centrales nucléaires",
        "énergie nucléaire",
        "réacteurs",
        "sécurité énergétique",
        "électricité",
        "déchets nucléaires",
      ],
    },

    "fossil-fuels": {
      title: "Énergies fossiles",
      shortAnswer:
        "Les énergies fossiles ne doivent pas être interdites idéologiquement sans égard à leur fonction stratégique ou économique, mais la pollution inutile et la dépendance évitable doivent être réduites.",
      position: [
        "Le charbon, le pétrole et le gaz doivent être jugés à l'aune de leurs coûts environnementaux, de leur fiabilité, de leur nécessité stratégique et des substituts disponibles.",
      ],
      policies: [
        "Aucune interdiction générale immédiate des énergies fossiles.",
        "Préserver les approvisionnements nécessaires aux transports, à l'industrie, au chauffage et aux réserves stratégiques pendant que les solutions de remplacement se développent.",
        "Réduire les pollutions atmosphériques graves et les pratiques d'extraction destructrices pour l'environnement.",
        "Encourager l'efficacité là où elle réduit à la fois le coût et la consommation de ressources.",
        "Éviter la dépendance à l'égard de fournisseurs étrangers hostiles ou peu fiables.",
        "Sortir des usages particulièrement dommageables lorsqu'il existe des substituts fiables et économiquement réalistes.",
        "Éviter des calendriers de transition qui détruisent des capacités industrielles essentielles ou rendent l'énergie de base inabordable.",
      ],
      implementationNote:
        "Le manifeste exige l'intendance mais ne précise pas de dates de sortie des énergies fossiles.",
      keywords: [
        "énergies fossiles",
        "charbon",
        "pétrole",
        "gaz naturel",
        "sécurité énergétique",
        "pollution",
      ],
    },

    "renewable-energy": {
      title: "Énergies renouvelables",
      shortAnswer:
        "Les énergies renouvelables doivent être soutenues là où elles sont techniquement solides, économiquement raisonnables et compatibles avec les paysages, les communautés et la fiabilité du réseau.",
      position: [
        "L'éolien, le solaire, l'hydraulique, la géothermie et les autres sources sont des outils plutôt que des fins morales, et doivent être évalués selon les conditions locales.",
      ],
      policies: [
        "Permettre et soutenir la production renouvelable là où elle a un sens économique et environnemental.",
        "Protéger les paysages historiques et les zones écologiquement sensibles d'aménagements industriels mal conçus.",
        "Éviter la destruction inutile de terres agricoles productives pour des projets énergétiques peu denses.",
        "Comptabiliser honnêtement les besoins de stockage, de transport et de secours.",
        "Soutenir la propriété locale et communautaire des installations énergétiques là où elle est viable.",
        "Ne pas imposer de déploiement au seul motif d'atteindre des objectifs chiffrés, sans égard à la fiabilité et au coût local.",
      ],
      implementationNote:
        "Cela découle des principes d'intendance et d'échelle humaine du manifeste, sans y être explicitement précisé.",
      keywords: [
        "énergies renouvelables",
        "solaire",
        "éolien",
        "hydroélectricité",
        "géothermie",
        "fiabilité du réseau",
        "paysage",
      ],
    },

    "climate-policy": {
      title: "Politique climatique",
      shortAnswer:
        "L'intendance de l'environnement comprend une atténuation et une adaptation climatiques prudentes, mais la politique climatique ne justifie ni un contrôle centralisé illimité ni des mesures imposant des charges disproportionnées pour un bénéfice négligeable.",
      position: [
        "Les risques climatiques doivent être traités par une politique environnementale pratique, le développement technologique, des infrastructures résilientes et une coopération internationale efficace là où les problèmes traversent véritablement les frontières.",
      ],
      policies: [
        "Soutenir des réductions économiquement rationnelles des émissions de gaz à effet de serre.",
        "Donner la priorité aux mesures dont le bénéfice environnemental est mesurable.",
        "Recourir au nucléaire, aux renouvelables, à l'efficacité et aux autres technologies selon leurs résultats pratiques.",
        "Investir dans l'adaptation et la résilience face aux inondations, à la chaleur, à la sécheresse, aux incendies de forêt et aux autres aléas.",
        "Protéger les forêts, les sols, les systèmes hydrologiques et les écosystèmes qui renforcent la résilience.",
        "Éviter les politiques qui appauvrissent de façon disproportionnée les familles ordinaires tout en produisant un bénéfice environnemental négligeable.",
        "Refuser l'usage de la politique climatique comme justification générale d'une surveillance de masse permanente ou d'un contrôle numérique obligatoire.",
        "Ne fixer d'objectifs d'émissions précis qu'après une analyse technique des données scientifiques, de la faisabilité et des conditions économiques.",
      ],
      limits: [
        "Le manifeste ne précise ni dates de neutralité carbone, ni taux de taxe carbone, ni objectifs de température, ni quotas d'émissions contraignants. Ces questions chiffrées ne sont pas déduites ici.",
      ],
      keywords: [
        "changement climatique",
        "émissions",
        "carbone",
        "adaptation",
        "résilience",
        "environnement",
        "énergie",
        "intendance",
      ],
    },
    "foreign-policy-doctrine": {
      title: "Doctrine de politique étrangère",
      shortAnswer:
        "L'indépendance stratégique plutôt que l'ambition impériale, guidée par la prudence, l'intérêt national légitime et une forte présomption contre la guerre inutile.",
      position: [
        "La politique étrangère européenne doit rechercher l'indépendance stratégique plutôt que l'ambition impériale. Elle doit être guidée par la prudence, l'intérêt national légitime, la défense des innocents là où elle est réellement possible, et une forte présomption contre la guerre inutile.",
      ],
      policies: [
        "L'indépendance stratégique en matière d'alimentation, d'énergie, d'infrastructures, de médecine et d'industries essentielles.",
        "L'opposition aux guerres idéologiques visant à reconstruire des civilisations étrangères sur le patron de modèles politiques abstraits.",
        "Les nations européennes doivent disposer de la capacité de se défendre et de tenir leurs frontières.",
      ],
      keywords: [
        "politique étrangère",
        "défense",
        "indépendance stratégique",
        "guerre",
        "intervention",
      ],
    },

    nato: {
      title: "OTAN",
      shortAnswer:
        "Restore Europa est sceptique à l'égard d'une dépendance permanente envers l'OTAN et est favorable à une plus grande indépendance stratégique nationale et européenne.",
      position: [
        "La coopération défensive peut être utile, mais l'appartenance à l'OTAN et l'alignement sur elle ne doivent pas être tenus pour des exigences indiscutables ou permanentes.",
      ],
      policies: [
        "Bâtir des capacités défensives nationales et européennes crédibles.",
        "Réduire la dépendance stratégique permanente envers les États-Unis.",
        "Conserver la capacité de coopérer avec les États de l'OTAN en matière de renseignement, de technologies de défense, d'exercices et de menaces communes véritables.",
        "Ne pas participer à des guerres dans le seul but de manifester la solidarité de l'alliance.",
        "Conserver un contrôle constitutionnel national sur le déploiement des forces armées.",
        "Refuser les guerres idéologiques destinées à refaire des sociétés étrangères.",
        "Laisser ouverte la réévaluation de l'appartenance de long terme à l'OTAN si l'indépendance stratégique peut être assurée par une structure défensive plus appropriée.",
      ],
      implementationNote:
        "L'article 5 du traité de l'Atlantique Nord traite une attaque armée contre un membre comme une attaque contre tous et oblige chaque allié à porter assistance, tout en laissant à chacun le soin de déterminer l'action qu'il juge nécessaire. Le manifeste soutient l'indépendance stratégique mais n'exige pas par lui-même un retrait de l'OTAN.",
      keywords: [
        "OTAN",
        "article 5",
        "défense collective",
        "indépendance stratégique",
        "défense européenne",
        "alliances militaires",
        "alliance",
      ],
    },

    russia: {
      title: "Russie",
      shortAnswer:
        "Ni alignement permanent sur la Russie, ni hostilité idéologique permanente envers la Russie.",
      position: [
        "La Russie est une puissance étrangère avec laquelle les nations européennes peuvent coopérer là où les intérêts convergent et s'opposer là où les intérêts divergent.",
      ],
      policies: [
        "Juger les relations à l'aune des intérêts européens et nationaux concrets.",
        "Maintenir les canaux diplomatiques partout où c'est possible.",
        "Coopérer dans le commerce, la sécurité ou d'autres domaines là où cela est matériellement avantageux et moralement admissible.",
        "Maintenir l'indépendance stratégique en matière d'énergie, de défense et d'infrastructures critiques.",
        "Ne pas permettre une influence russe excessive sur les institutions politiques ou économiques européennes.",
        "Ne pas entrer en guerre contre la Russie pour un simple prestige idéologique ou géopolitique.",
        "Admettre des réponses proportionnées aux violations graves de la paix ou aux attaques sévères contre des populations innocentes.",
        "Rechercher des règlements négociés lorsque cela est réaliste.",
      ],
      implementationNote:
        "Il s'agit d'une doctrine de non-alignement, et non d'un jugement de fait sur tel ou tel différend actuel.",
      keywords: [
        "Russie",
        "Fédération de Russie",
        "Europe",
        "neutralité",
        "indépendance stratégique",
        "diplomatie",
        "Moscou",
      ],
    },

    ukraine: {
      title: "Ukraine",
      shortAnswer:
        "Restore Europa ne fait de l'alignement politique ni sur l'Ukraine ni sur la Russie un objectif autonome de la politique étrangère européenne.",
      position: [
        "La politique à l'égard de la guerre russo-ukrainienne doit être gouvernée par l'intérêt national légitime, la protection des vies innocentes, le risque d'escalade et une recherche réaliste de la paix, plutôt que par une loyauté idéologique envers l'un ou l'autre camp.",
      ],
      policies: [
        "Maintenir une préoccupation humanitaire pour les civils touchés par la guerre.",
        "Soutenir les efforts sérieux en vue d'une paix négociée et durable lorsque cela est réaliste.",
        "Éviter les engagements militaires sans terme défini en l'absence de justification concrète de sécurité nationale.",
        "Ne pas traiter la reconstruction, le changement de régime ou une confrontation géopolitique permanente comme des obligations européennes automatiques.",
        "Apprécier l'aide militaire au cas par cas, selon l'intérêt national, la proportionnalité, le risque d'escalade et les limites morales de l'usage de la force.",
        "Distinguer l'aide humanitaire aux civils de la participation directe au conflit armé.",
        "Éviter toute hostilité permanente envers le peuple ukrainien comme envers le peuple russe.",
      ],
      implementationNote:
        "Cette position applique la forte présomption du manifeste contre la guerre inutile et sa préférence pour l'indépendance stratégique.",
      keywords: [
        "Ukraine",
        "Russie",
        "guerre",
        "neutralité",
        "négociations de paix",
        "aide militaire",
        "politique étrangère",
        "Kiev",
      ],
    },

    "united-states": {
      title: "États-Unis",
      shortAnswer:
        "Une coopération constructive avec les États-Unis, sans dépendance politique, militaire, technologique ou culturelle.",
      position: [
        "Les États-Unis peuvent être un partenaire important, mais les nations européennes doivent conserver leur autonomie stratégique et culturelle.",
      ],
      policies: [
        "Maintenir des relations diplomatiques et commerciales normales.",
        "Coopérer en matière de défense, de science, de renseignement et de commerce là où les intérêts convergent véritablement.",
        "Réduire la dépendance critique envers la protection militaire et les infrastructures stratégiques américaines.",
        "Réduire la dépendance excessive envers les plateformes technologiques étrangères dominantes.",
        "Protéger les institutions européennes de toute ingérence politique ou économique étrangère.",
        "Maintenir une indépendance culturelle à l'égard de l'uniformisation commerciale importée.",
        "Refuser l'alignement automatique sur les priorités de la politique étrangère américaine.",
      ],
      implementationNote:
        "La politique est celle d'une coopération sans dépendance, et non d'une hostilité ou d'un isolement.",
      keywords: [
        "États-Unis",
        "Amérique",
        "autonomie stratégique",
        "indépendance européenne",
        "technologie",
        "OTAN",
        "atlantisme",
      ],
    },

    china: {
      title: "Chine",
      shortAnswer:
        "Des relations pragmatiques avec la Chine, assorties d'une protection forte contre la dépendance stratégique et la mainmise sur les infrastructures critiques.",
      position: [
        "La Chine ne doit être traitée ni comme un ennemi idéologique ni comme un modèle pour l'Europe.",
      ],
      policies: [
        "Maintenir des relations diplomatiques et un commerce licite.",
        "Diversifier les chaînes d'approvisionnement là où une dépendance excessive crée une vulnérabilité stratégique.",
        "Protéger les infrastructures critiques, les industries de défense et les technologies sensibles d'un contrôle étranger.",
        "Examiner les investissements dans les secteurs stratégiquement sensibles au regard des risques pour la sécurité nationale.",
        "Éviter la dépendance envers la Chine pour les médicaments essentiels, les télécommunications, les technologies de l'énergie ou les chaînes d'approvisionnement à usage militaire.",
        "Résister à l'espionnage, à l'influence politique clandestine et à l'importation de systèmes de type crédit social.",
        "Coopérer en matière scientifique et commerciale lorsque cela est approprié.",
        "Éviter une confrontation militaire inutile là où la sécurité européenne n'est pas directement en cause.",
      ],
      implementationNote:
        "La doctrine est le commerce là où il est utile et l'indépendance là où elle est nécessaire.",
      keywords: [
        "Chine",
        "RPC",
        "commerce",
        "dépendance stratégique",
        "infrastructures critiques",
        "chaînes d'approvisionnement",
        "surveillance",
        "Pékin",
      ],
    },

    "israel-and-palestine": {
      title: "Israël et Palestine",
      shortAnswer:
        "Aucun alignement permanent sur Israël ni sur la Palestine ; la politique doit s'attacher aux vies innocentes, à la stabilité régionale, à une diplomatie conforme au droit et aux intérêts européens concrets.",
      position: [
        "Le conflit ne doit pas devenir un principe d'organisation permanent de la politique étrangère ou intérieure européenne.",
      ],
      policies: [
        "Maintenir des relations diplomatiques selon l'intérêt national ordinaire.",
        "N'accorder de soutien politique inconditionnel à aucune des deux parties.",
        "Condamner les attaques délibérées contre des civils, quel qu'en soit l'auteur.",
        "Ne vendre aucune arme et ne conduire aucune coopération militaro-industrielle avec quelque partie au conflit que ce soit tant qu'il se poursuit.",
        "Autoriser l'aide humanitaire là où elle parvient de façon fiable aux civils véritablement dans le besoin.",
        "Éviter toute implication militaire directe en l'absence d'une menace extraordinaire satisfaisant à des critères stricts de légitime défense.",
        "Soutenir les efforts diplomatiques réalistes susceptibles de réduire la violence.",
        "Ne pas permettre en Europe l'importation d'intimidations sectaires ou de violences politiques.",
      ],
      implementationNote:
        "Il s'agit d'un non-alignement, et non d'une indifférence aux atteintes portées aux civils ou aux obligations humanitaires internationales. La restriction sur les armes s'applique à toute partie sans exception : elle découle de la présomption contre l'alimentation d'un conflit auquel l'Europe n'est pas partie, et n'est pas une mesure dirigée contre un État en particulier.",
      keywords: [
        "Israël",
        "Palestine",
        "Gaza",
        "Proche-Orient",
        "neutralité",
        "aide humanitaire",
        "politique étrangère",
      ],
    },

    "foreign-aid": {
      title: "Aide extérieure",
      shortAnswer:
        "L'aide extérieure doit être limitée, responsable et concentrée sur des besoins humanitaires ou de développement concrets, plutôt que sur une construction nationale idéologique ou une dépendance permanente.",
      position: [
        "Les premières obligations d'un gouvernement vont à sa propre communauté politique, tandis que demeurent de véritables devoirs humanitaires.",
      ],
      policies: [
        "Donner la priorité à l'aide d'urgence après une guerre, une famine, une catastrophe naturelle et les catastrophes humanitaires comparables.",
        "Préférer une aide acheminée près des populations concernées là où cela est efficace.",
        "Exiger la transparence et le contrôle des comptes.",
        "Mettre fin aux programmes largement captés par la corruption ou le clientélisme.",
        "Refuser une aide principalement conçue pour imposer une transformation idéologique ou culturelle.",
        "Préférer une assistance qui renforce les capacités locales plutôt qu'une dépendance indéfinie.",
        "Admettre un soutien à la médecine, à la sécurité alimentaire, à l'eau potable et à la reconstruction là où il est démontré efficace.",
        "Maintenir l'aide subordonnée aux obligations budgétaires intérieures légitimes.",
      ],
      implementationNote:
        "Le manifeste ne précise ni budgets ni mécanismes d'aide extérieure. Cela découle de la prudence, de la préoccupation humanitaire et de la présomption contre l'intervention idéologique.",
      keywords: [
        "aide extérieure",
        "aide humanitaire",
        "aide au développement",
        "charité",
        "développement international",
        "réfugiés",
      ],
    },

    sanctions: {
      title: "Sanctions",
      shortAnswer:
        "Les sanctions économiques sont des instruments exceptionnels pour des cas exceptionnellement graves, non des outils ordinaires d'alignement idéologique.",
      position: [
        "Les sanctions peuvent être justifiées lorsqu'un manquement grave est clairement identifié et qu'une contrainte non militaire a une perspective réaliste de le limiter sans préjudice disproportionné pour les civils.",
      ],
      policies: [
        "Exiger un objectif sérieux et clairement identifié.",
        "Préférer des mesures ciblées visant les responsables, les organisations, les moyens militaires ou les réseaux financiers en cause, plutôt qu'une punition indiscriminée des civils.",
        "N'user de sanctions que lorsque des solutions moins coercitives sont insuffisantes.",
        "Apprécier si les mesures ont une perspective raisonnable d'atteindre leur objectif.",
        "Prendre en considération le préjudice prévisible pour les civils innocents.",
        "Réexaminer périodiquement les sanctions et les lever lorsque leur finalité légitime prend fin ou que leur coût devient disproportionné.",
        "Maintenir des exemptions humanitaires pour les biens civils essentiels partout où cela est praticable.",
        "Réserver les sanctions économiques très larges à des circonstances exceptionnellement graves.",
      ],
      implementationNote:
        "La politique applique la proportionnalité et la prudence à la contrainte non militaire. Elle ne crée pas de politique de sanctions automatique à l'égard d'un État nommé.",
      keywords: [
        "sanctions",
        "embargo",
        "gel des avoirs",
        "politique étrangère",
        "coercition économique",
        "exemptions humanitaires",
      ],
    },

    conscription: {
      title: "Service militaire et préparation nationale",
      shortAnswer:
        "Une armée de volontaires solide, des réserves entraînées et une population physiquement capable sont préférées à une conscription universelle ordinaire en temps de paix.",
      position: [
        "Le service militaire est honorable et nécessaire à la défense, mais les forces armées ordinaires doivent être principalement composées de personnes qui choisissent librement de servir.",
      ],
      policies: [
        "Maintenir des forces armées professionnelles et de volontaires capables d'une défense territoriale crédible.",
        "Encourager l'engagement par une formation sérieuse, la considération sociale et des conditions appropriées, plutôt que par une contrainte ordinaire.",
        "Maintenir une réserve entraînée et une formation volontaire de réserve.",
        "Ne pas faire de la conscription universelle en temps de paix le modèle ordinaire.",
        "Admettre un service national de défense temporairement obligatoire lors d'une urgence défensive extrême menaçant la survie nationale, là où il est véritablement nécessaire.",
        "Prévoir un service national civil approprié pour les objecteurs de conscience véritables.",
        "Maintenir les forces armées soumises à des limites morales et juridiques, et refuser les ordres manifestement illégaux.",
        "Renforcer l'éducation physique scolaire par une progression sérieuse en condition physique, natation, premiers secours, orientation, aptitudes de plein air et compétences de protection civile adaptées à l'âge, avec des aménagements médicaux et pour handicap raisonnables.",
      ],
      implementationNote:
        "La doctrine sociale de l'Église reconnaît la légitimité de la défense nationale tout en reconnaissant également l'objection de conscience et les limites morales de la conduite des forces armées.",
      keywords: [
        "conscription",
        "service militaire",
        "service national",
        "réserves",
        "condition physique",
        "écoles",
        "protection civile",
        "objection de conscience",
        "appel sous les drapeaux",
      ],
    },

    "nuclear-weapons": {
      title: "Armes nucléaires",
      shortAnswer:
        "Restore Europa soutient une réduction multilatérale vérifiable et l'abolition à terme des armes nucléaires.",
      position: [
        "Les armes nucléaires créent des risques et des capacités de destruction d'un ordre différent de celui des armes conventionnelles ordinaires, et ne doivent pas être normalisées comme instruments permanents de la politique.",
      ],
      policies: [
        "Œuvrer à une réduction internationalement vérifiable et à l'abolition à terme des arsenaux nucléaires.",
        "Soutenir des accords sérieux de maîtrise des armements et de non-prolifération.",
        "S'opposer aux attaques nucléaires délibérées contre des populations civiles.",
        "S'opposer au développement d'armes nucléaires à des fins de simple prestige géopolitique.",
        "Rechercher un désarmement réciproque et vérifiable plutôt que des mesures qui laisseraient un pays seul exposé à la coercition nucléaire.",
        "Maintenir des systèmes de vérification solides contre la conservation secrète d'arsenaux prohibés.",
        "Soutenir les mesures réduisant le risque de tir nucléaire accidentel ou non autorisé.",
        "S'opposer à la prolifération vers de nouveaux États dotés de l'arme nucléaire.",
        "Tenir la politique de l'énergie nucléaire séparée de la politique des armes nucléaires.",
      ],
      implementationNote:
        "Le pape François a décrit à plusieurs reprises l'emploi comme la possession d'armes nucléaires comme immoraux et a appelé au désarmement. La politique adoptée suit cette orientation catholique contemporaine.",
      keywords: [
        "armes nucléaires",
        "désarmement nucléaire",
        "dissuasion",
        "non-prolifération",
        "maîtrise des armements",
        "armes stratégiques",
      ],
    },
  },
};
