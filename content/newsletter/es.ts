import type { NewsletterText } from "./index";

export const newsletterText: NewsletterText = {
  eyebrow: "Boletín",
  title: "La revista por correo electrónico",
  metaTitle: "Boletín",
  lede: "Una dirección, los ensayos del movimiento según se escriben, y en cada mensaje un enlace que te saca de la lista.",
  description:
    "Recibe la revista de Restore Europa por correo electrónico. Una dirección, cifrada antes de guardarse, confirmada antes de que se envíe nada, y eliminable desde un enlace presente en cada mensaje.",

  body: [
    {
      type: "lead",
      text: "Suscribirse pone una sola dirección de correo en una lista, y esa lista recibe los ensayos del movimiento. No se le envía nada más: ni peticiones de dinero, ni invitaciones, ni cesión a nadie.",
    },
    {
      type: "paragraph",
      text: "La revista no tiene de momento páginas públicas, así que por ahora el boletín es el lugar donde aparecen sus ensayos. Cada uno llega entero, en texto sencillo: sin imágenes, sin maquetación y sin nada que informe de si lo has abierto.",
    },
    {
      type: "paragraph",
      text: "**Se te pedirá que confirmes.** La dirección queda sin confirmar hasta que se sigue un enlace enviado a ella; antes de eso no se entrega nada, y una dirección nunca confirmada se borra en dos días. No es un trámite. Cualquiera puede escribir en un campo la dirección de un desconocido, y para quien su interés por este movimiento le costaría el empleo, el correo político que no pidió es un daño real hecho en su nombre.",
    },
    {
      type: "paragraph",
      text: "**La dirección se cifra antes de escribirse**, con una clave que no se guarda en la base de datos, de modo que una copia robada de esta se descifra en nada. Junto a ella anotamos en qué idioma estabas leyendo, para que el boletín se dirija a ti en ese idioma. Ningún nombre, ningún país y ninguna manera de que nadie descargue la lista. Qué se guarda, y durante cuánto tiempo, se expone en la [nota de privacidad][privacy].",
    },
    {
      type: "paragraph",
      text: "**Marcharse cuesta un clic.** Cada mensaje lleva un enlace que elimina la dirección, y no pide ni acceso ni motivo. Ese enlace no se guarda en ninguna parte — se recalcula a partir del registro cada vez que se usa — de modo que una copia de la base de datos no daría a nadie un botón que vacíe la lista, y un mensaje reencontrado en un archivo años después sigue funcionando.",
    },
    {
      type: "note",
      text: "Los ensayos están escritos en inglés y no se traducen. Lo que el movimiento dice alrededor de cada uno — la nota al pie, cómo darse de baja — está en el idioma en el que te suscribiste.",
    },
  ],

  form: {
    heading: "Suscribirse",
    email: "Dirección de correo electrónico",
    submit: "Suscribirse",
    submitting: "Enviando…",
    privacyNote: "Lo que ocurre con tu dirección se expone en la",
    privacyLink: "nota de privacidad",
    invalid: "Eso no parece una dirección de correo electrónico. No se ha enviado ni guardado nada.",
    unavailable:
      "Ahora mismo no pueden registrarse suscripciones, así que este formulario no acepta direcciones. Nada de lo que escribas aquí se guardaría, y preferimos decirlo antes que tomarla.",
    throttled:
      "Desde esta conexión ya han llegado varias peticiones en la última hora. Espera un poco y prueba otra vez — una dirección solo se añade una vez, así que un intento anterior puede haber funcionado ya.",
    busy:
      "El sitio ha alcanzado el número de envíos que acepta en una hora, contando a todo el mundo. Casi con toda seguridad no tiene nada que ver contigo. Inténtalo dentro de un rato.",
    sent: {
      title: "Mira ahora en ese buzón.",
      body: "Hay un mensaje en camino. Lo que diga depende de lo que ya haya en la lista, y solo lo verá quien pueda abrir ese buzón — esta página no se entera en ninguno de los dos casos, para que el formulario no pueda usarse para averiguar quién está suscrito. Si el mensaje lleva un enlace de confirmación, no se enviará nada más hasta que se siga.",
    },
  },

  confirm: {
    eyebrow: "Boletín",
    title: "Confirma tu suscripción",
    metaTitle: "Confirma tu suscripción",
    lede: "Una pulsación, y la dirección a la que pertenece este enlace entra en la lista.",
    why: "Un botón y no el enlace a secas, porque los filtros de correo de las empresas abren todas las direcciones de un mensaje entrante para comprobar que no son peligrosas. Si bastara con seguir el enlace, esos analizadores confirmarían suscripciones en nombre de personas que nunca abrieron el correo — y son más frecuentes justo allí donde más de cerca se vigila lo que alguien lee.",
    submit: "Confirmar",
    submitting: "Confirmando…",
    done: {
      title: "Confirmado.",
      body: "La dirección está en la lista, y el próximo ensayo se le enviará. Cada mensaje lleva un enlace que vuelve a sacarla.",
    },
    failed: {
      title: "Ese enlace no ha funcionado.",
      body: "Un enlace de confirmación vale dos días y se puede usar una vez. Si ha caducado, o ya se ha usado, pídelo de nuevo desde la [página del boletín][newsletter] y se enviará uno nuevo.",
    },
    missing:
      "Esta dirección no lleva ninguna ficha de confirmación, así que aquí no hay nada que confirmar. Abre el enlace del mensaje que se te envió.",
  },

  unsubscribe: {
    eyebrow: "Boletín",
    title: "Salir de la lista",
    metaTitle: "Salir de la lista",
    lede: "Una pulsación, y la dirección a la que pertenece este enlace deja de recibir nada.",
    why: "Un botón y no una baja al abrirlo, por la misma razón que la confirmación: los analizadores de enlaces integrados en los sistemas de correo de las empresas abren todas las direcciones de un mensaje, y un enlace que diera de baja al abrirse eliminaría en silencio a lectores que nunca pidieron marcharse.",
    submit: "Darse de baja",
    submitting: "Eliminando…",
    done: {
      title: "Hecho. No se enviará nada más.",
      body: "No decimos si la dirección estaba en la lista, porque quien tiene este enlace no es necesariamente la persona a la que pertenece la dirección, y esa no es una pregunta que vayamos a responderle a un desconocido. Puedes suscribirte de nuevo cuando quieras; empezará otra vez por el paso de la confirmación.",
    },
    missing:
      "Esta dirección no lleva ninguna ficha, así que aquí no hay nada que eliminar. Usa el enlace al pie de cualquiera de los mensajes que se te enviaron.",
  },
};
