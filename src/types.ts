export type View =
  | 'home'
  | 'temas'
  | 'tema-detail'
  | 'practica'
  | 'srs'
  | 'simulacro'
  | 'fallos'
  | 'casos'
  | 'metodo'

export interface TemaSection {
  title: string
  body: string[]
}

export interface Tema {
  id: number
  title: string
  part: 'general' | 'especifica'
  summary: string[]
  keyPoints: string[]
  sections: TemaSection[]
}

export interface Question {
  id: string
  temaId: number
  stem: string
  options: [string, string, string, string]
  correct: 0 | 1 | 2 | 3
  explanation: string
  tags?: string[]
  /** Convocatoria de origen (p. ej. otra oposición Dipu, no la de Calidad). */
  source?: string
}

export interface CasePrompt {
  id: string
  temaIds: number[]
  title: string
  scenario: string
  prompts: string[]
  guide: string[]
}

export interface QuestionStats {
  attempts: number
  correct: number
  lastResult?: boolean
  lastSeenAt?: string
}

export interface SrsCard {
  questionId: string
  ease: number
  interval: number
  repetitions: number
  dueAt: string
}

export interface ExamAttempt {
  id: string
  date: string
  score: number
  correct: number
  wrong: number
  blank: number
  passed: boolean
  durationSec: number
  questionIds: string[]
}

export interface AppState {
  questionStats: Record<string, QuestionStats>
  srs: Record<string, SrsCard>
  examHistory: ExamAttempt[]
  streak: { current: number; best: number; lastStudyDate: string | null }
  studiedTemas: number[]
  wrongQueue: string[]
  dailyGoal: number
  todayAnswered: number
  todayDate: string
}
