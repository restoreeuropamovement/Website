import type { ContentBlock } from "@/lib/content-types";
import type { HomeContent } from "./index";

export const home: HomeContent = {
  hero: {
    headline: "Europa merece ser heredada.",
    statement:
      "Restore Europa es un movimiento político de las naciones de Europa, fundado sobre un manifiesto publicado y organizado como un ala nacional distinta en cada país en lugar de como un único partido europeo.",
    primaryCta: "Lee nuestros principios",
    secondaryCta: "Participa",
  },

  standFor: {
    eyebrow: "Lo que defendemos",
    title: "Cinco convicciones.",
    lede: "Cinco de dieciséis. Cada una se argumenta por extenso en su propia página, junto a la sección del manifiesto en la que se apoya.",
    allLabel: "Los dieciséis principios",
    readFull: "leer el principio completo",
    items: {
      family: {
        title: "Familia y vida humana",
        statement:
          "Un país que ha vuelto inasequibles a los hijos ya ha dicho algo sobre lo que valora. Lo ordinario — casarse, criar una familia, sostener un hogar — debería estar al alcance de la gente ordinaria.",
      },
      nation: {
        title: "Nación y continuidad",
        statement:
          "Una nación es un pueblo con memoria, no un conjunto de fronteras administrativas. Le está permitido querer seguir reconociéndose dentro de cien años.",
      },
      property: {
        title: "Propiedad e independencia económica",
        statement:
          "La libertad se ejerce mal desde la dependencia total. La propiedad debería estar ampliamente repartida — viviendas, tierra, oficios, pequeñas empresas — en lugar de reunida en unas pocas instituciones.",
      },
      technology: {
        title: "Técnica a escala humana",
        statement:
          "No todo lo que puede construirse ha de adoptarse. Una herramienta debe dejar a las personas más capaces de llevar su propia vida, no menos.",
      },
      subsidiarity: {
        title: "Autoridad y subsidiariedad",
        statement:
          "Nada debe decidirse más arriba de donde puede decidirse bien. Lo que una familia, un municipio o una nación puede hacer por sí mismo le pertenece.",
      },
    },
  },

  objectives: {
    eyebrow: "Lo que queremos hacer",
    title: "En concreto, este es el trabajo.",
    lede: "A un movimiento se le juzga por lo que construye, no por lo que deplora. Hay cuatro cosas en marcha, y cada una se comprueba abriéndola.",
    items: {
      programme: {
        title: "Poner el programa por escrito.",
        body: "Diez ámbitos, de la familia y la economía a la técnica, la sanidad y la política exterior. Posiciones trabajadas en lugar de consignas, cada una ligada a la sección del manifiesto en la que se apoya y cada una fechada. Una posición que se puede citar es una posición de la que se nos puede pedir cuentas.",
        linkLabel: "Leer el catálogo de políticas",
      },
      wings: {
        title: "Levantar un ala en cada nación europea.",
        body: "El trabajo político ocurre dentro de un país, bajo su derecho y en sus condiciones. Cuarenta y siete naciones están en el mapa. Cada ala se da sus propios estatutos, concurre a sus propias elecciones y responde ante sus propios miembros, no ante una sede en otro sitio.",
        linkLabel: "Ver las alas nacionales",
      },
      members: {
        title: "Ser un partido de miembros, no de personalidades.",
        body: "Un movimiento hecho de miembros puede rendirles cuentas. Nada se convierte en afiliación antes de que una persona haya leído la solicitud — ningún formulario decide por sí solo, y lo que escribes se cifra antes de guardarse.",
        linkLabel: "Solicitar la afiliación",
      },
      publication: {
        title: "Publicar el argumento entero.",
        body: "El manifiesto está en línea íntegro y se puede descargar como texto plano. Nada queda detrás de una dirección de correo, un formulario o un pago. Quien quiera contradecir a este movimiento puede leer exactamente lo que dijo.",
        linkLabel: "Leer el manifiesto",
      },
    },
  },

  manifesto: {
    eyebrow: "Del manifiesto",
    title: "Preámbulo",
    body: [
      {
        type: "lead",
        text: "Europa es más que un continente, un mercado o un espacio administrativo.",
      },
      {
        type: "paragraph",
        text: "Es una civilización — fruto del cristianismo y de la herencia clásica, de pueblos y lenguas distintos, de generaciones de familias, de paisajes cultivados, de ciudades y aldeas, de iglesias, arte, derecho, artesanía y memoria.",
      },
      {
        type: "paragraph",
        text: "Nada de eso lo construyeron individuos desligados de la historia. Se entregó de una generación a la siguiente. Burke le dio en 1790 su formulación ya clásica, frente a una revolución que pretendía empezar de nuevo solo desde la razón: una sociedad es una asociación, y como sus fines no pueden alcanzarse dentro de una sola vida, es una asociación \u201cno solo entre los que viven, sino entre los que viven, los que han muerto y los que están por nacer\u201d.",
      },
      {
        type: "paragraph",
        text: "La Europa moderna trata cada vez más la herencia misma como sospechosa. No aceptamos que eso sea progreso.",
      },
    ] satisfies readonly ContentBlock[],
    cta: "Leer el manifiesto completo",
  },

  explore: {
    eyebrow: "Explorar",
    title: "Explora Restore Europa.",
    cards: {
      principles: {
        title: "Principios",
        blurb: "Los dieciséis compromisos, argumentados uno a uno.",
      },
      manifesto: {
        title: "Manifiesto",
        blurb: "El documento fundacional: un preámbulo y veintidós secciones, íntegro.",
      },
      policy: {
        title: "Políticas",
        blurb: "Posiciones trabajadas en diez ámbitos, consultables y fechadas.",
      },
      vision: {
        title: "Visión",
        blurb: "Lo que el programa significaría en una vida corriente.",
      },
      wings: {
        title: "Alas",
        blurb: "El ala nacional en cada una de las cuarenta y siete naciones europeas.",
      },
      about: {
        title: "Quiénes somos",
        blurb: "Quiénes somos y cómo está construido el movimiento.",
      },
    },
  },

  participation: {
    eyebrow: "Tomar parte",
    title: "Qué significa realmente unirse.",
    lede: "Dos maneras de entrar y una carta que escribir. Ninguna cuesta nada, porque el movimiento todavía no puede recibir dinero.",
    ways: {
      member: {
        title: "Miembro",
        note: "La vía ordinaria",
        summary:
          "Quedas contado. Aquí la afiliación es pertenencia y no una suscripción: cuando Restore Europa pueda recibir aportaciones, serán los miembros a quienes se pedirá que sostengan el trabajo.",
        cta: "Solicitar la afiliación",
      },
      volunteer: {
        title: "Voluntario",
        note: "Todo el tiempo que puedas dar",
        summary:
          "La misma solicitud, con el ámbito en el que ayudarías — organización local, escritura, traducción, actos, derecho, técnica, agricultura, construcción, u otra cosa que sepas hacer.",
        cta: "Ofrecerse como voluntario",
      },
      chapter: {
        title: "Un ala donde vives",
        note: "Escribe primero; no hay formulario",
        summary:
          "Estar en el mapa no significa que allí haya ya un ala constituida. Si quieres ayudar a fundar la de tu país, dilo — en esta etapa es lo más útil que nadie puede hacer por el movimiento.",
        cta: "Escribir sobre un ala local",
      },
    },
    closing:
      "No hay ninguna lista de correo a la que apuntarse ni boletín al que suscribirse. La única dirección que este movimiento tiene es la que tú mismo escribiste en una solicitud o en una consulta, y se cifra antes de guardarse.",
  },
};
