import type { EmailText } from "./index";

export const emails: EmailText = {
  applicationReceived: {
    subject: "Votre demande auprès de Restore Europa",
    body: `Merci de votre demande.

Votre demande a été consignée et sera lue par une personne avant toute
autre chose. Il n'y a pas d'admission automatique, et nous préférons
prendre le temps de lire correctement plutôt que de répondre vite : nous
ne vous promettrons donc pas de date. Une fois qu'elle aura été lue,
nous vous écrirons à cette adresse : surveillez-la.

Ce message a été envoyé automatiquement, et personne ne lit l'adresse
dont il provient. Tout ce que vous voulez nous dire atteint une personne
à l'adresse {contact}.

Si vous n'avez pas rempli ce formulaire, vous n'avez rien à faire. Rien
n'a été publié, rien n'a été transmis, et une demande qui n'est jamais
acceptée ne devient jamais une adhésion. Si vous préférez que
l'enregistrement disparaisse dès maintenant, dites-le là et il sera
effacé.

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
envoyé, vous n'avez pas à répondre, et l'adresse sera supprimée sans que
vous ayez quoi que ce soit à faire : le lien ci-dessus expire dans deux
jours, et un balayage qui passe une fois par jour efface ce qui a
expiré, de sorte que la fiche aura disparu sous trois jours.`,
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
