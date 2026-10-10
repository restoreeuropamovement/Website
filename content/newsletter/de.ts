import type { NewsletterText } from "./index";

export const newsletterText: NewsletterText = {
  eyebrow: "Rundbrief",
  title: "Das Journal per E-Mail",
  metaTitle: "Rundbrief",
  lede: "Eine Adresse, die Essays der Bewegung, sobald sie geschrieben sind, und in jeder Nachricht ein Link, der Sie wieder von der Liste nimmt.",
  description:
    "Das Journal von Restore Europa per E-Mail. Eine Adresse, verschlüsselt gespeichert, erst nach Bestätigung beliefert und über einen Link in jeder Nachricht wieder zu löschen.",

  body: [
    {
      type: "lead",
      text: "Ein Abonnement setzt eine einzige E-Mail-Adresse auf eine Liste, und diese Liste erhält die Essays der Bewegung. Sonst geht nichts an sie — keine Spendenaufrufe, keine Einladungen, keine Weitergabe an irgendwen.",
    },
    {
      type: "paragraph",
      text: "Das Journal hat derzeit keine öffentlichen Seiten; der Rundbrief ist vorerst also der Ort, an dem seine Essays erscheinen. Jeder kommt vollständig an, als reiner Text: keine Bilder, keine Gestaltung und nichts, was zurückmeldet, ob Sie ihn geöffnet haben.",
    },
    {
      type: "paragraph",
      text: "**Sie werden um eine Bestätigung gebeten.** Die Adresse bleibt unbestätigt, bis ein an sie gesandter Link aufgerufen wird; vorher wird nichts zugestellt, und eine nie bestätigte Adresse wird ungelesen gelöscht: Der Link verfällt nach zwei Tagen, und ein Durchlauf einmal am Tag räumt fort, was verfallen ist, sodass nichts länger als drei Tage gespeichert bleibt. Das ist keine Formalie. Jeder kann die Adresse eines Fremden in ein Feld tippen, und für jemanden, den sein Interesse an dieser Bewegung die Stelle kosten würde, ist ungebetene politische Post ein echter Schaden, angerichtet in seinem Namen.",
    },
    {
      type: "paragraph",
      text: "**Die Adresse wird vor dem Speichern verschlüsselt**, mit einem Schlüssel, der nicht in der Datenbank liegt; eine gestohlene Kopie entschlüsselt sich zu nichts. Daneben wird festgehalten, in welcher Sprache Sie gelesen haben, damit der Rundbrief Sie in dieser Sprache anspricht. Kein Name, kein Land, und für niemanden eine Möglichkeit, die Liste herunterzuladen. Was gespeichert wird und wie lange, steht im [Datenschutzhinweis][privacy].",
    },
    {
      type: "paragraph",
      text: "**Das Abbestellen kostet einen Klick.** Jede Nachricht trägt einen Link, der die Adresse entfernt, und er verlangt weder Anmeldung noch Begründung. Dieser Link ist nirgends gespeichert — er wird bei jedem Gebrauch aus dem Datensatz neu berechnet — also gäbe eine Kopie der Datenbank niemandem einen Knopf, der die Liste leert, und eine in einem Archiv wiedergefundene Nachricht funktioniert auch Jahre später noch.",
    },
    {
      type: "note",
      text: "Die Essays sind auf Englisch geschrieben und werden nicht übersetzt. Was die Bewegung um sie herum sagt — die Notiz am Fuß, die Hinweise zum Abbestellen — steht in der Sprache, in der Sie abonniert haben.",
    },
  ],

  form: {
    heading: "Abonnieren",
    email: "E-Mail-Adresse",
    submit: "Abonnieren",
    submitting: "Wird gesendet …",
    privacyNote: "Was mit Ihrer Adresse geschieht, steht im",
    privacyLink: "Datenschutzhinweis",
    invalid:
      "Das sieht nicht nach einer E-Mail-Adresse aus. Es wurde nichts gesendet und nichts gespeichert.",
    unavailable:
      "Abonnements können derzeit nicht aufgenommen werden, deshalb nimmt dieses Formular keine Adressen an. Nichts, was Sie hier eintragen, würde gespeichert, und wir sagen das lieber, als es entgegenzunehmen.",
    throttled:
      "Von dieser Verbindung kamen in der letzten Stunde schon mehrere Anfragen. Warten Sie etwas und versuchen Sie es noch einmal — eine Adresse wird ohnehin nur einmal aufgenommen, ein früherer Versuch kann also bereits gewirkt haben.",
    busy:
      "Die Website hat die Zahl der Einsendungen erreicht, die sie pro Stunde über alle Besucher hinweg annimmt. Das liegt mit großer Wahrscheinlichkeit nicht an Ihnen. Versuchen Sie es in Kürze erneut.",
    sent: {
      title: "Sehen Sie jetzt in diesem Postfach nach.",
      body: "Eine Nachricht ist unterwegs dorthin. Was darin steht, hängt davon ab, was bereits auf der Liste steht, und nur wer das Postfach öffnen kann, bekommt es zu sehen — diese Seite erfährt es in keinem Fall, damit das Formular nicht dazu benutzt werden kann herauszufinden, wer abonniert hat. Enthält die Nachricht einen Bestätigungslink, wird nichts weiter gesendet, bis er aufgerufen wurde.",
    },
  },

  confirm: {
    eyebrow: "Rundbrief",
    title: "Abonnement bestätigen",
    metaTitle: "Abonnement bestätigen",
    lede: "Ein Druck, und die Adresse, zu der dieser Link gehört, kommt auf die Liste.",
    why: "Ein Knopf statt des Links allein, weil die Mailfilter von Unternehmen jede Adresse in einer eingehenden Nachricht aufrufen, um zu prüfen, ob sie harmlos ist. Genügte der Linkaufruf, so würden diese Prüfprogramme Abonnements für Menschen bestätigen, die die Nachricht nie geöffnet haben — und sie sind gerade dort am verbreitetsten, wo am genauesten verfolgt wird, was jemand liest.",
    submit: "Bestätigen",
    submitting: "Wird bestätigt …",
    done: {
      title: "Bestätigt.",
      body: "Die Adresse steht auf der Liste, und der nächste Essay geht an sie. Jede Nachricht trägt einen Link, der sie wieder herunternimmt.",
    },
    failed: {
      title: "Dieser Link hat nicht funktioniert.",
      body: "Ein Bestätigungslink gilt zwei Tage und lässt sich einmal verwenden. Ist er abgelaufen oder bereits benutzt worden, fragen Sie auf der [Rundbrief-Seite][newsletter] erneut an, dann wird ein neuer gesendet.",
    },
    missing:
      "Diese Adresse trägt kein Bestätigungsmerkmal, es gibt hier also nichts zu bestätigen. Öffnen Sie den Link in der Nachricht, die Ihnen gesendet wurde.",
  },

  unsubscribe: {
    eyebrow: "Rundbrief",
    title: "Die Liste verlassen",
    metaTitle: "Die Liste verlassen",
    lede: "Ein Druck, und die Adresse, zu der dieser Link gehört, erhält nichts mehr.",
    why: "Ein Knopf statt der Löschung beim bloßen Aufruf, aus demselben Grund wie bei der Bestätigung: die Linkprüfer in betrieblichen Mailsystemen rufen jede Adresse in einer Nachricht auf, und ein Link, der beim Aufruf abbestellt, würde stillschweigend Leser entfernen, die nie um ihren Austritt gebeten haben.",
    submit: "Abbestellen",
    submitting: "Wird entfernt …",
    done: {
      title: "Erledigt. Es wird nichts weiter gesendet.",
      body: "Wir sagen nicht, ob die Adresse auf der Liste stand, denn wer diesen Link in Händen hält, ist nicht zwangsläufig die Person, der die Adresse gehört, und einem Unbekannten beantworten wir diese Frage nicht. Sie können jederzeit erneut abonnieren; es beginnt dann wieder mit der Bestätigung. Sollte dennoch etwas ankommen, stammt der benutzte Link aus der Zeit vor dem jetzt gültigen Schlüssel und wird nicht mehr anerkannt; der am Fuß der neuesten Nachricht wird es.",
    },
    missing:
      "Diese Adresse trägt kein Merkmal, es gibt hier also nichts zu entfernen. Verwenden Sie den Link am Fuß einer Nachricht, die Ihnen gesendet wurde.",
  },
};
