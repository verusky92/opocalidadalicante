/**
 * Generates >=30 questions per tema into src/data/questions/tema-XX.ts
 * Run: node scripts/build-questions.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.join(__dirname, '../src/data/questions')
fs.mkdirSync(outDir, { recursive: true })

/** @typedef {{ stem: string, options: [string,string,string,string], correct: 0|1|2|3, explanation: string }} Q */

/** @param {number} temaId @param {Q[]} items */
function writeTema(temaId, items) {
  if (items.length < 30) {
    throw new Error(`Tema ${temaId}: only ${items.length} questions`)
  }
  const pad = String(temaId).padStart(2, '0')
  const exportName = `TEMA_${pad}_QUESTIONS`
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
  const body = `import type { Question } from '../../types'

export const ${exportName}: Question[] = [
${lines.join(',\n')},
]
`
  fs.writeFileSync(path.join(outDir, `tema-${pad}.ts`), body)
  console.log(`tema ${temaId}: ${items.length}`)
}

/** helper to rotate correct answer position for variety */
function q(stem, correctText, wrongs, explanation, correctIndex = 0) {
  const options = ['', '', '', '']
  const w = [...wrongs]
  options[correctIndex] = correctText
  let wi = 0
  for (let i = 0; i < 4; i++) {
    if (i === correctIndex) continue
    options[i] = w[wi++]
  }
  return { stem, options: /** @type {[string,string,string,string]} */ (options), correct: /** @type {0|1|2|3} */ (correctIndex), explanation }
}

// ——— TEMA 1 ———
writeTema(1, [
  q('Según el art. 1.1 CE, España se constituye en:', 'Un Estado social y democrático de Derecho', ['Un Estado federal y confesional', 'Una República parlamentaria', 'Un Estado liberal absolutista'], 'Art. 1.1 CE: Estado social y democrático de Derecho.', 1),
  q('La soberanía nacional reside en:', 'El pueblo español', ['El Rey', 'Las Cortes Generales', 'El Gobierno'], 'Art. 1.2 CE.', 0),
  q('La forma política del Estado español es:', 'La Monarquía parlamentaria', ['La República federal', 'La Monarquía absoluta', 'El Estado confederal'], 'Art. 1.3 CE.', 0),
  q('La Corona se regula en el:', 'Título II de la Constitución', ['Título I', 'Título Preliminar', 'Título IV'], 'Arts. 56 a 65 CE.', 0),
  q('La persona del Rey es:', 'Inviolable y no está sujeta a responsabilidad', ['Responsable ante el Congreso', 'Elegida cada cuatro años', 'Jefe del Gobierno'], 'Art. 56.3 CE.', 0),
  q('Los actos del Rey:', 'Deben ser refrendados; responden quienes refrendan', ['Nunca requieren refrendo', 'Solo los refrenda el TC', 'Son siempre nulos'], 'Arts. 56.3 y 64 CE.', 0),
  q('El principio de igualdad ante la ley está en el artículo:', '14', ['1', '9.3', '23'], 'Art. 14 CE.', 0),
  q('La dignidad de la persona se reconoce en el artículo:', '10', ['2', '14', '53'], 'Art. 10.1 CE.', 0),
  q('Los derechos de la Sección 1ª del Cap. II del Título I comprenden los arts.:', '15 a 29', ['10 a 14', '30 a 38', '39 a 52'], 'Máxima protección; amparo.', 0),
  q('Los principios rectores de la política social y económica están en:', 'Capítulo III del Título I', ['Título II', 'Título VIII', 'Disposición Final'], 'Arts. 39 a 52 CE.', 0),
  q('El recurso de amparo protege, entre otros:', 'Arts. 14 a 29 y objeción de conciencia del 30.2', ['Solo el Título VIII', 'Únicamente derechos laborales', 'Todo el ordenamiento'], 'Art. 53.2 CE.', 0),
  q('La reforma ordinaria (art. 167) exige, en principio:', 'Mayoría de tres quintos de cada Cámara', ['Mayoría simple', 'Unanimidad', 'Solo mayoría del Senado'], 'Art. 167.1 CE.', 0),
  q('La reforma agravada (art. 168) se aplica, entre otros, a:', 'Título Preliminar, Sección 1ª Cap. II Título I o Título II', ['Solo el Título VIII', 'Cualquier artículo indistantemente', 'Solo la Disposición Derogatoria'], 'Art. 168 CE.', 0),
  q('En la reforma del art. 168, tras la aprobación del principio:', 'Se disuelven las Cortes y hay referéndum de ratificación', ['Basta un decreto-ley', 'Decide solo el Rey', 'No hay referéndum nunca'], 'Art. 168 CE: disolución, nuevas Cortes, 2/3 y referéndum.', 0),
  q('La LO 3/2007 tiene por objeto:', 'La igualdad efectiva de mujeres y hombres', ['La reforma de la Corona', 'El régimen electoral', 'La protección de datos'], 'LO 3/2007.', 0),
  q('Un criterio de actuación de las AAPP según la LO 3/2007 es:', 'La transversalidad de género', ['Ignorar la igualdad en el empleo público', 'Prohibir la presencia equilibrada', 'Eliminar el lenguaje no sexista'], 'Mainstreaming / transversalidad.', 0),
  q('El art. 9.2 CE obliga a los poderes públicos a:', 'Promover las condiciones para que la libertad y la igualdad sean reales y efectivas', ['Suprimir los derechos fundamentales', 'Eliminar la autonomía local', 'Delegar la soberanía'], 'Art. 9.2 CE.', 0),
  q('La Constitución de 1978 fue ratificada en referéndum el:', '6 de diciembre de 1978', ['15 de junio de 1977', '23 de febrero de 1981', '29 de diciembre de 1978 (solo sanción)'], 'Referéndum: 6/12/1978.', 0),
  q('España se fundamenta en:', 'La indisoluble unidad de la Nación española', ['La soberanía de las CCAA exclusivamente', 'Un sistema confederal', 'La primacía del derecho foral sobre la CE'], 'Art. 2 CE (también reconoce autonomías).', 0),
  q('El castellano es:', 'La lengua española oficial del Estado', ['La única lengua permitida en España', 'Lengua oficial solo en Madrid', 'Lengua cooficial en todo el territorio sin excepciones'], 'Art. 3.1 CE.', 0),
  q('La capital del Estado es:', 'La villa de Madrid', ['Barcelona', 'Sevilla', 'Valencia'], 'Art. 5 CE.', 0),
  q('Los partidos políticos:', 'Expresan el pluralismo político y son instrumento fundamental para la participación', ['Están prohibidos por la CE', 'Sustituyen a las Cortes', 'No pueden concurrir a elecciones'], 'Art. 6 CE.', 0),
  q('El derecho a la vida se reconoce en el artículo:', '15', ['14', '17', '18'], 'Art. 15 CE.', 0),
  q('La libertad ideológica, religiosa y de culto está en el artículo:', '16', ['20', '21', '27'], 'Art. 16 CE.', 0),
  q('El derecho a la educación se reconoce en el artículo:', '27', ['25', '28', '35'], 'Art. 27 CE.', 0),
  q('La reforma constitucional se regula en el:', 'Título X', ['Título I', 'Título II', 'Título VIII'], 'Arts. 166 a 169 CE.', 0),
  q('La iniciativa de reforma constitucional corresponde a:', 'Las Cortes Generales y, en su caso, las Asambleas de las CCAA (según art. 166 y remisión al 87)', ['Solo al Rey', 'Solo al TC', 'Solo a los Ayuntamientos'], 'Art. 166 CE en relación con el 87.', 0),
  q('La discriminación por razón de sexo está prohibida por:', 'El art. 14 CE y desarrollada por la LO 3/2007', ['Solo el Código Penal', 'Solo normativas autonómicas', 'Ninguna norma constitucional'], 'CE + LO igualdad.', 0),
  q('Los derechos fundamentales vinculan a:', 'Todos los poderes públicos', ['Solo al poder judicial', 'Solo a las CCAA', 'Únicamente a los particulares'], 'Art. 53.1 CE.', 0),
  q('La suspensión de derechos prevista en la CE:', 'Solo puede acordarse en los casos y formas previstos (p. ej. estados de excepción/sitio según art. 55)', ['Puede hacerse por simple circular', 'Es libre para cualquier alcalde', 'No existe en la CE'], 'Art. 55 CE.', 0),
  q('El Defensor del Pueblo:', 'Supervisa la actividad de la Administración y puede interponer amparo', ['Sustituye al Gobierno', 'Es un órgano de la UE', 'Solo actúa en vía penal'], 'Arts. 54 CE y normativa de desarrollo.', 0),
  q('La CE proclama que los españoles son iguales ante la ley sin que pueda prevalecer discriminación por:', 'Nacimiento, raza, sexo, religión, opinión o cualquier otra condición o circunstancia personal o social', ['Solo por renta', 'Solo por edad laboral', 'Únicamente por nacionalidad comunitaria'], 'Art. 14 CE.', 0),
])

// ——— TEMA 2 ———
writeTema(2, [
  q('La provincia es una entidad local determinada por:', 'La agrupación de municipios', ['La agrupación de comarcas', 'El partido judicial', 'La voluntad exclusiva del Estado sin territorio'], 'Art. 141.1 CE.', 0),
  q('El gobierno y administración autónoma de las provincias corresponden a:', 'Diputaciones u otras Corporaciones de carácter representativo', ['Solo al Delegado del Gobierno', 'Las Cortes Generales', 'Los Juzgados de Paz'], 'Art. 141.2 CE.', 0),
  q('La autonomía de municipios y provincias se reconoce en:', 'Los arts. 137 y 140-142 CE', ['Solo el Título II', 'Únicamente tratados UE', 'El art. 56 CE'], 'CE régimen local.', 0),
  q('El Pleno de la Diputación está formado por:', 'Todos los diputados provinciales', ['Solo el Presidente', 'Los alcaldes de la provincia', 'Funcionarios designados'], 'Órgano plenario.', 0),
  q('Corresponde al Pleno, entre otras:', 'Aprobar presupuestos y plantilla de personal', ['Dirigir la política exterior', 'Emitir moneda', 'Convocar elecciones generales'], 'Atribuciones típicas del Pleno.', 0),
  q('La Junta de Gobierno de la Diputación:', 'Asiste al Presidente en el ejercicio de sus atribuciones', ['Sustituye siempre al Pleno', 'Es solo consultiva sin funciones', 'Solo existe en el Estado'], 'Organización provincial LBRL.', 0),
  q('Las Comisiones Informativas:', 'Estudian, informan y dictaminan asuntos del Pleno', ['Ejecutan el presupuesto sin control', 'Nombran al Presidente', 'Sustituyen a la Junta en todo caso'], 'Función preparatoria.', 0),
  q('Una competencia propia típica (art. 36 LBRL) es:', 'Asistencia y cooperación a los Municipios', ['Defensa nacional', 'Política exterior', 'Emisión de moneda'], 'Art. 36 LBRL.', 0),
  q('El Presidente de la Diputación puede delegar:', 'En los términos legales, salvo atribuciones indelegables', ['Nunca', 'Solo en el Rey', 'Solo en alcaldes de otra provincia'], 'Delegación reglada.', 0),
  q('Las resoluciones del Presidente suelen revestir forma de:', 'Decreto o resolución', ['Ley orgánica', 'Sentencia', 'Real decreto-ley'], 'Actos administrativos del Presidente.', 0),
  q('La Diputación se encuadra como:', 'Entidad local de carácter territorial', ['AGE', 'Organismo internacional', 'Empresa privada'], 'LBRL.', 0),
  q('La coordinación de servicios municipales es, tipicamente:', 'Una función propia de la provincia/Diputación', ['Competencia exclusiva de la UE', 'Prohibida por la CE', 'Solo del Senado'], 'Art. 36 LBRL y art. 141 CE.', 0),
  q('El control político de los órganos de gobierno provincial corresponde, en esencia, al:', 'Pleno', ['Tribunal de Cuentas europeo únicamente', 'Consejo de Seguridad de la ONU', 'Banco de España'], 'Función de control del Pleno.', 0),
  q('La LBRL es la:', 'Ley 7/1985, Reguladora de las Bases del Régimen Local', ['Ley 39/2015', 'Ley 40/2015', 'LO 3/2007'], 'LBRL 7/1985.', 0),
  q('La provincia garantiza principios de:', 'Solidaridad y equilibrio intermunicipal', ['Centralismo absoluto', 'Eliminación de municipios', 'Supresión de la autonomía local'], 'Función constitucional/legal de la provincia.', 0),
  q('Los diputados provinciales:', 'Integran el Pleno de la Diputación', ['Forman el Congreso', 'Son jueces', 'Son personal eventual exclusivamente'], 'Composición del Pleno.', 0),
  q('La prestación de servicios de carácter supramunicipal:', 'Puede corresponder a la Diputación', ['Está prohibida', 'Solo la presta la UE', 'Solo el Rey'], 'Competencias provinciales.', 0),
  q('La asistencia jurídica, económica y técnica a municipios:', 'Es competencia típica de la Diputación', ['Es competencia exclusiva de los juzgados', 'No existe en el régimen local', 'Solo la prestan partidos políticos'], 'Art. 36 LBRL.', 0),
  q('El Presidente dirige:', 'El gobierno y la administración provincial', ['El Poder Judicial', 'Las Fuerzas Armadas', 'El Banco Central Europeo'], 'Atribuciones del Presidente.', 0),
  q('Las bases de la convocatoria de la Diputación de Alicante prevén compartir bolsas:', 'Mediante Acuerdo Marco con entidades adheridas', ['Solo con autorización del Congreso', 'Nunca', 'Solo con municipios >100.000 hab.'], 'Bases de la convocatoria.', 0),
  q('La Junta de Gobierno es obligatoria:', 'En las Diputaciones Provinciales (según régimen local)', ['Solo en pedanías', 'Nunca en diputaciones', 'Solo si lo pide la UE'], 'Organización provincial.', 0),
  q('Un reglamento de carácter general de la Diputación lo aprueba, en principio:', 'El Pleno', ['Un administrativo sin competencia', 'El Registro Civil', 'El Defensor del Pueblo'], 'Atribución plenaria típica.', 0),
  q('La personalidad jurídica de la provincia:', 'Es propia', ['Se confunde siempre con la del Estado', 'No existe', 'Depende del alcalde de la capital'], 'Art. 141 CE / LBRL.', 0),
  q('Las materias indelegables del Presidente:', 'No pueden transferirse por delegación', ['Pueden delegarse siempre sin límite', 'Las fija solo un sindicato', 'No existen límites'], 'Límites a la delegación.', 0),
  q('La cooperación en la prestación de servicios municipales busca:', 'Eficiencia y equilibrio territorial', ['Eliminar municipios pequeños siempre', 'Centralizar toda la AGE en Madrid', 'Privatizar la CE'], 'Ratio de la competencia provincial.', 0),
  q('El tablón de anuncios / sede electrónica de la Diputación sirve, entre otros, para:', 'Publicar actos del proceso selectivo', ['Sustituir al BOE en leyes orgánicas', 'Reformar la CE', 'Nombrar al Rey'], 'Publicidad administrativa.', 0),
  q('La Diputación de Alicante, en esta convocatoria, selecciona para categoría:', 'Técnico Medio de Calidad (A2)', ['Grupo C2 exclusivo', 'Subgrupo A1 judicial', 'Personal eventual político'], 'Bases: A2 Administración Especial.', 0),
  q('El orden de fuentes en régimen local incluye:', 'CE, LBRL y demás normativa aplicable', ['Solo circulares internas', 'Solo costumbre internacional', 'Solo reglamentos de fútbol'], 'Sistema de fuentes.', 0),
  q('Las Comisiones Informativas NO:', 'Sustituyen con carácter general las atribuciones indelegables del Pleno', ['Preparan asuntos', 'Informan', 'Dictaminan'], 'Límites funcionales.', 0),
  q('El Presidente puede dictar resoluciones en el ámbito de:', 'Sus competencias legales y delegadas', ['La jurisdicción penal', 'La reforma constitucional', 'La política monetaria'], 'Ámbito competencial.', 0),
  q('La agrupación de municipios que forma la provincia:', 'Determina la entidad local provincial', ['Crea automáticamente una CCAA nueva', 'Elimina los ayuntamientos', 'Impide la autonomía municipal'], 'Art. 141.1 CE.', 0),
  q('En el organigrama político-administrativo provincial, el órgano máximo de representación es:', 'El Pleno', ['Una sección de archivo', 'El adjudicador de un contrato menor aislado', 'El oficial de sala de un juzgado'], 'Pleno como máximo órgano representativo.', 0),
])

console.log('batch 1-2 done')
