import type { CasePrompt, Question } from '../types'
import { TEMA_01_QUESTIONS } from './questions/tema-01'
import { TEMA_02_QUESTIONS } from './questions/tema-02'
import { TEMA_03_QUESTIONS } from './questions/tema-03'
import { TEMA_04_QUESTIONS } from './questions/tema-04'
import { TEMA_05_QUESTIONS } from './questions/tema-05'
import { TEMA_06_QUESTIONS } from './questions/tema-06'
import { TEMA_07_QUESTIONS } from './questions/tema-07'
import { TEMA_08_QUESTIONS } from './questions/tema-08'
import { TEMA_09_QUESTIONS } from './questions/tema-09'
import { TEMA_10_QUESTIONS } from './questions/tema-10'
import { TEMA_11_QUESTIONS } from './questions/tema-11'
import { TEMA_12_QUESTIONS } from './questions/tema-12'
import { TEMA_13_QUESTIONS } from './questions/tema-13'
import { TEMA_14_QUESTIONS } from './questions/tema-14'
import { TEMA_15_QUESTIONS } from './questions/tema-15'

export const QUESTIONS: Question[] = [
  ...TEMA_01_QUESTIONS,
  ...TEMA_02_QUESTIONS,
  ...TEMA_03_QUESTIONS,
  ...TEMA_04_QUESTIONS,
  ...TEMA_05_QUESTIONS,
  ...TEMA_06_QUESTIONS,
  ...TEMA_07_QUESTIONS,
  ...TEMA_08_QUESTIONS,
  ...TEMA_09_QUESTIONS,
  ...TEMA_10_QUESTIONS,
  ...TEMA_11_QUESTIONS,
  ...TEMA_12_QUESTIONS,
  ...TEMA_13_QUESTIONS,
  ...TEMA_14_QUESTIONS,
  ...TEMA_15_QUESTIONS,
]

export function getQuestionsByTema(temaId: number): Question[] {
  return QUESTIONS.filter((q) => q.temaId === temaId)
}

export function getQuestionById(id: string): Question | undefined {
  return QUESTIONS.find((q) => q.id === id)
}

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function isOficial(q: Question): boolean {
  return Boolean(q.tags?.includes('oficial-dipu'))
}

/**
 * Examen mixto equilibrado por tema.
 * En cada tema prioriza las preguntas oficiales publicadas (p. ej. T1–T2 Dipu).
 */
export function pickExamQuestions(count = 50, temaIds?: number[]): Question[] {
  const ids = temaIds ?? Array.from({ length: 15 }, (_, i) => i + 1)
  // pop() saca del final → oficiales al final del array
  const byTema = ids.map((id) => {
    const pool = getQuestionsByTema(id)
    const oficial = shuffle(pool.filter(isOficial))
    const rest = shuffle(pool.filter((q) => !isOficial(q)))
    return [...rest, ...oficial]
  })
  const picked: Question[] = []
  let guard = 0
  while (picked.length < count && guard < count * 20) {
    for (const bucket of byTema) {
      if (picked.length >= count) break
      const next = bucket.pop()
      if (next) picked.push(next)
    }
    guard++
  }
  return shuffle(picked)
}

export const CASES: CasePrompt[] = [
  {
    id: 'c1',
    temaIds: [6, 7, 15],
    title: 'Tiempos de respuesta en un servicio provincial',
    scenario:
      'Un área de la Diputación recibe quejas por demoras en un trámite de asistencia a municipios. No hay mapa de procesos actualizado ni indicadores de ciclo de tiempo. La dirección te pide un plan de diagnóstico y mejora en 90 días.',
    prompts: [
      '¿Cómo identificarías el proceso clave y sus entradas/salidas?',
      '¿Qué indicadores propondrías (eficacia, eficiencia, calidad percibida)?',
      '¿Qué herramientas básicas usarías en el análisis de causas?',
      '¿Cómo distinguirías causas comunes y especiales de la variabilidad?',
    ],
    guide: [
      'Definir proceso (SIPOC/flujograma), dueño y límites.',
      'Indicadores: tiempo medio/percentil 90, % en plazo, retrabajos, satisfacción.',
      'Pareto de causas de demora + Ishikawa + 5 Porqués.',
      'Gráfico de control o seguimiento temporal para ver estabilidad.',
      'PDCA: acciones, responsables, plazos y verificación.',
    ],
  },
  {
    id: 'c2',
    temaIds: [12, 13, 11],
    title: 'Camino hacia ISO 9001',
    scenario:
      'La organización quiere implantar un SGC certificable. Existe documentación dispersa, auditorías internas irregulares y confusión entre EFQM, CAF e ISO 9001.',
    prompts: [
      'Explica diferencias entre ISO 9001, EFQM y CAF para orientar a la dirección.',
      'Resume las fases hasta la certificación.',
      '¿Qué papel tienen las auditorías internas (ISO 19011)?',
      '¿Qué es ENAC y por qué importa la acreditación del certificador?',
    ],
    guide: [
      'ISO 9001 = requisitos certificables; EFQM/CAF = excelencia/autoevaluación (CAF para AAPP).',
      'Diagnóstico → diseño procesos → documentación → implantación → auditoría interna → revisión → certificación.',
      '19011: planificar, ejecutar con evidencias, informar, seguimiento.',
      'Certificación por tercera parte; acreditación reconoce competencia del organismo (ENAC).',
    ],
  },
  {
    id: 'c3',
    temaIds: [4, 9, 10],
    title: 'De la estrategia al cuadro de mando',
    scenario:
      'Hay una misión genérica (“mejorar la calidad de los servicios”) sin despliegue. Se pide un CMI adaptado a una diputación y objetivos para el próximo año.',
    prompts: [
      'Propón misión/visión/valores coherentes (breves).',
      'Define 2 objetivos estratégicos y 4 operativos SMART.',
      'Esboza perspectivas de un CMI público.',
      'Indica cómo encajaría una DPO con esos objetivos.',
    ],
    guide: [
      'Misión centrada en asistencia municipal/ciudadanía; visión a 3-5 años; valores (transparencia, mejora, equidad).',
      'SMART: específico, medible, alcanzable, relevante, temporal.',
      'Perspectivas: ciudadanía/resultados, procesos, personas/aprendizaje, recursos.',
      'DPO: acordar objetivos con unidades, seguimiento periódico, evaluación.',
    ],
  },
  {
    id: 'c4',
    temaIds: [5, 14, 8],
    title: 'Carta de Servicios y costes de no calidad',
    scenario:
      'Se quiere publicar una Carta de Servicios de un área de atención. Hay muchas reclamaciones y retrabajos internos no medidos.',
    prompts: [
      '¿Qué contenidos mínimos incluirías en la Carta?',
      '¿Cómo medirías satisfacción y cumplimiento de compromisos?',
      'Clasifica ejemplos de costes de prevención, detección y fallos (internos/externos).',
      'Propón 3 acciones para reducir costes de fallos.',
    ],
    guide: [
      'Servicios, derechos, estándares, indicadores, quejas, horarios, responsables.',
      'Encuestas + % cumplimiento de plazos + tiempo de respuesta a reclamaciones.',
      'Prevención: formación/estándares; detección: controles; internos: retrabajo; externos: reclamaciones.',
      'Estandarizar, prevenir errores frecuentes (Pareto), mejorar información al usuario.',
    ],
  },
  {
    id: 'c5',
    temaIds: [1, 2],
    title: 'Marco institucional (repaso escrito corto)',
    scenario:
      'Aunque la 2ª parte del examen se centra en temas 3-15, conviene dominar el marco: CE e institución provincial para contextualizar respuestas.',
    prompts: [
      'Resume en 8-10 líneas el art. 1 CE y la forma política del Estado.',
      'Explica reforma ordinaria vs agravada.',
      'Describe órganos de la Diputación y una competencia del art. 36 LBRL.',
      'Relaciona LO 3/2007 con la actuación de las AAPP.',
    ],
    guide: [
      'Estado social y democrático de Derecho; soberanía del pueblo; Monarquía parlamentaria.',
      '167 = 3/5; 168 = Preliminar / derechos Sección 1ª / Título II + disolución + referéndum.',
      'Pleno, Presidente, Junta de Gobierno, Comisiones; asistencia a municipios.',
      'Transversalidad, presencia equilibrada, no discriminación, lenguaje inclusivo, etc.',
    ],
  },
]
