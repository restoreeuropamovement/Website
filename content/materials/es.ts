import type { MaterialsText } from "./index";

export const materialsText: MaterialsText = {
  meta: {
    eyebrow: "Materiales",
    title: "Hechos para llevarlos y usarlos.",
    metaTitle: "Materiales",
    lede: "La marca del movimiento, y los pliegos, pegatinas e imágenes salidos de ella. Todo lo de aquí está publicado para descargarse.",
    description:
      "Logotipos, carteles, pegatinas, fondos de pantalla e imágenes del Restore Europa Movement, para descargar libremente.",
  },

  categories: {
    logo: {
      label: "Logotipos",
      note: "La marca y el logotipo, en las formas en que están dibujados.",
    },
    poster: {
      label: "Carteles",
      note: "Pliegos de un tamaño por el que vale la pena imprimir.",
    },
    sticker: {
      label: "Pegatinas",
      note: "Pliegos pequeños, hechos para imprimirse y recortarse.",
    },
    wallpaper: {
      label: "Fondos de pantalla",
      note: "Para un teléfono o una pantalla.",
    },
    social: {
      label: "Redes sociales",
      note: "Imágenes al formato de las cuentas que el movimiento mantiene.",
    },
  },

  imprint: {
    note: "El diseño deja un campo en blanco para el nombre y la dirección de una persona responsable del ejemplar; rellénelo antes de colocar nada en público. Lo que se exige varía de un país a otro, así que compruebe qué se aplica donde usted esté.",
  },

  file: {
    download: "Descargar",
    downloadLabel: "Descargar {title}",
  },

  preview: {
    alt: "Vista previa de {title}",
    none: "Sin vista previa",
  },

  catalogue: {
    label: "Filtrar y ordenar el catálogo",
    kindLabel: "Tipo",
    kindAll: "Todos los tipos",
    formatLabel: "Formato",
    formatAll: "Todos los formatos",
    sortLabel: "Orden",
    sort: {
      newest: "Primero los más recientes",
      oldest: "Primero los más antiguos",
      title: "Título, de la A a la Z",
      largest: "Primero el archivo más grande",
      smallest: "Primero el archivo más pequeño",
    },
    apply: "Aplicar",
    clear: "Mostrar todo",
    showingAll: {
      one: "Se muestra el único archivo.",
      other: "Se muestran los {count} archivos.",
    },
    showingSome: {
      one: "{count} de {total} archivos coincide.",
      other: "{count} de {total} archivos coinciden.",
    },
    noMatch: "Aquí no coincide nada.",
  },

  empty: {
    title: "Todavía no hay nada publicado.",
    body: "Esta página se llena a medida que se hacen los archivos.",
  },

  unavailable: {
    title: "El catálogo no está conectado.",
    body: "Esta copia del sitio no tiene base de datos, así que la lista de archivos no puede leerse. No se ha retirado nada.",
  },

  usage: {
    title: "Uso",
    body: "Todo lo de aquí lleva el nombre y la marca del movimiento, de modo que lo que se haga con ello se leerá como si hablara en nombre del movimiento. Aún no se han publicado condiciones de uso, y el movimiento todavía no está registrado.",
    imprintLink: "Aviso legal",
  },
};
