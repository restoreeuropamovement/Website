import type { ContentBlock } from "@/lib/content-types";
import type { HomeContent } from "./index";

export const home: HomeContent = {
  hero: {
    headline: "L'Europe vaut d'être reçue en héritage.",
    statement:
      "Restore Europa est un mouvement politique des nations d'Europe, fondé sur un manifeste publié et organisé en une aile nationale distincte dans chaque pays plutôt qu'en un parti européen unique.",
    primaryCta: "Lire nos principes",
    secondaryCta: "Participer",
  },

  standFor: {
    eyebrow: "Ce que nous défendons",
    title: "Cinq convictions.",
    lede: "Cinq sur seize. Chacune est argumentée en détail sur sa propre page, face à la section du manifeste sur laquelle elle repose.",
    allLabel: "Les seize principes",
    readFull: "lire le principe en entier",
    items: {
      family: {
        title: "Famille et vie humaine",
        statement:
          "Un pays qui a rendu les enfants inabordables a déjà dit quelque chose de ce qu'il valorise. Les choses ordinaires — se marier, élever une famille, tenir un foyer — devraient rester à la portée des gens ordinaires.",
      },
      nation: {
        title: "Nation et continuité",
        statement:
          "Une nation est un peuple doté d'une mémoire, non un ensemble de frontières administratives. Elle a le droit de vouloir encore se reconnaître dans cent ans.",
      },
      property: {
        title: "Propriété et indépendance économique",
        statement:
          "La liberté s'exerce mal depuis une dépendance totale. La propriété devrait être largement répartie — logements, terres, métiers, petites entreprises — plutôt que rassemblée dans quelques institutions.",
      },
      technology: {
        title: "Une technique à la mesure de l'homme",
        statement:
          "Tout ce qui peut être construit n'a pas à être adopté. Un outil doit rendre les gens plus capables de mener leur propre vie, non moins.",
      },
      subsidiarity: {
        title: "Autorité et subsidiarité",
        statement:
          "Rien ne doit être décidé plus haut que là où cela peut être bien décidé. Ce qu'une famille, une commune ou une nation peut faire elle-même lui appartient.",
      },
    },
  },

  objectives: {
    eyebrow: "Ce que nous voulons faire",
    title: "Concrètement, voici le travail.",
    lede: "Un mouvement se juge à ce qu'il bâtit, non à ce qu'il déplore. Quatre chantiers sont ouverts, et chacun se vérifie en l'ouvrant.",
    items: {
      programme: {
        title: "Mettre le programme par écrit.",
        body: "Dix domaines, de la famille et de l'économie à la technique, la santé et la politique étrangère. Des positions travaillées plutôt que des slogans, chacune rattachée à la section du manifeste sur laquelle elle repose, et chacune datée. Une position que l'on peut citer est une position dont on peut nous tenir comptables.",
        linkLabel: "Lire le catalogue de politiques",
      },
      wings: {
        title: "Bâtir une aile dans chaque nation européenne.",
        body: "Le travail politique se fait à l'intérieur d'un pays, sous son droit et dans ses conditions. Quarante-sept nations sont cartographiées. Chaque aile se donne ses propres statuts, se présente à ses propres élections et répond devant ses propres membres, non devant un siège situé ailleurs.",
        linkLabel: "Voir les ailes nationales",
      },
      members: {
        title: "Être un parti de membres, non de personnalités.",
        body: "Un mouvement fait de membres peut être tenu de leur rendre des comptes. Rien ne devient une adhésion avant qu'une personne ait lu la demande — aucun formulaire ne décide de lui-même, et ce que vous écrivez est chiffré avant d'être conservé.",
        linkLabel: "Demander à adhérer",
      },
      publication: {
        title: "Publier l'argument entier.",
        body: "Le manifeste est en ligne intégralement et téléchargeable en texte brut. Rien n'est retenu derrière une adresse électronique, un formulaire ou un paiement. Qui veut contredire ce mouvement peut lire exactement ce qu'il a dit.",
        linkLabel: "Lire le manifeste",
      },
    },
  },

  manifesto: {
    eyebrow: "Extrait du manifeste",
    title: "Préambule",
    body: [
      {
        type: "lead",
        text: "L'Europe est plus qu'un continent, un marché ou un espace administratif.",
      },
      {
        type: "paragraph",
        text: "C'est une civilisation — née du christianisme et de l'héritage classique, de peuples et de langues distincts, de générations de familles, de paysages cultivés, de villes et de villages, d'églises, d'art, de droit, d'artisanat et de mémoire.",
      },
      {
        type: "paragraph",
        text: "Rien de cela n'a été bâti par des individus détachés de l'histoire. Cela s'est transmis d'une génération à la suivante. Burke en a donné en 1790 la formulation demeurée classique, contre une révolution qui prétendait recommencer à partir de la seule raison : une société est un partenariat, et parce que ses fins ne peuvent être atteintes dans une seule vie, elle est un partenariat « non seulement entre ceux qui vivent, mais entre ceux qui vivent, ceux qui sont morts et ceux qui sont à naître ».",
      },
      {
        type: "paragraph",
        text: "L'Europe moderne tient de plus en plus l'héritage lui-même pour suspect. Nous n'acceptons pas que ce soit là un progrès.",
      },
    ] satisfies readonly ContentBlock[],
    cta: "Lire le manifeste en entier",
  },

  explore: {
    eyebrow: "Explorer",
    title: "Explorer Restore Europa.",
    cards: {
      principles: {
        title: "Principes",
        blurb: "Les seize engagements, argumentés un par un.",
      },
      manifesto: {
        title: "Manifeste",
        blurb: "Le document fondateur : un préambule et vingt-deux sections, en entier.",
      },
      policy: {
        title: "Politiques",
        blurb: "Des positions travaillées dans dix domaines, consultables et datées.",
      },
      vision: {
        title: "Vision",
        blurb: "Ce que le programme changerait dans une vie ordinaire.",
      },
      wings: {
        title: "Ailes",
        blurb: "L'aile nationale dans chacune des quarante-sept nations européennes.",
      },
      about: {
        title: "À propos",
        blurb: "Qui nous sommes, et comment le mouvement est constitué.",
      },
    },
  },

  participation: {
    eyebrow: "Prendre part",
    title: "Ce que rejoindre veut dire.",
    lede: "Deux façons d'entrer et une lettre à écrire. Aucune ne coûte rien, car le mouvement n'est pas encore en mesure de recevoir de l'argent.",
    ways: {
      member: {
        title: "Membre",
        note: "La voie ordinaire",
        summary:
          "Vous êtes compté. L'adhésion est ici une appartenance et non un abonnement : lorsque Restore Europa pourra recevoir des contributions, ce sont les membres à qui il sera demandé de soutenir le travail.",
        cta: "Demander à adhérer",
      },
      volunteer: {
        title: "Bénévole",
        note: "Autant de temps que vous pouvez donner",
        summary:
          "La même demande, avec le domaine dans lequel vous aideriez — organisation locale, écriture, traduction, événements, droit, technique, agriculture, bâtiment, ou autre chose que vous savez faire.",
        cta: "Se proposer comme bénévole",
      },
      chapter: {
        title: "Une aile là où vous vivez",
        note: "Écrivez d'abord ; il n'y a pas de formulaire",
        summary:
          "Figurer sur la carte ne signifie pas qu'une aile y est déjà constituée. Si vous vouliez aider à fonder celle de votre pays, dites-le — à ce stade, c'est la chose la plus utile que l'on puisse faire pour le mouvement.",
        cta: "Écrire au sujet d'une aile locale",
      },
    },
    closing:
      "Il n'y a aucune liste de diffusion à rejoindre ni aucune lettre d'information à laquelle s'abonner. La seule adresse que ce mouvement détient est celle que vous avez vous-même écrite dans une demande ou un message, et elle est chiffrée avant d'être conservée.",
  },
};
