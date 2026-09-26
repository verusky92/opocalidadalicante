/**
 * Banco de dificultad alta — estilo oposición (distractores cercanos, matices).
 * Run: node scripts/build-hard-questions.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.join(__dirname, '../src/data/questions')
fs.mkdirSync(outDir, { recursive: true })

function writeTema(temaId, items) {
  if (items.length < 30) throw new Error(`Tema ${temaId}: ${items.length}`)
  const pad = String(temaId).padStart(2, '0')
  const lines = items.map((q, i) => {
    const id = `t${temaId}-${String(i + 1).padStart(2, '0')}`
    const opts = q.options.map((o) => JSON.stringify(o)).join(', ')
    return `  {
    id: ${JSON.stringify(id)},
    temaId: ${temaId},
    stem: ${JSON.stringify(q.stem)},
    options: [${opts}],
    correct: ${q.correct},
    explanation: ${JSON.stringify(q.explanation)},
  }`
  })
  fs.writeFileSync(
    path.join(outDir, `tema-${pad}.ts`),
    `import type { Question } from '../../types'\n\nexport const TEMA_${pad}_QUESTIONS: Question[] = [\n${lines.join(',\n')},\n]\n`,
  )
  console.log(`tema ${temaId}: ${items.length}`)
}

function q(stem, options, correct, explanation) {
  return { stem, options, correct, explanation }
}

// ——— TEMA 1 CE ———
writeTema(1, [
  q(
    'De conformidad con el art. 1 CE, es correcto afirmar que:',
    [
      'España se constituye en un Estado social y democrático de Derecho y la soberanía nacional reside en el pueblo español',
      'España se constituye en un Estado social y democrático de Derecho y la soberanía reside en las Cortes Generales',
      'España se constituye en una República parlamentaria y la soberanía reside en el pueblo español',
      'España se constituye en un Estado federal y la soberanía reside en las Comunidades Autónomas',
    ],
    0,
    'Art. 1.1 y 1.2 CE. La forma política es la Monarquía parlamentaria (1.3), no una República ni un Estado federal.',
  ),
  q(
    'Señale la afirmación INCORRECTA respecto del Título Preliminar de la CE:',
    [
      'El art. 9.2 obliga a los poderes públicos a promover las condiciones para que la libertad y la igualdad del individuo y de los grupos sean reales y efectivas',
      'El art. 2 reconoce la indisoluble unidad de la Nación española y el derecho a la autonomía de las nacionalidades y regiones',
      'El art. 3.1 establece que el castellano es la lengua española oficial del Estado y que todos tienen el deber de conocerla y el derecho a usarla',
      'El art. 14, situado en el Título Preliminar, consagra la igualdad ante la ley',
    ],
    3,
    'El art. 14 está en el Título I (Capítulo II), no en el Título Preliminar.',
  ),
  q(
    'Respecto de la protección de los derechos, el recurso de amparo ante el Tribunal Constitucional procede, conforme al art. 53.2 CE, en relación con:',
    [
      'Los derechos reconocidos en el art. 14, la Sección 1ª del Capítulo II del Título I y la objeción de conciencia del art. 30.2',
      'Todos los principios rectores del Capítulo III del Título I',
      'Únicamente los derechos del Título VIII',
      'Cualquier precepto constitucional, sin limitación',
    ],
    0,
    'Art. 53.2 CE. Los principios rectores (39-52) no gozan, con carácter general, de esa vía de amparo.',
  ),
  q(
    'La reforma constitucional del art. 168 CE se exige cuando la reforma sea total o afecte a:',
    [
      'El Título Preliminar, la Sección 1ª del Capítulo II del Título I, o el Título II',
      'Cualquier precepto del Título I, incluido el Capítulo III de principios rectores',
      'Solo el Título VIII relativo a la organización territorial',
      'Únicamente el Preámbulo y la Disposición Derogatoria',
    ],
    0,
    'Art. 168.1 CE. No basta con “cualquier” parte del Título I: la Sección 1ª del Cap. II sí; el Cap. III de principios rectores, no por esa vía agravada automáticamente.',
  ),
  q(
    'En el procedimiento de reforma ordinaria del art. 167 CE, el proyecto deberá ser aprobado por:',
    [
      'Mayoría de tres quintos de cada una de las Cámaras',
      'Mayoría absoluta del Congreso y mayoría simple del Senado',
      'Mayoría de dos tercios de cada Cámara en todo caso',
      'Mayoría simple de ambas Cámaras y sanción real',
    ],
    0,
    'Art. 167.1 CE: tres quintos. Los dos tercios aparecen en el 167.2 ( Crowisión del Congreso si no hay acuerdo) y en el 168 (reforma agravada).',
  ),
  q(
    'En la reforma agravada del art. 168 CE, una vez aprobada la reforma por las nuevas Cortes, es preceptivo:',
    [
      'Su ratificación mediante referéndum',
      'Solo el refrendo del Presidente del Gobierno',
      'Únicamente el dictamen del Consejo de Estado',
      'Nada más, al bastar la mayoría de dos tercios',
    ],
    0,
    'Art. 168.3 CE: aprobada la reforma por las Cortes, será sometida a referéndum para su ratificación.',
  ),
  q(
    'Según el art. 56.3 CE, los actos del Rey:',
    [
      'Serán refrendados en la forma establecida en la Constitución, careciendo de validez sin dicho refrendo, salvo lo dispuesto en el art. 65.2',
      'Nunca requieren refrendo por ser el Rey inviolable',
      'Solo requieren refrendo cuando afecten a relaciones internacionales',
      'Los refrenda exclusivamente el Tribunal Constitucional',
    ],
    0,
    'Art. 56.3 CE. La inviolabilidad no elimina el refrendo; la excepción del 65.2 se refiere al nombramiento y relevo de miembros civiles y militares de su Casa.',
  ),
  q(
    'De la responsabilidad por los actos del Rey cabe decir que:',
    [
      'De los actos del Rey serán responsables las personas que los refrenden',
      'Responde el Rey personalmente ante el Congreso',
      'Responde el Consejo de Estado en todo caso',
      'No existe responsabilidad alguna vinculada al refrendo',
    ],
    0,
    'Art. 64.1 CE: de los actos del Rey serán responsables las personas que los refrenden.',
  ),
  q(
    'Señale la opción correcta sobre el art. 14 CE:',
    [
      'Prohíbe la discriminación por nacimiento, raza, sexo, religión, opinión o cualquier otra condición o circunstancia personal o social',
      'Solo prohíbe la discriminación por sexo y religión',
      'Se limita a proclamar la igualdad formal sin mencionar causas de discriminación',
      'Se aplica únicamente a las relaciones laborales privadas',
    ],
    0,
    'Texto literal del art. 14 CE. Vincula a poderes públicos y proyecta eficacia en el ordenamiento.',
  ),
  q(
    'Respecto del art. 9.2 y del art. 14 CE, es más exacto afirmar que:',
    [
      'El 14 consagra la igualdad ante la ley y el 9.2 impone a los poderes públicos un mandato de promover la igualdad real y efectiva',
      'Ambos preceptos son idénticos en contenido y ubicación sistemática',
      'El 9.2 es un derecho fundamental amparable y el 14 un principio rector',
      'El 14 está en el Título Preliminar y el 9.2 en el Título I',
    ],
    0,
    '9.2 = mandato de igualdad real (Título Preliminar). 14 = igualdad ante la ley (Título I). El amparo del 53.2 cubre el 14, no el 9.2 como tal.',
  ),
  q(
    'La LO 3/2007, de igualdad efectiva de mujeres y hombres, en relación con las AAPP, introduce como criterio de actuación, entre otros:',
    [
      'La transversalidad del principio de igualdad de trato entre mujeres y hombres',
      'La exclusión de la evaluación de impacto de género en las normas',
      'La prohibición de medidas de acción positiva en el empleo público',
      'La limitación del principio de igualdad al ámbito exclusivamente privado',
    ],
    0,
    'La transversalidad (mainstreaming) es un eje de la LO 3/2007 respecto de los poderes públicos.',
  ),
  q(
    'Los principios rectores de la política social y económica (Capítulo III del Título I):',
    [
      'Informan la legislación positiva, la práctica judicial y la actuación de los poderes públicos, y solo podrán ser alegados ante la Jurisdicción ordinaria de acuerdo con lo que dispongan las leyes que los desarrollen',
      'Son derechos subjetivos directamente exigibles en amparo en los mismos términos que el art. 15',
      'Carecen de cualquier eficacia jurídica',
      'Se reforman necesariamente por el procedimiento del art. 168',
    ],
    0,
    'Art. 53.3 CE. No son, con carácter general, derechos fundamentales amparables como la Sección 1ª.',
  ),
  q(
    '¿Cuál de los siguientes derechos se ubica en la Sección 1ª del Capítulo II del Título I?',
    [
      'El derecho a la educación (art. 27)',
      'La protección de la familia del art. 39',
      'El derecho a disfrutar de una vivienda digna del art. 47',
      'La protección de la salud del art. 43',
    ],
    0,
    'Art. 27 = Sección 1ª. Arts. 39, 43 y 47 = principios rectores (Cap. III).',
  ),
  q(
    'La dignidad de la persona y los derechos inviolables que le son inherentes se reconocen en:',
    [
      'El art. 10.1 CE, como fundamento del orden político y de la paz social',
      'El art. 1.1 CE exclusivamente',
      'El art. 14 CE únicamente',
      'La Disposición Final de la CE',
    ],
    0,
    'Art. 10.1 CE.',
  ),
  q(
    'En relación con la iniciativa de reforma constitucional (art. 166 CE):',
    [
      'Se ejercerá en los términos previstos en los apartados 1 y 2 del art. 87',
      'Corresponde en exclusiva al Rey',
      'Corresponde solo al Tribunal Constitucional',
      'Puede ejercerla cualquier Ayuntamiento mediante simple moción',
    ],
    0,
    'Art. 166 CE remite al art. 87.1 y 87.2 (iniciativa legislativa), no al 87.3 (iniciativa popular), que queda excluida para reforma constitucional.',
  ),
  q(
    'Señale la afirmación correcta sobre la forma política del Estado (art. 1.3 CE):',
    [
      'Es la Monarquía parlamentaria',
      'Es la República federal',
      'Es la Monarquía absoluta templada por Cortes',
      'Es un Estado confederal de nacionalidades',
    ],
    0,
    'Art. 1.3 CE.',
  ),
  q(
    'El derecho a la vida y a la integridad física y moral, sin que, en ningún caso, puedan ser sometidos a tortura ni a penas o tratos inhumanos o degradantes, se reconoce en el artículo:',
    [
      '15',
      '14',
      '17',
      '24',
    ],
    0,
    'Art. 15 CE.',
  ),
  q(
    'Respecto de la libertad ideológica, religiosa y de culto (art. 16 CE), es correcto que:',
    [
      'Ninguna confesión tendrá carácter estatal, sin perjuicio de la cooperación de los poderes públicos con la Iglesia Católica y demás confesiones',
      'España se configura como Estado confesional católico',
      'Queda prohibida toda cooperación con confesiones religiosas',
      'La libertad religiosa no admite límite alguno ni siquiera al orden público',
    ],
    0,
    'Art. 16.3 CE. Hay límites del 16.1 (mantenimiento del orden público protegido por la ley).',
  ),
  q(
    'En un test de oposición, si se pregunta por la “máxima protección constitucional” de derechos, suele referirse a:',
    [
      'La Sección 1ª del Capítulo II del Título I (arts. 15 a 29), junto con el art. 14 a efectos de amparo',
      'Exclusivamente los principios rectores del Capítulo III',
      'Solo el Preámbulo',
      'Únicamente los derechos del Título VIII',
    ],
    0,
    'Es el bloque típico de amparo (53.2) y de reforma agravada en lo que respecta a la Sección 1ª.',
  ),
  q(
    '¿Qué combinación es correcta?',
    [
      'Corona = Título II; derechos fundamentales “amparables” nuclearmente = Sección 1ª Cap. II Título I; reforma agravada = art. 168',
      'Corona = Título I; derechos = Título II; reforma agravada = art. 167',
      'Corona = Título IV; derechos = Título Preliminar; reforma agravada = art. 87',
      'Corona = Título VIII; derechos = Título X; reforma agravada = art. 161',
    ],
    0,
    'Ubicación sistemática habitual en tests.',
  ),
  q(
    'El Defensor del Pueblo, conforme al art. 54 CE:',
    [
      'Es un alto comisionado de las Cortes Generales, designado por estas, para la defensa de los derechos del Título I, pudiendo supervisar la actividad de la Administración',
      'Es un órgano del Poder Judicial',
      'Depende jerárquicamente del Gobierno',
      'Solo puede actuar en vía penal',
    ],
    0,
    'Art. 54 CE.',
  ),
  q(
    'La suspensión de los derechos reconocidos en los arts. 17, 18.2, 18.3, 19, 20.1.a) y d), 21, 28.2 y 37.2 puede adoptarse, cuando se declare:',
    [
      'El estado de excepción o de sitio en los términos del art. 55.1 CE',
      'Una simple instrucción ministerial',
      'Un bando municipal ordinario',
      'Una resolución del Defensor del Pueblo',
    ],
    0,
    'Art. 55.1 CE. Además el 55.2 contempla supuestos específicos respecto de determinadas personas en investigaciones relacionadas con bandas armadas o elementos terroristas, con garantías parlamentarias y judiciales.',
  ),
  q(
    'Señale la opción que describe mejor la eficacia del Preámbulo de la CE en la doctrina y praxis habitual de tests:',
    [
      'Carece del valor normativo directo de los artículos, aunque puede orientar la interpretación',
      'Tiene el mismo valor preceptivo que el art. 1 CE',
      'Deroga automáticamente cualquier ley anterior contradictoria por sí solo',
      'Es reformable solo por el art. 168',
    ],
    0,
    'El Preámbulo no se articula como preceptos; la fuerza normativa fuerte está en los artículos.',
  ),
  q(
    'En la LO 3/2007, la “presencia equilibrada” se refiere, en esencia, a:',
    [
      'Una representación significativa de ambos sexos que, salvo excepciones, no debe superar el 60% ni ser inferior al 40% en el conjunto a que se refiera',
      'La paridad exacta 50%-50% en todos los órganos sin excepción posible',
      'La exclusión de hombres de los órganos de selección',
      'Una cuota solo aplicable a empresas privadas de más de 5000 trabajadores',
    ],
    0,
    'Definición clásica de presencia equilibrada en la LO 3/2007 (Disp. Adicional / art. 3 según redacción aplicable).',
  ),
  q(
    'El art. 10.2 CE ordena que las normas relativas a los derechos fundamentales y a las libertades se interpretarán de conformidad con:',
    [
      'La Declaración Universal de Derechos Humanos y los tratados y acuerdos internacionales sobre las mismas materias ratificados por España',
      'Únicamente la jurisprudencia del Tribunal de Cuentas',
      'Solo el derecho foral histórico',
      'Exclusivamente reglamentos de las Diputaciones',
    ],
    0,
    'Art. 10.2 CE.',
  ),
  q(
    '¿Cuál de estas afirmaciones sobre la Corona es INCORRECTA?',
    [
      'El Rey sanciona y promulga las leyes (art. 62.a)',
      'El Rey nombra y separa a los miembros del Gobierno a propuesta de su Presidente (art. 62.d y 100)',
      'El Rey puede disolver las Cortes por sí solo, sin propuesta del Presidente del Gobierno ni límites constitucionales',
      'El Rey es el Jefe del Estado y símbolo de su unidad y permanencia (art. 56.1)',
    ],
    2,
    'La disolución (art. 62.b y 115) se hace a propuesta del Presidente del Gobierno, bajo su exclusiva responsabilidad, y con límites (p. ej. no mientras esté en trámite una moción de censura).',
  ),
  q(
    'Para distinguir reforma ordinaria y agravada en un supuesto, la clave más fiable es:',
    [
      'Comprobar si el contenido afecta al Título Preliminar, a la Sección 1ª del Cap. II del Título I o al Título II (o es reforma total)',
      'Contar el número de artículos reformados: si son más de cinco, siempre es 168',
      'Ver si la reforma la impulsa una CCAA: entonces siempre es 168',
      'Si hay referéndum, necesariamente era 167 y no 168',
    ],
    0,
    'El referéndum es preceptivo en el 168; en el 167 es facultativo si lo piden. El criterio material del 168.1 es el decisivo.',
  ),
  q(
    'El derecho a la tutela judicial efectiva aparece en el artículo:',
    [
      '24',
      '25',
      '23',
      '17',
    ],
    0,
    'Art. 24 CE (Sección 1ª).',
  ),
  q(
    'Señale la afirmación CORRECTA:',
    [
      'El art. 23 reconoce el derecho a participar en los asuntos públicos y el acceso en condiciones de igualdad a las funciones y cargos públicos',
      'El art. 23 es un principio rector del Capítulo III',
      'El art. 23 solo se aplica a nacionales de terceros Estados',
      'El art. 23 carece de protección por amparo',
    ],
    0,
    'Art. 23 CE; está en la Sección 1ª y es amparable.',
  ),
  q(
    'En pruebas de AAPP, una trampa habitual es confundir “igualdad” del art. 14 con:',
    [
      'El mandato de igualdad real del art. 9.2 y con el desarrollo de la LO 3/2007, que no agotan ni sustituyen el 14',
      'La soberanía del art. 1.2',
      'La inviolabilidad del Rey del art. 56.3',
      'La capitalidad del art. 5',
    ],
    0,
    'Conviene manejar los tres planos: 14 (igualdad ante la ley), 9.2 (igualdad real), LO 3/2007 (desarrollo de igualdad efectiva).',
  ),
  q(
    'La CE se configura como norma:',
    [
      'Suprema del ordenamiento, de aplicación directa en gran parte de sus preceptos y parámetro de validez de las demás normas',
      'Programática sin eficacia jurídica',
      'Subordinada a los reglamentos locales',
      'Derogable por simple ley ordinaria en todo caso',
    ],
    0,
    'Principio de supremacía constitucional (arts. 9.1, 161, 163, etc.).',
  ),
  q(
    '¿Qué mayoría se exige en cada Cámara, en el procedimiento del art. 168, para aprobar el principio de reforma y, posteriormente, el nuevo texto?',
    [
      'Mayoría de dos tercios en ambos momentos (aprobación del principio y del nuevo texto por las nuevas Cortes)',
      'Tres quintos para el principio y dos tercios para el texto',
      'Mayoría absoluta en ambos momentos',
      'Mayoría simple y referéndum previo',
    ],
    0,
    'Art. 168.1 y 168.2 CE: dos tercios de cada Cámara para el principio; las nuevas Cortes deben aprobar el nuevo texto por mayoría de dos tercios.',
  ),
])

// ——— TEMA 2 Provincia ———
writeTema(2, [
  q(
    'Conforme al art. 141.1 CE, la provincia es:',
    [
      'Una entidad local determinada por la agrupación de municipios, con personalidad jurídica propia',
      'Una división solo administrativa del Estado sin personalidad jurídica',
      'Una Comunidad Autónoma de régimen especial',
      'Un partido judicial con autonomía constitucional propia',
    ],
    0,
    'Art. 141.1 CE.',
  ),
  q(
    'El gobierno y la administración autónoma de las provincias corresponde a (art. 141.2 CE):',
    [
      'Las Diputaciones u otras Corporaciones de carácter representativo',
      'Exclusivamente al Delegado del Gobierno en la Comunidad Autónoma',
      'A los Alcaldes mancomunados de oficio',
      'Al Senado como Cámara de representación territorial provincial',
    ],
    0,
    'Art. 141.2 CE.',
  ),
  q(
    'Señale la afirmación INCORRECTA sobre la autonomía local en la CE:',
    [
      'El art. 137 reconoce autonomía a municipios, provincias y CCAA para la gestión de sus respectivos intereses',
      'El art. 140 garantiza la autonomía de los municipios',
      'El art. 142 garantiza que las Haciendas locales dispondrán de medios suficientes',
      'El art. 149.1.18.ª atribuye al Estado la competencia exclusiva sobre “bases del régimen jurídico de las AAPP” y, en ese marco, el régimen local se agota sin margen autonómico ni local alguno',
    ],
    3,
    'El 149.1.18.ª habilita bases estatales, pero no elimina la autonomía local ni el desarrollo autonómico compatible. La opción D es una trampa maximalista.',
  ),
  q(
    'En el sistema orgánico típico de una Diputación Provincial, el Pleno:',
    [
      'Está integrado por todos los Diputados y es el órgano de máxima representación política de la Corporación',
      'Lo forman solo el Presidente y los Vicepresidentes',
      'Lo integran los Alcaldes de todos los municipios de la provincia',
      'Es un órgano meramente consultivo sin atribuciones decisorias',
    ],
    0,
    'Configuración clásica LBRL / organización provincial.',
  ),
  q(
    'Entre las atribuciones típicas del Pleno de la Diputación NO se encuentra, con carácter general:',
    [
      'La dirección de la política exterior del Estado',
      'La aprobación de los presupuestos',
      'La aprobación de la plantilla de personal',
      'El control y fiscalización de los órganos de gobierno',
    ],
    0,
    'La política exterior es competencia estatal. El resto son atribuciones plenarias típicas.',
  ),
  q(
    'La Junta de Gobierno de la Diputación:',
    [
      'Asiste al Presidente en el ejercicio de sus atribuciones y su existencia es característica del régimen de las Diputaciones',
      'Sustituye en todo caso al Pleno en la aprobación de ordenanzas',
      'Solo puede existir en municipios de gran población, nunca en Diputaciones',
      'Carece de cualquier función ejecutiva o de asistencia',
    ],
    0,
    'Órgano de asistencia al Presidente en el régimen provincial.',
  ),
  q(
    'Las Comisiones Informativas de la Diputación tienen como función propia:',
    [
      'El estudio, informe y consulta de los asuntos que hayan de ser sometidos a la decisión del Pleno',
      'La ejecución inmediata del presupuesto sin intervención del Presidente',
      'El nombramiento y cese del Presidente',
      'La sustitución automática de la Junta de Gobierno en todas sus competencias',
    ],
    0,
    'Función preparatoria/consultiva típica.',
  ),
  q(
    'El art. 36 LBRL atribuye a las Diputaciones, como competencias propias, entre otras:',
    [
      'La coordinación de servicios municipales entre sí y la asistencia y cooperación jurídica, económica y técnica a los Municipios',
      'La defensa nacional y la acuñación de moneda',
      'La autorización de tratados internacionales',
      'La instrucción de causas penales contra Alcaldes',
    ],
    0,
    'Art. 36 LBRL (competencias propias provinciales).',
  ),
  q(
    'Respecto de la delegación de atribuciones del Presidente de la Diputación, es correcto que:',
    [
      'Puede delegar el ejercicio de sus atribuciones, salvo las que sean indelegables por ley',
      'Puede delegar incluso las atribuciones legalmente indelegables si lo acuerda la Junta',
      'Tiene prohibida cualquier delegación',
      'Solo puede delegar en el Rey',
    ],
    0,
    'Principio general: delegación posible con reserva de indelegables.',
  ),
  q(
    'Los actos del Presidente de la Diputación se formalizan habitualmente como:',
    [
      'Decretos o resoluciones, según el tipo de decisión y la normativa de organización',
      'Leyes orgánicas',
      'Reales decretos-leyes',
      'Sentencias firmes',
    ],
    0,
    'Formas típicas de actos administrativos unipersonales del Presidente.',
  ),
  q(
    'La prestación de servicios de carácter supramunicipal por la Diputación:',
    [
      'Se encuadra entre las funciones/competencias propias vinculadas a la asistencia y cohesión territorial provincial',
      'Está constitucionalmente prohibida',
      'Solo puede realizarse previa autorización del Congreso de los Diputados en cada caso',
      'Corresponde en exclusiva a la Administración General del Estado',
    ],
    0,
    'Lógica del art. 36 LBRL y función provincial.',
  ),
  q(
    'Señale la afirmación más precisa:',
    [
      'La provincia garantiza principios de solidaridad y equilibrio intermunicipal, especialmente frente a disparidades de capacidad entre municipios',
      'La provincia existe solo como circunscripción electoral sin funciones de asistencia',
      'La Diputación sustituye en todo caso a los Ayuntamientos de menos de 5.000 habitantes',
      'Los municipios pierden personalidad jurídica al integrarse en la provincia',
    ],
    0,
    'Función constitucional/legal de la provincia; los municipios conservan autonomía y personalidad.',
  ),
  q(
    'En un proceso selectivo de la Diputación de Alicante que prevé Acuerdo Marco de bolsas compartidas, ello implica, en esencia, que:',
    [
      'Ayuntamientos y entidades adheridas pueden nutrir necesidades de personal de la categoría desde la bolsa constituida, en los términos del Acuerdo',
      'La bolsa solo puede usarse en la AGE',
      'Queda prohibida cualquier cesión de datos de aspirantes incluso con consentimiento y base legal',
      'La adhesión exige ley orgánica estatal',
    ],
    0,
    'Conforme a las bases de la convocatoria de la bolsa de Técnico Medio de Calidad.',
  ),
  q(
    '¿Quién ejerce, con carácter general, el control político de la acción del Presidente y de la Junta de Gobierno en la Diputación?',
    [
      'El Pleno',
      'El Tribunal Constitucional de oficio',
      'El Banco de España',
      'La Comisión Europea',
    ],
    0,
    'Función de control y fiscalización del Pleno.',
  ),
  q(
    'La LBRL es:',
    [
      'La Ley 7/1985, de 2 de abril, Reguladora de las Bases del Régimen Local',
      'La Ley 39/2015 del Procedimiento Administrativo Común',
      'La Ley 40/2015 de Régimen Jurídico del Sector Público',
      'El Real Decreto Legislativo 5/2015 (TREBEP) exclusivamente',
    ],
    0,
    'Identificación normativa básica.',
  ),
  q(
    'Señale la opción correcta sobre la relación municipio–provincia:',
    [
      'La provincia se determina por la agrupación de municipios, pero cada municipio conserva su autonomía para la gestión de sus intereses',
      'La provincia absorbe la personalidad jurídica municipal',
      'Los municipios dependen jerárquicamente de la Diputación en todos los actos',
      'La Diputación puede disolver Ayuntamientos por simple decreto del Presidente',
    ],
    0,
    'Arts. 137, 140 y 141 CE.',
  ),
  q(
    'Una competencia “impropia” o ejercida por delegación/encargo, frente a las propias del art. 36 LBRL, se caracteriza porque:',
    [
      'Su titularidad originaria no es la de la Diputación, sino que se asume por mecanismo de transferencia, delegación o encomienda conforme a ley',
      'Nunca puede ejercerse por una Diputación',
      'Es siempre de ejercicio obligatorio sin financiación',
      'Se confunde necesariamente con una competencia exclusiva del Estado del art. 149 CE',
    ],
    0,
    'Distinción típica: propias / atribuidas / delegadas. En tests importa no llamar “propia” a lo que es delegado.',
  ),
  q(
    'La aprobación de un reglamento orgánico o de carácter general de la Diputación corresponde, en principio:',
    [
      'Al Pleno',
      'A un jefe de servicio sin competencia expresa',
      'Al Registro Civil',
      'Al Defensor del Pueblo',
    ],
    0,
    'Atribución plenaria típica.',
  ),
  q(
    'En la organización provincial, ¿qué afirmación sobre las Comisiones Informativas es correcta?',
    [
      'No deciden normalmente en sustitución del Pleno las materias de reserva legal plenaria; preparan el asunto mediante informe/dictamen',
      'Pueden modificar el presupuesto por sí solas en todo caso',
      'Nombran al personal eventual del Presidente sin límite',
      'Sustituyen al orden jurisdiccional contencioso-administrativo',
    ],
    0,
    'Límite funcional de las Comisiones Informativas.',
  ),
  q(
    'El Presidente de la Diputación:',
    [
      'Ostenta la representación de la Corporación y la dirección del gobierno y administración provinciales',
      'Es el Jefe del Estado en la provincia',
      'Ejerce la potestad legislativa autonómica',
      'Carece de facultades resolutorias propias',
    ],
    0,
    'Posición institucional del Presidente.',
  ),
  q(
    'Señale la trampa conceptual más frecuente en tests de régimen local provincial:',
    [
      'Confundir Diputación (entidad local) con Delegación del Gobierno (AGE) o con la Administración de la CCAA',
      'Distinguir Pleno y Junta de Gobierno',
      'Citar el art. 36 LBRL',
      'Recordar el art. 141 CE',
    ],
    0,
    'Son sujetos distintos con títulos competenciales distintos.',
  ),
  q(
    'La asistencia económica a municipios por parte de la Diputación:',
    [
      'Se articula como cooperación/asistencia propia, sujeta a planes, criterios objetivos y disponibilidad presupuestaria',
      'Equivale a una subvención estatal del art. 149.1.14.ª en todo caso',
      'Está prohibida si el municipio tiene menos de 20.000 habitantes',
      'Solo puede realizarse en metálico mediante entrega al Alcalde sin expediente',
    ],
    0,
    'Marco de cooperación intermunicipal/provincial.',
  ),
  q(
    '¿Cuál de estas funciones encaja mejor en la Diputación y no en el Ayuntamiento?',
    [
      'La coordinación de un servicio entre varios municipios de la provincia y el refuerzo de capacidad de los más pequeños',
      'La gestión urbanística ordinaria del suelo urbano de un único municipio',
      'La recaudación del IBI de un municipio concreto como titular originario del tributo local',
      'La convocatoria de elecciones municipales',
    ],
    0,
    'Función supra/intermunicipal vs competencias municipales típicas.',
  ),
  q(
    'En cuanto a la personalidad jurídica de la Diputación:',
    [
      'Es propia e independiente de la del Estado y de la de los municipios que agrupa',
      'Se confunde con la de la Comunidad Autónoma',
      'Depende de un contrato privado de los Alcaldes',
      'Es solo instrumental sin capacidad de obrar',
    ],
    0,
    'Art. 141 CE / LBRL.',
  ),
  q(
    'Las resoluciones del Presidente pueden ser objeto, en su caso, de:',
    [
      'Recurso administrativo y/o contencioso-administrativo conforme a la legislación aplicable',
      'Recurso de casación penal ordinario',
      'Recurso de amparo directo sin acto administrativo previo en todo caso',
      'Nada: son inmunes por equiparación a la Corona',
    ],
    0,
    'Actos administrativos locales: régimen general de impugnación.',
  ),
  q(
    'La composición del Pleno provincial (sistema electoral de diputados) se caracteriza, en el régimen común, por:',
    [
      'Una elección indirecta a partir de los resultados de las elecciones municipales, con reglas de asignación por partidos judiciales/partido',
      'Sufragio universal directo en circunscripción provincial idéntica al Congreso en todos los aspectos',
      'Designación libre por el Presidente de la CCAA',
      'Cooptación por los secretarios municipales',
    ],
    0,
    'Régimen electoral local: diputados provinciales se eligen por sistema indirecto a partir de las municipales (LOREG).',
  ),
  q(
    'Señale la afirmación CORRECTA sobre indelegabilidad:',
    [
      'Existen atribuciones del Presidente y del Pleno que la ley reserva y no pueden transferirse por mera delegación interna',
      'Todas las competencias del Presidente son delegables sin límite',
      'El Pleno puede delegar la aprobación del presupuesto en un administrativo de base',
      'La Junta de Gobierno puede asumir por delegación la potestad tributaria originaria del Estado',
    ],
    0,
    'Reservas legales de competencia e indelegabilidad.',
  ),
  q(
    'En la convocatoria A2 de Técnico Medio de Calidad de la Diputación de Alicante, la bolsa se enmarca en:',
    [
      'Escala de Administración Especial, Subescala Técnica, subgrupo A2',
      'Subgrupo C2 de Administración General',
      'Personal eventual de confianza política',
      'Cuerpo nacional de Policía',
    ],
    0,
    'Base Primera de la convocatoria.',
  ),
  q(
    'La cooperación provincial con municipios NO debe confundirse con:',
    [
      'Una relación de jerarquía que permita anular actos municipales por mero criterio de oportunidad del Presidente',
      'Asistencia técnica',
      'Apoyo económico sujeto a expediente',
      'Coordinación de servicios cuando proceda legalmente',
    ],
    0,
    'Autonomía municipal: la Diputación coopera/coordina; no es superior jerárquico general.',
  ),
  q(
    '¿Qué trío orgánico describe mejor el “núcleo de gobierno” provincial?',
    [
      'Presidente, Junta de Gobierno y Pleno (con Comisiones Informativas como órgano complementario de preparación)',
      'Solo el Secretario y el Interventor',
      'Delegado del Gobierno, Subdelegado y Fuerzas Armadas',
      'Congreso, Senado y Rey',
    ],
    0,
    'Esquema organizativo típico.',
  ),
  q(
    'Una pregunta tipo test de dificultad alta pediría distinguir “atribuciones del Pleno” vs “del Presidente”. Señale la que es más propia del Presidente:',
    [
      'La dirección superior de la administración provincial ejecutiva y la resolución de recursos cuando le corresponda',
      'La aprobación inicial y definitiva del presupuesto general en todo caso',
      'La aprobación de la plantilla como competencia exclusiva e indelegable suya sin Pleno',
      'El establecimiento de tributos propios provinciales sin pasar por el Pleno',
    ],
    0,
    'Presupuesto, plantilla y potestad tributaria/reglamentaria general suelen ser plenarias; la dirección ejecutiva es presidencial.',
  ),
  q(
    'El art. 36 LBRL menciona también, entre otras, la cooperación en el fomento del desarrollo económico y social y en la planificación del territorio provincial. Ello implica que:',
    [
      'La Diputación puede impulsar políticas de equilibrio territorial provincial compatibles con las competencias municipales y autonómicas',
      'La Diputación sustituye a la CCAA en ordenación del territorio',
      'Los municipios quedan privados de competencias económicas',
      'Se deroga el art. 137 CE',
    ],
    0,
    'Competencia propia de impulso/cooperación, no de sustitución total de otros niveles.',
  ),
])

console.log('1-2 ok')
