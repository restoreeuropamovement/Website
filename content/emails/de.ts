import type { EmailText } from "./index";

export const emails: EmailText = {
  applicationReceived: {
    subject: "Ihre Bewerbung bei Restore Europa",
    body: `Vielen Dank für Ihre Bewerbung.

Ihre Bewerbung ist festgehalten worden und wird von einem Menschen
gelesen, bevor irgendetwas weiter geschieht. Es gibt keine automatische
Aufnahme, und wir lesen lieber in Ruhe, als schnell zu antworten — ein
Datum werden wir Ihnen deshalb nicht versprechen.

Falls Sie dieses Formular nicht ausgefüllt haben, brauchen Sie nichts zu
tun. Nichts ist veröffentlicht, nichts ist weitergegeben worden, und eine
Bewerbung, die nie angenommen wird, wird auch nie eine Mitgliedschaft.
Wenn Sie möchten, dass der Eintrag schon vorher gelöscht wird, antworten
Sie auf diese Nachricht und sagen Sie es.

Was wir speichern und wie es geschützt ist, steht unter {privacy}.`,
  },

  confirmSubscription: {
    subject: "Bestätigen Sie Ihr Abonnement",
    body: `Bitte bestätigen Sie, dass Sie das Journal von Restore Europa per
E-Mail erhalten möchten — etwa ein Essay pro Woche über die Bewegung und
über das, was in Europa geschieht.

Hier bestätigen:
{confirm}

Falls Sie darum nicht gebeten haben, ignorieren Sie diese Nachricht. Es
wird Ihnen nichts zugesandt, Sie brauchen nicht zu antworten, und die
Adresse wird innerhalb von zwei Tagen gelöscht, ohne dass Sie etwas tun
müssen.`,
  },

  alreadySubscribed: {
    subject: "Sie sind bereits angemeldet",
    body: `Jemand hat darum gebeten, diese Adresse für das Journal von Restore
Europa anzumelden, und sie steht bereits auf der Liste. Es hat sich
nichts geändert, und Sie brauchen nichts zu tun.

Wenn Sie es lieber nicht erhalten möchten, können Sie sich jederzeit
abmelden:
{unsubscribe}`,
  },

  journalIssue: {
    readOnSite: `Auf der Website lesen, mit Fußnoten und Quellen:
{url}`,
    unsubscribeNote: `Sie erhalten diese Nachricht, weil Sie diese Adresse bestätigt haben.
Zum Abbestellen:
{unsubscribe}`,
  },
};
