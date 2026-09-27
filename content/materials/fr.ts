import type { MaterialsText } from "./index";

export const materialsText: MaterialsText = {
  meta: {
    eyebrow: "Matériel",
    title: "Fait pour être pris et utilisé.",
    metaTitle: "Matériel",
    lede: "La marque du mouvement, et les affiches, autocollants et images qui en sont tirés. Tout ici est publié pour être téléchargé.",
    description:
      "Logos, affiches, autocollants, fonds d'écran et images du Restore Europa Movement, à télécharger librement.",
  },

  categories: {
    logo: {
      label: "Logos",
      note: "La marque et le logotype, dans les formes où ils sont dessinés.",
    },
    poster: {
      label: "Affiches",
      note: "Des feuilles d'une taille qui vaut l'impression.",
    },
    sticker: {
      label: "Autocollants",
      note: "De petites feuilles, faites pour être imprimées et découpées.",
    },
    wallpaper: {
      label: "Fonds d'écran",
      note: "Pour un téléphone ou un écran.",
    },
    social: {
      label: "Réseaux sociaux",
      note: "Des images au format des comptes que le mouvement tient.",
    },
  },

  file: {
    download: "Télécharger",
    downloadLabel: "Télécharger {title}",
  },

  empty: {
    title: "Rien n'est encore publié.",
    body: "Cette page se remplit à mesure que les fichiers sont faits.",
  },

  unavailable: {
    title: "Le catalogue n'est pas connecté.",
    body: "Cette copie du site n'a pas de base de données : la liste des fichiers ne peut donc pas être lue. Rien n'a été retiré.",
  },

  usage: {
    title: "Utilisation",
    body: "Tout ici porte le nom et la marque du mouvement : ce qui en est fait sera donc lu comme parlant au nom du mouvement. Aucune condition d'utilisation n'a encore été publiée, et le mouvement n'est pas encore enregistré.",
    imprintLink: "Mentions légales",
  },
};
