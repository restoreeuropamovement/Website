import type { LegalText } from "./index";

export const legalText: LegalText = {
  privacy: {
    eyebrow: "Rechtliches",
    title: "Datenschutz",
    metaTitle: "Datenschutz",
    lede: "Das Lesen dieser Seite erhebt nichts, was Sie identifiziert. Zwei Seiten bitten um etwas, und nur dann, wenn Sie es geben wollen. Was damit geschieht, steht im Folgenden.",
    description:
      "Das Lesen dieser Seite identifiziert niemanden: keine Cookies, keine Nachverfolgung, nur eine anonyme Zählung der Besuche. Zwei Seiten bitten um etwas, und nur dann, wenn Sie es geben wollen. Was gespeichert wird, was verschlüsselt ist und wie Sie es löschen lassen.",
    sections: {
      "what-we-collect": {
        title: "Was diese Seite erhebt",
        body: [
          {
            type: "lead",
            text: "Das Lesen erhebt nichts, was Sie identifiziert. Diese Website hat keine Benutzerkonten, keine Werbung, keine Zählpixel und keine eingebetteten Inhalte Dritter.",
          },
          {
            type: "paragraph",
            text: "Beim Lesen werden keine Cookies gesetzt und nichts in den lokalen Speicher oder den Sitzungsspeicher Ihres Browsers geschrieben. Über Ihren Besuch wird kein Profil erstellt, gekauft oder verkauft. Das einzige Skript ist der unten beschriebene Besucherzähler, der anonym ist und Sie nicht identifizieren kann.",
          },
          {
            type: "paragraph",
            text: "Es gibt zwei Stellen auf dieser Seite, über die Sie personenbezogene Daten übergeben können, und an beiden müssen Sie es ernst meinen: die Bewerbung um die Mitgliedschaft unter [Mitmachen][join] und das Nachrichtenformular unter [Kontakt][contact]. Nichts sonst auf der Seite übermittelt etwas, und keines der beiden Formulare ist versehentlich zu erreichen.",
          },
        ],
      },

      membership: {
        title: "Wenn Sie sich um die Mitgliedschaft bewerben",
        body: [
          {
            type: "paragraph",
            text: "Mit der Bewerbung wird das, was Sie eingegeben haben, an die Bewegung gesandt und dort in eine Datenbank geschrieben. Das Absenden des Formulars macht Sie nicht zum Mitglied: Der Eintrag kommt als ungelesen gekennzeichnet an, und ein Mensch entscheidet. Bis dahin und danach haben Sie Anspruch darauf, genau zu wissen, was gespeichert ist.",
          },
          {
            type: "paragraph",
            text: "Eine Bewerbung durchläuft fünf Zustände, und zwischen ihnen bewegt sie nichts als das Urteil eines Menschen. Sie kommt **ungelesen** an. Sobald ein Administrator beginnt, sie zu erwägen, steht sie **in Prüfung**. Schreibt er Ihnen mit Fragen, wird sie als **Antwort ausstehend** gekennzeichnet, bis Sie antworten — ein Zustand, der dafür da ist, dass niemand vergessen wird, dem geschrieben wurde. Danach wird sie entweder **angenommen** — als Mitglied oder als Freiwilliger, je nachdem, worum Sie gebeten haben — oder **abgelehnt**. Kein Schritt geschieht automatisch, und an keiner Stelle bewertet Sie ein Algorithmus.",
          },
          {
            type: "paragraph",
            text: "Ein Eintrag enthält höchstens sieben Dinge: Ihren Namen, Ihre E-Mail-Adresse, Ihr Land, die Rolle, um die Sie gebeten haben, ein Interessengebiet und — nur wenn Sie sie angeben wollen — Ihre Region oder Stadt und eine Nachricht. Es gibt keine Postanschrift, keine Telefonnummer und kein Geburtsdatum. Nichts wird erschlossen, angereichert oder von irgendwoher zugekauft.",
          },
          {
            type: "paragraph",
            text: "Die beiden freiwilligen Felder sind diejenigen, die am meisten über Sie sagen können, und werden darum so sorgfältig behandelt wie Ihr Name. Eine Region grenzt einen Menschen weit stärker ein als ein Land, und eine Nachricht ist freier Text — und dort erwähnen Menschen einen Arbeitgeber, eine familiäre oder eine rechtliche Lage. **Beide werden verschlüsselt**, und keines von beiden wird jemals in das Verwaltungsprotokoll geschrieben. Wenn Sie sie lieber nicht angeben, lassen Sie sie leer; die Bewerbung funktioniert genau gleich.",
          },
          {
            type: "subheading",
            text: "Eines, das nicht Sie geschrieben haben",
          },
          {
            type: "paragraph",
            text: "Während der Prüfung einer Bewerbung kann ein Administrator ihr eine kurze Notiz beifügen — den Inhalt eines Gesprächs, den Grund für eine Entscheidung, wem Sie vorgestellt werden sollten. Das ist das Einzige in Ihrem Eintrag, das Sie nicht selbst geschrieben haben, und es ist das einzige Feld der ganzen Datenbank, das die Beurteilung eines Menschen durch einen anderen enthält; darum ist es **wie alles Übrige verschlüsselt** und wird niemals in das Verwaltungsprotokoll geschrieben.",
          },
          {
            type: "paragraph",
            text: "Sie ist auch Teil Ihres Eintrags im Sinne eines Auskunftsersuchens. Wenn Sie fragen, was über Sie gespeichert ist, gehört die Notiz zur Antwort. Von jedem, der eine schreibt, wird erwartet, dass er sie in diesem Wissen schreibt.",
          },
          {
            type: "subheading",
            text: "Warum wir sie speichern dürfen",
          },
          {
            type: "paragraph",
            text: "Die Zugehörigkeit zu einer politischen Bewegung lässt auf eine politische Meinung schließen, und die DSGVO zählt diese nach Artikel 9 zu den besonderen Kategorien personenbezogener Daten und schützt sie strenger als gewöhnliche personenbezogene Daten. Wir stützen uns auf Ihre ausdrückliche Einwilligung, die Sie mit der Bewerbung erteilt haben, zusammen mit Artikel 9 Absatz 2 Buchstabe d, der es einer nicht gewinnorientierten Einrichtung mit politischer Zielsetzung erlaubt, die Daten ihrer eigenen Mitglieder zu verarbeiten — sofern die Daten nicht ohne Einwilligung außerhalb der Einrichtung offengelegt werden. Das geschieht nicht und wird nicht geschehen.",
          },
          {
            type: "subheading",
            text: "Wie lange sie gespeichert wird",
          },
          {
            type: "list",
            marker: "rule",
            items: [
              "Solange die Mitgliedschaft besteht, und nicht länger, als die Bewegung sie braucht.",
              "Gelöscht, sobald Sie es verlangen, ohne dass Sie einen Grund angeben müssen.",
              "Nichts wird automatisch nach Ablauf einer Frist gelöscht, denn eine Bewerbung, die noch niemand gelesen hat, ist die Bewerbung eines Menschen und nicht etwas Abgestandenes.",
              "**Eine abgelehnte Bewerbung wird aufbewahrt und als abgelehnt gekennzeichnet, nicht gelöscht.** Das ist eine bewusste Entscheidung, und sie hat für Sie einen Preis, darum wird sie offen ausgesprochen: Den Eintrag zu löschen hieße auch, das Mittel zu löschen, mit dem sich erkennen lässt, dass dieselbe Bewerbung schon einmal geprüft worden ist, und die Bewegung würde sie bei jeder erneuten Einreichung von vorn prüfen. Wenn Sie möchten, dass überhaupt nichts aufbewahrt wird, sagen Sie es, und der Eintrag wird gelöscht.",
              "Das unten beschriebene Verwaltungsprotokoll hält fest, dass ein Eintrag angelegt, geändert oder gelöscht wurde, und von wem, aber niemals seinen Inhalt.",
            ],
          },
          {
            type: "subheading",
            text: "Was das Formular selbst tut",
          },
          {
            type: "paragraph",
            text: "Ihr Name, Ihre Adresse, Ihre Region und Ihre Nachricht werden verschlüsselt, bevor sie niedergeschrieben werden, noch in derselben Anfrage — nichts davon wird jemals in lesbarer Form gespeichert. Die Antwort, die Sie sehen, ist dieselbe, ob die Adresse schon im Mitgliederverzeichnis stand oder nicht; das Formular lässt sich also nicht dazu benutzen, zu prüfen, ob eine bestimmte Person Mitglied ist. Bewerbungen sind je Verbindung in ihrer Zahl begrenzt, und es gibt eine Obergrenze dafür, wie viele die Seite in einer Stunde von allen zusammen annimmt; beides sind Abwehrvorkehrungen gegen ein Skript, das das Verzeichnis füllt, und keine Maßnahmen, die sich gegen Sie richten.",
          },
          {
            type: "paragraph",
            text: "Das Formular trägt außerdem ein Feld, das Sie niemals sehen werden: ein leeres Kästchen, außerhalb des Bildschirms angeordnet, von der Tastatur übersprungen und vor Bildschirmlesegeräten verborgen. Automatische Absender füllen jedes Feld aus, das sie finden, und Menschen können dieses nicht ausfüllen; was also ausgefüllt ankommt, wird verworfen, ohne gespeichert zu werden. **Wir verwenden kein CAPTCHA und keine Bot-Erkennung Dritter**, und zwar absichtlich — solche Verfahren beruhen darauf, dass ein fremdes Unternehmen jeden beobachtet, der einer politischen Bewegung beizutreten versucht, und das ist ein schlechterer Tausch als der, den dieses Feld verlangt.",
          },
          {
            type: "paragraph",
            text: "Ihre Angaben werden niemals verkauft, niemals an eine andere Organisation weitergegeben, niemals zum Aufbau eines Werbeprofils verwendet und niemals zu irgendeinem Zweck an Dritte übermittelt. Über Sie wird keine automatisierte Entscheidung getroffen.",
          },
        ],
      },

      "how-it-is-protected": {
        title: "Wie sie geschützt wird",
        body: [
          {
            type: "paragraph",
            text: "Ein Mitgliederverzeichnis ist genau jene Art von Dokument, das niemals nach außen geraten darf, und darum ist es unter der Annahme gebaut, dass eines Tages etwas schiefgehen wird. Was folgt, ist eine Beschreibung der Schutzvorkehrungen und kein Versprechen, dass nichts geschehen kann. Zuschriften über das Kontaktformular werden auf demselben Weg aufbewahrt.",
          },
          {
            type: "list",
            marker: "rule",
            items: [
              "**Ihr Name, Ihre E-Mail-Adresse, Ihre Region, Ihre Nachricht und jede über Sie geschriebene Notiz werden verschlüsselt**, bevor sie niedergeschrieben werden, mit einem Schlüssel, der nicht in der Datenbank liegt. Eine gestohlene Kopie der Datenbank oder einer Sicherung davon entschlüsselt zu nichts.",
              "**Ihr Land wird unverschlüsselt gespeichert**, denn nach Ländern zu zählen und zu organisieren ist der Grund, aus dem das Verzeichnis besteht. Für sich allein identifiziert es niemanden. Ihre Region, die Sie viel stärker eingrenzen würde, wird nicht so behandelt — sie wird mit allem Übrigen verschlüsselt.",
              "**Niemand meldet sich mit einem Passwort an.** Der Verwaltungszugang verlangt einen Passkey auf einem physischen Gerät, der sich nicht erraten, nicht durch Phishing erlangen und nicht aus einer gestohlenen Datenbank ablesen lässt.",
              "**Namen oder Nachrichten zu lesen verlangt eine zweite Bestätigung.** Angemeldet zu sein zeigt nur Zahlen; eine einzelne Person offenzulegen oder eine Zuschrift zu öffnen, erfordert eine erneute Berührung des Passkeys, die nur Minuten gilt. Wer eine aktive Sitzung stiehlt, erhält Statistik, keine Menschen.",
              "**Jeder Lesevorgang wird protokolliert** — wer nachgesehen hat und wann. Nicht bloß jede Änderung: Bei einem Verzeichnis wie diesem ist der Akt des Nachsehens das, was aufzuzeichnen lohnt. Wonach gesucht wurde, wird als Einweg-Prüfwert festgehalten, sodass das Protokoll bestätigen kann, ob eine bestimmte Person nachgesehen wurde, ohne selbst zu einer Namensliste zu werden.",
              "**Es gibt keine Exportfunktion.** Das Verzeichnis lässt sich nicht als Datei herunterladen, denn eine Datei ist die Form, in der solche Verzeichnisse entkommen.",
            ],
          },
          {
            type: "paragraph",
            text: "Niemand außerhalb der eigenen Verwaltung der Bewegung kann irgendeinen Teil davon lesen, und kein Teil davon wird irgendwo veröffentlicht, in welcher Zusammenfassung auch immer, ohne Einwilligung.",
          },
        ],
      },

      forms: {
        title: "Die zwei Formulare",
        body: [
          {
            type: "paragraph",
            text: "Das erste ist die Bewerbung um die Mitgliedschaft unter [Mitmachen][join], oben beschrieben.",
          },
          {
            type: "paragraph",
            text: "Das zweite ist das Nachrichtenformular unter [Kontakt][contact]. Es speichert Ihren Namen, Ihre E-Mail-Adresse, an welche Funktion Sie sich gewandt haben und was Sie geschrieben haben. Name, Adresse und Nachricht werden genauso verschlüsselt wie die Angaben eines Mitglieds — einer Organisation zu schreiben ist nicht dasselbe, wie ihr anzugehören, aber der Abstand ist geringer, als er aussieht, und ein Schreiben, in dem steht, dass Sie über einen Beitritt nachdenken, gibt ebenso viel preis wie das Mitgliederverzeichnis selbst.",
          },
          {
            type: "paragraph",
            text: "Zuschriften werden aufbewahrt, bis sie erledigt sind, und nicht länger, als ihre Beantwortung erfordert; sie werden auf Verlangen gelöscht und niemals dazu verwendet, Sie in das Mitgliederverzeichnis aufzunehmen. Der Beitritt ist eine gesonderte Entscheidung, die Sie bewusst treffen müssen. Auf der Kontaktseite sind keine E-Mail-Adressen abgedruckt, denn jede wird erst veröffentlicht, wenn die Funktion, zu der sie gehört, besteht und jemand dafür verantwortlich ist, sie zu lesen.",
          },
        ],
      },

      analytics: {
        title: "Zugriffszahlen",
        body: [
          {
            type: "paragraph",
            text: "Besuche werden mit Vercel Web Analytics gezählt, das ohne Cookies arbeitet: Es setzt nichts auf Ihrem Gerät, speichert keine personenbezogenen Daten, weist Ihnen keine Kennung zu und kann Ihnen nicht von Seite zu Seite folgen. Es wird von dieser Domain ausgeliefert und nicht aus einem fremden Netzwerk; das Laden einer Seite offenbart Ihren Besuch also niemandem sonst. Darum trägt die Seite kein Einwilligungsbanner — es gibt nichts, worin einzuwilligen wäre.",
          },
          {
            type: "paragraph",
            text: "Was dabei entsteht, ist eine Zählung von Seitenaufrufen und Besuchern, nach Seite und nach Land. Sie ist nicht mit den Mitgliedseinträgen verknüpft, und sie kann es nicht sein: Die beiden halten nichts gemeinsam, was sie verbinden würde.",
          },
          {
            type: "paragraph",
            text: "Die Verwaltungsseiten sind von der Zählung ausgenommen, sodass die Zahlen die Leser beschreiben und nicht unsere eigene redaktionelle Arbeit.",
          },
        ],
      },

      "fonts-and-assets": {
        title: "Schriften und Dateien",
        body: [
          {
            type: "paragraph",
            text: "Die Schriftarten werden von dieser Seite selbst ausgeliefert und nicht aus einem Schriftennetzwerk, sodass das Laden einer Seite Ihren Besuch keinem Dritten offenbart. Alle Bilder liegen lokal; nichts wird von einer anderen Domain eingebunden.",
          },
        ],
      },

      "server-logs": {
        title: "Serverprotokolle",
        body: [
          {
            type: "paragraph",
            text: "Wer diese Seite betreibt, wird gewöhnliche Webserverprotokolle führen, die typischerweise IP-Adressen, angefragte Pfade und Zeitstempel enthalten. Das folgt aus der Art des Hostings und nicht aus dieser Website, und die Art des Hostings wird hier genannt, sobald sie geklärt ist.",
          },
        ],
      },

      "your-rights": {
        title: "Ihre Rechte",
        body: [
          {
            type: "paragraph",
            text: "Nach der DSGVO haben Sie hinsichtlich der über Sie gespeicherten personenbezogenen Daten das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Soweit die Verarbeitung auf einer Einwilligung beruht, können Sie diese jederzeit widerrufen, und der Widerruf ist so einfach, wie es die Erteilung war.",
          },
          {
            type: "paragraph",
            text: "Diese Rechte sind wirklich, und die Mittel, ihnen zu entsprechen, sind vorhanden: Ein Eintrag kann auf Verlangen herausgegeben, berichtigt oder vollständig gelöscht werden, und Löschung heißt Löschung und nicht eine Markierung an einer Zeile, die im Stillen behalten wird.",
          },
          {
            type: "statement",
            text: "Eines fehlt, und wir sagen es lieber, als dass Sie es selbst entdecken müssen.",
          },
          {
            type: "paragraph",
            text: "Die Registrierung als Partei oder Verein ist nicht abgeschlossen, darum kann noch kein Verantwortlicher benannt und keine Korrespondenzadresse veröffentlicht werden — siehe das [Impressum][imprint]. Solange das nicht geklärt ist, gibt es keine Adresse, an die Sie ein Ersuchen mit Gewissheit darüber senden könnten, wer es liest, und keine Aufsichtsbehörde, bei der eine Beschwerde gegen einen benannten Verantwortlichen erhoben werden könnte.",
          },
          {
            type: "paragraph",
            text: "Das ist eine echte Lücke, und sie spricht dafür zu warten: Wenn Sie das Fehlen eines benannten Verantwortlichen beunruhigt, bewerben Sie sich noch nicht. Es ist nichts verloren, wenn Sie es später tun. Diese Seite wird den Verantwortlichen, die Adresse und die Aufsichtsbehörde benennen, bevor sich die Lücke schließt, und nicht danach.",
          },
          {
            type: "note",
            text: "Dieser Hinweis beschreibt die Seite in ihrem gegenwärtigen Zustand und ist geschrieben, um gelesen zu werden, und nicht, um eine Prüfliste zu erfüllen. Er ist keine Rechtsberatung, und er wird mit der Registrierung durch eine vollständige Datenschutzerklärung ersetzt.",
          },
        ],
      },
    },
  },

  imprint: {
    eyebrow: "Rechtliches",
    title: "Impressum",
    metaTitle: "Impressum",
    lede: "Angaben zum Herausgeber, wie sie europäisches Medien- und Parteienrecht verlangt.",
    description:
      "Angaben zum Herausgeber der Restore Europa Movement. Die Bewegung ist in Gründung; die eingetragenen Einzelangaben werden veröffentlicht, sobald sie wirklich bestehen.",
    intro: [
      {
        type: "lead",
        text: "Diese Website wird herausgegeben von Restore Europa Movement, einer politischen Bewegung der nationalen Völker Europas.",
      },
      {
        type: "paragraph",
        text: "Die Registrierung als Partei oder Verein ist eingeleitet und in keiner Rechtsordnung abgeschlossen. Bis das geschehen ist, gibt es keinen eingetragenen Namen, keine Registernummer und keinen gesetzlichen Vertreter, die anzugeben wären, und diese Seite wird nichts davon erfinden. Jede Einzelangabe erscheint hier, sobald sie öffentlich beurkundet ist.",
      },
      {
        type: "paragraph",
        text: "Rechtliche Mitteilungen und Berichtigungen sollten über die Korrespondenzwege unter [Kontakt][contact] gesandt werden, wo die für jede Funktion veröffentlichte Adresse aufgeführt ist.",
      },
    ],
    particularsHeading: "Einzelangaben, die zu veröffentlichen sind",
    particularsNote: "Nach Abschluss der Registrierung, in dieser Reihenfolge.",
    aboutLabel: "Über diese Website",
    entries: {
      publisher: {
        term: "Herausgeber",
        description: "Der eingetragene Name des Vereins oder der Partei.",
      },
      "legal-form": {
        term: "Rechtsform und Rechtsordnung",
        description: "Bestimmt durch das Land der Registrierung.",
      },
      "registered-address": {
        term: "Eingetragene Anschrift",
        description: "Der Sitz der Organisation.",
      },
      responsible: {
        term: "Verantwortlich für den Inhalt",
        description: "Die nach dem anwendbaren Presserecht verantwortliche Person.",
      },
      register: {
        term: "Register und Nummer",
        description: "Das Vereins- oder Parteienregister und der Eintrag.",
      },
      "represented-by": {
        term: "Vertreten durch",
        description: "Die Amtsträger, die für die Organisation zu handeln befugt sind.",
      },
      "supervisory-authority": {
        term: "Aufsichtsbehörde",
        description: "Soweit das nationale Parteienrecht eine vorsieht.",
      },
    },
    closing: [
      {
        type: "subheading",
        text: "Diese Website",
      },
      {
        type: "paragraph",
        text: "Das Manifest, die Grundsätze und der Politikkatalog werden von der Bewegung veröffentlicht und dürfen mit Quellenangabe zitiert werden. Bildnachweise und Lizenzen sind in dem Repository verzeichnet, aus dem diese Seite gebaut wird.",
      },
      {
        type: "paragraph",
        text: "Berichtigungen und rechtliche Mitteilungen können über [Kontakt][contact] gesandt werden, sobald Adressen veröffentlicht sind.",
      },
    ],
  },
};
