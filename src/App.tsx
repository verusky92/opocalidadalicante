import { useCallback, useMemo, useState } from 'react'
import {
  BookOpen,
  Brain,
  ClipboardList,
  Flame,
  GraduationCap,
  RotateCcw,
  Target,
  Timer,
  Trophy,
} from 'lucide-react'
import { Quiz } from './components/Quiz'
import {
  CASES,
  QUESTIONS,
  getQuestionById,
  getQuestionsByTema,
  getUnidadCalidadQuestions,
  pickExamQuestions,
  shuffle,
} from './data/questions'
import { TEMAS } from './data/temas'
import { UNIDAD_CALIDAD_AUDIT, UNIDAD_CALIDAD_UNITS } from './data/unidad-calidad-dipu'
import { formatScoreFixed, passedExam, scoreOutOf10 } from './lib/scoring'
import {
  accuracyForTema,
  addExamAttempt,
  dueSrsIds,
  loadState,
  markTemaStudied,
  recordAnswer,
  saveState,
} from './lib/storage'
import type { AppState, ExamAttempt, View } from './types'
import './App.css'

type Session =
  | { kind: 'none' }
  | { kind: 'quiz'; questions: typeof QUESTIONS; title: string; subtitle?: string }
  | { kind: 'exam'; questions: typeof QUESTIONS; timeLimitSec: number; label: string }
  | { kind: 'exam-result'; attempt: ExamAttempt; detail: { id: string; ok: boolean | null }[] }

export default function App() {
  const [state, setState] = useState<AppState>(() => loadState())
  const [view, setView] = useState<View>('home')
  const [temaId, setTemaId] = useState<number | null>(null)
  const [session, setSession] = useState<Session>({ kind: 'none' })
  const [caseId, setCaseId] = useState<string | null>(null)
  const [showGuide, setShowGuide] = useState(false)
  const [unidadUnitId, setUnidadUnitId] = useState<string | null>(null)

  const persist = useCallback((updater: (s: AppState) => AppState) => {
    setState((prev) => {
      const next = updater(prev)
      saveState(next)
      return next
    })
  }, [])

  const onAnswer = useCallback(
    (questionId: string, correct: boolean) => {
      persist((s) => recordAnswer(s, questionId, correct))
    },
    [persist],
  )

  const dueCount = dueSrsIds(state).length
  const wrongCount = state.wrongQueue.length
  const goalPct = Math.min(100, Math.round((state.todayAnswered / state.dailyGoal) * 100))

  const temaStats = useMemo(
    () =>
      TEMAS.map((t) => {
        const qs = getQuestionsByTema(t.id).map((q) => q.id)
        return { tema: t, ...accuracyForTema(state, qs) }
      }),
    [state],
  )

  const weakTemas = useMemo(
    () =>
      [...temaStats]
        .filter((t) => t.attempts >= 3 && t.rate !== null && t.rate < 0.7)
        .sort((a, b) => (a.rate ?? 1) - (b.rate ?? 1))
        .slice(0, 3),
    [temaStats],
  )

  const startTemaPractice = (id: number, mode: 'full' | 'quick' = 'full') => {
    const all = shuffle(getQuestionsByTema(id))
    const qs = mode === 'quick' ? all.slice(0, Math.min(15, all.length)) : all
    persist((s) => markTemaStudied(s, id))
    setSession({
      kind: 'quiz',
      questions: qs,
      title: `Test tema ${id}`,
      subtitle:
        mode === 'quick'
          ? `Repaso rápido · ${qs.length} preguntas`
          : TEMAS.find((t) => t.id === id)?.title,
    })
  }

  const startMixed = (count = 25) => {
    setSession({
      kind: 'quiz',
      questions: pickExamQuestions(count),
      title: 'Práctica mezclada',
      subtitle: `${count} preguntas de todos los temas (con feedback)`,
    })
  }

  const startWeak = () => {
    const ids = weakTemas.flatMap((w) => getQuestionsByTema(w.tema.id))
    const pool = ids.length ? ids : QUESTIONS
    setSession({
      kind: 'quiz',
      questions: shuffle(pool).slice(0, 15),
      title: 'Refuerzo de puntos débiles',
      subtitle: weakTemas.map((w) => `T${w.tema.id}`).join(' · ') || 'Repaso general',
    })
  }

  const startSrs = () => {
    let ids = dueSrsIds(state, 25)
    if (ids.length === 0) {
      ids = shuffle(QUESTIONS)
        .slice(0, 15)
        .map((q) => q.id)
    }
    const qs = ids.map((id) => getQuestionById(id)).filter((q): q is NonNullable<typeof q> => Boolean(q))
    setSession({
      kind: 'quiz',
      questions: qs,
      title: 'Repetición espaciada',
      subtitle: 'Prioriza lo que toca repasar hoy',
    })
  }

  const startWrong = () => {
    const qs = state.wrongQueue
      .map((id) => getQuestionById(id))
      .filter((q): q is NonNullable<typeof q> => Boolean(q))
    if (!qs.length) return
    setSession({
      kind: 'quiz',
      questions: shuffle(qs).slice(0, 20),
      title: 'Repaso de fallos',
      subtitle: `${qs.length} en cola`,
    })
  }

  const startUnidadQuiz = (mode: 'full' | 'quick' = 'full') => {
    const all = shuffle(getUnidadCalidadQuestions())
    const qs = mode === 'quick' ? all.slice(0, Math.min(15, all.length)) : all
    setSession({
      kind: 'quiz',
      questions: qs,
      title: 'Test Unidad de Calidad (Dipu)',
      subtitle:
        mode === 'quick'
          ? `Repaso rápido · ${qs.length} preguntas`
          : 'Material Dipu Alicante actualizado · no entra en el simulacro 1–15',
    })
  }

  const startExam = (
    count: number,
    opts?: { temaIds?: number[]; label?: string },
  ) => {
    const questions = pickExamQuestions(count, opts?.temaIds)
    setSession({
      kind: 'exam',
      questions,
      timeLimitSec: count * 60,
      label: opts?.label ?? `Simulacro ${count}`,
    })
  }

  const onExamFinish = useCallback(
    (result: { answers: Record<string, number | null>; durationSec: number }) => {
      if (session.kind !== 'exam') return
      const { questions } = session
      let correct = 0
      let wrong = 0
      let blank = 0
      const detail: { id: string; ok: boolean | null }[] = []
      const graded: { id: string; ok: boolean }[] = []
      for (const q of questions) {
        const a = result.answers[q.id]
        if (a === null || a === undefined) {
          blank++
          detail.push({ id: q.id, ok: null })
        } else if (a === q.correct) {
          correct++
          detail.push({ id: q.id, ok: true })
          graded.push({ id: q.id, ok: true })
        } else {
          wrong++
          detail.push({ id: q.id, ok: false })
          graded.push({ id: q.id, ok: false })
        }
      }
      const score = scoreOutOf10(correct, wrong, blank)
      const attempt: ExamAttempt = {
        id: crypto.randomUUID(),
        date: new Date().toISOString(),
        score,
        correct,
        wrong,
        blank,
        passed: passedExam(score),
        durationSec: result.durationSec,
        questionIds: questions.map((q) => q.id),
      }
      persist((s) => {
        let next = s
        for (const g of graded) next = recordAnswer(next, g.id, g.ok)
        return addExamAttempt(next, attempt)
      })
      setSession({ kind: 'exam-result', attempt, detail })
    },
    [persist, session],
  )

  if (session.kind === 'quiz') {
    return (
      <Quiz
        questions={session.questions}
        title={session.title}
        subtitle={session.subtitle}
        onClose={() => setSession({ kind: 'none' })}
        onAnswer={onAnswer}
      />
    )
  }

  if (session.kind === 'exam') {
    return (
      <Quiz
        questions={session.questions}
        title={session.label}
        subtitle={`${session.questions.length} preguntas · −1/3 por fallo · blanco = 0`}
        onClose={() => setSession({ kind: 'none' })}
        onAnswer={onAnswer}
        examMode
        timeLimitSec={session.timeLimitSec}
        onExamFinish={onExamFinish}
      />
    )
  }

  if (session.kind === 'exam-result') {
    const { attempt } = session
    return (
      <div className="app-shell">
        <div className="panel result-panel">
          <p className="eyebrow">Simulacro</p>
          <h1 className={attempt.passed ? 'pass' : 'fail'}>
            {formatScoreFixed(attempt.score)} / 10
          </h1>
          <p>
            {attempt.passed ? 'Apto (≥ 5)' : 'No apto (< 5)'} · {attempt.correct} aciertos ·{' '}
            {attempt.wrong} fallos · {attempt.blank} en blanco ·{' '}
            {Math.floor(attempt.durationSec / 60)} min
          </p>
          <p className="muted">
            Fórmula de la convocatoria: acierto +1, error −1/3, blanco 0; escala a 0–10.
          </p>
          <div className="row-actions">
            <button type="button" className="btn btn-primary" onClick={() => setSession({ kind: 'none' })}>
              Volver
            </button>
            <button type="button" className="btn" onClick={startWrong}>
              Repasar fallos
            </button>
          </div>
        </div>
      </div>
    )
  }

  const activeCase = CASES.find((c) => c.id === caseId)
  const activeTema = TEMAS.find((t) => t.id === temaId)
  const activeUnidadUnit = UNIDAD_CALIDAD_UNITS.find((u) => u.id === unidadUnitId)

  return (
    <div className="app-shell">
      <header className="top">
        <div>
          <p className="eyebrow">Diputación de Alicante · A2</p>
          <h1 className="brand">Calibre</h1>
          <p className="tagline">Técnico Medio de Calidad — estudio activo</p>
        </div>
        <div className="top-stats">
          <div className="stat-chip">
            <Flame size={16} /> {state.streak.current} días
          </div>
          <div className="stat-chip">
            <Target size={16} /> {state.todayAnswered}/{state.dailyGoal} hoy
          </div>
        </div>
      </header>

      <nav className="nav">
        {(
          [
            ['home', 'Inicio'],
            ['temas', 'Temario'],
            ['unidad-dipu', 'Unidad Dipu'],
            ['simulacro', 'Exámenes'],
            ['casos', '2ª parte'],
            ['metodo', 'Método'],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            className={
              view === id || (view === 'tema-detail' && id === 'temas') ? 'nav-item active' : 'nav-item'
            }
            onClick={() => {
              setView(id)
              setTemaId(null)
              setCaseId(null)
              setUnidadUnitId(null)
            }}
          >
            {label}
          </button>
        ))}
      </nav>

      {view === 'home' && (
        <main className="main">
          <section className="hero-study">
            <div>
              <h2>Estudia como se aprueba: recordando, no releyendo</h2>
              <p>
                Recuerdo activo, repetición espaciada, simulacros con la misma penalización que la
                convocatoria y refuerzo de fallos. {QUESTIONS.length} preguntas · 15 temas.
              </p>
            </div>
            <div className="goal-ring" style={{ ['--p' as string]: `${goalPct}%` }}>
              <span>{goalPct}%</span>
              <small>meta diaria</small>
            </div>
          </section>

          <div className="card-grid actions">
            <button type="button" className="action-card" onClick={startSrs}>
              <Brain size={22} />
              <strong>Repaso espaciado</strong>
              <span>{dueCount > 0 ? `${dueCount} pendientes` : 'Sesión corta de mantenimiento'}</span>
            </button>
            <button type="button" className="action-card" onClick={() => startMixed(25)}>
              <BookOpen size={22} />
              <strong>Práctica mezclada</strong>
              <span>25 preguntas de todos los temas</span>
            </button>
            <button
              type="button"
              className="action-card"
              onClick={() => {
                setView('unidad-dipu')
                setUnidadUnitId(null)
              }}
            >
              <GraduationCap size={22} />
              <strong>Unidad Calidad Dipu</strong>
              <span>Material propio Alicante · actualizado 2026</span>
            </button>
            <button type="button" className="action-card accent" onClick={() => startExam(50)}>
              <Timer size={22} />
              <strong>Simulacro 50</strong>
              <span>50 min · −1/3 · corte 5</span>
            </button>
            <button
              type="button"
              className="action-card"
              onClick={startWrong}
              disabled={!wrongCount}
            >
              <RotateCcw size={22} />
              <strong>Cola de fallos</strong>
              <span>{wrongCount ? `${wrongCount} por repasar` : 'Sin fallos pendientes'}</span>
            </button>
          </div>

          {weakTemas.length > 0 && (
            <section className="panel">
              <h3>
                <Trophy size={18} /> Puntos débiles
              </h3>
              <ul className="weak-list">
                {weakTemas.map((w) => (
                  <li key={w.tema.id}>
                    <button type="button" onClick={() => startTemaPractice(w.tema.id)}>
                      Tema {w.tema.id}: {w.tema.title}
                      <span>{Math.round((w.rate ?? 0) * 100)}%</span>
                    </button>
                  </li>
                ))}
              </ul>
              <button type="button" className="btn btn-primary" onClick={startWeak}>
                Entrenar débiles
              </button>
            </section>
          )}

          {state.examHistory.length > 0 && (
            <section className="panel">
              <h3>Últimos simulacros</h3>
              <ul className="history">
                {state.examHistory.slice(0, 5).map((e) => (
                  <li key={e.id}>
                    <span>{new Date(e.date).toLocaleDateString('es-ES')}</span>
                    <strong className={e.passed ? 'pass' : 'fail'}>
                      {formatScoreFixed(e.score)}
                    </strong>
                    <span>
                      {e.correct}✓ {e.wrong}✗ {e.blank}—
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </main>
      )}

      {(view === 'temas' || view === 'tema-detail') && !activeTema && (
        <main className="main">
          <section className="panel">
            <h2>Temario de la convocatoria</h2>
            <p className="muted">
              Flujo recomendado: abre un tema → lee el temario → haz su test (32 preguntas). Después
              entra en Exámenes para mezclar temas como el día de la prueba.
            </p>
          </section>
          <div className="tema-list">
            {temaStats.map(({ tema, attempts, rate }) => (
              <button
                key={tema.id}
                type="button"
                className="tema-row"
                onClick={() => {
                  setTemaId(tema.id)
                  setView('tema-detail')
                }}
              >
                <span className={`pill ${tema.part}`}>{tema.part === 'general' ? 'General' : 'Calidad'}</span>
                <div>
                  <strong>
                    Tema {tema.id}. {tema.title}
                  </strong>
                  <span>
                    {getQuestionsByTema(tema.id).length} preguntas
                    {attempts > 0 && rate !== null ? ` · acierto ${Math.round(rate * 100)}%` : ''}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </main>
      )}

      {view === 'tema-detail' && activeTema && (
        <main className="main">
          <button type="button" className="btn btn-ghost" onClick={() => { setTemaId(null); setView('temas') }}>
            ← Temario
          </button>
          <article className="panel tema-article">
            <span className={`pill ${activeTema.part}`}>
              {activeTema.part === 'general' ? 'Parte general' : 'Parte específica'}
            </span>
            <h2>
              Tema {activeTema.id}. {activeTema.title}
            </h2>
            <p className="flow-hint">
              1) Lee el temario · 2) Haz el test de este tema · 3) Cuando lleves varios, ve a
              Exámenes mezclados
            </p>
            {(activeTema.id === 1 || activeTema.id === 2) && (
              <p className="notice-otras-conv">
                En este tema hay preguntas oficiales de <strong>otras convocatorias</strong> de la
                Diputación (Auxiliar Servicios, Auxiliar Administración General, etc.). Sirven para
                practicar el mismo bloque temático; no son del examen de Técnico Medio de Calidad.
              </p>
            )}
            {activeTema.sections.map((sec) => (
              <section key={sec.title} className="tema-section">
                <h3>{sec.title}</h3>
                {sec.body.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </section>
            ))}
            <h3>Anclas mentales</h3>
            <ul>
              {activeTema.keyPoints.map((k) => (
                <li key={k}>{k}</li>
              ))}
            </ul>
            <div className="row-actions sticky-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => startTemaPractice(activeTema.id, 'full')}
              >
                Test completo del tema ({getQuestionsByTema(activeTema.id).length})
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => startTemaPractice(activeTema.id, 'quick')}
              >
                Repaso rápido (15)
              </button>
            </div>
          </article>
        </main>
      )}

      {view === 'unidad-dipu' && !unidadUnitId && (
        <main className="main">
          <section className="panel">
            <h2>Unidad de Calidad — Diputación de Alicante</h2>
            <p>
              Contenido basado en los temarios de la Unidad/Sección de Calidad de la Dipu
              (2005 y temas orientativos de la convocatoria 2008/2009),{' '}
              <strong>revisado normativamente</strong> ({UNIDAD_CALIDAD_AUDIT.reviewedAt}).
            </p>
            <p className="flow-hint">{UNIDAD_CALIDAD_AUDIT.headline}</p>
            <details className="audit-details">
              <summary>Qué estaba desactualizado en los PDF originales</summary>
              <ul className="audit-list">
                {UNIDAD_CALIDAD_AUDIT.outdatedFound.map((item) => (
                  <li key={item.original}>
                    <strong>Original:</strong> {item.original}
                    <br />
                    <strong>Actual:</strong> {item.current}
                  </li>
                ))}
              </ul>
            </details>
            <div className="row-actions" style={{ marginTop: '1rem' }}>
              <button type="button" className="btn btn-primary" onClick={() => startUnidadQuiz('full')}>
                Test completo ({getUnidadCalidadQuestions().length})
              </button>
              <button type="button" className="btn" onClick={() => startUnidadQuiz('quick')}>
                Repaso rápido (15)
              </button>
            </div>
          </section>
          <div className="tema-list">
            {UNIDAD_CALIDAD_UNITS.map((unit, i) => (
              <button
                key={unit.id}
                type="button"
                className="tema-row"
                onClick={() => setUnidadUnitId(unit.id)}
              >
                <span className="pill especifica">Dipu</span>
                <div>
                  <strong>
                    {i + 1}. {unit.title}
                  </strong>
                  <span>{unit.summary}</span>
                </div>
              </button>
            ))}
          </div>
          <p className="muted-note">
            Este banco es de refuerzo con material propio Dipu; no se mezcla en los simulacros de
            los 15 temas del temario Calibre.
          </p>
        </main>
      )}

      {view === 'unidad-dipu' && activeUnidadUnit && (
          <main className="main">
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => setUnidadUnitId(null)}
            >
              ← Unidad Dipu
            </button>
            <article className="panel tema-article">
              <span className="pill especifica">Material Dipu Alicante (actualizado)</span>
              <h2>{activeUnidadUnit.title}</h2>
              <p>{activeUnidadUnit.summary}</p>
              <div className="updates-box">
                <strong>Actualizaciones respecto al PDF original</strong>
                <ul>
                  {activeUnidadUnit.updates.map((u) => (
                    <li key={u}>{u}</li>
                  ))}
                </ul>
              </div>
              {activeUnidadUnit.sections.map((sec) => (
                <section key={sec.title} className="tema-section">
                  <h3>{sec.title}</h3>
                  {sec.body.map((p) => (
                    <p key={p.slice(0, 48)}>{p}</p>
                  ))}
                </section>
              ))}
              <div className="row-actions sticky-actions">
                <button type="button" className="btn btn-primary" onClick={() => startUnidadQuiz('full')}>
                  Test del material Dipu ({getUnidadCalidadQuestions().length})
                </button>
                <button type="button" className="btn" onClick={() => startUnidadQuiz('quick')}>
                  Repaso rápido (15)
                </button>
              </div>
            </article>
          </main>
      )}

      {view === 'simulacro' && (
        <main className="main">
          <section className="panel">
            <h2>
              <ClipboardList size={22} /> Exámenes mezclados
            </h2>
            <p>
              Preguntas de varios temas, sin ver la solución hasta el final. Misma penalización que
              la convocatoria (−1/3). Tiempo: 1 minuto por pregunta.
            </p>
            <ul className="rules">
              <li>Error = −1/3 · blanco = 0 · corte orientativo 5/10</li>
              <li>
                Banco total: {QUESTIONS.length} preguntas · en T1–T2 hay preguntas oficiales de{' '}
                <strong>otras convocatorias</strong> de la Dipu (Auxiliar, etc.), no de la bolsa de
                Técnico Medio de Calidad
              </li>
            </ul>
          </section>
          <div className="card-grid actions">
            <button type="button" className="action-card accent" onClick={() => startExam(50)}>
              <Timer size={22} />
              <strong>Oficial 50</strong>
              <span>Como la 1ª parte · 50 min</span>
            </button>
            <button type="button" className="action-card" onClick={() => startExam(25, { label: 'Medio simulacro 25' })}>
              <Timer size={22} />
              <strong>Medio 25</strong>
              <span>25 min · todos los temas</span>
            </button>
            <button
              type="button"
              className="action-card"
              onClick={() =>
                startExam(46, {
                  temaIds: [1, 2],
                  label: 'T1–T2 con oficiales Dipu',
                })
              }
            >
              <BookOpen size={22} />
              <strong>Mix T1–T2 oficiales</strong>
              <span>46 preg. · otras convocatorias Dipu (CE/igualdad y provincia)</span>
            </button>
            <button
              type="button"
              className="action-card"
              onClick={() =>
                startExam(20, {
                  temaIds: [1, 2],
                  label: 'Solo parte general (T1–T2)',
                })
              }
            >
              <BookOpen size={22} />
              <strong>Solo general corto</strong>
              <span>20 preg. · prioriza oficiales Dipu</span>
            </button>
            <button
              type="button"
              className="action-card"
              onClick={() =>
                startExam(40, {
                  temaIds: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                  label: 'Solo específica (T3–T15)',
                })
              }
            >
              <BookOpen size={22} />
              <strong>Solo calidad</strong>
              <span>Temas 3–15 mezclados</span>
            </button>
            <button type="button" className="action-card" onClick={() => startMixed(30)}>
              <Brain size={22} />
              <strong>Mezcla con feedback</strong>
              <span>30 preguntas · ves explicación al instante</span>
            </button>
            <button type="button" className="action-card" onClick={() => startExam(15, { label: 'Sprint 15' })}>
              <Timer size={22} />
              <strong>Sprint 15</strong>
              <span>Calentamiento rápido</span>
            </button>
          </div>
        </main>
      )}

      {view === 'casos' && (
        <main className="main">
          <section className="panel">
            <h2>
              <GraduationCap size={22} /> Segunda parte: casos y preguntas cortas
            </h2>
            <p>
              Temas 3–15. Entrena a escribir con estructura: diagnóstico → norma/modelo →
              propuesta → indicadores. Luego compara con la guía (no memorices el texto).
            </p>
          </section>
          <div className="case-list">
            {CASES.map((c) => (
              <button
                key={c.id}
                type="button"
                className={`case-card ${caseId === c.id ? 'open' : ''}`}
                onClick={() => {
                  setCaseId(c.id)
                  setShowGuide(false)
                }}
              >
                <strong>{c.title}</strong>
                <span>Temas {c.temaIds.join(', ')}</span>
              </button>
            ))}
          </div>
          {activeCase && (
            <article className="panel">
              <h3>{activeCase.title}</h3>
              <p className="scenario">{activeCase.scenario}</p>
              <ol>
                {activeCase.prompts.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ol>
              <p className="muted">Escribe tu respuesta en papel o notas (15–25 min). Luego:</p>
              <button type="button" className="btn" onClick={() => setShowGuide((g) => !g)}>
                {showGuide ? 'Ocultar guía' : 'Ver guía de corrección'}
              </button>
              {showGuide && (
                <ul className="guide">
                  {activeCase.guide.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
              )}
            </article>
          )}
        </main>
      )}

      {view === 'metodo' && (
        <main className="main">
          <section className="panel method">
            <h2>Cómo preparar esta oposición con evidencia</h2>
            <ol>
              <li>
                <strong>Recuerdo activo.</strong> Testearse supera releer. Usa el test del tema
                justo después (o incluso antes) de leer el resumen.
              </li>
              <li>
                <strong>Repetición espaciada.</strong> El cerebro consolida con lapsos crecientes.
                Entra cada día a “Repaso espaciado”.
              </li>
              <li>
                <strong>Interleaving.</strong> Mezcla temas (práctica intercalada); no hagas solo
                bloques interminables del mismo tema.
              </li>
              <li>
                <strong>Simulacros reales.</strong> Misma longitud, tiempo y penalización −1/3.
                Dejar en blanco a veces es mejor que fallar.
              </li>
              <li>
                <strong>Análisis de errores.</strong> La cola de fallos y los temas &lt;70% son tu
                plan de estudio, no el índice del temario.
              </li>
              <li>
                <strong>2ª parte por escrito.</strong> Estructura + aplicación (procesos, ISO/EFQM/CAF,
                indicadores). Practica los casos de esta app a mano.
              </li>
              <li>
                <strong>Normativa viva.</strong> Cruza constitucionales (CE, LO 3/2007, LBRL) y
                calidad (ISO 9001, 19011, CAF/EFQM) con fuentes oficiales cuando profundices.
              </li>
            </ol>
            <h3>Rutina sugerida (60–90 min)</h3>
            <ul>
              <li>10–15 min: repetición espaciada</li>
              <li>20–25 min: un tema (resumen + test)</li>
              <li>15 min: cola de fallos o puntos débiles</li>
              <li>2–3 veces/semana: simulacro o medio simulacro</li>
              <li>1–2 veces/semana: un caso escrito de 2ª parte</li>
            </ul>
            <p className="muted">
              Banco orientativo estilo Diputación de Alicante. Las preguntas marcadas como «Otra
              convocatoria Dipu» salen de exámenes publicados de otras oposiciones de la Diputación
              (p. ej. Auxiliar), no de la bolsa de Técnico Medio de Calidad. No sustituye el temario
              oficial ni garantiza preguntas idénticas el día del examen.
            </p>
          </section>
        </main>
      )}

      <footer className="foot">
        Calibre · Bolsa Técnico Medio de Calidad · progreso en localStorage
      </footer>
    </div>
  )
}
