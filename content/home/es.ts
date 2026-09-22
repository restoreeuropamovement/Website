import type { ContentBlock } from "@/lib/content-types";
import type { HomeContent } from "./index";

export const home: HomeContent = {
  hero: {
    headline: "Europa merece ser heredada.",
    subheadline: "Por una civilización cristiana, europea y a escala humana.",
    primaryCta: { label: "Lee nuestros principios", href: "/principles" },
    secondaryCta: { label: "Lee el Manifiesto", href: "/manifesto" },
  },

  philosophy: {
    eyebrow: "La cuestión central",
    statement: ["La economía existe para el hombre.", "El hombre no existe para la economía."],
    body: [
      {
        type: "lead",
        text: "Los sistemas políticos y económicos son instrumentos. Existen para hacer posible una buena vida humana —no al revés.",
      },
      {
        type: "paragraph",
        text: "Una civilización no puede medirse solo por lo que produce. El producto interior bruto, el consumo, la productividad, la eficiencia administrativa y la capacidad tecnológica describen los medios de una sociedad. No dicen casi nada sobre si quienes viven en ella pueden formar una familia, conservar un hogar, conocer a sus vecinos, ejercer un oficio o descansar.",
      },
      {
        type: "paragraph",
        text: "Cuando esos medios se toman por fines, las instituciones que sostienen la vida corriente se desmantelan en silencio para servirlos. Eso no es progreso. Es un desplazamiento de la finalidad desde la persona hacia el sistema.",
      },
    ] satisfies readonly ContentBlock[],
    requirements: {
      title: "El ser humano necesita tiempo y espacio para",
      items: [
        "Familia",
        "Amistad",
        "Fe",
        "Comunidad",
        "Naturaleza",
        "Aprendizaje",
        "Oficio",
        "Belleza",
        "Descanso",
      ],
    },
    reductions: {
      title: "Una civilización no puede reducirse a",
      items: [
        "Producto interior bruto",
        "Consumo",
        "Productividad",
        "Eficiencia administrativa",
        "Capacidad tecnológica",
      ],
    },
  },

  principles: {
    title: "Lo que sostenemos, dicho brevemente.",
    allLabel: "Los dieciséis principios",
    readFull: "leer el principio completo",
    items: [
      {
        number: "01",
        title: "Familia y vida humana",
        statement:
          "La sociedad debe hacer materialmente posibles la formación de una familia, la crianza de los hijos y una vida humana con sentido.",
        href: "/principles#family",
      },
      {
        number: "02",
        title: "Nación y continuidad",
        statement:
          "Las naciones europeas tienen el derecho legítimo de preservar su identidad histórica, su cultura y su continuidad.",
        href: "/principles#nation-and-continuity",
      },
      {
        number: "03",
        title: "Propiedad e independencia económica",
        statement:
          "Una sociedad libre exige una propiedad ampliamente repartida y no la dependencia permanente de un número reducido de instituciones.",
        href: "/principles#property",
      },
      {
        number: "04",
        title: "Tecnología a escala humana",
        statement:
          "La tecnología debe reforzar la competencia humana, la autonomía y la comunidad, en lugar de reorganizar la sociedad en torno a la necesidad tecnológica.",
        href: "/principles#technology",
      },
      {
        number: "05",
        title: "Custodia y belleza",
        statement:
          "La tierra, la arquitectura y la naturaleza son herencias que hay que cultivar, proteger y transmitir.",
        href: "/principles#environment",
      },
      {
        number: "06",
        title: "Autoridad y subsidiariedad",
        statement: "La autoridad política debe ejercerse en el nivel competente más bajo.",
        href: "/principles#subsidiarity",
      },
    ],
  },

  lifeAndWork: {
    eyebrow: "Trabajo y vida",
    statement: "No fuimos creados para trabajar hasta morir.",
    body: [
      {
        type: "lead",
        text: "El trabajo posee una dignidad real. Gracias a él las personas adquieren competencia, producen cosas útiles, mantienen a sus familias y participan en la vida de una comunidad.",
      },
      {
        type: "paragraph",
        text: "Pero el trabajo no es la finalidad total de la existencia humana. Un sistema económico está para proporcionar la base material de una vida —no para consumir la vida que debía sostener.",
      },
      {
        type: "paragraph",
        text: "Una sociedad ha perdido el rumbo cuando la gente corriente debe entregar casi todas sus horas de vigilia solo para asegurarse vivienda y comida; cuando los padres apenas ven a sus hijos; cuando las comunidades se vacían porque todo el mundo está agotado.",
      },
    ] satisfies readonly ContentBlock[],
    diagram: {
      top: "Trabajo",
      middle: "sostiene",
      bottom: "Vida",
      separator: ": ",
      orbit: [
        "familia",
        "amistad",
        "fe",
        "comunidad",
        "naturaleza",
        "aprendizaje",
        "oficio",
        "descanso",
      ],
    },
    outcome: {
      title: "Lo que la productividad debería comprar",
      lead: "Los aumentos de lo que una sociedad es capaz de producir deberían aparecer en algún punto de la vida de quienes lo producen.",
      items: [
        "Mayor seguridad frente al infortunio corriente",
        "Un ocio que sea verdaderamente propio",
        "Tiempo con los hijos y con los padres",
        "Autonomía para organizar la propia vida laboral",
        "Independencia respecto de la deuda y la dependencia permanentes",
      ],
    },
  },

  economicOrder: {
    eyebrow: "Orden económico",
    statement: "Mercados sin culto al mercado.",
    body: [
      {
        type: "lead",
        text: "La propiedad privada es legítima. La empresa es legítima. El beneficio es legítimo. El éxito económico es legítimo.",
      },
      {
        type: "paragraph",
        text: "Ninguna de estas cosas es la finalidad más alta de una sociedad. Las instituciones económicas son indispensables y deben permanecer subordinadas al bien común —que no es una restricción impuesta a la empresa desde fuera, sino la razón misma por la que merece la pena protegerla.",
      },
      {
        type: "paragraph",
        text: "Esta no es una posición contra la empresa. Es una posición contra la dominación: contra el punto en el que un mercado deja de ser un medio de intercambio entre muchos participantes y se convierte en un instrumento de control en manos de unos pocos.",
      },
    ] satisfies readonly ContentBlock[],
    pillars: [
      {
        title: "Empresa",
        lead: "Lo que apoyamos",
        items: [
          "Iniciativa empresarial",
          "Inversión productiva",
          "Empresas familiares",
          "Oficios independientes",
          "Pequeñas y medianas empresas",
        ],
      },
      {
        title: "Propiedad",
        lead: "Lo que ampliamos",
        items: [
          "Vivienda en propiedad",
          "Cooperativas",
          "Propiedad de los trabajadores",
          "Explotaciones agrarias familiares",
          "Banca local y regional",
          "Propiedad del capital más repartida",
        ],
      },
      {
        title: "Límites",
        lead: "Lo que contenemos",
        items: [
          "Concentración monopolística",
          "Captura del regulador",
          "Extracción financiera",
          "Mercados inmobiliarios especulativos",
          "Dominio empresarial de la política",
        ],
      },
    ],
    key: "La economía existe para la persona, la familia y la comunidad.",
  },

  technology: {
    eyebrow: "Tecnología",
    statement: "La máquina debe adaptarse al hombre.",
    body: [
      {
        type: "lead",
        text: "Restore Europa no está contra la tecnología. Rechazamos la inevitabilidad tecnológica —la suposición de que todo lo que puede construirse debe adoptarse y de que todo lo que aumenta la eficiencia ha de contar como progreso.",
      },
      {
        type: "paragraph",
        text: "Una tecnología introducida como opcional puede volverse económicamente necesaria. Lo que se vuelve necesario remodela las instituciones, y las instituciones reorganizan después la sociedad en torno a las exigencias de esa tecnología. Al final de esa secuencia, son las personas las que se adaptan a la máquina.",
      },
      {
        type: "paragraph",
        text: "Cada tecnología debe juzgarse por lo que hace con la autonomía humana, la vida familiar, la comunidad, la privacidad, el trabajo con sentido, la competencia humana y la descentralización política.",
      },
    ] satisfies readonly ContentBlock[],
    liberates: {
      title: "Tecnología que libera",
      items: [
        "Medicina",
        "Saneamiento",
        "Ingeniería",
        "Descubrimiento científico",
        "Herramientas útiles",
        "Automatización del trabajo peligroso",
      ],
    },
    dominates: {
      title: "Tecnología que domina",
      items: [
        "Vigilancia masiva",
        "Manipulación de la atención",
        "Dependencia digital forzosa",
        "Control algorítmico",
        "Eliminación innecesaria de la capacidad humana de decidir",
        "Sistemas que hacen imposible participar sin una dependencia tecnológica total",
      ],
    },
    closing: ["No nos oponemos a la tecnología.", "Nos oponemos a la dominación tecnológica."],
  },

  stewardship: {
    eyebrow: "Custodia",
    title: "Custodia",
    body: [
      {
        type: "lead",
        text: "Los bosques, las tierras de cultivo, los ríos, las montañas, las costas, la biodiversidad y los núcleos históricos son bienes heredados. Se recibieron de personas que ya no están y se deben a personas que aún no han nacido.",
      },
      {
        type: "paragraph",
        text: "Eso los convierte en algo distinto de mercancías desechables. Una generación puede usarlos, y debe mantenerlos; no los posee en plena propiedad.",
      },
      {
        type: "paragraph",
        text: "Este no es un argumento que trate a la humanidad como una plaga sobre el mundo natural, ni uno que considere aceptable cualquier destrucción con tal de aumentar la producción a corto plazo. El hombre pertenece a la naturaleza —como su custodio, responsable de lo que deja tras de sí.",
      },
    ] satisfies readonly ContentBlock[],
    categoriesTitle: "Lo que se tiene en custodia",
    categories: [
      { title: "Bosques", note: "Silvicultura responsable y turnos largos." },
      { title: "Agricultura", note: "Suelos sanos y agricultura familiar." },
      { title: "Agua", note: "Ríos, acuíferos y costas limpios." },
      { title: "Biodiversidad", note: "Hábitats conservados intactos, no solo catalogados." },
      { title: "Paisaje", note: "Formas de asentamiento que respetan el territorio." },
      { title: "Arquitectura", note: "Construir para generaciones, no para ciclos." },
      { title: "Producción regional", note: "Cadenas de suministro que una región puede ver." },
      { title: "Durabilidad y reparación", note: "Cosas hechas para ser reparadas." },
    ],
  },

  europe: {
    eyebrow: "Europa",
    title: "Una Europa de naciones.",
    subtitle: "Cooperación sin homogeneización.",
    nations: [
      "Polonia debe seguir siendo reconociblemente polaca.",
      "Italia debe seguir siendo reconociblemente italiana.",
      "Francia debe seguir siendo reconociblemente francesa.",
    ],
    together: "Y juntas siguen siendo europeas.",
    body: [
      {
        type: "lead",
        text: "El principio que debe regir la organización política europea es la subsidiariedad: nada debería decidirse en un nivel superior cuando puede decidirse con competencia en uno inferior.",
      },
      {
        type: "paragraph",
        text: "El municipio no debe ceder innecesariamente ante la región, ni la región ante la nación, ni la nación ante las instituciones continentales. Allí donde una instancia más pequeña puede hacer bien el trabajo, el trabajo le pertenece —no como comodidad administrativa, sino como condición de la libertad política.",
      },
      {
        type: "paragraph",
        text: "Queda con ello mucho que los europeos solo pueden hacer juntos. La identidad nacional y la local siguen teniendo sentido político precisamente porque la cooperación se limita a los asuntos que realmente la exigen.",
      },
    ] satisfies readonly ContentBlock[],
    cooperation: {
      title: "Dónde corresponde la cooperación europea",
      items: [
        "Defensa",
        "Infraestructuras estratégicas",
        "Fronteras",
        "Ciencia",
        "Protección del medio ambiente",
        "Medicina",
        "Resiliencia energética",
        "Industria estratégica",
      ],
    },
  },

  politicalCulture: {
    eyebrow: "Cultura política",
    statement: "El país antes que el partido.",
    body: [
      {
        type: "lead",
        text: "El desacuerdo político es necesario. La guerra partidista permanente no lo es.",
      },
      {
        type: "paragraph",
        text: "Cuando están en juego los intereses duraderos de una nación y de su pueblo —la seguridad nacional, las infraestructuras críticas, la estabilidad demográfica, la protección de las familias, la continuidad constitucional—, los movimientos políticos deberían ser capaces de cooperar por encima de las líneas de partido.",
      },
      {
        type: "paragraph",
        text: "La finalidad de un partido político no es simplemente derrotar a otro partido. Su finalidad es servir a la comunidad política. La oposición es necesaria; la oposición por la oposición es corrosiva.",
      },
    ] satisfies readonly ContentBlock[],
    hierarchy: [
      { label: "Pueblo", note: "La comunidad política misma, a lo largo de las generaciones." },
      { label: "Nación", note: "Su continuidad, su seguridad y su vida común." },
      { label: "Instituciones", note: "Los cargos que tienen a ambos en custodia." },
      { label: "Partido", note: "Un instrumento de servicio, y el último de los cuatro." },
    ],
    clarification:
      "Este es un orden de servicio y de responsabilidad, no una cadena de mando. Describe lo que un partido debe, no una autoridad que un partido pueda reclamar. Nada en él autoriza a gobernar sin consentimiento: la autoridad política sigue respondiendo ante la ley, ante los límites constitucionales y ante el pueblo.",
  },

  restoration: {
    eyebrow: "Restauración",
    statement: "Restauración, no rendición.",
    body: [
      {
        type: "lead",
        text: "La restauración no significa recrear un siglo histórico determinado. El pasado contuvo injusticia, pobreza, violencia y error; nada de ello merece nuestra nostalgia.",
      },
      {
        type: "paragraph",
        text: "Significa recuperar los principios que la sociedad moderna ha desechado y aplicarlos con inteligencia a las condiciones en las que realmente vivimos. La historia no puede revertirse. El rumbo sí puede cambiarse.",
      },
    ] satisfies readonly ContentBlock[],
    closing: "Nuestra herencia no nos correspondía crearla. No nos corresponde desecharla.",
    primaryCta: { label: "Lee el Manifiesto", href: "/manifesto" },
    secondaryCta: { label: "Nuestra visión", href: "/vision" },
  },
};
