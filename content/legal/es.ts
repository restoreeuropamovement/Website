import type { LegalText } from "./index";

export const legalText: LegalText = {
  privacy: {
    eyebrow: "Legal",
    title: "Privacidad",
    metaTitle: "Privacidad",
    lede: "Leer este sitio no recoge nada que le identifique. Dos páginas piden algo, y solo si usted decide darlo. Lo que ocurre con ello se expone a continuación.",
    description:
      "Leer este sitio no identifica a nadie: sin cookies, sin rastreo, solo un recuento anónimo de visitas. Dos páginas piden algo, y solo si usted decide darlo. Qué se conserva, qué está cifrado y cómo hacer que se borre.",
    sections: {
      "what-we-collect": {
        title: "Qué recoge este sitio",
        body: [
          {
            type: "lead",
            text: "Leerlo no recoge nada que le identifique. Este sitio web no tiene cuentas, ni publicidad, ni píxeles de rastreo, ni contenidos incrustados de terceros.",
          },
          {
            type: "paragraph",
            text: "Leerlo no instala ninguna cookie ni escribe nada en el almacenamiento local o de sesión de su navegador. No se construye, ni se compra, ni se vende ningún perfil de su visita. Los únicos scripts son las dos medidas que se describen más abajo — un contador de tráfico y una medida del tiempo que se dedica a leer las páginas — y ninguna de las dos puede identificarle.",
          },
          {
            type: "paragraph",
            text: "Hay dos lugares en este sitio a través de los cuales puede usted entregar datos personales, y en ambos tiene que quererlo de veras: la solicitud de afiliación en [Participar][join] y el formulario de mensaje en [Contacto][contact]. Nada más en el sitio transmite nada, y a ninguno de los dos formularios se llega por accidente.",
          },
        ],
      },

      membership: {
        title: "Si solicita afiliarse",
        body: [
          {
            type: "paragraph",
            text: "Solicitarlo envía al movimiento lo que usted haya escrito, y allí se anota en una base de datos. Enviar el formulario no le convierte en miembro: el registro llega marcado como no leído, y decide una persona. Hasta entonces, y también después, usted tiene derecho a saber exactamente qué se conserva.",
          },
          {
            type: "paragraph",
            text: "Una solicitud pasa por cinco estados, y nada la mueve entre ellos salvo el juicio de alguien. Llega como **no leída**. Cuando un administrador empieza a considerarla, pasa a **en revisión**. Si le escriben con preguntas, queda marcada como **a la espera de respuesta** hasta que usted conteste — un estado que existe para que nadie a quien se haya escrito quede olvidado. Después se convierte en **aceptada**, como miembro o como voluntario según lo que usted haya pedido, o en **rechazada**. Ningún paso es automático, y ningún algoritmo le evalúa en ningún momento.",
          },
          {
            type: "paragraph",
            text: "Un registro contiene siete cosas como máximo: su nombre, su dirección de correo electrónico, su país, la calidad en la que solicitó, un área de interés y — solo si usted decide darlos — su región o ciudad y un mensaje. No hay dirección postal, ni número de teléfono, ni fecha de nacimiento. Nada se infiere, ni se enriquece, ni se compra en ninguna otra parte.",
          },
          {
            type: "paragraph",
            text: "Los dos campos opcionales son los que más pueden decir de usted, de modo que se tratan con el mismo cuidado que su nombre. Una región acota a una persona mucho más que un país, y un mensaje es texto libre — que es donde la gente menciona a un empleador, una situación familiar o una situación jurídica. **Ambos están cifrados**, y ninguno de los dos se escribe jamás en el registro administrativo. Si prefiere no darlos, déjelos vacíos; la solicitud funciona exactamente igual.",
          },
          {
            type: "subheading",
            text: "Una cosa que no escribió usted",
          },
          {
            type: "paragraph",
            text: "Mientras considera una solicitud, un administrador puede adjuntarle una nota breve — el contenido de una conversación, el motivo de una decisión, a quién conviene presentarle. Es lo único de su registro que no ha escrito usted mismo, y es el único campo de toda la base de datos que contiene la apreciación de una persona sobre otra, de modo que está **cifrada como el resto** y no se escribe nunca en el registro administrativo.",
          },
          {
            type: "paragraph",
            text: "También forma parte de su registro a efectos del derecho de acceso. Si pregunta qué se conserva sobre usted, la nota se incluye en la respuesta. De quien escriba una se espera que la escriba sabiéndolo.",
          },
          {
            type: "subheading",
            text: "Por qué nos está permitido conservarlo",
          },
          {
            type: "paragraph",
            text: "Pertenecer a un movimiento político implica una opinión política, que el Reglamento General de Protección de Datos (RGPD) trata como una de las categorías especiales de datos personales con arreglo a su artículo 9 y protege con más rigor que los datos personales ordinarios. Nos amparamos en su consentimiento explícito, prestado cuando solicitó, junto con el artículo 9, apartado 2, letra d), que permite a una entidad sin ánimo de lucro con finalidad política tratar los datos de sus propios miembros — siempre que los datos no se comuniquen fuera de la entidad sin consentimiento. No se comunican, ni se comunicarán.",
          },
          {
            type: "subheading",
            text: "Cuánto tiempo se conserva",
          },
          {
            type: "list",
            marker: "rule",
            items: [
              "Mientras la afiliación esté vigente, y no más tiempo del que el movimiento lo necesite.",
              "Se borra cuando usted lo pida, sin que tenga que dar ninguna razón.",
              "Nada se borra automáticamente por el transcurso de un plazo, porque una solicitud que nadie ha leído todavía es la solicitud de alguien y no algo caducado.",
              "**Una solicitud rechazada se conserva, marcada como rechazada, en lugar de borrarse.** Es una decisión deliberada y tiene un coste para usted, así que se dice con claridad: borrar el registro borraría también el modo de reconocer que esa misma solicitud ya había sido considerada antes, y el movimiento volvería a examinarla desde el principio cada vez que se reenviara. Si prefiere que no se conserve nada en absoluto, pídalo, y se borrará.",
              "El registro administrativo que se describe más abajo anota que un registro se creó, se modificó o se borró, y por quién, pero nunca su contenido.",
            ],
          },
          {
            type: "subheading",
            text: "Qué hace el propio formulario",
          },
          {
            type: "paragraph",
            text: "Su nombre, su dirección, su región y su mensaje se cifran antes de anotarse, en la misma petición — ninguno de ellos se guarda jamás en forma legible. La respuesta que usted ve es idéntica tanto si la dirección ya figuraba en el registro de miembros como si no, de modo que el formulario no puede emplearse para comprobar si una persona determinada es miembro. Las solicitudes están limitadas en frecuencia por conexión, y hay un tope de cuántas aceptará el sitio en una hora entre todo el mundo; ambas cosas son defensas frente a un script que llene el registro de miembros, y no medidas dirigidas contra usted.",
          },
          {
            type: "paragraph",
            text: "El formulario lleva además un campo que usted no verá nunca: una casilla vacía, situada fuera de la pantalla, que el teclado omite y que está oculta a los lectores de pantalla. Los remitentes automáticos rellenan todos los campos que encuentran y las personas no pueden rellenar este, de modo que todo lo que llegue con él cumplimentado se descarta sin guardarse. **No empleamos CAPTCHA ni detección de robots de terceros**, deliberadamente — eso funciona haciendo que una empresa ajena observe a todo el que intenta unirse a un movimiento político, lo cual es un trato peor que el que aquí se hace.",
          },
          {
            type: "paragraph",
            text: "Sus datos no se venden nunca, no se comparten nunca con otra organización, no se utilizan nunca para construir un perfil publicitario y no se ceden nunca a un tercero con ningún fin. No se toma sobre usted ninguna decisión automatizada.",
          },
        ],
      },

      "how-it-is-protected": {
        title: "Cómo está protegido",
        body: [
          {
            type: "paragraph",
            text: "Un registro de miembros es exactamente la clase de documento que nunca debe filtrarse, de modo que está construido sobre el supuesto de que algún día algo saldrá mal. Lo que sigue es una descripción de las salvaguardias y no la promesa de que nada pueda ocurrir. La correspondencia enviada a través del formulario de contacto se conserva del mismo modo.",
          },
          {
            type: "list",
            marker: "rule",
            items: [
              "**Su nombre, su dirección de correo electrónico, su región, su mensaje y cualquier nota escrita sobre usted están cifrados** antes de anotarse, con una clave que no se guarda en la base de datos. Una copia robada de la base de datos, o de una copia de seguridad suya, no descifra nada.",
              "**Su país se conserva sin cifrar**, porque contar y organizar por países es la razón de que el registro exista. Por sí solo no identifica a nadie. Su región, que le acotaría mucho más, no se trata así — se cifra con lo demás.",
              "**Nadie inicia sesión con contraseña.** El acceso administrativo exige una passkey guardada en un dispositivo físico, que no puede adivinarse, ni obtenerse por suplantación, ni leerse en una base de datos robada.",
              "**Leer nombres o mensajes exige una segunda confirmación.** Tener la sesión iniciada solo muestra recuentos; revelar a cualquier persona, o abrir cualquier carta, requiere una confirmación nueva con la passkey, válida durante unos minutos. Quien robe una sesión activa obtiene estadísticas, no personas.",
              "**Toda lectura queda registrada** — quién miró, y cuándo. No solo cada cambio: en un registro como este, el acto de mirar es lo que merece anotarse. Lo que se buscó se anota como un resumen criptográfico irreversible, de modo que el registro puede confirmar si se consultó a una persona determinada sin convertirse él mismo en una lista de nombres.",
              "**No existe ninguna función de exportación.** El registro no puede descargarse como archivo, porque un archivo es la forma en que esas listas se escapan.",
            ],
          },
          {
            type: "paragraph",
            text: "Nadie ajeno a la propia administración del movimiento puede leer parte alguna de él, y ninguna parte se publica en ningún sitio, con ningún grado de agregación, sin consentimiento.",
          },
        ],
      },

      forms: {
        title: "Los dos formularios",
        body: [
          {
            type: "paragraph",
            text: "El primero es la solicitud de afiliación en [Participar][join], descrita más arriba.",
          },
          {
            type: "paragraph",
            text: "El segundo es el formulario de mensaje en [Contacto][contact]. Conserva su nombre, su dirección de correo electrónico, a qué función se dirigió y lo que escribió. El nombre, la dirección y el mensaje se cifran exactamente igual que los datos de un miembro — escribir a una organización no es lo mismo que pertenecer a ella, pero la distancia es más estrecha de lo que parece, y una carta que dice que está pensando en afiliarse revela tanto como el propio registro de miembros.",
          },
          {
            type: "paragraph",
            text: "La correspondencia se conserva hasta que se ha atendido y no más tiempo del que su respuesta requiera, se borra a petición y no se usa nunca para incorporarle al registro de miembros. Afiliarse es una decisión aparte que usted tiene que tomar deliberadamente. En la página de contacto no se imprime ninguna dirección de correo electrónico, porque cada una se publica solo cuando la función a la que pertenece existe y alguien responde de leerla.",
          },
        ],
      },

      analytics: {
        title: "Cifras de tráfico",
        body: [
          {
            type: "paragraph",
            text: "Las visitas se cuentan con Vercel Web Analytics, que funciona sin cookies: no instala nada en su dispositivo, no guarda datos personales, no le asigna ningún identificador y no puede seguirle de un sitio a otro. Se sirve desde este dominio y no desde una red de terceros, de modo que cargar una página no revela su visita a nadie más. Por eso el sitio no lleva ningún banner de consentimiento — no hay nada a lo que consentir.",
          },
          {
            type: "paragraph",
            text: "Lo que produce es un recuento de páginas vistas y de visitantes, desglosado por página, por país, por dispositivo, por sistema operativo y por navegador. No está vinculado a los registros de afiliación, y no puede estarlo: los dos no tienen en común nada que permita unirlos.",
          },
          {
            type: "paragraph",
            text: "Esos totales diarios se copian cada noche a la base de datos propia de este proyecto, porque el servicio de recuento sólo conserva el último mes y nos gustaría poder abarcar un año. Lo que se copia son los totales mismos — una fecha, un número de visitantes, un número de páginas vistas — y nada que se refiera a una visita concreta.",
          },
          {
            type: "paragraph",
            text: "Otras dos cosas se miden aquí y no en el servicio de recuento, y ambas se describen por entero porque en los dos casos su navegador nos envía algo mientras usted lee.",
          },
          {
            type: "paragraph",
            text: "La primera es cuántas personas tienen el sitio abierto en este momento. Al cargarse, una página genera un número al azar y lo guarda en la memoria de la página — no en una cookie, no en el almacenamiento local o de sesión, en ningún lugar que perdure. Se descarta cuando usted cierra la pestaña o recarga, de modo que no puede reconocerle a su vuelta, y nuestra copia se borra noventa segundos después de la última señal de su navegador. Lo único que permite saber es cuántas pestañas hay abiertas y en qué páginas; nunca de quién.",
          },
          {
            type: "paragraph",
            text: "La segunda es cuánto tiempo retiene una página a un lector. Los segundos que una página pasa delante de usted se suman directamente al total de ese día para esa página, en la misma operación que los recibe. Su cifra personal no se anota nunca: no existe en ninguna parte constancia de cuánto tiempo pasó usted en nada, y ninguna podría reconstruirse. Una pestaña dejada detrás de otra ventana no cuenta nada, y toda lectura suelta que pase de media hora se cuenta como media hora.",
          },
          {
            type: "paragraph",
            text: "Ninguna de las dos medidas registra su dirección, una forma disfrazada de su dirección, el identificador de su navegador ni valor alguno que sobreviva a la página en la que se encuentra. Lo que producen son totales por página y por día: por eso se conservan indefinidamente y por eso no hay en ellos nada que borrar a petición.",
          },
          {
            type: "paragraph",
            text: "Las páginas administrativas quedan excluidas de todo esto, de modo que las cifras describen a los lectores y no nuestra propia edición.",
          },
        ],
      },

      "fonts-and-assets": {
        title: "Tipografías y recursos",
        body: [
          {
            type: "paragraph",
            text: "Las tipografías se sirven desde este sitio y no desde una red de fuentes, de modo que cargar una página no revela su visita a un tercero. Todas las imágenes se almacenan localmente; nada se enlaza directamente desde otro dominio.",
          },
        ],
      },

      "server-logs": {
        title: "Registros del servidor",
        body: [
          {
            type: "paragraph",
            text: "Quien aloje este sitio conservará los registros ordinarios de un servidor web, que suelen incluir direcciones IP, rutas solicitadas y marcas de tiempo. Eso deriva del acuerdo de alojamiento y no de este sitio web, y el acuerdo se nombrará aquí en cuanto esté cerrado.",
          },
        ],
      },

      "your-rights": {
        title: "Sus derechos",
        body: [
          {
            type: "paragraph",
            text: "Con arreglo al Reglamento General de Protección de Datos le asisten los derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición respecto de los datos personales que se conserven sobre usted. Cuando el tratamiento se basa en el consentimiento, puede además retirarlo en cualquier momento, y retirarlo es tan sencillo como lo fue prestarlo.",
          },
          {
            type: "paragraph",
            text: "Esos derechos son reales y existe el mecanismo para atenderlos: un registro puede facilitarse, corregirse o borrarse por completo a petición, y borrar significa borrar y no marcar una fila que en silencio se conserva.",
          },
          {
            type: "statement",
            text: "Falta una cosa, y preferimos decirlo antes que dejar que usted la descubra.",
          },
          {
            type: "paragraph",
            text: "La inscripción como partido o como asociación no ha concluido, de modo que todavía no puede nombrarse a ningún responsable del tratamiento ni se publica ninguna dirección de correspondencia — véase el [aviso legal][imprint]. Hasta que eso quede resuelto no hay ninguna dirección a la que pueda enviar una solicitud con la certeza de quién la leerá, ni ninguna autoridad de control ante la que pudiera presentarse una reclamación contra un responsable nombrado.",
          },
          {
            type: "paragraph",
            text: "Es una laguna real, y es un argumento para esperar: si la ausencia de un responsable con nombre le inquieta, no solicite todavía. No se pierde nada por solicitar más adelante. Esta página nombrará al responsable del tratamiento, la dirección y la autoridad de control antes de que la laguna se cierre, y no después.",
          },
          {
            type: "note",
            text: "Esta nota describe el sitio tal como está y se ha escrito para ser leída, no para satisfacer una lista de comprobación. No es asesoramiento jurídico, y será sustituida por una política de privacidad completa cuando se complete la inscripción.",
          },
        ],
      },
    },
  },

  imprint: {
    eyebrow: "Legal",
    title: "Aviso legal",
    metaTitle: "Aviso legal",
    lede: "Información sobre el editor, conforme a lo exigido por el derecho europeo de medios y de partidos.",
    description:
      "Información sobre el editor del Restore Europa Movement. El movimiento está en formación; los datos registrales se publican a medida que se hacen ciertos.",
    intro: [
      {
        type: "lead",
        text: "Este sitio web lo publica el Restore Europa Movement, un movimiento político de los pueblos nacionales de Europa.",
      },
      {
        type: "paragraph",
        text: "La inscripción como partido o como asociación está en curso y no ha concluido todavía en ninguna jurisdicción. Hasta que concluya no hay denominación registral, ni número de asiento, ni representante legal que declarar, y esta página no va a inventarlos. Cada dato aparece aquí cuando pasa a constar públicamente.",
      },
      {
        type: "paragraph",
        text: "Los requerimientos legales y las correcciones deben enviarse por las vías de correspondencia de [Contacto][contact], donde figura la dirección publicada para cada función.",
      },
    ],
    particularsHeading: "Datos que se publicarán",
    particularsNote: "Al concluir la inscripción, en este orden.",
    aboutLabel: "Sobre este sitio web",
    entries: {
      publisher: {
        term: "Editor",
        description: "La denominación registral de la asociación o del partido.",
      },
      "legal-form": {
        term: "Forma jurídica y jurisdicción",
        description: "La determina el país de inscripción.",
      },
      "registered-address": {
        term: "Domicilio social",
        description: "La sede de la organización.",
      },
      responsible: {
        term: "Responsable de los contenidos",
        description: "La persona que responde conforme al derecho de prensa aplicable.",
      },
      register: {
        term: "Registro y número",
        description: "El registro de asociaciones o de partidos, y el asiento.",
      },
      "represented-by": {
        term: "Representado por",
        description: "Los cargos facultados para actuar en nombre de la organización.",
      },
      "supervisory-authority": {
        term: "Autoridad de control",
        description: "Cuando el derecho nacional de partidos prevea una.",
      },
    },
    closing: [
      {
        type: "subheading",
        text: "Este sitio web",
      },
      {
        type: "paragraph",
        text: "El manifiesto, los principios y el catálogo de políticas los publica el movimiento y pueden citarse con atribución. Los créditos y las licencias fotográficas constan en el repositorio con el que se construye este sitio.",
      },
      {
        type: "paragraph",
        text: "Las correcciones y los requerimientos legales podrán enviarse a través de [Contacto][contact] una vez que se publiquen las direcciones.",
      },
    ],
  },
};
