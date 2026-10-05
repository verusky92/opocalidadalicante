import type { Question } from '../../types'

/** Tema 13: Certificación y acreditación — banco Calibre. */
export const TEMA_13_QUESTIONS: Question[] = [
  {
    id: 't13-01',
    temaId: 13,
    stem: 'La distinción correcta entre certificación y acreditación es:',
    options: [
      'Son sinónimos perfectos en el lenguaje técnico de calidad',
      'Certificación declara conformidad de un sistema/producto/servicio; acreditación reconoce la competencia del evaluador',
      'ENAC certifica necesariamente todos los SGC municipales',
      'Acreditación es un tributo local ligado a la tasa de expedición',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Certificar = conformidad; acreditar = competencia del organismo que evalúa (u otros evaluadores). No son sinónimos; ENAC no certifica “todos” los SGC municipales.',
    tags: ['calibre'],
  },
  {
    id: 't13-02',
    temaId: 13,
    stem: 'ENAC es, en España:',
    options: [
      'La Entidad Nacional de Acreditación',
      'El organismo que certifica por defecto todos los SGC municipales ISO 9001',
      'La agencia europea que sustituye a ISO 9001 en el sector público',
      'El registro único obligatorio de Cartas de Servicios de las Diputaciones',
    ],
    correct: 0,
    explanation:
      'Correcta: A. ENAC acredita (reconoce competencia). No es el certificador “por defecto” de todos los SGC, no sustituye a ISO 9001 ni gestiona el registro de Cartas.',
    tags: ['calibre'],
  },
  {
    id: 't13-03',
    temaId: 13,
    stem: 'Un organismo de certificación de sistemas de gestión, en el esquema habitual ISO 9001:',
    options: [
      'Audita y emite certificados de conformidad según un esquema y un alcance',
      'Acredita laboratorios y organismos de evaluación en sustitución de ENAC',
      'Autoevalúa excelencia pública con el marco CAF y emite reconocimiento EFQM',
      'Publica Cartas de Servicios con fuerza de norma reglamentaria',
    ],
    correct: 0,
    explanation:
      'Correcta: A. El certificador audita y certifica conformidad de sistemas/productos/servicios. No sustituye a ENAC, ni es CAF/EFQM, ni convierte la Carta en reglamento.',
    tags: ['calibre'],
  },
  {
    id: 't13-04',
    temaId: 13,
    stem: 'Elegir un certificador acreditado aporta, de forma más relevante:',
    options: [
      'Mayor confianza en la competencia e imparcialidad del evaluador',
      'Que el certificado sustituya el cumplimiento legal del servicio público',
      'Que ya no hagan falta auditorías internas',
      'Que el alcance del certificado sea infinito',
    ],
    correct: 0,
    explanation:
      'Correcta: A. La acreditación refuerza confianza técnica e imparcialidad. No anula legalidad, auditorías internas ni convierte el alcance en ilimitado.',
    tags: ['calibre'],
  },
  {
    id: 't13-05',
    temaId: 13,
    stem: 'El ciclo típico de certificación de un SGC incluye:',
    options: [
      'Solo la publicación de un logo en la web municipal',
      'Solicitud, auditoría, certificado con vigencia, seguimientos y renovación',
      'Un sorteo entre unidades para otorgar el sello',
      'Una multa automática de ENAC al presentar la solicitud',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Ciclo completo con vigilancia y renovación. Logo, sorteo o multa no describen el proceso técnico de certificación.',
    tags: ['calibre'],
  },
  {
    id: 't13-06',
    temaId: 13,
    stem: 'Autodeclarar “cumplimos ISO 9001” sin evaluación de tercera parte:',
    options: [
      'No constituye certificación de tercera parte',
      'Equivale a acreditación ENAC del ayuntamiento',
      'Sustituye a una autoevaluación CAF con reconocimiento oficial',
      'Es certificación plena idéntica a la de un organismo acreditado',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Sin tercera parte independiente no hay certificación en el sentido habitual del tema. No es ENAC ni CAF ni “certificación plena”.',
    tags: ['calibre'],
  },
  {
    id: 't13-07',
    temaId: 13,
    stem: 'El alcance del certificado:',
    options: [
      'Cubre automáticamente toda la Administración General del Estado',
      'Delimita actividades, centros o procesos cubiertos; no debe invocarse fuera de él',
      'Es un concepto decorativo sin efectos prácticos',
      'Se amplía solo con publicar una Carta de Servicios',
    ],
    correct: 1,
    explanation:
      'Correcta: B. El alcance limita qué está certificado. Usar el sello fuera de ese perímetro es un mal uso típico.',
    tags: ['calibre'],
  },
  {
    id: 't13-08',
    temaId: 13,
    stem: 'Las auditorías de seguimiento/vigilancia del certificado verifican principalmente:',
    options: [
      'Que la organización abandone el SGC tras el primer sello',
      'El mantenimiento de la conformidad a lo largo del tiempo',
      'Que se oculten no conformidades para conservar el logo',
      'Que ENAC certifique de nuevo el mismo alcance cada mes',
    ],
    correct: 1,
    explanation:
      'Correcta: B. La vigilancia comprueba que se mantiene la conformidad. No incentiva abandono ni ocultación; ENAC no “certifica el alcance cada mes”.',
    tags: ['calibre'],
  },
  {
    id: 't13-09',
    temaId: 13,
    stem: 'Suspender o retirar un certificado puede proceder cuando:',
    options: [
      'Hay mejora continua documentada y eficaz',
      'Las auditorías internas detectan oportunidades de mejora menores',
      'Se pierden condiciones de conformidad o se incumplen reglas del esquema',
      'El sistema funciona dentro del alcance y de los plazos de vigilancia',
    ],
    correct: 2,
    explanation:
      'Correcta: C. La pérdida de conformidad o el incumplimiento de reglas del esquema pueden llevar a suspensión/retirada. Mejora y OFI no son, por sí, causa de retirada.',
    tags: ['calibre'],
  },
  {
    id: 't13-10',
    temaId: 13,
    stem: 'La marca o sello de certificación no sustituye:',
    options: [
      'La necesidad de evidencias en las auditorías de seguimiento',
      'La definición de un alcance claro en el certificado',
      'El cumplimiento legal y el deber de prestar el servicio conforme al ordenamiento',
      'La existencia de un organismo de certificación',
    ],
    correct: 2,
    explanation:
      'Correcta: C. El sello no exime de legalidad ni de obligaciones de servicio público. A, C y D son elementos del propio sistema de certificación, no lo que el sello “sustituye”.',
    tags: ['calibre'],
  },
  {
    id: 't13-11',
    temaId: 13,
    stem: 'En el lenguaje del tema, ¿quién acredita normalmente a un organismo de certificación en España?',
    options: [
      'El Pleno de la Diputación en sesión ordinaria',
      'ENAC, como Entidad Nacional de Acreditación',
      'El propio organismo certificador mediante autodeclaración',
      'ISO 9001, que incluye un anexo de acreditación automática',
    ],
    correct: 1,
    explanation:
      'Correcta: B. ENAC acredita competencia. Ni el Pleno, ni la autodeclaración, ni “un anexo de 9001” cumplen ese papel.',
    tags: ['calibre'],
  },
  {
    id: 't13-12',
    temaId: 13,
    stem: 'Confundir certificación ISO 9001 con acreditación ENAC es un error porque:',
    options: [
      'Ambas las emite siempre el mismo departamento municipal de calidad',
      'ENAC solo certifica Cartas de Servicios',
      'Operan en planos distintos: conformidad del sistema frente a competencia del evaluador',
      'ISO 9001 acredita laboratorios y ENAC certifica SGC',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Planos distintos. Las otras invierten roles o inventan funciones (cartas, laboratorios) de forma incorrecta.',
    tags: ['calibre'],
  },
  {
    id: 't13-13',
    temaId: 13,
    stem: 'Un laboratorio de ensayo que busca reconocimiento formal de su competencia técnica suele situarse en el ámbito de:',
    options: [
      'La Carta de Servicios como único instrumento válido',
      'La autoevaluación CAF con sello comercial',
      'La certificación ISO 9001 entendida como acreditación de ensayos',
      'La acreditación (p. ej. frente a ISO/IEC 17025) por un organismo de acreditación',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Competencia de laboratorio → acreditación (17025). 9001 no equivale a acreditar ensayos; Carta/CAF no sustituyen ese reconocimiento.',
    tags: ['calibre'],
  },
  {
    id: 't13-14',
    temaId: 13,
    stem: 'La imparcialidad del organismo de certificación es crítica porque:',
    options: [
      'Permite cobrar extra por ocultar no conformidades graves',
      'Garantiza que el certificado refleje una evaluación creíble, no un “sello comprado”',
      'Hace innecesaria cualquier evidencia objetiva',
      'Sustituye la definición del alcance del certificado',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Sin imparcialidad, el certificado pierde valor. Ocultar NC o prescindir de evidencias contradice el esquema.',
    tags: ['calibre'],
  },
  {
    id: 't13-15',
    temaId: 13,
    stem: 'Respecto a la vigencia del certificado, la afirmación más rigurosa es:',
    options: [
      'Es perpetua e irrevocable una vez publicado el logo',
      'Depende solo de la voluntad política del Presidente, sin auditorías',
      'Se mantiene condicionada a vigilancia, renovación y cumplimiento continuo de condiciones',
      'Caduca al día siguiente de la auditoría inicial en todos los esquemas',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Hay vigencia, seguimiento y condiciones. No es perpetua ni “política pura”, ni suele caducar al día siguiente de forma general.',
    tags: ['calibre'],
  },
  {
    id: 't13-16',
    temaId: 13,
    stem: 'Una Diputación presume públicamente de “estar acreditada ISO 9001”. El matiz técnico correcto es:',
    options: [
      'Es correcta: 9001 es siempre una acreditación ENAC de la Corporación',
      'Es correcta si hay Carta de Servicios publicada',
      'Es incorrecta porque ISO 9001 está derogada en AAPP',
      'Es incorrecta: lo habitual es estar certificada en ISO 9001; la acreditación corresponde a otro plano (p. ej. ENAC sobre evaluadores/laboratorios)',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Uso preciso del lenguaje: SGC → certificación; evaluadores/laboratorios → acreditación. 9001 no está “derogada” en AAPP.',
    tags: ['calibre'],
  },
  {
    id: 't13-17',
    temaId: 13,
    stem: 'El valor de un certificado ISO 9001 para la ciudadanía depende sobre todo de:',
    options: [
      'Que el SGC mejore de verdad procesos y resultados, dentro de un alcance creíble y con organismo competente',
      'Que el logotipo ocupe más espacio que el escudo institucional',
      'Que se oculte el alcance para parecer que cubre toda la Diputación',
      'Que se presente como sustituto de reclamaciones y control legal',
    ],
    correct: 0,
    explanation:
      'Correcta: A. El valor está en gestión real + alcance claro + evaluador competente. Logo grande, alcance engañoso o exención de control restan credibilidad.',
    tags: ['calibre'],
  },
  {
    id: 't13-18',
    temaId: 13,
    stem: 'En el esquema de certificación, la auditoría inicial (o de certificación) se distingue de la de seguimiento en que:',
    options: [
      'La de seguimiento es siempre más superficial y nunca revisa procesos críticos',
      'La inicial la realiza ENAC y la de seguimiento el Pleno',
      'La inicial evalúa de forma completa la conformidad para emitir el certificado; la de seguimiento comprueba el mantenimiento',
      'No existe diferencia conceptual entre ambas',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Inicial → emisión; seguimiento → mantenimiento. No las hacen ENAC/Pleno ni son idénticas.',
    tags: ['calibre'],
  },
  {
    id: 't13-19',
    temaId: 13,
    stem: '¿Qué afirmación sobre no conformidades en certificación es más adecuada?',
    options: [
      'Exigen tratamiento (corrección/acción correctiva) conforme a las reglas del esquema y del SGC',
      'Deben ocultarse para no poner en riesgo el sello',
      'Demuestran automáticamente que la acreditación ENAC es inválida',
      'Impiden para siempre cualquier renovación, aunque se cierren eficazmente',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Las NC se gestionan; ocultarlas es grave. No invalidan ENAC por sí ni condenan eternamente si se cierran bien.',
    tags: ['calibre'],
  },
  {
    id: 't13-20',
    temaId: 13,
    stem: 'La relación entre certificación y modelos de excelencia (EFQM/CAF) más correcta es:',
    options: [
      'La certificación 9001 hace inútil cualquier autoevaluación de excelencia',
      'Pueden complementarse: conformidad de SGC y madurez/excelencia son planos distintos',
      'CAF sustituye a ENAC en la acreditación de certificadores',
      'EFQM es el único camino legal para obtener un certificado ISO',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Complementariedad. No se anulan ni CAF acredita certificadores ni EFQM “emite” ISO.',
    tags: ['calibre'],
  },
  {
    id: 't13-21',
    temaId: 13,
    stem: 'Un certificado con alcance “registro de entrada del edificio A” NO autoriza a afirmar que:',
    options: [
      'Toda la Diputación, en todos sus servicios y sedes, está certificada ISO 9001',
      'Ese proceso concreto está certificado bajo el esquema declarado',
      'Existe un organismo de certificación que evaluó ese alcance',
      'Habrá seguimientos mientras el certificado esté vigente',
    ],
    correct: 0,
    explanation:
      'Correcta: A (lo que no autoriza). Extender el sello a toda la institución más allá del alcance es el abuso típico.',
    tags: ['calibre'],
  },
  {
    id: 't13-22',
    temaId: 13,
    stem: 'La trazabilidad internacional de la acreditación (reconocimientos multilaterales) sirve, en esencia, para:',
    options: [
      'Sustituir las normas ISO por decretos provinciales',
      'Eliminar la necesidad de alcance en los certificados',
      'Convertir a cada Ayuntamiento en entidad de acreditación',
      'Que un certificado basado en acreditación reconocida inspire confianza más allá de fronteras nacionales',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Los acuerdos de reconocimiento refuerzan confianza transfronteriza. No eliminan normas ISO, alcances ni crean “ENAC municipales”.',
    tags: ['calibre'],
  },
  {
    id: 't13-23',
    temaId: 13,
    stem: 'Si un proveedor exhibe un certificado dudoso (organismo no acreditado, alcance confuso), la actitud más profesional es:',
    options: [
      'Aceptarlo sin comprobación porque “cualquier sello vale”',
      'Sustituir la comprobación por una encuesta de clima al proveedor',
      'Verificar organismo, acreditación, alcance, vigencia y coherencia con el servicio contratado',
      'Pedir solo el logo en alta resolución para el pliego',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Due diligence sobre el certificado. Logo o encuesta no validan conformidad.',
    tags: ['calibre'],
  },
  {
    id: 't13-24',
    temaId: 13,
    stem: 'La certificación de un SGC por tercera parte se diferencia de la auditoría interna en que:',
    options: [
      'La de tercera parte la realiza un organismo independiente con fines de evaluación externa/certificación; la interna es del propio sistema',
      'La auditoría interna siempre la realiza ENAC',
      'La certificación la hace siempre el dueño del proceso auditado',
      'Ambas son idénticas en independencia y finalidad de sello externo',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Independencia y finalidad externa vs herramienta interna del SGC. ENAC no “hace” la auditoría interna típica.',
    tags: ['calibre'],
  },
  {
    id: 't13-25',
    temaId: 13,
    stem: '¿Qué NO es un efecto automático de obtener un certificado ISO 9001?',
    options: [
      'Disponer de una declaración de conformidad de tercera parte sobre el SGC en el alcance evaluado',
      'Poder planificar seguimientos y renovaciones según el esquema',
      'Contar con un estímulo para mantener evidencias y mejora del sistema',
      'Garantizar por sí solo la excelencia plena EFQM y la desaparición de reclamaciones ciudadanas',
    ],
    correct: 3,
    explanation:
      'Correcta: D (no es efecto automático). El certificado no equivale a excelencia total ni a “cero reclamaciones”. A–C sí son efectos/uso razonables.',
    tags: ['calibre'],
  },
  {
    id: 't13-26',
    temaId: 13,
    stem: 'En un pliego, exigir “certificación ISO 9001 acreditada” suele interpretarse como:',
    options: [
      'Exigir solo una Carta de Servicios firmada por el alcalde',
      'Exigir autoevaluación CAF publicada en el BOE',
      'Exigir acreditación ENAC del propio Ayuntamiento como laboratorio',
      'Exigir un certificado de SGC emitido por organismo de certificación acreditado (p. ej. por ENAC)',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Lectura habitual en contratación: certificado 9001 de entidad acreditada. No es Carta, ni CAF, ni convertir al Ayuntamiento en laboratorio acreditado.',
    tags: ['calibre'],
  },
  {
    id: 't13-27',
    temaId: 13,
    stem: 'La renovación del certificado, frente al seguimiento ordinario, se asocia más a:',
    options: [
      'La eliminación definitiva de auditorías futuras',
      'La conversión automática del certificado en acreditación ENAC',
      'Un nuevo ciclo de evaluación para mantener/renovar la validez del certificado al término del periodo',
      'La ampliación obligatoria del alcance a toda la AGE',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Renovación = reevaluación cíclica. No acaba con auditorías, no transforma en ENAC ni amplía el alcance por arte de magia.',
    tags: ['calibre'],
  },
  {
    id: 't13-28',
    temaId: 13,
    stem: 'Un uso engañoso de la certificación en comunicación institucional sería:',
    options: [
      'Indicar el alcance y el organismo en la información pública',
      'Explicar que el sello no sustituye la legalidad del procedimiento',
      'Publicar el periodo de vigencia del certificado',
      'Sugerir que “estamos certificados” sin precisar alcance, dando a entender cobertura total inexistente',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Opacidad de alcance = comunicación engañosa. A–C son buenas prácticas de transparencia.',
    tags: ['calibre'],
  },
  {
    id: 't13-29',
    temaId: 13,
    stem: 'La competencia técnica que reconoce la acreditación se refiere, en este tema, preferentemente a:',
    options: [
      'La popularidad del sello ISO 9001 entre la ciudadanía, medida por encuestas de marca',
      'El volumen de Cartas de Servicios publicadas por la entidad acreditada',
      'La capacidad del organismo evaluador (o laboratorio, etc.) para realizar evaluaciones/ensayos fiables e imparciales',
      'La antigüedad del certificado del SGC del propio organismo de acreditación',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Competencia técnica e imparcialidad del evaluador. No se mide por popularidad de marca, número de Cartas ni antigüedad de un certificado de SGC.',
    tags: ['calibre'],
  },
  {
    id: 't13-30',
    temaId: 13,
    stem: 'Relacione correctamente: “certificado de SGC” y “acreditación del certificador”:',
    options: [
      'El primero lo emite ENAC; el segundo, el ayuntamiento',
      'El primero lo emite el organismo de certificación; el segundo lo concede (en España) ENAC al organismo competente',
      'Ambos los emite el dueño del proceso auditado',
      'Ninguno requiere evaluación ni evidencia',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Cadena típica: ENAC acredita al certificador; el certificador certifica el SGC. No se invierte ni se elimina la evidencia.',
    tags: ['calibre'],
  },
  {
    id: 't13-31',
    temaId: 13,
    stem: 'Tras una certificación, ¿qué práctica mantiene el valor del sello?',
    options: [
      'Archivar el SGC y dejar de medir procesos “porque ya estamos certificados”',
      'Ampliar el logo a servicios fuera de alcance sin nueva evaluación',
      'Impedir auditorías internas para “no encontrar problemas”',
      'Mantener el SGC vivo: evidencias, seguimiento de NC, indicadores y preparación de vigilancias',
    ],
    correct: 3,
    explanation:
      'Correcta: D. El sello se sostiene con gestión continua. Congelar el sistema, abusar del alcance u ocultar problemas lo vacían.',
    tags: ['calibre'],
  },
  {
    id: 't13-32',
    temaId: 13,
    stem: 'Síntesis operativa del tema 13:',
    options: [
      'Certificación = ENAC; acreditación = ISO 9001; ambos equivalen a Carta de Servicios',
      'Solo existe acreditación; la certificación fue derogada por CAF',
      'ENAC certifica SGC municipales y acredita Cartas de Servicios',
      'Certificación = conformidad por tercera parte; acreditación = reconocimiento de competencia (ENAC en España); el sello no sustituye la legalidad',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Esa es la distinción nuclear y el límite del sello. Las otras mezclan roles o inventan derogaciones.',
    tags: ['calibre'],
  },
]
