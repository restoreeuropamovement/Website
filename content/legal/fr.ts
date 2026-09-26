import type { LegalText } from "./index";

export const legalText: LegalText = {
  privacy: {
    eyebrow: "Informations légales",
    title: "Confidentialité",
    metaTitle: "Confidentialité",
    lede: "Lire ce site ne recueille rien qui vous identifie. Deux pages demandent quelque chose, et seulement si vous choisissez de le donner. Ce qu'il en advient est exposé ci-dessous.",
    description:
      "Lire ce site n'identifie personne : aucun cookie, aucun pistage, seulement un comptage anonyme des visites. Deux pages demandent quelque chose, et seulement si vous choisissez de le donner. Ce qui est conservé, ce qui est chiffré, et comment le faire effacer.",
    sections: {
      "what-we-collect": {
        title: "Ce que ce site recueille",
        body: [
          {
            type: "lead",
            text: "La lecture ne recueille rien qui vous identifie. Ce site n'a pas de comptes, pas de publicité, pas de pixels de pistage et aucun contenu intégré de tiers.",
          },
          {
            type: "paragraph",
            text: "Le lire ne dépose aucun cookie et n'écrit rien dans le stockage local ou de session de votre navigateur. Aucun profil de votre visite n'est constitué, acheté ni vendu. Les seuls scripts sont les deux mesures décrites ci-dessous — un compteur de fréquentation et une mesure du temps de lecture des pages — et ni l'une ni l'autre ne peut vous identifier.",
          },
          {
            type: "paragraph",
            text: "Il existe deux endroits sur ce site par lesquels vous pouvez transmettre des données à caractère personnel, et dans les deux cas il faut le vouloir : la demande d'adhésion sur [S'engager][join] et le formulaire de message sur [Contact][contact]. Rien d'autre sur ce site ne transmet quoi que ce soit, et aucun des deux formulaires n'est accessible par accident.",
          },
        ],
      },

      membership: {
        title: "Si vous demandez à adhérer",
        body: [
          {
            type: "paragraph",
            text: "Envoyer une demande transmet au mouvement ce que vous avez saisi, qui est alors inscrit dans une base de données. Envoyer le formulaire ne fait pas de vous un adhérent : l'enregistrement arrive marqué comme non lu, et une personne décide. Jusque-là, et ensuite, vous êtes en droit de savoir exactement ce qui est conservé.",
          },
          {
            type: "paragraph",
            text: "Une demande passe par cinq états, et rien ne la fait passer de l'un à l'autre que le jugement de quelqu'un. Elle arrive **non lue**. Lorsqu'un administrateur commence à l'examiner, elle est **en cours d'examen**. S'il vous écrit pour vous poser des questions, elle est marquée **en attente de réponse** jusqu'à ce que vous répondiez — un état qui existe pour que personne à qui l'on a écrit ne soit oublié. Elle devient ensuite soit **acceptée**, comme adhérent ou comme bénévole selon ce que vous avez demandé, soit **refusée**. Aucune étape n'est automatique, et aucun algorithme ne vous évalue à quelque moment que ce soit.",
          },
          {
            type: "paragraph",
            text: "Un enregistrement contient sept choses au plus : votre nom, votre adresse électronique, votre pays, le titre auquel vous avez candidaté, un domaine d'intérêt, et — seulement si vous choisissez de les donner — votre région ou ville et un message. Il n'y a pas d'adresse postale, pas de numéro de téléphone et pas de date de naissance. Rien n'est déduit, enrichi ni acheté ailleurs.",
          },
          {
            type: "paragraph",
            text: "Les deux champs facultatifs sont ceux qui peuvent dire le plus de vous, et ils sont donc traités avec autant de soin que votre nom. Une région resserre bien davantage l'identification d'une personne qu'un pays ne le fait, et un message est du texte libre — c'est là qu'on mentionne un employeur, une situation familiale ou judiciaire. **Les deux sont chiffrés**, et ni l'un ni l'autre n'est jamais inscrit dans le journal d'administration. Si vous préférez ne pas les donner, laissez-les vides ; la demande fonctionne exactement de la même manière.",
          },
          {
            type: "subheading",
            text: "Une chose que vous n'avez pas écrite",
          },
          {
            type: "paragraph",
            text: "Pendant l'examen d'une demande, un administrateur peut y joindre une note brève — la substance d'un échange, le motif d'une décision, la personne à qui vous présenter. C'est la seule chose de votre enregistrement que vous n'avez pas écrite vous-même, et c'est le seul champ de toute la base de données qui contienne l'appréciation d'une personne par une autre ; il est donc **chiffré comme le reste** et n'est jamais inscrit dans le journal d'administration.",
          },
          {
            type: "paragraph",
            text: "Elle fait aussi partie de votre enregistrement au titre du droit d'accès. Si vous demandez ce qui est conservé à votre sujet, la note figure dans la réponse. Quiconque en rédige une est censé le faire en le sachant.",
          },
          {
            type: "subheading",
            text: "Pourquoi nous avons le droit de le conserver",
          },
          {
            type: "paragraph",
            text: "Appartenir à un mouvement politique implique une opinion politique, que le règlement général sur la protection des données (RGPD) range parmi les catégories particulières de données à caractère personnel au titre de l'article 9 et protège plus strictement que les données à caractère personnel ordinaires. Nous nous fondons sur votre consentement explicite, donné lorsque vous avez candidaté, ainsi que sur l'article 9, paragraphe 2, point d), qui permet à un organisme sans but lucratif poursuivant une finalité politique de traiter les données de ses propres membres — à condition que ces données ne soient pas communiquées en dehors de l'organisme sans consentement. Elles ne le sont pas, et ne le seront pas.",
          },
          {
            type: "subheading",
            text: "Combien de temps il est conservé",
          },
          {
            type: "list",
            marker: "rule",
            items: [
              "Aussi longtemps que l'adhésion dure, et pas plus longtemps que le mouvement n'en a besoin.",
              "Supprimé dès que vous le demandez, sans que vous ayez à donner de motif.",
              "Rien n'est supprimé automatiquement à l'expiration d'un délai, car une demande que personne n'a encore lue est la demande de quelqu'un plutôt qu'un reliquat périmé.",
              "**Une demande refusée est conservée, marquée comme refusée, plutôt qu'effacée.** C'est un choix délibéré, et il a un coût pour vous ; il est donc énoncé sans détour : effacer l'enregistrement effacerait aussi le moyen de reconnaître que la même demande a déjà été examinée, et le mouvement la réexaminerait depuis le début chaque fois qu'elle serait renvoyée. Si vous préférez que rien du tout ne soit conservé, demandez-le, et ce sera effacé.",
              "Le journal d'administration décrit ci-dessous consigne qu'un enregistrement a été créé, modifié ou supprimé, et par qui, mais jamais son contenu.",
            ],
          },
          {
            type: "subheading",
            text: "Ce que fait le formulaire lui-même",
          },
          {
            type: "paragraph",
            text: "Votre nom, votre adresse, votre région et votre message sont chiffrés avant d'être consignés, dans la même requête — aucun d'eux n'est jamais conservé sous une forme lisible. La réponse que vous voyez est identique, que l'adresse figure déjà ou non au registre, de sorte que le formulaire ne peut pas servir à vérifier si telle personne est adhérente. Les demandes sont limitées en nombre par connexion, et il existe un plafond du nombre que le site acceptera en une heure de la part de tous réunis ; l'un et l'autre sont des défenses contre un script qui remplirait le registre plutôt que des mesures dirigées contre vous.",
          },
          {
            type: "paragraph",
            text: "Le formulaire porte aussi un champ que vous ne verrez jamais : une case vide, placée hors de l'écran, ignorée par le clavier et masquée aux lecteurs d'écran. Les automates remplissent tous les champs qu'ils trouvent et une personne ne peut pas remplir celui-là ; tout ce qui arrive avec ce champ rempli est donc écarté sans être enregistré. **Nous n'utilisons ni CAPTCHA ni détection de robots par un tiers**, délibérément — ces dispositifs fonctionnent en faisant observer par une société extérieure toute personne qui tente d'adhérer à un mouvement politique, ce qui est un marché moins bon que celui-ci.",
          },
          {
            type: "paragraph",
            text: "Vos coordonnées ne sont jamais vendues, jamais communiquées à une autre organisation, jamais utilisées pour constituer un profil publicitaire, et jamais transmises à un tiers à quelque fin que ce soit. Aucune décision automatisée n'est prise à votre sujet.",
          },
        ],
      },

      "how-it-is-protected": {
        title: "Comment cela est protégé",
        body: [
          {
            type: "paragraph",
            text: "Une liste d'adhérents est exactement le genre de document qui ne devrait jamais fuiter ; elle est donc bâtie en supposant qu'un jour quelque chose tournera mal. Ce qui suit est une description des garanties plutôt que la promesse que rien ne peut arriver. La correspondance envoyée par le formulaire de contact est conservée de la même manière.",
          },
          {
            type: "list",
            marker: "rule",
            items: [
              "**Votre nom, votre adresse électronique, votre région, votre message et toute note écrite à votre sujet sont chiffrés** avant d'être consignés, avec une clé qui n'est pas conservée dans la base de données. Une copie volée de la base, ou d'une de ses sauvegardes, ne se déchiffre en rien.",
              "**Votre pays est conservé en clair**, parce que compter et organiser par pays est la raison d'être de cette liste. À lui seul, il n'identifie personne. Votre région, qui resserrerait bien davantage l'identification, n'est pas traitée ainsi — elle est chiffrée avec le reste.",
              "**Personne ne se connecte avec un mot de passe.** L'accès administratif exige une clé d'accès détenue sur un appareil physique, qui ne peut être ni devinée, ni hameçonnée, ni lue dans une base de données volée.",
              "**Lire des noms ou des messages exige une seconde confirmation.** Être connecté ne montre que des dénombrements ; révéler une personne, ou ouvrir une lettre, exige une nouvelle validation par clé d'accès, valable quelques minutes. Qui vole une session active obtient des statistiques, non des personnes.",
              "**Chaque consultation est journalisée** — qui a regardé, et quand. Pas seulement chaque modification : pour une liste comme celle-ci, le fait de regarder est ce qui mérite d'être consigné. Ce qui a été recherché est consigné sous la forme d'une empreinte à sens unique, de sorte que le journal peut confirmer si telle personne a été recherchée sans devenir lui-même une liste de noms.",
              "**Il n'existe aucune fonction d'exportation.** La liste ne peut pas être téléchargée sous forme de fichier, car le fichier est la forme sous laquelle de telles listes s'échappent.",
            ],
          },
          {
            type: "paragraph",
            text: "Personne en dehors de l'administration propre au mouvement ne peut en lire quelque partie que ce soit, et aucune partie n'en est publiée où que ce soit, à quelque niveau d'agrégation que ce soit, sans consentement.",
          },
        ],
      },

      forms: {
        title: "Les deux formulaires",
        body: [
          {
            type: "paragraph",
            text: "Le premier est la demande d'adhésion sur [S'engager][join], décrite ci-dessus.",
          },
          {
            type: "paragraph",
            text: "Le second est le formulaire de message sur [Contact][contact]. Il conserve votre nom, votre adresse électronique, la fonction à laquelle vous vous êtes adressé et ce que vous avez écrit. Le nom, l'adresse et le message sont chiffrés exactement comme les coordonnées d'un adhérent — écrire à une organisation n'est pas la même chose que lui appartenir, mais l'écart est plus mince qu'il n'y paraît, et une lettre disant que vous songez à adhérer en révèle autant que le registre lui-même.",
          },
          {
            type: "paragraph",
            text: "La correspondance est conservée jusqu'à ce qu'elle ait été traitée et pas plus longtemps que la réponse ne l'exige, elle est effacée sur demande, et elle ne sert jamais à vous inscrire au registre des adhérents. Adhérer est une décision distincte que vous devez prendre délibérément. Aucune adresse électronique n'est imprimée sur la page de contact, car chacune n'est publiée que lorsque la fonction à laquelle elle appartient existe et que quelqu'un répond de sa lecture.",
          },
        ],
      },

      analytics: {
        title: "Chiffres de fréquentation",
        body: [
          {
            type: "paragraph",
            text: "Les visites sont comptées au moyen de Vercel Web Analytics, qui fonctionne sans cookie : il ne dépose rien sur votre appareil, ne conserve aucune donnée à caractère personnel, ne vous attribue aucun identifiant et ne peut pas vous suivre d'un site à l'autre. Il est servi depuis ce domaine plutôt que depuis un réseau tiers, de sorte que le chargement d'une page ne révèle votre visite à personne d'autre. C'est pourquoi le site ne porte aucune bannière de consentement — il n'y a rien à quoi consentir.",
          },
          {
            type: "paragraph",
            text: "Ce qu'il produit est un décompte des pages vues et des visiteurs, ventilé par page, par pays, par appareil, par système d'exploitation et par navigateur. Il n'est pas relié aux enregistrements d'adhésion, et il ne peut pas l'être : les deux n'ont rien en commun qui permettrait de les rapprocher.",
          },
          {
            type: "paragraph",
            text: "Ces totaux quotidiens sont recopiés chaque nuit dans la base de données propre à ce projet, car le service de comptage ne conserve que le dernier mois écoulé et nous aimerions pouvoir embrasser une année. Ce qui est recopié, ce sont les totaux eux-mêmes — une date, un nombre de visiteurs, un nombre de pages vues — et rien qui concerne une visite particulière.",
          },
          {
            type: "paragraph",
            text: "Deux autres choses sont mesurées ici plutôt que par le service de comptage, et toutes deux sont décrites en entier parce que, dans les deux cas, votre navigateur nous envoie quelque chose pendant que vous lisez.",
          },
          {
            type: "paragraph",
            text: "La première est le nombre de personnes qui ont le site ouvert en ce moment. Au chargement, une page tire un nombre au hasard et le garde dans la mémoire de la page — pas dans un cookie, pas dans le stockage local ou de session, nulle part qui survive. Il est jeté dès que vous fermez l'onglet ou rechargez, de sorte qu'il ne peut pas vous reconnaître à votre retour, et notre copie est supprimée quatre-vingt-dix secondes après le dernier signal de votre navigateur. Tout ce qu'il permet de savoir, c'est combien d'onglets sont ouverts et sur quelles pages ; jamais ceux de qui.",
          },
          {
            type: "paragraph",
            text: "La seconde est le temps pendant lequel une page retient un lecteur. Les secondes qu'une page passe devant vous sont ajoutées directement au total du jour pour cette page, dans l'opération même qui les reçoit. Votre chiffre personnel n'est jamais consigné : il n'existe nulle part de trace du temps que vous avez passé sur quoi que ce soit, et aucune ne pourrait être reconstituée. Un onglet laissé derrière une autre fenêtre ne compte pour rien, et toute lecture unique au-delà d'une demi-heure est comptée pour une demi-heure.",
          },
          {
            type: "paragraph",
            text: "Ni l'une ni l'autre n'enregistre votre adresse, une forme déguisée de votre adresse, l'identifiant de votre navigateur, ni aucune valeur qui survive à la page où vous êtes. Ce qu'elles produisent, ce sont des totaux par page et par jour ; c'est pourquoi ils sont conservés indéfiniment et pourquoi il n'y a rien là-dedans à effacer sur demande.",
          },
          {
            type: "paragraph",
            text: "Les pages d'administration sont exclues de tout cela, de sorte que les chiffres décrivent des lecteurs plutôt que notre propre travail de rédaction.",
          },
        ],
      },

      "fonts-and-assets": {
        title: "Polices et ressources",
        body: [
          {
            type: "paragraph",
            text: "Les polices de caractères sont servies depuis ce site plutôt que depuis un réseau de polices, de sorte que le chargement d'une page ne révèle pas votre visite à un tiers. Toutes les images sont stockées localement ; rien n'est appelé directement depuis un autre domaine.",
          },
        ],
      },

      "server-logs": {
        title: "Journaux du serveur",
        body: [
          {
            type: "paragraph",
            text: "Quiconque héberge ce site tiendra des journaux de serveur web ordinaires, qui comprennent habituellement des adresses IP, les chemins demandés et des horodatages. Cela relève de l'accord d'hébergement plutôt que de ce site, et cet accord sera nommé ici dès qu'il sera arrêté.",
          },
        ],
      },

      "your-rights": {
        title: "Vos droits",
        body: [
          {
            type: "paragraph",
            text: "Au titre du RGPD, vous disposez, à l'égard des données à caractère personnel conservées à votre sujet, d'un droit d'accès, de rectification, d'effacement, de limitation, de portabilité et d'opposition. Lorsque le traitement repose sur le consentement, vous pouvez en outre retirer ce consentement à tout moment, et le retirer est aussi simple que de l'avoir donné.",
          },
          {
            type: "paragraph",
            text: "Ces droits sont réels et les moyens de les honorer existent : un enregistrement peut être communiqué, corrigé ou purement et simplement supprimé sur demande, et supprimer veut dire supprimer, non poser un indicateur sur une ligne que l'on conserverait discrètement.",
          },
          {
            type: "statement",
            text: "Une chose manque, et nous préférons le dire plutôt que vous laisser le découvrir.",
          },
          {
            type: "paragraph",
            text: "L'enregistrement comme parti ou comme association n'est pas achevé : aucun responsable du traitement ne peut donc encore être nommé et aucune adresse de correspondance n'est publiée — voir les [mentions légales][imprint]. Tant que cela n'est pas réglé, il n'existe aucune adresse à laquelle vous puissiez envoyer une demande en sachant avec certitude qui la lira, ni aucune autorité de contrôle auprès de laquelle une réclamation pourrait être introduite contre un responsable nommé.",
          },
          {
            type: "paragraph",
            text: "C'est une lacune véritable, et elle plaide pour l'attente : si l'absence d'un responsable du traitement nommé vous inquiète, ne candidatez pas encore. Rien n'est perdu à candidater plus tard. Cette page nommera le responsable du traitement, l'adresse et l'autorité de contrôle avant que la lacune ne soit comblée, et non après.",
          },
          {
            type: "note",
            text: "Cette note décrit le site tel qu'il est et elle est écrite pour être lue plutôt que pour cocher des cases. Elle ne constitue pas un avis juridique, et elle sera remplacée par une politique de confidentialité complète lors de l'enregistrement.",
          },
        ],
      },
    },
  },

  imprint: {
    eyebrow: "Informations légales",
    title: "Mentions légales",
    metaTitle: "Mentions légales",
    lede: "Informations sur l'éditeur, telles que les exigent le droit européen des médias et le droit des partis.",
    description:
      "Informations sur l'éditeur du Restore Europa Movement. Le mouvement est en formation ; les mentions enregistrées sont publiées à mesure qu'elles deviennent réelles.",
    intro: [
      {
        type: "lead",
        text: "Ce site est publié par le Restore Europa Movement, un mouvement politique des peuples nationaux d'Europa.",
      },
      {
        type: "paragraph",
        text: "L'enregistrement comme parti ou comme association est en cours et n'est encore achevé dans aucun ordre juridique. Tant qu'il ne l'est pas, il n'y a ni dénomination enregistrée, ni numéro d'inscription, ni représentant légal à indiquer, et cette page n'en inventera aucun. Chaque mention paraîtra ici dès qu'elle sera officiellement consignée.",
      },
      {
        type: "paragraph",
        text: "Les notifications légales et les corrections doivent être envoyées par les voies de correspondance indiquées sur [Contact][contact], qui précise l'adresse publiée pour chaque fonction.",
      },
    ],
    particularsHeading: "Mentions à publier",
    particularsNote: "Dès l'enregistrement achevé, dans cet ordre.",
    aboutLabel: "À propos de ce site",
    entries: {
      publisher: {
        term: "Éditeur",
        description: "La dénomination enregistrée de l'association ou du parti.",
      },
      "legal-form": {
        term: "Forme juridique et juridiction",
        description: "Déterminées par le pays d'enregistrement.",
      },
      "registered-address": {
        term: "Adresse enregistrée",
        description: "Le siège de l'organisation.",
      },
      responsible: {
        term: "Responsable du contenu",
        description: "La personne qui en répond au titre du droit de la presse applicable.",
      },
      register: {
        term: "Registre et numéro",
        description: "Le registre des associations ou des partis, et l'inscription.",
      },
      "represented-by": {
        term: "Représenté par",
        description: "Les dirigeants habilités à agir pour l'organisation.",
      },
      "supervisory-authority": {
        term: "Autorité de contrôle",
        description: "Lorsque le droit national des partis en prévoit une.",
      },
    },
    closing: [
      {
        type: "subheading",
        text: "Ce site",
      },
      {
        type: "paragraph",
        text: "Le manifeste, les principes et le catalogue des politiques sont publiés par le mouvement et peuvent être cités avec mention de la source. Les crédits photographiques et les licences sont consignés dans le dépôt qui produit ce site.",
      },
      {
        type: "paragraph",
        text: "Les corrections et les notifications légales pourront être envoyées par [Contact][contact] dès que les adresses seront publiées.",
      },
    ],
  },
};
