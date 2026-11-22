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

  safety: {
    title: "Sécurité du produit",
    product: "Produit",
    productValue: "Autocollant, 9,8 × 9,8 cm, papier autocollant blanc, imprimé en quadrichromie",
    manufacturer: "Fabricant",
    seller: "Vendu par",
  },

  terms: {
    metaTitle: "Conditions générales de vente",
    kicker: "Boutique",
    title: "Conditions générales de vente",
    lede: "Les conditions auxquelles les autocollants sont vendus dans cette boutique, avec votre droit de vous rétracter d'un achat et un formulaire pour le faire.",
    updated: "En vigueur au 22 novembre 2026.",
    sections: [
      {
        heading: "1. Le vendeur",
        paragraphs: [
          "Les autocollants de cette boutique sont vendus par {seller}, entreprise individuelle établie en Autriche. Vous pouvez nous joindre par courriel à {email} ou par téléphone au {phone}. Notre adresse postale est communiquée sur demande par courriel.",
        ],
      },
      {
        heading: "2. Champ d'application",
        paragraphs: [
          "Les présentes conditions s'appliquent à toute commande passée dans cette boutique par un consommateur. La description des autocollants figurant sur la page de la boutique en fait partie.",
        ],
      },
      {
        heading: "3. Conclusion du contrat",
        paragraphs: [
          "Sur la page de la boutique, vous choisissez un motif, une quantité et le pays de livraison, et voyez le total, frais de port compris. Passer au paiement vous mène à la page de paiement de notre prestataire de paiement, Stripe, où vous saisissez votre nom, votre adresse électronique, votre adresse de livraison et vos données de paiement, et pouvez encore les corriger.",
          "En appuyant sur le bouton de paiement de cette page, vous faites une offre d'achat ferme. Le contrat est conclu lorsque le paiement est confirmé. Nous vous envoyons alors un courriel de confirmation indiquant votre numéro de commande et un lien vers la page de votre commande.",
        ],
      },
      {
        heading: "4. Prix et paiement",
        paragraphs: [
          "Tous les prix sont indiqués en euros et correspondent à ce que vous payez. Les frais de port sont affichés séparément avant le paiement et inclus dans le total. Nous n'ajoutons aucun autre frais.",
          "Hors de l'Union européenne, les douanes de votre pays peuvent percevoir une taxe à l'importation ou des frais de traitement à la livraison. Ceux-ci ne font pas partie de notre prix.",
          "Vous payez sur la page de paiement de Stripe au moyen de l'un des modes de paiement qui y sont proposés. Le montant est débité au moment de la commande.",
        ],
      },
      {
        heading: "5. Livraison",
        paragraphs: [
          "Nous expédions les autocollants depuis l'Autriche par lettre simple, sans suivi, à l'adresse que vous indiquez sur la page de paiement, dans les pays proposés sur la page de la boutique.",
          "Les commandes passées pendant que la boutique les signale comme précommandes sont expédiées dans un délai d'un mois à compter du jour de la commande. La page de votre commande indique quand elle a été expédiée.",
          "Si nous ne pouvons finalement pas livrer une commande, par exemple parce que moins d'autocollants ont été imprimés que prévu, nous vous en informons par courriel et vous remboursons immédiatement l'intégralité du montant.",
        ],
      },
      {
        heading: "6. Votre droit de rétractation",
        paragraphs: [
          "Vous avez le droit de vous rétracter du présent contrat sans donner de motif dans un délai de quatorze jours. Le délai de rétractation expire quatorze jours après le jour où vous-même, ou un tiers autre que le transporteur et désigné par vous, prenez physiquement possession des autocollants.",
          "Pour exercer le droit de rétractation, vous devez nous notifier votre décision de rétractation au moyen d'une déclaration dénuée d'ambiguïté. Le moyen le plus rapide est notre [fonction de rétractation][withdraw]. Vous pouvez également écrire à {email} ou utiliser le modèle de formulaire de rétractation ci-dessous, mais ce n'est pas obligatoire. Pour que le délai de rétractation soit respecté, il suffit que vous transmettiez votre communication relative à l'exercice du droit de rétractation avant l'expiration du délai.",
          "**Effets de la rétractation.** En cas de rétractation de votre part, nous vous rembourserons tous les paiements reçus de vous, y compris les frais de livraison standard, sans retard excessif et, en tout état de cause, au plus tard quatorze jours à compter du jour où nous sommes informés de votre décision de rétractation. Nous procéderons au remboursement en utilisant le même moyen de paiement que celui que vous aurez utilisé, sauf si vous convenez expressément d'un moyen différent ; en tout état de cause, ce remboursement n'occasionnera pas de frais pour vous. Nous pouvons différer le remboursement jusqu'à ce que nous ayons reçu les autocollants ou jusqu'à ce que vous ayez fourni une preuve de leur expédition, la date retenue étant celle du premier de ces faits.",
          "Si les autocollants vous sont déjà parvenus, vous devrez nous les renvoyer sans retard excessif et, en tout état de cause, au plus tard quatorze jours après que vous nous aurez communiqué votre décision de rétractation. Nous vous indiquons l'adresse de retour par courriel lors de votre rétractation. Vous devrez prendre en charge les frais directs de renvoi. Votre responsabilité n'est engagée qu'à l'égard de la dépréciation des autocollants résultant de manipulations autres que celles nécessaires pour établir leur nature, leurs caractéristiques et leur bon fonctionnement, par exemple si des autocollants manquent, ont été utilisés ou sont endommagés.",
        ],
      },
      {
        heading: "7. En cas de problème",
        paragraphs: [
          "La garantie légale de conformité des biens s'applique. Si des autocollants arrivent endommagés, mal imprimés ou non conformes à leur description, ou n'arrivent pas, écrivez-nous à {email} en indiquant votre numéro de commande, et nous y remédions en envoyant des autocollants de remplacement ou en vous remboursant.",
        ],
      },
      {
        heading: "8. Droit applicable",
        paragraphs: [
          "Le droit autrichien s'applique, à l'exclusion de ses règles de conflit de lois. Si vous êtes un consommateur résidant dans un autre pays, cela ne vous prive pas de la protection que vous assurent les dispositions impératives du droit de ce pays.",
        ],
      },
    ],
    form: {
      heading: "Modèle de formulaire de rétractation",
      intro: "Si vous souhaitez vous rétracter du contrat, vous pouvez compléter le présent formulaire et nous le renvoyer. Son utilisation n'est pas obligatoire.",
      lines: [
        "À l'attention de {seller}, {email} :",
        "Je/Nous (*) vous notifie/notifions (*) par la présente ma/notre (*) rétractation du contrat portant sur la vente du bien (*) ci-dessous :",
        "Commandé le (*) / reçu le (*) :",
        "Numéro de commande :",
        "Nom du (des) consommateur(s) :",
        "Adresse du (des) consommateur(s) :",
        "Signature du (des) consommateur(s) (uniquement en cas de notification du présent formulaire sur papier) :",
        "Date :",
      ],
      note: "(*) Rayez la mention inutile.",
    },
    shopLink: "Conditions générales de vente",
    accept: "En passant au paiement, vous acceptez nos [conditions générales de vente][terms], qui comprennent votre droit de rétractation.",
  },

  item: { one: "{count} autocollant — {design}", other: "{count} autocollants — {design}" },
  shippingLabel: "Frais de port",
  addressNote:
    "Veuillez vérifier soigneusement votre adresse, en particulier le numéro de rue et le code postal. Vos autocollants partent par lettre simple sans suivi : une lettre envoyée à une adresse mal saisie ne peut pas être retrouvée.",
};
