import type { AppState, ExamAttempt, QuestionStats, SrsCard } from '../types'

const KEY = 'oposicion-calidad-dipu-v1'

const defaultState = (): AppState => ({
  questionStats: {},
  srs: {},
  examHistory: [],
  streak: { current: 0, best: 0, lastStudyDate: null },
  studiedTemas: [],
  wrongQueue: [],
  dailyGoal: 40,
  todayAnswered: 0,
  todayDate: todayStr(),
})

export function todayStr(): string {
  return new Date().toISOString().slice(0, 10)
}

export function loadState(): AppState {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return defaultState()
    const parsed = JSON.parse(raw) as AppState
    if (parsed.todayDate !== todayStr()) {
      parsed.todayDate = todayStr()
      parsed.todayAnswered = 0
    }
    return { ...defaultState(), ...parsed }
  } catch {
    return defaultState()
  }
}

export function saveState(state: AppState): void {
  localStorage.setItem(KEY, JSON.stringify(state))
}

export function touchStreak(state: AppState): AppState {
  const today = todayStr()
  const last = state.streak.lastStudyDate
  if (last === today) return state

  let current = 1
  if (last) {
    const prev = new Date(last + 'T12:00:00')
    const now = new Date(today + 'T12:00:00')
    const diff = Math.round((now.getTime() - prev.getTime()) / 86400000)
    current = diff === 1 ? state.streak.current + 1 : 1
  }
  return {
    ...state,
    streak: {
      current,
      best: Math.max(state.streak.best, current),
      lastStudyDate: today,
    },
  }
}

export function recordAnswer(
  state: AppState,
  questionId: string,
  correct: boolean,
): AppState {
  const prev: QuestionStats = state.questionStats[questionId] ?? {
    attempts: 0,
    correct: 0,
  }
  const questionStats = {
    ...state.questionStats,
    [questionId]: {
      attempts: prev.attempts + 1,
      correct: prev.correct + (correct ? 1 : 0),
      lastResult: correct,
      lastSeenAt: new Date().toISOString(),
    },
  }

  let wrongQueue = state.wrongQueue.filter((id) => id !== questionId)
  if (!correct) wrongQueue = [questionId, ...wrongQueue]

  let next = touchStreak({
    ...state,
    questionStats,
    wrongQueue,
    todayAnswered: state.todayAnswered + 1,
  })
  next = upsertSrs(next, questionId, correct ? 4 : 1)
  return next
}

/** SM-2 simplificado (calidad 0-5). */
export function upsertSrs(state: AppState, questionId: string, quality: number): AppState {
  const now = new Date()
  const prev: SrsCard = state.srs[questionId] ?? {
    questionId,
    ease: 2.5,
    interval: 0,
    repetitions: 0,
    dueAt: now.toISOString(),
  }

  let { ease, interval, repetitions } = prev
  if (quality < 3) {
    repetitions = 0
    interval = 1
  } else {
    if (repetitions === 0) interval = 1
    else if (repetitions === 1) interval = 3
    else interval = Math.round(interval * ease)
    repetitions += 1
  }
  ease = Math.max(1.3, ease + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)))

  const due = new Date(now)
  due.setDate(due.getDate() + Math.max(1, interval))

  return {
    ...state,
    srs: {
      ...state.srs,
      [questionId]: {
        questionId,
        ease,
        interval,
        repetitions,
        dueAt: due.toISOString(),
      },
    },
  }
}

export function dueSrsIds(state: AppState, limit = 30): string[] {
  const now = Date.now()
  return Object.values(state.srs)
    .filter((c) => new Date(c.dueAt).getTime() <= now)
    .sort((a, b) => new Date(a.dueAt).getTime() - new Date(b.dueAt).getTime())
    .slice(0, limit)
    .map((c) => c.questionId)
}

export function markTemaStudied(state: AppState, temaId: number): AppState {
  if (state.studiedTemas.includes(temaId)) return state
  return { ...state, studiedTemas: [...state.studiedTemas, temaId] }
}

export function addExamAttempt(state: AppState, attempt: ExamAttempt): AppState {
  return {
    ...state,
    examHistory: [attempt, ...state.examHistory].slice(0, 30),
  }
}

export function accuracyForTema(
  state: AppState,
  questionIds: string[],
): { attempts: number; correct: number; rate: number | null } {
  let attempts = 0
  let correct = 0
  for (const id of questionIds) {
    const s = state.questionStats[id]
    if (!s) continue
    attempts += s.attempts
    correct += s.correct
  }
  return {
    attempts,
    correct,
    rate: attempts === 0 ? null : correct / attempts,
  }
}
