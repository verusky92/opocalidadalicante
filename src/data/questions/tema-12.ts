import type { Question } from '../../types'

/** Tema 12: Modelos EFQM, CAF e ISO 9001 — banco Calibre. */
export const TEMA_12_QUESTIONS: Question[] = [
  {
    id: 't12-01',
    temaId: 12,
    stem: 'Una Diputación quiere demostrar conformidad de su sistema de gestión de la calidad ante un organismo independiente. ¿Qué instrumento encaja mejor?',
    options: [
      'Una autoevaluación CAF sin auditoría externa',
      'El reconocimiento EFQM de excelencia plena sin requisitos auditables',
      'La certificación frente a los requisitos de ISO 9001',
      'Una Carta de Servicios publicada en sede electrónica',
    ],
    correct: 2,
    explanation:
      'Correcta: C. ISO 9001 fija requisitos de un SGC cuya conformidad puede evaluarse y certificarse por tercera parte. CAF y EFQM orientan excelencia mediante autoevaluación (y, en su caso, reconocimientos), pero no son el esquema típico de “certificación de requisitos” del SGC. La Carta de Servicios es un compromiso ciudadano, no un certificado de sistema.',
    tags: ['calibre'],
  },
  {
    id: 't12-02',
    temaId: 12,
    stem: '¿Cuál es la diferencia nuclear entre ISO 9001 y el modelo EFQM?',
    options: [
      'Ambos son esquemas de certificación acreditados por ENAC de forma idéntica',
      '9001 establece requisitos certificables de SGC; EFQM es un modelo de excelencia orientado a autoevaluación y mejora',
      'EFQM sustituye a ISO 9001 en toda la Administración General del Estado',
      'ISO 9001 solo aplica al sector privado y EFQM solo a municipios de menos de 5.000 habitantes',
    ],
    correct: 1,
    explanation:
      'Correcta: B. 9001 = requisitos auditables de SGC; EFQM = marco de excelencia organizacional (enfoques y resultados), no un “ISO de requisitos”. No son el mismo esquema ENAC, ni se sustituyen mutuamente por norma general.',
    tags: ['calibre'],
  },
  {
    id: 't12-03',
    temaId: 12,
    stem: 'El CAF (Common Assessment Framework) se concibió principalmente para:',
    options: [
      'Laboratorios privados que buscan acreditación ISO/IEC 17025',
      'Organismos de certificación que emiten sellos ISO 9001',
      'Administraciones públicas europeas, con lógica de excelencia inspirada en EFQM',
      'Entidades de acreditación como sustituto funcional de ENAC',
    ],
    correct: 2,
    explanation:
      'Correcta: C. CAF adapta la autoevaluación de excelencia al sector público europeo. No acredita laboratorios, no certifica SGC ni sustituye a ENAC.',
    tags: ['calibre'],
  },
  {
    id: 't12-04',
    temaId: 12,
    stem: 'Señale la afirmación INCORRECTA:',
    options: [
      'ISO 9001 exige enfoque a procesos y mejora continua',
      'CAF permite diagnosticar fortalezas y áreas de mejora en AAPP',
      'EFQM orienta la gestión hacia resultados y enfoques de excelencia',
      'Estar certificado ISO 9001 equivale automáticamente a excelencia EFQM plena',
    ],
    correct: 3,
    explanation:
      'Correcta: D (es la incorrecta). Un certificado 9001 acredita conformidad con requisitos de SGC, no “excelencia plena” EFQM. A, B y C son coherentes con el papel de cada modelo.',
    tags: ['calibre'],
  },
  {
    id: 't12-05',
    temaId: 12,
    stem: 'En la lógica RADAR del modelo EFQM, ¿qué se evalúa de forma inseparable?',
    options: [
      'Enfoques (Approach), despliegue, evaluación/revisión y resultados (Results)',
      'Solo la documentación del SGC frente a cláusulas ISO',
      'Únicamente el coste de no calidad según PAF',
      'La acreditación ENAC del organismo certificador',
    ],
    correct: 0,
    explanation:
      'Correcta: A. RADAR articula enfoques, despliegue, evaluación/revisión y resultados. No es un checklist de cláusulas 9001 ni un esquema de acreditación.',
    tags: ['calibre'],
  },
  {
    id: 't12-06',
    temaId: 12,
    stem: 'El “pensamiento basado en riesgos” de ISO 9001 busca, en esencia:',
    options: [
      'Eliminar toda planificación porque el riesgo hace inútil el plan',
      'Sustituir la autoevaluación CAF por un inventario de amenazas políticas',
      'Prohibir controles operativos una vez certificado el sistema',
      'Anticipar efectos indeseados y oportunidades que afecten a la capacidad del SGC para lograr resultados previstos',
    ],
    correct: 3,
    explanation:
      'Correcta: D. El riesgo en 9001 orienta a prevenir efectos no deseados y aprovechar oportunidades, manteniendo la planificación y los controles. No anula CAF ni elimina controles tras certificar.',
    tags: ['calibre'],
  },
  {
    id: 't12-07',
    temaId: 12,
    stem: 'Una unidad decide “certificarse en CAF” como si fuera ISO 9001. El error conceptual es:',
    options: [
      'Que CAF exige necesariamente acreditación ENAC del laboratorio interno',
      'Que CAF prohíbe cualquier indicador de resultados',
      'Que CAF no es una norma de requisitos de SGC certificable al modo de ISO 9001',
      'Que CAF solo puede usarse si se deroga previamente ISO 19011',
    ],
    correct: 2,
    explanation:
      'Correcta: C. CAF es un marco de autoevaluación para AAPP, no un esquema de certificación de requisitos tipo 9001. Confundir “usar CAF” con “certificarse CAF como ISO” es el error típico de test.',
    tags: ['calibre'],
  },
  {
    id: 't12-08',
    temaId: 12,
    stem: 'Sobre la compatibilidad práctica entre ISO 9001 y CAF en una Diputación, la opción más sólida es:',
    options: [
      'Está prohibida en la Unión Europea: hay que elegir uno u otro',
      'Es viable: 9001 disciplina el SGC; CAF amplía la mirada de excelencia pública',
      'Es inútil siempre porque miden exactamente lo mismo',
      'Solo es legal si se elimina toda auditoría interna',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Se complementan con frecuencia: 9001 aporta estructura y conformidad; CAF/EFQM amplían diagnóstico de excelencia y resultados. No están prohibidos juntos ni miden “exactamente lo mismo”.',
    tags: ['calibre'],
  },
  {
    id: 't12-09',
    temaId: 12,
    stem: 'La orientación al cliente en ISO 9001 implica, entre otros aspectos:',
    options: [
      'Determinar y cumplir requisitos del cliente y los legales/reglamentarios aplicables, buscando aumentar la satisfacción',
      'Anteponer siempre la petición del usuario aunque contradiga la legalidad',
      'Sustituir el cumplimiento normativo por encuestas de clima laboral',
      'Eliminar el análisis de partes interesadas relevantes del contexto',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Cliente + requisitos legales/reglamentarios. En AAPP la “satisfacción” no autoriza incumplir el ordenamiento. Las otras opciones distorsionan el equilibrio calidad–legalidad.',
    tags: ['calibre'],
  },
  {
    id: 't12-10',
    temaId: 12,
    stem: '¿Qué aporta de forma más característica una autoevaluación CAF/EFQM frente a una auditoría de certificación 9001?',
    options: [
      'La emisión inmediata de un certificado ENAC de competencia del laboratorio',
      'Un diagnóstico amplio de fortalezas y áreas de mejora con lógica de excelencia, no limitado a conformidad de requisitos',
      'La sustitución automática de la Carta de Servicios',
      'La derrota del enfoque a procesos, que queda prohibido',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Autoevaluación de excelencia ≠ auditoría de conformidad. No emite acreditación ENAC ni sustituye cartas o procesos.',
    tags: ['calibre'],
  },
  {
    id: 't12-11',
    temaId: 12,
    stem: 'En ISO 9001, el ciclo PDCA se relaciona especialmente con:',
    options: [
      'La lógica RADAR de puntuación EFQM, que es idéntica cláusula a cláusula',
      'La acreditación de organismos de certificación por ENAC',
      'La publicación obligatoria de la Carta de Servicios en el BOP',
      'La planificación, operación, verificación del desempeño y actuación de mejora del SGC',
    ],
    correct: 3,
    explanation:
      'Correcta: D. PDCA estructura el SGC (planificar–hacer–verificar–actuar). RADAR es propia de EFQM; ENAC acredita evaluadores; la Carta es otro instrumento.',
    tags: ['calibre'],
  },
  {
    id: 't12-12',
    temaId: 12,
    stem: 'Un SGC ISO 9001 “papelero”, sin cultura de mejora, suele producir:',
    options: [
      'Cumplimiento documental formal con poco valor real de servicio',
      'El nivel máximo de reconocimiento EFQM por definición',
      'La equivalencia automática con una autoevaluación CAF excelente',
      'Garantía absoluta de resultados ciudadanos sin indicadores',
    ],
    correct: 0,
    explanation:
      'Correcta: A. La certificación no inmuniza frente a burocracia vacía. Excelencia EFQM/CAF y resultados de servicio exigen despliegue y mejora reales, no solo papeles.',
    tags: ['calibre'],
  },
  {
    id: 't12-13',
    temaId: 12,
    stem: 'ISO 9001 como norma de “Requisitos” significa que:',
    options: [
      'Define condiciones exigibles al SGC cuya conformidad puede auditarse',
      'Es únicamente una guía voluntaria sin criterios auditables',
      'Coincide con el modelo CAF criterio por criterio',
      'Es el reglamento de acreditación de ENAC',
    ],
    correct: 0,
    explanation:
      'Correcta: A. “Requisitos” implica exigibles y auditables. No es mera guía, ni CAF, ni el marco de ENAC.',
    tags: ['calibre'],
  },
  {
    id: 't12-14',
    temaId: 12,
    stem: 'Respecto a los criterios típicos de EFQM (enablers/resultados), señale lo más adecuado:',
    options: [
      'Solo existen criterios de resultados; los enfoques no se evalúan',
      'Sustituye por completo las cláusulas de liderazgo y contexto de ISO 9001',
      'Se limitan a costes de calidad PAF sin mirada estratégica',
      'Combina criterios de enfoques/agentes facilitadores con criterios de resultados',
    ],
    correct: 3,
    explanation:
      'Correcta: D. EFQM equilibra enfoques (cómo se gestiona) y resultados (qué se logra). No “borra” ISO 9001 ni se reduce a PAF.',
    tags: ['calibre'],
  },
  {
    id: 't12-15',
    temaId: 12,
    stem: '¿Cuál es un uso correcto de ISO 9001 en una Administración pública?',
    options: [
      'Declarar que sustituye al control de legalidad de los actos administrativos',
      'Afirmar que hace innecesaria cualquier escucha a la ciudadanía',
      'Prohibir la gestión por procesos porque “ya hay organigrama”',
      'Disciplinar el SGC (procesos, riesgos, indicadores, mejora) sin confundirlo con excelencia EFQM total',
    ],
    correct: 3,
    explanation:
      'Correcta: D. 9001 ordena el sistema de gestión; no anula legalidad, participación ni la distinción con modelos de excelencia.',
    tags: ['calibre'],
  },
  {
    id: 't12-16',
    temaId: 12,
    stem: 'El liderazgo en ISO 9001, comparado con su papel en EFQM/CAF, se caracteriza porque:',
    options: [
      'En 9001 el liderazgo es irrelevante; solo importa la inspección final',
      'En EFQM/CAF el liderazgo no se evalúa nunca',
      'Solo CAF exige liderazgo; ISO y EFQM lo excluyen',
      'En ambos es crítico, pero 9001 lo exige como requisito del SGC y EFQM/CAF lo valoran como enfoque de excelencia',
    ],
    correct: 3,
    explanation:
      'Correcta: D. El liderazgo es central en los tres marcos, con matices: requisito auditables en 9001; criterio/enfoque en excelencia. Las otras niegan ese papel.',
    tags: ['calibre'],
  },
  {
    id: 't12-17',
    temaId: 12,
    stem: 'Una organización certificada ISO 9001 obtiene un reconocimiento EFQM. ¿Qué interpretación es más rigurosa?',
    options: [
      'El reconocimiento EFQM anula y sustituye el certificado 9001',
      'Son instrumentos distintos y pueden coexistir: conformidad de SGC y madurez/excelencia organizacional',
      'El reconocimiento EFQM es emitido necesariamente por ENAC',
      'Demuestra que CAF queda prohibido en esa organización',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Coexistencia posible; no se anulan entre sí. ENAC no “emite EFQM” como acreditación tipica de certificados 9001, ni CAF queda prohibido.',
    tags: ['calibre'],
  },
  {
    id: 't12-18',
    temaId: 12,
    stem: 'El enfoque a procesos en ISO 9001 se opone conceptualmente a:',
    options: [
      'Definir dueños de proceso e indicadores',
      'Usar SIPOC o mapas de procesos como apoyo',
      'Revisar interfaces entre unidades',
      'Gestionar por silos departamentales sin visión de flujo extremo a extremo',
    ],
    correct: 3,
    explanation:
      'Correcta: D. El enfoque a procesos combate la fragmentación por departamentos. B–D son coherentes con ese enfoque.',
    tags: ['calibre'],
  },
  {
    id: 't12-19',
    temaId: 12,
    stem: 'En el contexto del tema, ¿qué afirmación sobre información documentada en ISO 9001 es más precisa?',
    options: [
      'Exige necesariamente un “manual de calidad” con el formato de 1994 en todos los casos',
      'Prohíbe cualquier procedimiento escrito si hay certificación',
      'Coincide con el contenido obligatorio de toda Carta de Servicios',
      'Requiere la información documentada necesaria para la eficacia del SGC, con flexibilidad de formato',
    ],
    correct: 3,
    explanation:
      'Correcta: D. 9001 actual no impone el manual clásico como fetiche; exige lo necesario y controlado. No se identifica con la Carta.',
    tags: ['calibre'],
  },
  {
    id: 't12-20',
    temaId: 12,
    stem: 'CAF se diferencia de EFQM, de forma típica, en que:',
    options: [
      'CAF es la norma de certificación ISO de laboratorios',
      'EFQM solo sirve para AAPP y CAF solo para multinacionales',
      'CAF es un marco específico para el sector público europeo inspirado en la lógica EFQM',
      'No hay ninguna relación histórica ni conceptual entre ambos',
    ],
    correct: 2,
    explanation:
      'Correcta: C. CAF nace para AAPP europeas tomando inspiración de EFQM. No es ISO de laboratorios ni invierte los ámbitos de aplicación.',
    tags: ['calibre'],
  },
  {
    id: 't12-21',
    temaId: 12,
    stem: 'La revisión por la dirección en ISO 9001 sirve para:',
    options: [
      'Sustituir las auditorías internas por un acto protocolario anual',
      'Obtener automáticamente el sello EFQM',
      'Evaluar la idoneidad, adecuación y eficacia del SGC y decidir mejoras',
      'Acreditar ante ENAC al organismo certificador',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Es un requisito de gobernanza del SGC. No sustituye auditorías internas ni concede EFQM/ENAC.',
    tags: ['calibre'],
  },
  {
    id: 't12-22',
    temaId: 12,
    stem: 'Si un test afirma que “ISO 9001, EFQM y CAF son sinónimos”, la réplica correcta es:',
    options: [
      'Son idénticos y solo cambian el logotipo',
      'Comparten el propósito de mejorar la gestión, pero difieren en naturaleza (requisitos certificables vs modelos de excelencia/autoevaluación pública)',
      'Solo EFQM es usable en España; el resto están derogados',
      'CAF es el único certificable; 9001 y EFQM son meras guías',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Hay afinidad de mejora, no identidad. 9001 es certificable; EFQM/CAF son excelencia/autoevaluación (CAF, público).',
    tags: ['calibre'],
  },
  {
    id: 't12-23',
    temaId: 12,
    stem: 'El análisis del contexto y de las partes interesadas en ISO 9001 se acerca, en espíritu, a:',
    options: [
      'Ignorar el entorno externo porque el SGC es autosuficiente',
      'Limitar el análisis a proveedores privados excluyendo ciudadanía y mandatos legales',
      'Considerar factores internos/externos y requisitos de partes relevantes que afectan al SGC',
      'Sustituir el mapa de procesos por un DAFO sin indicadores',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Contexto + partes interesadas es núcleo de 9001. En lo público incluye mandatos legales y ciudadanía, no solo “clientes de mercado”.',
    tags: ['calibre'],
  },
  {
    id: 't12-24',
    temaId: 12,
    stem: 'Una autoevaluación CAF bien hecha debería apoyarse preferentemente en:',
    options: [
      'Opiniones sin evidencia, para agilizar el taller',
      'Evidencias de enfoques y resultados (indicadores, ejemplos, datos) que sustentan el diagnóstico',
      'Únicamente el organigrama oficial, sin datos de desempeño',
      'La acreditación ENAC del ayuntamiento',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Sin evidencia, la autoevaluación es opinión. CAF/EFQM exigen rigor; ENAC no “acredita” al ayuntamiento por hacer CAF.',
    tags: ['calibre'],
  },
  {
    id: 't12-25',
    temaId: 12,
    stem: 'Respecto a la mejora continua en ISO 9001, señale lo correcto:',
    options: [
      'Queda prohibida tras obtener el certificado, para no alterar el alcance',
      'Es un requisito del SGC: usar hallazgos, datos y no conformidades para mejorar el sistema',
      'Solo existe en EFQM y está ausente de 9001',
      'Consiste exclusivamente en publicar una Carta de Servicios',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Mejora continua es central en 9001. No se congela por certificar ni se reduce a la Carta; tampoco es monopolio EFQM.',
    tags: ['calibre'],
  },
  {
    id: 't12-26',
    temaId: 12,
    stem: '¿Qué confusión es frecuente y debe evitarse en el examen?',
    options: [
      'Creer que ISO 19011 es la norma de requisitos del SGC (eso es 9001)',
      'Creer que CAF está pensado para Administraciones públicas',
      'Creer que EFQM usa lógica de enfoques y resultados',
      'Creer que 9001 puede complementarse con autoevaluación',
    ],
    correct: 0,
    explanation:
      'Correcta: A. 19011 = directrices de auditoría; 9001 = requisitos de SGC. B–D son afirmaciones razonables, no el error típico.',
    tags: ['calibre'],
  },
  {
    id: 't12-27',
    temaId: 12,
    stem: 'En una Diputación, ¿cuándo tiene más sentido priorizar CAF frente a una certificación 9001 inmediata?',
    options: [
      'Cuando el único objetivo es un sello de conformidad de tercera parte en seis semanas',
      'Cuando se necesita acreditar un laboratorio de ensayo ante ENAC',
      'Cuando se busca un diagnóstico de excelencia pública amplio antes o además de endurecer el SGC certificable',
      'Cuando se quiere sustituir el BOP por un modelo de calidad',
    ],
    correct: 2,
    explanation:
      'Correcta: C. CAF brilla como diagnóstico de excelencia en AAPP. Si el objetivo es sello 9001 o acreditación de laboratorio, el instrumento es otro.',
    tags: ['calibre'],
  },
  {
    id: 't12-28',
    temaId: 12,
    stem: 'Los resultados en EFQM/CAF, frente a los indicadores de ISO 9001, se caracterizan típicamente por:',
    options: [
      'Cubrir de forma más explícita una visión multidimensional (ciudadanía, personas, sociedad, desempeño clave, etc., según el modelo)',
      'Ignorar por completo a las personas y a la sociedad',
      'Limitarse al número de procedimientos firmados',
      'Prohibir cualquier métrica de proceso',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Los modelos de excelencia empujan una batería amplia de resultados. 9001 también mide, pero la narrativa de “resultados de excelencia” es más propia de EFQM/CAF.',
    tags: ['calibre'],
  },
  {
    id: 't12-29',
    temaId: 12,
    stem: 'La Estructura de Alto Nivel (HLS) de las normas ISO de sistemas de gestión facilita:',
    options: [
      'Sustituir CAF por un único formulario europeo obligatorio',
      'Integrar 9001 con otras normas de sistemas (p. ej. ambiental, seguridad) por cláusulas alineadas',
      'Que ENAC certifique directamente a todas las Diputaciones',
      'Que EFQM deje de evaluar resultados',
    ],
    correct: 1,
    explanation:
      'Correcta: B. La HLS alinea estructuras entre normas de SG. No convierte a ENAC en certificador de Diputaciones ni anula CAF/EFQM.',
    tags: ['calibre'],
  },
  {
    id: 't12-30',
    temaId: 12,
    stem: 'Un indicador de satisfacción ciudadana alto ¿demuestra por sí solo excelencia EFQM?',
    options: [
      'No: la excelencia exige enfoques sólidos y un panel equilibrado de resultados, no un dato aislado',
      'Sí, porque EFQM solo mira un único KPI de encuesta',
      'Sí, y además sustituye a ISO 9001 y a CAF',
      'No, porque las AAPP tienen prohibido medir satisfacción',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Un KPI no hace excelencia. Hacen falta enfoques, despliegue y resultados diversos. Medir satisfacción en AAPP no está “prohibido”.',
    tags: ['calibre'],
  },
  {
    id: 't12-31',
    temaId: 12,
    stem: 'En la práctica de un servicio provincial, el error de “confundir modelo” más dañino suele ser:',
    options: [
      'Presentar un sello ISO 9001 como prueba de que ya no hace falta medir compromisos con la ciudadanía ni mejorar procesos clave',
      'Usar auditorías internas además de la certificación',
      'Complementar 9001 con un plan de mejora CAF',
      'Formar al personal en PDCA e indicadores',
    ],
    correct: 0,
    explanation:
      'Correcta: A. El sello no cierra el ciclo de servicio público. A–C son prácticas sanas; el daño viene de usar 9001 como excusa para no medir ni mejorar.',
    tags: ['calibre'],
  },
  {
    id: 't12-32',
    temaId: 12,
    stem: 'Resuma la tríada del tema en una frase operativa correcta:',
    options: [
      'ISO 9001 = Carta de Servicios; EFQM = ENAC; CAF = auditoría de tercera parte',
      'ISO 9001 = acreditación; EFQM = certificación; CAF = norma de laboratorios',
      'ISO 9001 = SGC certificable; EFQM = excelencia/autoevaluación; CAF = excelencia adaptada a AAPP',
      'Los tres son únicamente sellos comerciales sin contenido de gestión',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Esa es la distinción nuclear del tema. Las otras mezclan instrumentos (carta, ENAC, laboratorios, sellos vacíos).',
    tags: ['calibre'],
  },
]
