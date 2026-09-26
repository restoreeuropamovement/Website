import type { EmailText } from "./index";

export const emails: EmailText = {
  applicationReceived: {
    subject: "Votre demande auprès de Restore Europa",
    body: `Merci de votre demande.

Votre demande a été consignée et sera lue par une personne avant toute
autre chose. Il n'y a pas d'admission automatique, et nous préférons
prendre le temps de lire correctement plutôt que de répondre vite : nous
ne vous promettrons donc pas de date.

Si vous n'avez pas rempli ce formulaire, vous n'avez rien à faire. Rien
n'a été publié, rien n'a été transmis, et une demande qui n'est jamais
acceptée ne devient jamais une adhésion. Si vous souhaitez que
l'enregistrement soit effacé avant cela, répondez à ce message et
dites-le.

Ce que nous conservons et la manière dont c'est protégé sont exposés à
l'adresse {privacy}.`,
  },

  confirmSubscription: {
    subject: "Confirmez votre abonnement",
    body: `Veuillez confirmer que vous souhaitez recevoir le journal de Restore
Europa par courriel — environ un essai par semaine sur le mouvement et
sur ce qui se passe en Europa.

Confirmez ici :
{confirm}

Si vous n'avez rien demandé, ignorez ce message. Rien ne vous sera
envoyé, vous n'avez pas à répondre, et l'adresse sera supprimée sous deux
jours sans que vous ayez quoi que ce soit à faire.`,
  },

  alreadySubscribed: {
    subject: "Vous êtes déjà abonné",
    body: `Quelqu'un a demandé d'abonner cette adresse au journal de Restore
Europa, et elle figure déjà sur la liste. Rien n'a changé et vous n'avez
rien à faire.

Si vous préférez ne pas le recevoir, vous pouvez vous désabonner à tout
moment :
{unsubscribe}`,
  },

  journalIssue: {
    readOnSite: `À lire sur le site, avec les notes et les sources :
{url}`,
    unsubscribeNote: `Vous recevez ce message parce que vous avez confirmé cette adresse. Pour
ne plus le recevoir :
{unsubscribe}`,
  },
};
