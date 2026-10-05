import type { Question } from '../../types'

/** Tema 5: Clientes y partes interesadas. */
export const TEMA_05_QUESTIONS: Question[] = [
  {
    id: 't5-01',
    temaId: 5,
    stem: 'En una organización pública, el análisis de partes interesadas es crítico porque:',
    options: [
      'Existen múltiples actores con intereses legítimos distintos (y a veces en tensión) que condicionan requisitos del servicio',
      'Solo existe un cliente idéntico al de una empresa de consumo masivo',
      'Los empleados nunca son parte interesada del sistema de calidad',
      'Los órganos de control no imponen requisitos relevantes al servicio',
    ],
    correct: 0,
    explanation:
      'Correcta: A. El mapa público es plural. B importa el modelo privado de un solo cliente; C niega al personal como stakeholder.',
    tags: ['calibre'],
  },
  {
    id: 't5-02',
    temaId: 5,
    stem: 'Señale la herramienta MÁS adecuada para explorar en profundidad percepciones cualitativas de un grupo reducido:',
    options: [
      'Un gráfico de control estadístico sin más contexto discursivo',
      'Un grupo focal (focus group) bien moderado',
      'Una encuesta masiva cerrada pensada solo para inferencia cuantitativa',
      'Un mapa SIPOC del proceso sin interacción con usuarios',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Focus group = cualitativo en grupo pequeño. A es herramienta de proceso/variabilidad; C prioriza cuanti amplio, no profundidad cualitativa.',
    tags: ['calibre'],
  },
  {
    id: 't5-03',
    temaId: 5,
    stem: 'Triangular encuesta + quejas + datos de proceso sirve principalmente para:',
    options: [
      'Complicar siempre de forma inútil la decisión gerencial',
      'Sustituir el cumplimiento de la legalidad por percepción',
      'Reducir sesgos (p. ej. solo quien reclama) y validar hipótesis de mejora',
      'Eliminar la necesidad de dueño de proceso',
    ],
    correct: 2,
    explanation:
      'Correcta: C. La triangulación mejora la fiabilidad del diagnóstico. A caricaturiza el método; B le atribuye un efecto indebido.',
    tags: ['calibre'],
  },
  {
    id: 't5-04',
    temaId: 5,
    stem: 'Un mapa de stakeholders con ejes poder/interés ayuda a:',
    options: [
      'Discriminar ilegalmente a usuarios del servicio',
      'Eliminar la transparencia institucional',
      'Sustituir el presupuesto por relaciones públicas',
      'Priorizar estrategias de relación, información y participación según relevancia',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Es herramienta de priorización relacional, no de exclusión ilegal. A distorsiona su uso; B también lo distorsiona.',
    tags: ['calibre'],
  },
  {
    id: 't5-05',
    temaId: 5,
    stem: 'Señale la INCORRECTA sobre medición de satisfacción:',
    options: [
      'Las encuestas deben ser accionables (permitir decidir qué mejorar)',
      'Publicar resultados y no cambiar nada suele aumentar la credibilidad institucional',
      'El cierre de ciclo con quien reclamó genera confianza',
      'Hay que cuidar sesgos de no respuesta y de muestra',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Medir sin actuar genera cinismo (esa afirmación es la incorrecta). A es buena práctica; C también lo es.',
    tags: ['calibre'],
  },
  {
    id: 't5-06',
    temaId: 5,
    stem: 'El “cliente interno” en una Diputación podría ser:',
    options: [
      'Solo la ciudadanía externa que presenta una solicitud en registro',
      'El órgano de control externo como único destinatario del soporte TIC',
      'Un área gestora que recibe soporte de TIC, contratación o calidad',
      'Únicamente el Ayuntamiento solicitante, nunca otra unidad de la Diputación',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Cliente interno = unidad receptora del servicio de otra unidad. A confunde con cliente externo; D niega las relaciones internas entre áreas.',
    tags: ['calibre'],
  },
  {
    id: 't5-07',
    temaId: 5,
    stem: 'Respecto a quejas y reclamaciones como fuente de voz del ciudadano, lo MÁS correcto es:',
    options: [
      'Que representan siempre a toda la población usuaria sin sesgo',
      'Que deben ignorarse si el indicador de satisfacción media es alto',
      'Que sustituyen por sí solas a cualquier encuesta o dato de proceso',
      'Que son señales valiosas pero sesgadas; conviene triangularlas y analizar causas',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Útiles y sesgadas a la vez. A niega el sesgo; B absolutiza indebidamente.',
    tags: ['calibre'],
  },
  {
    id: 't5-08',
    temaId: 5,
    stem: 'En una Diputación, un stakeholder típico distinto del usuario directo del trámite es:',
    options: [
      'El Ayuntamiento asistido o el órgano de control que exige legalidad y evidencia',
      'Solo el empleado que atiende, nunca actores externos',
      'Únicamente el proveedor, sin ciudadanía ni municipios',
      'Nadie: en AAPP no hay partes interesadas',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Hay cadena provincial y órganos de control. B empobrece el mapa; C también lo recorta.',
    tags: ['calibre'],
  },
  {
    id: 't5-09',
    temaId: 5,
    stem: 'Una encuesta de satisfacción “accionable” se caracteriza por:',
    options: [
      'Preguntas genéricas sin vínculo a atributos del servicio mejorables',
      'Publicarse sin análisis ni plan de acción asociado',
      'Permitir identificar dimensiones concretas (plazo, trato, claridad) y priorizar mejoras',
      'Medir solo un número global sin posibilidad de desagregar',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Accionable = diagnóstico orientado a mejora. A produce datos decorativos; B también los deja sin uso.',
    tags: ['calibre'],
  },
  {
    id: 't5-10',
    temaId: 5,
    stem: 'El análisis de demanda y de barreras de acceso ayuda a:',
    options: [
      'Sustituir la legalidad por preferencias de marketing',
      'Ignorar a quien no usa el servicio digital',
      'Eliminar la necesidad de igualdad de trato',
      'Detectar quién no llega al servicio y por qué (brecha digital, horarios, información)',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Accesibilidad y no-usuarios. A contradice el enfoque público; B invisibiliza exclusión.',
    tags: ['calibre'],
  },
  {
    id: 't5-11',
    temaId: 5,
    stem: 'Señale la INCORRECTA sobre la “voz del ciudadano” en calidad pública:',
    options: [
      'Obliga a cumplir cualquier petición individual aunque sea ilegal o imposible',
      'Puede recogerse por encuestas, focus, quejas, observación y datos de demanda',
      'Debe interpretarse junto a requisitos legales y de equidad',
      'Puede alimentar la mejora de procesos y cartas de servicios',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Escuchar no equivale a satisfacer demandas ilegales o inviables (esa es la incorrecta). B describe un uso correcto; C también es correcto.',
    tags: ['calibre'],
  },
  {
    id: 't5-12',
    temaId: 5,
    stem: 'Mystery shopping (cliente misterioso), cuando procede, sirve para:',
    options: [
      'Sustituir siempre a las encuestas de satisfacción',
      'Observar la prestación real frente a estándares, con método ético y límites claros',
      'Certificar ISO 9001 automáticamente',
      'Eliminar la necesidad de indicadores de proceso',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Es observación estructurada de la experiencia. A le atribuye un rol que no tiene; C también.',
    tags: ['calibre'],
  },
  {
    id: 't5-13',
    temaId: 5,
    stem: 'Cerrar el ciclo tras una reclamación significa preferentemente:',
    options: [
      'Archivar sin respuesta para no “alimentar” quejas',
      'Cambiar el indicador para que la queja desaparezca estadísticamente',
      'Trasladar la culpa al ciudadano sin revisar el proceso',
      'Analizar la causa, corregir si procede, informar al interesado y aprender para el sistema',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Cierre de ciclo = acción + feedback + aprendizaje. A es un anti-patrón de cinismo; B falsea la medición.',
    tags: ['calibre'],
  },
  {
    id: 't5-14',
    temaId: 5,
    stem: 'Ciudadanía y persona usuaria NO son siempre idénticas porque:',
    options: [
      'La persona usuaria interactúa con un servicio concreto; la ciudadanía incluye también a quien no lo usa aún pero tiene interés legítimo en el mandato público',
      'En la práctica pública nunca hay usuarios distintos de la ciudadanía en abstracto',
      'La ciudadanía solo existe en el sector privado',
      'El usuario directo nunca puede ser un Ayuntamiento',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Usuario = destinatario del servicio; ciudadanía es más amplia. B niega la distinción; C es falso.',
    tags: ['calibre'],
  },
  {
    id: 't5-15',
    temaId: 5,
    stem: 'Un riesgo de basar la mejora solo en quejas es:',
    options: [
      'Obtener siempre una muestra perfecta de toda la población',
      'Sobrerrepresentar problemas de quienes reclaman y omitir silencios o barreras de quien no reclama',
      'Garantizar automáticamente la equidad de trato',
      'Sustituir con éxito cualquier dato de tiempos y errores de proceso',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Sesgo de reclamante. A atribuye una virtud inexistente; C también.',
    tags: ['calibre'],
  },
  {
    id: 't5-16',
    temaId: 5,
    stem: 'Los proveedores como partes interesadas importan en calidad porque:',
    options: [
      'Nunca afectan a la prestación del servicio público',
      'Sustituyen al mandato legal de la Diputación',
      'Sus plazos, calidad y cumplimiento condicionan el resultado percibido por usuarios y municipios',
      'Eliminan la necesidad de especificar requisitos en la contratación',
    ],
    correct: 2,
    explanation:
      'Correcta: C. La cadena de suministro afecta al servicio. A niega el vínculo; B es error de gobernanza.',
    tags: ['calibre'],
  },
  {
    id: 't5-17',
    temaId: 5,
    stem: 'Para priorizar necesidades de stakeholders en AAPP, lo MÁS adecuado es:',
    options: [
      'Explicitar criterios (legalidad, impacto, equidad, frecuencia, riesgo) y no tratar todos los intereses como equivalentes',
      'Atender solo al actor con más poder informal, aunque sea ilegal',
      'Ignorar a municipios pequeños por menor volumen',
      'Usar solo el criterio de “quien grita más en redes”',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Priorización transparente y alineada al marco público. B es un sesgo indebido; C es exclusión indebida.',
    tags: ['calibre'],
  },
  {
    id: 't5-18',
    temaId: 5,
    stem: 'La observación directa del servicio (p. ej. tiempos de espera reales) aporta frente a la encuesta:',
    options: [
      'Exactamente la misma información subjetiva que la percepción declarada',
      'Una sustitución total de cualquier escucha cualitativa',
      'Datos de comportamiento/proceso que pueden contrastar o complementar lo declarado',
      'Ninguna utilidad si ya hay una pregunta de satisfacción global',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Observación y declaración se complementan. A las iguala indebidamente; B absolutiza un método.',
    tags: ['calibre'],
  },
  {
    id: 't5-19',
    temaId: 5,
    stem: 'Señale la afirmación CORRECTA sobre índices de satisfacción:',
    options: [
      'Un índice alto garantiza por sí solo que no hay problemas de acceso ni de equidad',
      'Son útiles si se interpretan con contexto, desagregación y otras fuentes; no bastan solos',
      'No deben revisarse nunca para no perder comparabilidad, aunque el servicio cambie',
      'Sustituyen la necesidad de actuar sobre causas raíz',
    ],
    correct: 1,
    explanation:
      'Correcta: B. El índice es una señal, no un veredicto completo. A sobreinterpreta el indicador; C rigidiza en exceso.',
    tags: ['calibre'],
  },
  {
    id: 't5-20',
    temaId: 5,
    stem: 'En servicios a municipios, confundir “cliente” solo con la ciudadanía final puede llevar a:',
    options: [
      'Definir mejor los requisitos del Ayuntamiento como destinatario intermedio',
      'Mejorar automáticamente la cooperación interadministrativa',
      'Eliminar la necesidad de mapa de stakeholders',
      'Ignorar requisitos del municipio (plazos, formatos, soporte) que condicionan el valor final',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Hay cliente intermedio (municipio) y mediato (ciudadanía). A es lo contrario del error; B también.',
    tags: ['calibre'],
  },
  {
    id: 't5-21',
    temaId: 5,
    stem: 'Una buena práctica al diseñar una encuesta de satisfacción en AAPP es:',
    options: [
      'Preguntar todo lo imaginable sin priorizar longitud ni claridad',
      'Definir objetivo, muestra, preguntas accionables, frecuencia y plan de uso de resultados',
      'Prometer anonimato y luego identificar retaliaciones a críticas',
      'Publicar solo los ítems favorables',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Diseño con propósito y ética. A degrada la calidad de respuesta; C rompe la confianza.',
    tags: ['calibre'],
  },
  {
    id: 't5-22',
    temaId: 5,
    stem: 'Señale la INCORRECTA sobre el personal empleado como parte interesada:',
    options: [
      'Sus condiciones y competencias afectan a la calidad del momento de verdad',
      'Puede aportar voz interna sobre fricciones del proceso',
      'Forma parte del mapa de stakeholders en modelos de excelencia pública',
      'Es irrelevante para la calidad porque “el cliente externo lo es todo”',
    ],
    correct: 3,
    explanation:
      'Correcta: D. El personal es stakeholder clave (negarlo es incorrecto). A es afirmación válida; B también.',
    tags: ['calibre'],
  },
  {
    id: 't5-23',
    temaId: 5,
    stem: 'El análisis de sugerencias (no solo reclamaciones) aporta especialmente:',
    options: [
      'Una fuente de ideas de mejora preventiva, más allá del fallo ya ocurrido',
      'Solo ruido sin valor para la mejora',
      'La sustitución del diagnóstico de procesos',
      'La prueba de que no hace falta medir satisfacción',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Sugerencias = mejora anticipatoria. B las desprecia; C les da un rol sustitutivo falso.',
    tags: ['calibre'],
  },
  {
    id: 't5-24',
    temaId: 5,
    stem: 'Cuando la satisfacción percibida es alta pero los plazos objetivos fallan, lo más prudente es:',
    options: [
      'Descartar los datos de proceso porque “la percepción manda siempre”',
      'Descartar la encuesta porque “solo cuentan los datos duros”',
      'Investigar la discrepancia: expectativas, segmento encuestado, accesibilidad o sesgos, y decidir con ambas fuentes',
      'Manipular uno de los dos para que coincidan',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Triangular e investigar la discrepancia. A elige un dogma; B elige el dogma inverso.',
    tags: ['calibre'],
  },
  {
    id: 't5-25',
    temaId: 5,
    stem: 'Un mapa de stakeholders bien usado en una Diputación debería incluir, entre otros:',
    options: [
      'Solo el Presidente de la Corporación',
      'Únicamente proveedores externos',
      'Ciudadanía/usuarios, municipios, personal, proveedores, otras AAPP y órganos de control',
      'Solo quienes hayan presentado una queja formal el último mes',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Visión amplia típica del sector público. A es un recorte indebido; B también.',
    tags: ['calibre'],
  },
  {
    id: 't5-26',
    temaId: 5,
    stem: 'La diferencia principal entre encuesta y grupo focal es:',
    options: [
      'La encuesta permite cuantificar en muestra más amplia; el focus profundiza cualitativamente en dinámicas y significados',
      'Ambas miden exactamente lo mismo con la misma validez estadística',
      'El focus sustituye siempre a la encuesta en poblaciones grandes',
      'Ninguna sirve para alimentar la mejora del servicio',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Cuanti frente a cuali. B las iguala; C sobreextiende el focus.',
    tags: ['calibre'],
  },
  {
    id: 't5-27',
    temaId: 5,
    stem: 'Medir satisfacción sin comunicar resultados ni mejoras genera típicamente:',
    options: [
      'Mayor confianza y participación futura',
      'Mejora automática de los procesos',
      'Cumplimiento legal del principio de transparencia',
      'Cinismo (“para qué opinar”) y deterioro de la credibilidad de la escucha',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Escucha sin cierre de ciclo destruye confianza. A es el efecto opuesto; B no es automático.',
    tags: ['calibre'],
  },
  {
    id: 't5-28',
    temaId: 5,
    stem: 'En calidad pública, “necesidad” y “expectativa” se relacionan así:',
    options: [
      'Son siempre idénticas y no conviene distinguirlas',
      'La necesidad alude a requisitos esenciales (a menudo normativos/funcionales); la expectativa, a lo anticipado o deseado, que hay que gestionar y a veces reeducar',
      'La expectativa nunca importa si hay mandato legal',
      'Solo existen expectativas; las necesidades son un concepto privado',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Distinción útil para diseñar y comunicar el servicio. A las fusiona; C niega un polo del análisis.',
    tags: ['calibre'],
  },
  {
    id: 't5-29',
    temaId: 5,
    stem: 'Señale la INCORRECTA sobre tiempos percibidos:',
    options: [
      'Pueden diferir de los tiempos objetivos medidos por el proceso',
      'Influyen en la calidad percibida de la atención',
      'Pueden mejorarse con información de estado y gestión de esperas',
      'Son irrelevantes si el expediente es legalmente correcto',
    ],
    correct: 3,
    explanation:
      'Correcta: D. La percepción de espera importa aunque el acto sea válido (negarlo es incorrecto). A es afirmación sólida; B también.',
    tags: ['calibre'],
  },
  {
    id: 't5-30',
    temaId: 5,
    stem: 'Otras AAPP como partes interesadas importan porque:',
    options: [
      'Nunca intercambian información ni condicionan plazos del servicio',
      'Sus interfaces (traslados, datos, competencias concurrentes) afectan al resultado extremo a extremo para el ciudadano/municipio',
      'Sustituyen al usuario final en todos los casos',
      'Eliminan la necesidad de definir el cliente del proceso',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Interoperabilidad e interfaces condicionan el resultado. A niega la realidad; C confunde roles.',
    tags: ['calibre'],
  },
  {
    id: 't5-31',
    temaId: 5,
    stem: 'Si un segmento vulnerable usa poco el canal digital, una lectura de calidad pública adecuada es:',
    options: [
      'Que “no hay demanda” y puede eliminarse el soporte no digital',
      'Que la satisfacción digital media basta para cerrar el diagnóstico de acceso',
      'Analizar barreras de acceso y mantener canales/apoyos coherentes con equidad, no solo con el usuario digital mediático',
      'Que la equidad prohíbe cualquier canal electrónico',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Acceso y equidad frente a sesgo del usuario digital. A invisibiliza exclusión; B también.',
    tags: ['calibre'],
  },
  {
    id: 't5-32',
    temaId: 5,
    stem: 'La afirmación MÁS alineada con el tema “clientes y partes interesadas” es:',
    options: [
      'Hay que identificar stakeholders, escuchar con varias herramientas, medir de forma accionable y cerrar el ciclo de mejora',
      'Basta con una encuesta anual global sin plan de acción',
      'El mapa de stakeholders sobra si hay Carta de Servicios',
      'Las quejas son la única fuente legítima de verdad',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Integra identificación, escucha, medición y acción. B fragmenta el ciclo; C también lo fragmenta.',
    tags: ['calibre'],
  },
]
