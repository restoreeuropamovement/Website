import type { AboutText } from "./index";

export const aboutText: AboutText = {
  meta: {
    eyebrow: "À propos",
    title: "Un mouvement politique, organisé pour durer.",
    metaTitle: "À propos",
    lede: "Restore Europa Movement se construit comme un projet politique durable et non comme une campagne. Cette page expose qui nous sommes, comment nous travaillons et les limites que nous nous imposons.",
    description:
      "Qui est Restore Europa Movement, pourquoi nous qualifions notre politique de restauration, comment nous nous organisons, et notre engagement en faveur d'une participation politique pacifique, constitutionnelle et démocratique.",
  },

  onThisPage: "Sur cette page",

  sections: {
    "who-we-are": {
      title: "Qui nous sommes",
      body: [
        {
          type: "lead",
          text: "Restore Europa est un mouvement politique européen fondé sur la conviction que l'Europe est une civilisation qui mérite d'être continuée, et que la continuer relève de la politique ordinaire plutôt que du sentiment.",
        },
        {
          type: "paragraph",
          text: "Nous nous organisons en parti de membres et non de personnalités : des groupes locaux, une fonction de recherche et d'écriture, et un programme publié intégralement et défendu en public. Nos positions sont exposées dans le [manifeste][manifesto] et résumées dans nos [principes][principles].",
        },
        {
          type: "note",
          text: "Le mouvement est en formation. Les organes dirigeants, les statuts, les responsables et les mentions enregistrées seront publiés ici à mesure qu'ils seront établis, et pas avant.",
        },
      ],
    },

    "why-restoration": {
      title: "Pourquoi la restauration",
      body: [
        {
          type: "paragraph",
          text: "Le conservatisme a souvent signifié défendre l'arrangement qui se trouve exister. La révolution signifie s'en défaire. Ni l'un ni l'autre ne décrit ce que nous tentons.",
        },
        {
          type: "paragraph",
          text: "Restaurer, c'est retrouver des principes qu'une société a abandonnés et les appliquer intelligemment aux conditions présentes. Ce n'est pas recréer un siècle particulier : le passé a comporté injustice, pauvreté, violence et erreur, et rien de cela ne mérite notre nostalgie.",
        },
        {
          type: "statement",
          text: "L'histoire ne se renverse pas. La direction, si.",
        },
      ],
    },

    "what-we-believe": {
      title: "Ce que nous croyons",
      body: [
        {
          type: "paragraph",
          text: "En bref : que la personne précède le système ; que la famille est la première institution de la civilisation ; que les nations européennes peuvent légitimement préserver leur continuité ; que la propriété doit être largement répartie plutôt que concentrée ; que l'autorité revient au niveau compétent le plus bas ; que l'héritage naturel et bâti est détenu en dépôt ; et que la technique doit rester subordonnée au jugement humain.",
        },
        {
          type: "paragraph",
          text: "Nous affirmons l'héritage chrétien, et particulièrement catholique, de l'Europe comme fondement de sa civilisation — sans contraindre les consciences, et sans supposer qu'un héritage public commun exige une uniformité privée.",
        },
        {
          type: "paragraph",
          text: "Chacun de ces points est exposé longuement, avec son raisonnement, dans le [manifeste][manifesto].",
        },
      ],
    },

    "political-method": {
      title: "Notre méthode politique",
      body: [
        {
          type: "paragraph",
          text: "Nous argumentons en public, longuement, sous notre propre nom. Notre programme est publié intégralement plutôt que distribué en slogans, car un mouvement politique incapable d'énoncer son raisonnement réclame une confiance qu'il n'a pas gagnée.",
        },
        {
          type: "paragraph",
          text: "Nous dirigeons la critique contre des systèmes, des institutions, des incitations et des idées. Nous ne désignons pas des groupes humains comme ennemis, et nous ne faisons pas campagne sur le mépris. Là où nous sommes en désaccord avec d'autres mouvements politiques, nous disons en quoi consiste le désaccord.",
        },
        {
          type: "paragraph",
          text: "Là où les intérêts durables d'une nation l'exigent, nous coopérerons par-delà les partis. L'opposition est une part nécessaire de la vie démocratique ; l'opposition pour elle-même ne l'est pas.",
        },
      ],
    },

    "how-we-organize": {
      title: "Comment nous nous organisons",
      body: [
        {
          type: "paragraph",
          text: "La structure envisagée suit le principe que nous défendons ailleurs : la compétence au niveau le plus bas capable de l'exercer.",
        },
        {
          type: "definitions",
          items: [
            {
              term: "Sections locales",
              description:
                "L'unité de base. Réunions, travail politique local et choix des candidats là où des sections sont établies et enregistrées.",
            },
            {
              term: "Coordination régionale",
              description:
                "Appui entre sections, organisation commune et représentation vers le haut. Aucune compétence qu'une section peut exercer elle-même.",
            },
            {
              term: "Branches nationales",
              description:
                "Une pour chaque nation européenne, chacune avec ses propres statuts, son programme et ses candidatures selon le droit de son pays. Voir [les branches][wings].",
            },
            {
              term: "Recherche et publication",
              description:
                "Le [catalogue des politiques][policy] et l'entretien du manifeste comme texte de référence vivant.",
            },
          ],
        },
        {
          type: "note",
          text: "Aucune section n'a encore été formellement constituée. Les demandes concernant la création d'une section, ou d'une [branche nationale][wings], sont traitées via [S'engager][join].",
        },
      ],
    },

    "democratic-commitment": {
      title: "Notre engagement pour la participation politique démocratique",
      body: [
        {
          type: "lead",
          text: "Restore Europa poursuit ses buts exclusivement par une participation politique légale, pacifique et constitutionnelle.",
        },
        {
          type: "list",
          marker: "rule",
          items: [
            "Nous participons par les élections, l'argumentation publique, la publication et l'association légale.",
            "Nous acceptons l'ordre constitutionnel et l'État de droit, y compris les résultats que nous perdons.",
            "Nous rejetons la violence politique sous toutes ses formes, sans réserve ni exception.",
            "Nous rejetons le terrorisme et tenons la destruction délibérée de vies innocentes pour incapable de fonder un ordre moral quelconque.",
            "Nous rejetons le totalitarisme, qu'il soit d'un parti, d'une entreprise, d'une idéologie ou d'un État.",
            "Nous rejetons la haine raciale et toute politique qui traite les êtres humains comme d'une dignité inégale.",
            "Nous attendons des membres et des représentants qu'ils tiennent ces engagements, et tenons leur violation pour disqualifiante.",
          ],
        },
        {
          type: "paragraph",
          text: "Ce ne sont pas des clauses de style. Elles découlent directement de ce que nous soutenons : que l'autorité politique existe pour servir le bien commun, qu'elle répond devant la loi, et qu'un mouvement prétendant défendre une civilisation ne peut le faire par des moyens qui détruisent les conditions de la vie civilisée.",
        },
      ],
    },
  },

  leadershipHeading: "Personnes",
  leadershipNote:
    "Aucun responsable n'a été nommé, et nous ne publierons pas la biographie de personnes qui n'occupent pas encore ces postes. Les rôles ci-dessous décrivent la structure qu'une organisation constituée remplira, avec ce dont chacun répondra.",

  leadership: {
    leader: {
      role: "Président",
      remit:
        "Direction politique, représentation du mouvement et responsabilité devant les membres.",
    },
    "co-leader": {
      role: "Coprésident",
      remit:
        "Partage la direction politique avec le président, le remplace lorsque cela est nécessaire, et répond de l'organisation et de la conduite interne du mouvement.",
    },
  },

  actions: {
    getInvolved: "S'engager",
    contact: "Contact",
  },
};
