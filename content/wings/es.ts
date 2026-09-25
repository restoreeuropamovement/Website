import type { WingsText } from "./index";

export const wingsText: WingsText = {
  meta: {
    eyebrow: "Organización",
    title: "Una sección en cada nación europea.",
    metaTitle: "Secciones nacionales",
    lede: "Restore Europa está organizada como un movimiento de secciones nacionales y no como un único partido continental. Cada nación sostiene la suya — responsable ante quienes viven allí, y ante nadie en el extranjero.",
    description:
      "Restore Europa está organizada como un movimiento de secciones nacionales — una por cada nación europea, cada una responsable ante sus propios miembros y titular solo de aquello que sus agrupaciones y regiones no pueden sostener.",
    intro: [
      {
        type: "lead",
        text: "Nuestro programa sostiene que nada debe gobernarse en un nivel superior cuando puede gobernarse con competencia en uno inferior. Un movimiento que defendiera la subsidiariedad y luego se organizara como un solo cuerpo europeo indiferenciado no merecería ser creído.",
      },
      {
        type: "paragraph",
        text: "Así que el movimiento está construido al revés. La sección nacional es el nivel en el que el trabajo político ocurre de verdad: lleva el programa a las condiciones de un país, concurre a las elecciones conforme al derecho de ese país, tiene sus propios estatutos y responde ante sus propios miembros.",
      },
      {
        type: "paragraph",
        text: "Lo que las secciones tienen en común es el [manifiesto][manifesto] y los [principios][principles] que de él se siguen. Lo que no tienen en común es una única plantilla de política, porque las condiciones de Portugal y las de Estonia no son las mismas condiciones.",
      },
    ],
    note: "Se están constituyendo secciones por todo el continente. Si quiere ayudar a poner en marcha la del país donde vive, dígalo a través de «Participar» — es lo más útil que cualquiera puede hacer por el movimiento en esta etapa.",
    mapLabel:
      "Un mapa de Europa en el que las cuarenta y siete naciones enumeradas en esta página se destacan de las tierras que las rodean.",
    mapCaption:
      "Las naciones destacadas aquí son las cuarenta y siete enumeradas abajo. Estar en el mapa significa que el movimiento se organiza en torno a esa nación, no que su sección esté constituida o activa.",
    mapHint: "Elija una nación en el mapa para abrir su sección.",
  },

  regions: {
    western: "Europa Occidental",
    northern: "Europa del Norte",
    southern: "Europa del Sur",
    "central-eastern": "Europa Central y Oriental",
  },

  countries: {
    albania: "Albania",
    andorra: "Andorra",
    austria: "Austria",
    belgium: "Bélgica",
    "bosnia-and-herzegovina": "Bosnia y Herzegovina",
    bulgaria: "Bulgaria",
    croatia: "Croacia",
    cyprus: "Chipre",
    czechia: "Chequia",
    denmark: "Dinamarca",
    england: "Inglaterra",
    estonia: "Estonia",
    finland: "Finlandia",
    france: "Francia",
    germany: "Alemania",
    greece: "Grecia",
    hungary: "Hungría",
    iceland: "Islandia",
    ireland: "Irlanda",
    italy: "Italia",
    kosovo: "Kosovo",
    latvia: "Letonia",
    liechtenstein: "Liechtenstein",
    lithuania: "Lituania",
    luxembourg: "Luxemburgo",
    malta: "Malta",
    moldova: "Moldavia",
    monaco: "Mónaco",
    montenegro: "Montenegro",
    netherlands: "Países Bajos",
    "north-macedonia": "Macedonia del Norte",
    "northern-ireland": "Irlanda del Norte",
    norway: "Noruega",
    poland: "Polonia",
    portugal: "Portugal",
    romania: "Rumanía",
    russia: "Rusia",
    "san-marino": "San Marino",
    scotland: "Escocia",
    serbia: "Serbia",
    slovakia: "Eslovaquia",
    slovenia: "Eslovenia",
    spain: "España",
    sweden: "Suecia",
    switzerland: "Suiza",
    ukraine: "Ucrania",
    wales: "Gales",
  },

  index: {
    nationCount: { one: "{count} nación", other: "{count} naciones" },
    closingTitle: "{count} naciones. Una sola herencia.",
    closingBody:
      "Cada sección de esta página es un lugar donde el trabajo tiene que hacerlo la gente que vive allí. Si es ahí donde vive usted, el movimiento le necesita más de lo que necesita otro lector.",
    getInvolved: "Participar",
    howWeOrganise: "Cómo nos organizamos",
  },

  wing: {
    backLabel: "Secciones nacionales",
    kicker: "Sección nacional",
    lead: "La sección en {country} es el nivel nacional de Restore Europa — el órgano que lleva nuestro programa a las condiciones políticas propias de {country}, y el nivel en el que los miembros de allí deciden cómo se persigue.",
    body: [
      {
        type: "paragraph",
        text: "Una sección nacional no es una sucursal que recibe instrucciones. Tiene sus propios estatutos, elige a sus propios candidatos, fija sus propias prioridades dentro del programa común y responde ante sus propios miembros y no ante ningún órgano de fuera del país.",
      },
      {
        type: "paragraph",
        text: "Lo que no hace es decidir asuntos que corresponden a un cuerpo más pequeño. Donde una agrupación pueda hacer el trabajo, el trabajo es de la agrupación. La misma contención que el movimiento pide al Estado se la pide primero a sí mismo.",
      },
    ],
    metaTitle: "{country} — Sección nacional",
    metaDescription:
      "La sección de Restore Europa en {country}: el nivel nacional del movimiento, de qué responde y cómo ayudar a constituirla.",
    ogTitle: "Restore Europa {country} — Sección nacional",
    ogDescription: "El nivel nacional de Restore Europa en {country}.",
    notFound: "Sección no encontrada",
    remitHeading: "De qué responde la sección",
    remitLede:
      "Las mismas seis responsabilidades en cada nación. Cómo se cumplen lo deciden los miembros en {country}.",
    takePartHeading: "Ayude a constituir la sección en {country}.",
    takePartBody:
      "Una sección nacional la construyen las personas que viven bajo las condiciones que existe para cambiar. Díganos qué puede hacer — organizar, escribir, aportar experiencia profesional, o simplemente ser contado.",
    getInvolved: "Participar",
    contact: "Contacto",
    neighboursHeading: "Otras secciones en {region}",
  },

  chain: {
    caption: "Dónde se sitúa la sección",
    footnote:
      "Léase de abajo arriba: un nivel asume solo lo que el de debajo no puede sostener con competencia.",
    nationalLabel: "{layer} — {country}",
  },

  layers: {
    chapter: {
      label: "Agrupación local",
      note: "El municipio o el barrio. Reuniones, trabajo político local y elección de candidatos donde hay agrupaciones constituidas.",
    },
    regional: {
      label: "Coordinación regional",
      note: "Apoyo entre agrupaciones y organización compartida. Ninguna competencia que una agrupación pueda sostener por sí sola.",
    },
    national: {
      label: "Sección nacional",
      note: "Estatutos, programa, cumplimiento del derecho nacional de partidos y electoral, y candidaturas nacionales.",
    },
    european: {
      label: "Movimiento europeo",
      note: "Solo lo que las naciones verdaderamente no pueden hacer por separado: defensa, fronteras, infraestructuras estratégicas, ciencia, energía.",
    },
  },

  remit: {
    programme: {
      term: "El programa en su contexto",
      description:
        "Aplicar el manifiesto a las condiciones reales del país — su mercado de vivienda, su demografía, su industria, su paisaje — sin alterar lo que el movimiento sostiene en común.",
    },
    elections: {
      term: "Elecciones y candidatos",
      description:
        "Inscripción, elección de candidatos y concurrencia a las elecciones conforme al derecho nacional de partidos y electoral, en la forma que ese derecho adopte.",
    },
    statutes: {
      term: "Estatutos y cumplimiento",
      description:
        "Sus propios estatutos, su registro de miembros, sus cuentas y sus obligaciones de información, publicados en el país donde opera.",
    },
    chapters: {
      term: "Agrupaciones y regiones",
      description:
        "Constituir agrupaciones locales, apoyar la coordinación regional y resistir la tentación de absorber lo que una u otra puede hacer por sí misma.",
    },
    language: {
      term: "Lengua y publicación",
      description:
        "Producir y mantener el texto de referencia de nuestros documentos en la lengua nacional. Las traducciones son responsabilidad de la sección y no se publican hasta que son buenas.",
    },
    europe: {
      term: "Representación en Europa",
      description:
        "Hablar por sus miembros dentro del movimiento más amplio y cooperar con las demás secciones en los asuntos que realmente lo exigen.",
    },
  },
};
