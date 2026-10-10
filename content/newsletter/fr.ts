import type { NewsletterText } from "./index";

export const newsletterText: NewsletterText = {
  eyebrow: "Lettre",
  title: "La revue par courriel",
  metaTitle: "Lettre",
  lede: "Une adresse, les essais du mouvement à mesure qu'ils s'écrivent, et dans chaque message un lien qui vous retire de la liste.",
  description:
    "Recevez la revue de Restore Europa par courriel. Une adresse, chiffrée avant d'être conservée, confirmée avant tout envoi, et retirée d'un lien présent dans chaque message.",

  body: [
    {
      type: "lead",
      text: "S'abonner inscrit une seule adresse électronique sur une liste, et cette liste reçoit les essais du mouvement. Rien d'autre ne lui est envoyé : ni appels aux dons, ni invitations, ni transmission à qui que ce soit.",
    },
    {
      type: "paragraph",
      text: "La revue n'a pour l'instant aucune page publique ; la lettre est donc, pour le moment, l'endroit où paraissent ses essais. Chacun arrive en entier, en texte brut : pas d'images, pas de mise en forme, et rien qui signale si vous l'avez ouvert.",
    },
    {
      type: "paragraph",
      text: "**Une confirmation vous sera demandée.** L'adresse reste non confirmée tant qu'un lien qui lui est envoyé n'a pas été suivi ; rien n'est délivré avant cela, et une adresse jamais confirmée est supprimée sans avoir été lue : le lien expire au bout de deux jours, et un balayage qui passe une fois par jour efface ce qui a expiré, de sorte que rien n'est conservé plus de trois jours. Ce n'est pas une formalité. N'importe qui peut taper l'adresse d'un inconnu dans un champ, et pour celui à qui son intérêt pour ce mouvement coûterait son emploi, du courrier politique qu'il n'a pas demandé est un tort réel commis en son nom.",
    },
    {
      type: "paragraph",
      text: "**L'adresse est chiffrée avant d'être écrite**, avec une clef qui n'est pas conservée dans la base de données : une copie volée de celle-ci ne déchiffre rien. À côté, nous notons la langue dans laquelle vous lisiez, afin que la lettre s'adresse à vous dans cette langue. Pas de nom, pas de pays, et aucun moyen pour qui que ce soit de télécharger la liste. Ce qui est conservé, et combien de temps, est exposé dans la [note de confidentialité][privacy].",
    },
    {
      type: "paragraph",
      text: "**Partir prend un clic.** Chaque message porte un lien qui retire l'adresse, et il ne demande ni compte ni motif. Ce lien n'est stocké nulle part — il est recalculé à partir de l'enregistrement à chaque usage — de sorte qu'une copie de la base ne donnerait à personne un bouton qui vide la liste, et qu'un message retrouvé dans une archive des années plus tard fonctionne encore.",
    },
    {
      type: "note",
      text: "Les essais sont écrits en anglais et ne sont pas traduits. Ce que le mouvement dit autour d'eux — la note en bas de page, la manière de se désabonner — est dans la langue où vous vous êtes abonné.",
    },
  ],

  form: {
    heading: "S'abonner",
    email: "Adresse électronique",
    submit: "S'abonner",
    submitting: "Envoi…",
    privacyNote: "Ce qu'il advient de votre adresse est exposé dans la",
    privacyLink: "note de confidentialité",
    invalid:
      "Cela ne ressemble pas à une adresse électronique. Rien n'a été envoyé ni conservé.",
    unavailable:
      "Les abonnements ne peuvent pas être enregistrés pour le moment, ce formulaire n'accepte donc aucune adresse. Rien de ce que vous y écririez ne serait conservé, et nous préférons le dire plutôt que de le prendre.",
    throttled:
      "Cette connexion a déjà fait plusieurs demandes dans la dernière heure. Patientez un peu et réessayez — une adresse n'est inscrite qu'une fois, une tentative précédente a donc pu aboutir.",
    busy:
      "Le site a atteint le nombre d'envois qu'il accepte en une heure, tous visiteurs confondus. Cela n'a presque certainement rien à voir avec vous. Réessayez sous peu.",
    sent: {
      title: "Allez voir dans cette boîte.",
      body: "Un message est en route. Ce qu'il dit dépend de ce qui figure déjà sur la liste, et seul celui qui peut ouvrir la boîte le verra — cette page n'en sait rien dans un cas comme dans l'autre, afin que le formulaire ne puisse pas servir à découvrir qui est abonné. Si le message contient un lien de confirmation, rien d'autre ne sera envoyé tant qu'il n'aura pas été suivi.",
    },
  },

  confirm: {
    eyebrow: "Lettre",
    title: "Confirmez votre abonnement",
    metaTitle: "Confirmez votre abonnement",
    lede: "Une pression, et l'adresse à laquelle ce lien appartient rejoint la liste.",
    why: "Un bouton plutôt que le lien seul, parce que les filtres de messagerie des entreprises ouvrent chaque adresse contenue dans un message entrant pour vérifier qu'elle est sans danger. S'il suffisait de suivre le lien, ces analyseurs confirmeraient des abonnements au nom de gens qui n'ont jamais ouvert le courrier — et ils sont les plus répandus là précisément où ce que lit quelqu'un est le plus étroitement surveillé.",
    submit: "Confirmer",
    submitting: "Confirmation…",
    done: {
      title: "Confirmé.",
      body: "L'adresse est sur la liste, et le prochain essai lui sera envoyé. Chaque message porte un lien qui l'en retire.",
    },
    failed: {
      title: "Ce lien n'a pas fonctionné.",
      body: "Un lien de confirmation vaut deux jours et ne sert qu'une fois. S'il a expiré, ou s'il a déjà été utilisé, redemandez-en un depuis la [page de la lettre][newsletter] et un nouveau sera envoyé.",
    },
    missing:
      "Cette adresse ne porte aucun jeton de confirmation : il n'y a donc rien à confirmer ici. Ouvrez le lien contenu dans le message qui vous a été envoyé.",
  },

  unsubscribe: {
    eyebrow: "Lettre",
    title: "Quitter la liste",
    metaTitle: "Quitter la liste",
    lede: "Une pression, et l'adresse à laquelle ce lien appartient cesse de recevoir quoi que ce soit.",
    why: "Un bouton plutôt qu'un retrait à la simple ouverture, pour la même raison que la confirmation : les analyseurs de liens intégrés aux messageries d'entreprise ouvrent chaque adresse d'un message, et un lien qui désabonnerait à l'ouverture retirerait sans bruit des lecteurs qui n'ont jamais demandé à partir.",
    submit: "Se désabonner",
    submitting: "Retrait…",
    done: {
      title: "C'est fait. Rien ne sera plus envoyé.",
      body: "Nous ne disons pas si l'adresse figurait sur la liste, car celui qui détient ce lien n'est pas forcément la personne à qui l'adresse appartient, et ce n'est pas une question à laquelle nous répondrons à un inconnu. Vous pouvez vous réabonner quand vous voulez ; cela repartira de l'étape de confirmation. Si quelque chose arrive malgré tout, le lien employé est antérieur à la clef de chiffrement actuelle et n'est plus reconnu ; celui au bas du message le plus récent le sera.",
    },
    missing:
      "Cette adresse ne porte aucun jeton : il n'y a donc rien à retirer ici. Utilisez le lien au bas d'un message qui vous a été envoyé.",
  },
};
