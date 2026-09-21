import type { ContentBlock } from "@/lib/content-types";
import type { ManifestoText } from "./index";

export const manifestoText: ManifestoText = {
  meta: {
    title: "Manifiesto del restauracionismo integral europeo",
    subtitle: "Por una civilización cristiana, europea y a escala humana",
    status: "Documento fundacional · Texto en revisión antes de su aprobación formal",
  },
  sections: {
    preamble: {
      title: "Preámbulo",
      summary: "Europa es una civilización, y una herencia que se transmitió en lugar de inventarse.",
      body: [
        { type: "lead", text: "Europa es más que un continente, más que un mercado y más que un espacio administrativo." },
        {
          type: "paragraph",
          text: "Es una civilización: el fruto del cristianismo y de la herencia clásica, de pueblos históricos diferenciados, de lenguas y naciones, de generaciones de familias, de paisajes cultivados, de ciudades y pueblos, de iglesias y monasterios, de arte, filosofía, derecho, artesanía, sacrificio y memoria.",
        },
        {
          type: "paragraph",
          text: "Esta herencia no la crearon individuos abstractos desligados de la historia: se entregó de una generación a la siguiente.",
        },
        {
          type: "paragraph",
          text: "Burke dio a esa idea su formulación clásica en 1790, frente a una revolución que se proponía empezar de nuevo a partir de la sola razón. La sociedad, escribió, es una asociación —y, como los fines de esa asociación no pueden alcanzarse en el transcurso de una sola vida, es una asociación «no solo entre los que viven, sino entre los que viven, los que han muerto y los que han de nacer». Cuanto sigue en estas páginas podrá discutirse; esa frase es la premisa que sostiene todo lo demás.",
        },
        { type: "paragraph", text: "Y, sin embargo, la Europa moderna mira cada vez con más recelo la herencia misma." },
        {
          type: "paragraph",
          text: "El orden dominante ha puesto la autonomía individual por encima de la obligación, el consumo por encima de la continuidad, el crecimiento económico por encima de la comunidad, la capacidad técnica por encima del juicio humano y la uniformidad administrativa por encima del carácter propio de los pueblos y de los lugares. Y ha ido debilitando las instituciones que antes se interponían entre el individuo aislado y el poder centralizado: la familia, la parroquia, el gremio, el municipio, la región y la nación.",
        },
        { type: "paragraph", text: "Rechazamos el supuesto de que ese proceso constituya un progreso inevitable." },
        {
          type: "paragraph",
          text: "Rechazamos también la idea de que restaurar consista en recrear mecánicamente un siglo determinado. El pasado contuvo injusticia, pobreza, violencia y error. La restauración no es una recreación histórica.",
        },
        {
          type: "paragraph",
          text: "Consiste en recuperar los principios que la sociedad moderna ha desechado y aplicarlos con inteligencia a las condiciones del presente.",
        },
        {
          type: "paragraph",
          text: "Nuestro propósito no es, por tanto, la revolución por sí misma, ni tampoco la conservación del orden existente.",
        },
        { type: "statement", text: "Nuestro propósito es la restauración." },
      ] satisfies readonly ContentBlock[],
    },

    "moral-order": {
      title: "El orden moral",
      summary: "Una comunidad política no puede permanecer indefinidamente neutral ante el bien que existe para proteger.",
      body: [
        {
          type: "lead",
          text: "Rechazamos la tesis liberal de que la comunidad política pueda permanecer indefinidamente neutral acerca del bien.",
        },
        {
          type: "paragraph",
          text: "Toda civilización encarna juicios sobre qué merece protección, qué conviene fomentar, en qué consiste la justicia y qué clase de ser humano espera formar.",
        },
        {
          type: "paragraph",
          text: "Afirmamos que la verdad moral no nace de la preferencia del individuo, ni del mandato del Estado, ni de la demanda del mercado, ni de lo técnicamente posible.",
        },
        { type: "statement", text: "El ser humano posee dignidad porque es una persona creada por Dios." },
        {
          type: "paragraph",
          text: "La autoridad política no está, por tanto, para fabricar una humanidad nueva ni para limitarse a administrar apetitos en pugna. Su finalidad propia es el bien común: las condiciones sociales en las que las personas, las familias y las comunidades pueden vivir con virtud y prosperar.",
        },
        {
          type: "paragraph",
          text: "La civilización europea no puede entenderse al margen del cristianismo. Afirmamos, por tanto, la herencia cristiana de Europa —y de manera particular la católica— como elemento fundacional de su civilización.",
        },
        {
          type: "paragraph",
          text: "Lo que rechazamos no es la existencia del desacuerdo, sino la doctrina de que la vida pública europea deba comportarse como si su propia herencia religiosa nunca hubiera existido.",
        },
      ] satisfies readonly ContentBlock[],
    },

    "person-not-atom": {
      title: "La persona no es un átomo",
      summary: "No partimos del individuo autónomo, sino de la persona en relación.",
      body: [
        { type: "lead", text: "El individualismo liberal parte del individuo autónomo." },
        { type: "statement", text: "Nosotros partimos de la persona en relación." },
        {
          type: "paragraph",
          text: "Todo ser humano entra en un mundo que ya contiene unos padres, una familia, una lengua, una cultura, una tierra natal, unos deberes, una historia y unas obligaciones morales. No son ataduras sin sentido de las que haya que irse liberando sin término: son, de entrada, algunas de las condiciones que hacen posible una vida humana plena.",
        },
        { type: "paragraph", text: "Los derechos son reales, pero no sobreviven sin los deberes que les corresponden." },
        {
          type: "paragraph",
          text: "La libertad es real, pero no es simplemente la ausencia de coacción: la libertad verdadera incluye la capacidad de buscar lo que es bueno.",
        },
        { type: "paragraph", text: "Un orden político sano mantiene, por tanto, en equilibrio:" },
        {
          type: "list",
          marker: "rule",
          items: [
            "la libertad con la responsabilidad,",
            "los derechos con los deberes,",
            "la dignidad individual con la obligación social,",
            "la autoridad con la subsidiariedad.",
          ],
        },
      ] satisfies readonly ContentBlock[],
    },

    family: {
      title: "La familia",
      summary: "La primera institución de la civilización: precede al Estado y debe hacerse materialmente posible.",
      body: [
        { type: "lead", text: "La familia es la primera institución de la civilización y precede al Estado." },
        {
          type: "paragraph",
          text: "Afirmamos que la familia formada en torno al matrimonio entre hombre y mujer, la crianza de los hijos, la obligación entre generaciones y el cuidado de los pequeños y de los mayores es la institución social fundamental de la que depende la comunidad política.",
        },
        {
          type: "list",
          marker: "rule",
          items: [
            "Una economía que vuelve económicamente imposible formar una familia está desordenada.",
            "Un régimen laboral que trata la maternidad y la paternidad como un estorbo está desordenado.",
            "Un mercado inmobiliario que convierte la propiedad permanente de una vivienda en un privilegio inalcanzable está desordenado.",
          ],
        },
        {
          type: "paragraph",
          text: "Una cultura que enseña la adolescencia permanente, el consumismo y el aislamiento no puede sostener una civilización.",
        },
        {
          type: "paragraph",
          text: "La política pública debe, por tanto, hacer materialmente posible la formación de una familia: vivienda asequible, una fiscalidad favorable a la familia, apoyo a los padres, empleo estable y disponibilidad de tiempo al margen de la producción económica.",
        },
        {
          type: "paragraph",
          text: "La renovación demográfica de Europa debe venir, ante todo, de hacer posible la vida familiar a los propios europeos, y no de tratar una inmigración masiva y permanente como sustituto del nacimiento y de la continuidad de las generaciones futuras.",
        },
      ] satisfies readonly ContentBlock[],
    },

    nation: {
      title: "Nación, pueblo y tierra natal",
      summary: "La humanidad es universal; la civilización es particular. Los pueblos de Europa pueden conservar su continuidad.",
      body: [
        { type: "lead", text: "La humanidad es universal. La civilización es particular." },
        {
          type: "paragraph",
          text: "Las personas no pertenecen solo a la humanidad en abstracto, sino a comunidades concretas moldeadas por la historia.",
        },
        {
          type: "paragraph",
          text: "La nación no es, por tanto, una simple circunscripción administrativa: es una comunidad entre generaciones unida por la memoria histórica, la lengua, la costumbre, las instituciones, el territorio y la conciencia de un destino común.",
        },
        { type: "paragraph", text: "Los pueblos de Europa tienen un interés legítimo en mantener su continuidad histórica." },
        {
          type: "paragraph",
          text: "La igualdad en la dignidad humana no implica que todos los países deban volverse culturalmente intercambiables entre sí.",
        },
        {
          type: "list",
          marker: "none",
          items: [
            "Una ciudad polaca debe seguir siendo reconociblemente polaca.",
            "Una ciudad italiana debe seguir siendo reconociblemente italiana.",
            "Un pueblo francés debe seguir siendo reconociblemente francés.",
          ],
        },
        {
          type: "paragraph",
          text: "Preservar las culturas y los pueblos históricos de Europa no es en sí más hostil que preservar las culturas y las identidades históricas de otras civilizaciones.",
        },
        { type: "statement", text: "Defendemos, por tanto, la continuidad." },
      ] satisfies readonly ContentBlock[],
    },

    immigration: {
      title: "Inmigración e integración",
      summary: "Una admisión en niveles compatibles con una integración real; la ciudadanía como pertenencia, no como residencia.",
      body: [
        { type: "lead", text: "La política migratoria debe servir al bien común a largo plazo de la nación de acogida." },
        {
          type: "paragraph",
          text: "Ninguna sociedad tiene una capacidad ilimitada de transformación demográfica sin consecuencias para la confianza social, la vivienda, la continuidad cultural, las infraestructuras y la cohesión política.",
        },
        {
          type: "paragraph",
          text: "La inmigración debe mantenerse, por tanto, en niveles compatibles con una integración real, con la estabilidad social y con la continuidad demográfica y cultural de la sociedad de acogida.",
        },
        { type: "paragraph", text: "La ciudadanía debe significar pertenencia y no simple residencia." },
        {
          type: "paragraph",
          text: "La naturalización debe exigir un conocimiento real de la lengua, la historia y las instituciones del país, respeto al orden constitucional y un vínculo verdadero con él.",
        },
        {
          type: "statement",
          text: "Quienes adquieren la ciudadanía conforme a la ley son ciudadanos, y como ciudadanos deben ser tratados.",
        },
        {
          type: "paragraph",
          text: "Las obligaciones humanitarias no pueden interpretarse como si exigieran que las sociedades europeas renuncien al control de su propio futuro demográfico.",
        },
        { type: "paragraph", text: "Las fronteras son instituciones legítimas." },
        {
          type: "paragraph",
          text: "La hospitalidad sin orden acaba destruyendo las condiciones que hacen posible la hospitalidad misma.",
        },
      ] satisfies readonly ContentBlock[],
    },

    europe: {
      title: "Europa como civilización de naciones",
      summary: "La cooperación entre naciones soberanas, regida en todo por la subsidiariedad.",
      body: [
        { type: "lead", text: "La unidad europea no debe exigir la destrucción de las naciones europeas." },
        {
          type: "paragraph",
          text: "Rechazamos por igual el aislamiento nacional absoluto y la conversión de Europa en un Estado administrativo centralizado y posnacional.",
        },
        {
          type: "paragraph",
          text: "Europa debe ser, en cambio, una comunidad de civilización formada por naciones soberanas que cooperan allí donde la cooperación sirve de verdad a sus intereses comunes.",
        },
        { type: "paragraph", text: "El principio que debe regir la organización política europea es la subsidiariedad:" },
        {
          type: "statement",
          text: "Nada debería decidirse en un nivel superior cuando puede decidirse con competencia en uno inferior.",
        },
        {
          type: "list",
          marker: "rule",
          items: [
            "El municipio no debe ceder innecesariamente ante la región.",
            "La región no debe ceder innecesariamente ante la nación.",
            "La nación no debe ceder innecesariamente ante las instituciones continentales.",
          ],
        },
        {
          type: "paragraph",
          text: "Europa debe cooperar en la defensa, las fronteras, las infraestructuras estratégicas, la ciencia, la protección del medio ambiente y la preservación de su civilización, sin dejar de conservar las identidades históricas y la autonomía política de sus naciones.",
        },
        { type: "paragraph", text: "No aspiramos a una Europa uniforme." },
        { type: "statement", text: "Aspiramos a una Europa cuya diversidad siga siendo inconfundiblemente europea." },
      ] satisfies readonly ContentBlock[],
    },

    "economic-order": {
      title: "El orden económico",
      summary: "Ni capitalismo sin límites ni socialismo centralizado: muchos propietarios antes que unos pocos.",
      body: [
        { type: "lead", text: "Rechazamos por igual el capitalismo sin límites y el socialismo centralizado." },
        { type: "statement", text: "La economía existe para el hombre. El hombre no existe para la economía." },
        {
          type: "paragraph",
          text: "Esta posición es más antigua que nosotros. León XIII le dio forma en Rerum Novarum, en 1891, al defender frente al socialismo el derecho a poseer bienes productivos y condenar a la vez las condiciones que había creado el capitalismo industrial —es decir, al negarse a aceptar que las dos respuestas disponibles fueran las únicas posibles. Hilaire Belloc llevó el argumento más lejos en El Estado servil, en 1912, al predecir que una sociedad con la propiedad concentrada no se volvería socialista, sino que se asentaría en otra cosa: seguridad para quienes no poseen nada, comprada al precio de una falta permanente de libertad. Creemos que interpretó correctamente el rumbo que llevábamos.",
        },
        { type: "paragraph", text: "La gran empresa es un instrumento jurídico y económico, no una institución soberana." },
        {
          type: "paragraph",
          text: "Las empresas cumplen una función indispensable cuando producen bienes útiles, generan medios de vida, desarrollan conocimiento y sirven a las comunidades en las que operan.",
        },
        { type: "paragraph", text: "Pero el poder empresarial debe permanecer subordinado al bien común." },
        {
          type: "paragraph",
          text: "Ninguna empresa debería tener la capacidad práctica de dominar las instituciones políticas, de arruinar comunidades viables, de manipular a los ciudadanos hasta dejarlos en una dependencia permanente, de monopolizar mercados esenciales ni de reorganizar la sociedad únicamente según las exigencias del beneficio y de la eficiencia.",
        },
        {
          type: "list",
          marker: "none",
          items: ["El beneficio es legítimo.", "La empresa es legítima.", "El éxito económico es legítimo."],
        },
        { type: "paragraph", text: "Pero ninguna de estas cosas es la finalidad más alta de una sociedad." },
        { type: "paragraph", text: "La relación correcta debe quedar clara:" },
        {
          type: "statement",
          text: "La economía existe para la persona, la familia y la comunidad; la persona, la familia y la comunidad no existen para la economía.",
        },
        { type: "paragraph", text: "Cuando las empresas contribuyen al florecimiento humano, merecen prosperar." },
        {
          type: "paragraph",
          text: "Cuando el poder económico concentrado amenaza la competencia verdadera, la vida familiar, la independencia política, la dignidad humana o la supervivencia de las comunidades locales, la sociedad tiene la autoridad legítima para contenerlo.",
        },
        {
          type: "paragraph",
          text: "No buscamos ni la abolición de la empresa privada ni la propiedad estatal de la vida económica.",
        },
        {
          type: "paragraph",
          text: "Buscamos una economía en la que la empresa siga siendo servidora de la civilización en lugar de convertirse en su dueña.",
        },
        {
          type: "paragraph",
          text: "La propiedad privada es una fuente importante de independencia y de responsabilidad. La respuesta a una propiedad privada excesivamente concentrada no es, por tanto, abolir la propiedad, sino repartirla más.",
        },
        {
          type: "paragraph",
          text: "Nuestro ideal económico es distributista en cuanto a la propiedad y corporativista en cuanto a la organización.",
        },
        { type: "paragraph", text: "Buscamos una sociedad caracterizada por:" },
        {
          type: "list",
          marker: "rule",
          items: [
            "una vivienda en propiedad ampliamente repartida;",
            "empresas familiares;",
            "artesanos y oficios independientes;",
            "pequeñas y medianas empresas;",
            "cooperativas y propiedad de los trabajadores;",
            "agricultura familiar;",
            "banca local y regional;",
            "el aprendizaje de oficio y la formación profesional;",
            "asociaciones profesionales fuertes;",
            "límites a la concentración monopolística.",
          ],
        },
        {
          type: "paragraph",
          text: "Una civilización en la que millones de personas no poseen nada mientras un número reducido de empresas, entidades financieras u organismos estatales lo poseen casi todo no puede llamarse con seriedad una sociedad de propietarios.",
        },
        { type: "statement", text: "El objetivo debe ser, por tanto, muchos propietarios antes que unos pocos." },
      ] satisfies readonly ContentBlock[],
    },

    corporatism: {
      title: "Corporativismo, gremios y bien común",
      summary: "Cuerpos profesionales con presencia real en la vida económica —e independientes del Estado.",
      body: [
        {
          type: "lead",
          text: "El conflicto entre el trabajo y el capital no debe tomarse por el principio permanente que organiza la vida económica.",
        },
        {
          type: "paragraph",
          text: "Trabajadores, empresarios, artesanos, agricultores y profesiones participan en un mismo organismo económico.",
        },
        {
          type: "paragraph",
          text: "Las versiones modernas de los gremios, los colegios profesionales y las corporaciones de oficio deben, por tanto, participar en el gobierno de la economía.",
        },
        {
          type: "paragraph",
          text: "A estas instituciones corresponde fijar las normas profesionales, la formación de aprendices, las condiciones de trabajo, los mecanismos de mediación y la representación sectorial, conservando una independencia suficiente frente a la administración estatal centralizada.",
        },
        {
          type: "paragraph",
          text: "La representación política misma puede incluir, además de la representación territorial, una representación ordenada de los principales cuerpos sociales y profesionales de la sociedad.",
        },
        { type: "paragraph", text: "Este corporativismo debe permanecer subordinado a la subsidiariedad." },
        {
          type: "paragraph",
          text: "Rechazamos un sistema en el que las organizaciones profesionales se conviertan en meros instrumentos de un Estado omnipotente.",
        },
        { type: "statement", text: "Ni la empresa ni el Estado deben absorber la sociedad civil." },
      ] satisfies readonly ContentBlock[],
    },

    finance: {
      title: "Contra la dominación financiera",
      summary: "Las finanzas son necesarias; la dominación financiera no lo es. El suelo y la vivienda están para habitarse.",
      body: [
        { type: "lead", text: "Las finanzas son necesarias." },
        { type: "statement", text: "La dominación financiera no lo es." },
        {
          type: "paragraph",
          text: "La función propia de las finanzas es dirigir el ahorro hacia la actividad productiva, la vivienda, la empresa y la inversión a largo plazo.",
        },
        {
          type: "paragraph",
          text: "Una economía dominada por la especulación, la inflación de los activos, el endeudamiento abusivo y la extracción financiera va separando poco a poco la riqueza de la contribución productiva.",
        },
        {
          type: "paragraph",
          text: "La política pública debe, por tanto, favorecer la inversión productiva frente a la especulación y la propiedad familiar frente al endeudamiento permanente.",
        },
        {
          type: "paragraph",
          text: "El suelo y la vivienda deben servir ante todo para habitar y para formar comunidad, y no convertirse en instrumentos financieros de revalorización indefinida, desligados de los salarios.",
        },
        { type: "paragraph", text: "Los mercados son mecanismos útiles." },
        { type: "statement", text: "No son autoridades morales." },
        {
          type: "paragraph",
          text: "Allí donde el mercado socava los fundamentos de los que depende la sociedad, la comunidad política tiene derecho a regularlo.",
        },
      ] satisfies readonly ContentBlock[],
    },

    technology: {
      title: "La tecnología debe servir al hombre",
      summary: "Contra la inevitabilidad tecnológica. La máquina debe adaptarse al hombre.",
      body: [
        { type: "lead", text: "El desarrollo tecnológico no es sinónimo de progreso humano." },
        {
          type: "paragraph",
          text: "Una sociedad puede volverse técnicamente más avanzada y, al mismo tiempo, socialmente más débil, psicológicamente menos sana, políticamente más centralizada y más destructiva con su entorno natural.",
        },
        {
          type: "paragraph",
          text: "Rechazamos, por tanto, la inevitabilidad tecnológica: la suposición de que todo lo que puede inventarse debe adoptarse y de que todo lo que aumenta la eficiencia ha de contar como progreso.",
        },
        { type: "paragraph", text: "El sistema técnico tiende por sí mismo a expandirse." },
        {
          type: "paragraph",
          text: "Una tecnología introducida como opcional puede volverse económicamente necesaria; lo que se vuelve necesario remodela las instituciones; y las instituciones reorganizan después la sociedad en torno a las exigencias de esa tecnología.",
        },
        { type: "paragraph", text: "Al final de esa secuencia, son las personas las que se adaptan a la máquina." },
        {
          type: "paragraph",
          text: "Ivan Illich describió esta secuencia en La convivencialidad, en 1973, al sostener que toda herramienta cruza un segundo umbral más allá del cual deja de servir al fin para el que fue adoptada y empieza a imponer fines propios —sus ejemplos eran la medicina, la escuela y el automóvil, y a ninguno de los tres, pensaba, nadie había elegido someterse. E. F. Schumacher publicó Lo pequeño es hermoso ese mismo año, preguntándose qué aspecto tendría una economía que tomara la escala de la vida humana como límite y no como estorbo. Ninguno de los dos era un reaccionario, y ninguno de los dos es para nosotros una lectura cómoda.",
        },
        { type: "paragraph", text: "Nuestro principio es el inverso:" },
        { type: "statement", text: "La máquina debe adaptarse al hombre." },
        {
          type: "paragraph",
          text: "Cada tecnología debe juzgarse por si refuerza o debilita la autonomía humana, la vida familiar, la comunidad, el trabajo con sentido, la privacidad, la descentralización política y el medio natural.",
        },
        {
          type: "paragraph",
          text: "Distinguimos, por tanto, entre la tecnología que sirve a necesidades humanas reales y aquella cuyo efecto principal es la dependencia, la vigilancia, la distracción o la atomización social.",
        },
        {
          type: "paragraph",
          text: "La medicina, el saneamiento, el conocimiento científico y la ingeniería verdaderamente beneficiosa no son enemigos nuestros.",
        },
        { type: "paragraph", text: "Tampoco hay que conservar toda práctica tradicional por el solo hecho de ser tradicional." },
        { type: "paragraph", text: "Nuestra doctrina no es un romanticismo primitivista." },
        { type: "statement", text: "Es la subordinación de la tecnología." },
      ] satisfies readonly ContentBlock[],
    },

    "human-scale-life": {
      title: "El derecho a una vida a escala humana",
      summary: "Participar en la vida corriente de la sociedad no debe exigir una dependencia tecnológica total.",
      body: [
        {
          type: "lead",
          text: "El ciudadano moderno necesita cada vez más sistemas tecnológicos para participar, simplemente, en la vida corriente de la sociedad.",
        },
        { type: "paragraph", text: "Esa dependencia no debe ser ilimitada." },
        { type: "paragraph", text: "Los ciudadanos deben conservar un acceso real a:" },
        {
          type: "list",
          marker: "rule",
          items: [
            "el dinero físico;",
            "servicios públicos con atención presencial;",
            "una identificación no digital allí donde sea viable;",
            "libros y materiales educativos en papel;",
            "productos reparables;",
            "el comercio de proximidad;",
            "espacios privados libres de vigilancia permanente;",
            "decisiones tomadas por seres humanos allí donde las consecuencias jurídicas o morales son graves.",
          ],
        },
        {
          type: "paragraph",
          text: "Los niños, en particular, deben quedar protegidos frente a industrias cuyo modelo de negocio depende de maximizar la dependencia psicológica y la captura de la atención.",
        },
        {
          type: "paragraph",
          text: "La inteligencia artificial y la automatización no deben evaluarse solo por la productividad, sino por sus efectos sobre la competencia humana, el empleo, la autonomía y el poder de las instituciones.",
        },
        {
          type: "statement",
          text: "Que algo pueda hacerse no obliga a hacerlo.",
        },
      ] satisfies readonly ContentBlock[],
    },

    stewardship: {
      title: "La custodia del mundo natural",
      summary: "La naturaleza no es una mercancía sin límite ni una divinidad —es una herencia recibida en custodia.",
      body: [
        { type: "lead", text: "El mundo natural no es una mercancía sin límite ni una divinidad a la que rendir culto." },
        { type: "statement", text: "Es una herencia confiada a la humanidad." },
        {
          type: "paragraph",
          text: "Burke expresó esa idea con más exactitud de la que nosotros alcanzamos. En 1790 describió a los vivos de cada momento como «poseedores temporales y arrendatarios vitalicios» de la comunidad política, que no deben tenerse por dueños enteros de ella. Hablaba de constituciones y no de bosques, pero la estructura de la obligación es idéntica, y es la razón por la que esta sección figura en un documento político.",
        },
        {
          type: "paragraph",
          text: "Los bosques, los ríos, las tierras de cultivo, las montañas, las costas y la biodiversidad deben protegerse no solo porque tienen valor económico, sino porque la civilización humana misma depende de una relación estable con el mundo natural.",
        },
        { type: "paragraph", text: "Rechazamos un ecologismo que ve en la humanidad un parásito por naturaleza." },
        {
          type: "paragraph",
          text: "Rechazamos con igual firmeza una ideología económica en la que cualquier destrucción resulta justificable con tal de aumentar la producción a corto plazo.",
        },
        { type: "paragraph", text: "La política ambiental debe favorecer:" },
        {
          type: "list",
          items: [
            "la agricultura de proximidad,",
            "los suelos sanos,",
            "el agua limpia,",
            "los productos duraderos,",
            "la reparación antes que lo desechable,",
            "las cadenas de suministro regionales,",
            "la silvicultura responsable,",
            "la restauración de los ecosistemas dañados,",
            "y unas formas de asentamiento que conserven a la vez la comunidad humana y el paisaje natural.",
          ],
        },
        {
          type: "paragraph",
          text: "El campo no debe convertirse ni en una zona de extracción industrial ni en un museo del que se ha expulsado la vida humana corriente.",
        },
        { type: "statement", text: "El hombre pertenece a la naturaleza, pero como su custodio." },
      ] satisfies readonly ContentBlock[],
    },

    architecture: {
      title: "Ciudad, pueblo y arquitectura",
      summary: "La civilización se expresa físicamente. Una sociedad segura de sí misma puede volver a construir con belleza.",
      body: [
        { type: "lead", text: "La civilización se expresa físicamente." },
        {
          type: "paragraph",
          text: "La arquitectura moldea la idea que la gente tiene de la belleza, de la pertenencia y de la continuidad.",
        },
        {
          type: "paragraph",
          text: "El argumento contra el urbanismo de mediados del siglo XX no lo formularon primero los conservadores. Lo formuló Jane Jacobs en Muerte y vida de las grandes ciudades, en 1961, sosteniendo que los planificadores estaban destruyendo esa vida de calle densa, mezclada y sin brillo que era justamente lo que hacía seguros y habitables los barrios. Christopher Alexander y sus colaboradores intentaron exponer en Un lenguaje de patrones, en 1977, en qué consistiría la alternativa en la práctica, hasta la anchura de una puerta. Preferimos tomar prestado de quienes hicieron ese trabajo antes que declarar una preferencia por la belleza y dejarlo ahí.",
        },
        {
          type: "paragraph",
          text: "Las ciudades y los pueblos de Europa deben dejar, por tanto, de tomar la fealdad y la falta de carácter propio por señales de progreso.",
        },
        {
          type: "paragraph",
          text: "La edificación pública debe respetar la escala humana, los materiales del lugar, la tradición regional y el carácter ya existente de los núcleos históricos.",
        },
        {
          type: "paragraph",
          text: "Los edificios históricos, las iglesias, los conjuntos urbanos y los monumentos deben conservarse siempre que sea razonablemente posible.",
        },
        {
          type: "paragraph",
          text: "La nueva construcción debe dar lugares que se puedan habitar durante generaciones, y no entornos desechables concebidos sobre todo en torno a los flujos de tráfico, las carteras de inversión y los ciclos cortos del negocio de la obra.",
        },
        { type: "statement", text: "Una civilización segura de sí misma debería ser capaz de volver a construir con belleza." },
      ] satisfies readonly ContentBlock[],
    },

    education: {
      title: "Educación",
      summary: "Transmitir la herencia antes de pretender transformarla; los padres siguen siendo los primeros educadores.",
      body: [
        { type: "lead", text: "La educación debe transmitir la civilización antes de pretender transformarla." },
        {
          type: "paragraph",
          text: "Toda generación tiene la obligación de dar a conocer a la siguiente la herencia que ella misma ha recibido.",
        },
        { type: "paragraph", text: "La educación debe incluir, por tanto, el estudio serio de:" },
        {
          type: "list",
          items: [
            "el cristianismo,",
            "la historia europea y nacional,",
            "la civilización clásica,",
            "la filosofía,",
            "la literatura,",
            "la ciencia,",
            "las matemáticas,",
            "la música,",
            "el arte,",
            "los oficios,",
            "y la responsabilidad cívica.",
          ],
        },
        {
          type: "paragraph",
          text: "La comprensión de la historia no debe degenerar en enseñar a los jóvenes europeos que su civilización apenas es algo más que una culpa acumulada.",
        },
        {
          type: "statement",
          text: "Un pueblo incapaz de respetar a sus antepasados acabará por desentenderse de sus descendientes.",
        },
        {
          type: "paragraph",
          text: "Los padres siguen siendo los primeros educadores de sus hijos, y la autoridad educativa debe respetar, por tanto, esa responsabilidad y el pluralismo de instituciones.",
        },
      ] satisfies readonly ContentBlock[],
    },

    subsidiarity: {
      title: "Autoridad y subsidiariedad",
      summary: "La autoridad es necesaria, pero debe repartirse y ejercerse en el nivel competente más bajo.",
      body: [
        { type: "lead", text: "Rechazamos por igual el individualismo anárquico y el poder estatal total." },
        { type: "paragraph", text: "La autoridad es necesaria porque toda comunidad política necesita orden." },
        { type: "paragraph", text: "Pero la autoridad debe estar repartida." },
        {
          type: "paragraph",
          text: "El principio tiene un nombre y una procedencia. Pío XI lo formuló en Quadragesimo Anno, en 1931: es una injusticia, y una perturbación del recto orden, encomendar a una sociedad mayor y más elevada lo que las comunidades menores e inferiores pueden hacer por sí mismas. Lo planteó como una cuestión de justicia y no de buena administración, lo que supone una exigencia considerablemente más fuerte y mucho más difícil de satisfacer.",
        },
        {
          type: "paragraph",
          text: "La concentración del poder social, económico, tecnológico y de gobierno en un número reducido de instituciones hace imposible la libertad verdadera.",
        },
        { type: "statement", text: "El poder político debe ejercerse, por tanto, en el nivel competente más bajo." },
        {
          type: "list",
          marker: "rule",
          items: [
            "Las familias deben gobernar los asuntos familiares.",
            "Los municipios deben gobernar los asuntos locales.",
            "Las regiones deben conservar una autonomía real.",
            "Las naciones deben gobernar los asuntos nacionales.",
          ],
        },
        {
          type: "paragraph",
          text: "Las autoridades superiores deben intervenir sobre todo cuando las instituciones inferiores no pueden desempeñar adecuadamente una función necesaria.",
        },
        { type: "paragraph", text: "Esto no es una comodidad administrativa." },
        { type: "statement", text: "Es un principio de libertad política." },
        {
          type: "paragraph",
          text: "Conviene ser franco sobre el punto en que esto deja el argumento. Los tratados europeos ya profesan la subsidiariedad: el artículo 5 del Tratado de la Unión Europea obliga a la Unión a actuar solo cuando los objetivos de la acción pretendida no puedan alcanzarse de manera suficiente por los Estados miembros. Nuestra discrepancia no es, por tanto, con el principio —que nuestros adversarios también dicen sostener—, sino con quién está facultado para juzgar si se ha respetado, y con lo que se sigue cuando la respuesta es que no.",
        },
      ] satisfies readonly ContentBlock[],
    },

    democracy: {
      title: "Democracia, representación y Estado",
      summary: "Gobierno constitucional, representación ampliada y cooperación allí donde el bien común la exige.",
      body: [
        { type: "lead", text: "El liberalismo y la democracia no son conceptos idénticos." },
        {
          type: "paragraph",
          text: "Una sociedad puede rechazar el liberalismo filosófico y conservar al mismo tiempo las elecciones, la representación, los límites constitucionales y la participación pública.",
        },
        {
          type: "paragraph",
          text: "El gobierno debe tener autoridad suficiente para defender el bien común y permanecer, al mismo tiempo, limitado por la ley, por la subsidiariedad, por los contrapesos institucionales y por la dignidad de la persona.",
        },
        { type: "paragraph", text: "La representación debe ampliarse más allá de las maquinarias profesionales de los partidos." },
        {
          type: "paragraph",
          text: "La representación territorial puede complementarse con la de las familias, los municipios, las profesiones, los trabajadores, la agricultura, las universidades y otras instituciones duraderas de la sociedad civil.",
        },
        {
          type: "paragraph",
          text: "El ejercicio del poder político debe entenderse como una custodia y no como una movilización ideológica permanente.",
        },
        { type: "paragraph", text: "El Estado es necesario." },
        { type: "statement", text: "El Estado no es Dios." },
        {
          type: "paragraph",
          text: "El desacuerdo político es legítimo y necesario: un orden político sano no exige que todos los partidos piensen igual.",
        },
        { type: "paragraph", text: "Pero la competencia política no debe convertirse en un fin en sí misma." },
        {
          type: "paragraph",
          text: "Cuando están en juego los intereses fundamentales de la nación y de su pueblo, los partidos deben ser capaces de actuar por encima de su propio provecho. La seguridad nacional, las infraestructuras críticas, la estabilidad demográfica, la protección de las familias, la continuidad constitucional y la prosperidad a largo plazo del pueblo no deberían reducirse a una guerra electoral permanente.",
        },
        { type: "paragraph", text: "La oposición es necesaria; la oposición por la oposición es destructiva." },
        {
          type: "paragraph",
          text: "La finalidad de los partidos políticos no es simplemente derrotarse unos a otros: su primera obligación es servir al pueblo y a la comunidad política a la que pertenecen.",
        },
        {
          type: "paragraph",
          text: "Buscamos, por tanto, una cultura política en la que el desacuerdo serio siga siendo posible y en la que se espere la cooperación por encima de las líneas de partido siempre que lo exija el bien común duradero de la nación.",
        },
        {
          type: "list",
          marker: "none",
          items: [
            "La nación debe estar por encima del partido.",
            "El bien común debe estar por encima de la facción.",
            "El pueblo debe estar por encima de la clase política.",
          ],
        },
      ] satisfies readonly ContentBlock[],
    },

    culture: {
      title: "La cultura frente a la homogeneización",
      summary: "Las lenguas, las tradiciones y los oficios pertenecen a la vida corriente, no a la economía turística.",
      body: [
        {
          type: "lead",
          text: "La cultura global de consumo vuelve cada vez más intercambiables las ciudades, las formas de vida, el entretenimiento y los entornos comerciales.",
        },
        { type: "statement", text: "Nos oponemos a esa homogeneización." },
        {
          type: "paragraph",
          text: "Las lenguas, los dialectos regionales, las tradiciones populares, las fiestas, la música, la cocina, los oficios y la memoria histórica no deben sobrevivir como meros atractivos turísticos.",
        },
        { type: "paragraph", text: "Deben formar parte de la vida corriente." },
        {
          type: "paragraph",
          text: "La política cultural debe fortalecer la creación local en lugar de limitarse a importar lo que tiene el mayor alcance comercial en el mundo.",
        },
        {
          type: "paragraph",
          text: "La civilización europea debe permanecer abierta a aprender de otras civilizaciones sin disolverse en ellas.",
        },
        { type: "statement", text: "El intercambio no es lo mismo que la desaparición." },
      ] satisfies readonly ContentBlock[],
    },

    work: {
      title: "El trabajo",
      summary: "El trabajo posee dignidad, pero no es la finalidad de la existencia humana.",
      body: [
        { type: "lead", text: "El trabajo es más que una transacción en la que se cambia tiempo por salario." },
        { type: "statement", text: "El trabajo posee dignidad, pero no es la finalidad de la existencia humana." },
        {
          type: "paragraph",
          text: "El ser humano no fue creado para producir, consumir, acumular y repetir el ciclo hasta morir.",
        },
        {
          type: "paragraph",
          text: "Un sistema económico está para proporcionar la base material de una vida humana plena, no para consumir las vidas que debía sostener.",
        },
        {
          type: "paragraph",
          text: "Una sociedad está desordenada cuando la gente corriente debe entregar casi todas sus horas de vigilia solo para mantener la vivienda, la comida y una seguridad elemental; cuando los padres apenas ven a sus hijos; cuando las comunidades se vacían porque todo el mundo está agotado por el trabajo; o cuando el aumento de la productividad enriquece a las instituciones sin producir ningún aumento correspondiente de libertad humana.",
        },
        { type: "paragraph", text: "El progreso económico debe juzgarse, en parte, por una pregunta sencilla:" },
        { type: "statement", text: "¿Da a la gente corriente mayor dominio sobre su propia vida?" },
        {
          type: "paragraph",
          text: "La productividad debe traducirse, al final, en más seguridad, más ocio, familias más fuertes y una mayor libertad frente a la fatiga innecesaria.",
        },
        {
          type: "paragraph",
          text: "La finalidad de la vida económica no es maximizar el número de horas que pueden extraerse de las personas.",
        },
        {
          type: "paragraph",
          text: "Las personas necesitan tiempo para la familia, la amistad, el culto, la contemplación, la naturaleza, el oficio, el aprendizaje, la comunidad, la fiesta y el descanso.",
        },
        { type: "paragraph", text: "No son interrupciones económicamente improductivas de la vida." },
        { type: "paragraph", text: "Están entre las razones por las que existe la vida económica." },
        {
          type: "paragraph",
          text: "Rechazamos una civilización en la que las personas acaban siendo siervas de los sistemas que se crearon para servirlas.",
        },
        {
          type: "statement",
          text: "El hombre debe trabajar para vivir. Nunca debe quedar reducido a vivir para trabajar.",
        },
        {
          type: "paragraph",
          text: "Por el trabajo las personas participan en la sociedad, adquieren competencia, producen cosas útiles y mantienen a sus familias.",
        },
        {
          type: "paragraph",
          text: "Una economía que destruye ocupaciones con sentido solo porque sustituirlas aumenta la eficiencia medible debería considerar lo que se pierde y no únicamente lo que se gana.",
        },
        {
          type: "paragraph",
          text: "La artesanía, la agricultura, la ingeniería, los cuidados, la enseñanza y los oficios cualificados merecen recuperar su prestigio social.",
        },
        {
          type: "paragraph",
          text: "La automatización debe liberar a las personas de los trabajos verdaderamente degradantes allí donde sea posible, pero no convertirse en el objetivo irreflexivo de suprimir la participación humana en toda actividad económicamente productiva.",
        },
        { type: "statement", text: "La competencia humana es, en sí misma, un bien social." },
      ] satisfies readonly ContentBlock[],
    },

    "foreign-policy": {
      title: "Política exterior",
      summary: "Independencia estratégica, prudencia y una presunción firme en contra de toda guerra innecesaria.",
      body: [
        { type: "lead", text: "Europa debe buscar la independencia, no la ambición imperial." },
        {
          type: "paragraph",
          text: "Las naciones europeas deben poder defenderse, asegurar sus fronteras y mantener la independencia estratégica en alimentación, energía, infraestructuras, medicina e industria esencial.",
        },
        {
          type: "paragraph",
          text: "Rechazamos la dependencia permanente de potencias lejanas para las condiciones básicas de la supervivencia nacional.",
        },
        {
          type: "paragraph",
          text: "Rechazamos también las guerras ideológicas que pretenden reconstruir civilizaciones ajenas conforme a modelos políticos abstractos.",
        },
        { type: "paragraph", text: "Cada civilización tiene su propia historia." },
        { type: "statement", text: "Unas relaciones pacíficas no exigen uniformidad cultural." },
        {
          type: "paragraph",
          text: "La política exterior debe regirse por la prudencia, por el interés nacional legítimo, por la defensa de los inocentes allí donde sea realistamente posible y por una presunción firme en contra de toda guerra innecesaria.",
        },
      ] satisfies readonly ContentBlock[],
    },

    "what-we-reject": {
      title: "Lo que rechazamos",
      summary: "Diez rechazos, dichos sin rodeos —de ideas y de sistemas, nunca de pueblos.",
      body: [
        {
          type: "list",
          marker: "rule",
          items: [
            "Rechazamos el **individualismo liberal**, porque una sociedad es más que un contrato entre individuos autónomos.",
            "Rechazamos el **materialismo**, porque el hombre no se reduce a un apetito económico.",
            "Rechazamos el **comunismo**, porque abolir la propiedad y someter la sociedad al Estado centralizado destruye a la vez la libertad y las instituciones sociales orgánicas.",
            "Rechazamos el **absolutismo del laissez faire**, porque los mercados deben permanecer subordinados al bien común.",
            "Rechazamos la **tecnocracia**, porque la pericia y la capacidad técnica no confieren autoridad moral.",
            "Rechazamos el **consumismo**, porque la adquisición no puede dotar de finalidad a una civilización.",
            "Rechazamos el **nihilismo histórico**, porque una civilización incapaz de amar algo de su herencia no puede sobrevivir.",
            "Rechazamos el **terrorismo político**, porque la destrucción deliberada de vidas inocentes no puede edificar un orden moral.",
            "Rechazamos el **totalitarismo**, porque ni un partido, ni una empresa, ni una ideología, ni un Estado pueden absorber legítimamente la vida humana entera.",
            "Y rechazamos el **culto al progreso por el progreso**.",
          ],
        },
      ] satisfies readonly ContentBlock[],
    },

    "what-we-seek": {
      title: "Lo que buscamos",
      summary: "El programa en positivo: el aspecto que tendría un orden europeo restaurado.",
      body: [
        {
          type: "lead",
          text: "Buscamos una Europa en la que la campana de la iglesia, la mesa familiar, el mercado local, el taller, la granja, la plaza mayor, la universidad, el bosque y la nación vuelvan a pertenecer a un orden social coherente.",
        },
        {
          type: "list",
          marker: "rule",
          items: [
            "Buscamos naciones lo bastante seguras de sí mismas para conservarse sin necesitar el odio a las demás.",
            "Buscamos familias capaces de criar hijos sin arruinarse.",
            "Buscamos una propiedad ampliamente repartida antes que la dependencia permanente.",
            "Buscamos mercados sin culto al mercado.",
            "Buscamos autoridad sin totalitarismo.",
            "Buscamos tecnología sin dominación tecnológica.",
            "Buscamos la custodia del mundo natural sin desprecio por la humanidad.",
            "Buscamos el cristianismo sin obligar a nadie a creer.",
            "Buscamos patriotismo.",
            "Buscamos continuidad sin estancamiento.",
            "Buscamos el progreso allí donde el progreso es verdaderamente humano, y la contención allí donde el progreso no es más que otro nombre de la disolución.",
          ],
        },
      ] satisfies readonly ContentBlock[],
    },

    restoration: {
      title: "Restauración",
      summary: "La historia no puede revertirse; el rumbo sí puede cambiarse.",
      body: [
        { type: "lead", text: "Nuestro movimiento no pide que Europa se convierta en un museo." },
        { type: "paragraph", text: "Tampoco pedimos que la historia se revierta." },
        { type: "paragraph", text: "La historia no puede revertirse." },
        { type: "statement", text: "Pero el rumbo sí puede cambiarse." },
        {
          type: "list",
          marker: "none",
          items: [
            "Las instituciones pueden reconstruirse.",
            "Las familias pueden recobrar la confianza.",
            "Las comunidades pueden recuperar poder.",
            "La propiedad puede volver a repartirse ampliamente.",
            "La tecnología puede volver a ser una servidora.",
            "Los paisajes pueden restaurarse.",
            "Las iglesias pueden volver a llenarse de vida.",
            "Las naciones pueden recordar lo que son.",
            "Europa puede volver a ser reconociblemente ella misma.",
          ],
        },
        { type: "paragraph", text: "La elección que tenemos delante no es, por tanto, simplemente entre el pasado y el futuro." },
        { type: "paragraph", text: "Es una elección entre dos futuros distintos." },
        {
          type: "paragraph",
          text: "Uno es cada vez más centralizado, más tecnológico, más desarraigado, más mercantilizado y más intercambiable: una civilización en la que el hombre tiene mayor poder sobre el mundo exterior mientras ejerce cada vez menos control sobre los sistemas que gobiernan su propia vida.",
        },
        { type: "paragraph", text: "El otro acepta límites." },
        {
          type: "paragraph",
          text: "Reconoce que hay cosas que deben heredarse y no inventarse, protegerse y no optimizarse, amarse y no ponerles precio.",
        },
        { type: "statement", text: "Elegimos el segundo." },
        {
          type: "list",
          marker: "rule",
          items: [
            "Elegimos la familia antes que la atomización.",
            "La comunidad antes que el aislamiento.",
            "La propiedad antes que la dependencia.",
            "La custodia antes que la explotación.",
            "La belleza antes que la falta de carácter propio.",
            "La nación antes que el desarraigo.",
            "La fe antes que el nihilismo.",
            "El juicio humano antes que la inevitabilidad tecnológica.",
            "La civilización antes que la disolución.",
            "Y la restauración antes que la rendición.",
          ],
        },
        { type: "paragraph", text: "Europa debe volver a tener conciencia de lo que es." },
        { type: "paragraph", text: "No porque las demás civilizaciones carezcan de valor." },
        {
          type: "paragraph",
          text: "Sino porque ninguna civilización sobrevive una vez que ha decidido que su propia continuidad es moralmente innecesaria.",
        },
        { type: "paragraph", text: "Nuestra herencia no nos correspondía crearla." },
        { type: "paragraph", text: "No nos corresponde desecharla." },
        { type: "statement", text: "Nos corresponde recibirla, renovarla y transmitirla." },
      ] satisfies readonly ContentBlock[],
    },
  },
};
