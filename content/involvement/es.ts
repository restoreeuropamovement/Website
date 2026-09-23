import type { InvolvementText } from "./index";

export const involvementText: InvolvementText = {
  join: {
    eyebrow: "Afiliación",
    title: "Únase al movimiento.",
    metaTitle: "Participar",
    lede: "Afiliarse es pertenecer. Si además puede ayudar a construir el movimiento, elija «Voluntario». El formulario pide cinco cosas, cifra su nombre y su dirección antes de guardarlos, y no le compromete a nada hasta que una persona haya revisado la solicitud.",
    description:
      "Únase al Restore Europa Movement como miembro, u ofrézcase como voluntario para ayudar a construirlo.",
    prefilled:
      "Ha llegado desde la sección en {country}, así que el formulario de abajo está puesto en ella. Cambie cualquiera de los dos campos si no es correcto.",
    roleLegend: "En calidad de qué solicita",
    fields: {
      name: "Nombre",
      email: "Correo electrónico",
      country: "País",
      region: "Región o ciudad",
      interest: "Área de interés",
      message: "Mensaje",
      messageHint:
        "Qué le gustaría hacer, y cualquier cosa de sus circunstancias que venga al caso.",
      optional: "Opcional",
      placeholder: "Elija…",
      otherCountry: "Otro",
    },
    consent:
      "Solicito afiliarme al Restore Europa Movement y acepto que lo que he introducido arriba se conserve con ese fin. La pertenencia a un movimiento político implica una opinión política, que la ley protege con más rigor que los datos personales ordinarios; puedo retirar este consentimiento y hacer que se borre el registro en cualquier momento.",
    submit: "Enviar la solicitud",
    submitting: "Enviando…",
    privacyNote: "Todo lo que introduzca se cifra antes de guardarse. Consulte nuestra",
    privacyLink: "nota de privacidad",
    received: {
      title: "Su solicitud se ha recibido.",
      body: "Ahora espera a ser revisada por una persona. La afiliación empieza cuando esa revisión concluye, no cuando se envía un formulario — así que nada está decidido todavía, y nada sobre usted se ha publicado en ninguna parte.",
      privacy:
        "Su nombre y su dirección se cifraron antes de anotarse. Qué conservamos, cuánto tiempo lo conservamos y cómo hacer que se borre se explica en la",
      privacyLink: "nota de privacidad",
    },
    unavailable:
      "El registro de miembros no acepta solicitudes en este momento. Nada de lo que escriba aquí se ha enviado. Inténtelo de nuevo en breve.",
    throttled:
      "Ya se han enviado varias solicitudes desde esta conexión. Espere una hora antes de enviar otra.",
    problemCount: {
      one: "Este formulario tiene {count} problema",
      other: "Este formulario tiene {count} problemas",
    },
    errors: {
      name: "Indique su nombre, hasta 120 caracteres.",
      email: "Indique una dirección de correo válida.",
      country: "Elija un país de la lista.",
      region: "La región o ciudad está limitada a 120 caracteres.",
      message: "Su mensaje está limitado a 1500 caracteres.",
      role: "Elija si solicita como miembro o como voluntario.",
      interest: "Elija un área de interés.",
      consent: "Debe dar su conformidad para continuar.",
    },
  },

  roles: {
    member: {
      title: "Miembro",
      summary:
        "Ser contado como miembro del movimiento. Cuando Restore Europa pueda recibir aportaciones, serán los miembros a quienes se pida sostener el trabajo.",
      commitment: "La vía ordinaria",
    },
    volunteer: {
      title: "Voluntario",
      summary:
        "Ayudar a construirlo: organización local, escritura, traducción, actos o un oficio. Elija el área de interés que mejor encaje.",
      commitment: "Según pueda",
    },
  },

  retiredRoles: {
    supporter: "Simpatizante",
    organizer: "Organizador local",
    writer: "Autor / investigador",
    professional: "Aportación profesional",
  },

  interests: {
    policy: "Políticas públicas e investigación",
    organising: "Organización local",
    writing: "Escritura y edición",
    events: "Actos y reuniones",
    translation: "Traducción",
    legal: "Derecho y cumplimiento",
    technology: "Tecnología e infraestructuras",
    agriculture: "Agricultura y tierra",
    architecture: "Arquitectura y urbanismo",
    other: "Otra",
  },

  contact: {
    eyebrow: "Contacto",
    title: "Cómo llegar al movimiento.",
    metaTitle: "Contacto",
    lede: "La correspondencia se atiende por función y no por persona, de modo que una carta llegue a quienes pueden responderla y no a quien la lea primero.",
    description:
      "Cómo llegar al Restore Europa Movement: consultas generales, prensa, investigación, organización y agrupaciones locales.",
    channelsHeading: "Vías",
    writeHeading: "Escríbanos",
    writeBody:
      "Arriba no se imprime ninguna dirección de correo, porque cada una se publica cuando la función a la que pertenece existe y alguien responde de leerla. Entretanto, este formulario llega a las mismas personas.",
    fields: {
      name: "Nombre",
      email: "Correo electrónico",
      subject: "De qué se trata",
      message: "Mensaje",
      placeholder: "Elija…",
    },
    submit: "Enviar el mensaje",
    submitting: "Enviando…",
    privacyNote: "Cifrado antes de guardarse. Consulte nuestra",
    privacyLink: "nota de privacidad",
    sent: {
      title: "Su mensaje se ha recibido.",
      body: "Lo leerá quien ocupe la función a la que lo ha dirigido. El movimiento es pequeño y responde la correspondencia a mano, de modo que una respuesta puede tardar unos días.",
      privacy:
        "Su nombre, su dirección y su mensaje se cifraron antes de guardarse y pueden borrarse a petición — consulte la",
      privacyLink: "nota de privacidad",
    },
    unavailable:
      "No se puede recibir correspondencia en este momento. Nada de lo que escriba aquí se ha enviado. Inténtelo de nuevo en breve.",
    throttled:
      "Ya se han enviado varios mensajes desde esta conexión. Espere una hora antes de enviar otro.",
    problemCount: {
      one: "Este formulario tiene {count} problema",
      other: "Este formulario tiene {count} problemas",
    },
    errors: {
      name: "Indique su nombre, hasta 120 caracteres.",
      email: "Indique una dirección de correo válida, para que pueda llegarle una respuesta.",
      subject: "Elija de qué trata su mensaje.",
      message: "Su mensaje debe tener entre 10 y 2000 caracteres.",
    },
    ratherTakePart: {
      before: "Si prefiere participar antes que preguntar,",
      joinLink: "únase al movimiento",
      between: ". La información del editor está en el",
      imprintLink: "aviso legal",
      after: ".",
    },
  },

  channels: {
    general: {
      title: "Consultas generales",
      description: "Preguntas sobre el movimiento, su programa y sus actividades.",
    },
    press: {
      title: "Prensa",
      description: "Periodistas, medios e investigadores que buscan un comentario o contexto.",
    },
    research: {
      title: "Investigación",
      description: "Correspondencia académica y aportaciones al catálogo de políticas.",
    },
    organization: {
      title: "Organización",
      description: "Administración de la afiliación, estatutos, cumplimiento y asuntos internos.",
    },
    chapters: {
      title: "Agrupaciones locales",
      description: "Constituir una agrupación, o contactar con una cuando estén constituidas.",
    },
  },
};
