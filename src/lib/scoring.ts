/** Puntuación estilo convocatoria: acierto = +1, fallo = −1/3, blanco = 0. Escala 0–10. */

export function rawPoints(correct: number, wrong: number): number {
  return correct - wrong / 3
}

export function scoreOutOf10(correct: number, wrong: number, blank: number): number {
  const total = correct + wrong + blank
  if (total === 0) return 0
  const max = total
  const pts = Math.max(0, rawPoints(correct, wrong))
  return Math.round((pts / max) * 1000) / 100
}

export function passedExam(score: number): boolean {
  return score >= 5
}

export function formatScore(score: number): string {
  return score.toFixed(2).replace(/\.?0+$/, (m) => (m.includes('.') ? m.replace(/0+$/, '').replace(/\.$/, '') : m)) || '0'
}

/** Para UI: muestra 7.33 de forma limpia */
export function formatScoreFixed(score: number): string {
  return score.toFixed(2)
}
