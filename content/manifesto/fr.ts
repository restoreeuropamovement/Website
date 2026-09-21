import type { ContentBlock } from "@/lib/content-types";
import type { ManifestoText } from "./index";

export const manifestoText: ManifestoText = {
  meta: {
    title: "Manifeste du restaurationnisme intégral européen",
    subtitle: "Pour une civilisation chrétienne, européenne et à l'échelle humaine",
    status: "Document fondateur · Texte en cours de révision avant adoption formelle",
  },
  sections: {
    preamble: {
      title: "Préambule",
      summary: "L'Europe est une civilisation, et un héritage qui a été transmis plutôt qu'inventé.",
      body: [
        { type: "lead", text: "L'Europe est davantage qu'un continent, qu'un marché ou qu'un espace administratif." },
        {
          type: "paragraph",
          text: "Elle est une civilisation : l'œuvre du christianisme et de l'héritage classique, de peuples historiques distincts, de langues et de nations, de générations de familles, de paysages cultivés, de villes et de villages, d'églises et de monastères, d'art, de philosophie, de droit, d'artisanat, de sacrifice et de mémoire.",
        },
        {
          type: "paragraph",
          text: "Cet héritage n'a pas été créé par des individus abstraits, détachés de l'histoire. Il a été transmis d'une génération à l'autre.",
        },
        {
          type: "paragraph",
          text: "Burke en a fixé la formulation en 1790, contre une révolution qui prétendait tout recommencer à partir de la seule raison. Une société, écrivait-il, est une association — et, parce que les fins d'une telle association ne sauraient être atteintes dans l'espace d'une seule vie, elle est une association « non seulement entre les vivants, mais entre les vivants, les morts et ceux qui sont à naître ». Quoi que l'on conteste par ailleurs dans les pages qui suivent, cette phrase en est la prémisse.",
        },
        { type: "paragraph", text: "Or l'Europe moderne tient de plus en plus l'héritage lui-même pour suspect." },
        {
          type: "paragraph",
          text: "L'ordre dominant a placé l'autonomie individuelle au-dessus de l'obligation, la consommation au-dessus de la continuité, la croissance économique au-dessus de la communauté, la capacité technique au-dessus du jugement humain, et l'uniformité administrative au-dessus du caractère propre des peuples et des lieux. Il a progressivement affaibli les institutions qui se tenaient autrefois entre l'individu isolé et le pouvoir centralisé : la famille, la paroisse, la corporation, la commune, la région et la nation.",
        },
        { type: "paragraph", text: "Nous récusons le postulat selon lequel ce mouvement constituerait un progrès inévitable." },
        {
          type: "paragraph",
          text: "Nous récusons également l'idée que restaurer consisterait à recréer mécaniquement tel ou tel siècle. Le passé a connu l'injustice, la pauvreté, la violence et l'erreur. Restaurer n'est pas reconstituer le passé.",
        },
        {
          type: "paragraph",
          text: "C'est retrouver les principes que la société moderne a écartés, et les appliquer intelligemment aux conditions du présent.",
        },
        {
          type: "paragraph",
          text: "Notre visée n'est donc ni la révolution pour elle-même, ni la conservation de l'ordre existant.",
        },
        { type: "statement", text: "Notre visée est de restaurer." },
      ] satisfies readonly ContentBlock[],
    },

    "moral-order": {
      title: "L'ordre moral",
      summary: "La société politique ne peut rester indéfiniment neutre à l'égard du bien dont la protection est sa raison d'être.",
      body: [
        {
          type: "lead",
          text: "Nous récusons la thèse libérale selon laquelle la société politique pourrait demeurer indéfiniment neutre à l'égard du bien.",
        },
        {
          type: "paragraph",
          text: "Toute civilisation porte des jugements : sur ce qui mérite protection, sur ce qu'il convient d'encourager, sur ce qui fait la justice, et sur le genre d'homme qu'elle espère former.",
        },
        {
          type: "paragraph",
          text: "Nous affirmons que la vérité morale ne tire son origine ni des préférences de l'individu, ni des commandements de l'État, ni de la demande du marché, ni de la possibilité technique.",
        },
        { type: "statement", text: "L'homme possède une dignité parce qu'il est une personne créée par Dieu." },
        {
          type: "paragraph",
          text: "L'autorité politique n'est donc là ni pour fabriquer une humanité nouvelle, ni pour se borner à administrer des appétits concurrents. Sa fin propre est le bien commun : l'ensemble des conditions sociales dans lesquelles les personnes, les familles et les communautés peuvent vivre selon la vertu et s'épanouir.",
        },
        {
          type: "paragraph",
          text: "On ne peut comprendre la civilisation européenne indépendamment du christianisme. Nous reconnaissons donc l'héritage chrétien de l'Europe, et singulièrement son héritage catholique, comme un élément fondateur de sa civilisation.",
        },
        {
          type: "paragraph",
          text: "Ce que nous refusons n'est pas l'existence du désaccord, mais la doctrine qui voudrait que la vie publique européenne se conduise comme si son propre héritage religieux n'avait jamais existé.",
        },
      ] satisfies readonly ContentBlock[],
    },

    "person-not-atom": {
      title: "La personne n'est pas un atome",
      summary: "Nous partons non de l'individu autonome, mais de la personne en relation.",
      body: [
        { type: "lead", text: "L'individualisme libéral part de l'individu autonome." },
        { type: "statement", text: "Nous partons de la personne en relation." },
        {
          type: "paragraph",
          text: "Nul ne vient au monde sans attaches : chacun entre dans un monde où se trouvent déjà des parents, une famille, une langue, une culture, une patrie, des devoirs, une histoire et des obligations morales. Ce ne sont pas des contraintes dépourvues de sens, dont il faudrait indéfiniment s'affranchir : elles comptent au nombre des conditions qui rendent possible une vie pleinement humaine.",
        },
        { type: "paragraph", text: "Les droits sont réels ; ils ne survivent pourtant pas sans les devoirs qui leur répondent." },
        {
          type: "paragraph",
          text: "La liberté est réelle ; elle ne se réduit pourtant pas à l'absence de contrainte. La liberté véritable comprend la capacité de poursuivre ce qui est bon.",
        },
        { type: "paragraph", text: "Un ordre politique sain tient donc en équilibre :" },
        {
          type: "list",
          marker: "rule",
          items: [
            "la liberté et la responsabilité,",
            "les droits et les devoirs,",
            "la dignité de chacun et l'obligation envers tous,",
            "l'autorité et la subsidiarité.",
          ],
        },
      ] satisfies readonly ContentBlock[],
    },

    family: {
      title: "La famille",
      summary: "La première institution de la civilisation : elle précède l'État, et elle doit être rendue matériellement possible.",
      body: [
        { type: "lead", text: "La famille est la première institution de la civilisation, et elle précède l'État." },
        {
          type: "paragraph",
          text: "Nous tenons pour l'institution sociale fondamentale, celle dont dépend la société politique, la famille formée autour du mariage de l'homme et de la femme, de l'éducation des enfants, de l'obligation entre les générations et du soin donné aux plus jeunes comme aux plus âgés.",
        },
        {
          type: "list",
          marker: "rule",
          items: [
            "Une économie qui rend financièrement impossible la fondation d'une famille est déréglée.",
            "Un marché du travail qui traite la parentalité comme une gêne est déréglé.",
            "Un marché du logement qui fait de la propriété durable un privilège hors d'atteinte est déréglé.",
          ],
        },
        {
          type: "paragraph",
          text: "Une culture qui enseigne l'adolescence perpétuelle, le consumérisme et l'isolement ne peut porter une civilisation.",
        },
        {
          type: "paragraph",
          text: "L'action publique doit donc rendre matériellement possible la fondation d'une famille : un logement abordable, une fiscalité familiale, un soutien à la parentalité, des emplois stables et la disponibilité d'un temps soustrait à la production économique.",
        },
        {
          type: "paragraph",
          text: "Le renouveau démographique de l'Europe doit procéder avant tout d'une vie de famille redevenue possible pour les Européens eux-mêmes, et non d'une immigration permanente de grande ampleur tenue pour un substitut à la naissance et à la continuité des générations futures.",
        },
      ] satisfies readonly ContentBlock[],
    },

    nation: {
      title: "Nation, peuple et patrie",
      summary: "L'humanité est universelle ; la civilisation est particulière. Les peuples d'Europe peuvent garder leur continuité.",
      body: [
        { type: "lead", text: "L'humanité est universelle. La civilisation est particulière." },
        {
          type: "paragraph",
          text: "On n'appartient pas seulement à l'humanité en général, mais à des communautés réelles, façonnées par l'histoire.",
        },
        {
          type: "paragraph",
          text: "La nation n'est donc pas une simple circonscription administrative. C'est une communauté à travers les générations, que tiennent ensemble la mémoire historique, la langue, les coutumes, les institutions, le territoire et le sentiment d'un destin commun.",
        },
        { type: "paragraph", text: "Les peuples d'Europe ont un intérêt légitime à maintenir leur continuité historique." },
        {
          type: "paragraph",
          text: "L'égalité en dignité n'implique pas que chaque pays doive devenir culturellement interchangeable avec tous les autres.",
        },
        {
          type: "list",
          marker: "none",
          items: [
            "Une ville polonaise doit rester reconnaissable comme polonaise.",
            "Une ville italienne doit rester reconnaissable comme italienne.",
            "Un village français doit rester reconnaissable comme français.",
          ],
        },
        {
          type: "paragraph",
          text: "Préserver les cultures et les peuples historiques de l'Europe n'est pas en soi plus hostile que de préserver les cultures et les identités historiques des autres civilisations.",
        },
        { type: "statement", text: "Nous défendons donc la continuité." },
      ] satisfies readonly ContentBlock[],
    },

    immigration: {
      title: "Immigration et intégration",
      summary: "Une admission à des niveaux compatibles avec une intégration réelle ; la citoyenneté comme appartenance, non comme simple résidence.",
      body: [
        { type: "lead", text: "La politique migratoire doit servir le bien commun du pays d'accueil, entendu dans la durée." },
        {
          type: "paragraph",
          text: "Aucune société ne dispose d'une capacité illimitée à absorber un changement démographique sans que la confiance sociale, le logement, la continuité culturelle, les infrastructures et la cohésion politique en soient affectés.",
        },
        {
          type: "paragraph",
          text: "L'immigration doit donc être limitée à des niveaux compatibles avec une intégration réelle, avec la stabilité sociale et avec la continuité démographique et culturelle de la société d'accueil.",
        },
        { type: "paragraph", text: "La citoyenneté doit signifier une appartenance, et non une simple résidence." },
        {
          type: "paragraph",
          text: "La naturalisation doit exiger une connaissance réelle de la langue nationale, de l'histoire et des institutions, le respect de l'ordre constitutionnel et un attachement sincère au pays.",
        },
        { type: "statement", text: "Ceux qui deviennent citoyens selon la loi doivent être traités en citoyens." },
        {
          type: "paragraph",
          text: "Les obligations humanitaires ne sauraient être interprétées comme imposant aux sociétés européennes de renoncer à la maîtrise de leur avenir démographique.",
        },
        { type: "paragraph", text: "Les frontières sont des institutions légitimes." },
        {
          type: "paragraph",
          text: "L'hospitalité sans ordre finit par détruire les conditions qui rendent l'hospitalité elle-même possible.",
        },
      ] satisfies readonly ContentBlock[],
    },

    europe: {
      title: "L'Europe, civilisation de nations",
      summary: "La coopération entre nations souveraines, gouvernée de bout en bout par la subsidiarité.",
      body: [
        { type: "lead", text: "L'unité européenne ne doit pas avoir pour prix la dissolution des nations européennes." },
        {
          type: "paragraph",
          text: "Nous refusons aussi bien l'isolement national absolu que la transformation de l'Europe en un État administratif centralisé et post-national.",
        },
        {
          type: "paragraph",
          text: "L'Europe doit devenir au contraire une communauté de civilisation formée de nations souveraines, coopérant là où la coopération sert véritablement leurs intérêts communs.",
        },
        { type: "paragraph", text: "Le principe qui doit gouverner l'organisation politique de l'Europe est la subsidiarité :" },
        {
          type: "statement",
          text: "Rien ne doit être décidé à un échelon supérieur lorsque cela peut l'être avec compétence à un échelon inférieur.",
        },
        {
          type: "list",
          marker: "rule",
          items: [
            "Le village ne doit pas céder sans nécessité devant la région.",
            "La région ne doit pas céder sans nécessité devant la nation.",
            "La nation ne doit pas céder sans nécessité devant les institutions continentales.",
          ],
        },
        {
          type: "paragraph",
          text: "L'Europe doit coopérer en matière de défense, de frontières, d'infrastructures stratégiques, de science, de protection de l'environnement et de sauvegarde de sa civilisation, tout en conservant les identités historiques et l'autonomie politique de ses nations.",
        },
        { type: "paragraph", text: "Ce que nous voulons n'est pas une Europe uniforme." },
        { type: "statement", text: "C'est une Europe dont la diversité demeure proprement européenne." },
      ] satisfies readonly ContentBlock[],
    },

    "economic-order": {
      title: "L'ordre économique",
      summary: "Ni capitalisme sans frein, ni socialisme centralisé : beaucoup de propriétaires plutôt que quelques-uns.",
      body: [
        { type: "lead", text: "Nous refusons aussi bien le capitalisme sans frein que le socialisme centralisé." },
        { type: "statement", text: "La vie économique existe pour l'homme. L'homme n'existe pas pour la vie économique." },
        {
          type: "paragraph",
          text: "Cette position est plus ancienne que nous. Léon XIII en a tracé la figure dans Rerum novarum, en 1891, défendant contre le socialisme le droit de posséder des biens productifs tout en condamnant les conditions qu'avait engendrées le capitalisme industriel — refusant, autrement dit, d'admettre que les deux réponses disponibles fussent les seules. Hilaire Belloc a poussé l'argument plus loin dans L'État servile, en 1912 : il y prévoyait qu'une société où la propriété se concentre ne deviendrait pas socialiste, mais s'établirait dans autre chose — la sécurité offerte à ceux qui ne possèdent rien, payée au prix d'une servitude durable. Nous pensons qu'il a vu juste sur la direction que prenaient les choses.",
        },
        { type: "paragraph", text: "La société commerciale est un instrument juridique et économique, non une institution souveraine." },
        {
          type: "paragraph",
          text: "Les entreprises remplissent une fonction indispensable lorsqu'elles produisent des biens utiles, créent des moyens d'existence, développent des savoirs et servent les communautés au sein desquelles elles opèrent.",
        },
        { type: "paragraph", text: "Mais la puissance des entreprises doit demeurer subordonnée au bien commun." },
        {
          type: "paragraph",
          text: "Une société commerciale ne doit pas avoir les moyens effectifs de dominer les institutions politiques, de détruire des communautés viables, de conduire les citoyens par la manipulation à une dépendance permanente, de monopoliser des marchés essentiels ou de réorganiser la société selon les seules exigences du profit et de l'efficacité.",
        },
        {
          type: "list",
          marker: "none",
          items: ["Le profit est légitime.", "L'entreprise est légitime.", "La réussite économique est légitime."],
        },
        { type: "paragraph", text: "Mais aucune de ces choses n'est la fin la plus haute d'une société." },
        { type: "paragraph", text: "Le rapport juste doit donc être clairement établi :" },
        {
          type: "statement",
          text: "L'économie existe pour la personne, la famille et la communauté ; la personne, la famille et la communauté n'existent pas pour l'économie.",
        },
        { type: "paragraph", text: "Là où les entreprises contribuent à l'épanouissement humain, elles doivent prospérer." },
        {
          type: "paragraph",
          text: "Là où la puissance économique concentrée menace la concurrence véritable, la vie de famille, l'indépendance politique, la dignité humaine ou la survie des communautés locales, la société a l'autorité légitime de la contenir.",
        },
        {
          type: "paragraph",
          text: "Nous ne cherchons ni l'abolition de l'entreprise privée, ni l'appropriation de la vie économique par l'État.",
        },
        {
          type: "paragraph",
          text: "Nous cherchons une économie où l'entreprise demeure la servante de la civilisation au lieu d'en devenir la maîtresse.",
        },
        {
          type: "paragraph",
          text: "La propriété privée est une source importante d'indépendance et de responsabilité. La réponse à une propriété excessivement concentrée n'est donc pas l'abolition de la propriété, mais sa répartition plus large.",
        },
        { type: "paragraph", text: "Notre idéal économique est distributiste quant à la propriété et corporatiste quant à l'organisation." },
        { type: "paragraph", text: "Nous voulons une société où l'on trouve :" },
        {
          type: "list",
          marker: "rule",
          items: [
            "une accession à la propriété du logement largement répandue ;",
            "des entreprises familiales ;",
            "des artisans et des métiers indépendants ;",
            "des petites et moyennes entreprises ;",
            "des coopératives et l'actionnariat salarié ;",
            "une agriculture familiale ;",
            "une banque locale et régionale ;",
            "l'apprentissage et les institutions de formation professionnelle ;",
            "des associations professionnelles solides ;",
            "des limites à la concentration monopolistique.",
          ],
        },
        {
          type: "paragraph",
          text: "Une civilisation où des millions de personnes ne possèdent rien, tandis qu'un petit nombre de sociétés, d'institutions financières ou d'organismes d'État possèdent presque tout, ne peut sérieusement passer pour une société de propriétaires.",
        },
        { type: "statement", text: "L'objectif doit donc être beaucoup de propriétaires plutôt que quelques-uns." },
      ] satisfies readonly ContentBlock[],
    },

    corporatism: {
      title: "Corporatisme, corps de métier et bien commun",
      summary: "Des corps de métier ayant une place réelle dans la vie économique — et indépendants de l'État.",
      body: [
        {
          type: "lead",
          text: "Le conflit du travail et du capital ne doit pas être tenu pour le principe d'organisation permanent de la vie économique.",
        },
        {
          type: "paragraph",
          text: "Les salariés, les employeurs, les artisans, les agriculteurs et les professions participent d'un même organisme économique.",
        },
        {
          type: "paragraph",
          text: "Des formes modernes de corporations, de chambres professionnelles et de corps de métier doivent donc prendre part au gouvernement de l'économie.",
        },
        {
          type: "paragraph",
          text: "Il leur revient d'établir les règles de la profession, l'apprentissage, les conditions de travail, les mécanismes de médiation et la représentation des branches, tout en demeurant suffisamment indépendantes de l'administration centrale de l'État.",
        },
        {
          type: "paragraph",
          text: "La représentation politique elle-même peut comprendre, outre la représentation territoriale, une représentation organisée des principaux corps sociaux et professionnels de la société.",
        },
        { type: "paragraph", text: "Ce corporatisme doit demeurer subordonné à la subsidiarité." },
        {
          type: "paragraph",
          text: "Nous refusons un système où les organisations professionnelles ne seraient plus que les instruments d'un État tout-puissant.",
        },
        { type: "statement", text: "Ni l'entreprise ni l'État ne doivent absorber la société civile." },
      ] satisfies readonly ContentBlock[],
    },

    finance: {
      title: "Contre la domination de la finance",
      summary: "La finance est nécessaire ; la domination financière ne l'est pas. La terre et le logement sont faits pour être habités.",
      body: [
        { type: "lead", text: "La finance est nécessaire." },
        { type: "statement", text: "La domination financière ne l'est pas." },
        {
          type: "paragraph",
          text: "La fonction propre de la finance est d'orienter l'épargne vers l'activité productive, le logement, l'entreprise et l'investissement de long terme.",
        },
        {
          type: "paragraph",
          text: "Une économie dominée par la spéculation, l'inflation des actifs, la dette prédatrice et la captation financière sépare peu à peu la richesse de la contribution productive.",
        },
        {
          type: "paragraph",
          text: "L'action publique doit donc préférer l'investissement productif à la spéculation, et la propriété familiale à l'endettement permanent.",
        },
        {
          type: "paragraph",
          text: "La terre et le logement doivent servir avant tout à habiter et à faire communauté, et non devenir des instruments financiers indéfiniment valorisés, sans rapport avec les salaires.",
        },
        { type: "paragraph", text: "Les marchés sont des mécanismes utiles." },
        { type: "statement", text: "Ils ne sont pas des autorités morales." },
        {
          type: "paragraph",
          text: "Là où le marché ruine les fondements dont la société dépend, la société politique a le droit de le réglementer.",
        },
      ] satisfies readonly ContentBlock[],
    },

    technology: {
      title: "La technique doit servir l'homme",
      summary: "Contre l'inéluctabilité technologique. La machine doit s'adapter à l'homme.",
      body: [
        { type: "lead", text: "Le développement technique n'est pas synonyme de progrès humain." },
        {
          type: "paragraph",
          text: "Une société peut gagner en avance technique tout en s'affaiblissant socialement, en devenant psychologiquement moins saine, politiquement plus centralisée et plus destructrice pour son environnement.",
        },
        {
          type: "paragraph",
          text: "Nous refusons donc l'inéluctabilité technologique : l'idée que tout ce qui peut être inventé doit être adopté, et que tout ce qui accroît l'efficacité vaut nécessairement comme un progrès.",
        },
        { type: "paragraph", text: "Le système technique porte en lui une tendance à l'expansion." },
        {
          type: "paragraph",
          text: "Une technique introduite comme facultative peut devenir économiquement nécessaire. Ce qui devient nécessaire remodèle les institutions, et les institutions réorganisent ensuite la société autour des exigences de la technique.",
        },
        { type: "paragraph", text: "Au bout de cet enchaînement, ce sont les hommes qui s'adaptent à la machine." },
        {
          type: "paragraph",
          text: "Ivan Illich a décrit cet enchaînement dans La Convivialité, en 1973 : un outil franchit un second seuil au-delà duquel il cesse de servir la fin pour laquelle on l'avait adopté et se met à imposer des fins qui lui sont propres — ses exemples étaient la médecine, l'école et l'automobile, auxquelles personne, estimait-il, n'avait choisi de se soumettre. E. F. Schumacher publiait la même année Small Is Beautiful, où il demandait à quoi ressemblerait une économie qui prendrait l'échelle de la vie humaine pour une contrainte et non pour une gêne. Ni l'un ni l'autre n'était un réactionnaire, et ni l'un ni l'autre n'est pour nous une lecture confortable.",
        },
        { type: "paragraph", text: "Notre principe est l'inverse :" },
        { type: "statement", text: "La machine doit s'adapter à l'homme." },
        {
          type: "paragraph",
          text: "Chaque technique doit être jugée à ce qu'elle renforce ou affaiblit : l'autonomie humaine, la vie de famille, la communauté, le travail qui a du sens, la vie privée, la décentralisation politique et le milieu naturel.",
        },
        {
          type: "paragraph",
          text: "Nous distinguons donc la technique qui répond à des besoins humains réels de celle dont l'effet principal est la dépendance, la surveillance, la distraction ou l'atomisation sociale.",
        },
        {
          type: "paragraph",
          text: "La médecine, l'assainissement, le savoir scientifique et une ingénierie véritablement bienfaisante ne sont pas des ennemis.",
        },
        { type: "paragraph", text: "Toute pratique ancienne n'a pas pour autant à être conservée au seul motif qu'elle est ancienne." },
        { type: "paragraph", text: "Notre doctrine n'est pas un romantisme du primitif." },
        { type: "statement", text: "C'est la subordination de la technique." },
      ] satisfies readonly ContentBlock[],
    },

    "human-scale-life": {
      title: "Le droit à une vie à l'échelle humaine",
      summary: "La participation ordinaire à la vie sociale ne doit pas exiger une dépendance technologique totale.",
      body: [
        {
          type: "lead",
          text: "Les citoyens des sociétés modernes ont de plus en plus besoin de systèmes techniques pour seulement prendre part à la vie ordinaire.",
        },
        { type: "paragraph", text: "Cette dépendance ne doit pas être sans limite." },
        { type: "paragraph", text: "Les citoyens doivent conserver un accès réel :" },
        {
          type: "list",
          marker: "rule",
          items: [
            "à l'argent liquide ;",
            "à des services publics où l'on peut s'adresser à une personne ;",
            "à des moyens d'identification non numériques partout où cela reste praticable ;",
            "à des livres et à des supports d'enseignement imprimés ;",
            "à des produits réparables ;",
            "au commerce de proximité ;",
            "à des espaces privés soustraits à la surveillance permanente ;",
            "à des décideurs humains partout où les conséquences juridiques ou morales sont graves.",
          ],
        },
        {
          type: "paragraph",
          text: "Les enfants en particulier doivent être protégés des industries dont le modèle économique repose sur la maximisation de la dépendance psychologique et de la captation de l'attention.",
        },
        {
          type: "paragraph",
          text: "L'intelligence artificielle et l'automatisation ne doivent pas être évaluées à la seule productivité, mais à leurs effets sur la compétence humaine, sur l'emploi, sur l'autonomie et sur le pouvoir des institutions.",
        },
        {
          type: "statement",
          text: "De ce qu'une capacité technique existe, il ne suit aucune obligation de la mettre en œuvre.",
        },
      ] satisfies readonly ContentBlock[],
    },

    stewardship: {
      title: "L'intendance du monde naturel",
      summary: "La nature n'est ni une marchandise sans limite ni une divinité — c'est un héritage reçu en dépôt.",
      body: [
        { type: "lead", text: "Le monde naturel n'est ni une marchandise sans limite ni une divinité à adorer." },
        { type: "statement", text: "C'est un héritage confié à l'homme." },
        {
          type: "paragraph",
          text: "Burke a dit la chose plus exactement que nous ne saurions le faire. Écrivant en 1790, il décrivait ceux qui vivent à un moment donné comme les « possesseurs temporaires et usufruitiers viagers » de la chose publique, qui ne doivent pas se tenir pour ses maîtres absolus. Il raisonnait sur les constitutions plutôt que sur les forêts, mais la structure de l'obligation est la même, et c'est bien pourquoi cette section trouve sa place dans un document politique.",
        },
        {
          type: "paragraph",
          text: "Les forêts, les rivières, les terres agricoles, les montagnes, les littoraux et la biodiversité doivent être protégés non seulement pour la valeur économique qu'ils représentent, mais parce que la civilisation humaine dépend elle-même d'un rapport stable au monde naturel.",
        },
        { type: "paragraph", text: "Nous refusons une écologie qui ferait de l'humanité un parasite par nature." },
        {
          type: "paragraph",
          text: "Nous refusons tout autant une idéologie économique qui tiendrait n'importe quelle destruction pour justifiée dès lors qu'elle augmente la production à court terme.",
        },
        { type: "paragraph", text: "L'action publique en matière d'environnement doit favoriser :" },
        {
          type: "list",
          items: [
            "l'agriculture locale,",
            "des sols sains,",
            "une eau propre,",
            "des objets durables,",
            "la réparation plutôt que le jetable,",
            "des chaînes d'approvisionnement régionales,",
            "une sylviculture responsable,",
            "la restauration des écosystèmes abîmés,",
            "et des formes d'habitat qui préservent à la fois la communauté humaine et les paysages naturels.",
          ],
        },
        {
          type: "paragraph",
          text: "La campagne ne doit devenir ni une zone d'extraction industrielle ni un musée d'où la vie humaine ordinaire aurait été chassée.",
        },
        { type: "statement", text: "L'homme a sa place au sein de la nature, mais comme son intendant." },
      ] satisfies readonly ContentBlock[],
    },

    architecture: {
      title: "La ville, le village et l'architecture",
      summary: "La civilisation s'inscrit dans la pierre. Une société sûre d'elle-même peut de nouveau bâtir avec beauté.",
      body: [
        { type: "lead", text: "La civilisation s'exprime dans la matière." },
        { type: "paragraph", text: "L'architecture façonne l'idée que l'on se fait de la beauté, de l'appartenance et de la continuité." },
        {
          type: "paragraph",
          text: "Le procès de l'urbanisme du milieu du XXe siècle n'a pas d'abord été instruit par des conservateurs. Jane Jacobs l'a mené dans Déclin et survie des grandes villes américaines, en 1961, en montrant que les planificateurs détruisaient cette vie de rue dense, mêlée et sans prestige qui rendait en réalité les quartiers sûrs et habitables. Christopher Alexander et ses collaborateurs ont tenté d'exposer, dans A Pattern Language, en 1977, ce que serait en pratique l'autre voie, jusqu'à la largeur d'une porte. Nous préférons emprunter à ceux qui ont fait ce travail plutôt que d'affirmer un goût pour la beauté et nous en tenir là.",
        },
        {
          type: "paragraph",
          text: "Les villes européennes doivent donc cesser de tenir la laideur et l'absence de lieu pour des signes de progrès.",
        },
        {
          type: "paragraph",
          text: "La construction publique doit respecter l'échelle humaine, les matériaux locaux, les traditions régionales et le caractère propre des lieux anciens.",
        },
        {
          type: "paragraph",
          text: "Les édifices anciens, les églises, les ensembles urbains et les monuments doivent être préservés partout où cela reste raisonnablement possible.",
        },
        {
          type: "paragraph",
          text: "Les constructions nouvelles doivent donner des lieux habitables sur plusieurs générations, et non des cadres jetables conçus d'abord pour des flux de circulation, des portefeuilles d'investissement et de courts cycles de chantier.",
        },
        { type: "statement", text: "Une civilisation sûre d'elle-même doit être capable de bâtir de nouveau avec beauté." },
      ] satisfies readonly ContentBlock[],
    },

    education: {
      title: "Éducation",
      summary: "Transmettre l'héritage avant de chercher à le transformer ; les parents demeurent les premiers éducateurs.",
      body: [
        { type: "lead", text: "L'éducation doit transmettre la civilisation avant de chercher à la transformer." },
        {
          type: "paragraph",
          text: "Chaque génération a le devoir d'initier la suivante à l'héritage qu'elle a elle-même reçu.",
        },
        { type: "paragraph", text: "L'enseignement doit donc comprendre l'étude sérieuse :" },
        {
          type: "list",
          items: [
            "du christianisme,",
            "de l'histoire européenne et nationale,",
            "de la civilisation classique,",
            "de la philosophie,",
            "de la littérature,",
            "des sciences,",
            "des mathématiques,",
            "de la musique,",
            "de l'art,",
            "de l'artisanat,",
            "et de la responsabilité civique.",
          ],
        },
        {
          type: "paragraph",
          text: "L'intelligence de l'histoire ne doit pas dégénérer en un enseignement qui apprendrait aux jeunes Européens que leur civilisation n'est guère plus qu'une culpabilité accumulée.",
        },
        {
          type: "statement",
          text: "Un peuple incapable de respecter ses ancêtres finira par se désintéresser de ses descendants.",
        },
        {
          type: "paragraph",
          text: "Les parents demeurent les premiers éducateurs de leurs enfants ; l'autorité scolaire doit donc respecter cette responsabilité et le pluralisme des établissements.",
        },
      ] satisfies readonly ContentBlock[],
    },

    subsidiarity: {
      title: "Autorité et subsidiarité",
      summary: "L'autorité est nécessaire, mais elle doit être répartie jusqu'à l'échelon compétent le plus bas.",
      body: [
        { type: "lead", text: "Nous refusons aussi bien l'individualisme anarchique qu'un pouvoir d'État qui absorbe tout." },
        { type: "paragraph", text: "L'autorité est nécessaire, car une communauté politique a besoin d'ordre." },
        { type: "paragraph", text: "Mais elle doit être répartie." },
        {
          type: "paragraph",
          text: "Le principe a un nom et une source. Pie XI l'a énoncé dans Quadragesimo anno, en 1931 : c'est commettre une injustice, et troubler l'ordre juste, que de confier à une collectivité plus vaste et d'un rang plus élevé ce que des groupements d'ordre inférieur sont en mesure de faire eux-mêmes. Il en faisait une question de justice, et non d'administration efficace — thèse considérablement plus forte, et à laquelle il est bien plus difficile de satisfaire.",
        },
        {
          type: "paragraph",
          text: "La concentration du pouvoir social, économique, technique et gouvernemental entre les mains d'un petit nombre d'institutions rend toute liberté véritable impossible.",
        },
        { type: "statement", text: "Le pouvoir politique doit donc s'exercer à l'échelon compétent le plus bas." },
        {
          type: "list",
          marker: "rule",
          items: [
            "Aux familles de régler les affaires familiales.",
            "Aux communes de régler les affaires locales.",
            "Aux régions de conserver une autonomie réelle.",
            "Aux nations de régler les affaires nationales.",
          ],
        },
        {
          type: "paragraph",
          text: "Les autorités supérieures ne doivent intervenir, pour l'essentiel, que là où les institutions inférieures ne peuvent remplir convenablement une fonction nécessaire.",
        },
        { type: "paragraph", text: "Ce n'est pas là une commodité administrative." },
        { type: "statement", text: "C'est un principe de liberté politique." },
        {
          type: "paragraph",
          text: "Il faut être franc sur le point où cela laisse la discussion. Les traités européens professent déjà la subsidiarité : l'article 5 du traité sur l'Union européenne n'autorise celle-ci à agir que si les objectifs de l'action envisagée ne peuvent être atteints de manière suffisante par les États membres. Notre différend ne porte donc pas sur le principe, dont nos adversaires se réclament aussi, mais sur la question de savoir qui a qualité pour juger s'il a été respecté, et sur ce qui doit suivre lorsque la réponse est non.",
        },
      ] satisfies readonly ContentBlock[],
    },

    democracy: {
      title: "Démocratie, représentation et État",
      summary: "Un gouvernement constitutionnel, une représentation élargie, et la coopération là où le bien commun l'exige.",
      body: [
        { type: "lead", text: "Le libéralisme et la démocratie ne sont pas une seule et même chose." },
        {
          type: "paragraph",
          text: "Une société peut récuser le libéralisme philosophique tout en conservant les élections, la représentation, les limites constitutionnelles et la participation des citoyens.",
        },
        {
          type: "paragraph",
          text: "Le gouvernement doit disposer d'une autorité suffisante pour défendre le bien commun, et rester tenu par la loi, par la subsidiarité, par les contrepoids institutionnels et par la dignité de la personne.",
        },
        { type: "paragraph", text: "La représentation doit s'élargir au-delà des appareils de partis professionnalisés." },
        {
          type: "paragraph",
          text: "À la représentation territoriale peut s'ajouter celle des familles, des communes, des professions, des salariés, de l'agriculture, des universités et des autres institutions durables de la société civile.",
        },
        {
          type: "paragraph",
          text: "La conduite politique doit être comprise comme une intendance, et non comme une mobilisation idéologique permanente.",
        },
        { type: "paragraph", text: "L'État est nécessaire." },
        { type: "statement", text: "L'État n'est pas Dieu." },
        {
          type: "paragraph",
          text: "Le désaccord politique est légitime et nécessaire. Un ordre politique sain n'exige pas que tous les partis pensent de même.",
        },
        { type: "paragraph", text: "La compétition politique ne doit pas pour autant devenir une fin en soi." },
        {
          type: "paragraph",
          text: "Lorsque les intérêts fondamentaux de la nation et de son peuple sont en jeu, les partis doivent être capables d'agir par-delà l'avantage partisan. La sécurité nationale, les infrastructures critiques, la stabilité démographique, la protection des familles, la continuité constitutionnelle et la prospérité durable du peuple ne doivent pas être réduites à une guerre électorale permanente.",
        },
        { type: "paragraph", text: "L'opposition est nécessaire ; l'opposition pour elle-même est corrosive." },
        {
          type: "paragraph",
          text: "La raison d'être d'un parti politique n'est pas seulement de battre les autres. Sa première obligation est de servir le peuple et la communauté politique auxquels il appartient.",
        },
        {
          type: "paragraph",
          text: "Nous voulons donc une culture politique où le désaccord sérieux demeure possible, et où la coopération par-delà les clivages partisans est attendue chaque fois que le bien commun durable de la nation l'exige.",
        },
        {
          type: "list",
          marker: "none",
          items: [
            "La nation doit passer avant le parti.",
            "Le bien commun doit passer avant la faction.",
            "Le peuple doit passer avant la classe politique.",
          ],
        },
      ] satisfies readonly ContentBlock[],
    },

    culture: {
      title: "La culture contre l'uniformisation",
      summary: "Les langues, les traditions et l'artisanat relèvent de la vie ordinaire, non de l'économie touristique.",
      body: [
        {
          type: "lead",
          text: "La culture de consommation mondiale rend de plus en plus interchangeables les villes, les modes de vie, les divertissements et les espaces commerciaux.",
        },
        { type: "statement", text: "Nous nous opposons à cette uniformisation." },
        {
          type: "paragraph",
          text: "Les langues, les parlers régionaux, les traditions populaires, les fêtes, la musique, la cuisine, l'artisanat et la mémoire historique ne doivent pas survivre à l'état de simples attractions touristiques.",
        },
        { type: "paragraph", text: "Ils doivent faire partie de la vie ordinaire." },
        {
          type: "paragraph",
          text: "La politique culturelle doit soutenir la création locale plutôt que d'importer ce qui dispose de la plus grande portée commerciale mondiale.",
        },
        {
          type: "paragraph",
          text: "La civilisation européenne doit rester disposée à apprendre des autres civilisations sans se dissoudre en elles.",
        },
        { type: "statement", text: "L'échange n'est pas l'effacement." },
      ] satisfies readonly ContentBlock[],
    },

    work: {
      title: "Travail",
      summary: "Le travail possède une dignité, mais le travail n'est pas la finalité de l'existence humaine.",
      body: [
        { type: "lead", text: "Le travail est davantage qu'une transaction où du temps s'échange contre un salaire." },
        { type: "statement", text: "Le travail possède une dignité, mais le travail n'est pas la finalité de l'existence humaine." },
        {
          type: "paragraph",
          text: "L'homme n'a pas été créé pour produire, consommer, accumuler et recommencer ce cycle jusqu'à la mort.",
        },
        {
          type: "paragraph",
          text: "Un système économique est fait pour fournir la base matérielle d'une vie humaine accomplie, non pour dévorer les vies qu'il avait pour tâche de soutenir.",
        },
        {
          type: "paragraph",
          text: "Une société est déréglée lorsque les gens ordinaires doivent céder la quasi-totalité de leurs heures de veille pour seulement se loger, se nourrir et se garantir contre les malheurs les plus simples ; lorsque les parents ne voient guère leurs enfants ; lorsque les communautés se vident parce que tout le monde est épuisé par le travail ; ou lorsque la productivité accrue enrichit les institutions sans que la liberté des hommes en soit augmentée d'autant.",
        },
        { type: "paragraph", text: "Le progrès économique doit donc se juger en partie à une question simple :" },
        { type: "statement", text: "Donne-t-il aux gens ordinaires une plus grande maîtrise de leur propre vie ?" },
        {
          type: "paragraph",
          text: "La productivité doit finir par donner plus de sécurité, plus de loisir, des familles plus solides et un plus grand affranchissement des peines inutiles.",
        },
        {
          type: "paragraph",
          text: "La vie économique n'a pas pour fin de maximiser le nombre d'heures que l'on peut tirer des hommes.",
        },
        {
          type: "paragraph",
          text: "L'homme a besoin de temps pour la famille, l'amitié, le culte, la contemplation, la nature, l'artisanat, l'étude, la communauté, la fête et le repos.",
        },
        { type: "paragraph", text: "Ce ne sont pas là des interruptions économiquement improductives de la vie." },
        { type: "paragraph", text: "Ce sont quelques-unes des raisons pour lesquelles la vie économique existe." },
        {
          type: "paragraph",
          text: "Nous refusons une civilisation où les hommes deviennent les serviteurs de systèmes créés à l'origine pour les servir.",
        },
        {
          type: "statement",
          text: "L'homme doit travailler pour vivre. Il ne doit jamais être réduit à vivre pour travailler.",
        },
        {
          type: "paragraph",
          text: "Par le travail, on prend part à la vie de la société, on acquiert une compétence, on produit des choses utiles et on fait vivre une famille.",
        },
        {
          type: "paragraph",
          text: "Une économie qui détruit des métiers qui ont du sens au seul motif que leur remplacement accroît un rendement chiffré doit donc considérer ce qui se perd autant que ce qui se gagne.",
        },
        {
          type: "paragraph",
          text: "L'artisanat, l'agriculture, l'ingénierie, les métiers du soin, l'enseignement et les métiers qualifiés méritent de retrouver leur rang dans la société.",
        },
        {
          type: "paragraph",
          text: "L'automatisation doit décharger les hommes des travaux véritablement avilissants partout où cela est possible, mais elle ne doit pas devenir un objectif que l'on cesse d'interroger, celui de retirer toute participation humaine à l'activité économiquement productive.",
        },
        { type: "statement", text: "La compétence humaine est en elle-même un bien social." },
      ] satisfies readonly ContentBlock[],
    },

    "foreign-policy": {
      title: "Politique étrangère",
      summary: "Indépendance stratégique, prudence, et forte présomption contre la guerre inutile.",
      body: [
        { type: "lead", text: "L'Europe doit rechercher l'indépendance, non l'ambition impériale." },
        {
          type: "paragraph",
          text: "Les nations européennes doivent être en mesure de se défendre, de tenir leurs frontières et de conserver leur indépendance stratégique en matière d'alimentation, d'énergie, d'infrastructures, de médecine et d'industries essentielles.",
        },
        {
          type: "paragraph",
          text: "Nous refusons de dépendre durablement de puissances lointaines pour les conditions élémentaires de la survie nationale.",
        },
        {
          type: "paragraph",
          text: "Nous refusons également les guerres idéologiques qui prétendent refaire des civilisations étrangères sur le patron de modèles politiques abstraits.",
        },
        { type: "paragraph", text: "Les civilisations n'ont pas la même histoire." },
        { type: "statement", text: "Des relations pacifiques n'exigent pas l'uniformité culturelle." },
        {
          type: "paragraph",
          text: "La politique étrangère doit être gouvernée par la prudence, par l'intérêt national légitime, par la défense des innocents partout où elle est réellement possible, et par une présomption forte contre toute guerre inutile.",
        },
      ] satisfies readonly ContentBlock[],
    },

    "what-we-reject": {
      title: "Ce que nous refusons",
      summary: "Dix refus, énoncés sans détour — ils portent sur des idées et des systèmes, jamais sur des peuples.",
      body: [
        {
          type: "list",
          marker: "rule",
          items: [
            "Nous refusons l'**individualisme libéral**, parce qu'une société est plus qu'un contrat entre individus autonomes.",
            "Nous refusons le **matérialisme**, parce que l'homme ne se réduit pas à l'appétit économique.",
            "Nous refusons le **communisme**, parce qu'abolir la propriété et soumettre la société à l'État centralisé détruit à la fois la liberté et les institutions sociales vivantes.",
            "Nous refusons l'**absolutisme du laissez-faire**, parce que les marchés doivent demeurer subordonnés au bien commun.",
            "Nous refusons la **technocratie**, parce que l'expertise et la capacité technique ne confèrent aucune autorité morale.",
            "Nous refusons le **consumérisme**, parce que l'acquisition ne saurait donner à une civilisation sa raison d'être.",
            "Nous refusons le **nihilisme historique**, parce qu'une civilisation incapable d'aimer quoi que ce soit de son héritage ne peut survivre.",
            "Nous refusons le **terrorisme politique**, parce que la destruction délibérée de vies innocentes ne peut fonder aucun ordre moral.",
            "Nous refusons le **totalitarisme**, parce que ni un parti, ni une entreprise, ni une idéologie, ni un État n'a le droit d'absorber la vie humaine tout entière.",
            "Et nous refusons **le culte du progrès pour le progrès**.",
          ],
        },
      ] satisfies readonly ContentBlock[],
    },

    "what-we-seek": {
      title: "Ce que nous voulons",
      summary: "Le programme positif : ce à quoi ressemblerait un ordre européen restauré.",
      body: [
        {
          type: "lead",
          text: "Nous voulons une Europe où la cloche de l'église, la table de famille, le marché du bourg, l'atelier, la ferme, la place du village, l'université, la forêt et la nation appartiennent de nouveau à un ordre social cohérent.",
        },
        {
          type: "list",
          marker: "rule",
          items: [
            "Nous voulons des nations assez sûres d'elles-mêmes pour se conserver sans avoir besoin de haïr les autres.",
            "Nous voulons des familles qui puissent élever des enfants sans y ruiner leur existence.",
            "Nous voulons une propriété largement répartie plutôt qu'une dépendance permanente.",
            "Nous voulons des marchés, sans culte du marché.",
            "Nous voulons l'autorité, sans le totalitarisme.",
            "Nous voulons la technique, sans la domination technique.",
            "Nous voulons l'intendance de la nature, sans mépris pour l'humanité.",
            "Nous voulons le christianisme, sans contraindre les consciences.",
            "Nous voulons le patriotisme.",
            "Nous voulons la continuité, sans la stagnation.",
            "Nous voulons le progrès là où il est véritablement humain, et la retenue là où le progrès n'est plus qu'un autre nom pour la dissolution.",
          ],
        },
      ] satisfies readonly ContentBlock[],
    },

    restoration: {
      title: "Restauration",
      summary: "On ne renverse pas le cours de l'histoire, mais on peut en changer la direction.",
      body: [
        { type: "lead", text: "Notre mouvement ne demande pas que l'Europe devienne un musée." },
        { type: "paragraph", text: "Nous ne demandons pas davantage que l'histoire soit renversée." },
        { type: "paragraph", text: "On ne renverse pas le cours de l'histoire." },
        { type: "statement", text: "Mais on peut en changer la direction." },
        {
          type: "list",
          marker: "none",
          items: [
            "Des institutions peuvent être rebâties.",
            "Des familles peuvent retrouver confiance.",
            "Des communautés peuvent reprendre du pouvoir.",
            "La propriété peut redevenir largement répartie.",
            "La technique peut redevenir une servante.",
            "Des paysages peuvent être restaurés.",
            "Des églises peuvent se remplir de nouveau.",
            "Des nations peuvent se rappeler ce qu'elles sont.",
            "L'Europe peut redevenir reconnaissable comme elle-même.",
          ],
        },
        { type: "paragraph", text: "Le choix qui s'offre à nous n'est donc pas simplement entre le passé et l'avenir." },
        { type: "paragraph", text: "Il est entre deux avenirs différents." },
        {
          type: "paragraph",
          text: "L'un est toujours plus centralisé, technique, sans racines, marchandisé et interchangeable : une civilisation où l'homme dispose d'un plus grand pouvoir sur le monde extérieur tout en exerçant de moins en moins de maîtrise sur les systèmes qui gouvernent sa propre vie.",
        },
        { type: "paragraph", text: "L'autre accepte des limites." },
        {
          type: "paragraph",
          text: "Il reconnaît que certaines choses doivent être reçues en héritage plutôt qu'inventées, protégées plutôt qu'optimisées, aimées plutôt que chiffrées.",
        },
        { type: "statement", text: "Nous choisissons le second." },
        {
          type: "list",
          marker: "rule",
          items: [
            "Nous choisissons la famille plutôt que l'atomisation.",
            "La communauté plutôt que l'isolement.",
            "La propriété plutôt que la dépendance.",
            "L'intendance plutôt que l'exploitation.",
            "La beauté plutôt que l'absence de lieu.",
            "La nation plutôt que le déracinement.",
            "La foi plutôt que le nihilisme.",
            "Le jugement humain plutôt que l'inéluctabilité technologique.",
            "La civilisation plutôt que la dissolution.",
            "Et restaurer plutôt que renoncer.",
          ],
        },
        { type: "paragraph", text: "L'Europe doit reprendre conscience de ce qu'elle est." },
        { type: "paragraph", text: "Non parce que les autres civilisations seraient sans valeur." },
        {
          type: "paragraph",
          text: "Mais parce qu'aucune civilisation ne survit après avoir décidé que sa propre continuation n'était moralement pas nécessaire.",
        },
        { type: "paragraph", text: "Notre héritage, il ne nous appartenait pas de le créer." },
        { type: "paragraph", text: "Il ne nous appartient pas de nous en défaire." },
        { type: "statement", text: "Il nous appartient de le recevoir, de le renouveler et de le transmettre." },
      ] satisfies readonly ContentBlock[],
    },
  },
};
