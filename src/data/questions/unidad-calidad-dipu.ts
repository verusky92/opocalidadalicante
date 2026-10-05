import type { Question } from '../../types'

/**
 * Tests del material Unidad de Calidad Dipu Alicante (contenido actualizado 2026).
 * temaId: 0 = banco aparte (no entra en simulacros del temario 1–15).
 */
export const UNIDAD_CALIDAD_QUESTIONS: Question[] = [
  {
    id: 'ucq-01',
    temaId: 0,
    stem: 'Según el enfoque de la Unidad de Calidad de la Dipu, la calidad se consigue principalmente:',
    options: [
      'Implantando un sistema de gestión que alinee requisitos, plan, recursos, procesos y mejora',
      'Publicando solo un eslogan de excelencia en la web institucional',
      'Sustituyendo la legalidad por la satisfacción percibida',
      'Improvisando respuestas excelentes en cada atención puntual',
    ],
    correct: 0,
    explanation:
      'Correcta: A. El material insiste en que la calidad no se improvisa: hace falta un SGC. A y C son cosmética; D es incompatible con AAPP.',
    tags: ['unidad-calidad-dipu'],
  },
  {
    id: 'ucq-02',
    temaId: 0,
    stem: 'Señale la afirmación CORRECTA sobre normalización y acreditación:',
    options: [
      'ENAC publica las normas UNE-EN ISO y AENOR acredita laboratorios',
      'UNE adopta/publica normas; ENAC acredita organismos de evaluación de la conformidad',
      'ENAC y UNE son la misma entidad con dos marcas comerciales',
      'ISO 9001 solo puede certificarse si ENAC redactó el manual del departamento',
    ],
    correct: 1,
    explanation:
      'Correcta: B. El PDF de 2005 confundía el papel de ENAC con el de UNE. Normalización ≠ acreditación.',
    tags: ['unidad-calidad-dipu'],
  },
  {
    id: 'ucq-03',
    temaId: 0,
    stem: 'La edición de ISO 9001 de referencia tras septiembre de 2026 es:',
    options: [
      'ISO 9001:2000',
      'ISO 9002:1994',
      'ISO 9001:2026 (con transición desde certificados 2015)',
      'ISO 19011:1996',
    ],
    correct: 2,
    explanation:
      'Correcta: C. 9001:2026 sustituye a 2015 (+ Amd 2024). 9001:2000 y 9002:1994 están obsoletas. 19011 es de auditoría, no el SGC certificable.',
    tags: ['unidad-calidad-dipu'],
  },
  {
    id: 'ucq-04',
    temaId: 0,
    stem: 'Respecto de los certificados ISO 9001:2015 tras publicarse la edición 2026, es correcto decir que:',
    options: [
      'Solo valen si se emitieron antes de 2000',
      'Obligan a reclasificar la norma como UNE 9002',
      'Caducan automáticamente al día siguiente de la publicación de la 2026',
      'Siguen válidos durante el periodo de transición definido (referencia hasta 30/09/2029)',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Hay transición plurianual; no hay caducidad inmediata el día de publicación.',
    tags: ['unidad-calidad-dipu'],
  },
  {
    id: 'ucq-05',
    temaId: 0,
    stem: 'El modelo EFQM vigente se organiza principalmente en:',
    options: [
      'Dirección, Ejecución y Resultados (modelo 2020/2025)',
      'Únicamente los 5 agentes facilitadores del esquema de los 90',
      'Cláusulas 4 a 10 idénticas a ISO 9001',
      'Solo resultados económicos privados',
    ],
    correct: 0,
    explanation:
      'Correcta: A. El esquema 5+4 es histórico. EFQM no es un clon de cláusulas ISO 9001.',
    tags: ['unidad-calidad-dipu'],
  },
  {
    id: 'ucq-06',
    temaId: 0,
    stem: 'El CAF se caracteriza, frente a ISO 9001, porque:',
    options: [
      'Es el único esquema que ENAC certifica obligatoriamente en diputaciones',
      'Es un marco de autoevaluación para el sector público, no un listado de requisitos certificables de SGC',
      'Sustituye por completo a la Ley 39/2015',
      'Prohíbe usar indicadores de satisfacción ciudadana',
    ],
    correct: 1,
    explanation:
      'Correcta: B. CAF ≈ autoevaluación pública tipo EFQM adaptado. No es el esquema típico de certificación 9001.',
    tags: ['unidad-calidad-dipu'],
  },
  {
    id: 'ucq-07',
    temaId: 0,
    stem: 'Señale la INCORRECTA sobre los pilares del SGC descritos por la Unidad de Calidad:',
    options: [
      'El liderazgo de la dirección es indispensable',
      'La mejora continua se describe como un ciclo sin fin tipo PDCA',
      'La participación del personal es prescindible si el manual está bien escrito',
      'La satisfacción del usuario se conoce también por quejas y sugerencias',
    ],
    correct: 2,
    explanation:
      'Correcta: C (incorrecta). Sin participación el sistema queda en papel. A, B y D sí reflejan el material.',
    tags: ['unidad-calidad-dipu'],
  },
  {
    id: 'ucq-08',
    temaId: 0,
    stem: 'Un diagrama de Pareto se usa preferentemente para:',
    options: [
      'Demostrar por sí solo la causa raíz sin más análisis',
      'Sustituir la auditoría de certificación',
      'Calcular el Cp del proceso',
      'Priorizar las pocas causas que concentran la mayor parte del efecto',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Pareto prioriza (80/20). No basta para causalidad profunda ni sustituye auditoría/capacidad.',
    tags: ['unidad-calidad-dipu'],
  },
  {
    id: 'ucq-09',
    temaId: 0,
    stem: 'Un proceso “bajo control estadístico” significa, en sentido estricto, que:',
    options: [
      'Solo actúa bajo causas comunes (puntos dentro de límites de control)',
      'Ha obtenido ya el certificado ISO 9001:2026',
      'No necesita dueño de proceso',
      'Cumple siempre todas las especificaciones del usuario',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Control ≠ capacidad. Puede estar controlado y aun así ser incapaz de cumplir tolerancias.',
    tags: ['unidad-calidad-dipu'],
  },
  {
    id: 'ucq-10',
    temaId: 0,
    stem: 'El diagrama causa-efecto (Ishikawa) sirve para:',
    options: [
      'Medir solo el NPS sin más contexto',
      'Estructurar causas potenciales de un problema o efecto',
      'Publicar la Carta de Servicios en el BOE',
      'Acreditar a ENAC',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Es herramienta de análisis causal estructurado, no de publicación normativa ni acreditación.',
    tags: ['unidad-calidad-dipu'],
  },
  {
    id: 'ucq-11',
    temaId: 0,
    stem: 'Benchmarking, en el sentido enseñado por la Unidad de Calidad, es:',
    options: [
      'Un sinónimo exacto de certificación ISO',
      'Copiar ilegalmente datos personales de otra administración',
      'Aprender de mejores prácticas por comparación estructurada interna o externa',
      'Eliminar indicadores propios para usar solo los del líder',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Aprendizaje por referencia, no atajo ilegal ni sustituto de certificación.',
    tags: ['unidad-calidad-dipu'],
  },
  {
    id: 'ucq-12',
    temaId: 0,
    stem: 'Calidad y modernización, en el material Dipu actualizado, se distinguen así:',
    options: [
      'La modernización sustituye siempre a la calidad',
      'Solo la modernización exige legalidad',
      'Son sinónimos perfectos sin matices',
      'La calidad es línea de gestión; la modernización (TIC/organización) es apoyo instrumental',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Distinción clásica del Tema 3, aún útil: tecnología sin gestión no garantiza calidad.',
    tags: ['unidad-calidad-dipu'],
  },
  {
    id: 'ucq-13',
    temaId: 0,
    stem: 'El marco vigente de procedimiento administrativo común en España es:',
    options: [
      'Las Leyes 39/2015 y 40/2015',
      'Solo el RD 1259/1999',
      'Únicamente la Ley 11/2007',
      'La Ley 30/1992, plenamente aplicable sin cambios',
    ],
    correct: 0,
    explanation:
      'Correcta: A. 39/2015 (procedimiento) y 40/2015 (régimen jurídico) relegan el núcleo de la 30/1992. 11/2007 y 1259/1999 son piezas históricas o parciales.',
    tags: ['unidad-calidad-dipu'],
  },
  {
    id: 'ucq-14',
    temaId: 0,
    stem: 'En la AGE, las Cartas de Servicios se enmarcan hoy principalmente en:',
    options: [
      'El Estatuto de Autonomía exclusivamente',
      'El Real Decreto 951/2005',
      'El Real Decreto 1259/1999 como norma única vigente',
      'La ISO 9002:1994',
    ],
    correct: 1,
    explanation:
      'Correcta: B. RD 951/2005 es el marco general de mejora de la calidad en la AGE (cartas, etc.). El 1259/1999 quedó superado por ese marco.',
    tags: ['unidad-calidad-dipu'],
  },
  {
    id: 'ucq-15',
    temaId: 0,
    stem: 'La protección de datos personales aplicable hoy a una Diputación se basa en:',
    options: [
      'El Modelo Ciudadanía del OCSP',
      'Solo la LO 15/1999',
      'El RGPD y la LO 3/2018',
      'Únicamente la Ley 11/2007',
    ],
    correct: 2,
    explanation:
      'Correcta: C. LO 15/1999 derogada. RGPD + LO 3/2018 son el marco actual.',
    tags: ['unidad-calidad-dipu'],
  },
  {
    id: 'ucq-16',
    temaId: 0,
    stem: 'El programa CADA (1996–1998) en la Diputación de Alicante priorizaba:',
    options: [
      'La privatización de todos los servicios asistenciales',
      'La eliminación de indicadores de satisfacción',
      'La certificación inmediata de toda la corporación en una sola auditoría',
      'Sensibilización, grupos de mejora, encuestas y autoevaluación, con piloto en Régimen Interior/Personal',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Historia del Tema 60: CADA no empezó certificando toda la Dipu de golpe.',
    tags: ['unidad-calidad-dipu'],
  },
  {
    id: 'ucq-17',
    temaId: 0,
    stem: 'La estrategia ISO “por departamentos” en Alicante se resume mejor como:',
    options: [
      'Certificar unidades funcionales de forma gradual (“elefante a bocados”)',
      'Esperar a tener un único SGC corporativo antes de auditar nada',
      'Prohibir incentivos ligados a la certificación',
      'Usar solo EFQM porque ISO no sirve en AAPP',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Lecuencia histórica clave: avance por unidades voluntarias/asesoradas.',
    tags: ['unidad-calidad-dipu'],
  },
  {
    id: 'ucq-18',
    temaId: 0,
    stem: 'En la cronología Dipu, las primeras certificaciones ISO de departamentos administrativos se situaron en:',
    options: [
      '1992, con la Ley 30/1992',
      '2001 (p. ej. Tesorería y Gestión documental/Registro/Archivo)',
      '2015, con la ISO 9001:2015',
      '2026, con la ISO 9001:2026',
    ],
    correct: 1,
    explanation:
      'Correcta: B. El material sitúa junio 2001 como hito de las primeras certificaciones departamentales.',
    tags: ['unidad-calidad-dipu'],
  },
  {
    id: 'ucq-19',
    temaId: 0,
    stem: 'Incluir temas de calidad en los temarios de oposiciones de la Dipu buscaba, según el material:',
    options: [
      'Cumplir un requisito de la ISO 19011',
      'Sustituir la fase de oposición por un concurso de méritos',
      'Que las nuevas incorporaciones conocieran de entrada el sistema de gestión pretendido',
      'Evitar cualquier formación posterior',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Objetivo cultural/organizativo explícito en el Tema 60.',
    tags: ['unidad-calidad-dipu'],
  },
  {
    id: 'ucq-20',
    temaId: 0,
    stem: 'Una secuencia típica de implantación departamental descrita por la Dipu es:',
    options: [
      'Solo brainstorming anual sin registros',
      'Publicar la Carta y dar por cerrado el SGC',
      'Auditoría externa → luego inventar procedimientos sin asesoramiento',
      'Asesoramiento, planificación, medición de progreso, auditoría interna y externa',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Cadena entrada→actividades→resultado certificado del material histórico.',
    tags: ['unidad-calidad-dipu'],
  },
  {
    id: 'ucq-21',
    temaId: 0,
    stem: 'Tras certificar un SGC, el seguimiento habitual implica:',
    options: [
      'Auditorías de seguimiento/vigilancia y renovación periódica según el esquema',
      'Destruir registros para “aligerar”',
      'Cambiar automáticamente a CAF',
      'No volver a auditar nunca',
    ],
    correct: 0,
    explanation:
      'Correcta: A. El material hablaba de seguimiento anual y renovación trienal; la lógica de vigilancia + recertificación se mantiene en esquemas actuales.',
    tags: ['unidad-calidad-dipu'],
  },
  {
    id: 'ucq-22',
    temaId: 0,
    stem: 'Señale la ventaja que el material Dipu atribuía al SGC documentado:',
    options: [
      'Sustituye al presupuesto provincial',
      'Facilita el trabajo diario al tener procedimientos e instrucciones escritos',
      'Elimina la necesidad de medir resultados',
      'Garantiza por sí solo el cumplimiento electoral',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Ventaja operativa clásica; B–D no están en el texto ni son lógicas.',
    tags: ['unidad-calidad-dipu'],
  },
  {
    id: 'ucq-23',
    temaId: 0,
    stem: 'Digitalizar un trámite sin rediseñar el proceso, desde la óptica calidad + e-admin:',
    options: [
      'Hace innecesaria la privacidad de datos',
      'Garantiza siempre menos errores',
      'Puede acelerar un mal proceso; la tecnología debe acompañar al rediseño',
      'Cumple automáticamente el RD 951/2005',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Mensaje actualizado del Tema 54: TIC sin proceso ≠ calidad.',
    tags: ['unidad-calidad-dipu'],
  },
  {
    id: 'ucq-24',
    temaId: 0,
    stem: 'El desarrollo reglamentario relevante del sector público por medios electrónicos (además de la Ley 39/2015) incluye:',
    options: [
      'El Real Decreto 1259/1999 como única norma e-admin',
      'La ISO 9002:1994',
      'El programa CADA de 1996',
      'El Real Decreto 203/2021',
    ],
    correct: 3,
    explanation:
      'Correcta: D. RD 203/2021 desarrolla actuación/funcionamiento electrónico. Las otras opciones no cubren ese rol hoy.',
    tags: ['unidad-calidad-dipu'],
  },
  {
    id: 'ucq-25',
    temaId: 0,
    stem: 'Una “aplicación sencilla” de calidad en AAPP, según la tipología del material, sería:',
    options: [
      'Publicar una Carta de Servicios con compromisos medibles',
      'Desplegar un data center propio sin procesos',
      'Eliminar el registro de entrada',
      'Implantar un sistema integrado calidad–PRL–medio ambiente en toda la corporación',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Cartas, quejas/sugerencias, simplificación y procesos son el bloque “asequible”.',
    tags: ['unidad-calidad-dipu'],
  },
  {
    id: 'ucq-26',
    temaId: 0,
    stem: 'La tormenta de ideas (brainstorming) exige en su fase divergente:',
    options: [
      'Criticar de inmediato cada propuesta para filtrar',
      'No criticar, fomentar cantidad y apoyarse en ideas ajenas',
      'Limitar el grupo a la dirección política solo',
      'Sustituir cualquier dato empírico',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Reglas clásicas del Tema 2.',
    tags: ['unidad-calidad-dipu'],
  },
  {
    id: 'ucq-27',
    temaId: 0,
    stem: 'Una matriz de ponderación se usa para:',
    options: [
      'Sustituir el mapa de procesos',
      'Calcular solo el histograma de visitas',
      'Priorizar hechos/problemas con criterios consensuados previos',
      'Emitir el certificado ISO',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Reduce subjetividad al puntuar con criterios acordados.',
    tags: ['unidad-calidad-dipu'],
  },
  {
    id: 'ucq-28',
    temaId: 0,
    stem: 'Señale la CORRECTA sobre satisfacción del cliente en el material Dipu:',
    options: [
      'Solo se mide con el balance contable',
      'Prohíbe usar quejas como fuente',
      'Es independiente de expectativas y percepción',
      'Depende de la brecha entre expectativas y lo percibido',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Expectativas vs percepción; quejas/encuestas son fuentes válidas.',
    tags: ['unidad-calidad-dipu'],
  },
  {
    id: 'ucq-29',
    temaId: 0,
    stem: 'En AAPP, ¿por qué no basta la “satisfacción alta” como definición plena de calidad?',
    options: [
      'Porque deben reconciliarse también legalidad, equidad y transparencia',
      'Porque la satisfacción está prohibida por ISO 9001',
      'Porque las Cartas de Servicios impiden medir percepción',
      'Porque el CAF exige no preguntar a la ciudadanía',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Matiz público esencial (material Tema 3 + buena redacción).',
    tags: ['unidad-calidad-dipu'],
  },
  {
    id: 'ucq-30',
    temaId: 0,
    stem: 'El diagrama de flujo aporta especialmente:',
    options: [
      'El texto literal de la Ley 40/2015',
      'Una descripción gráfica ordenada de las actividades del proceso',
      'La puntuación EFQM de resultados en sociedad',
      'La acreditación ENAC del laboratorio',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Herramienta de comprensión y alineación del proceso.',
    tags: ['unidad-calidad-dipu'],
  },
  {
    id: 'ucq-31',
    temaId: 0,
    stem: 'Cuando el material Dipu habla de “cliente” en un departamento de asistencia a municipios, el destinatario típico es:',
    options: [
      'Nadie: los servicios internos no tienen destinatario',
      'Solo el turista ocasional de la costa',
      'El ayuntamiento asistido (y, mediatamente, la ciudadanía)',
      'Exclusivamente el Congreso de los Diputados',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Cadena de destinatarios típica provincial.',
    tags: ['unidad-calidad-dipu'],
  },
  {
    id: 'ucq-32',
    temaId: 0,
    stem: 'Señale la INCORRECTA sobre el estado del material original de 2005/2009:',
    options: [
      'Las herramientas clásicas (Pareto, Ishikawa…) siguen vigentes',
      'Algunas referencias (ISO 9001:2000, Ley 30/1992) están desactualizadas',
      'La historia del despliegue CADA/ISO en Alicante sigue siendo útil como caso',
      'Puede usarse literalmente en un test actual sin revisar normas',
    ],
    correct: 3,
    explanation:
      'Correcta: D (incorrecta). Hay que estudiar la versión actualizada: el PDF crudo no es seguro para normativa vigente.',
    tags: ['unidad-calidad-dipu'],
  },
  {
    id: 'ucq-33',
    temaId: 0,
    stem: 'ISO 9001:2026, respecto del cambio climático:',
    options: [
      'Lo integra como cuestión externa potencialmente relevante (y requisitos de partes interesadas relacionados)',
      'Obliga a certificar ISO 14001 el mismo día',
      'Solo aplica a empresas privadas manufactureras',
      'Lo ignora por completo',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Absorbe lo ya anticipado en Amd 1:2024 a la edición 2015 (contexto y partes interesadas).',
    tags: ['unidad-calidad-dipu'],
  },
  {
    id: 'ucq-34',
    temaId: 0,
    stem: 'Una hoja de recogida de datos sirve sobre todo para:',
    options: [
      'Derogar el RD 951/2005',
      'Registrar de forma ordenada frecuencias o tiempos antes del análisis',
      'Emitir el sello de calidad',
      'Sustituir el liderazgo de la dirección',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Es el primer paso de medición empírica del Tema 2.',
    tags: ['unidad-calidad-dipu'],
  },
  {
    id: 'ucq-35',
    temaId: 0,
    stem: 'El Certamen de Premios a la Calidad del Servicio Público en la Dipu se institucionalizó para:',
    options: [
      'Evitar cualquier encuesta a usuarios',
      'Sustituir las auditorías externas',
      'Promocionar principios/métodos de calidad, difundir buenas prácticas y reconocer iniciativas',
      'Eliminar la Sección de Calidad',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Objetivo explícito de la 2ª fase (1999/2000).',
    tags: ['unidad-calidad-dipu'],
  },
  {
    id: 'ucq-36',
    temaId: 0,
    stem: 'En el ciclo de mejora continua del material Dipu, “comprobar los resultados” corresponde a:',
    options: [
      'La publicación del BOE',
      'La acreditación ENAC',
      'La redacción del Preámbulo constitucional',
      'La fase de verificación del PDCA',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Planificar–ejecutar–comprobar–corregir = PDCA.',
    tags: ['unidad-calidad-dipu'],
  },
  {
    id: 'ucq-37',
    temaId: 0,
    stem: 'Señale la opción que mejor describe una Carta de Servicios:',
    options: [
      'Documento que informa de servicios, derechos y compromisos de calidad medibles',
      'Certificado ISO emitido por ENAC',
      'Manual secreto solo para interventores',
      'Sustituto de la Ley 39/2015',
    ],
    correct: 0,
    explanation:
      'Correcta: A. Definición alineada con RD 951/2005 y con el uso clásico en calidad pública.',
    tags: ['unidad-calidad-dipu'],
  },
  {
    id: 'ucq-38',
    temaId: 0,
    stem: '¿Qué error cometía el texto de 2005 al hablar del modelo ISO?',
    options: [
      'Afirmar que existía una norma ISO de calidad',
      'Atribuir a ENAC la función de dar rango UNE a las normas',
      'Mencionar al CEN',
      'Hablar de satisfacción de clientes',
    ],
    correct: 1,
    explanation:
      'Correcta: B. Ese era el fallo conceptual grave: UNE normaliza; ENAC acredita.',
    tags: ['unidad-calidad-dipu'],
  },
  {
    id: 'ucq-39',
    temaId: 0,
    stem: 'Para priorizar problemas “vitales” frente a “triviales muchos”, la herramienta idónea es:',
    options: [
      'El organigrama político',
      'La disposición derogatoria de la CE',
      'El diagrama de Pareto',
      'Solo la tormenta de ideas sin datos',
    ],
    correct: 2,
    explanation:
      'Correcta: C. Pocos vitales / muchos triviales es el lenguaje Pareto del Tema 2.',
    tags: ['unidad-calidad-dipu'],
  },
  {
    id: 'ucq-40',
    temaId: 0,
    stem: 'Al estudiar el material histórico de la Dipu para un test actual, lo más seguro es:',
    options: [
      'Ignorar por completo ISO 9001 porque “ya no existe”',
      'Usar solo el Modelo Ciudadanía del OCSP',
      'Memorizar porcentajes de certificación de 2009 como si fueran de hoy',
      'Conservar el relato organizativo y contrastar siempre la norma citada con la vigente',
    ],
    correct: 3,
    explanation:
      'Correcta: D. Historia sí; cifras y normas caducadas, no. ISO sigue existiendo (edición 2026).',
    tags: ['unidad-calidad-dipu'],
  },
]
