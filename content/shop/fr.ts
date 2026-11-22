import type { ShopText } from "./index";

/** The sticker shop, in French. Typed against `en.ts`; see its header. */
export const shopText: ShopText = {
  meta: {
    eyebrow: "Boutique",
    title: "Autocollants",
    metaTitle: "Autocollants",
    description: "Autocollants Restore Europa, emballés à la main et expédiés d'Autriche dans toute l'Europe.",
    lede: "Choisissez un motif et la quantité souhaitée. Nous les emballons à la main et vous les expédions depuis l'Autriche, partout en Europe.",
  },

  hero: {
    from: "À partir de {price}",
    posted: "Expédié depuis l'Autriche",
    noAccount: "Aucun compte nécessaire",
    supports: "Chaque commande finance le mouvement",
    preorder: "Précommande : expédiée sous un mois",
    cta: "Choisir vos autocollants",
  },

  how: {
    title: "Comment ça marche",
    steps: [
      { title: "Choisir", body: "Choisissez un motif, une quantité et le pays de destination. Le total, frais de port compris, s'affiche avant le paiement." },
      { title: "Payer en toute sécurité", body: "Vous payez sur la page de paiement de Stripe. Ce site ne voit jamais votre carte et ne conserve aucune trace de votre identité." },
      { title: "Expédié chez vous", body: "Vos autocollants sont emballés à la main et expédiés depuis l'Autriche. Conservez la page de la commande pour savoir quand ils partent." },
    ],
  },

  test: {
    title: "Mode test",
    body: "Les paiements effectués ici vont vers l'environnement de test de Stripe, et rien n'est imprimé ni expédié. Utilisez les numéros de carte de test de Stripe, jamais une vraie carte.",
  },

  closed: {
    title: "La boutique est fermée",
    body: "Aucune commande ne peut être prise pour le moment. Rien sur cette page ne vous sera facturé ni envoyé.",
  },

  unavailable: {
    title: "La boutique est injoignable",
    body: "Les motifs n'ont pas pu être chargés à l'instant. Rien n'a été débité. Veuillez réessayer plus tard.",
  },

  empty: {
    title: "Aucun motif pour l'instant",
    body: "Il n'y a rien à commander pour le moment.",
  },

  sticker: {
    title: "L'autocollant",
    size: "9,8 × 9,8 cm",
    facts: ["9,8 × 9,8 cm, carré", "Quadrichromie sur papier autocollant blanc", "Dos prédécoupé, facile à décoller"],
    specs: {
      title: "Caractéristiques",
      rows: [
        { label: "Format", value: "9,8 × 9,8 cm, carré" },
        { label: "Matière", value: "Papier autocollant blanc, 80 g/m²" },
        { label: "Impression", value: "Quadrichromie (CMYK), recto seul" },
        { label: "Dos", value: "Prédécoupé, pour se décoller facilement" },
        { label: "Finition", value: "Aucune : ni pelliculage ni vernis" },
        { label: "Usage", value: "Conçu pour l'intérieur" },
      ],
    },
    delivery: {
      title: "Livraison",
      rows: [
        { label: "Depuis", value: "L'Autriche, emballé et expédié à la main" },
        { label: "Mode", value: "Lettre simple, sans suivi" },
        { label: "Frais de port", value: "Selon le poids, inclus dans le total affiché avant le paiement" },
        { label: "Destinations", value: "L'UE et la plupart des pays d'Europe ; hors de l'UE, les douanes de votre pays peuvent percevoir des frais à la livraison" },
      ],
      preorderRow: { label: "Quand", value: "Précommande : expédiée dans un délai d'un mois après votre commande" },
    },
  },

  soldOut: {
    title: "Épuisé",
    preorderTitle: "Plus de précommandes possibles",
    body: "Tous les autocollants de ce tirage ont été commandés. Aucune commande n’est possible pour le moment.",
  },

  form: {
    design: "Motif",
    quantity: "Quantité",
    quantityOption: { one: "{count} autocollant", other: "{count} autocollants" },
    perSticker: "{price} l'unité",
    left: "Plus que {count} autocollants dans ce tirage",
    notEnough: "stock insuffisant",
    country: "Livrer en",
    countryPlaceholder: "Choisir un pays",
    summaryTitle: "Votre commande",
    postagePending: "Choisissez un pays ci-dessus",
    stickers: "Autocollants",
    delivery: "Frais de port",
    total: "Total",
    each: "environ {price} l'unité",
    secure: "Paiement sécurisé avec Stripe",
    notDelivered: "Cette quantité ne peut pas encore être expédiée vers ce pays.",
    customs:
      "Cet envoi passe par la douane. Votre pays peut percevoir une taxe à l'importation ou des frais de traitement à la livraison ; cela se règle entre vous et votre bureau de poste et ne fait pas partie du total affiché ici.",
    preorder:
      "Précommande. Les autocollants sont en cours d'impression, et votre commande est expédiée dans un délai d'un mois après la commande.",
    submit: "Passer au paiement",
    submitting: "Ouverture de la page de paiement…",
    payment:
      "La page de Stripe vous demande votre nom, votre adresse électronique et votre adresse de livraison. Ce site ne voit jamais votre carte et ne conserve aucune trace de votre identité : les personnes qui expédient vos autocollants voient votre adresse pour cette seule enveloppe.",
    privacyLink: "Comment vos données sont traitées",
  },

  errors: {
    design: "Choisissez un motif.",
    quantity: "Choisissez une quantité.",
    country: "Choisissez un pays de livraison.",
    "not-offered": "Cette quantité ne peut pas encore être expédiée vers ce pays.",
  },

  states: {
    throttled: "Trop de commandes ont été commencées depuis cette connexion. Veuillez attendre une heure avant de réessayer.",
    busy: "La boutique reprend son souffle après un afflux de commandes. Veuillez réessayer d'ici peu.",
    unavailable: "La page de paiement n'a pas pu être ouverte à l'instant. Rien n'a été débité. Veuillez réessayer plus tard.",
    closed: "La boutique vient de fermer. Rien n'a été débité.",
    soldout: "Il ne reste pas assez d’autocollants pour cette quantité. Choisissez-en moins. Rien n’a été débité.",
  },

  order: {
    metaTitle: "Votre commande",
    kicker: "Commande",
    missingTitle: "Commande introuvable",
    missingBody:
      "Cette adresse ne correspond à aucune commande. Si vous venez de payer, la page de paiement est peut-être encore en train de nous la transmettre — rechargez dans une minute.",
    keep: "Conservez l'adresse de cette page ; nous vous l'avons aussi envoyée par courriel. Ce site ne conserve pas votre adresse électronique : cette page est donc le moyen de suivre l'avancement de votre commande.",
    design: "Motif",
    quantity: "Quantité",
    destination: "Livré en",
    total: "Payé",
    tracking: "Suivi",
    test: "Commande de test — rien ne sera imprimé ni expédié.",
    preorder: "Ceci est une précommande : elle est expédiée dans un délai d'un mois à compter du jour de votre commande.",
    withdrawn:
      "Votre rétractation de cette commande a été reçue le {date}. Nous vous remboursons votre paiement, frais de port compris, dans un délai de 14 jours à compter de ce jour. Si les autocollants vous sont déjà parvenus, veuillez nous les renvoyer au complet ; nous pouvons attendre leur réception avant de rembourser.",
    withdrawLink: "Se rétracter de cet achat",
    status: {
      checkout: "En attente de la confirmation du paiement.",
      expired: "Le paiement n'a pas abouti : rien n'a été débité et rien ne sera envoyé.",
      paid: "Payée. Votre commande va être transmise pour l'emballage.",
      submitting: "Payée. Votre commande est en cours de transmission pour l'emballage.",
      retry: "Payée. Votre commande n'a pas encore pu être transmise pour l'emballage ; elle le sera automatiquement.",
      review: "Payée. Votre commande doit être examinée un instant par une personne avant l'envoi. Vous n'avez rien d'autre à faire.",
      submitted: "En cours d'emballage pour l'expédition.",
      in_production: "En cours d'emballage pour l'expédition.",
      shipped: "Expédiée.",
      delivered: "Livrée.",
      cancelled: "Annulée. Toute somme payée a été ou sera remboursée sur votre carte.",
    },
  },

  confirmation: {
    subject: "Votre commande d'autocollants {reference}",
    intro:
      "Merci pour votre commande. Votre paiement nous est parvenu et vos autocollants figurent sur notre liste d'emballage.",
    orderHeading: "VOTRE COMMANDE",
    rows: {
      reference: "Commande",
      design: "Motif",
      quantity: "Quantité",
      destination: "Livrer en",
      stickers: "Autocollants",
      postage: "Frais de port",
      total: "Total payé",
    },
    nextHeading: "LA SUITE",
    next: "Nous emballons vos autocollants à la main et les expédions depuis l'Autriche par lettre simple, sans suivi. Cette page indique quand votre commande a été expédiée :",
    preorder: "Ceci est une précommande. Les autocollants sont en cours d'impression, et votre commande est expédiée dans un délai d'un mois à compter d'aujourd'hui.",
    withdraw: "Vous avez changé d'avis ? Vous pouvez vous rétracter de cet achat dans un délai de 14 jours à compter de la réception des autocollants, sans avoir à donner de motif : {withdraw}",
    customs:
      "Votre commande passe par la douane. Votre pays peut percevoir une taxe à l'importation ou des frais de traitement à la livraison ; ils ne font pas partie du total ci-dessus.",
    test: "Il s'agissait d'une commande de test. Rien n'a été débité et rien ne sera expédié.",
    reply:
      "Ce courriel a été envoyé automatiquement et les réponses ne sont pas lues. Si quelque chose ne va pas avec votre commande, écrivez-nous à {contact} en indiquant {reference}.",
    why: "Vous recevez ce message parce que vous avez commandé des autocollants sur {shop}. Nous ne conservons pas votre adresse électronique et ne vous écrirons plus au sujet de cette commande.",
  },

  withdrawal: {
    metaTitle: "Se rétracter d'un achat",
    kicker: "Boutique",
    title: "Se rétracter de votre achat",
    lede: "Vous pouvez vous rétracter d'une commande d'autocollants dans un délai de 14 jours à compter de sa réception, sans avoir à donner de motif. Remplissez les champs ci-dessous, vérifiez-les et confirmez. Nous vous répondons par courriel en indiquant la date et l'heure de réception.",
    shopLink: "Vous avez changé d'avis ? Se rétracter d'un achat",
    name: "Votre nom",
    reference: "Numéro de commande",
    referenceHint: "Il commence par RE- et figure dans votre courriel de confirmation.",
    email: "Adresse électronique",
    emailHint: "Celle que vous avez utilisée lors du paiement.",
    review: "Continuer",
    checkTitle: "Vérifier et confirmer",
    checkBody: "Vous vous rétractez de cet achat :",
    confirm: "Confirmer la rétractation",
    change: "Modifier les informations",
    doneTitle: "Rétractation reçue",
    doneBody:
      "Si ces informations correspondent à une commande, votre rétractation est enregistrée et une confirmation est en route vers cette adresse électronique, avec la date et l'heure de réception. Si rien n'arrive dans l'heure, vérifiez le numéro de commande et l'adresse électronique puis réessayez, ou écrivez-nous au moyen du formulaire de contact.",
    errors: {
      name: "Indiquez votre nom.",
      reference: "Indiquez le numéro de commande, qui commence par RE-.",
      email: "Indiquez l'adresse électronique utilisée pour la commande.",
    },
    states: {
      throttled: "Trop de tentatives depuis cette connexion. Veuillez attendre une heure avant de réessayer.",
      unavailable: "L'envoi n'a pas pu se faire à l'instant. Veuillez réessayer plus tard, ou écrivez-nous au moyen du formulaire de contact.",
    },
    acknowledgement: {
      subject: "Rétractation reçue : commande {reference}",
      intro: "Nous avons reçu votre rétractation de la commande {reference} le {when}.",
      name: "Nom indiqué : {name}",
      nextHeading: "LA SUITE",
      notPosted: "Si vos autocollants n'ont pas encore été expédiés, ils ne le seront pas.",
      returns:
        "S'ils vous sont déjà parvenus, veuillez nous les renvoyer au complet. Écrivez-nous via {contact} et nous vous indiquerons où les envoyer.",
      refund:
        "Nous vous remboursons votre paiement, y compris les frais de port payés, dans un délai de 14 jours à compter d'aujourd'hui, sur la carte utilisée pour le paiement. Nous pouvons attendre le retour des autocollants avant de rembourser.",
      why: "Vous recevez ce message parce qu'une rétractation a été soumise pour cette commande sur {shop}. Les réponses à ce courriel ne sont pas lues.",
    },
  },

  item: { one: "{count} autocollant — {design}", other: "{count} autocollants — {design}" },
  shippingLabel: "Frais de port",
  addressNote:
    "Veuillez vérifier soigneusement votre adresse, en particulier le numéro de rue et le code postal. Vos autocollants partent par lettre simple sans suivi : une lettre envoyée à une adresse mal saisie ne peut pas être retrouvée.",
};
