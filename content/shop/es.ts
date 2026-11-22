import type { ShopText } from "./index";

/** The sticker shop, in Spanish. Typed against `en.ts`; see its header. */
export const shopText: ShopText = {
  meta: {
    eyebrow: "Tienda",
    title: "Pegatinas",
    metaTitle: "Pegatinas",
    description: "Pegatinas de Restore Europa, empaquetadas a mano y enviadas desde Austria a toda Europa.",
    lede: "Elija un diseño y cuántas quiere. Las empaquetamos a mano y se las enviamos desde Austria, a toda Europa.",
  },

  hero: {
    from: "Desde {price}",
    posted: "Enviadas desde Austria",
    noAccount: "Sin necesidad de cuenta",
    supports: "Cada pedido financia el movimiento",
    preorder: "Preventa: envío en el plazo de un mes",
    cta: "Elija sus pegatinas",
  },

  how: {
    title: "Cómo funciona",
    steps: [
      { title: "Elija", body: "Elija un diseño, una cantidad y el país de destino. El total se muestra antes de pagar, gastos de envío incluidos." },
      { title: "Pague de forma segura", body: "Usted paga en la página de pago de Stripe. Este sitio no ve nunca su tarjeta y no guarda ningún registro de quién es usted." },
      { title: "Se las enviamos", body: "Sus pegatinas se empaquetan a mano y se envían desde Austria. Conserve la página del pedido para ver cuándo salen." },
    ],
  },

  test: {
    title: "Modo de prueba",
    body: "Aquí los pagos van al entorno de pruebas de Stripe y no se imprime ni se envía nada. Use los números de tarjeta de prueba de Stripe, nunca una tarjeta real.",
  },

  closed: {
    title: "La tienda está cerrada",
    body: "En este momento no se pueden aceptar pedidos. Nada en esta página le cobrará ni le enviará nada.",
  },

  unavailable: {
    title: "No se puede acceder a la tienda",
    body: "Los diseños no se han podido cargar en este momento. No se ha cobrado nada. Vuelva a intentarlo más tarde.",
  },

  empty: {
    title: "Todavía no hay diseños",
    body: "En este momento no hay nada que pedir.",
  },

  sticker: {
    title: "La pegatina",
    size: "9,8 × 9,8 cm",
    facts: ["9,8 × 9,8 cm, cuadrada", "A todo color sobre papel adhesivo blanco", "Reverso precortado, fácil de despegar"],
    specs: {
      title: "Especificaciones",
      rows: [
        { label: "Tamaño", value: "9,8 × 9,8 cm, cuadrada" },
        { label: "Material", value: "Papel autoadhesivo blanco, 80 g/m²" },
        { label: "Impresión", value: "A todo color (CMYK), solo por delante" },
        { label: "Reverso", value: "Precortado, para que se despegue con facilidad" },
        { label: "Acabado", value: "Ninguno: sin laminado ni barniz" },
        { label: "Uso", value: "Pensada para interiores" },
      ],
    },
    delivery: {
      title: "Envío",
      rows: [
        { label: "Desde", value: "Austria, empaquetadas y enviadas a mano" },
        { label: "Cómo", value: "Por carta, sin seguimiento" },
        { label: "Gastos de envío", value: "Según el peso, incluidos en su total antes de pagar" },
        { label: "Adónde", value: "La UE y la mayor parte de Europa; fuera de la UE, la aduana de su país puede cobrar a la entrega" },
      ],
      preorderRow: { label: "Cuándo", value: "Preventa: envío en el plazo de un mes desde su pedido" },
    },
  },

  soldOut: {
    title: "Agotado",
    preorderTitle: "Preventa agotada",
    body: "Todas las pegatinas de esta tirada ya están pedidas. Por ahora no se puede hacer ningún pedido.",
  },

  form: {
    design: "Diseño",
    quantity: "Cuántas",
    quantityOption: { one: "{count} pegatina", other: "{count} pegatinas" },
    perSticker: "{price} cada una",
    left: "Quedan {count} pegatinas de esta tirada",
    notEnough: "no hay suficientes",
    country: "Enviar a",
    countryPlaceholder: "Elija un país",
    summaryTitle: "Su pedido",
    postagePending: "Elija un país arriba",
    stickers: "Pegatinas",
    delivery: "Gastos de envío",
    total: "Total",
    each: "unos {price} cada una",
    secure: "Pago seguro con Stripe",
    notDelivered: "Esta cantidad todavía no se puede enviar a ese país.",
    customs:
      "Este envío pasa por la aduana. Su país puede cobrar un impuesto de importación o una tasa de gestión a la entrega; eso queda entre usted y su oficina de correos, y no forma parte del total que aquí se indica.",
    preorder:
      "Preventa. Las pegatinas se están imprimiendo ahora, y su pedido se envía en el plazo de un mes desde que lo hace.",
    submit: "Continuar al pago",
    submitting: "Abriendo la página de pago…",
    payment:
      "La página de Stripe le pide su nombre, su dirección de correo electrónico y su dirección de entrega. Este sitio no ve nunca su tarjeta y no guarda ningún registro de quién es usted: quienes envían sus pegatinas ven su dirección para este único sobre.",
    privacyLink: "Cómo se tratan sus datos",
  },

  errors: {
    design: "Elija un diseño.",
    quantity: "Elija cuántas.",
    country: "Elija un país de destino.",
    "not-offered": "Esa cantidad todavía no se puede enviar a ese país.",
  },

  states: {
    throttled: "Se han iniciado demasiados pedidos desde esta conexión. Espere una hora y vuelva a intentarlo.",
    busy: "La tienda se está tomando un respiro tras una avalancha de pedidos. Vuelva a intentarlo dentro de un rato.",
    unavailable: "La página de pago no se ha podido abrir en este momento. No se ha cobrado nada. Vuelva a intentarlo más tarde.",
    closed: "La tienda acaba de cerrar. No se ha cobrado nada.",
    soldout: "No quedan suficientes pegatinas para esa cantidad. Elija menos. No se ha cobrado nada.",
  },

  order: {
    metaTitle: "Su pedido",
    kicker: "Pedido",
    missingTitle: "Pedido no encontrado",
    missingBody:
      "Esta dirección no corresponde a ningún pedido. Si acaba de pagar, puede que la página de pago todavía nos lo esté transmitiendo: vuelva a cargarla dentro de un minuto.",
    keep: "Conserve la dirección de esta página; también se la hemos enviado por correo electrónico. Este sitio no guarda su dirección de correo electrónico, así que esta página es la forma de seguir el estado de su pedido.",
    design: "Diseño",
    quantity: "Cantidad",
    destination: "Enviado a",
    total: "Pagado",
    tracking: "Seguimiento",
    test: "Pedido de prueba: no se imprimirá ni se enviará nada.",
    preorder: "Esto es una preventa: se envía en el plazo de un mes desde el día en que hizo el pedido.",
    withdrawn:
      "Usted desistió de este pedido el {date}. Le reembolsamos su pago, gastos de envío incluidos, en un plazo de 14 días desde ese día. Si las pegatinas ya le han llegado, devuélvalas completas; podemos esperar a recibirlas antes de hacer el reembolso.",
    withdrawLink: "Desistir de esta compra",
    status: {
      checkout: "A la espera de que se confirme el pago.",
      expired: "El pago no se completó, así que no se ha cobrado nada y no se enviará nada.",
      paid: "Pagado. Su pedido está a punto de pasar a empaquetado.",
      submitting: "Pagado. Su pedido está pasando a empaquetado.",
      retry: "Pagado. Su pedido todavía no ha podido pasar a empaquetado; lo hará automáticamente.",
      review: "Pagado. Su pedido necesita un momento de atención de una persona antes de enviarse. No hace falta nada más por su parte.",
      submitted: "Empaquetándose para el envío.",
      in_production: "Empaquetándose para el envío.",
      shipped: "Enviado.",
      delivered: "Entregado.",
      cancelled: "Cancelado. Lo que haya pagado se le ha reembolsado o se le reembolsará en su tarjeta.",
    },
  },

  confirmation: {
    subject: "Su pedido de pegatinas {reference}",
    intro:
      "Gracias por su pedido. Su pago ha llegado y sus pegatinas están en nuestra lista de empaquetado.",
    orderHeading: "SU PEDIDO",
    rows: {
      reference: "Pedido",
      design: "Diseño",
      quantity: "Cantidad",
      destination: "Enviar a",
      stickers: "Pegatinas",
      postage: "Gastos de envío",
      total: "Total pagado",
    },
    nextHeading: "QUÉ OCURRE AHORA",
    next: "Empaquetamos sus pegatinas a mano y las enviamos desde Austria por carta, sin seguimiento. Esta página muestra cuándo se ha enviado su pedido:",
    preorder: "Esto es una preventa. Las pegatinas se están imprimiendo ahora, y su pedido se envía en el plazo de un mes a partir de hoy.",
    withdraw: "¿Ha cambiado de opinión? Puede desistir de esta compra en un plazo de 14 días desde que reciba las pegatinas, sin dar ninguna razón: {withdraw}",
    customs:
      "Su pedido pasa por la aduana. Su país puede cobrar un impuesto de importación o una tasa de gestión a la entrega; eso no forma parte del total indicado arriba.",
    test: "Esto ha sido un pedido de prueba. No se ha cobrado nada y no se enviará nada.",
    reply:
      "Este mensaje se ha enviado automáticamente y las respuestas no se leen. Si algo no está bien en su pedido, escríbanos a {contact} e indique {reference}.",
    why: "Recibe este mensaje porque pidió pegatinas en {shop}. No guardamos su dirección de correo electrónico y no volveremos a escribirle sobre este pedido.",
  },

  withdrawal: {
    metaTitle: "Desistir de una compra",
    kicker: "Tienda",
    title: "Desistir de su compra",
    lede: "Puede desistir de un pedido de pegatinas en un plazo de 14 días desde que lo reciba, sin dar ninguna razón. Rellene los datos de abajo, compruébelos y confirme. Le respondemos por correo electrónico con la fecha y la hora en que lo recibimos.",
    shopLink: "¿Ha cambiado de opinión? Desistir de una compra",
    name: "Su nombre",
    reference: "Número de pedido",
    referenceHint: "Empieza por RE- y figura en su correo de confirmación.",
    email: "Dirección de correo electrónico",
    emailHint: "La que usó al pagar.",
    review: "Continuar",
    checkTitle: "Compruebe y confirme",
    checkBody: "Usted desiste de esta compra:",
    confirm: "Confirmar el desistimiento",
    change: "Cambiar los datos",
    doneTitle: "Desistimiento recibido",
    doneBody:
      "Si estos datos corresponden a un pedido, su desistimiento queda registrado y una confirmación va de camino a esa dirección de correo electrónico, con la fecha y la hora en que lo recibimos. Si no llega nada en una hora, compruebe el número de pedido y la dirección de correo electrónico y vuelva a intentarlo, o escríbanos mediante el formulario de contacto.",
    errors: {
      name: "Indique su nombre.",
      reference: "Indique el número de pedido, que empieza por RE-.",
      email: "Indique la dirección de correo electrónico con la que hizo el pedido.",
    },
    states: {
      throttled: "Demasiados intentos desde esta conexión. Espere una hora y vuelva a intentarlo.",
      unavailable: "No se ha podido enviar en este momento. Vuelva a intentarlo más tarde, o escríbanos mediante el formulario de contacto.",
    },
    acknowledgement: {
      subject: "Desistimiento recibido: pedido {reference}",
      intro: "Recibimos su desistimiento del pedido {reference} el {when}.",
      name: "Nombre indicado: {name}",
      nextHeading: "QUÉ OCURRE AHORA",
      notPosted: "Si sus pegatinas todavía no se han enviado, ya no se enviarán.",
      returns:
        "Si ya le han llegado, devuélvalas completas. Escríbanos a través de {contact} y le diremos adónde enviarlas.",
      refund:
        "Le reembolsamos su pago, incluidos los gastos de envío que pagó, en un plazo de 14 días a partir de hoy, en la tarjeta con la que pagó. Podemos esperar a que las pegatinas nos lleguen de vuelta antes de hacer el reembolso.",
      why: "Recibe este mensaje porque se presentó un desistimiento para este pedido en {shop}. Las respuestas a este mensaje no se leen.",
    },
  },

  safety: {
    title: "Seguridad del producto",
    product: "Producto",
    productValue: "Pegatina, 9,8 × 9,8 cm, papel blanco autoadhesivo, impresa a todo color",
    manufacturer: "Fabricante",
    seller: "Vendido por",
  },

  terms: {
    metaTitle: "Condiciones de venta",
    kicker: "Tienda",
    title: "Condiciones de venta",
    lede: "Las condiciones con arreglo a las cuales se venden las pegatinas en esta tienda, con su derecho a desistir de una compra y un formulario para hacerlo.",
    updated: "Vigentes a 22 de noviembre de 2026.",
    sections: [
      {
        heading: "1. Quién vende",
        paragraphs: [
          "Las pegatinas de esta tienda las vende {seller}, un empresario individual en Austria. Puede contactar con nosotros por correo electrónico en {email} o por teléfono en el {phone}. Nuestra dirección postal se facilita previa solicitud por correo electrónico.",
        ],
      },
      {
        heading: "2. Qué abarcan estas condiciones",
        paragraphs: [
          "Estas condiciones se aplican a todos los pedidos que un consumidor haga en esta tienda. La descripción de las pegatinas en la página de la tienda forma parte de ellas.",
        ],
      },
      {
        heading: "3. Cómo se celebra el contrato",
        paragraphs: [
          "En la página de la tienda usted elige un diseño, una cantidad y el país de entrega, y ve el total, gastos de envío incluidos. Al continuar al pago pasa a la página de pago de nuestro proveedor de pagos, Stripe, donde introduce su nombre, su dirección de correo electrónico, su dirección de entrega y sus datos de pago, y todavía puede corregirlos.",
          "Pulsar allí el botón de pago constituye una oferta de compra vinculante. El contrato se celebra cuando se confirma el pago. A continuación le enviamos un correo electrónico de confirmación con su número de pedido y un enlace a la página de su pedido.",
        ],
      },
      {
        heading: "4. Precios y pago",
        paragraphs: [
          "Todos los precios se expresan en euros y son lo que usted paga. Los gastos de envío se muestran por separado antes de pagar y están incluidos en el total. No añadimos ningún otro cargo.",
          "Fuera de la Unión Europea, las aduanas de su país pueden cobrar a la entrega impuestos de importación o una tasa de gestión. Esos importes no forman parte de nuestro precio.",
          "Usted paga en la página de pago de Stripe con uno de los medios que allí se ofrecen. El importe se cobra en el momento del pedido.",
        ],
      },
      {
        heading: "5. Entrega",
        paragraphs: [
          "Enviamos las pegatinas desde Austria por correo ordinario, sin seguimiento, a la dirección que usted indique en la página de pago, a los países que se ofrecen en la página de la tienda.",
          "Los pedidos hechos mientras la tienda los marca como reservas se envían en el plazo de un mes desde el día del pedido. La página de su pedido indica cuándo se ha enviado.",
          "Si finalmente no podemos entregar un pedido, por ejemplo porque se imprimen menos pegatinas de las previstas, se lo comunicamos por correo electrónico y le reembolsamos de inmediato el importe íntegro.",
        ],
      },
      {
        heading: "6. Su derecho de desistimiento",
        paragraphs: [
          "Tiene usted derecho a desistir del presente contrato en un plazo de 14 días naturales sin necesidad de justificación. El plazo de desistimiento expirará a los 14 días naturales del día que usted o un tercero por usted indicado, distinto del transportista, adquiera la posesión material de las pegatinas.",
          "Para ejercer el derecho de desistimiento, deberá usted notificarnos su decisión de desistir del contrato a través de una declaración inequívoca. La vía más rápida es nuestra [función de desistimiento][withdraw]. También puede escribir a {email} o utilizar el modelo de formulario de desistimiento que figura a continuación, aunque su uso no es obligatorio. Para cumplir el plazo de desistimiento, basta con que la comunicación relativa al ejercicio por su parte de este derecho sea enviada antes de que venza el plazo correspondiente.",
          "**Consecuencias del desistimiento.** En caso de desistimiento por su parte, le devolveremos todos los pagos recibidos de usted, incluidos los gastos de entrega ordinaria, sin ninguna demora indebida y, en todo caso, a más tardar 14 días naturales a partir de la fecha en la que se nos informe de su decisión de desistir del presente contrato. Procederemos a efectuar dicho reembolso utilizando el mismo medio de pago empleado por usted, a no ser que hayamos dispuesto expresamente lo contrario; en todo caso, no incurrirá en ningún gasto como consecuencia del reembolso. Podremos retener el reembolso hasta haber recibido las pegatinas, o hasta que usted haya presentado una prueba de su devolución, según qué condición se cumpla primero.",
          "Si las pegatinas ya le han llegado, deberá devolvérnoslas sin ninguna demora indebida y, en cualquier caso, a más tardar en el plazo de 14 días naturales a partir de la fecha en que nos comunique su decisión de desistimiento. Le indicamos la dirección de devolución por correo electrónico cuando desista. Deberá usted asumir el coste directo de devolución. Solo será usted responsable de la disminución de valor de las pegatinas resultante de una manipulación distinta a la necesaria para establecer su naturaleza y su funcionamiento, por ejemplo si faltan pegatinas o están usadas o dañadas.",
        ],
      },
      {
        heading: "7. Si algo no está bien",
        paragraphs: [
          "Se aplica la garantía legal de los bienes. Si las pegatinas llegan dañadas, mal impresas o no conformes con la descripción, o no llegan, escríbanos a {email} indicando su número de pedido y lo solucionaremos enviándole otras en sustitución o reembolsándole el importe.",
        ],
      },
      {
        heading: "8. Legislación aplicable",
        paragraphs: [
          "Se aplica el Derecho austriaco, con exclusión de sus normas de conflicto de leyes. Si usted es un consumidor que reside en otro país, ello no le priva de la protección que le otorgan las disposiciones imperativas del Derecho de ese país.",
        ],
      },
    ],
    form: {
      heading: "Modelo de formulario de desistimiento",
      intro: "Si desea desistir del contrato, puede cumplimentar este formulario y enviárnoslo. Su uso no es obligatorio.",
      lines: [
        "A la atención de {seller}, {email}:",
        "Por la presente le comunico/comunicamos (*) que desisto de mi/desistimos de nuestro (*) contrato de venta del siguiente bien (*):",
        "Pedido el (*) / recibido el (*):",
        "Número de pedido:",
        "Nombre del consumidor o de los consumidores:",
        "Domicilio del consumidor o de los consumidores:",
        "Firma del consumidor o de los consumidores (solo si el presente formulario se presenta en papel):",
        "Fecha:",
      ],
      note: "(*) Táchese lo que no proceda.",
    },
    shopLink: "Condiciones de venta",
    accept: "Al continuar al pago acepta nuestras [condiciones de venta][terms], que incluyen su derecho de desistimiento.",
  },

  item: { one: "{count} pegatina — {design}", other: "{count} pegatinas — {design}" },
  shippingLabel: "Gastos de envío",
  addressNote:
    "Compruebe su dirección con cuidado, sobre todo el número de la casa y el código postal. Sus pegatinas van por carta ordinaria sin seguimiento, así que una carta enviada a una dirección mal escrita no se puede rastrear.",
};
