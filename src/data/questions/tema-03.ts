import type { Question } from '../../types'

/** Tema 3: Calidad en la gestión de servicios. */
export const TEMA_03_QUESTIONS: Question[] = [
  {
    id: 't3-01',
    temaId: 3,
    stem: 'En la gestión de servicios, la inseparabilidad se distingue de la intangibilidad porque:',
    options: [
      'La intangibilidad alude a la dificultad de “tocar” el servicio; la inseparabilidad, a que producción y consumo suelen coincidir y el usuario co-produce el resultado',
      'Ambas describen exactamente el mismo fenómeno: la imposibilidad de estandarizar cualquier prestación pública',
      'La inseparabilidad solo afecta a productos manufacturados; la intangibilidad, solo a servicios digitales',
      'La intangibilidad se corrige con stock; la inseparabilidad, con ampliar el almacén de capacidad no usada',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Intangibilidad = carácter no físico/percepción; inseparabilidad = simultaneidad y co-producción. B las fusiona erróneamente; C invierte el ámbito de cada característica.',
    tags: ['calibre'],
  },
  {
    id: 't3-02',
    temaId: 3,
    stem: 'Señale la afirmación MÁS precisa sobre la heterogeneidad de los servicios en una Diputación:',
    options: [
      'Desaparece por completo si se publica un procedimiento en la sede electrónica',
      'Introduce variabilidad entre prestaciones; se mitiga con estándares, formación y apoyo, sin negar la adaptación legítima al caso concreto',
      'Impide cualquier estandarización porque la equidad exige trato idéntico sin procedimientos',
      'Solo es relevante en el sector privado; en AAPP la legalidad elimina la variabilidad humana',
    ],
    correct: 1,
    explanation:
      'Correcta: B. La heterogeneidad es inherente a la prestación humana: se gestiona con estándares, no se niega. A es un mito: digitalizar no borra variabilidad; C confunde equidad con imposibilidad de estándares.',
    tags: ['calibre'],
  },
  {
    id: 't3-03',
    temaId: 3,
    stem: 'La perecibilidad de la capacidad de servicio implica, en la práctica, que:',
    options: [
      'Los servicios públicos no pueden programarse ni dimensionarse con antelación',
      'Conviene maximizar colas permanentes para demostrar demanda política',
      'La capacidad no utilizada en un periodo (cita, ventanilla, equipo) no se almacena como stock y se pierde como oportunidad de prestar',
      'No tiene relación con la planificación de turnos ni con la gestión de picos de demanda',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Sin stock de capacidad hay que equilibrar oferta y demanda. A niega la planificación posible; B es una mala praxis.',
    tags: ['calibre'],
  },
  {
    id: 't3-04',
    temaId: 3,
    stem: 'Una diferencia estructural de la calidad en el sector público frente al privado es que:',
    options: [
      'La satisfacción del usuario anula el deber de legalidad si el NPS es alto',
      'Solo importa el precio del servicio, como en un mercado competitivo puro',
      'No existen partes interesadas externas distintas del “cliente que paga”',
      'Hay que reconciliar experiencia y satisfacción con legalidad, equidad, transparencia y rendición de cuentas, a menudo con múltiples destinatarios en tensión',
    ],
    correct: 3,
    explanation:
      'Correcta: D. El marco público no es un customer satisfaction puro. A subordina ilegalmente la legalidad a la satisfacción; B reduce indebidamente el mapa de stakeholders.',
    tags: ['calibre'],
  },
  {
    id: 't3-05',
    temaId: 3,
    stem: 'Señale la INCORRECTA sobre factores clave de implantación de calidad en servicios públicos:',
    options: [
      'Las personas que prestan el servicio son críticas por el “momento de verdad”',
      'El liderazgo directivo puede sustituirse indefinidamente por un manual ISO sin compromiso ni recursos',
      'Los procesos definidos aportan consistencia a la prestación',
      'La medición útil permite aprendizaje y mejora, no solo reporting ornamental',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Sin liderazgo y recursos el SGC suele quedar en burocracia documental (esa afirmación es la incorrecta). A sí es un factor clave; C también es un factor clave.',
    tags: ['calibre'],
  },
  {
    id: 't3-06',
    temaId: 3,
    stem: 'La intangibilidad obliga, en un SGC de servicios, a:',
    options: [
      'Renunciar a indicadores porque lo intangible no se puede evidenciar',
      'Eliminar la documentación del proceso para no “rigidizar” la experiencia',
      'Hacer visibles evidencias de la prestación (registros, estándares comunicados, pruebas) y gestionar expectativas',
      'Medir solo metros cuadrados de oficinas como proxy único de calidad',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Lo intangible se gestiona con evidencia, especificación y comunicación de expectativas. A es un error de diseño del sistema; B elimina soporte a la consistencia.',
    tags: ['calibre'],
  },
  {
    id: 't3-07',
    temaId: 3,
    stem: 'En una Diputación, el destinatario principal de un servicio de asistencia técnica a municipios suele ser:',
    options: [
      'Solo el personal de la propia Diputación, al tratarse de un servicio de apoyo interno',
      'Únicamente la ciudadanía final, sin considerar al municipio como destinatario intermedio',
      'Nadie concreto, al tratarse de servicios sin cliente identificable',
      'El Ayuntamiento asistido (y, mediatamente, la ciudadanía), lo que exige definir bien el cliente del proceso y sus requisitos',
    ],
    correct: 3,
    explanation:
      'Correcta: D. En servicios provinciales hay cadena municipio → ciudadanía. A confunde asistencia municipal con cliente interno puro; B omite al Ayuntamiento como destinatario directo.',
    tags: ['calibre'],
  },
  {
    id: 't3-08',
    temaId: 3,
    stem: 'La co-producción del servicio implica que el diseño del proceso debería:',
    options: [
      'Anticipar ayudas, checklists y prevención porque errores u omisiones del usuario condicionan el resultado',
      'Asumir que el usuario nunca influye en la calidad final',
      'Atribuir toda desviación exclusivamente al empleado que atiende',
      'Prohibir la medición de tiempos de ciclo al existir interacción',
    ],
    correct: 0,
    explanation:
      'Correcta: A. El usuario está “dentro” del sistema: el proceso debe reducir fricción y errores de entrada. B niega la co-producción; C personaliza la culpa del sistema.',
    tags: ['calibre'],
  },
  {
    id: 't3-09',
    temaId: 3,
    stem: 'Un riesgo típico al implantar “calidad” en AAPP es:',
    options: [
      'Escuchar sistemáticamente a la ciudadanía y cerrar el ciclo de mejora',
      'Formar al personal en estándares de atención y criterios de equidad',
      'Confundir proliferación documental con mejora real del servicio prestado',
      'Definir indicadores de plazo, retrabajo y cumplimiento de compromisos',
    ],
    correct: 2,
    explanation:
      'Correcta: C. La burocratización documental sin impacto en el servicio es un fallo clásico. A es una práctica deseable, no el riesgo; B tampoco es el riesgo señalado.',
    tags: ['calibre'],
  },
  {
    id: 't3-10',
    temaId: 3,
    stem: 'La calidad percibida se explica mejor como:',
    options: [
      'La conformidad exclusivamente técnica del expediente, con independencia de la expectativa del usuario',
      'El número de páginas del manual de calidad aprobado',
      'Un concepto ajeno a las AAPP porque el ciudadano no es “cliente”',
      'El resultado de comparar expectativas con la experiencia vivida en la prestación (más evidencias tangibles que la acompañan)',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Expectativa frente a experiencia (y señales tangibles). A ignora la dimensión percibida; B confunde documento con percepción.',
    tags: ['calibre'],
  },
  {
    id: 't3-11',
    temaId: 3,
    stem: 'Respecto a las cuatro características clásicas del servicio, señale la INCORRECTA:',
    options: [
      'La intangibilidad permite almacenar el servicio como stock físico indefinido',
      'La heterogeneidad se relaciona con la variabilidad entre prestaciones',
      'La perecibilidad aconseja gestionar demanda y capacidad',
      'La inseparabilidad implica que el usuario suele intervenir en el proceso',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Lo intangible no se almacena como producto (esa afirmación es la incorrecta). B describe bien la heterogeneidad; C es correcta sobre perecibilidad.',
    tags: ['calibre'],
  },
  {
    id: 't3-12',
    temaId: 3,
    stem: 'En servicios públicos, “equidad” y “personalización legítima” se relacionan así:',
    options: [
      'La equidad exige trato idéntico en todo detalle, por lo que está prohibida cualquier adaptación al caso',
      'Se busca igualdad de trato en lo esencial (criterios, plazos, derechos) y adaptación razonable cuando el caso lo requiere, sin arbitrariedad',
      'La personalización siempre prevalece sobre la legalidad y el trato igualitario',
      'Solo es un dilema del sector privado; en AAPP no hay tensión entre ambos',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Equidad no es rigidismo ni personalización caprichosa. A absolutiza la uniformidad; C absolutiza la personalización frente a la legalidad.',
    tags: ['calibre'],
  },
  {
    id: 't3-13',
    temaId: 3,
    stem: 'El “momento de verdad” en la prestación de un servicio público es:',
    options: [
      'El instante en que se aprueba el presupuesto provincial',
      'Solo la auditoría externa de tercera parte',
      'La publicación de la norma en el BOP, sin relación con la prestación',
      'Cualquier interacción en la que la persona usuaria juzga la calidad a partir de lo vivido y las evidencias percibidas',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Es el encuentro crítico usuario–organización. A desplaza el concepto a un acto presupuestario; B lo confunde con control externo.',
    tags: ['calibre'],
  },
  {
    id: 't3-14',
    temaId: 3,
    stem: 'Para mitigar la heterogeneidad sin perder flexibilidad útil, lo MÁS adecuado es:',
    options: [
      'Estandarizar lo crítico (procedimientos, formación, checklists) y dejar margen documentado para excepciones justificadas',
      'Prohibir cualquier procedimiento escrito para “empoderar” al empleado',
      'Sustituir la formación por controles punitivos tras cada reclamación',
      'Ignorar la variabilidad porque “cada caso es único” y no cabe aprendizaje',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Estándares en lo esencial más excepciones controladas. B elimina el ancla de consistencia; C es reactivo y tardío.',
    tags: ['calibre'],
  },
  {
    id: 't3-15',
    temaId: 3,
    stem: 'En una ventanilla con fuerte estacionalidad, la perecibilidad sugiere prioritariamente:',
    options: [
      'Ampliar el archivo físico de expedientes para “guardar capacidad”',
      'Gestionar picos con planificación de turnos, citas, canales alternativos y redistribución temporal de capacidad',
      'Cerrar el servicio en picos para que la demanda se autocorriga',
      'Medir solo la satisfacción anual y no la ocupación diaria de la capacidad',
    ],
    correct: 1,
    explanation:
      'Correcta: B. La capacidad no usada se pierde: hay que alinear oferta y demanda. A confunde archivo con capacidad de prestación; C empeora el servicio.',
    tags: ['calibre'],
  },
  {
    id: 't3-16',
    temaId: 3,
    stem: 'Señale la afirmación CORRECTA sobre transparencia y calidad en AAPP:',
    options: [
      'La transparencia es opcional si el servicio es técnicamente correcto',
      'La transparencia sustituye por sí sola a la mejora de procesos',
      'Publicar compromisos e indicadores puede formar parte de la calidad percibida y de la rendición de cuentas, siempre que sean veraces y accionables',
      'Solo aplica a empresas cotizadas, no a Diputaciones',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Transparencia más medición accionable refuerzan la calidad pública. A la degrada a accesorio; B la convierte en talismán.',
    tags: ['calibre'],
  },
  {
    id: 't3-17',
    temaId: 3,
    stem: 'Una cultura de calidad eficaz en servicios públicos se caracteriza sobre todo por:',
    options: [
      'Detectar errores para aprender y corregir el sistema, sin castigar sistemáticamente al mensajero',
      'Ocultar desviaciones para no “manchar” indicadores públicos',
      'Sustituir el liderazgo por más formularios de registro',
      'Priorizar la apariencia documental frente a la experiencia del usuario',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Cultura de aprendizaje frente a culpa. B describe una cultura disfuncional; C reduce el liderazgo a papeles.',
    tags: ['calibre'],
  },
  {
    id: 't3-18',
    temaId: 3,
    stem: 'Comparando producto tangible y servicio, ¿qué consecuencia es MÁS relevante para el control de calidad?',
    options: [
      'En ambos casos el control final sobre stock terminado es igualmente suficiente',
      'En el servicio no cabe ningún estándar porque todo es subjetivo',
      'En el servicio el control debe cubrir también la interacción y la co-producción, no solo un “output” almacenado',
      'En el producto no hay heterogeneidad posible entre unidades',
    ],
    correct: 2,
    explanation:
      'Correcta: C. La inseparabilidad desplaza parte del control al momento de prestación. A proyecta lógica de fábrica; B absolutiza la subjetividad.',
    tags: ['calibre'],
  },
  {
    id: 't3-19',
    temaId: 3,
    stem: 'En una Diputación, múltiples partes interesadas (municipios, ciudadanía, empleados, control) implican que:',
    options: [
      'Basta con maximizar la satisfacción del grupo más ruidoso',
      'Puede haber requisitos en tensión; la calidad debe explicitar prioridades y equilibrios bajo el marco legal',
      'Los empleados nunca generan requisitos de calidad interna',
      'Los órganos de control no condicionan requisitos del servicio',
    ],
    correct: 1,
    explanation:
      'Correcta: B. El mapa público es plural y a veces conflictivo. A es populismo de reclamación; C niega el cliente interno.',
    tags: ['calibre'],
  },
  {
    id: 't3-20',
    temaId: 3,
    stem: 'Señale la INCORRECTA: la medición en servicios públicos…',
    options: [
      'Puede combinar plazos, errores, accesibilidad y satisfacción',
      'Debe servir para aprendizaje y decisión, no solo para “rellenar el cuadro”',
      'Puede incluir percepción y datos de proceso triangulados',
      'Es prescindible si existe un manual de calidad muy extenso',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Documentar no sustituye medir (esa afirmación es la incorrecta). A es un uso legítimo de la medición; B también es un uso correcto.',
    tags: ['calibre'],
  },
  {
    id: 't3-21',
    temaId: 3,
    stem: 'Un ejemplo de evidencia tangible que mitiga la intangibilidad en un trámite provincial sería:',
    options: [
      'Eliminar cualquier registro para “agilizar” la percepción',
      'Comunicar plazos comprometidos, acuses de recibo y estado del expediente de forma clara y accesible',
      'Sustituir la información al usuario por jerga interna del expediente',
      'Medir solo el número de sellos estampados sin informar al interesado',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Señales visibles y comunicación gestionan expectativas. A elimina evidencia útil; C empeora la percepción al ocultar información.',
    tags: ['calibre'],
  },
  {
    id: 't3-22',
    temaId: 3,
    stem: 'Si un servicio está legalmente correcto pero genera reiteradas quejas por trato y claridad, lo MÁS coherente con calidad en AAPP es:',
    options: [
      'Ignorar las quejas porque “cumplir la norma basta”',
      'Suprimir el cauce de reclamaciones para no contaminar indicadores',
      'Cambiar la norma sin diagnosticar el proceso ni las expectativas',
      'Analizar la experiencia (información, tiempos percibidos, trato) sin renunciar a la legalidad, y mejorar el proceso de prestación',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Legalidad y calidad percibida deben coexistir. A niega la escucha; B también niega la escucha.',
    tags: ['calibre'],
  },
  {
    id: 't3-23',
    temaId: 3,
    stem: 'El liderazgo visible en calidad de servicios públicos se manifiesta sobre todo en:',
    options: [
      'Alinear prioridades, recursos y seguimiento; exigir datos y no castigar el reporte de problemas',
      'Delegar toda la calidad en un técnico sin apoyo de recursos ni agenda directiva',
      'Firmar el manual una vez y no revisar resultados ni obstáculos',
      'Priorizar solo la imagen externa frente a la capacidad real del proceso',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Liderazgo = dirección + recursos + seguimiento. B es liderazgo ausente; C es liderazgo simbólico.',
    tags: ['calibre'],
  },
  {
    id: 't3-24',
    temaId: 3,
    stem: 'Respecto a la inseparabilidad, ¿qué afirmación es FALSA?',
    options: [
      'El usuario puede condicionar el resultado (p. ej., documentación incompleta)',
      'Producción y consumo suelen solaparse en el tiempo',
      'La calidad del servicio puede controlarse únicamente al final, como un producto acabado en almacén',
      'Diseñar el proceso “con el usuario dentro” ayuda a prevenir fallos',
    ],
    correct: 2,
    explanation:
      'Correcta: C. La lógica de producto almacenado choca con la inseparabilidad (esa es la falsa). A es consecuencia válida de la co-producción; B también es válida.',
    tags: ['calibre'],
  },
  {
    id: 't3-25',
    temaId: 3,
    stem: 'En la prestación de un servicio de apoyo a municipios pequeños, un factor de calidad MÁS crítico que en un producto industrial típico es:',
    options: [
      'La uniformidad absoluta del resultado, como si fuera un lote industrial sin interacción',
      'El dimensionamiento de capacidad solo al final del ejercicio, sin gestionar picos',
      'La competencia y actitud del personal en la interacción (momento de verdad) y la claridad de la información',
      'La inspección final del “producto terminado” almacenado, sin observar la prestación',
    ],
    correct: 2,
    explanation:
      'Correcta: C. En servicios pesan personas e información en la interacción. A proyecta lógica de fábrica homogénea; D confunde con control de producto almacenado.',
    tags: ['calibre'],
  },
  {
    id: 't3-26',
    temaId: 3,
    stem: 'Señale la opción que mejor describe la relación entre procesos y personas en calidad de servicios:',
    options: [
      'Procesos bien diseñados y personas competentes se refuerzan: el procedimiento reduce variabilidad indeseada y la persona aporta juicio en la frontera',
      'Los procesos sobran si el personal “tiene buena voluntad”',
      'Las personas sobran si el procedimiento está muy detallado',
      'En AAPP basta con el organigrama; procesos y competencias son secundarios',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Proceso y persona se complementan. B absolutiza el polo humano; C absolutiza el polo documental.',
    tags: ['calibre'],
  },
  {
    id: 't3-27',
    temaId: 3,
    stem: 'Un indicador útil para gestionar la perecibilidad en una cita previa sería:',
    options: [
      'Número de páginas del procedimiento de cita',
      'Antigüedad del sello de la unidad',
      'Solo el organigrama del área de atención',
      'Porcentaje de huecos no ocupados / no-shows y ocupación por franja horaria',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Mide uso y pérdida de capacidad en el tiempo. A no informa sobre demanda-capacidad; B tampoco es operativo para capacidad.',
    tags: ['calibre'],
  },
  {
    id: 't3-28',
    temaId: 3,
    stem: 'En calidad pública, “rendición de cuentas” se relaciona con la calidad porque:',
    options: [
      'Sustituye la necesidad de indicadores de servicio',
      'Exige poder explicar qué se prometió, qué se midió y qué se mejoró, no solo “haber trabajado mucho”',
      'Solo aplica a la contabilidad presupuestaria, nunca a resultados de servicio',
      'Es incompatible con medir satisfacción ciudadana',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Accountability vincula compromisos, evidencia y mejora. A separa indebidamente control y calidad; C reduce mal el alcance.',
    tags: ['calibre'],
  },
  {
    id: 't3-29',
    temaId: 3,
    stem: 'Señale la INCORRECTA sobre la gestión de expectativas en servicios públicos:',
    options: [
      'Comunicar plazos realistas puede reducir la brecha expectativa–experiencia',
      'Prometer por encima de la capacidad del proceso suele degradar la calidad percibida',
      'Las Cartas de Servicios, si existen, deben alinearse con la capacidad real',
      'Cuanto más se prometa en plazos, mejor será siempre la calidad percibida, aunque no se cumpla',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Prometer de más y no cumplir empeora la percepción (esa afirmación es la incorrecta). A es una práctica coherente; B también es correcta.',
    tags: ['calibre'],
  },
  {
    id: 't3-30',
    temaId: 3,
    stem: 'Si dos empleados aplican criterios distintos a casos equivalentes, el problema se asocia principalmente a:',
    options: [
      'Intangibilidad pura, sin relación con heterogeneidad',
      'Heterogeneidad no mitigada (falta de estándar, formación o supervisión útil)',
      'Perecibilidad de la capacidad no usada',
      'Inexistencia de usuarios en el servicio público',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Variabilidad entre prestaciones = heterogeneidad mal gestionada. A confunde características del servicio; C alude a otro fenómeno.',
    tags: ['calibre'],
  },
  {
    id: 't3-31',
    temaId: 3,
    stem: 'En el diseño de un servicio provincial digitalizado, ¿qué riesgo de calidad es MÁS plausible?',
    options: [
      'Que la digitalización elimine automáticamente toda heterogeneidad y toda necesidad de formación',
      'Que dejen de existir partes interesadas municipales',
      'Que se mejore el canal pero se mantengan fricciones de información, excepciones y soporte al usuario no digital',
      'Que la legalidad deje de aplicar al trámite electrónico',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Digitalizar un canal no borra fricciones ni exclusiones. A es un mito tecnológico; B es una falsedad institucional.',
    tags: ['calibre'],
  },
  {
    id: 't3-32',
    temaId: 3,
    stem: 'La afirmación MÁS alineada con calidad en gestión de servicios públicos es:',
    options: [
      'Hay que combinar mandato legal, procesos consistentes, personas competentes, medición útil y escucha a destinatarios',
      'La satisfacción basta aunque se vulnere la igualdad de trato',
      'El manual ISO sustituye al liderazgo y a la cultura de mejora',
      'Solo importan los indicadores internos; la percepción del usuario es ruido',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Integra el marco público con los factores clave de implantación. B sacrifica la equidad; C absolutiza el documento.',
    tags: ['calibre'],
  },
]
