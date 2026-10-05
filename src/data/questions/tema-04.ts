import type { Question } from '../../types'

/** Tema 4: Planificación estratégica. */
export const TEMA_04_QUESTIONS: Question[] = [
  {
    id: 't4-01',
    temaId: 4,
    stem: 'En planificación estratégica, la misión se distingue de la visión porque:',
    options: [
      'La misión expresa el propósito / razón de ser actual; la visión describe el futuro deseable y creíble a medio-largo plazo',
      'Son sinónimos perfectos que pueden usarse indistintamente en un plan estratégico',
      'La visión es únicamente el presupuesto anual aprobado por el Pleno',
      'La misión es un indicador lagging del cuadro de mando',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Misión = para qué existimos; visión = hacia dónde vamos. B las confunde; C reduce la visión a presupuesto.',
    tags: ['calibre'],
  },
  {
    id: 't4-02',
    temaId: 4,
    stem: 'Un objetivo estratégico mal formulado típico sería:',
    options: [
      '“Reducir el P90 del tiempo de resolución del servicio X a ≤ 10 días hábiles a 31/12, con responsable del proceso”',
      '“Mejorar la calidad” sin meta, plazo, indicador ni responsable',
      'Un objetivo operativo SMART enlazado al despliegue del plan',
      'Una iniciativa con presupuesto, hitos y fecha de revisión',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Carece de los elementos mínimos de gestión (meta, medida, tiempo). A sí es gestionable; C también es una formulación válida.',
    tags: ['calibre'],
  },
  {
    id: 't4-03',
    temaId: 4,
    stem: 'SMART, aplicado con rigor, exige que el objetivo sea:',
    options: [
      'Secreto, Multifásico, Ambiguo, Retórico y Tácito',
      'Solo inspiracional, sin métrica ni fecha',
      'Específico, Medible, Alcanzable, Relevante y Temporalmente definido',
      'Independiente de la misión y de las prioridades institucionales',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Es el acrónimo clásico de formulación de objetivos. A es un anti-SMART; B niega la medibilidad.',
    tags: ['calibre'],
  },
  {
    id: 't4-04',
    temaId: 4,
    stem: 'El despliegue estratégico (“cascada”) consiste en:',
    options: [
      'Publicar la misión y dar por terminada la planificación',
      'Multiplicar indicadores contradictorios a propósito para “cubrir todo”',
      'Delegar la estrategia solo en un consultor externo sin ownership interno',
      'Traducir prioridades institucionales en objetivos de unidades/procesos e iniciativas financiables, manteniendo coherencia vertical',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Cascada = coherencia vertical de prioridades a acción. A corta el ciclo; B degrada el sistema de medición.',
    tags: ['calibre'],
  },
  {
    id: 't4-05',
    temaId: 4,
    stem: 'Señale la INCORRECTA sobre el ciclo de planificación estratégica:',
    options: [
      'El diagnóstico suele preceder a la formulación de la estrategia',
      'El seguimiento es opcional si el documento estratégico es “bonito” y está bien maquetado',
      'El despliegue concreta la estrategia en planes, objetivos e indicadores',
      'La revisión permite adaptar ante cambios de entorno o de capacidad',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Sin seguimiento no hay gestión estratégica, solo papel (esa afirmación es la incorrecta). A describe una fase válida; C también es correcta.',
    tags: ['calibre'],
  },
  {
    id: 't4-06',
    temaId: 4,
    stem: 'El análisis DAFO en el diagnóstico estratégico:',
    options: [
      'Solo mira el interior de la organización',
      'Solo mira el exterior (oportunidades y amenazas)',
      'Combina análisis interno (fortalezas/debilidades) y externo (oportunidades/amenazas)',
      'Sustituye para siempre a los indicadores de proceso y al seguimiento',
    ],
    correct: 2,
    explanation:
      'Correcta: C. DAFO integra interno y externo. A lo mutila al quedarse solo en lo interno; B lo mutila al quedarse solo en lo externo.',
    tags: ['calibre'],
  },
  {
    id: 't4-07',
    temaId: 4,
    stem: 'Los valores institucionales en un plan estratégico sirven principalmente para:',
    options: [
      'Sustituir los objetivos medibles del despliegue',
      'Fijar el presupuesto detallado de cada partida',
      'Definir el organigrama de la Diputación',
      'Orientar criterios de conducta y decisión coherentes con la misión, más allá de eslóganes',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Valores = cómo actuamos. A les atribuye función de objetivos; B les atribuye función presupuestaria.',
    tags: ['calibre'],
  },
  {
    id: 't4-08',
    temaId: 4,
    stem: 'La diferencia clave entre objetivo estratégico y operativo es:',
    options: [
      'El estratégico marca rumbo a medio/largo plazo; el operativo concreta metas de corto plazo con responsable y fecha',
      'No hay diferencia: ambos son siempre anuales e idénticos',
      'El operativo define la misión institucional; el estratégico solo fija tareas diarias de ventanilla',
      'El estratégico no necesita alineación con la misión',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Horizonte y concreción diferencian ambos niveles. B los iguala indebidamente; C invierte los roles.',
    tags: ['calibre'],
  },
  {
    id: 't4-09',
    temaId: 4,
    stem: 'Sin alineación con el presupuesto, el plan estratégico en una AAPP suele:',
    options: [
      'Ejecutarse automáticamente por el solo hecho de publicarse',
      'Sustituir la necesidad de indicadores de seguimiento',
      'Quedar en declaración de intenciones: las iniciativas no financiadas no se despliegan',
      'Obligar al Pleno a aprobar cualquier gasto sin procedimiento',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Estrategia sin recursos = papel. A es “magia” administrativa; B confunde planificación con control.',
    tags: ['calibre'],
  },
  {
    id: 't4-10',
    temaId: 4,
    stem: 'Señale la afirmación MÁS correcta sobre la visión en AAPP:',
    options: [
      'Debe ser deliberadamente inalcanzable para “motivar” sin credibilidad',
      'Puede omitirse si ya existe un organigrama',
      'Equivale siempre al resultado del último ejercicio presupuestario',
      'Debe ser deseable y creíble, orientando prioridades sin contradecir el marco legal y competencial',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Visión ambiciosa pero plausible y compatible con el mandato. A la vuelve retórica; B la sustituye por estructura.',
    tags: ['calibre'],
  },
  {
    id: 't4-11',
    temaId: 4,
    stem: 'En el ciclo diagnóstico → formulación → despliegue → seguimiento, el error más grave en el seguimiento sería:',
    options: [
      'Recoger datos sin decidir ni asignar responsables de corrección',
      'Revisar indicadores con dueños y decidir acciones correctoras',
      'Ajustar metas ante evidencia de cambio de entorno',
      'Vincular el seguimiento al cuadro de mando o panel de indicadores',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Medir sin actuar vacía el ciclo. B es práctica de seguimiento útil; C también es adecuada.',
    tags: ['calibre'],
  },
  {
    id: 't4-12',
    temaId: 4,
    stem: 'Un objetivo “alcanzable” (la A de SMART) NO significa:',
    options: [
      'Que sea realista dados recursos, capacidad y plazos',
      'Que deba ser trivialmente fácil para no incomodar a nadie',
      'Que pueda exigirse un esfuerzo razonable de mejora',
      'Que considere restricciones legales y de competencia provincial',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Alcanzable no equivale a complaciente (esa es la lectura incorrecta). A sí matiza el realismo; C también es compatible con SMART.',
    tags: ['calibre'],
  },
  {
    id: 't4-13',
    temaId: 4,
    stem: 'La formulación estratégica debería partir preferentemente de:',
    options: [
      'Una lista de indicadores inventados sin relación con problemas reales',
      'Solo la opinión del último reclamante, sin más evidencia',
      'La copia literal del plan de otra provincia sin adaptación',
      'Un diagnóstico interno/externo (p. ej. DAFO) y del marco de misión/visión/valores',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Diagnóstico más identidad institucional. A produce planes desconectados; B sesga el diagnóstico.',
    tags: ['calibre'],
  },
  {
    id: 't4-14',
    temaId: 4,
    stem: 'En una Diputación, un objetivo estratégico bien alineado con su papel institucional podría ser:',
    options: [
      'Mejorar la capacidad de asistencia y coordinación a municipios en servicios prioritarios, con metas e indicadores',
      'Maximizar ingresos propios aunque se reduzca la asistencia a municipios con menor capacidad',
      'Eliminar toda cooperación intermunicipal',
      'Sustituir a los Ayuntamientos en todas sus competencias propias',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Encaja con el rol provincial de asistencia/coordinación. B antepone ingresos al mandato de solidaridad; C contradice el marco local.',
    tags: ['calibre'],
  },
  {
    id: 't4-15',
    temaId: 4,
    stem: 'Señale la INCORRECTA sobre los valores en planificación estratégica:',
    options: [
      'Deben ser coherentes con la misión y con comportamientos observables',
      'Sustituyen por sí solos al seguimiento de objetivos e indicadores',
      'Pueden orientar decisiones cuando hay dilemas de priorización',
      'Si no se viven, degeneran en eslóganes sin efecto en la gestión',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Los valores no reemplazan el control de gestión (esa afirmación es la incorrecta). A describe su papel real; C también es correcto.',
    tags: ['calibre'],
  },
  {
    id: 't4-16',
    temaId: 4,
    stem: 'El carácter “relevante” de un objetivo SMART implica sobre todo que:',
    options: [
      'Sea fácil de medir aunque no aporte a la estrategia',
      'Sea el más largo posible en su redacción',
      'Esté alineado con prioridades institucionales y con la misión/visión',
      'Ignore las necesidades de los destinatarios del servicio',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Relevancia = encaje estratégico. A prioriza lo medible vacío; B es un criterio espurio.',
    tags: ['calibre'],
  },
  {
    id: 't4-17',
    temaId: 4,
    stem: 'Una buena práctica de despliegue es:',
    options: [
      'Cascadar pocos objetivos claros a unidades/procesos con indicadores y responsables, evitando la inflación de metas',
      'Asignar cientos de objetivos contradictorios a cada persona',
      'Ocultar el plan a las unidades que deben ejecutarlo',
      'Separar totalmente estrategia y procesos operativos sin interfaces',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Foco y ownership en la cascada. B genera distorsión; C rompe la ejecución.',
    tags: ['calibre'],
  },
  {
    id: 't4-18',
    temaId: 4,
    stem: 'El diagnóstico estratégico interno se centra preferentemente en:',
    options: [
      'Solo en leyes estatales ajenas a la capacidad organizativa',
      'Únicamente en oportunidades y amenazas del entorno externo',
      'Fortalezas y debilidades: recursos, competencias, procesos, cultura, resultados previos',
      'Solo en la percepción ciudadana, sin revisar recursos ni procesos propios',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Lo interno del DAFO son fortalezas y debilidades. A desplaza el foco fuera de la capacidad organizativa; B confunde interno con externo.',
    tags: ['calibre'],
  },
  {
    id: 't4-19',
    temaId: 4,
    stem: 'Si el entorno cambia (nueva norma, crisis de demanda), el ciclo estratégico exige:',
    options: [
      'Mantener el plan intacto para “demostrar firmeza”, aunque esté obsoleto',
      'Revisar supuestos, prioridades e indicadores; adaptar el plan sin fingir que el documento es inmutable',
      'Eliminar todo seguimiento hasta el final del mandato',
      'Sustituir la misión cada semana según titulares de prensa',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Revisión adaptativa del plan. A idolatra el documento; C abandona la gestión.',
    tags: ['calibre'],
  },
  {
    id: 't4-20',
    temaId: 4,
    stem: 'Comparando misión y valores, señale la distinción correcta:',
    options: [
      'La misión es un indicador operativo; los valores son el presupuesto',
      'No hay distinción útil entre ambos conceptos',
      'Los valores definen el futuro deseado; la misión solo fija indicadores operativos anuales',
      'La misión responde al “para qué” institucional; los valores, al “cómo” se actúa',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Para qué frente a cómo. A confunde con métrica/presupuesto; B niega la utilidad de distinguirlos.',
    tags: ['calibre'],
  },
  {
    id: 't4-21',
    temaId: 4,
    stem: 'Un indicador de seguimiento estratégico debería preferentemente:',
    options: [
      'Ser el más complejo posible aunque nadie lo use',
      'Estar ligado a objetivos del plan, con meta, frecuencia de revisión y responsable',
      'Cambiar de definición cada mes sin trazabilidad',
      'Ignorar la calidad de los datos de origen',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Utilidad gerencial del indicador. A produce métrica ornamental; C rompe la comparabilidad.',
    tags: ['calibre'],
  },
  {
    id: 't4-22',
    temaId: 4,
    stem: 'Señale la INCORRECTA sobre planificación estratégica en AAPP:',
    options: [
      'Debe respetar el marco legal y competencial',
      'Puede alinearse con CMI/cuadro de mando si existe',
      'Puede requerir participación de unidades y, en su caso, de partes interesadas relevantes',
      'Puede prometer resultados ilegales si “mejoran el indicador”',
    ],
    correct: 3,
    explanation:
      'Correcta: D. La estrategia no legitima incumplir la legalidad (esa afirmación es la incorrecta). A es una condición válida; B es una práctica válida.',
    tags: ['calibre'],
  },
  {
    id: 't4-23',
    temaId: 4,
    stem: 'La “T” de SMART (temporal) aporta especialmente:',
    options: [
      'Un horizonte que permite verificar cumplimiento y revisar el plan',
      'Una redacción más literaria del objetivo',
      'La posibilidad de aplazar indefinidamente la evaluación',
      'La exclusión de cualquier meta intermedia',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Sin plazo no hay verificación. B es cosmético; C niega el sentido de la T.',
    tags: ['calibre'],
  },
  {
    id: 't4-24',
    temaId: 4,
    stem: 'En el despliegue, relacionar estrategia y procesos implica:',
    options: [
      'Que los procesos operen al margen de las prioridades institucionales',
      'Que la estrategia ignore la capacidad real de los procesos',
      'Que las prioridades se traduzcan en mejoras e indicadores de procesos clave que generan los resultados buscados',
      'Que cada indicador estratégico carezca de dueño',
    ],
    correct: 2,
    explanation:
      'Correcta: C. La estrategia se ejecuta a través de procesos. A describe desalineación; B también es desalineación.',
    tags: ['calibre'],
  },
  {
    id: 't4-25',
    temaId: 4,
    stem: 'Un síntoma de plan estratégico “de escaparate” es:',
    options: [
      'Metas SMART, dueños y revisión periódica con acciones',
      'Cascada coherente a unidades y panel de indicadores',
      'Objetivos vagos, nulo seguimiento y desconexión del presupuesto y de los procesos',
      'Diagnóstico documentado que informa la formulación',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Es el patrón de planificación simbólica. A es rasgo de plan vivo; B también lo es.',
    tags: ['calibre'],
  },
  {
    id: 't4-26',
    temaId: 4,
    stem: 'Fortalezas y oportunidades en DAFO se diferencian porque:',
    options: [
      'Las fortalezas son internas; las oportunidades, del entorno externo',
      'Ambas son siempre factores externos al 100%',
      'Ambas son siempre factores internos al 100%',
      'Las oportunidades son debilidades renombradas',
    ],
    correct: 0,
    explanation:
      'Correcta: A. F internas / O externas. B homogeniza mal; C también homogeniza mal.',
    tags: ['calibre'],
  },
  {
    id: 't4-27',
    temaId: 4,
    stem: 'Para que el seguimiento estratégico sea creíble en una Diputación, lo MÁS necesario es:',
    options: [
      'Un documento largo sin indicadores',
      'Cambiar la misión cada vez que un indicador va mal',
      'Ocultar desviaciones para preservar la imagen del plan',
      'Datos razonablemente fiables, metas claras y foros de revisión con capacidad de decidir',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Fiabilidad del dato más capacidad de decisión. A es solo papel; B destruye la utilidad del sistema.',
    tags: ['calibre'],
  },
  {
    id: 't4-28',
    temaId: 4,
    stem: 'Señale la afirmación CORRECTA sobre objetivos operativos:',
    options: [
      'Deben contradecir deliberadamente los estratégicos para “equilibrar”',
      'Concretan a corto plazo el rumbo estratégico, con medición y ownership',
      'No necesitan responsable ni fecha si son “orientativos”',
      'Sustituyen a la misión institucional',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Operativo = concreción del estratégico. A rompe la alineación; C vacía la gestión.',
    tags: ['calibre'],
  },
  {
    id: 't4-29',
    temaId: 4,
    stem: 'La “S” de SMART (específico) falla cuando el objetivo:',
    options: [
      'Define claramente qué resultado se busca y en qué ámbito',
      'Permite distinguir cumplimiento de incumplimiento',
      'Usa verbos de acción y un alcance delimitado',
      'Se formula como deseo genérico (“ser mejores”) sin delimitar el qué',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Falta de especificidad. A sí cumple el criterio; B también lo cumple.',
    tags: ['calibre'],
  },
  {
    id: 't4-30',
    temaId: 4,
    stem: 'Integrar el plan estratégico con un cuadro de mando ayuda a:',
    options: [
      'Sustituir la legalidad por KPIs',
      'Traducir prioridades en objetivos, indicadores, metas e iniciativas revisables',
      'Eliminar la necesidad de dueños de indicador',
      'Evitar cualquier revisión periódica',
    ],
    correct: 1,
    explanation:
      'Correcta: B. El CMI es vehículo de despliegue y seguimiento. A es conceptualmente ilegal/incorrecto; C vacía el sistema.',
    tags: ['calibre'],
  },
  {
    id: 't4-31',
    temaId: 4,
    stem: 'En el diagnóstico externo de una Diputación, un ejemplo de “amenaza” sería:',
    options: [
      'Una competencia interna bien consolidada del área técnica',
      'Una fortaleza de liderazgo compartida',
      'Un cambio normativo o de financiación que reduce capacidad o aumenta demanda crítica sin recursos',
      'Una oportunidad de colaboración ya aprovechada y consolidada',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Amenaza = factor externo adverso. A es interno (fortaleza); B también es fortaleza interna.',
    tags: ['calibre'],
  },
  {
    id: 't4-32',
    temaId: 4,
    stem: 'La afirmación MÁS sólida sobre planificación estratégica en servicios públicos es:',
    options: [
      'Conecta misión/visión/valores con diagnóstico, objetivos SMART, despliegue financiado y seguimiento con aprendizaje',
      'Basta con una misión inspiradora; el resto es burocracia inútil',
      'El seguimiento es prescindible si hay buena comunicación institucional',
      'Los objetivos no deben ser medibles para no generar tensión',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Resume el ciclo útil de planificación. B fragmenta la gestión; C sabotea el ciclo.',
    tags: ['calibre'],
  },
]
