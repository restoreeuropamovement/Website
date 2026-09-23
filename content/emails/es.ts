import type { EmailText } from "./index";

export const emails: EmailText = {
  applicationReceived: {
    subject: "Su solicitud a Restore Europa",
    body: `Gracias por su solicitud.

Ha quedado registrada y será leída por una persona antes de que ocurra
nada más. No hay aprobación automática, y preferimos tomarnos el tiempo
de leerla bien a responder deprisa, de modo que no le vamos a prometer
una fecha.

Si no fue usted quien rellenó este formulario, no tiene que hacer nada.
No se ha publicado nada, no se ha compartido nada, y una solicitud que
nunca se aprueba nunca llega a ser una afiliación. Si desea que el
registro se borre antes de entonces, responda a este mensaje y dígalo.

Qué conservamos y cómo está protegido se expone en {privacy}.`,
  },

  confirmSubscription: {
    subject: "Confirme su suscripción",
    body: `Confirme que desea recibir por correo electrónico la revista de
Restore Europa — aproximadamente un ensayo por semana sobre el movimiento
y sobre lo que ocurre en Europa.

Confirme aquí:
{confirm}

Si no lo ha pedido, ignore este mensaje. No se le enviará nada, no hace
falta que responda, y la dirección se borrará en el plazo de dos días sin
que usted tenga que hacer nada.`,
  },

  alreadySubscribed: {
    subject: "Esta dirección ya está suscrita",
    body: `Alguien ha pedido suscribir esta dirección a la revista de Restore
Europa, y ya figura en la lista. No ha cambiado nada y no tiene que hacer
nada.

Si prefiere no recibirla, puede darse de baja en cualquier momento:
{unsubscribe}`,
  },

  journalIssue: {
    readOnSite: `Léalo en el sitio, con notas y fuentes:
{url}`,
    unsubscribeNote: `Recibe este mensaje porque confirmó esta dirección. Para dejar de
recibirlo:
{unsubscribe}`,
  },
};
