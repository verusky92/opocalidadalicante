import { useCallback, useEffect, useState } from 'react'
import type { Question } from '../types'

interface QuizProps {
  questions: Question[]
  title: string
  subtitle?: string
  onClose: () => void
  onAnswer: (questionId: string, correct: boolean) => void
  showTemaBadge?: boolean
  examMode?: boolean
  timeLimitSec?: number
  onExamFinish?: (result: {
    answers: Record<string, number | null>
    durationSec: number
  }) => void
}

export function Quiz({
  questions,
  title,
  subtitle,
  onClose,
  onAnswer,
  showTemaBadge = true,
  examMode = false,
  timeLimitSec,
  onExamFinish,
}: QuizProps) {
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [answers, setAnswers] = useState<Record<string, number | null>>({})
  const [startedAt] = useState(() => Date.now())
  const [remaining, setRemaining] = useState(timeLimitSec ?? null)
  const [done, setDone] = useState(false)
  const [finishedPayload, setFinishedPayload] = useState<{
    answers: Record<string, number | null>
    durationSec: number
  } | null>(null)

  const q = questions[index]

  const finishExam = useCallback(
    (currentAnswers: Record<string, number | null>) => {
      const durationSec = Math.round((Date.now() - startedAt) / 1000)
      const finalAnswers = { ...currentAnswers }
      for (const qq of questions) {
        if (!(qq.id in finalAnswers)) finalAnswers[qq.id] = null
      }
      setDone(true)
      setFinishedPayload({ answers: finalAnswers, durationSec })
    },
    [questions, startedAt],
  )

  useEffect(() => {
    if (finishedPayload && onExamFinish) {
      onExamFinish(finishedPayload)
    }
  }, [finishedPayload, onExamFinish])

  useEffect(() => {
    if (!examMode || remaining === null || done) return
    if (remaining <= 0) {
      finishExam(answers)
      return
    }
    const t = setTimeout(() => setRemaining((r) => (r === null ? r : r - 1)), 1000)
    return () => clearTimeout(t)
  }, [remaining, examMode, done, answers, finishExam])

  if (questions.length === 0) {
    return (
      <div className="panel">
        <p>No hay preguntas en este conjunto.</p>
        <button type="button" className="btn" onClick={onClose}>
          Volver
        </button>
      </div>
    )
  }

  if (done && !examMode) {
    return (
      <div className="panel result-panel">
        <h2>Sesión terminada</h2>
        <p>
          Has repasado {questions.length} preguntas. El progreso queda guardado en este
          navegador.
        </p>
        <button type="button" className="btn btn-primary" onClick={onClose}>
          Volver al inicio
        </button>
      </div>
    )
  }

  if (done && examMode) {
    return (
      <div className="panel result-panel">
        <h2>Calculando resultado…</h2>
        <p>Un momento.</p>
      </div>
    )
  }

  const confirm = () => {
    if (selected === null || !q) return
    if (examMode) {
      const nextAnswers = { ...answers, [q.id]: selected }
      setAnswers(nextAnswers)
      if (index >= questions.length - 1) finishExam(nextAnswers)
      else {
        setIndex((i) => i + 1)
        setSelected(null)
      }
      return
    }
    const ok = selected === q.correct
    onAnswer(q.id, ok)
    setRevealed(true)
  }

  const next = () => {
    if (index >= questions.length - 1) {
      setDone(true)
      return
    }
    setIndex((i) => i + 1)
    setSelected(null)
    setRevealed(false)
  }

  const skipBlank = () => {
    if (!examMode || !q) return
    const nextAnswers = { ...answers, [q.id]: null }
    setAnswers(nextAnswers)
    if (index >= questions.length - 1) finishExam(nextAnswers)
    else {
      setIndex((i) => i + 1)
      setSelected(null)
    }
  }

  const mm = remaining !== null ? Math.floor(remaining / 60) : 0
  const ss = remaining !== null ? remaining % 60 : 0
  const progress = ((index + 1) / questions.length) * 100

  return (
    <div className="quiz">
      <header className="quiz-bar">
        <button type="button" className="btn btn-ghost" onClick={onClose}>
          Salir
        </button>
        <div className="quiz-meta">
          <strong>{title}</strong>
          {subtitle && <span>{subtitle}</span>}
        </div>
        {examMode && remaining !== null && (
          <div className={`timer ${remaining < 300 ? 'timer-warn' : ''}`}>
            {String(mm).padStart(2, '0')}:{String(ss).padStart(2, '0')}
          </div>
        )}
        <div className="quiz-count">
          {index + 1}/{questions.length}
        </div>
      </header>
      <div className="progress-track" aria-hidden>
        <div className="progress-fill" style={{ width: `${Math.min(100, progress)}%` }} />
      </div>

      {q && (
        <div className="panel quiz-body">
          <div className="quiz-badges">
            {showTemaBadge && <span className="badge">Tema {q.temaId}</span>}
            {q.tags?.includes('oficial-dipu') && (
              <span className="badge badge-oficial">Otra convocatoria Dipu</span>
            )}
          </div>
          {q.source && (
            <p className="question-source">
              Publicada en: <strong>{q.source}</strong> · no es de la bolsa de Técnico Medio de
              Calidad
            </p>
          )}
          <h2 className="stem">{q.stem}</h2>
          <div className="options">
            {q.options.map((opt, i) => {
              let cls = 'option'
              if (examMode) {
                if (selected === i) cls += ' selected'
              } else if (revealed) {
                if (i === q.correct) cls += ' correct'
                else if (selected === i) cls += ' wrong'
              } else if (selected === i) {
                cls += ' selected'
              }
              return (
                <button
                  key={i}
                  type="button"
                  className={cls}
                  disabled={revealed && !examMode}
                  onClick={() => setSelected(i)}
                >
                  <span className="opt-letter">{['A', 'B', 'C', 'D'][i]}</span>
                  <span>{opt}</span>
                </button>
              )
            })}
          </div>

          {!examMode && revealed && (
            <div className={`explain ${selected === q.correct ? 'ok' : 'ko'}`}>
              <strong>{selected === q.correct ? 'Correcto' : 'Incorrecto'}</strong>
              <p>{q.explanation}</p>
            </div>
          )}

          <div className="quiz-actions">
            {examMode ? (
              <>
                <button type="button" className="btn btn-ghost" onClick={skipBlank}>
                  Dejar en blanco
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={selected === null}
                  onClick={confirm}
                >
                  {index >= questions.length - 1 ? 'Terminar' : 'Siguiente'}
                </button>
              </>
            ) : revealed ? (
              <button type="button" className="btn btn-primary" onClick={next}>
                {index >= questions.length - 1 ? 'Finalizar' : 'Siguiente'}
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary"
                disabled={selected === null}
                onClick={confirm}
              >
                Comprobar
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
