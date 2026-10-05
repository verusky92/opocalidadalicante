import type { Question } from '../../types'

/** Tema 7: Evaluación y mejora de procesos. */
export const TEMA_07_QUESTIONS: Question[] = [
  {
    id: 't7-01',
    temaId: 7,
    stem: 'Que un proceso esté “bajo control” estadístico significa, con rigor, que:',
    options: [
      'La variación observada se explica por causas comunes, sin indicios de causas especiales',
      'No existe ninguna variación en plazos, errores ni carga de trabajo',
      'El proceso está necesariamente certificado conforme a ISO 9001',
      'Ya no hace falta medir, porque la estabilidad es permanente',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Bajo control = solo causas comunes (sistema estable). B confunde control con variación cero. C mezcla control con certificación. D niega el seguimiento continuo.',
    tags: ['calibre'],
  },
  {
    id: 't7-02',
    temaId: 7,
    stem: 'La capacidad de un proceso se refiere fundamentalmente a:',
    options: [
      'El número de puestos del organigrama asignados al área',
      'La aptitud para cumplir especificaciones o requisitos de forma consistente',
      'Los metros cuadrados del archivo o de la oficina de atención',
      'El presupuesto de comunicación o marketing institucional',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Capacidad = aptitud frente a requisitos/especificaciones. A, C y D miden recursos o soporte, no capacidad del proceso.',
    tags: ['calibre'],
  },
  {
    id: 't7-03',
    temaId: 7,
    stem: 'Señale la afirmación CORRECTA sobre control y capacidad:',
    options: [
      'Si el proceso está bajo control, automáticamente es capaz de cumplir el estándar',
      'La capacidad suficiente elimina por sí sola todas las causas comunes',
      'Un proceso puede estar bajo control y ser incapaz (estable pero fuera de especificación)',
      'Las causas especiales deben ignorarse si la media “parece razonable”',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Estabilidad ≠ capacidad: puede haber un sistema estable que sistemáticamente incumple plazos o calidad. A confunde ambos. B y D son falsas.',
    tags: ['calibre'],
  },
  {
    id: 't7-04',
    temaId: 7,
    stem: 'Tratar una causa común como si fuera especial (tampering) suele producir:',
    options: [
      'Mejora sostenible del sistema sin necesidad de rediseño',
      'Eliminación definitiva del ciclo PDCA en la unidad',
      'Certificación automática del proceso por tercera parte',
      'Sobreajuste y, a menudo, más variabilidad e inestabilidad',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Reaccionar a ruido del sistema (causa común) como si fuera señal especial empeora la variación (Deming). A–C no describen el efecto típico del tampering.',
    tags: ['calibre'],
  },
  {
    id: 't7-05',
    temaId: 7,
    stem: 'En el ciclo PDCA, la fase Act (Actuar) correctamente aplicada consiste en:',
    options: [
      'Planificar de nuevo sin haber ejecutado ni verificado el plan previo',
      'Estandarizar lo que funciona o corregir el plan tras verificar resultados',
      'Ejecutar cambios masivos sin fase de verificación (Check)',
      'Archivar el plan como “hecho” sin incorporar aprendizajes al estándar',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Act cierra el ciclo: estandarizar o replanificar según la verificación. A salta Do/Check. C omite Check. D no actúa sobre el sistema.',
    tags: ['calibre'],
  },
  {
    id: 't7-06',
    temaId: 7,
    stem: 'Una señal típica de causa especial en un gráfico de control es:',
    options: [
      'La variación habitual y aleatoria propia del sistema estable',
      'Una media estable con puntos dentro de límites sin patrones anómalos',
      'Un punto fuera de límites de control o un patrón no aleatorio relevante',
      'Un histograma simétrico sin outliers en un periodo estable',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Puntos fuera de límites o rachas/patrones indican causa especial. A, B y D describen comportamiento compatible con causas comunes.',
    tags: ['calibre'],
  },
  {
    id: 't7-07',
    temaId: 7,
    stem: 'Ante una causa especial detectada en el proceso de expedientes, la respuesta adecuada es:',
    options: [
      'Investigar de inmediato el factor asignable y eliminar o contener la causa',
      'Ignorarla, porque “la media del mes ya cuadrará”',
      'Cambiar el estándar de servicio sin analizar el episodio',
      'Tratarla como ruido del sistema y no registrar evidencia',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Las causas especiales exigen investigación y actuación sobre el factor asignable. B–D son omisiones o respuestas incorrectas.',
    tags: ['calibre'],
  },
  {
    id: 't7-08',
    temaId: 7,
    stem: 'Si el proceso está estable pero incapaz de cumplir el plazo legal/compromiso, lo pertinente es:',
    options: [
      'Exhortar al personal a “esforzarse más” sin cambiar el sistema',
      'Bajar el estándar en silencio sin análisis de capacidad',
      'Dejar de medir plazos para no generar alarmas',
      'Rediseñar o mejorar el sistema (método, recursos, interfaz), no solo exhortar',
    ],
    correct: 3,
    explanation:
      'Correcta: D. La incapacidad estable es problema de sistema: hace falta mejora/rediseño. A–C no atacan la causa estructural.',
    tags: ['calibre'],
  },
  {
    id: 't7-09',
    temaId: 7,
    stem: 'Respecto de Cp y Cpk, señale la afirmación CORRECTA:',
    options: [
      'Cp y Cpk miden lo mismo: ambos ignoran el centrado respecto a la especificación',
      'Cpk es siempre mayor que Cp cuando el proceso está descentrado',
      'Cp refleja potencial (dispersión vs tolerancia); Cpk penaliza el descentrado',
      'Ambos sustituyen a los gráficos de control y detectan causas especiales',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Cp mira la dispersión frente a tolerancias; Cpk incorpora el centrado. A es falsa. B es al revés (Cpk ≤ Cp). D confunde índices de capacidad con control estadístico.',
    tags: ['calibre'],
  },
  {
    id: 't7-10',
    temaId: 7,
    stem: 'Señale la INCORRECTA sobre variabilidad en un proceso de servicio público:',
    options: [
      'Parte de la variabilidad es inherente al sistema (causas comunes)',
      'Reducir variabilidad indeseada suele mejorar previsibilidad y equidad de trato',
      'La medición ayuda a distinguir ruido del sistema de señales de descontrol',
      'Toda variabilidad es indeseable y debe eliminarse, incluida la adaptación reglada al caso',
    ],
    correct: 3,
    explanation:
      'Correcta: D (es la incorrecta). No toda variación es “mala”: en servicios puede haber adaptación legítima; lo crítico es la variabilidad indeseada. A, B y C son correctas.',
    tags: ['calibre'],
  },
  {
    id: 't7-11',
    temaId: 7,
    stem: 'El diagrama de Ishikawa (causa-efecto) se usa preferentemente para:',
    options: [
      'Priorizar qué pocos problemas concentran la mayor parte del impacto (Pareto)',
      'Representar la secuencia temporal de actividades del proceso (flujograma)',
      'Delimitar proveedores, entradas, salidas y clientes (SIPOC)',
      'Estructurar hipótesis de causas de un efecto (método, máquina, material, mano de obra…)',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Ishikawa organiza causas potenciales. A es Pareto. B es flujograma. C es SIPOC. Confundir estas herramientas es error típico de test.',
    tags: ['calibre'],
  },
  {
    id: 't7-12',
    temaId: 7,
    stem: 'El principio de Pareto en mejora de procesos indica, en esencia, que:',
    options: [
      'Todas las causas tienen el mismo peso y deben atacarse a la vez',
      'Unos pocos tipos de defecto/causa suelen concentrar gran parte del impacto',
      'Solo importa la media; la estratificación no aporta información',
      'El 100 % de los problemas se resuelve cambiando el organigrama',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Pareto prioriza el “vital few”. A niega la priorización. C y D no son el principio de Pareto.',
    tags: ['calibre'],
  },
  {
    id: 't7-13',
    temaId: 7,
    stem: 'Los “5 Porqués” son una técnica orientada a:',
    options: [
      'Profundar hacia la causa raíz preguntando reiteradamente “¿por qué?”',
      'Sustituir cualquier medición cuantitativa del proceso',
      'Certificar el SGC sin auditoría ni evidencias',
      'Dibujar el mapa estratégico del CMI en cuatro perspectivas',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Es análisis cualitativo de causa raíz. B–D le atribuyen funciones que no tiene.',
    tags: ['calibre'],
  },
  {
    id: 't7-14',
    temaId: 7,
    stem: 'Un uso INCORRECTO del PDCA en una unidad administrativa sería:',
    options: [
      'Planificar un piloto, ejecutarlo, medir impacto y estandarizar si funciona',
      'Verificar resultados antes de generalizar el cambio a todo el servicio',
      'Actuar corrigiendo el plan cuando los datos del Check lo desmienten',
      'Implantar el cambio a gran escala y saltarse la verificación “por urgencia política”',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Saltar Check/Act degrada el PDCA a mera ejecución. A, B y C sí respetan el ciclo.',
    tags: ['calibre'],
  },
  {
    id: 't7-15',
    temaId: 7,
    stem: 'Para evaluar si un proceso de atención cumple un compromiso de plazo, lo MÁS adecuado es:',
    options: [
      'Confiar solo en la percepción informal de los mandos intermedios',
      'Medir la distribución de tiempos (no solo la media) frente al estándar',
      'Usar únicamente el número de quejas, sin datos de ciclo',
      'Comparar el organigrama con el de otra provincia sin medir tiempos',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Capacidad y cumplimiento se ven en la distribución frente al umbral, no solo en anécdotas o medias. A, C y D son insuficientes o ajenos.',
    tags: ['calibre'],
  },
  {
    id: 't7-16',
    temaId: 7,
    stem: 'Señale la distinción CORRECTA entre causas comunes y especiales:',
    options: [
      'Comunes = ruido del sistema; especiales = factores asignables que desestabilizan',
      'Comunes = siempre culpables individuales; especiales = siempre diseño del sistema',
      'Comunes = solo en industria; especiales = solo en AAPP',
      'No hay diferencia operativa: ambos se tratan igual en todo caso',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Esa es la distinción clásica y su implicación de gestión. B invierte responsabilidades típicas. C es falsa. D niega el diagnóstico diferenciado.',
    tags: ['calibre'],
  },
  {
    id: 't7-17',
    temaId: 7,
    stem: 'Tras una mejora piloto (Do) en un proceso, la fase Check debe:',
    options: [
      'Declarar el éxito sin datos para “no desmotivar” al equipo',
      'Cambiar el indicador hasta que el resultado salga favorable',
      'Comparar resultados con la línea base y los criterios de éxito definidos en Plan',
      'Archivar el piloto sin contraste porque “ya se implantó”',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Check verifica contra lo planificado y la línea base. A, B y D invalidan el aprendizaje del ciclo.',
    tags: ['calibre'],
  },
  {
    id: 't7-18',
    temaId: 7,
    stem: 'En AAPP, mejorar un proceso estable e incapaz suele exigir, entre otras cosas:',
    options: [
      'Más exhortaciones y sanciones individuales como única palanca',
      'Cambios de método, interfaces, carga, digitalización o diseño del flujo',
      'Ocultar los incumplimientos de plazo en el cuadro de mando',
      'Eliminar estándares legales porque “el sistema no da”',
    ],
    correct: 1,
    explanation:
      'Correcta: B. La mejora del sistema ataca método y diseño. A es insuficiente. C y D son incorrectas (opacidad / ilegalidad).',
    tags: ['calibre'],
  },
  {
    id: 't7-19',
    temaId: 7,
    stem: 'Un histograma de tiempos de resolución es útil porque:',
    options: [
      'Muestra la forma de la distribución (cola, multimodalidad) más allá de la media',
      'Sustituye al SIPOC como definición del alcance del proceso',
      'Certifica la conformidad legal del acto administrativo',
      'Identifica por sí solo al dueño de proceso en el organigrama',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Visualiza la distribución. B, C y D le atribuyen funciones de delimitación, legalidad o gobernanza que no tiene.',
    tags: ['calibre'],
  },
  {
    id: 't7-20',
    temaId: 7,
    stem: 'Señale la afirmación INCORRECTA sobre gráficos de control:',
    options: [
      'Ayudan a distinguir señales (causas especiales) de ruido (causas comunes)',
      'Requieren datos en el tiempo y criterios de interpretación de patrones',
      'Garantizan por sí solos que el proceso cumpla la especificación o el plazo legal',
      'No sustituyen el análisis de capacidad frente a requisitos del servicio',
    ],
    correct: 2,
    explanation:
      'Correcta: C (es la incorrecta). Control ≠ capacidad: un proceso bajo control puede incumplir requisitos. A, B y D son correctas.',
    tags: ['calibre'],
  },
  {
    id: 't7-21',
    temaId: 7,
    stem: 'Priorizar acciones de mejora con Pareto + impacto/esfuerzo es preferible a:',
    options: [
      'Atacar a la vez todos los síntomas sin criterio de concentración del problema',
      'Medir la línea base antes de intervenir',
      'Verificar el efecto de la acción con datos posteriores',
      'Estandarizar la mejora cuando Check confirma el beneficio',
    ],
    correct: 0,
    explanation:
      'Correcta: A. La priorización evita dispersión ineficaz. B–D son buenas prácticas del ciclo de mejora, no el contraste negativo.',
    tags: ['calibre'],
  },
  {
    id: 't7-22',
    temaId: 7,
    stem: 'Si aparecen rachas de puntos por encima del promedio en un indicador de errores, lo más razonable es:',
    options: [
      'Asumir que es azar puro y no investigar nunca',
      'Cambiar la especificación para que “entre” en el gráfico',
      'Tratarlo como posible señal de causa especial y analizar el periodo',
      'Eliminar el indicador porque “genera ruido político”',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Patrones no aleatorios sugieren causa especial. A, B y D evitan el diagnóstico o manipulan el estándar/indicador.',
    tags: ['calibre'],
  },
  {
    id: 't7-23',
    temaId: 7,
    stem: 'La mejora continua en procesos públicos se sostiene mejor cuando:',
    options: [
      'Se celebran cambios sin medir impacto ni estandarizar el nuevo método',
      'Hay ciclo PDCA, datos fiables, dueño del proceso y aprendizaje sin castigar la detección de errores',
      'Solo interviene la dirección política, sin personal técnico del proceso',
      'Se cambia el procedimiento cada semana sin línea base ni Check',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Mejora sostenible = método + datos + gobernanza + cultura de aprendizaje. A, C y D son patrones frágiles o erráticos.',
    tags: ['calibre'],
  },
  {
    id: 't7-24',
    temaId: 7,
    stem: 'Confundir SIPOC con flujograma en un supuesto de mejora lleva típicamente a:',
    options: [
      'Delimitar bien el alcance antes de detallar actividades',
      'Usar Pareto para priorizar tipos de defecto',
      'Aplicar 5 Porqués sobre una causa raíz bien definida',
      'Perderse en el detalle de pasos sin haber fijado proveedores, salidas y clientes',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Si se salta el encuadre (SIPOC) al detalle (flujo), el análisis se dispersa. A–C son usos correctos de otras herramientas.',
    tags: ['calibre'],
  },
  {
    id: 't7-25',
    temaId: 7,
    stem: 'Un proceso “capaz” respecto de un estándar de plazo significa, en la práctica, que:',
    options: [
      'La gran mayoría de las unidades se completan dentro de la especificación de forma consistente',
      'La media está cerca del plazo, aunque casi la mitad incumpla sistemáticamente',
      'Existe un procedimiento PDF, con independencia de los tiempos reales',
      'El organigrama tiene suficientes jefaturas, sin mirar la distribución de tiempos',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Capacidad mira el cumplimiento consistente frente a especificación. B confunde media con capacidad. C y D no miden desempeño temporal.',
    tags: ['calibre'],
  },
  {
    id: 't7-26',
    temaId: 7,
    stem: 'Estandarizar una mejora tras un PDCA exitoso implica:',
    options: [
      'Volver al método anterior para “no generar resistencia”',
      'Actualizar procedimiento, formación, controles e indicadores al nuevo método',
      'Mantener el cambio solo en la cabeza del impulsor del piloto',
      'Eliminar la medición porque “ya está resuelto para siempre”',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Act = incorporar al estándar operativo. A, C y D impiden sostener la mejora.',
    tags: ['calibre'],
  },
  {
    id: 't7-27',
    temaId: 7,
    stem: 'Señale la afirmación MÁS precisa sobre “exhortar” ante un proceso incapaz:',
    options: [
      'Suele bastar si el personal “se motiva”, aunque el método sea el mismo',
      'Sustituye con ventaja a la mejora del sistema y a la inversión en capacidad',
      'Es la fase Act del PDCA cuando no hay datos disponibles',
      'No corrige un sistema incapaz: hace falta cambiar método, diseño o recursos',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Mensaje clásico de mejora de sistemas: no se arregla la incapacidad solo con presión individual. A–C sobrevaloran la exhortación.',
    tags: ['calibre'],
  },
  {
    id: 't7-28',
    temaId: 7,
    stem: 'Al analizar causas de retrasos, mezclar en el mismo saco “falta de personal puntual por baja” y “diseño del flujo con doble registro” es un error porque:',
    options: [
      'Ambas son siempre causas especiales y se tratan igual',
      'Ambas son siempre causas comunes y no requieren acción',
      'Pueden ser tipos distintos (especial vs común/sistémica) y exigen respuestas distintas',
      'Ninguna debe analizarse en AAPP por ser “inevitables”',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Una baja puntual puede ser especial; un doble registro es diseño del sistema (común). El tratamiento difiere. A, B y D borran el diagnóstico.',
    tags: ['calibre'],
  },
  {
    id: 't7-29',
    temaId: 7,
    stem: 'La línea base antes de una mejora sirve para:',
    options: [
      'Contrastar después si hubo impacto real y no solo percepción de cambio',
      'Justificar no medir nunca más tras el piloto',
      'Sustituir el Plan del PDCA por intuición de dirección',
      'Evitar definir criterios de éxito del cambio',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Sin línea base, Check no puede demostrar efecto. B–D debilitan el ciclo de evidencia.',
    tags: ['calibre'],
  },
  {
    id: 't7-30',
    temaId: 7,
    stem: 'En evaluación de procesos, “variabilidad” se entiende mejor como:',
    options: [
      'Sinónimo exacto de incapacidad legal del acto administrativo',
      'Dispersión del desempeño entre casos, turnos o periodos',
      'Número de procedimientos publicados en la sede electrónica',
      'Diferencia entre misión y visión en el plan estratégico',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Variabilidad = dispersión del proceso. A, C y D confunden con legalidad, documentación o estrategia.',
    tags: ['calibre'],
  },
  {
    id: 't7-31',
    temaId: 7,
    stem: 'Un indicador de mejora útil tras un rediseño de proceso debería:',
    options: [
      'Cambiar de definición cada mes para facilitar el relato de éxito',
      'Ser ajeno al problema que se pretendía resolver',
      'Permitir comparar antes/después con definición estable y datos fiables',
      'Ocultarse al dueño del proceso para “no sesgar” su conducta',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Comparabilidad y fiabilidad son esenciales para Check. A, B y D invalidan la evaluación.',
    tags: ['calibre'],
  },
  {
    id: 't7-32',
    temaId: 7,
    stem: 'Señale la secuencia MÁS coherente de mejora en un supuesto tipo oposición:',
    options: [
      'Estandarizar → exhortar → no medir → archivar',
      'Cambiar organigrama → eliminar indicadores → declarar excelencia',
      'Auditar solo documentación → no mirar tiempos → cerrar sin Act',
      'Delimitar proceso → cuantificar problema → analizar causas → PDCA con verificación',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Encaja SIPOC/flujo → Pareto/datos → Ishikawa/5P → PDCA. A–C son secuencias incompletas o perversas típicas de mala praxis.',
    tags: ['calibre'],
  },
]
