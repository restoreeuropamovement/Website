import type { InvolvementText } from "./index";

export const involvementText: InvolvementText = {
  join: {
    eyebrow: "Adhésion",
    title: "Rejoindre le mouvement.",
    metaTitle: "S'engager",
    lede: "Adhérer, c'est appartenir. Si vous pouvez en outre aider à bâtir le mouvement, choisissez « Bénévole ». Le formulaire demande cinq choses, chiffre votre nom et votre adresse avant de les enregistrer, et ne vous engage à rien tant qu'une personne n'a pas examiné la demande.",
    description:
      "Rejoignez le Restore Europa Movement comme adhérent, ou proposez-vous comme bénévole pour aider à le bâtir.",
    prefilled:
      "Vous arrivez de la branche en {country}, le formulaire ci-dessous est donc réglé sur elle. Modifiez l'un ou l'autre champ si ce n'est pas exact.",
    roleLegend: "À quel titre vous candidatez",
    fields: {
      name: "Nom",
      email: "Courriel",
      country: "Pays",
      region: "Région ou ville",
      interest: "Domaine d'intérêt",
      message: "Message",
      messageHint:
        "Ce que vous aimeriez faire, et tout ce qui, dans votre situation, s'y rapporte.",
      optional: "Facultatif",
      placeholder: "Choisir…",
      otherCountry: "Autre",
    },
    consent:
      "Je demande à adhérer au Restore Europa Movement et j'accepte que ce que j'ai saisi ci-dessus soit conservé à cette fin. L'adhésion à un mouvement politique implique une opinion politique, que la loi protège plus strictement que les données personnelles ordinaires ; je peux retirer ce consentement et faire effacer l'enregistrement à tout moment.",
    submit: "Envoyer ma demande",
    submitting: "Envoi…",
    privacyNote: "Tout ce que vous saisissez est chiffré avant d'être enregistré. Voir notre",
    privacyLink: "note de confidentialité",
    received: {
      title: "Votre demande a bien été reçue.",
      body: "Elle attend maintenant d'être examinée par une personne. L'adhésion commence lorsque cet examen est achevé, non lorsqu'un formulaire est envoyé — rien n'est donc décidé, et rien vous concernant n'a été publié où que ce soit.",
      privacy:
        "Votre nom et votre adresse ont été chiffrés avant d'être consignés. Ce que nous conservons, combien de temps et comment le faire effacer sont exposés dans la",
      privacyLink: "note de confidentialité",
    },
    unavailable:
      "Le registre des adhérents n'accepte pas de demandes pour le moment. Rien de ce que vous tapez ici n'a été envoyé. Veuillez réessayer sous peu.",
    throttled:
      "Plusieurs demandes ont déjà été envoyées depuis cette connexion. Veuillez attendre une heure avant d'en envoyer une autre.",
    problemCount: {
      one: "Ce formulaire présente {count} problème",
      other: "Ce formulaire présente {count} problèmes",
    },
    errors: {
      name: "Indiquez votre nom, 120 caractères au plus.",
      email: "Indiquez une adresse électronique valide.",
      country: "Choisissez un pays dans la liste.",
      region: "La région ou la ville est limitée à 120 caractères.",
      message: "Votre message est limité à 1500 caractères.",
      role: "Indiquez si vous candidatez comme adhérent ou comme bénévole.",
      interest: "Choisissez un domaine d'intérêt.",
      consent: "Vous devez donner votre accord pour continuer.",
    },
  },

  roles: {
    member: {
      title: "Adhérent",
      summary:
        "Être compté comme adhérent du mouvement. Lorsque Restore Europa pourra recevoir des contributions, ce sont les adhérents à qui il sera demandé de soutenir le travail.",
      commitment: "La voie ordinaire",
    },
    volunteer: {
      title: "Bénévole",
      summary:
        "Aider à le bâtir : organisation locale, écriture, traduction, événements ou un métier. Choisissez le domaine d'intérêt qui convient le mieux.",
      commitment: "Selon vos disponibilités",
    },
  },

  retiredRoles: {
    supporter: "Sympathisant",
    organizer: "Organisateur local",
    writer: "Auteur / chercheur",
    professional: "Contribution professionnelle",
  },

  interests: {
    policy: "Politiques publiques et recherche",
    organising: "Organisation locale",
    writing: "Écriture et édition",
    events: "Événements et réunions",
    translation: "Traduction",
    legal: "Droit et conformité",
    technology: "Technologie et infrastructures",
    agriculture: "Agriculture et terres",
    architecture: "Architecture et urbanisme",
    other: "Autre",
  },

  contact: {
    eyebrow: "Contact",
    title: "Joindre le mouvement.",
    metaTitle: "Contact",
    lede: "La correspondance est traitée par fonction et non par personne, afin qu'une lettre parvienne à ceux qui peuvent y répondre plutôt qu'à qui la lit en premier.",
    description:
      "Comment joindre le Restore Europa Movement : demandes générales, presse, recherche, organisation et sections locales.",
    channelsHeading: "Voies",
    writeHeading: "Écrivez-nous",
    writeBody:
      "Aucune adresse électronique n'est imprimée ci-dessus, car chacune est publiée lorsque la fonction à laquelle elle appartient existe et que quelqu'un répond de sa lecture. Ce formulaire atteint les mêmes personnes entre-temps.",
    fields: {
      name: "Nom",
      email: "Courriel",
      subject: "De quoi il s'agit",
      message: "Message",
      placeholder: "Choisir…",
    },
    submit: "Envoyer le message",
    submitting: "Envoi…",
    privacyNote: "Chiffré avant d'être enregistré. Voir notre",
    privacyLink: "note de confidentialité",
    sent: {
      title: "Votre message a bien été reçu.",
      body: "Il sera lu par la personne qui exerce la fonction à laquelle vous l'avez adressé. Le mouvement est petit et répond au courrier à la main ; une réponse peut donc prendre quelques jours.",
      privacy:
        "Votre nom, votre adresse et votre message ont été chiffrés avant d'être enregistrés et peuvent être effacés sur demande — voir la",
      privacyLink: "note de confidentialité",
    },
    unavailable:
      "La correspondance ne peut pas être reçue pour le moment. Rien de ce que vous tapez ici n'a été envoyé. Veuillez réessayer sous peu.",
    throttled:
      "Plusieurs messages ont déjà été envoyés depuis cette connexion. Veuillez attendre une heure avant d'en envoyer un autre.",
    problemCount: {
      one: "Ce formulaire présente {count} problème",
      other: "Ce formulaire présente {count} problèmes",
    },
    errors: {
      name: "Indiquez votre nom, 120 caractères au plus.",
      email: "Indiquez une adresse électronique valide, pour qu'une réponse puisse vous parvenir.",
      subject: "Choisissez de quoi traite votre message.",
      message: "Votre message doit compter entre 10 et 2000 caractères.",
    },
    ratherTakePart: {
      before: "Si vous préférez prendre part plutôt que poser une question,",
      joinLink: "rejoignez le mouvement",
      between: ". Les informations sur l'éditeur figurent dans les",
      imprintLink: "mentions légales",
      after: ".",
    },
  },

  channels: {
    general: {
      title: "Demandes générales",
      description: "Questions sur le mouvement, son programme et ses activités.",
    },
    press: {
      title: "Presse",
      description: "Journalistes, radiodiffuseurs et chercheurs cherchant un commentaire ou un éclairage.",
    },
    research: {
      title: "Recherche",
      description: "Correspondance académique et contributions au catalogue des politiques.",
    },
    organization: {
      title: "Organisation",
      description: "Gestion des adhésions, statuts, conformité et affaires internes.",
    },
    chapters: {
      title: "Sections locales",
      description: "Créer une section, ou en contacter une lorsque les sections seront constituées.",
    },
  },
};
