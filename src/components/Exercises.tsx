"use client";

import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Exercise } from "@/lib/types";

interface ExercisesProps {
  exercises: Exercise[];
  onComplete: (correct: number, total: number) => void;
  onMistake: () => void;
  hearts: number;
}

/* ──────────────── Animations ──────────────── */

const shakeKeyframes = {
  x: [0, -10, 10, -8, 8, -5, 5, 0],
};

const exerciseSlide = {
  initial: { opacity: 0, x: 80 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -80 },
};

const feedbackSlideUp = {
  initial: { opacity: 0, y: 20, height: 0 },
  animate: { opacity: 1, y: 0, height: "auto" },
  exit: { opacity: 0, y: -10, height: 0 },
};

const buttonStagger = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: i * 0.05, duration: 0.35, ease: "easeOut" as const },
});

/* ──────────────── Shared style helpers ──────────────── */

/** Botón 3D estilo Duolingo (blanco con sombra inferior) */
function optionButtonClass({
  isSelected,
  isCorrectAnswer,
  isCorrect,
  hasSelection,
}: {
  isSelected: boolean;
  isCorrectAnswer: boolean;
  isCorrect: boolean | null;
  hasSelection: boolean;
}) {
  if (isSelected && isCorrect === true && isCorrectAnswer) {
    // Acierto
    return "border-success bg-accent-subtle border-b-success/70";
  }
  if (isSelected && isCorrect === false) {
    // Fallo: solo el botón que se pulsó
    return "border-error bg-error-subtle border-b-error/70";
  }
  if (hasSelection && isCorrectAnswer && !isSelected) {
    // Revelar la respuesta correcta (cuando el usuario falló)
    return "border-success bg-accent-subtle border-b-success/70 opacity-90";
  }
  if (hasSelection && !isCorrectAnswer) {
    // El resto se atenúa
    return "border-[#E5E5E5] bg-white border-b-[#C5C5C5] opacity-50";
  }
  // Default
  return "border-[#E5E5E5] bg-white border-b-[#C5C5C5] hover:bg-[#F7F7F7] hover:border-[#D5D5D5] hover:border-b-[#B5B5B5]";
}

/* ──────────────── Sub-componentes ──────────────── */

/** Barra de progreso fina */
function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="flex items-center gap-3 px-1">
      <div className="flex-1 h-1 bg-[#E5E5E5] rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-accent rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>
      <span className="text-xs font-bold text-text-tertiary min-w-[32px] text-right">
        {current}/{total}
      </span>
    </div>
  );
}

/** Pantalla de "sin corazones" */
function NoHeartsScreen({ onRetry }: { onRetry: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col items-center justify-center py-16 gap-4"
    >
      <motion.span
        className="text-6xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        💔
      </motion.span>
      <p className="text-xl font-extrabold text-text-primary">
        Te quedaste sin corazones
      </p>
      <p className="text-sm text-text-secondary text-center max-w-xs">
        Espera 5 minutos o compra más corazones para continuar
      </p>
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        onClick={onRetry}
        className="mt-2 px-8 py-3 bg-accent text-white font-extrabold rounded-2xl
                   border-b-[4px] border-b-[#3d8b00]
                   active:border-b-[2px] active:translate-y-[2px]
                   transition-all duration-100"
      >
        Reintentar
      </motion.button>
    </motion.div>
  );
}

/** Botón CONTINUAR estilo Duolingo */
function ContinueButton({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className="w-full py-3.5 bg-accent text-white font-extrabold text-sm uppercase tracking-wider
                 rounded-2xl
                 border-b-[4px] border-b-[#3d8b00]
                 active:border-b-[2px] active:translate-y-[2px]
                 transition-all duration-100
                 shadow-sm"
    >
      Continuar
    </motion.button>
  );
}

/** Recuadro del prompt */
function PromptBox({
  prompt,
  promptExtra,
  children,
}: {
  prompt: string;
  promptExtra?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl border-[3px] border-[#E5E5E5] p-5 text-center">
      {promptExtra && (
        <p className="text-xs text-text-tertiary uppercase tracking-widest mb-2 font-bold">
          {promptExtra}
        </p>
      )}
      <p className="text-lg font-extrabold text-text-primary leading-relaxed">
        {prompt}
      </p>
      {children}
    </div>
  );
}

/** Burbuja grande para promptExtra en match */
function MatchBubble({ word }: { word: string }) {
  return (
    <div className="flex justify-center mb-4">
      <div className="bg-[#F0F0F0] rounded-2xl px-8 py-3 inline-block">
        <p className="text-2xl font-extrabold text-text-primary">{word}</p>
      </div>
    </div>
  );
}

/** Botón de opción individual */
function OptionButton({
  option,
  index,
  isSelected,
  isCorrectAnswer,
  isCorrect,
  hasSelection,
  disabled,
  onClick,
}: {
  option: string;
  index: number;
  isSelected: boolean;
  isCorrectAnswer: boolean;
  isCorrect: boolean | null;
  hasSelection: boolean;
  disabled: boolean;
  onClick: () => void;
}) {
  const cls = optionButtonClass({
    isSelected,
    isCorrectAnswer,
    isCorrect,
    hasSelection,
  });

  return (
    <motion.button
      {...buttonStagger(index)}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.97 } : {}}
      animate={
        isSelected && isCorrect === false && !isCorrectAnswer
          ? shakeKeyframes
          : isSelected && isCorrect === true && isCorrectAnswer
            ? { scale: [1, 1.08, 0.96, 1.02, 1] }
            : {}
      }
      transition={
        isSelected && isCorrect === false && !isCorrectAnswer
          ? { duration: 0.45 }
          : isSelected && isCorrect === true && isCorrectAnswer
            ? { duration: 0.45 }
            : buttonStagger(index).transition
      }
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-4 px-5 rounded-2xl border-[3px] text-left
                  font-semibold text-text-primary text-sm
                  transition-all duration-200
                  active:border-b-[2px] active:translate-y-[2px]
                  ${disabled ? "cursor-default" : "cursor-pointer"}
                  ${cls}`}
    >
      {option}
    </motion.button>
  );
}

/** Popup de feedback (explicación + continuar) */
function FeedbackPopup({
  isCorrect,
  explanation,
  correctAnswer,
  onContinue,
}: {
  isCorrect: boolean;
  explanation: string;
  correctAnswer: string;
  onContinue: () => void;
}) {
  return (
    <motion.div
      {...feedbackSlideUp}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`p-4 rounded-2xl border-[3px] mt-2 ${
        isCorrect
          ? "bg-accent-subtle border-success/40"
          : "bg-error-subtle border-error/40"
      }`}
    >
      <div className="flex items-start gap-2.5">
        <span className="text-xl mt-0.5">
          {isCorrect ? "✅" : "❌"}
        </span>
        <div className="flex-1 min-w-0">
          <p
            className={`text-sm font-extrabold ${
              isCorrect ? "text-success" : "text-error"
            }`}
          >
            {isCorrect ? "¡Correcto!" : "Incorrecto"}
          </p>
          <p className="text-xs text-text-secondary mt-0.5 leading-relaxed">
            {explanation}
          </p>
          {!isCorrect && (
            <p className="text-xs text-text-primary mt-1.5 font-semibold">
              Respuesta correcta:{" "}
              <span className="text-success">{correctAnswer}</span>
            </p>
          )}
        </div>
      </div>
      <div className="mt-3">
        <ContinueButton onClick={onContinue} />
      </div>
    </motion.div>
  );
}

/* ════════════════ Componente Principal ════════════════ */

export default function Exercises({
  exercises,
  onComplete,
  onMistake,
  hearts,
}: ExercisesProps) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [arrangedWords, setArrangedWords] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showingFeedback, setShowingFeedback] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [failed, setFailed] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState<string[][]>([]);
  const answeredRef = useRef(false);

  /* ── shuffle inicial ── */
  if (shuffledOptions.length === 0 && exercises.length > 0) {
    const shuffled = exercises.map((ex) => {
      const opts = [...ex.options].sort(() => Math.random() - 0.5);
      return opts;
    });
    setShuffledOptions(shuffled);
  }

  const exercise = exercises[current];

  /* ── Handlers (lógica intacta del original) ── */

  const handleMatchSelect = useCallback(
    (option: string) => {
      if (answeredRef.current || showingFeedback || failed) return;
      answeredRef.current = true;
      setSelected(option);
      const correct =
        option.toLowerCase().trim() ===
        exercise.correctAnswer.toLowerCase().trim();
      setIsCorrect(correct);
      setShowingFeedback(true);
      if (correct) {
        setCorrectCount((c) => c + 1);
      } else {
        onMistake();
      }
    },
    [exercise, showingFeedback, failed, onMistake]
  );

  const handleSelect = useCallback(
    (option: string) => {
      if (answeredRef.current || showingFeedback || failed) return;
      answeredRef.current = true;
      setSelected(option);
      const correct =
        option.toLowerCase().trim() ===
        exercise.correctAnswer.toLowerCase().trim();
      setIsCorrect(correct);
      setShowingFeedback(true);
      if (correct) {
        setCorrectCount((c) => c + 1);
      } else {
        onMistake();
      }
    },
    [exercise, showingFeedback, failed, onMistake]
  );

  const handleComplete = useCallback(
    (option: string) => {
      if (answeredRef.current || showingFeedback || failed) return;
      answeredRef.current = true;
      setSelected(option);
      const correct =
        option.toLowerCase().trim() ===
        exercise.correctAnswer.toLowerCase().trim();
      setIsCorrect(correct);
      setShowingFeedback(true);
      if (correct) {
        setCorrectCount((c) => c + 1);
      } else {
        onMistake();
      }
    },
    [exercise, showingFeedback, failed, onMistake]
  );

  const handleArrangeWord = useCallback(
    (word: string) => {
      if (showingFeedback || failed) return;
      setArrangedWords((prev) => [...prev, word]);
    },
    [showingFeedback, failed]
  );

  const handleRemoveArrangedWord = useCallback(
    (index: number) => {
      if (showingFeedback || failed) return;
      setArrangedWords((prev) => prev.filter((_, i) => i !== index));
    },
    [showingFeedback, failed]
  );

  const handleArrangeSubmit = useCallback(() => {
    if (answeredRef.current || showingFeedback || failed || arrangedWords.length === 0) return;
    answeredRef.current = true;
    const userAnswer = arrangedWords.join(" ");
    const correct =
      userAnswer.toLowerCase().trim() ===
      exercise.correctAnswer.toLowerCase().trim();
    setIsCorrect(correct);
    setShowingFeedback(true);
    if (correct) {
      setCorrectCount((c) => c + 1);
    } else {
      onMistake();
    }
  }, [arrangedWords, exercise, showingFeedback, failed, onMistake]);

  const handleResetArrange = useCallback(() => {
    if (showingFeedback || failed) return;
    setArrangedWords([]);
  }, [showingFeedback, failed]);

  const advanceExercise = useCallback(() => {
    answeredRef.current = false;
    if (hearts <= 0) {
      setFailed(true);
      return;
    }
    if (current + 1 < exercises.length) {
      setCurrent((c) => c + 1);
      setSelected(null);
      setArrangedWords([]);
      setIsCorrect(null);
      setShowingFeedback(false);
    } else {
      onComplete(correctCount + (isCorrect ? 1 : 0), exercises.length);
    }
  }, [current, exercises.length, hearts, onComplete, correctCount, isCorrect]);

  /* ── Edge cases ── */

  if (exercises.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-text-secondary font-semibold">
          No hay ejercicios disponibles
        </p>
      </div>
    );
  }

  if (!exercise) return null;

  const options = shuffledOptions[current] || exercise.options || [];
  const arrangedPoolWords = options.filter(
    (w) => !arrangedWords.includes(w)
  );

  // DEBUG
  if (process.env.NODE_ENV === 'development') {
    console.log('[Exercises] current:', current, 'exercise.type:', exercise.type, 'exercise.options:', exercise.options, 'shuffledOptions[current]:', shuffledOptions[current], 'options:', options);
  }

  /* ── Fallback de seguridad: si no hay opciones, mostrar error ── */
  if (options.length === 0 && exercise.options.length > 0) {
    return (
      <div className="text-center py-16">
        <p className="text-text-secondary font-semibold">
          Cargando opciones...
        </p>
      </div>
    );
  }

  /* ── Render ── */

  return (
    <div className="flex flex-col gap-4 bg-white min-h-full">
      {/* Barra de progreso */}
      <ProgressBar current={current + 1} total={exercises.length} />

      {/* Contenedor del ejercicio con transición entre ellos */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${exercise.id}-${current}`}
          {...exerciseSlide}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex flex-col gap-4"
        >
          {failed ? (
            <NoHeartsScreen onRetry={() => window.location.reload()} />
          ) : (
            <>
              {/* ═══════════ TIPO: match ═══════════ */}
              {exercise.type === "match" && (
                <div className="flex flex-col gap-4">
                  {exercise.promptExtra && (
                    <MatchBubble word={exercise.promptExtra} />
                  )}
                  <PromptBox prompt={exercise.prompt} />

                  <div className="grid grid-cols-2 gap-3">
                    {options.map((option, i) => {
                      const isCorrectAnswer =
                        option.toLowerCase().trim() ===
                        exercise.correctAnswer.toLowerCase().trim();
                      return (
                        <OptionButton
                          key={`${option}-${i}`}
                          option={option}
                          index={i}
                          isSelected={selected === option}
                          isCorrectAnswer={isCorrectAnswer}
                          isCorrect={isCorrect}
                          hasSelection={selected !== null}
                          disabled={showingFeedback}
                          onClick={() => handleMatchSelect(option)}
                        />
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ═══════════ TIPO: select ═══════════ */}
              {exercise.type === "select" && (
                <div className="flex flex-col gap-4">
                  <PromptBox
                    prompt={exercise.prompt}
                    promptExtra={exercise.promptExtra}
                  />

                  <div className="flex flex-col gap-3">
                    {options.map((option, i) => {
                      const isCorrectAnswer =
                        option.toLowerCase().trim() ===
                        exercise.correctAnswer.toLowerCase().trim();
                      return (
                        <OptionButton
                          key={`${option}-${i}`}
                          option={option}
                          index={i}
                          isSelected={selected === option}
                          isCorrectAnswer={isCorrectAnswer}
                          isCorrect={isCorrect}
                          hasSelection={selected !== null}
                          disabled={showingFeedback}
                          onClick={() => handleSelect(option)}
                        />
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ═══════════ TIPO: complete ═══════════ */}
              {exercise.type === "complete" && (
                <div className="flex flex-col gap-4">
                  {/* Recuadro con la frase y el hueco inline */}
                  <div className="bg-white rounded-2xl border-[3px] border-[#E5E5E5] p-5 text-center">
                    {exercise.promptExtra && (
                      <p className="text-xs text-text-tertiary uppercase tracking-widest mb-2 font-bold">
                        {exercise.promptExtra}
                      </p>
                    )}
                    <p className="text-lg font-extrabold text-text-primary leading-relaxed">
                      {exercise.prompt.split("___").map((part, i, arr) => (
                        <span key={i}>
                          {part}
                          {i < arr.length - 1 && (
                            <span
                              className={`inline-block min-w-[80px] px-3 py-1 mx-1 border-b-[3px] rounded-md font-extrabold text-accent transition-all duration-300 ${
                                showingFeedback
                                  ? isCorrect
                                    ? "border-success bg-accent-subtle"
                                    : "border-error bg-error-subtle text-error"
                                  : "border-accent animate-pulse"
                              }`}
                            >
                              {selected && showingFeedback
                                ? selected
                                : "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}
                            </span>
                          )}
                        </span>
                      ))}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {options.map((option, i) => {
                      const isCorrectAnswer =
                        option.toLowerCase().trim() ===
                        exercise.correctAnswer.toLowerCase().trim();
                      return (
                        <OptionButton
                          key={`${option}-${i}`}
                          option={option}
                          index={i}
                          isSelected={selected === option}
                          isCorrectAnswer={isCorrectAnswer}
                          isCorrect={isCorrect}
                          hasSelection={selected !== null}
                          disabled={showingFeedback}
                          onClick={() => handleComplete(option)}
                        />
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ═══════════ TIPO: arrange ═══════════ */}
              {exercise.type === "arrange" && (
                <div className="flex flex-col gap-4">
                  <PromptBox
                    prompt={exercise.prompt}
                    promptExtra={exercise.promptExtra}
                  />

                  {/* Zona de palabras seleccionadas (píldoras verdes) */}
                  <div
                    className={`min-h-[56px] rounded-2xl border-[3px] border-dashed p-3 flex flex-wrap gap-2 items-center justify-center transition-colors duration-200 ${
                      showingFeedback
                        ? isCorrect
                          ? "border-success/50 bg-accent-subtle/50"
                          : "border-error/50 bg-error-subtle/50"
                        : "border-[#E5E5E5] bg-[#FAFAFA]"
                    }`}
                  >
                    {arrangedWords.length === 0 && !showingFeedback && (
                      <span className="text-text-tertiary text-sm font-medium">
                        Toca las palabras en orden
                      </span>
                    )}
                    {arrangedWords.map((word, i) => (
                      <motion.button
                        key={`${word}-${i}`}
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={
                          isCorrect === false && showingFeedback
                            ? shakeKeyframes
                            : { opacity: 1, scale: 1 }
                        }
                        onClick={() => handleRemoveArrangedWord(i)}
                        disabled={showingFeedback}
                        className={`px-3.5 py-2 rounded-xl text-sm font-semibold
                                    border-[3px] border-b-[4px]
                                    transition-all duration-150
                                    active:translate-y-[2px] active:border-b-[2px]
                                    ${
                                      showingFeedback
                                        ? isCorrect
                                          ? "bg-accent-subtle border-success border-b-success/70 text-text-primary cursor-default"
                                          : "bg-error-subtle border-error border-b-error/70 text-text-primary cursor-default"
                                        : "bg-accent-subtle border-accent/30 border-b-accent/40 text-text-primary cursor-pointer hover:bg-accent/20"
                                    }`}
                      >
                        {word}
                      </motion.button>
                    ))}
                  </div>

                  {/* Palabras disponibles */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {arrangedPoolWords.length === 0 && !showingFeedback && (
                      <span className="text-text-tertiary text-xs w-full text-center py-1">
                        Todas las palabras colocadas — pulsa «Comprobar»
                      </span>
                    )}
                    {arrangedPoolWords.map((word, i) => (
                      <motion.button
                        key={word}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.04 }}
                        whileHover={
                          !showingFeedback && !arrangedWords.includes(word)
                            ? { scale: 1.04 }
                            : {}
                        }
                        whileTap={
                          !showingFeedback && !arrangedWords.includes(word)
                            ? { scale: 0.95 }
                            : {}
                        }
                        onClick={() => handleArrangeWord(word)}
                        disabled={
                          showingFeedback || arrangedWords.includes(word)
                        }
                        className={`px-3.5 py-2 rounded-xl text-sm font-semibold
                                    border-[3px] border-b-[4px]
                                    transition-all duration-150
                                    active:translate-y-[2px] active:border-b-[2px]
                                    ${
                                      showingFeedback || arrangedWords.includes(word)
                                        ? "opacity-30 cursor-default border-[#E5E5E5] bg-white border-b-[#C5C5C5]"
                                        : "border-[#E5E5E5] bg-white border-b-[#C5C5C5] cursor-pointer hover:bg-[#F7F7F7] hover:border-[#D5D5D5] hover:border-b-[#B5B5B5]"
                                    }`}
                      >
                        {word}
                      </motion.button>
                    ))}
                  </div>

                  {/* Botones de acción (Borrar / Comprobar) */}
                  <div className="flex gap-3 justify-center mt-1">
                    <motion.button
                      whileHover={
                        !showingFeedback && arrangedWords.length > 0
                          ? { scale: 1.03 }
                          : {}
                      }
                      whileTap={
                        !showingFeedback && arrangedWords.length > 0
                          ? { scale: 0.97 }
                          : {}
                      }
                      onClick={handleResetArrange}
                      disabled={showingFeedback || arrangedWords.length === 0}
                      className="px-6 py-3 rounded-2xl text-sm font-bold
                                 border-[3px] border-b-[4px]
                                 border-[#E5E5E5] border-b-[#C5C5C5]
                                 bg-white text-text-secondary
                                 hover:bg-[#F7F7F7] hover:text-text-primary
                                 active:border-b-[2px] active:translate-y-[2px]
                                 transition-all duration-100
                                 disabled:opacity-30 disabled:cursor-default"
                    >
                      Borrar
                    </motion.button>
                    <motion.button
                      whileHover={
                        !showingFeedback && arrangedWords.length > 0
                          ? { scale: 1.03 }
                          : {}
                      }
                      whileTap={
                        !showingFeedback && arrangedWords.length > 0
                          ? { scale: 0.97 }
                          : {}
                      }
                      onClick={handleArrangeSubmit}
                      disabled={showingFeedback || arrangedWords.length === 0}
                      className="px-8 py-3 rounded-2xl text-sm font-extrabold uppercase tracking-wider
                                 bg-accent text-white
                                 border-b-[4px] border-b-[#3d8b00]
                                 active:border-b-[2px] active:translate-y-[2px]
                                 transition-all duration-100
                                 disabled:opacity-40 disabled:cursor-default"
                    >
                      Comprobar
                    </motion.button>
                  </div>
                </div>
              )}

              {/* Feedback popup (todos los tipos) */}
              <AnimatePresence>
                {showingFeedback && (
                  <FeedbackPopup
                    isCorrect={!!isCorrect}
                    explanation={exercise.explanation}
                    correctAnswer={exercise.correctAnswer}
                    onContinue={advanceExercise}
                  />
                )}
              </AnimatePresence>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
