import type { PolicyText } from "./index";

export const policyText: PolicyText = {
  meta: {
    eyebrow: "Posiciones",
    title: "Catálogo programático",
    metaTitle: "Catálogo programático",
    version: "Versión 0.3",
    framework: "Restauracionismo integral europeo",
    lede: "Este catálogo responde a una pregunta concreta: ¿qué sostiene Restore Europa sobre este asunto? No sustituye al manifiesto. El manifiesto expone la visión del mundo; esto expone posiciones consultables, tema por tema.",
    description:
      "Posiciones consultables, tema por tema, de Restore Europa Movement, cada una con la indicación de hasta qué punto está fijada: orden moral, familia, ciudadanía, economía, tecnología, educación, justicia, sanidad, medio ambiente y política exterior.",
    body: [
      "Allí donde la enseñanza moral católica es clara, Restore Europa la adopta por lo general como criterio moral de partida, y expone por separado su aplicación en el derecho civil. Se deja constancia explícita de una discrepancia: en materia de pena capital, Restore Europa asume la antigua admisión tradicional para casos excepcionales y no la posición abolicionista contemporánea.",
      "El catálogo distingue el orden constitucional al que aspira Restore Europa del derecho europeo tal como hoy está. Varias posiciones —sobre la nacionalidad, sobre la privación de la ciudadanía, sobre la libertad de expresión, sobre la posición pública de la religión y sobre la pena capital— exigirían una reforma constitucional o de los tratados antes de poder promulgarse en determinados Estados europeos.",
      "La versión 0.2 resuelve las cuestiones que la versión 0.1 había dejado abiertas: la relación institucional europea, el asilo, la expulsión, los salarios, la fiscalidad, las pensiones, la vivienda, la representación laboral, la identidad y la moneda digitales, la vigilancia biométrica, la ingeniería genética, la determinación de las penas, el mix energético y todas las cuestiones pendientes de política exterior. Cuando una formulación de la v0.2 haya revisado una entrada anterior, rige el texto más reciente.",
      "La versión 0.3 añade el conjunto de entradas sobre la remigración y su ejecución. Distingue la ciudadanía, el estatuto de residencia, la expulsión penal, el retorno tras el asilo y la revisión de la nacionalidad, en lugar de tratar la remigración como una única potestad indiferenciada, y está redactada como política constitucional y legal propuesta, señalando por separado en cada entrada el derecho europeo e internacional vigente. Dos entradas anteriores —la naturalización y la expulsión de delincuentes extranjeros— quedan integradas en las formulaciones más recientes en lugar de duplicarse junto a ellas.",
    ],
    notice:
      "Todas las cuestiones de este catálogo llevan una posición. Las entradas marcadas como Derivada siguen la orientación del manifiesto sin que su aplicación esté fijada. Las posiciones se revisan a medida que el movimiento decide; la versión y la fecha que figuran arriba indican qué texto está leyendo.",
  },

  labels: {
    version: "Versión",
    date: "Fecha",
    framework: "Marco",
    entries: "Entradas",
  },

  index: {
    legendHeading: "Leyenda de estados",
    showingAll: {
      one: "Se muestra la única posición.",
      other: "Se muestran las {count} posiciones.",
    },
    showingSome: {
      one: "{count} de {total} posiciones coincide.",
      other: "{count} de {total} posiciones coinciden.",
    },
    noMatch: "No hay nada en el catálogo que coincida con eso.",
    showAll: "Mostrar todas las posiciones",
    relevanceHeading: "Primero las mejores coincidencias",
    suggestions: {
      heading: "Posiciones más cercanas",
      body: "Estas son las entradas más próximas a lo que se ha escrito. Puede que no empleen las mismas palabras.",
    },
    openQueue: {
      heading: "Cuestiones abiertas en desarrollo",
      body: "Estas cuestiones constan como no decididas en lugar de deducirse de la ideología. Se enumeran para que las lagunas queden a la vista y no se rellenen en silencio.",
      items: [],
    },
    derivedQueue: {
      heading: "Fijado en la orientación, no en el detalle",
      body: "Todas las cuestiones del catálogo llevan ya una posición. Estas son las cifras contenidas en esas posiciones que no se han fijado, y que no se inventarán antes de que haya fundamento para ellas.",
      items: [
        "Los tipos impositivos y los umbrales exactos",
        "Las horquillas exactas de las penas",
        "El mecanismo de verificación de edad para las redes sociales",
        "Las fechas de emisiones netas cero, los precios del carbono y las cuotas de emisión",
        "Los criterios, cargo por cargo, de los cargos públicos restringidos",
        "Los periodos de gracia para los residentes extranjeros tras una pérdida involuntaria del empleo",
        "Los periodos de ausencia propios de cada permiso y los límites máximos del internamiento",
      ],
    },
  },

  filters: {
    searchLabel: "Buscar posiciones",
    searchPlaceholder: "aborto, subsidiariedad, naturalización…",
    searchButton: "Buscar",
    clear: "Borrar",
    sectionNavLabel: "Filtrar las posiciones por sección",
    sectionHeading: "Sección",
    allSections: "Todas",
    statusNavLabel: "Filtrar las posiciones por estado",
    statusHeading: "Estado",
    anyStatus: "Cualquiera",
  },

  entry: {
    breadcrumb: "Catálogo programático",
    positionHeading: "Posición",
    policiesHeading: "Programa",
    principleHeading: "Principio",
    limitsHeading: "Límites y cuestiones sin resolver",
    basisHeading: "Fundamento en el manifiesto",
    keywordsHeading: "Términos de búsqueda",
    lastUpdatedBefore: "Última actualización:",
    lastUpdatedAfter: ".",
    relatedHeading: "Posiciones relacionadas",
    allPositions: "Todas las posiciones",
    readManifesto: "Lee el manifiesto",
    notFound: "Posición no encontrada",
  },

  statuses: {
    "manifesto-core": {
      label: "Núcleo del manifiesto",
      description:
        "Establecida expresamente por el Manifiesto del restauracionismo integral europeo.",
    },
    agreed: {
      label: "Posición acordada",
      description: "Una posición fijada para este catálogo después de redactarse el manifiesto.",
    },
    derived: {
      label: "Derivada",
      description:
        "Firmemente implícita en el manifiesto o en una posición acordada, pero cuya aplicación no está fijada.",
    },
    open: {
      label: "Abierta",
      description: "No se ha adoptado ninguna posición.",
    },
  },

  categories: {
    constitutional: {
      title: "Orden constitucional, religioso y moral",
      summary:
        "El lugar de la religión en la vida pública, y las cuestiones morales que el derecho no puede eludir.",
    },
    family: {
      title: "Familia, demografía y orden social",
      summary: "El hogar como primera institución, y lo que la política pública le debe.",
    },
    nation: {
      title: "Nación, ciudadanía, inmigración y Europa",
      summary: "La pertenencia a una comunidad política, y el orden europeo entre naciones.",
    },
    economy: {
      title: "Economía, propiedad, finanzas y trabajo",
      summary: "La propiedad, la empresa, el crédito y la dignidad del trabajo.",
    },
    technology: {
      title: "Tecnología, IA y vida a escala humana",
      summary: "Qué puede construirse, qué debería desplegarse y qué debe seguir al alcance.",
    },
    education: {
      title: "Educación, cultura y vida pública",
      summary: "Lo que se transmite a la generación siguiente, y quién lo decide.",
    },
    government: {
      title: "Gobierno, justicia y orden público",
      summary: "La autoridad, sus límites y el trato a quienes infringen la ley.",
    },
    healthcare: {
      title: "Sanidad",
      summary: "El acceso a la atención necesaria, y la ética que en ella se practica.",
    },
    environment: {
      title: "Medio ambiente, territorio y poblamiento",
      summary: "La custodia de una herencia que no hicimos nosotros.",
    },
    "foreign-policy": {
      title: "Política exterior y defensa",
      summary:
        "La independencia estratégica, y una presunción firme en contra de toda guerra innecesaria.",
    },
  },

  search: {
    synonyms: {
      "church-and-state": [
        "Iglesia y Estado",
        "Estado confesional",
        "religión de Estado",
        "Iglesia establecida",
        "integralismo",
        "laicidad",
        "secularismo",
      ],
      abortion: [
        "aborto",
        "interrupción del embarazo",
        "no nacido",
        "defensa de la vida",
        "derecho a la vida",
      ],
      euthanasia: [
        "eutanasia",
        "suicidio asistido",
        "muerte asistida",
        "final de la vida",
        "cuidados paliativos",
      ],
      contraception: [
        "anticoncepción",
        "control de la natalidad",
        "píldora",
        "planificación familiar",
        "preservativos",
        "fertilidad",
      ],
      "same-sex-marriage": [
        "matrimonio homosexual",
        "matrimonio entre personas del mismo sexo",
        "matrimonio igualitario",
        "homosexualidad",
        "uniones civiles",
      ],
      pornography: [
        "pornografía",
        "porno",
        "contenido para adultos",
        "contenido explícito",
        "obscenidad",
      ],
      prostitution: [
        "prostitución",
        "trabajo sexual",
        "burdeles",
        "proxenetismo",
        "trata de personas",
      ],
      drugs: [
        "drogas",
        "estupefacientes",
        "cannabis",
        "marihuana",
        "hachís",
        "despenalización",
      ],
      alcohol: [
        "alcohol",
        "cerveza",
        "vino",
        "bebidas espirituosas",
        "embriaguez",
        "templanza",
      ],
      gambling: [
        "juego de azar",
        "apuestas",
        "apuestas deportivas",
        "casino",
        "lotería",
        "máquinas tragaperras",
        "cajas de botín",
      ],
      blasphemy: [
        "blasfemia",
        "sacrilegio",
        "profanación",
        "vandalismo contra iglesias",
        "ofensa a la religión",
      ],
      family: [
        "familia",
        "hijos",
        "padres",
        "hogar",
        "maternidad",
        "paternidad",
        "cuidado infantil",
      ],
      demography: [
        "demografía",
        "natalidad",
        "tasa de natalidad",
        "fecundidad",
        "declive demográfico",
        "envejecimiento de la población",
      ],
      "sunday-rest": [
        "apertura dominical",
        "descanso dominical",
        "día de descanso",
        "sábado",
        "horarios comerciales",
        "trabajo en domingo",
      ],
      welfare: [
        "asistencia social",
        "prestaciones sociales",
        "seguridad social",
        "red de protección",
        "prestación por desempleo",
        "renta mínima",
      ],
      nation: [
        "nación",
        "pueblo",
        "patria",
        "identidad nacional",
        "patriotismo",
        "continuidad histórica",
      ],
      immigration: [
        "inmigración",
        "migración",
        "migrantes",
        "inmigrantes",
        "recién llegados",
        "control de fronteras",
        "fronteras abiertas",
        "inmigración masiva",
      ],
      "irregular-migration": [
        "migración irregular",
        "inmigración ilegal",
        "estancia irregular",
        "sin papeles",
        "regularización",
        "amnistía",
      ],
      asylum: [
        "asilo",
        "refugiados",
        "solicitantes de asilo",
        "protección internacional",
        "no devolución",
        "tercer país seguro",
      ],
      deportation: [
        "deportación",
        "expulsión",
        "retorno",
        "remigración",
        "repatriación",
        "prohibición de reentrada",
      ],
      citizenship: [
        "ciudadanía",
        "nacionalidad",
        "pasaporte",
        "naturalización",
        "ius soli",
        "ius sanguinis",
      ],
      "dual-citizenship": [
        "doble nacionalidad",
        "doble ciudadanía",
        "segundo pasaporte",
        "renuncia",
      ],
      integration: [
        "integración",
        "asimilación",
        "requisito lingüístico",
        "conocimientos cívicos",
        "examen de ciudadanía",
      ],
      voting: ["derecho de voto", "sufragio", "elecciones", "censo electoral"],
      "european-union": [
        "Unión Europea",
        "UE",
        "Bruselas",
        "Comisión Europea",
        "reforma de los tratados",
        "euroescepticismo",
        "Estados miembros",
      ],
      subsidiarity: [
        "subsidiariedad",
        "descentralización",
        "federalismo",
        "administración local",
        "localismo",
      ],
      economy: [
        "economía",
        "orden económico",
        "capitalismo",
        "socialismo",
        "distributismo",
        "libre mercado",
      ],
      property: [
        "propiedad",
        "patrimonio",
        "pequeños propietarios",
        "cooperativas",
        "propiedad ampliamente repartida",
      ],
      monopolies: [
        "monopolio",
        "monopolios",
        "defensa de la competencia",
        "cárteles",
        "grandes empresas",
        "concentración económica",
      ],
      corporatism: [
        "gremios",
        "cámaras",
        "corporativismo",
        "aprendizaje",
        "oficios",
        "representación profesional",
      ],
      usury: [
        "usura",
        "intereses",
        "tipos de interés",
        "préstamos",
        "crédito",
        "deuda",
        "bancos",
      ],
      housing: [
        "vivienda",
        "viviendas",
        "alquiler",
        "arrendadores",
        "hipotecas",
        "precios de la vivienda",
        "vivienda en propiedad",
        "inquilinos",
      ],
      work: ["trabajo", "empleo", "puestos de trabajo", "trabajadores", "mercado laboral"],
      wages: [
        "salario",
        "salarios",
        "sueldo",
        "salario mínimo",
        "salario justo",
        "salario familiar",
        "remuneración",
      ],
      tax: [
        "impuesto",
        "impuestos",
        "fiscalidad",
        "impuesto sobre la renta",
        "IVA",
        "impuesto de sucesiones",
        "impuesto de sociedades",
        "impuesto sobre el patrimonio",
      ],
      pensions: [
        "pensión",
        "pensiones",
        "jubilación",
        "edad de jubilación",
        "vejez",
        "ahorro para la jubilación",
      ],
      unions: [
        "sindicatos",
        "negociación colectiva",
        "huelgas",
        "comités de empresa",
        "representación de los trabajadores",
      ],
      technology: [
        "tecnología",
        "técnica",
        "digitalización",
        "innovación",
        "grandes plataformas",
        "máquinas",
      ],
      "artificial-intelligence": [
        "inteligencia artificial",
        "aprendizaje automático",
        "algoritmos",
        "chatbots",
        "modelos de lenguaje",
      ],
      automation: [
        "automatización",
        "robots",
        "robótica",
        "descualificación",
        "sustitución de trabajadores por máquinas",
      ],
      cash: [
        "efectivo",
        "dinero en efectivo",
        "billetes",
        "monedas",
        "sociedad sin efectivo",
        "sucursales bancarias",
      ],
      "right-to-repair": [
        "derecho a reparar",
        "reparabilidad",
        "obsolescencia programada",
        "piezas de repuesto",
        "productos desechables",
      ],
      surveillance: [
        "vigilancia",
        "espionaje",
        "privacidad",
        "videovigilancia",
        "conservación de datos",
        "rastreo",
      ],
      "facial-recognition": [
        "reconocimiento facial",
        "biometría",
        "identificación biométrica",
        "escaneo del rostro",
      ],
      "social-media": [
        "redes sociales",
        "teléfonos móviles",
        "tiempo de pantalla",
        "verificación de edad",
        "menores en internet",
        "captura de la atención",
      ],
      "digital-identity": [
        "identidad digital",
        "documento digital",
        "identidad electrónica",
        "documento nacional de identidad",
        "crédito social",
      ],
      "central-bank-digital-currency": [
        "moneda digital de banco central",
        "euro digital",
        "CBDC",
        "dinero programable",
      ],
      cryptocurrency: [
        "criptomoneda",
        "cripto",
        "bitcoin",
        "cadena de bloques",
        "activos digitales",
      ],
      "genetic-engineering": [
        "ingeniería genética",
        "edición genética",
        "CRISPR",
        "bebés a la carta",
        "línea germinal",
        "embriones",
        "eugenesia",
      ],
      transhumanism: [
        "transhumanismo",
        "mejora humana",
        "cibernética",
        "interfaz cerebro-ordenador",
        "implantes",
      ],
      education: [
        "educación",
        "enseñanza",
        "escuela",
        "escuelas",
        "currículo",
        "alumnos",
      ],
      homeschooling: [
        "educación en casa",
        "escolarización en el hogar",
        "enseñanza domiciliaria",
      ],
      "school-choice": [
        "libertad de elección de centro",
        "cheque escolar",
        "colegios privados",
        "colegios concertados",
        "colegios católicos",
        "centros independientes",
      ],
      universities: [
        "universidades",
        "universidad",
        "educación superior",
        "libertad académica",
        "investigación",
      ],
      "religion-in-schools": [
        "enseñanza religiosa",
        "escuelas públicas",
        "cristianismo en la escuela",
        "oración en la escuela",
        "enseñanza laica",
      ],
      "sex-education": [
        "educación sexual",
        "educación afectivo-sexual",
        "derechos de los padres",
        "consentimiento",
      ],
      culture: [
        "cultura",
        "tradición",
        "costumbres",
        "dialectos",
        "folclore",
        "fiestas",
        "homogeneización",
        "globalización",
      ],
      architecture: [
        "arquitectura",
        "edificios",
        "urbanismo",
        "patrimonio",
        "conservación del patrimonio",
        "protección de monumentos",
      ],
      "free-speech": [
        "libertad de expresión",
        "libertad de palabra",
        "censura",
        "discurso de odio",
        "leyes sobre la expresión",
        "libertad de prensa",
        "incitación",
      ],
      prisons: [
        "prisiones",
        "cárcel",
        "encarcelamiento",
        "penas",
        "castigo",
        "reinserción",
        "justicia penal",
      ],
      "death-penalty": ["pena de muerte", "pena capital", "ejecución", "abolición"],
      firearms: [
        "armas de fuego",
        "armas",
        "control de armas",
        "legítima defensa",
        "caza",
      ],
      healthcare: [
        "sanidad",
        "atención sanitaria",
        "hospitales",
        "médicos",
        "medicina",
        "seguro de enfermedad",
      ],
      "medical-ethics": [
        "ética médica",
        "bioética",
        "conciencia",
        "objeción de conciencia",
        "hospitales católicos",
      ],
      environment: [
        "medio ambiente",
        "naturaleza",
        "ecología",
        "conservación de la naturaleza",
        "biodiversidad",
        "contaminación",
        "tierras de cultivo",
        "cuidado de la creación",
      ],
      energy: [
        "energía",
        "electricidad",
        "red eléctrica",
        "precios de la energía",
        "seguridad energética",
        "apagones",
      ],
      "nuclear-power": [
        "energía nuclear",
        "centrales nucleares",
        "reactores",
        "residuos nucleares",
      ],
      "fossil-fuels": [
        "combustibles fósiles",
        "carbón",
        "petróleo",
        "gas natural",
        "gasolina",
        "gasóleo",
        "hidrocarburos",
      ],
      renewables: [
        "energías renovables",
        "solar",
        "fotovoltaica",
        "eólica",
        "aerogeneradores",
        "hidroeléctrica",
        "geotermia",
      ],
      climate: [
        "cambio climático",
        "calentamiento global",
        "carbono",
        "emisiones",
        "neutralidad climática",
        "gases de efecto invernadero",
        "descarbonización",
      ],
      defence: ["defensa", "militar", "ejército", "fuerzas armadas", "rearme"],
      nato: [
        "OTAN",
        "alianza atlántica",
        "artículo 5",
        "defensa colectiva",
        "alianzas militares",
      ],
      russia: ["Rusia", "Federación Rusa", "Moscú", "Kremlin"],
      ukraine: ["Ucrania", "Kiev", "guerra en Ucrania", "negociaciones de paz"],
      "united-states": ["Estados Unidos", "América", "Washington", "atlantismo"],
      china: ["China", "República Popular China", "Pekín", "cadenas de suministro"],
      "israel-and-palestine": ["Israel", "Palestina", "Gaza", "Oriente Medio"],
      "foreign-aid": [
        "ayuda al desarrollo",
        "ayuda humanitaria",
        "ayuda exterior",
        "cooperación internacional",
      ],
      sanctions: [
        "sanciones",
        "embargo",
        "congelación de activos",
        "coerción económica",
        "restricciones comerciales",
      ],
      conscription: [
        "servicio militar obligatorio",
        "servicio militar",
        "servicio nacional",
        "reserva",
        "objeción de conciencia",
        "reclutamiento",
      ],
      "nuclear-weapons": [
        "armas nucleares",
        "armas atómicas",
        "disuasión nuclear",
        "desarme",
        "no proliferación",
        "control de armamentos",
      ],
    },
  },

  entries: {
    "catholic-confessional-state": {
      title: "Estado confesional católico",
      shortAnswer:
        "Restore Europa apoya el reconocimiento constitucional formal del catolicismo como religión pública principal, y rechaza la pretensión de que el Estado pueda ser moral o religiosamente neutral.",
      position: [
        "Restore Europa apoya un orden político confesional católico profundamente arraigado. El Estado debe reconocer formalmente el catolicismo como religión pública principal y no debe pretender neutralidad moral ni religiosa.",
      ],
      policies: [
        "El catolicismo debe recibir reconocimiento constitucional formal.",
        "La enseñanza moral católica puede informar el derecho público y las instituciones públicas.",
        "La Iglesia y el Estado temporal siguen siendo institucionalmente distintos, pero el Estado no es metafísicamente supremo.",
        "Las fiestas católicas, las iglesias, los símbolos, las procesiones, las escuelas y las tradiciones públicas deben protegerse.",
        "El Estado debe cooperar con la Iglesia en materia de familia, educación, moral y cuestiones sociales.",
      ],
      principle:
        "El Estado gobierna los asuntos temporales; la Iglesia gobierna los asuntos espirituales; la autoridad temporal permanece sujeta al orden moral superior.",
      limits: [
        "Restore Europa no apoya la conversión forzosa.",
        "Este modelo no es el gobierno clerical directo de la administración ordinaria del Estado.",
      ],
      keywords: [
        "Estado católico",
        "Estado confesional",
        "integralismo",
        "Iglesia y Estado",
        "religión oficial",
      ],
    },

    abortion: {
      title: "Aborto",
      shortAnswer:
        "Restore Europa sostiene que la vida humana debe protegerse desde la concepción y que el aborto directo electivo debe prohibirse.",
      position: [
        "Restore Europa sigue la enseñanza católica de que la vida humana debe respetarse y protegerse desde la concepción. El aborto directo electivo debe prohibirse.",
      ],
      policies: [
        "Protección jurídica de la vida humana no nacida desde la concepción.",
        "Prohibición del aborto directo electivo.",
        "Apoyo material, médico y social a las mujeres embarazadas y a las familias.",
        "Apoyo a la adopción y a las alternativas prácticas al aborto.",
        "El tratamiento médico destinado a salvar a la madre puede seguir siendo admisible cuando la muerte del hijo no nacido sea un efecto secundario no buscado y no el medio ni el fin pretendidos.",
      ],
      principle:
        "La dignidad humana y el derecho a la vida no empiezan solo cuando el Estado decide reconocerlos.",
      keywords: ["aborto", "no nacido", "concepción", "provida", "interrupción del embarazo"],
    },

    "euthanasia-and-assisted-suicide": {
      title: "Eutanasia y suicidio asistido",
      shortAnswer:
        "Restore Europa se opone a la eutanasia directa y al suicidio asistido, apoya los cuidados paliativos y admite el rechazo de tratamientos extraordinarios o desproporcionados.",
      position: [
        "Restore Europa se opone a la eutanasia directa y al suicidio asistido y apoya los cuidados paliativos, admitiendo a la vez el rechazo de tratamientos extraordinarios o desproporcionados.",
      ],
      policies: [
        "Eutanasia directa prohibida.",
        "Suicidio asistido prohibido.",
        "Dotación sólida de cuidados paliativos y de unidades de atención al final de la vida.",
        "Los pacientes pueden rechazar tratamientos extraordinarios, excesivamente gravosos o desproporcionados.",
        "El alivio del dolor sigue siendo legítimo cuando no se pretende la muerte.",
      ],
      keywords: [
        "eutanasia",
        "suicidio asistido",
        "muerte asistida",
        "cuidados paliativos",
        "final de la vida",
      ],
    },

    "marriage-and-sexual-ethics": {
      title: "Matrimonio y ética sexual",
      shortAnswer:
        "Restore Europa reconoce el matrimonio civil como la unión de un hombre y una mujer, y articula el derecho de familia en torno a la familia natural.",
      position: [
        "Restore Europa reconoce el matrimonio civil exclusivamente como la unión de un hombre y una mujer y sigue la enseñanza moral católica sobre la sexualidad.",
      ],
      policies: [
        "El matrimonio entre personas del mismo sexo no se reconoce jurídicamente como matrimonio.",
        "El derecho de familia se articula en torno a la familia natural de madre, padre e hijos.",
        "No puede obligarse a las instituciones religiosas a reconocer ni a celebrar uniones entre personas del mismo sexo.",
        "La política de adopción debe dar prioridad a la relación del niño con una madre y un padre.",
      ],
      keywords: [
        "matrimonio",
        "matrimonio homosexual",
        "derecho de familia",
        "adopción",
        "matrimonio civil",
      ],
    },

    contraception: {
      title: "Anticoncepción",
      shortAnswer:
        "Restore Europa se opone a la anticoncepción artificial y rechaza una cultura pública que trate la evitación permanente de la fertilidad como fundamento normal de la vida sexual, sin criminalizar la posesión privada por parte de adultos.",
      position: [
        "Restore Europa sigue la enseñanza católica al oponerse a la anticoncepción artificial y rechaza una cultura pública que trate la evitación permanente de la fertilidad como fundamento normal de la vida sexual.",
      ],
      policies: [
        "Ninguna promoción estatal de la anticoncepción artificial.",
        "Ninguna subvención ordinaria con dinero público de la anticoncepción, salvo cuando un medicamento se prescriba genuinamente con una finalidad médica distinta.",
        "Restricciones a la publicidad de anticonceptivos dirigida a menores.",
        "Las escuelas no deben presentar la anticoncepción como la solución por defecto y moralmente neutral a la conducta sexual.",
        "El conocimiento de la fertilidad natural y la planificación familiar natural reciben un trato distinto del de la anticoncepción artificial.",
      ],
      limits: [
        "Esta posición no impone una prohibición penal de la posesión privada de anticonceptivos por parte de adultos.",
      ],
      keywords: [
        "anticoncepción",
        "anticonceptivos",
        "métodos naturales",
        "planificación familiar natural",
        "fertilidad",
      ],
    },

    pornography: {
      title: "Pornografía",
      shortAnswer: "Restore Europa apoya la prohibición legal completa de la pornografía.",
      position: ["Restore Europa apoya la prohibición legal completa de la pornografía."],
      policies: [
        "Producción, financiación, distribución comercial, venta y exhibición pública prohibidas.",
        "Alojamiento en línea y suministro comercial consciente prohibidos.",
        "Posesión o adquisición deliberada de material pornográfico prohibidas.",
        "Las penas más severas se aplican a los productores comerciales, a los distribuidores, a las plataformas que explotan a las personas y al material que implique coacción, trata o menores.",
        "La definición legal debe excluir la medicina legítima, la anatomía, la ciencia, el arte clásico y la literatura no pornográfica.",
      ],
      principle:
        "La sexualidad y el cuerpo humano no deben reducirse a objetos comerciales de estímulo y consumo.",
      keywords: [
        "pornografía",
        "porno",
        "contenido para adultos",
        "contenido explícito",
        "obscenidad",
      ],
    },

    prostitution: {
      title: "Prostitución",
      shortAnswer:
        "Restore Europa apoya la prohibición legal completa de la prostitución y de su facilitación comercial, con apoyo para salir de ella a quienes la abandonan.",
      position: [
        "Restore Europa apoya la prohibición legal completa de la prostitución y de su facilitación comercial.",
      ],
      policies: [
        "Compra de servicios sexuales prohibida.",
        "Venta de servicios sexuales prohibida.",
        "Burdeles, proxenetismo y facilitación comercial prohibidos.",
        "Publicidad de la prostitución prohibida.",
        "La trata con fines sexuales y la explotación coactiva se castigan con especial severidad.",
        "Programas de salida, vivienda, tratamiento de adicciones y ayuda a la formación profesional a disposición de quienes abandonan la prostitución.",
      ],
      keywords: ["prostitución", "burdeles", "trabajo sexual", "proxenetismo", "trata"],
    },

    "recreational-drugs": {
      title: "Drogas recreativas",
      shortAnswer:
        "Restore Europa apoya que los estupefacientes de uso recreativo, incluido el cannabis recreativo, sigan siendo ilegales, con penas más duras para los traficantes que para los consumidores dependientes.",
      position: [
        "Restore Europa apoya por lo general que los estupefacientes de uso recreativo, incluido el cannabis recreativo, sigan siendo ilegales.",
      ],
      policies: [
        "Producción comercial y tráfico prohibidos.",
        "Venta para uso recreativo prohibida.",
        "La posesión sigue siendo ilícita, con penas proporcionadas a la infracción.",
        "Los traficantes y las redes organizadas de tráfico se enfrentan a penas más severas que los consumidores dependientes.",
        "Tratamiento, desintoxicación y rehabilitación disponibles para la adicción.",
        "El uso médico genuino recibe un trato distinto del uso recreativo.",
      ],
      keywords: ["drogas", "cannabis", "marihuana", "estupefacientes", "despenalización"],
    },

    alcohol: {
      title: "Alcohol",
      shortAnswer:
        "El alcohol sigue siendo lícito para los adultos en un consumo moderado. Restore Europa se opone a la embriaguez, al abuso y a las conductas que dañan a terceros.",
      position: [
        "El alcohol sigue siendo legal para los adultos cuando se consume con moderación. Restore Europa se opone a la embriaguez, al abuso y a las conductas que dañan a terceros.",
      ],
      policies: [
        "Venta a menores prohibida.",
        "Conducción bajo los efectos del alcohol y desórdenes públicos relacionados con el alcohol castigados.",
        "Publicidad dirigida a menores restringida.",
        "Tratamiento del alcoholismo apoyado.",
        "El consumo tradicional y moderado sigue siendo lícito.",
      ],
      keywords: ["alcohol", "cerveza", "vino", "embriaguez", "templanza"],
    },

    gambling: {
      title: "Juegos de azar",
      shortAnswer:
        "El juego puede seguir siendo lícito en formas limitadas para adultos, estrictamente regulado frente a la adicción, el fraude y la explotación.",
      position: [
        "El juego puede seguir siendo legal en formas limitadas para adultos, pero debe regularse estrictamente frente a la adicción, el fraude y la explotación.",
      ],
      policies: [
        "Juego de los menores prohibido.",
        "Publicidad dirigida a jóvenes o a personas vulnerables restringida.",
        "Mecánicas de juego depredadoras o deliberadamente manipuladoras restringidas o prohibidas.",
        "Juego en línea de alto riesgo sometido a una regulación estricta.",
        "Sistemas de autoexclusión y de tratamiento de la adicción obligatorios.",
        "El fraude, las operaciones de apuestas ilegales y el amaño de partidos castigados con severidad.",
      ],
      keywords: ["juego", "apuestas", "casino", "apuestas deportivas", "cajas de botín"],
    },

    "blasphemy-and-sacrilege": {
      title: "Blasfemia y sacrilegio",
      shortAnswer:
        "La incredulidad, la crítica y el argumento teológico siguen siendo lícitos. La profanación deliberada de lo sagrado puede prohibirse.",
      position: [
        "Restore Europa distingue la incredulidad y la crítica de la profanación pública deliberada. El ateísmo y el desacuerdo teológico no son en sí mismos delitos, mientras que la profanación deliberada de lo sagrado puede prohibirse.",
      ],
      policies: [
        "El ateísmo y la incredulidad privada siguen siendo lícitos.",
        "La crítica a los responsables de la Iglesia y el debate teológico siguen siendo lícitos.",
        "La profanación deliberada de objetos consagrados, de iglesias o de ritos cristianos sagrados puede tipificarse como delito.",
        "El vandalismo anticristiano sigue siendo punible conforme al derecho penal ordinario, y puede llevar aparejado un elemento agravante de sacrilegio.",
      ],
      principle:
        "Proteger lo sagrado sin criminalizar la duda, el desacuerdo ni la investigación intelectual.",
      keywords: ["blasfemia", "sacrilegio", "ateísmo", "profanación", "vandalismo"],
    },

    family: {
      title: "Familia",
      shortAnswer:
        "La familia formada en torno al matrimonio es la institución social fundamental, y la política pública debe hacer materialmente realistas el matrimonio y la crianza de los hijos.",
      position: [
        "La familia formada en torno al matrimonio entre hombre y mujer, la crianza de los hijos, la obligación entre generaciones y el cuidado de los jóvenes y de los mayores es la institución social fundamental.",
      ],
      policies: [
        "Fiscalidad orientada a la familia.",
        "Apoyo a los padres.",
        "Vivienda familiar asequible.",
        "Empleo estable, y tiempo suficiente al margen de la producción económica.",
        "La política pública debe hacer materialmente realistas el matrimonio y la crianza de los hijos.",
      ],
      keywords: ["familia", "hijos", "matrimonio", "padres", "hogar"],
    },

    "demographic-renewal": {
      title: "Renovación demográfica",
      shortAnswer:
        "Europa debe responder al declive demográfico haciendo viable la formación de familias entre su propia población, y no mediante una inmigración masiva permanente.",
      position: [
        "Europa debe afrontar el declive demográfico principalmente haciendo viables la formación de familias y la crianza de los hijos entre su propia población, en lugar de recurrir a la inmigración masiva permanente como sustituto de los nacimientos.",
      ],
      keywords: ["demografía", "natalidad", "fecundidad", "población", "declive"],
    },

    "sunday-rest-and-trading": {
      title: "Descanso dominical y apertura comercial",
      shortAnswer:
        "El domingo debe restablecerse como el día común de culto, familia y descanso, con la actividad comercial ordinaria sustancialmente restringida.",
      position: [
        "El domingo debe restablecerse como el día común y normal de culto, familia y descanso. La actividad comercial ordinaria debe, por tanto, quedar sustancialmente restringida.",
      ],
      policies: [
        "Los comercios ordinarios permanecen normalmente cerrados los domingos.",
        "El dueño de un pequeño comercio puede optar personalmente por abrir y trabajar, pero no debe exigirse de forma habitual que trabajen los empleados ordinarios.",
        "Los hospitales, los servicios de emergencia, las infraestructuras críticas, el transporte público necesario y las farmacias pueden funcionar.",
        "La hostelería puede funcionar con normas propias, porque la demanda dominical es intrínseca a su función.",
        "Las excepciones deben seguir siendo lo bastante estrechas como para que el domingo no se convierta en un día comercial ordinario.",
      ],
      principle:
        "Un día de descanso compartido protege el culto, la vida familiar y la comunidad frente a la colonización económica total.",
      keywords: [
        "apertura dominical",
        "comercios",
        "domingo",
        "día de descanso",
        "horarios comerciales",
      ],
    },

    "welfare-and-social-assistance": {
      title: "Prestaciones sociales y asistencia social",
      shortAnswer:
        "Una red de protección dirigida principalmente a los ciudadanos, a las familias y a quienes genuinamente no pueden mantenerse, que exprese solidaridad sin convertirse en una dependencia permanente y evitable.",
      position: [
        "Restore Europa apoya una red de protección social dirigida principalmente a los ciudadanos, a las familias y a las personas genuinamente incapaces de mantenerse por sí mismas. Las prestaciones sociales deben expresar solidaridad sin convertirse en un sistema permanente de dependencia evitable.",
      ],
      policies: [
        "Prioridad para los ciudadanos y sus familias, los niños, los cuidadores, las personas con discapacidad, los mayores y los hogares en situación de auténtica dificultad.",
        "De los perceptores en edad de trabajar y aptos para ello se espera normalmente que busquen empleo, formación o rehabilitación.",
        "De los no ciudadanos se espera normalmente que trabajen y se mantengan por sí mismos, en lugar de emigrar para acceder a prestaciones a largo plazo.",
        "Las prestaciones contributivas pueden seguir estando a disposición de los trabajadores extranjeros legales que hayan cotizado efectivamente al sistema correspondiente.",
        "El fraude en las prestaciones da lugar a la devolución y a sanciones proporcionadas.",
        "Las instituciones benéficas católicas, cristianas e históricas pueden desempeñar un papel importante, con auditoría transparente de los fondos públicos.",
      ],
      principle:
        "La familia, la parroquia y las instituciones locales deben actuar antes que una burocracia central remota, allí donde puedan hacerlo con competencia.",
      keywords: [
        "prestaciones sociales",
        "ayudas",
        "asistencia social",
        "red de protección",
        "dependencia",
      ],
    },

    "nation-and-historical-continuity": {
      title: "Nación y continuidad histórica",
      shortAnswer:
        "La nación es una comunidad histórica entre generaciones, y los pueblos europeos tienen un interés legítimo en mantener la continuidad cultural e histórica.",
      position: [
        "La nación es una comunidad histórica entre generaciones moldeada por la memoria, la lengua, las costumbres, las instituciones, el territorio y la conciencia de un destino común. Los pueblos europeos tienen un interés legítimo en mantener la continuidad cultural e histórica.",
      ],
      keywords: ["nación", "pueblo", "patria", "continuidad", "identidad"],
    },

    immigration: {
      title: "Inmigración",
      shortAnswer:
        "La inmigración debe limitarse a niveles compatibles con una integración real, la estabilidad social, la capacidad de las infraestructuras y la continuidad demográfica.",
      position: [
        "La inmigración debe limitarse a niveles compatibles con una integración real, la estabilidad social, la capacidad de las infraestructuras y la continuidad demográfica y cultural de la nación de acogida.",
      ],
      policies: [
        "Las fronteras siguen siendo instituciones políticas legítimas.",
        "La política migratoria debe servir al bien común a largo plazo de la nación de acogida.",
        "Las obligaciones humanitarias no exigen renunciar al control sobre la política demográfica.",
      ],
      keywords: ["inmigración", "migración", "fronteras", "integración", "asilo"],
    },

    "asylum-and-international-protection": {
      title: "Asilo y protección internacional",
      shortAnswer:
        "El asilo es protección frente a una persecución real o a un peligro grave, no un mecanismo general para elegir el país de asentamiento preferido.",
      position: [
        "La protección debe prestarse normalmente en el primer país genuinamente seguro disponible y, cuando sea posible, lo más cerca que se pueda de la región de origen de la persona desplazada. Los Estados europeos conservan el derecho a rechazar las solicitudes infundadas y a expulsar a las personas que carezcan de base legal para permanecer.",
      ],
      policies: [
        "Mantener el acceso al asilo para las personas que aleguen de forma creíble persecución o daños graves.",
        "Exigir un registro rápido, la comprobación de la identidad y un control de seguridad.",
        "Emplear procedimientos acelerados para los solicitantes procedentes de países generalmente seguros, preservando al mismo tiempo la oportunidad individual de demostrar que esa presunción no les es aplicable.",
        "Aplicar con firmeza el principio del primer país seguro o del tercer país seguro allí donde haya efectivamente una protección eficaz.",
        "Distinguir a los refugiados de los migrantes económicos ordinarios; la penuria económica por sí sola no es asilo.",
        "Dar prioridad a la ayuda humanitaria en la región y al reasentamiento controlado de los refugiados especialmente vulnerables cuando proceda.",
        "Los solicitantes rechazados deben ser expulsados sin demora una vez agotados los recursos de revisión aplicables.",
        "La protección temporal por causa de guerra debe seguir siendo temporal y revisarse cuando las condiciones cambien de manera sustancial.",
        "Los menores no acompañados y las personas con vulnerabilidades reales reciben garantías específicas.",
      ],
      keywords: [
        "asilo",
        "refugiados",
        "primer país seguro",
        "tercer país seguro",
        "no devolución",
        "protección temporal",
        "retorno",
      ],
    },

    "asylum-work-and-public-assistance": {
      title: "Asilo, trabajo y asistencia pública",
      shortAnswer:
        "La protección debe facilitar la autosuficiencia en lugar de una dependencia permanente de las prestaciones sociales.",
      position: [
        "De las personas admitidas por razones de protección que sean capaces de trabajar debe esperarse que se mantengan económicamente por sí mismas con la mayor rapidez razonablemente posible. Las solicitudes pendientes no deben abrir automáticamente el acceso a todo el sistema ordinario de prestaciones sociales.",
      ],
      policies: [
        "Permitir el trabajo legal tan pronto como sea administrativamente viable.",
        "Esperar de los adultos aptos para trabajar que busquen empleo una vez que este sea legalmente accesible.",
        "Mientras se resuelve la solicitud, concentrar la asistencia en el alojamiento necesario, la alimentación, la atención sanitaria esencial y las necesidades básicas, antes que en ayudas en efectivo sin restricciones.",
        "Admitir requisitos proporcionados de trabajo, de idioma y de cooperación cuando sean legales.",
        "No crear un acceso preferente a prestaciones públicas escasas por delante de los ciudadanos en situación de necesidad comparable.",
        "Poner fin al apoyo orientado a la integración tras la denegación definitiva y trasladar a la persona al sistema de retorno.",
        "Preservar las necesidades de urgencia y el apoyo adecuado a los niños y a las personas genuinamente incapaces de mantenerse por sí mismas.",
      ],
      keywords: [
        "asilo",
        "prestaciones sociales",
        "obligación de trabajar",
        "autosuficiencia",
        "refugiados",
        "asistencia pública",
        "protección temporal",
      ],
    },

    "deportation-of-criminal-offenders": {
      title: "Expulsión penal y prohibiciones de reentrada",
      shortAnswer:
        "Los delincuentes extranjeros graves son expulsados al término del proceso penal y quedan excluidos de forma permanente; las infracciones ordinarias del régimen de residencia conllevan por regla general una prohibición de reentrada de diez años.",
      position: [
        "La ciudadanía y la residencia extranjera son estatutos distintos. La comisión de delitos dolosos graves por parte de un no ciudadano puede justificar la extinción de la residencia tras una condena dictada en un proceso penal con todas las garantías.",
        "La residencia extranjera no confiere el mismo derecho permanente a permanecer que la ciudadanía. El extranjero condenado por un delito grave de los previstos debe perder por regla general la residencia y ser expulsado al término del procedimiento penal que corresponda.",
      ],
      policies: [
        "Exigir una condena firme y conforme a derecho por el delito invocado antes de la expulsión por razones penales.",
        "Los delitos violentos graves, los delitos sexuales graves, el robo, la delincuencia organizada, el terrorismo, la trata, la distribución grave de drogas, el fraude grave y los delitos dolosos comparables activan presuntivamente la expulsión.",
        "La reincidencia puede justificar la expulsión aun cuando los delitos aislados sean menos graves.",
        "Tratar el homicidio doloso, la agresión sexual, los abusos sexuales graves a menores, el terrorismo, la trata grave, la violencia organizada grave y los delitos graves comparables como supuestos que activan presuntivamente la prohibición permanente.",
        "Aplicar una prohibición permanente de reentrada a las expulsiones por delincuencia grave que cumplan los requisitos y a las motivadas por razones graves de seguridad nacional.",
        "Aplicar con carácter ordinario una prohibición de reentrada de diez años a las infracciones graves del régimen ordinario de residencia, como la entrada irregular dolosa, la permanencia irregular reiterada o la elusión dolosa de una resolución de retorno, con sujeción a las reglas de proporcionalidad previstas en la ley de desarrollo.",
        "Permitir sanciones más breves para las infracciones del régimen de residencia realmente menores o puramente técnicas, cuando una prohibición de diez años resultara desproporcionada.",
        "Ejecutar la expulsión tras el cumplimiento de la pena privativa de libertad, salvo que quepa legalmente un traslado o una expulsión anticipada.",
        "Las infracciones administrativas menores o de escasa entidad no activan automáticamente la expulsión permanente.",
        "Mantener a los ciudadanos naturalizados en el marco específico de la revocación de la ciudadanía, salvo que la ciudadanía haya sido previamente retirada conforme a derecho.",
        "Los ciudadanos no pueden ser expulsados de su propio país.",
      ],
      keywords: [
        "expulsión",
        "expulsión penal",
        "delincuentes extranjeros",
        "deportación",
        "prohibición de reentrada",
        "diez años",
        "prohibición permanente",
        "homicidio",
        "agresión sexual",
        "terrorismo",
        "permanencia irregular",
        "permiso de residencia",
        "orden público",
        "retorno",
      ],
    },

    "citizenship-general-principle": {
      title: "Ciudadanía: principio general",
      shortAnswer:
        "La ciudadanía es la pertenencia a una comunidad política histórica y no una consecuencia de la residencia, y Restore Europa rechaza como regla general la ciudadanía automática por nacimiento en el territorio.",
      position: [
        "La ciudadanía es la pertenencia a una comunidad política histórica, y no la mera residencia. Restore Europa rechaza como regla general la ciudadanía automática por nacimiento en el territorio.",
      ],
      policies: [
        "La ciudadanía se transmite normalmente por filiación de padres ciudadanos.",
        "El nacimiento en territorio nacional de padres no ciudadanos no confiere por sí solo la ciudadanía.",
        "La naturalización exige una asimilación lingüística, cultural, cívica y patriótica profunda.",
        "La naturalización es una admisión en la comunidad política nacional y no un derecho automático generado por la residencia.",
      ],
      keywords: [
        "ciudadanía",
        "nacionalidad por nacimiento",
        "ius soli",
        "ius sanguinis",
        "nacionalidad",
      ],
    },

    naturalization: {
      title: "Asimilación y naturalización",
      shortAnswer:
        "La ciudadanía exige un estándar sensiblemente más alto que la residencia ordinaria o la integración: una asimilación lograda en la comunidad política nacional.",
      position: [
        "La vía normal de naturalización de Restore Europa exige aproximadamente quince años de residencia legal antes de poder presentar la solicitud, junto con unas exigencias de asimilación excepcionalmente rigurosas.",
        "La naturalización no es una consecuencia automática del tiempo transcurrido en el país. El solicitante debe cumplir exigencias rigurosas de idioma, de conocimientos cívicos, de conducta y de vínculo antes de que se le conceda la ciudadanía.",
      ],
      policies: [
        "Mantener la vía ordinaria de residencia de alrededor de quince años prevista en el catálogo antes de poder solicitar la naturalización ordinaria.",
        "Exigir un dominio práctico avanzado de la lengua nacional y un conocimiento sustancial de la historia, las instituciones y el orden constitucional.",
        "Respeto al orden constitucional y al carácter cristiano e histórico del país.",
        "Exigir una conducta duraderamente conforme a la ley y declaraciones veraces ante las autoridades de inmigración y de ciudadanía.",
        "Exigir la prueba de un vínculo duradero con el país, y no solo de la residencia.",
        "Admitir exámenes objetivos de idioma y de conocimientos cívicos.",
        "Denegar la naturalización cuando subsistan como impedimento la delincuencia grave, el terrorismo, el fraude grave o el engaño doloso sobre la identidad.",
        "No convertir una reverificación cívica periódica en causa automática de expulsión de quien haya adquirido la ciudadanía de forma legal y honesta; la revocación posterior a la naturalización se rige por entradas específicas.",
      ],
      limits: ["Quince años de residencia no garantizan automáticamente la naturalización."],
      keywords: [
        "naturalización",
        "asimilación",
        "residencia",
        "idioma",
        "requisito de idioma",
        "conocimientos cívicos",
        "examen de ciudadanía",
        "vínculo con el país",
      ],
    },

    "citizenship-by-descent": {
      title: "Ciudadanía por descendencia y recuperación",
      shortAnswer:
        "La descendencia nacional documentada puede justificar una vía de recuperación sustancialmente más rápida que la naturalización ordinaria.",
      position: [
        "La descendencia nacional documentada puede justificar una vía de recuperación de la ciudadanía sustancialmente más rápida que la naturalización ordinaria.",
      ],
      policies: [
        "El hijo de un ciudadano hereda por regla general la ciudadanía de ese progenitor, con independencia del lugar de nacimiento.",
        "La persona con filiación nacional documentada o con una descendencia nacional próxima puede acogerse a una vía facilitada de retorno o de recuperación.",
        "La propuesta de trabajo para esa vía facilitada es de aproximadamente cinco años, en lugar de los quince ordinarios.",
      ],
      keywords: ["descendencia", "ascendencia", "recuperación", "repatriación", "ius sanguinis"],
    },

    "voting-rights-after-naturalization": {
      title: "Derecho de voto tras la naturalización",
      shortAnswer:
        "Los ciudadanos naturalizados deben esperar cuatro años más desde la naturalización antes de obtener el pleno derecho de voto.",
      position: [
        "Los ciudadanos naturalizados no deben obtener el derecho de voto de manera inmediata al naturalizarse. Normalmente debe mediar un periodo adicional de cuatro años de ciudadanía antes del pleno derecho de voto.",
      ],
      policies: [
        "Vía ordinaria: quince años de residencia legal antes de poder solicitar la naturalización.",
        "Tras la naturalización: cuatro años adicionales antes del pleno derecho de voto.",
      ],
      keywords: [
        "derecho de voto",
        "sufragio",
        "censo electoral",
        "elecciones",
        "periodo de espera",
      ],
    },

    "high-public-office": {
      title: "Acceso a los altos cargos del Estado",
      shortAnswer:
        "Los más altos cargos de la nación se reservan a los ciudadanos con un vínculo de nacimiento, descendencia e historia con el país, y no a la ciudadanía adquirida por sí sola.",
      position: [
        "La ciudadanía ordinaria y la elegibilidad para los supremos cargos constitucionales, de seguridad y militares son cuestiones distintas. La naturalización por sí sola no genera elegibilidad para los más altos cargos del Estado.",
      ],
      policies: [
        "Aplicar requisitos reforzados de elegibilidad a la jefatura del Estado, la jefatura del Gobierno, la dirección de la defensa y de la seguridad interior, el alto mando de las fuerzas armadas, la dirección de los servicios de inteligencia y demás cargos de autoridad constitucional excepcional.",
        "Exigir la ciudadanía de origen y un vínculo nacional ancestral o histórico demostrable.",
        "Exigir raíces nacionales sustanciales, dominio de la lengua nacional y una trayectoria acreditada de lealtad al orden constitucional y nacional.",
        "La naturalización ordinaria, sea cual sea su duración, no confiere por sí sola elegibilidad para estos cargos.",
        "Definir con precisión por ley qué cargos quedan comprendidos en la categoría restringida.",
      ],
      keywords: [
        "altos cargos del Estado",
        "presidente",
        "jefe de Gobierno",
        "ciudadanía de origen",
        "descendencia",
        "continuidad nacional",
        "elegibilidad",
        "ministros",
        "lealtad",
      ],
    },

    "dual-citizenship": {
      title: "Doble nacionalidad",
      shortAnswer:
        "La doble nacionalidad entre países europeos se acepta por lo general; de los ciudadanos no europeos que se naturalicen en una nación europea se esperaría la renuncia a su nacionalidad anterior.",
      position: [
        "Restore Europa acepta por lo general la doble nacionalidad entre países europeos, pero espera que los ciudadanos no europeos que se naturalicen en una nación europea renuncien a su anterior nacionalidad no europea.",
      ],
      policies: [
        "La doble nacionalidad entre europeos se permite por lo general.",
        "De los ciudadanos no europeos que se naturalicen se exige normalmente la renuncia a su nacionalidad anterior.",
        "Pueden considerarse excepciones cuando la renuncia sea jurídicamente imposible o generase una dificultad excepcional.",
      ],
      principle:
        "Las naciones europeas, distintas entre sí, son comunidades políticas dentro de una civilización europea más amplia.",
      keywords: ["doble nacionalidad", "doble ciudadanía", "renuncia", "segundo pasaporte"],
    },

    "revocation-of-naturalized-citizenship": {
      title: "Revocación de la ciudadanía adquirida",
      shortAnswer:
        "La ciudadanía adquirida por naturalización puede revocarse judicialmente en casos de excepcional gravedad, como la naturalización fraudulenta, la traición o el terrorismo.",
      position: [
        "La ciudadanía adquirida por naturalización puede revocarse en circunstancias de excepcional gravedad, como la naturalización fraudulenta, la traición, el terrorismo u otras conductas, definidas de forma estricta, gravemente lesivas para el Estado.",
      ],
      policies: [
        "La revocación debe seguir un procedimiento judicial.",
        "Las causas deben estar definidas por ley y no quedar a una discrecionalidad gubernativa imprecisa.",
        "Se exigen un elevado estándar probatorio y un derecho de recurso.",
        "El fraude en el procedimiento de naturalización es causa directa de revocación.",
        "La traición y el terrorismo pueden justificar la revocación.",
        "Restore Europa es partidario de que la revocación sea posible en casos de excepcional gravedad incluso cuando pudiera resultar de ella la apatridia.",
      ],
      keywords: [
        "revocación",
        "privación de la nacionalidad",
        "apatridia",
        "traición",
        "terrorismo",
      ],
    },

    "remigration-general-principle": {
      title: "Remigración: principio general",
      shortAnswer:
        "La remigración es el retorno organizado de quienes carecen de base legal para permanecer o la pierden, junto con una política de retorno voluntario, la aplicación estricta de las condiciones de residencia y la revisión de los estatutos obtenidos mediante fraude o mediante una irregularidad cualificada.",
      position: [
        "Restore Europa entiende el estatuto migratorio como condicionado: depende de la entrada legal, del cumplimiento de las condiciones de residencia, del orden público y, cuando proceda, de una integración lograda. La remigración no se define como la expulsión por razón de la raza; opera a través del estatuto jurídico, el historial migratorio, la conducta penal, el fraude, los motivos de seguridad y unas condiciones de residencia claramente definidas.",
      ],
      policies: [
        "Ejecutar las resoluciones firmes de retorno frente a quienes carecen de derecho legal a permanecer.",
        "Recurrir al retorno voluntario cuando sea realista y al retorno forzoso cuando la base legal de la residencia se haya extinguido.",
        "Revisar la residencia o la ciudadanía obtenidas mediante fraude o engaño relevantes.",
        "Permitir la retirada del estatuto de residencia del extranjero por delitos graves, amenazas graves para la seguridad y otras causas expresamente definidas por ley.",
        "Mantener la ciudadanía, la residencia permanente, la residencia temporal, el estatuto de asilo y la presencia irregular como categorías jurídicamente distintas.",
        "No tratar el mero transcurso prolongado del tiempo como fuente de un derecho automático a permanecer cuando el estatuto subyacente sigue siendo temporal o condicionado.",
        "Aplicar procedimientos y requisitos probatorios individuales, y no la expulsión colectiva por la mera categoría étnica o racial.",
      ],
      keywords: [
        "remigración",
        "retorno",
        "aplicación del derecho de extranjería",
        "residencia",
        "expulsión",
        "integración",
        "ciudadanía",
      ],
    },

    "integration-general-definition": {
      title: "Integración: definición general",
      shortAnswer:
        "La integración es la incorporación lingüística, cívica, económica y social demostrable a la nación de acogida; la residencia por sí sola no basta.",
      position: [
        "La integración se mide por la conducta, la competencia y una participación duradera. Es distinta de la ciudadanía y del estándar superior de asimilación exigido para la naturalización.",
      ],
      policies: [
        "Exigir un dominio funcional de la lengua nacional principal, normalmente en torno a B1–B2 según el estatuto que se solicite.",
        "Exigir un conocimiento básico de la historia nacional, las instituciones, el derecho, los deberes cívicos y el marco constitucional.",
        "Tratar la delincuencia grave y persistente, la delincuencia organizada, el terrorismo, el fraude grave y el fraude migratorio doloso como indicios firmes en contra de la integración.",
        "Esperar de los extranjeros capacitados y en edad de trabajar que participen mediante el empleo, el trabajo por cuenta propia, la educación, la formación profesional, el cuidado familiar reconocido u otra contribución legítima.",
        "Considerar la dependencia prolongada y evitable de la asistencia pública como factor negativo para la integración, exceptuando la incapacidad real, la discapacidad, la jubilación, el desempleo temporal y el cuidado familiar relevante.",
        "Admitir la prueba de la participación local a través del trabajo, la educación, las parroquias, las asociaciones, los clubes y otras instituciones de la comunidad, sin hacer obligatoria la pertenencia a ninguna organización determinada.",
        "Exigir el respeto al orden constitucional legítimo sin imponer una conformidad ideológica con cada política de gobierno.",
        "Valorar la integración sobre elementos individuales documentados y no sobre la raza.",
      ],
      keywords: [
        "integración",
        "idioma",
        "conocimientos cívicos",
        "autosuficiencia",
        "residencia",
        "orden público",
        "participación",
      ],
    },

    "regularized-irregular-immigration": {
      title: "Inmigración irregular regularizada",
      shortAnswer:
        "Una legalización posterior no borra automáticamente un historial acreditado de entrada o permanencia irregulares; los casos ya regularizados pueden revisarse individualmente conforme al nuevo marco jurídico.",
      position: [
        "Restore Europa rechaza la tesis de que toda regularización o amnistía del pasado deba considerarse constitucionalmente intangible. Cuando documentos fiables acrediten una entrada irregular anterior, una permanencia irregular, una identidad falsa u otra irregularidad relevante, el historial de residencia que de ello derive puede revisarse individualmente.",
      ],
      policies: [
        "Permitir la revisión individual de los estatutos de residencia nacidos de amnistías anteriores, regularizaciones masivas o programas excepcionales comparables.",
        "Exigir que sea el Estado quien pruebe el historial migratorio pertinente mediante documentos y pruebas; la irregularidad no puede simplemente presumirse.",
        "Revisar el expediente originario completo, incluida la identidad, el historial de entrada, el historial de asilo, la base de la residencia, los permisos posteriores y el eventual procedimiento de naturalización.",
        "Distinguir la mera irregularidad pasada del fraude relevante, la identidad falsa o la ocultación, que pueden acarrear consecuencias más severas.",
        "Si el estatuto supera la revisión conforme a la nueva ley, sigue siendo válido con sujeción a las condiciones ordinarias de residencia.",
        "Si el estatuto no se habría concedido conforme a la nueva regla aplicable y la Constitución admite una revisión retroactiva, pueden seguir la retirada y el retorno, mediante resolución individual y un procedimiento de recurso.",
      ],
      limits: [
        "Esta entrada no considera fraudulento a todo ciudadano naturalizado por el mero hecho de que un periodo anterior de residencia fuera irregular; el fraude y la regularización legítima siguen siendo conceptos distintos.",
      ],
      keywords: [
        "regularización",
        "amnistía",
        "entrada irregular",
        "permanencia irregular",
        "revisión del estatuto",
        "historial migratorio",
      ],
    },

    "employment-and-self-sufficiency-of-foreign-residents": {
      title: "Empleo y autosuficiencia de los residentes extranjeros",
      shortAnswer:
        "De los residentes extranjeros capacitados se espera que sigan siendo económicamente autosuficientes, y por regla general no les corresponde el mismo derecho asistencial indefinido que a los ciudadanos.",
      position: [
        "La residencia extranjera se concede para fines determinados y sigue siendo condicionada. Los residentes en condiciones de trabajar deberían normalmente mantenerse mediante el empleo, el trabajo por cuenta propia, el estudio, la formación o una actividad de cuidado reconocida, y no mediante una dependencia permanente y evitable de la asistencia pública.",
      ],
      policies: [
        "Exigir que los extranjeros con residencia temporal y ordinaria mantengan medios de subsistencia lícitos y suficientes, con periodos de gracia razonables tras una pérdida involuntaria del empleo.",
        "Admitir como participación legítima el empleo, el trabajo por cuenta propia, la educación a tiempo completo, la formación profesional y una actividad relevante de cuidado familiar.",
        "Prever excepciones por discapacidad real, incapacidad, jubilación, minoría de edad y dificultades temporales pese a esfuerzos razonables por encontrar trabajo.",
        "Limitar la asistencia ordinaria no urgente para los extranjeros allí donde sea constitucional y legalmente admisible.",
        "Preservar la alimentación, el alojamiento y la atención médica necesaria en caso de emergencia cuando su denegación vulnerara obligaciones jurídicas o humanitarias elementales.",
        "Tratar la dependencia reiterada y evitable de la asistencia pública como posible causa de revisión de la residencia cuando el permiso estuviera expresamente condicionado a la autosuficiencia.",
        "Mantener aparte la ciudadanía adquirida: el mero desempleo no convierte automáticamente a un ciudadano en residente irregular.",
      ],
      limits: [
        "El periodo exacto de gracia tras la pérdida del empleo debería fijarse en la ley de desarrollo y no quedar rígidamente incorporado al principio constitucional.",
      ],
      keywords: [
        "autosuficiencia",
        "empleo",
        "asistencia pública",
        "residentes extranjeros",
        "permiso de residencia",
        "participación económica",
      ],
    },

    "probationary-naturalization": {
      title: "Naturalización en periodo de prueba",
      shortAnswer:
        "La ciudadanía recién adquirida queda sujeta a un periodo de prueba de diez años, con reglas de revocación reforzadas por causas graves definidas de forma estricta.",
      position: [
        "La naturalización constituye la ciudadanía, pero durante los diez primeros años el Estado conserva una potestad reforzada para reabrir el procedimiento y revocar la ciudadanía adquirida por determinadas conductas graves o por vicios relevantes en el fundamento de la naturalización.",
      ],
      policies: [
        "Fijar el periodo de prueba en diez años desde la fecha de adquisición de la ciudadanía.",
        "Permitir la revocación por fraude relevante en la naturalización, identidad falsa u ocultación dolosa de un hecho excluyente.",
        "Permitir la revocación por los delitos de excepcional gravedad cometidos tras la naturalización, según se definen en la entrada específica sobre ciudadanía y delincuencia grave.",
        "Permitir la revocación por terrorismo, traición o conducta que constituya una amenaza de excepcional gravedad para la seguridad nacional, cuando la ley lo prevea expresamente.",
        "Exigir un procedimiento individual judicial o cuasijudicial, la prueba de la causa legal y un derecho efectivo de recurso.",
        "No convertir el mero desempleo, la discrepancia política o un examen cívico no superado en causa automática de revocación por sí solos.",
        "Transcurridos los diez años, rigen las protecciones ordinarias de la ciudadanía, sin perjuicio de las causas permanentes basadas en el fraude y de las demás causas excepcionales de revocación adoptadas en otras entradas del catálogo.",
      ],
      keywords: [
        "ciudadanía en periodo de prueba",
        "naturalización",
        "revocación",
        "diez años",
        "fraude",
        "delito grave",
      ],
    },

    "residence-permit-withdrawal": {
      title: "Retirada del permiso de residencia",
      shortAnswer:
        "El estatuto de residencia del extranjero se pierde con mayor facilidad que la ciudadanía y puede retirarse cuando se incumplan de forma relevante condiciones definidas de admisión o de permanencia.",
      position: [
        "La residencia es una autorización jurídica condicionada. La delincuencia grave, el fraude relevante, las amenazas graves para la seguridad y el incumplimiento persistente de condiciones de residencia expresamente enunciadas pueden justificar la retirada y el retorno.",
      ],
      policies: [
        "Retirar el permiso o denegar su renovación en caso de fraude relevante sobre la identidad o la residencia.",
        "Retirar la residencia en caso de delito violento o sexual grave, terrorismo, delincuencia organizada grave y conductas graves comparables, sin perjuicio del marco específico de la expulsión penal.",
        "Retirar la residencia cuando la persona constituya una amenaza grave y acreditada para la seguridad nacional.",
        "Permitir la revisión en caso de dependencia asistencial reiterada y evitable, cuando la autosuficiencia fuera condición expresa del permiso.",
        "Permitir la revisión en caso de incumplimiento grave y persistente de los requisitos de integración aplicables, cuando el estatuto estuviera expresamente condicionado a la integración.",
        "Admitir que una ausencia prolongada extinga el estatuto de residencia; la ley ordinaria de desarrollo debería fijar el umbral por tipo de permiso dentro de una horquilla aproximada de dos a cinco años.",
        "Comunicar los motivos y garantizar una oportunidad individual de impugnar la resolución.",
      ],
      keywords: [
        "permiso de residencia",
        "retirada",
        "fraude",
        "delito grave",
        "integración",
        "ausencia",
        "seguridad pública",
      ],
    },

    "voluntary-return-and-reintegration": {
      title: "Retorno voluntario y reinserción",
      shortAnswer:
        "El Estado puede financiar una ayuda modesta y única al retorno cuando un extranjero regrese de forma voluntaria y estable al país de su nacionalidad o a otro país facultado para admitirlo.",
      position: [
        "El retorno voluntario es preferible a una expulsión forzosa costosa cuando logre el mismo fin legítimo de manera rápida y fiable.",
      ],
      policies: [
        "Sufragar gastos de viaje razonables dentro de un programa aprobado de retorno voluntario.",
        "Admitir una ayuda limitada y única al traslado o a la reinserción cuando aumente de forma relevante la probabilidad de un retorno duradero.",
        "Condicionar la ayuda a la salida efectiva y al cumplimiento del acuerdo de retorno pactado.",
        "No crear un derecho a ayudas de retorno repetidas.",
        "Cuando exista una prohibición de reentrada, la salida voluntaria no la cancela automáticamente, salvo que la ley disponga expresamente otra cosa.",
        "Coordinarse, cuando sea necesario, con las autoridades del país de destino o con organizaciones reconocidas para obtener los documentos de viaje y la acogida.",
        "Preferir la salida voluntaria al internamiento o a la expulsión forzosa cuando no existan riesgos serios de fuga, delictivos o de seguridad.",
      ],
      keywords: [
        "retorno voluntario",
        "reinserción",
        "ayuda al traslado",
        "gastos de viaje",
        "programa de retorno",
      ],
    },

    "naturalized-citizenship-and-exceptionally-serious-crime": {
      title: "Ciudadanía adquirida y delitos de excepcional gravedad",
      shortAnswer:
        "La ciudadanía adquirida puede revocarse por una clase estricta de delitos de excepcional gravedad, seguida de la expulsión cuando los consiguientes requisitos de nacionalidad y de retorno puedan cumplirse conforme a derecho.",
      position: [
        "La naturalización no sitúa todo acto posterior fuera del derecho de la ciudadanía. El orden constitucional propuesto permite la revocación de la ciudadanía adquirida por determinadas conductas de excepcional gravedad posteriores a la naturalización, dejando la delincuencia ordinaria al sistema de justicia penal.",
      ],
      policies: [
        "Limitar esta potestad a una clase tasada de delitos de excepcional gravedad, como el homicidio doloso, la agresión sexual, los abusos sexuales agravados a menores, el terrorismo y los delitos graves comparables.",
        "Exigir una condena penal firme antes de la revocación de la ciudadanía fundada en un delito.",
        "Exigir un procedimiento específico en materia de ciudadanía que determine si concurren las condiciones legales de la revocación.",
        "Garantizar un recurso efectivo antes de que la expulsión se ejecute.",
        "Cuando la ciudadanía se revoque y la persona posea otra nacionalidad o pueda recuperarla conforme a derecho, aplicar el marco ordinario de retorno.",
        "Cuando la nacionalidad sea controvertida, proceder a su determinación en lugar de presumir que el solo lugar de nacimiento prueba la obligación de un Estado de acoger a la persona.",
        "No emplear la ascendencia por sí sola como criterio de activación penal; la distinción operativa es la ciudadanía adquirida unida a una conducta cualificada.",
      ],
      keywords: [
        "ciudadanía adquirida",
        "revocación",
        "delito grave",
        "homicidio",
        "agresión sexual",
        "terrorismo",
        "nacionalidad",
      ],
    },

    "return-readmission-identity-and-removal-procedure": {
      title: "Retorno, readmisión, identidad y procedimiento de expulsión",
      shortAnswer:
        "La política de retorno sigue un modelo de ejecución mixto: identificación e internamiento a efectos de expulsión cuando sea necesario, y después un estatuto temporal limitado si la expulsión sigue siendo imposible por el momento, manteniendo los esfuerzos por determinar la nacionalidad y obtener la readmisión.",
      position: [
        "Una resolución firme de retorno debe poder ejecutarse en la práctica. El Estado debería, por tanto, mantener mecanismos de verificación de la identidad, internamiento, presentación periódica y readmisión, en lugar de permitir que la destrucción de documentos o la falta de cooperación produzcan automáticamente una residencia permanente.",
      ],
      policies: [
        "Iniciar de inmediato la verificación de la identidad y la nacionalidad cuando la persona expulsable carezca de documentos fiables.",
        "Emplear pasaportes, documentos caducados, registros civiles, huellas dactilares u otros datos biométricos cuando la ley lo permita, documentos familiares, comprobaciones consulares, elementos lingüísticos y biográficos y acuerdos de readmisión para determinar la identidad y la nacionalidad.",
        "Tratar la destrucción u ocultación dolosa de documentos como circunstancia agravante en la ejecución, reconociendo al mismo tiempo que destruir un pasaporte no extingue la nacionalidad.",
        "Admitir el internamiento de extranjeros cuando sea necesario para la identificación, para prevenir la fuga o para una expulsión inminente, con sujeción a límites legales definidos y a un empeño continuado en la expulsión.",
        "Si la expulsión no puede ejecutarse dentro de la duración máxima legal del internamiento, hacer pasar a la persona a un estatuto temporal limitado en lugar de a la residencia permanente ordinaria.",
        "El estatuto limitado puede comprender obligaciones de presentación, restricciones de residencia, la cooperación continuada en los trámites de identificación y una asistencia pública reducida.",
        "No permitir que el mero transcurso del tiempo en estatuto limitado madure automáticamente en ciudadanía o residencia permanente.",
        "Reanudar la expulsión en cuanto la nacionalidad, los documentos de viaje y una readmisión conforme a derecho estén disponibles.",
        "Recurrir a los acuerdos de readmisión y a la presión diplomática para exigir que los países acojan a las personas cuya nacionalidad esté acreditada conforme a su propio derecho.",
        "Permitir que los familiares partan juntos cuando los progenitores sean expulsados y los hijos tengan derecho a acompañarlos; las cuestiones autónomas de nacionalidad, custodia y protección de la infancia exigen una resolución individual.",
        "Aplicar las nuevas reglas constitucionales de extranjería a los estatutos existentes cuando la ley prevea expresamente una revisión retroactiva, con sujeción a los procedimientos de revisión enunciados en otras entradas de este conjunto.",
      ],
      keywords: [
        "procedimiento de retorno",
        "readmisión",
        "internamiento",
        "identidad",
        "nacionalidad",
        "estatuto limitado",
        "apatridia",
        "unidad familiar",
        "retroactividad",
      ],
    },

    "europe-as-a-civilization-of-nations": {
      title: "Europa como civilización de naciones",
      shortAnswer:
        "Europa debe ser una comunidad de civilización formada por naciones soberanas, y no un Estado posnacional centralizado.",
      position: [
        "Europa debe ser una comunidad de civilización formada por naciones soberanas, y no un Estado posnacional centralizado.",
      ],
      policies: [
        "Cooperación europea en defensa, fronteras, infraestructuras estratégicas, ciencia, protección del medio ambiente y preservación de la civilización.",
        "Conservación de la autonomía política nacional y de la identidad histórica.",
        "La subsidiariedad rige el reparto de competencias.",
      ],
      keywords: ["Europa", "soberanía", "confederación", "subsidiariedad", "posnacional"],
    },

    "european-union-institutional-relationship": {
      title: "Unión Europea: relación institucional",
      shortAnswer:
        "Restore Europa apoya una reforma de fondo de la Unión Europea para convertirla en un marco limitado de cooperación entre naciones europeas soberanas, con la mayor parte de las competencias políticas devueltas a los Estados miembros.",
      position: [
        "La cooperación europea debe continuar, pero las instituciones continentales solo deben poseer aquellas competencias que exijan genuinamente una acción a escala europea. Restore Europa rechaza la deriva hacia un Estado posnacional centralizado y aplica la subsidiariedad con rigor.",
      ],
      policies: [
        "Devolver a los Estados miembros competencias legislativas y regulatorias sustanciales.",
        "Mantener principalmente en el ámbito nacional la política de familia, la educación, la cultura, la religión, el derecho penal ordinario y la mayor parte de la política social interna.",
        "Conservar la cooperación europea allí donde la escala la haga genuinamente útil, incluidas determinadas infraestructuras transfronterizas, la cooperación científica, el comercio, la coordinación de fronteras y la seguridad estratégica.",
        "Impedir que las instituciones de la UE impongan un programa moral o cultural uniforme a las naciones miembros.",
        "Preservar la soberanía nacional, la identidad constitucional y la continuidad histórica.",
        "Buscar un marco civilizatorio europeo que reconozca la herencia cristiana de Europa preservando al mismo tiempo la autonomía política nacional.",
      ],
      keywords: [
        "Unión Europea",
        "UE",
        "soberanía",
        "subsidiariedad",
        "Comisión Europea",
        "reforma de los tratados",
        "Europa cristiana",
        "Bruselas",
        "competencias",
      ],
    },

    "economic-order": {
      title: "Orden económico",
      shortAnswer:
        "Restore Europa rechaza tanto el capitalismo sin límites como el socialismo centralizado. Su ideal económico es distributista en cuanto a la propiedad y corporativista en cuanto a la organización.",
      position: [
        "Restore Europa rechaza tanto el capitalismo sin límites como el socialismo centralizado. Su ideal económico es distributista en cuanto a la propiedad y corporativista en cuanto a la organización.",
      ],
      keywords: ["economía", "distributismo", "corporativismo", "capitalismo", "socialismo"],
    },

    "private-property-and-broad-ownership": {
      title: "Propiedad privada y propiedad ampliamente repartida",
      shortAnswer:
        "La propiedad es una fuente de independencia y de responsabilidad. La respuesta a la concentración es repartir más la propiedad, no abolirla.",
      position: [
        "La propiedad privada es una fuente de independencia y de responsabilidad. La respuesta a una concentración excesiva es repartir más la propiedad, y no abolirla.",
      ],
      policies: [
        "Vivienda en propiedad ampliamente extendida.",
        "Empresas familiares.",
        "Artesanos y oficios independientes.",
        "Pequeñas y medianas empresas.",
        "Cooperativas y propiedad de los trabajadores.",
        "Agricultura familiar.",
        "Banca local y regional.",
      ],
      principle: "Muchos propietarios antes que unos pocos.",
      keywords: [
        "propiedad",
        "propietarios",
        "distributismo",
        "cooperativas",
        "pequeños propietarios",
      ],
    },

    "corporations-and-monopolies": {
      title: "Grandes empresas y monopolios",
      shortAnswer:
        "Las grandes empresas son instrumentos legítimos, pero permanecen subordinadas al bien común, y el poder empresarial concentrado puede contenerse.",
      position: [
        "Las grandes empresas son instrumentos legítimos, pero deben permanecer subordinadas al bien común. El poder empresarial excesivamente concentrado puede contenerse.",
      ],
      policies: [
        "Política firme de competencia y contra los monopolios.",
        "Contención allí donde las empresas dominen las instituciones políticas o los mercados esenciales.",
        "Protección de las comunidades viables, de la vida familiar y de la independencia política frente a una concentración destructiva.",
      ],
      keywords: [
        "grandes empresas",
        "monopolio",
        "defensa de la competencia",
        "competencia",
        "concentración",
      ],
    },

    "guilds-chambers-and-corporatist-representation": {
      title: "Gremios, cámaras y representación corporativa",
      shortAnswer:
        "Los trabajadores, los empresarios, los artesanos, los agricultores y las profesiones deben participar en instituciones sectoriales que fijen normas, formación de aprendices y condiciones de trabajo.",
      position: [
        "Los trabajadores, los empresarios, los artesanos, los agricultores y las profesiones deben participar en instituciones sectoriales capaces de fijar normas, formación de aprendices, condiciones de trabajo y mecanismos de mediación.",
      ],
      policies: [
        "Las cámaras profesionales y las corporaciones de oficio deben mantenerse suficientemente independientes del gobierno central.",
        "Las organizaciones profesionales pueden tener una representación estructurada en la vida pública.",
        "El corporativismo permanece subordinado a la subsidiariedad.",
      ],
      keywords: ["gremios", "cámaras", "corporativismo", "aprendizaje", "oficios"],
    },

    "finance-lending-and-usury": {
      title: "Finanzas, crédito y usura",
      shortAnswer:
        "Las finanzas deben servir a la actividad productiva. El préstamo legítimo y una remuneración razonable se aceptan; el interés abusivo y las trampas de deuda, no.",
      position: [
        "Las finanzas deben servir a la actividad productiva. Restore Europa acepta el préstamo legítimo y una remuneración razonable del capital, al tiempo que se opone al interés abusivo, al crédito depredador y a las trampas de deuda.",
      ],
      policies: [
        "Restricciones estrictas o límites máximos al crédito depredador de tipo «préstamo rápido».",
        "Información transparente del coste total del crédito.",
        "Restricciones a las comisiones abusivas por demora y a las penalizaciones que se acumulan sobre sí mismas.",
        "Los tribunales pueden anular las cláusulas de préstamo manifiestamente leoninas.",
        "La política debe favorecer el crédito productivo para la vivienda, las empresas familiares y la inversión a largo plazo.",
        "Fomento de la banca local y regional.",
      ],
      keywords: ["finanzas", "usura", "intereses", "crédito", "deuda", "bancos"],
    },

    "housing-and-financialization": {
      title: "Vivienda y financiarización",
      shortAnswer:
        "La vivienda debe servir principalmente para habitar y para hacer comunidad, y no funcionar como un activo financiero que se revaloriza sin fin.",
      position: [
        "La vivienda debe servir principalmente para habitar y para hacer comunidad, y no funcionar ante todo como un activo financiero que se revaloriza sin fin.",
      ],
      policies: [
        "La vivienda en propiedad ampliamente extendida es un objetivo central.",
        "La propiedad especulativa y concentrada puede contenerse allí donde impida la propiedad familiar ordinaria.",
      ],
      keywords: ["vivienda", "vivienda en propiedad", "alquiler", "especulación", "arrendadores"],
    },

    work: {
      title: "Trabajo",
      shortAnswer:
        "El trabajo posee dignidad, pero no es la finalidad de la existencia humana. El progreso económico debe aumentar la seguridad, el ocio y el dominio sobre la propia vida.",
      position: [
        "El trabajo posee dignidad, pero no es la finalidad de la existencia humana. El progreso económico debe aumentar la seguridad, el ocio, el tiempo en familia, el trabajo con sentido y el dominio sobre la propia vida.",
      ],
      policies: [
        "Recuperación del prestigio social de la artesanía, la agricultura, la ingeniería, los cuidados, la enseñanza y los oficios cualificados.",
        "Las ganancias de productividad no deben limitarse a aumentar la extracción de trabajo.",
        "La automatización no debe suprimir la participación humana con sentido por la sola eficiencia numérica.",
      ],
      keywords: ["trabajo", "empleo", "ocupación", "artesanía", "ocio"],
    },

    "minimum-wage": {
      title: "Salario mínimo y salario justo",
      shortAnswer:
        "Todo trabajador tiene derecho a un salario justo, suficiente para una vida digna y para el sostenimiento razonable de una familia.",
      position: [
        "La doctrina social católica establece un criterio sustantivo de salario justo y no un mecanismo legal único y universal. Restore Europa favorece, por tanto, la fijación sectorial y regional de los salarios a través de instituciones representativas, respaldada por una protección legal cuando sea necesaria.",
      ],
      policies: [
        "Establecer el principio de un salario justo jurídicamente protegido.",
        "Determinar normalmente los salarios mínimos en el nivel sectorial o regional adecuado, con la participación de trabajadores, empresarios y organismos profesionales.",
        "Permitir que los gremios, las cámaras y las instituciones colectivas negocien condiciones acordes con la productividad, la cualificación y la situación del sector.",
        "Admitir una protección legal mínima cuando las instituciones de negociación no logren asegurar un salario justo.",
        "Tener en cuenta las necesidades familiares en lugar de tomar la subsistencia individual como único criterio.",
        "Emplear cuando proceda prestaciones familiares o ayudas por hijo, de modo que criar hijos no suponga una penalización económica irrazonable.",
        "Considerar la viabilidad de la empresa, la productividad y las oportunidades de empleo.",
      ],
      keywords: [
        "salario mínimo",
        "salario justo",
        "salario digno",
        "salario familiar",
        "trabajadores",
        "gremios",
        "negociación colectiva",
        "retribución",
        "salario de referencia",
      ],
    },

    taxation: {
      title: "Fiscalidad",
      shortAnswer:
        "Los impuestos son legítimos para el bien común, pero deben ser equitativos, atentos a la familia, no confiscatorios y compatibles con la propiedad ampliamente repartida, el trabajo productivo y la subsidiariedad.",
      position: [
        "El sistema fiscal debe financiar las funciones públicas legítimas sin convertirse en un mecanismo para eliminar la propiedad privada, desincentivar la formación de familias o centralizar innecesariamente las responsabilidades sociales.",
      ],
      policies: [
        "Aplicar los impuestos por ley clara, de manera razonable y equitativa.",
        "Mantener la carga global compatible con la independencia de los hogares, el ahorro, la empresa productiva y una propiedad ampliamente repartida.",
        "Reconocer de forma sustancial a los hijos a cargo y evitar penalizaciones al matrimonio o a la crianza.",
        "Preferir el trabajo productivo y la inversión a largo plazo frente a la extracción especulativa allí donde el diseño fiscal pueda distinguirlos con coherencia.",
        "Evitar cargas de cumplimiento desproporcionadas para las pequeñas empresas, las empresas familiares, las explotaciones agrarias y los artesanos.",
        "Recaudar en el nivel competente más bajo cuando sea viable.",
        "Emplear una progresividad moderada en la imposición sobre la renta, evitando tipos marginales punitivos.",
        "Proteger la vivienda familiar habitual, las explotaciones agrarias familiares y las empresas familiares en funcionamiento frente a estructuras del impuesto de sucesiones que fuercen liquidaciones innecesarias.",
        "Mantener la cautela ante los impuestos generales y periódicos sobre el patrimonio, que pueden gravar bienes ilíquidos con independencia de la renta.",
        "Aplicar tipos reducidos en la imposición sobre el consumo a los bienes de primera necesidad cuando sea viable.",
      ],
      limits: [
        "No se prescriben tipos concretos, que siguen siendo una cuestión de aplicación nacional.",
      ],
      keywords: [
        "impuestos",
        "fiscalidad",
        "IRPF",
        "impuesto de sociedades",
        "IVA",
        "impuesto de sucesiones",
        "impuesto sobre el patrimonio",
        "fiscalidad familiar",
        "subsidiariedad",
      ],
    },

    pensions: {
      title: "Pensiones",
      shortAnswer:
        "Un sistema mixto de pensiones debe combinar una seguridad básica en la vejez con la previsión profesional, el ahorro personal, el patrimonio familiar y la responsabilidad entre generaciones.",
      position: [
        "Los mayores que han contribuido a la sociedad no deben verse en la indigencia, pero la previsión para la jubilación no debe hacer a los ciudadanos enteramente dependientes de un único sistema estatal centralizado.",
      ],
      policies: [
        "Garantizar una pensión básica suficiente para proteger de la pobreza a los ciudadanos mayores.",
        "Fomentar los fondos de pensiones profesionales y sectoriales organizados a través de los empresarios, los gremios, las cámaras profesionales y otras instituciones intermedias.",
        "Fomentar el ahorro privado para la jubilación y la tenencia de patrimonio familiar a largo plazo.",
        "Computar los periodos dedicados a criar hijos o a prestar cuidados familiares importantes al calcular los derechos de pensión pública.",
        "Evitar normas de pensiones que penalicen estructuralmente el matrimonio, la paternidad o los cuidados familiares.",
        "Mantener la sostenibilidad fiscal para que una generación no imponga a la siguiente obligaciones impagables.",
        "Permitir la variación nacional en el equilibrio entre la previsión pública, la profesional y la privada.",
      ],
      keywords: [
        "pensiones",
        "jubilación",
        "vejez",
        "seguridad social",
        "fondos de pensiones",
        "familia",
        "ahorro",
        "patrimonio",
      ],
    },

    "housing-restrictions": {
      title: "Restricciones detalladas en materia de vivienda",
      shortAnswer:
        "La vivienda debe servir principalmente para habitar y para hacer comunidad, con una política orientada a una propiedad familiar ampliamente extendida y no a una extracción financiera permanente.",
      position: [
        "La propiedad privada está protegida, y a la vez caben restricciones proporcionadas frente a las prácticas que convierten una vivienda escasa en un instrumento de escasez artificial, de monopolio o de acumulación especulativa.",
      ],
      policies: [
        "Hacer de la vivienda en propiedad ampliamente extendida un objetivo central de la política de vivienda.",
        "Ampliar la oferta cuando sea compatible con las infraestructuras, el carácter propio del lugar y la custodia del medio ambiente.",
        "Reducir las trabas urbanísticas innecesarias a la vivienda familiar adecuada, preservando los núcleos históricos y los paisajes.",
        "Dar un apoyo razonable a quienes compran su primera vivienda y a las familias.",
        "Desincentivar las estructuras hipotecarias depredadoras y fomentar una financiación previsible a largo plazo.",
        "Permitir una regulación más estricta de la adquisición masiva de vivienda por inversores institucionales dominantes allí donde desplace materialmente a los compradores ordinarios.",
        "Permitir una tributación o una regulación adicional de la vivienda de inversión vacía de forma prolongada allí donde la escasez sea grave.",
        "Proteger la vivienda familiar, las explotaciones agrarias familiares y el patrimonio heredado ordinario frente a la liquidación forzosa.",
        "Apoyar las cooperativas y los modelos de propiedad arraigados en el lugar cuando amplíen una propiedad con contenido real.",
        "Preferir protecciones proporcionadas del inquilino antes que sistemas de control de alquileres que hagan económicamente imposible la vivienda nueva.",
      ],
      keywords: [
        "vivienda",
        "vivienda en propiedad",
        "alquiler",
        "suelo",
        "propiedad",
        "financiarización",
        "hipotecas",
        "inversores institucionales",
      ],
    },

    "trade-unions-and-vocational-representation": {
      title: "Sindicatos, gremios y representación profesional",
      shortAnswer:
        "Los trabajadores pueden organizarse con independencia, mientras que las relaciones laborales deben avanzar hacia un sistema corporativo de instituciones sectoriales permanentes que representen a trabajadores, empresarios y profesiones.",
      position: [
        "Restore Europa rechaza tanto la impotencia del trabajador ante el capital concentrado como el conflicto de clases permanente como principio organizador de la vida económica.",
      ],
      policies: [
        "Proteger el derecho a constituir sindicatos independientes y a afiliarse a ellos.",
        "Proteger la negociación colectiva lícita sobre salarios y condiciones de trabajo.",
        "Crear cámaras sectoriales o corporaciones de oficio que representen a trabajadores, empresarios, artesanos y profesiones.",
        "Permitir que esos organismos negocien salarios mínimos, formación de aprendices, normas profesionales y mecanismos de resolución de conflictos.",
        "Fomentar la mediación y el acuerdo negociado antes que un conflicto laboral prolongado.",
        "Preservar un derecho de huelga proporcionado, protegiendo a la vez los servicios genuinamente esenciales mediante requisitos de continuidad.",
        "Impedir que los sindicatos se conviertan en órganos obligatorios del Estado.",
        "Impedir que los empresarios controlen organizaciones de trabajadores supuestamente independientes.",
        "Permitir una representación plural real en lugar de un sindicato único controlado por el Estado.",
      ],
      keywords: [
        "sindicatos",
        "gremios",
        "corporativismo",
        "negociación colectiva",
        "huelgas",
        "cámaras profesionales",
        "condiciones de trabajo",
      ],
    },

    "technology-general-doctrine": {
      title: "Tecnología: doctrina general",
      shortAnswer:
        "El desarrollo tecnológico no es sinónimo de progreso humano, y debe juzgarse por sus efectos sobre la autonomía, la familia, la comunidad y el trabajo.",
      position: [
        "El desarrollo tecnológico no es sinónimo de progreso humano. La tecnología debe juzgarse según refuerce o debilite la autonomía, la vida familiar, la comunidad, el trabajo con sentido, la intimidad, la descentralización y el medio natural.",
      ],
      principle: "La máquina debe adaptarse al hombre.",
      keywords: ["tecnología", "progreso", "escala humana", "innovación"],
    },

    "artificial-intelligence": {
      title: "Inteligencia artificial",
      shortAnswer:
        "La IA puede emplearse como herramienta, pero no debe desplazar el juicio humano por el solo hecho de que la automatización sea técnicamente posible o económicamente eficiente.",
      position: [
        "La IA puede emplearse como herramienta, pero no debe desplazar el juicio humano por el solo hecho de que la automatización sea técnicamente posible o económicamente eficiente.",
      ],
      policies: [
        "La IA debe evaluarse por sus efectos sobre la competencia humana, el empleo, la autonomía y el poder de las instituciones.",
        "Debe seguir habiendo personas que decidan en los asuntos de consecuencias jurídicas o morales graves.",
        "La existencia de una capacidad técnica no crea la obligación de desplegarla.",
      ],
      keywords: [
        "inteligencia artificial",
        "IA",
        "aprendizaje automático",
        "automatización",
        "algoritmos",
      ],
    },

    automation: {
      title: "Automatización",
      shortAnswer:
        "La automatización puede suprimir trabajos verdaderamente degradantes, pero eliminar la participación humana de la actividad productiva no es un bien indiscutible.",
      position: [
        "La automatización puede suprimir trabajos verdaderamente degradantes, pero eliminar la participación humana de la actividad productiva no debe ser un objetivo indiscutido.",
      ],
      principle: "La competencia humana es, en sí misma, un bien social.",
      keywords: ["automatización", "robots", "empleo", "pérdida de cualificación", "eficiencia"],
    },

    "cash-and-non-digital-access": {
      title: "Efectivo y acceso no digital",
      shortAnswer:
        "Los ciudadanos deben conservar un acceso real al dinero físico y a servicios públicos con atención presencial.",
      position: [
        "Los ciudadanos deben conservar un acceso real al dinero físico y a servicios públicos con atención presencial.",
      ],
      policies: [
        "El dinero en efectivo debe seguir estando disponible.",
        "La participación cívica esencial no debe exigir un teléfono móvil.",
        "La identificación no digital debe seguir estando disponible cuando sea viable.",
        "Los servicios de la Administración deben preservar alternativas accesibles a través de personas.",
      ],
      keywords: ["efectivo", "dinero", "exclusión digital", "banca", "atención presencial"],
    },

    "right-to-repair": {
      title: "Derecho a reparar",
      shortAnswer:
        "Los ciudadanos deben conservar un acceso real a productos reparables, frente a lo desechable innecesario y al cautiverio tecnológico.",
      position: [
        "Los ciudadanos deben conservar un acceso real a productos reparables. Restore Europa favorece una política que se resista a lo desechable innecesario y al cautiverio tecnológico.",
      ],
      keywords: [
        "derecho a reparar",
        "reparabilidad",
        "obsolescencia programada",
        "cautiverio tecnológico",
        "piezas de repuesto",
      ],
    },

    surveillance: {
      title: "Vigilancia",
      shortAnswer:
        "Los ciudadanos deben conservar espacios privados reales, libres de vigilancia permanente; las normas de detalle aún no están fijadas.",
      position: [
        "Los ciudadanos deben conservar espacios privados reales, libres de vigilancia permanente.",
      ],
      limits: [
        "Las normas exactas sobre reconocimiento facial, conservación de metadatos, videovigilancia y facultades de los servicios de inteligencia siguen abiertas.",
      ],
      keywords: [
        "vigilancia",
        "intimidad",
        "reconocimiento facial",
        "videovigilancia",
        "conservación de datos",
      ],
    },

    "children-social-media-and-attention-capture": {
      title: "Los niños y las redes sociales",
      shortAnswer:
        "Los niños deben recibir una protección jurídica firme frente a los sistemas de redes sociales diseñados para maximizar la captación compulsiva de la atención y la dependencia psicológica.",
      position: [
        "Los padres siguen siendo los primeros responsables de los hijos, mientras que el Estado puede regular los sistemas comerciales que explotan deliberadamente la vulnerabilidad propia del desarrollo infantil.",
      ],
      policies: [
        "Establecer por defecto una protección de la intimidad y de la visibilidad sensiblemente más estricta para los menores.",
        "Restringir los sistemas de captación manipuladora orientados a maximizar el uso compulsivo por parte de los niños.",
        "Restringir severamente la publicidad conductual dirigida a los niños.",
        "Exigir controles parentales eficaces.",
        "No exigir al alumnado mantener cuentas comerciales en redes sociales para la escolarización ordinaria.",
        "Permitir límites a las notificaciones nocturnas y a los mecanismos de captación dirigidos a menores.",
        "Diseñar la verificación de la edad de modo que se recojan los mínimos datos de identidad.",
        "Emplear un marco general de acceso muy restringido por debajo de los 13 años, con fuertes protecciones parentales y del menor entre los 13 y los 15, un acceso más amplio pero aún protegido entre los 16 y los 17, y las normas ordinarias de adulto a los 18.",
      ],
      keywords: [
        "redes sociales",
        "niños",
        "menores",
        "captación de la atención",
        "adicción",
        "control parental",
        "verificación de edad",
        "móviles",
      ],
    },

    "digital-identification": {
      title: "Identificación digital",
      shortAnswer:
        "La identificación digital puede existir como comodidad opcional, pero la participación cívica ordinaria no debe exigir una identidad obligatoria y exclusivamente digital.",
      position: [
        "Los ciudadanos deben conservar un acceso no digital real y no deben verse forzados a una arquitectura universal de identidad capaz de vigilar habitualmente su comportamiento.",
      ],
      policies: [
        "Mantener disponible la identificación física siempre que sea razonablemente viable.",
        "No denegar servicios públicos esenciales por el solo hecho de que una persona rechace un teléfono móvil o una aplicación de identidad digital.",
        "Recoger únicamente los datos necesarios para la finalidad administrativa declarada.",
        "Separar los sistemas de identidad de los sistemas generales de vigilancia del comportamiento.",
        "Exigir una habilitación legal clara y la trazabilidad del acceso a los datos de identidad.",
        "Prohibir los sistemas de crédito social y la puntuación del comportamiento político o religioso.",
        "Evitar la vinculación automática de los registros médicos, financieros, educativos, de viajes y de comunicaciones en un único perfil estatal universal.",
      ],
      keywords: [
        "identidad digital",
        "DNI electrónico",
        "intimidad",
        "vigilancia",
        "crédito social",
        "acceso no digital",
        "identidad",
      ],
    },

    "central-bank-digital-currencies": {
      title: "Monedas digitales de banco central",
      shortAnswer:
        "Una moneda digital de banco central no debe sustituir al dinero en efectivo ni convertirse en un sistema obligatorio y programable de vigilancia de las transacciones.",
      position: [
        "Una moneda digital de banco central puede tolerarse como instrumento de pago opcional, y solo con estrictas garantías de intimidad y de descentralización.",
      ],
      policies: [
        "No suprimir el efectivo en favor de una moneda digital de banco central obligatoria.",
        "No exigir que los salarios, las prestaciones o las transacciones ordinarias empleen exclusivamente la infraestructura de la moneda digital de banco central.",
        "No permitir el seguimiento habitual por parte del Estado de todas las transacciones lícitas.",
        "Prohibir las restricciones políticas programables sobre compras por lo demás lícitas.",
        "Prohibir la caducidad artificial del dinero de los ciudadanos.",
        "Prohibir el uso de las monedas digitales de banco central para sistemas de crédito social.",
        "Preservar unas transacciones privadas reales dentro de unas normas proporcionadas de lucha contra el delito.",
      ],
      keywords: [
        "moneda digital de banco central",
        "euro digital",
        "efectivo",
        "dinero programable",
        "intimidad financiera",
        "moneda digital",
      ],
    },

    cryptocurrency: {
      title: "Criptomonedas",
      shortAnswer:
        "La tenencia y la transferencia lícitas de criptomonedas deben seguir permitidas, mientras que el fraude, el robo y la custodia centralizada abusiva siguen regulados.",
      position: [
        "Las criptomonedas no son intrínsecamente liberadoras ni intrínsecamente ilegítimas. Deben juzgarse según sirvan a finalidades económicas legítimas sin producir fraude, especulación depredadora o dependencia innecesaria.",
      ],
      policies: [
        "Permitir la tenencia y la transferencia lícitas de criptomonedas.",
        "Aplicar el derecho penal ordinario al fraude, al robo, a la manipulación del mercado y a la promoción engañosa.",
        "Regular de forma proporcionada las plataformas de intercambio que custodian activos de clientes, en materia de solvencia, custodia y prevención del fraude.",
        "Distinguir los protocolos descentralizados de las empresas centralizadas de custodia.",
        "No prohibir las criptomonedas privadas con el solo fin de proteger el monopolio de una futura moneda digital de banco central.",
        "Emplear un tratamiento fiscal claro y administrativamente razonable.",
        "No prohibir la tecnología que preserva la intimidad por el solo hecho de que la intimidad sea técnicamente posible.",
      ],
      keywords: [
        "criptomonedas",
        "Bitcoin",
        "activos digitales",
        "cadena de bloques",
        "descentralización",
        "intimidad financiera",
      ],
    },

    "facial-recognition": {
      title: "Reconocimiento facial",
      shortAnswer:
        "La vigilancia permanente o indiscriminada de la población general mediante reconocimiento facial debe prohibirse.",
      position: [
        "El reconocimiento facial puede tener usos legítimos y acotados en la investigación de delitos graves, pero el espacio público no debe convertirse en un entorno biométrico vigilado de forma permanente.",
      ],
      policies: [
        "Prohibir el seguimiento facial universal y en tiempo real de los ciudadanos en la vida pública ordinaria.",
        "Prohibir el fichado biométrico permanente de todo el que pise una calle, un comercio, una iglesia, una manifestación o el transporte público.",
        "Permitir un uso selectivo para la investigación de delitos graves, sujeto a autorización legal, necesidad, proporcionalidad y plazos.",
        "Exigir criterios legales para las listas biométricas de búsqueda y la rectificación de las identificaciones erróneas.",
        "No fichar biométricamente de forma habitual las reuniones políticas o religiosas.",
        "Restringir a las empresas privadas la construcción de perfiles biométricos permanentes sin una base legal sólida.",
      ],
      keywords: [
        "reconocimiento facial",
        "biometría",
        "videovigilancia",
        "vigilancia",
        "intimidad",
        "espacio público",
      ],
    },

    "communications-metadata-retention": {
      title: "Conservación de los metadatos de las comunicaciones",
      shortAnswer:
        "Debe rechazarse la conservación permanente e indiscriminada de los metadatos de las comunicaciones de toda la población.",
      position: [
        "El Estado puede obtener registros de comunicaciones para investigaciones legítimas, pero los ciudadanos corrientes no deben ser tratados como sospechosos permanentes.",
      ],
      policies: [
        "Rechazar la conservación masiva e indefinida de los metadatos de comunicaciones de todo el mundo.",
        "Permitir la conservación y el acceso selectivos para investigar delitos graves y amenazas a la seguridad nacional.",
        "Exigir normalmente autorización judicial o de un órgano independiente comparable para el acceso.",
        "Emplear plazos de conservación limitados y borrar los datos ajenos al caso cuando expire la conservación legal.",
        "No hacer de la vigilancia masiva la arquitectura por defecto de las infraestructuras de comunicaciones.",
        "Mantener un control riguroso del acceso por parte de las fuerzas de seguridad y de los servicios de inteligencia.",
      ],
      keywords: [
        "metadatos",
        "conservación de datos",
        "vigilancia de las comunicaciones",
        "intimidad",
        "telecomunicaciones",
        "inteligencia",
      ],
    },

    "genetic-engineering": {
      title: "Ingeniería genética",
      shortAnswer:
        "La medicina genética terapéutica puede ser legítima, mientras que la mejora hereditaria y la instrumentalización de la vida humana embrionaria se enfrentan a una prohibición firme.",
      position: [
        "Restore Europa distingue el tratamiento de la enfermedad de los proyectos dirigidos a rediseñar la naturaleza humana o a seleccionar rasgos humanos preferidos.",
      ],
      policies: [
        "Permitir la terapia génica somática legítima dirigida al tratamiento de la enfermedad, con sujeción a las normas de seguridad médica.",
        "Prohibir la experimentación genética que trate a los embriones humanos como mero material de investigación desechable, cuando esto choque con la protección de la vida humana desde la concepción.",
        "Mantener una presunción firme en contra de la mejora hereditaria de la línea germinal.",
        "Prohibir la creación comercial de niños seleccionados o modificados genéticamente por encargo.",
        "Distinguir la terapia de la mejora de la inteligencia, el aspecto, la fuerza u otros rasgos preferidos.",
        "Rechazar los programas eugenésicos de Estado.",
        "Proteger la información genética como dato personal de especial sensibilidad.",
      ],
      keywords: [
        "ingeniería genética",
        "edición genética",
        "CRISPR",
        "línea germinal",
        "embriones",
        "terapia génica",
        "bebés por encargo",
        "eugenesia",
      ],
    },

    "transhumanism-and-human-enhancement": {
      title: "Transhumanismo y mejora humana",
      shortAnswer:
        "La medicina puede curar y restaurar, pero el ser humano no debe tratarse como materia prima para la optimización o la sustitución tecnológicas.",
      position: [
        "La dignidad humana no depende de la inteligencia, la fuerza, la longevidad, la productividad ni el aumento tecnológico.",
      ],
      policies: [
        "Permitir las prótesis, los implantes y las tecnologías de apoyo con finalidad terapéutica.",
        "Distinguir la restauración de la función humana normal de los proyectos ideológicos que pretenden sustituir a la humanidad corriente por sucesores fabricados.",
        "Prohibir el aumento neurológico, cibernético o genético impuesto como condición para trabajar o para participar en la vida cívica.",
        "No crear clases jurídicamente privilegiadas de personas modificadas tecnológicamente.",
        "Someter los programas militares de mejora a una revisión ética estricta.",
        "Imponer restricciones severas a las interfaces cerebro-máquina que comprometan la intimidad o la autonomía mentales.",
        "Prohibir con carácter general la mejora hereditaria de las generaciones futuras.",
      ],
      keywords: [
        "transhumanismo",
        "mejora humana",
        "cibernética",
        "interfaz cerebro-máquina",
        "aumento humano",
        "dignidad humana",
        "bioética",
      ],
    },

    "purpose-of-education": {
      title: "Finalidad de la educación",
      shortAnswer:
        "La educación debe transmitir la civilización antes de pretender transformarla, con el estudio serio del cristianismo, la historia, la civilización clásica, las ciencias y las artes.",
      position: [
        "La educación debe transmitir la civilización antes de pretender transformarla. El cristianismo, la historia nacional y europea, la civilización clásica, la filosofía, la literatura, la ciencia, las matemáticas, la música, el arte, los oficios y la responsabilidad cívica deben ser todos objeto de estudio serio.",
      ],
      keywords: ["educación", "currículo", "escuelas", "transmisión", "clásicos"],
    },

    homeschooling: {
      title: "Educación en casa",
      shortAnswer:
        "La educación en casa debe ser legal y estar protegida, porque los padres son los primeros educadores de sus hijos.",
      position: [
        "La educación en casa debe ser legal y estar protegida, porque los padres son los primeros educadores de sus hijos.",
      ],
      policies: [
        "Los padres pueden educar a sus hijos en casa.",
        "Se permite la educación en casa explícitamente católica.",
        "El Estado puede exigir una competencia básica en lectoescritura, matemáticas y conocimientos cívicos.",
        "Una evaluación periódica puede verificar que los niños reciben efectivamente una educación.",
        "El Estado no debe usar la supervisión para imponer una conformidad ideológica.",
      ],
      keywords: ["educación en casa", "educación en el hogar", "padres", "currículo"],
    },

    "private-catholic-and-independent-schools": {
      title: "Escuelas privadas, católicas e independientes",
      shortAnswer:
        "Un sistema educativo plural que incluya escuelas católicas, privadas, clásicas, profesionales y monásticas, con financiación pública que pueda seguir a las familias.",
      position: [
        "Restore Europa apoya un sistema educativo plural que incluya escuelas católicas, escuelas privadas, escuelas clásicas, centros de formación profesional, escuelas monásticas y la educación en casa.",
      ],
      policies: [
        "Las escuelas católicas quedan protegidas por la ley.",
        "Las escuelas independientes pueden mantener currículos y un carácter moral propios.",
        "La financiación pública puede seguir a las familias mediante cheques escolares, deducciones fiscales o sistemas equivalentes.",
        "Las escuelas católicas pueden enseñar la doctrina católica y organizar la vida escolar conforme a la enseñanza moral católica.",
        "Pueden exigirse unos estándares académicos básicos sin imponer una conformidad ideológica.",
      ],
      keywords: [
        "escuelas privadas",
        "escuelas católicas",
        "cheque escolar",
        "libertad de elección de centro",
        "escuelas independientes",
      ],
    },

    "universities-and-academic-freedom": {
      title: "Universidad y libertad académica",
      shortAnswer:
        "Las universidades deben conservar una libertad académica real y dejar de funcionar como instituciones de propagación ideológica obligatoria.",
      position: [
        "Las universidades deben conservar una libertad académica real y dejar de funcionar como instituciones de propagación ideológica obligatoria.",
      ],
      policies: [
        "Las teorías liberales, marxistas, laicistas, católicas, nacionalistas y de otro signo pueden estudiarse y debatirse académicamente.",
        "Las universidades públicas no deben imponer institucionalmente la ideología liberal o progresista como doctrina indiscutible.",
        "No debe exigirse a los estudiantes que profesen posiciones ideológicas ajenas a la competencia académica.",
        "La contratación y la promoción no deben discriminar la investigación católica, conservadora o tradicionalista amparada por la ley.",
        "El cristianismo, la civilización clásica, la historia europea, la filosofía y la tradición intelectual de Occidente deben tener un espacio institucional serio.",
      ],
      principle: "La educación debe buscar la verdad, no fabricar conformidad ideológica.",
      keywords: [
        "universidades",
        "libertad académica",
        "enseñanza superior",
        "investigación",
        "ideología",
      ],
    },

    "state-schools-and-christianity": {
      title: "La escuela pública y el cristianismo",
      shortAnswer:
        "La escuela pública debe tener una orientación civilizatoria cristiana y no laicista.",
      position: [
        "La escuela pública debe tener una orientación civilizatoria cristiana y no laicista.",
      ],
      policies: [
        "El cristianismo debe enseñarse como fundamento de la civilización, la historia, la filosofía, la moral, el arte y la cultura europeas.",
        "La enseñanza católica debe tener un lugar reconocido en la educación pública de las sociedades de mayoría católica.",
        "El laicismo no debe presentarse como la única visión del mundo intelectualmente legítima.",
        "La historia nacional y europea debe enseñarse como una herencia y no como mera culpa acumulada.",
      ],
      keywords: [
        "escuela pública",
        "enseñanza religiosa",
        "laicismo",
        "cristianismo",
        "educación pública",
      ],
    },

    "sex-education-in-schools": {
      title: "Educación sexual en la escuela",
      shortAnswer:
        "La escuela puede enseñar la biología reproductiva en su vertiente factual, pero la formación moral sobre la sexualidad corresponde ante todo a los padres y a las instituciones religiosas que elijan.",
      position: [
        "Los padres y la Iglesia deben ser las autoridades primeras en la formación sexual y moral. La escuela puede enseñar la biología reproductiva en su vertiente factual, pero no debe eludir la autoridad de los padres con una instrucción sexual o ideológica explícita.",
      ],
      policies: [
        "La biología puede abarcar la anatomía, la reproducción humana, el embarazo y la salud.",
        "La enseñanza moral sobre la sexualidad, la anticoncepción y las relaciones corresponde ante todo a los padres y a las instituciones religiosas que elijan.",
        "Los padres deben ser informados de los currículos correspondientes, y pueden retirar a sus hijos de los contenidos que excedan la instrucción biológica básica.",
        "La escuela no debe exponer a los menores a material didáctico pornográfico o sexualmente explícito.",
      ],
      keywords: [
        "educación sexual",
        "educación afectivo-sexual",
        "currículo",
        "derechos de los padres",
        "consentimiento",
      ],
    },

    "culture-and-homogenization": {
      title: "La cultura frente a la homogeneización",
      shortAnswer:
        "Las lenguas, los dialectos, las fiestas, la música, la cocina y la artesanía deben seguir siendo partes vivas de la vida corriente y no piezas de museo.",
      position: [
        "Las lenguas, los dialectos, las fiestas, la música, la cocina, la artesanía y la memoria histórica deben seguir siendo partes vivas de la vida europea corriente, y no piezas de museo ni productos turísticos.",
      ],
      keywords: ["cultura", "dialectos", "fiestas", "tradición", "homogeneización"],
    },

    "architecture-and-historic-preservation": {
      title: "Arquitectura y conservación del patrimonio",
      shortAnswer:
        "La arquitectura pública debe respetar la escala humana, los materiales del lugar y la tradición regional, y el tejido histórico debe conservarse siempre que sea razonablemente posible.",
      position: [
        "La arquitectura pública debe respetar la escala humana, los materiales del lugar, las tradiciones regionales y el carácter histórico. Las iglesias, los conjuntos urbanos, los monumentos y los edificios históricos significativos deben conservarse siempre que sea razonablemente posible.",
      ],
      keywords: ["arquitectura", "conservación", "patrimonio", "ciudades", "escala humana"],
    },

    "authority-democracy-and-subsidiarity": {
      title: "Autoridad, democracia y subsidiariedad",
      shortAnswer:
        "El poder debe ejercerse en el nivel competente más bajo. Las elecciones, la representación y los límites constitucionales conviven con el rechazo del liberalismo filosófico.",
      position: [
        "Restore Europa rechaza por igual el individualismo anárquico y el poder estatal total. Las elecciones, la representación, los límites constitucionales y la participación pública pueden convivir con el rechazo del liberalismo filosófico.",
      ],
      policies: [
        "El poder debe ejercerse en el nivel competente más bajo.",
        "Las familias gobiernan los asuntos familiares; los municipios, los asuntos locales; las regiones conservan una autonomía real; las naciones gobiernan los asuntos nacionales.",
        "El gobierno permanece limitado por la ley, por la subsidiariedad y por los contrapesos institucionales.",
        "El desacuerdo político y la oposición siguen siendo legítimos.",
      ],
      keywords: ["subsidiariedad", "democracia", "autoridad", "federalismo", "liberalismo"],
    },

    "free-speech-and-public-doctrine": {
      title: "Libertad de expresión y doctrina pública",
      shortAnswer:
        "El debate político y académico amplio está protegido; la expresión que incita directamente a la violencia, al terrorismo o a la conducta delictiva, no.",
      position: [
        "Restore Europa apoya un debate político y académico amplio, pero no considera ilimitada la libertad de expresión cuando incita directamente a la violencia, al terrorismo o a la conducta delictiva, o constituye una profanación deliberada de lo sagrado.",
      ],
      policies: [
        "La crítica al gobierno sigue siendo lícita.",
        "El desacuerdo político y teológico sigue siendo lícito.",
        "El comunismo, el laicismo y el liberalismo pueden discutirse y defenderse por los particulares, aunque no definan el orden constitucional.",
        "La incitación directa a la violencia o al terrorismo puede prohibirse.",
        "La pornografía sigue prohibida conforme a una posición aparte.",
        "El sacrilegio deliberado puede restringirse conforme a la posición sobre la blasfemia.",
      ],
      principle:
        "Un orden constitucional confesional no tiene por qué convertirse en un sistema de policía del pensamiento.",
      keywords: ["libertad de expresión", "expresión", "censura", "incitación", "prensa"],
    },

    "prisons-punishment-and-rehabilitation": {
      title: "Prisiones, castigo y rehabilitación",
      shortAnswer:
        "Castigo proporcionado, protección de la sociedad, reparación cuando sea posible y una rehabilitación seria orientada al arrepentimiento y a la reinserción.",
      position: [
        "La justicia penal debe combinar un castigo proporcionado, la protección de la sociedad, la reparación cuando sea posible y una rehabilitación seria orientada al arrepentimiento y a la reinserción.",
      ],
      policies: [
        "Penas proporcionadas a la gravedad del delito.",
        "Neutralización prolongada de los delincuentes violentos peligrosos y reincidentes cuando sea necesario.",
        "Las prisiones deben mantener la disciplina y el orden.",
        "Los presos deben tener acceso al trabajo, a la educación, a la formación profesional, a la atención espiritual y al tratamiento de adicciones.",
        "El castigo no debe ser deliberadamente degradante ni cruel.",
      ],
      principle: "La justicia no es venganza ni permisividad.",
      keywords: [
        "prisiones",
        "determinación de la pena",
        "castigo",
        "rehabilitación",
        "justicia penal",
      ],
    },

    "criminal-sentencing": {
      title: "Determinación de las penas",
      shortAnswer:
        "El castigo debe ser proporcionado a la gravedad y a la culpabilidad, proteger a la sociedad, reparar cuando sea posible y buscar la rehabilitación cuando sea realista.",
      position: [
        "La determinación de la pena debe distinguir con nitidez entre las infracciones menores y la violencia grave deliberada. El castigo penal puede servir legítimamente a la protección, a una retribución proporcionada, al restablecimiento del orden público, a la reparación, a la disuasión y a la rehabilitación.",
      ],
      policies: [
        "Exigir una condena dictada en un proceso legal y justo antes del castigo.",
        "Considerar agravantes la intención, la premeditación, la crueldad, el abuso de víctimas vulnerables, la criminalidad organizada y la reiteración de delitos graves.",
        "Preferir multas proporcionadas, reparación, trabajos en beneficio de la comunidad, libertad vigilada y tratamiento para los delitos menores o no violentos que lo admitan.",
        "Emplear penas de prisión sustanciales para la violencia grave, el robo, el secuestro, la delincuencia organizada grave, la trata a gran escala, la corrupción grave, el fraude de gran envergadura, los delitos sexuales graves y la reiteración de delitos violentos.",
        "Tratar la violación y el abuso sexual grave de menores como delitos de excepcional gravedad.",
        "Emplear la prisión de larga duración o permanente cuando proceda en los casos más graves no castigados con la pena capital.",
        "Permitir medidas de seguridad posteriores a la condena, reguladas de forma estricta, solo cuando el penado siga siendo demostrablemente un peligro grave y se mantengan las garantías del proceso.",
        "Por precisión jurídica, castigar la conducta sexual delictiva —el abuso, la explotación, el embaucamiento de menores con fines sexuales y el material ilegal de abuso sexual infantil— y no un diagnóstico psiquiátrico ni una atracción por sí sola.",
      ],
      limits: [
        "Las horquillas numéricas exactas de las penas quedan para la posterior redacción del código penal, en lugar de inventarse sin base probatoria.",
      ],
      keywords: [
        "determinación de la pena",
        "castigo",
        "prisión",
        "asesinato",
        "violación",
        "abuso sexual infantil",
        "rehabilitación",
        "reparación",
      ],
    },

    "death-penalty": {
      title: "Pena de muerte",
      shortAnswer:
        "Restore Europa acepta en principio la legitimidad tradicional de la pena capital, reservada a casos excepcionales relativos a los delitos más graves.",
      position: [
        "Restore Europa acepta en principio la legitimidad católica tradicional de la pena capital, pero la reserva a casos excepcionales relativos a los delitos más graves.",
      ],
      policies: [
        "Potencialmente aplicable al asesinato doloso agravado, al asesinato en masa, al terrorismo con muerte deliberada, al genocidio y a delitos de gravedad comparable.",
        "Solo tras un juicio completo y justo, con un elevado estándar probatorio y un derecho de recurso efectivo.",
        "Ninguna ejecución cuando subsista una duda seria sobre la culpabilidad.",
        "Ninguna ejecución de menores.",
        "Impuesta únicamente por la autoridad civil legítima, y nunca empleada por mera venganza.",
      ],
      keywords: ["pena de muerte", "pena capital", "ejecución", "asesinato", "abolición"],
    },

    "capital-punishment-for-aggravated-sexual-crimes": {
      title: "Pena capital para delitos sexuales agravados",
      shortAnswer:
        "La pena de muerte puede estar legalmente prevista, aunque no ser preceptiva, para las formas más agravadas de violación y de abuso sexual infantil.",
      position: [
        "Restore Europa sitúa los delitos sexuales de agravación excepcional dentro de la categoría de delitos que pueden dar lugar a la pena capital, con las mismas garantías procesales y probatorias, inusualmente estrictas, que los demás casos capitales.",
      ],
      policies: [
        "Entre los casos que podrían cumplir los requisitos figuran la violación agravada con brutalidad excepcional, la violación reiterada o en serie, la violación con secuestro o tortura, el abuso sexual agravado de menores, el abuso sistemático de varios menores y la explotación sexual organizada en circunstancias de excepcional gravedad.",
        "Es obligatorio un proceso penal completo y justo.",
        "La pena de muerte no puede imponerse cuando subsista una duda residual seria sobre la culpabilidad.",
        "Exigir una revisión efectiva en apelación y el examen de las nuevas pruebas materialmente exculpatorias antes de la ejecución.",
        "Emplear pruebas de corroboración y forenses siempre que sea razonablemente posible obtenerlas; una prueba débil o incierta nunca debe sostener una condena a muerte.",
        "Mantener disponible la prisión permanente incluso cuando un delito reúna técnicamente los requisitos para la pena capital.",
        "Ninguna ejecución de menores.",
      ],
      keywords: [
        "pena de muerte",
        "pena capital",
        "violación agravada",
        "abuso sexual infantil",
        "violencia sexual",
        "estándar probatorio",
        "prisión permanente",
      ],
    },

    "firearms-and-self-defense": {
      title: "Armas de fuego y legítima defensa",
      shortAnswer:
        "Tenencia civil regulada de armas de fuego para fines lícitos, con licencia, formación y obligaciones de custodia segura.",
      position: [
        "Restore Europa apoya una tenencia civil regulada de armas de fuego para fines lícitos, incluidas la legítima defensa, la caza, el tiro deportivo y el coleccionismo.",
      ],
      policies: [
        "Licencia obligatoria.",
        "Formación obligatoria en seguridad.",
        "Obligaciones de custodia segura.",
        "Control más estricto del porte público o encubierto.",
        "Los autores de delitos violentos graves pierden el derecho a poseer armas.",
        "El tráfico ilegal y la tenencia delictiva se castigan con dureza.",
      ],
      principle:
        "El Estado no tiene por qué monopolizar todos los medios de legítima defensa, pero la tenencia de armas de fuego conlleva responsabilidades serias.",
      keywords: ["armas de fuego", "armas", "legítima defensa", "caza", "licencia de armas"],
    },

    "universal-healthcare-access": {
      title: "Acceso universal a la sanidad",
      shortAnswer:
        "Acceso universal a la atención esencial y médicamente necesaria, con salvaguardas frente al uso excesivo y el despilfarro.",
      position: [
        "Restore Europa apoya el acceso universal a la atención sanitaria esencial y médicamente necesaria, admitiendo a la vez salvaguardas frente al uso excesivo y el despilfarro.",
      ],
      policies: [
        "Atención de urgencia disponible para todos.",
        "Atención primaria, medicamentos esenciales, atención a la maternidad y tratamiento de las enfermedades graves accesibles.",
        "Pueden aplicarse copagos moderados a las prestaciones no esenciales o de baja prioridad.",
        "Los niños, los hogares de renta baja, las enfermedades crónicas graves y las urgencias pueden quedar exentos de copago.",
        "Los médicos de familia pueden actuar como puerta de entrada previa a la atención especializada cuando sea médicamente adecuado.",
        "La prevención, la rehabilitación y los cuidados paliativos deben recibir un apoyo firme.",
        "El fraude, las intervenciones innecesarias y la sobreprescripción se controlan activamente.",
      ],
      principle:
        "La atención necesaria no debe negarse porque una persona sea pobre, pero los recursos sanitarios son finitos y deben emplearse con responsabilidad.",
      keywords: ["sanidad", "universal", "copago", "hospitales", "medicina"],
    },

    "catholic-medical-ethics": {
      title: "Ética médica católica",
      shortAnswer:
        "La sanidad pública debe respetar la ética médica católica, y los hospitales católicos deben poder mantener sus propios criterios éticos.",
      position: [
        "La sanidad pública debe respetar la ética médica católica. Las intervenciones que Restore Europa considera moralmente inadmisibles conforme a la enseñanza católica no deben recibir financiación pública ordinaria, y los hospitales católicos deben poder mantener sus criterios éticos.",
      ],
      keywords: [
        "ética médica",
        "objeción de conciencia",
        "hospitales católicos",
        "bioética",
        "financiación",
      ],
    },

    "environmental-stewardship": {
      title: "Custodia del medio ambiente",
      shortAnswer:
        "La naturaleza es una herencia confiada a la humanidad y no una mercancía sin límite ni una divinidad, y debe cuidarse en consecuencia.",
      position: [
        "La naturaleza es una herencia confiada a la humanidad y no una mercancía sin límite ni una divinidad. Restore Europa apoya la custodia de los bosques, los ríos, las tierras de cultivo, las montañas, las costas y la biodiversidad.",
      ],
      policies: [
        "Suelos sanos y agua limpia.",
        "Agricultura de proximidad y cadenas de suministro regionales.",
        "Silvicultura responsable.",
        "Productos duraderos y reparables antes que desechables.",
        "Restauración de los ecosistemas dañados.",
        "Formas de poblamiento que preserven a la vez la comunidad y el paisaje.",
      ],
      keywords: ["medio ambiente", "custodia", "naturaleza", "biodiversidad", "tierras de cultivo"],
    },

    "energy-policy": {
      title: "Política energética: doctrina general",
      shortAnswer:
        "La política energética debe juzgarse por la fiabilidad, la resiliencia estratégica, la asequibilidad, la custodia del medio ambiente y el bienestar humano a largo plazo, y no por la fidelidad a una tecnología.",
      position: [
        "La energía es infraestructura estratégica. Las naciones europeas deben conservar una capacidad propia y diversificada suficiente para preservar la independencia política, una industria productiva y la seguridad de los hogares.",
      ],
      policies: [
        "Mantener un suministro energético propio, diverso y resiliente.",
        "Reducir la dependencia peligrosa de proveedores extranjeros estratégicamente poco fiables.",
        "Evaluar las tecnologías por su impacto ambiental a lo largo del ciclo de vida, su fiabilidad, su coste, el uso del suelo y la resiliencia estratégica.",
        "Mantener suficiente generación gestionable para la estabilidad de la red.",
        "Invertir en transporte y almacenamiento de energía cuando esté técnica y económicamente justificado.",
        "Evitar las políticas que hagan económicamente inaccesibles la calefacción, el transporte o la electricidad ordinarios.",
        "Proteger los paisajes y las comunidades locales.",
        "Admitir el pluralismo tecnológico en lugar de una única fuente de energía impuesta en todas partes.",
      ],
      keywords: [
        "seguridad energética",
        "electricidad",
        "fiabilidad",
        "infraestructura estratégica",
        "asequibilidad",
        "custodia",
        "energía",
      ],
    },

    "nuclear-energy": {
      title: "Energía nuclear",
      shortAnswer:
        "La energía nuclear puede permitirse y apoyarse allí donde sea segura, fiable, estratégicamente útil y ambientalmente responsable.",
      position: [
        "El manifiesto no contiene ningún principio categórico antinuclear. La energía nuclear debe evaluarse de manera pragmática y no ideológica.",
      ],
      policies: [
        "Permitir la construcción y la continuidad de la explotación de centrales que cumplan normas de seguridad exigentes.",
        "Exigir una gestión creíble a largo plazo de los residuos nucleares.",
        "Preservar la competencia nacional en ingeniería nuclear cuando sea viable.",
        "Evaluar las tecnologías modernas de reactores según la seguridad demostrada y el comportamiento económico.",
        "Permitir que la energía nuclear forme parte de un sistema diversificado y de bajas emisiones.",
        "No exigir el despliegue nuclear allí donde las circunstancias locales hagan más racional otro mix.",
      ],
      keywords: [
        "energía nuclear",
        "centrales nucleares",
        "reactores",
        "seguridad energética",
        "electricidad",
        "residuos nucleares",
      ],
    },

    "fossil-fuels": {
      title: "Combustibles fósiles",
      shortAnswer:
        "Los combustibles fósiles no deben prohibirse por motivos ideológicos al margen de su función estratégica o económica, pero debe reducirse la contaminación innecesaria y la dependencia evitable.",
      position: [
        "El carbón, el petróleo y el gas deben juzgarse por sus costes ambientales, su fiabilidad, su necesidad estratégica y los sustitutos disponibles.",
      ],
      policies: [
        "Ninguna prohibición general e inmediata de los combustibles fósiles.",
        "Preservar los suministros necesarios para el transporte, la industria, la calefacción y las reservas estratégicas mientras se desarrollan las alternativas.",
        "Reducir la contaminación atmosférica grave y las prácticas de extracción destructivas para el medio ambiente.",
        "Fomentar la eficiencia allí donde reduzca a la vez el coste y el consumo de recursos.",
        "Evitar la dependencia de proveedores extranjeros hostiles o poco fiables.",
        "Abandonar los usos particularmente dañinos cuando existan sustitutos fiables y económicamente realistas.",
        "Evitar calendarios de transición que destruyan capacidad industrial esencial o hagan inasequible la energía básica.",
      ],
      keywords: [
        "combustibles fósiles",
        "carbón",
        "petróleo",
        "gas natural",
        "seguridad energética",
        "contaminación",
      ],
    },

    "renewable-energy": {
      title: "Energías renovables",
      shortAnswer:
        "Las energías renovables deben apoyarse allí donde sean técnicamente sólidas, económicamente razonables y compatibles con los paisajes, las comunidades y la fiabilidad de la red.",
      position: [
        "La eólica, la solar, la hidráulica, la geotérmica y otras fuentes son herramientas y no fines morales, y deben valorarse según las condiciones locales.",
      ],
      policies: [
        "Permitir y apoyar la generación renovable allí donde tenga sentido económico y ambiental.",
        "Proteger los paisajes históricos y las zonas ecológicamente sensibles frente a desarrollos industriales mal planificados.",
        "Evitar la destrucción innecesaria de tierras de cultivo productivas por proyectos energéticos de baja densidad.",
        "Contabilizar con honestidad las necesidades de almacenamiento, transporte y respaldo.",
        "Apoyar la propiedad local y comunitaria de la energía cuando sea viable.",
        "No imponer despliegues con el solo fin de cumplir objetivos numéricos, sin atender a la fiabilidad y al coste local.",
      ],
      keywords: [
        "energías renovables",
        "solar",
        "eólica",
        "hidroeléctrica",
        "geotérmica",
        "fiabilidad de la red",
        "paisaje",
      ],
    },

    "climate-policy": {
      title: "Política climática",
      shortAnswer:
        "La custodia del medio ambiente incluye una mitigación y una adaptación climáticas prudentes, pero la política climática no justifica un control centralizado ilimitado ni medidas que impongan un sacrificio desproporcionado a cambio de un beneficio insignificante.",
      position: [
        "Los riesgos climáticos deben afrontarse mediante una política ambiental práctica, el desarrollo tecnológico, unas infraestructuras resilientes y una cooperación internacional eficaz allí donde los problemas crucen genuinamente las fronteras.",
      ],
      policies: [
        "Apoyar reducciones económicamente racionales de las emisiones de gases de efecto invernadero.",
        "Dar prioridad a las medidas con un beneficio ambiental medible.",
        "Emplear la energía nuclear, las renovables, la eficiencia y otras tecnologías según los resultados prácticos.",
        "Invertir en adaptación y resiliencia frente a las inundaciones, el calor, la sequía, los incendios forestales y otros riesgos.",
        "Proteger los bosques, los suelos, los sistemas hídricos y los ecosistemas que refuerzan la resiliencia.",
        "Evitar las políticas que empobrecen desproporcionadamente a las familias corrientes y producen un beneficio ambiental insignificante.",
        "Rechazar el uso de la política climática como justificación general de una vigilancia masiva permanente o de un control digital obligatorio.",
        "Fijar objetivos exactos de emisiones solo tras un análisis técnico de la evidencia científica, la viabilidad y las condiciones económicas.",
      ],
      limits: [
        "El manifiesto no concreta fechas de emisiones netas cero, tipos del impuesto sobre el carbono, objetivos de temperatura ni cuotas vinculantes de emisión. Esas cuestiones numéricas no se deducen aquí.",
      ],
      keywords: [
        "cambio climático",
        "emisiones",
        "carbono",
        "adaptación",
        "resiliencia",
        "medio ambiente",
        "energía",
        "custodia",
      ],
    },

    "foreign-policy-doctrine": {
      title: "Doctrina de política exterior",
      shortAnswer:
        "Independencia estratégica en lugar de ambición imperial, guiada por la prudencia, el interés nacional legítimo y una presunción firme en contra de toda guerra innecesaria.",
      position: [
        "La política exterior europea debe buscar la independencia estratégica y no la ambición imperial. Debe regirse por la prudencia, el interés nacional legítimo, la defensa de los inocentes allí donde sea realistamente posible y una presunción firme en contra de toda guerra innecesaria.",
      ],
      policies: [
        "Independencia estratégica en alimentación, energía, infraestructuras, medicina e industria esencial.",
        "Oposición a las guerras ideológicas dirigidas a reconstruir civilizaciones ajenas conforme a modelos políticos abstractos.",
        "Las naciones europeas deben poder defenderse y asegurar sus fronteras.",
      ],
      keywords: [
        "política exterior",
        "defensa",
        "independencia estratégica",
        "guerra",
        "intervención",
      ],
    },

    nato: {
      title: "OTAN",
      shortAnswer:
        "Restore Europa recela de una dependencia permanente de la OTAN y favorece una mayor independencia estratégica nacional y europea.",
      position: [
        "La cooperación defensiva puede ser útil, pero la pertenencia y el alineamiento con la OTAN no deben tratarse como exigencias indiscutibles ni permanentes.",
      ],
      policies: [
        "Construir capacidades defensivas nacionales y europeas creíbles.",
        "Reducir la dependencia estratégica permanente de los Estados Unidos.",
        "Conservar la capacidad de cooperar con los Estados de la OTAN en inteligencia, tecnología de defensa, ejercicios y amenazas comunes reales.",
        "No participar en guerras por el mero hecho de demostrar solidaridad con la alianza.",
        "Mantener el control constitucional nacional sobre el despliegue de las fuerzas armadas.",
        "Rechazar las guerras ideológicas dirigidas a rehacer sociedades ajenas.",
        "Dejar abierta a reconsideración la pertenencia a la OTAN a largo plazo si la independencia estratégica puede asegurarse mediante una estructura defensiva más adecuada.",
      ],
      keywords: [
        "OTAN",
        "artículo 5",
        "defensa colectiva",
        "independencia estratégica",
        "defensa europea",
        "alianzas militares",
        "alianza",
      ],
    },

    russia: {
      title: "Rusia",
      shortAnswer:
        "Ni alineamiento permanente con Rusia ni hostilidad ideológica permanente hacia Rusia.",
      position: [
        "Rusia es una potencia extranjera con la que las naciones europeas pueden cooperar allí donde los intereses coincidan y a la que pueden oponerse allí donde los intereses choquen.",
      ],
      policies: [
        "Juzgar las relaciones por los intereses europeos y nacionales concretos.",
        "Mantener los canales diplomáticos siempre que sea posible.",
        "Cooperar en comercio, seguridad u otras materias cuando resulte materialmente beneficioso y moralmente admisible.",
        "Mantener la independencia estratégica en energía, defensa e infraestructuras críticas.",
        "No permitir una influencia rusa excesiva sobre las instituciones políticas o económicas europeas.",
        "No entrar en guerras contra Rusia por mero prestigio ideológico o geopolítico.",
        "Admitir respuestas proporcionadas a las violaciones graves de la paz o a los ataques severos contra poblaciones inocentes.",
        "Buscar soluciones negociadas cuando sean realistas.",
      ],
      keywords: [
        "Rusia",
        "Federación Rusa",
        "Europa",
        "neutralidad",
        "independencia estratégica",
        "diplomacia",
        "Moscú",
      ],
    },

    ukraine: {
      title: "Ucrania",
      shortAnswer:
        "Restore Europa no hace del alineamiento político con Ucrania ni con Rusia un objetivo autónomo de la política exterior europea.",
      position: [
        "La política respecto de la guerra entre Rusia y Ucrania debe regirse por el interés nacional legítimo, la protección de las vidas inocentes, el riesgo de escalada y una búsqueda realista de la paz, y no por la lealtad ideológica a uno u otro bando.",
      ],
      policies: [
        "Mantener la preocupación humanitaria por los civiles afectados por la guerra.",
        "Apoyar los esfuerzos serios hacia una paz negociada y duradera cuando sean realistas.",
        "Evitar compromisos militares sin límite temporal y sin una justificación concreta de seguridad nacional.",
        "No tratar la reconstrucción, el cambio de régimen o la confrontación geopolítica permanente como obligaciones europeas automáticas.",
        "Juzgar la asistencia militar caso por caso, según el interés nacional, la proporcionalidad, el riesgo de escalada y los límites morales del uso de la fuerza.",
        "Distinguir la ayuda humanitaria a los civiles de la participación directa en el conflicto militar.",
        "Evitar la hostilidad permanente hacia el pueblo ucraniano o hacia el pueblo ruso.",
      ],
      keywords: [
        "Ucrania",
        "Rusia",
        "guerra",
        "neutralidad",
        "negociaciones de paz",
        "ayuda militar",
        "política exterior",
        "Kiev",
      ],
    },

    "united-states": {
      title: "Estados Unidos",
      shortAnswer:
        "Cooperación constructiva con los Estados Unidos sin dependencia política, militar, tecnológica ni cultural.",
      position: [
        "Los Estados Unidos pueden ser un socio importante, pero las naciones europeas deben conservar su autonomía estratégica y cultural.",
      ],
      policies: [
        "Mantener relaciones diplomáticas y comerciales normales.",
        "Cooperar en defensa, ciencia, inteligencia y comercio allí donde los intereses coincidan genuinamente.",
        "Reducir la dependencia crítica de la protección militar y de las infraestructuras estratégicas estadounidenses.",
        "Reducir la dependencia excesiva de las plataformas tecnológicas extranjeras dominantes.",
        "Proteger a las instituciones europeas de la injerencia política o empresarial extranjera.",
        "Mantener la independencia cultural frente a la homogeneización comercial importada.",
        "Rechazar el alineamiento automático con las prioridades de la política exterior estadounidense.",
      ],
      keywords: [
        "Estados Unidos",
        "América",
        "autonomía estratégica",
        "independencia europea",
        "tecnología",
        "OTAN",
        "atlantismo",
      ],
    },

    china: {
      title: "China",
      shortAnswer:
        "Relaciones pragmáticas con China, unidas a una protección firme frente a la dependencia estratégica y al control de las infraestructuras críticas.",
      position: [
        "China no debe tratarse como un enemigo ideológico ni como un modelo para Europa.",
      ],
      policies: [
        "Mantener las relaciones diplomáticas y el comercio lícito.",
        "Diversificar las cadenas de suministro allí donde una dependencia excesiva genere vulnerabilidad estratégica.",
        "Proteger las infraestructuras críticas, las industrias de defensa y las tecnologías sensibles frente al control extranjero.",
        "Examinar la inversión en sectores estratégicamente sensibles por sus riesgos para la seguridad nacional.",
        "Evitar la dependencia de China en medicamentos esenciales, telecomunicaciones, tecnología energética o cadenas de suministro de relevancia militar.",
        "Resistir el espionaje, la influencia política encubierta y los sistemas importados de tipo crédito social.",
        "Cooperar en ciencia y comercio cuando proceda.",
        "Evitar una confrontación militar innecesaria allí donde la seguridad europea no esté directamente implicada.",
      ],
      keywords: [
        "China",
        "República Popular China",
        "comercio",
        "dependencia estratégica",
        "infraestructuras críticas",
        "cadenas de suministro",
        "vigilancia",
        "Pekín",
      ],
    },

    "israel-and-palestine": {
      title: "Israel y Palestina",
      shortAnswer:
        "Ningún alineamiento permanente con Israel ni con Palestina; la política debe centrarse en las vidas inocentes, la estabilidad regional, la diplomacia conforme a derecho y los intereses europeos concretos.",
      position: [
        "El conflicto no debe convertirse en un principio organizador permanente de la política exterior o interior europea.",
      ],
      policies: [
        "Mantener las relaciones diplomáticas conforme al interés nacional ordinario.",
        "No conceder apoyo político incondicional a ninguna de las partes.",
        "Condenar los ataques deliberados contra civiles, sea quien sea el autor.",
        "No vender armas ni mantener cooperación militar e industrial con ninguna parte del conflicto mientras este continúe.",
        "Permitir la ayuda humanitaria allí donde llegue de manera fiable a los civiles en auténtica necesidad.",
        "Evitar la implicación militar directa salvo ante una amenaza extraordinaria que satisfaga criterios estrictos de legítima defensa.",
        "Apoyar los esfuerzos diplomáticos realistas capaces de reducir la violencia.",
        "No permitir dentro de Europa la intimidación sectaria importada ni la violencia política.",
      ],
      keywords: [
        "Israel",
        "Palestina",
        "Gaza",
        "Oriente Próximo",
        "neutralidad",
        "ayuda humanitaria",
        "política exterior",
      ],
    },

    "foreign-aid": {
      title: "Ayuda exterior",
      shortAnswer:
        "La ayuda exterior debe ser limitada, sujeta a rendición de cuentas y centrada en necesidades humanitarias o de desarrollo concretas, y no en la construcción ideológica de naciones ni en una dependencia permanente.",
      position: [
        "Las primeras obligaciones del gobierno son con su propia comunidad política, sin que dejen de existir deberes humanitarios genuinos.",
      ],
      policies: [
        "Dar prioridad a la ayuda de emergencia tras una guerra, una hambruna, una catástrofe natural y otras catástrofes humanitarias comparables.",
        "Preferir la ayuda prestada cerca de las poblaciones afectadas cuando sea eficaz.",
        "Exigir transparencia y auditoría.",
        "Poner fin a los programas sustancialmente capturados por la corrupción o el clientelismo.",
        "Rechazar la ayuda concebida principalmente para imponer una transformación ideológica o cultural.",
        "Preferir la asistencia que desarrolla capacidades locales antes que la que genera una dependencia indefinida.",
        "Permitir el apoyo a la medicina, la seguridad alimentaria, el agua potable y la reconstrucción allí donde resulte demostrablemente eficaz.",
        "Mantener la ayuda subordinada a las obligaciones fiscales internas legítimas.",
      ],
      keywords: [
        "ayuda exterior",
        "ayuda humanitaria",
        "ayuda al desarrollo",
        "caridad",
        "cooperación internacional",
        "refugiados",
      ],
    },

    sanctions: {
      title: "Sanciones",
      shortAnswer:
        "Las sanciones económicas son instrumentos excepcionales para casos de excepcional gravedad, y no herramientas rutinarias de alineamiento ideológico.",
      position: [
        "Las sanciones pueden estar justificadas cuando se identifique con claridad una conducta gravemente lesiva y la coerción no militar tenga una perspectiva realista de limitarla sin causar un daño desproporcionado a los civiles.",
      ],
      policies: [
        "Exigir un objetivo serio y claramente identificado.",
        "Preferir las medidas selectivas contra los responsables, las organizaciones, los activos militares o las redes financieras antes que un castigo civil indiscriminado.",
        "Emplear las sanciones solo cuando las alternativas menos coercitivas resulten insuficientes.",
        "Valorar si las medidas tienen una perspectiva razonable de alcanzar su objetivo.",
        "Considerar el daño previsible a los civiles inocentes.",
        "Revisar las sanciones periódicamente y levantarlas cuando su finalidad legítima cese o sus costes se vuelvan desproporcionados.",
        "Mantener exenciones humanitarias para los bienes civiles esenciales siempre que sea viable.",
        "Reservar las sanciones económicas de gran alcance para circunstancias de excepcional gravedad.",
      ],
      keywords: [
        "sanciones",
        "embargo",
        "congelación de activos",
        "política exterior",
        "coerción económica",
        "exenciones humanitarias",
      ],
    },

    conscription: {
      title: "Servicio militar y preparación nacional",
      shortAnswer:
        "Un ejército profesional sólido, unas reservas instruidas y una población físicamente capaz son preferibles a un servicio militar obligatorio universal en tiempo de paz.",
      position: [
        "El servicio militar es honroso y necesario para la defensa, pero las fuerzas armadas ordinarias deben componerse principalmente de personas que eligen servir libremente.",
      ],
      policies: [
        "Mantener unas fuerzas armadas profesionales y de voluntarios capaces de una defensa territorial creíble.",
        "Fomentar el alistamiento mediante una instrucción seria, el reconocimiento social y unas condiciones adecuadas, antes que mediante la coacción rutinaria.",
        "Mantener una reserva instruida y una instrucción voluntaria de reservistas.",
        "No emplear el servicio militar obligatorio universal en tiempo de paz como modelo ordinario.",
        "Permitir un servicio temporal y obligatorio de defensa nacional en una emergencia defensiva extrema que amenace la supervivencia nacional, allí donde sea genuinamente necesario.",
        "Ofrecer un servicio nacional civil adecuado a los objetores de conciencia genuinos.",
        "Mantener a las fuerzas armadas sujetas a límites morales y jurídicos, y rechazar las órdenes manifiestamente ilícitas.",
        "Reforzar la educación física escolar con una preparación física progresiva y seria, natación, primeros auxilios, orientación, competencia en el medio natural y destrezas de protección civil adecuadas a la edad, con las adaptaciones médicas y por discapacidad razonables.",
      ],
      keywords: [
        "servicio militar obligatorio",
        "servicio militar",
        "servicio nacional",
        "reservistas",
        "preparación física",
        "escuelas",
        "protección civil",
        "objeción de conciencia",
        "llamamiento a filas",
      ],
    },

    "nuclear-weapons": {
      title: "Armas nucleares",
      shortAnswer:
        "Restore Europa apoya una reducción multilateral verificable y la abolición final de las armas nucleares.",
      position: [
        "Las armas nucleares crean riesgos y capacidades de destrucción de un orden distinto del de las armas convencionales ordinarias, y no deben normalizarse como instrumentos permanentes de la política.",
      ],
      policies: [
        "Trabajar por una reducción internacionalmente verificable y la abolición final de los arsenales nucleares.",
        "Apoyar acuerdos serios de control de armamentos y de no proliferación.",
        "Oponerse a los ataques nucleares deliberados contra poblaciones civiles.",
        "Oponerse al desarrollo de armas nucleares por mero prestigio geopolítico.",
        "Buscar un desarme recíproco y verificable, en lugar de medidas que dejen a un solo país singularmente expuesto a la coerción nuclear.",
        "Mantener sistemas de verificación sólidos frente a la retención secreta de arsenales prohibidos.",
        "Apoyar las medidas que reducen el riesgo de lanzamiento nuclear accidental o no autorizado.",
        "Oponerse a la proliferación hacia nuevos Estados con armas nucleares.",
        "Mantener separada la política de energía nuclear de la política de armas nucleares.",
      ],
      keywords: [
        "armas nucleares",
        "desarme nuclear",
        "disuasión",
        "no proliferación",
        "control de armamentos",
        "armas estratégicas",
      ],
    },
  },
};
