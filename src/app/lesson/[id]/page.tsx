"use client";

import { use, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { lessonsData } from "@/lib/data";
import { useGame } from "@/lib/gameState";
import { LessonPhase } from "@/lib/types";
import Mascot from "@/components/Mascot";
import HeartDisplay from "@/components/HeartDisplay";
import LearnCards from "@/components/LearnCards";
import Exercises from "@/components/Exercises";
import Button from "@/components/Button";

export default function LessonPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const { progress, completeLesson, loseHeart, mascotExpression, setMascotExpression } = useGame();
  const [phase, setPhase] = useState<LessonPhase>("learn");
  const [finalScore, setFinalScore] = useState<{ score: number; total: number } | null>(null);

  const lesson = lessonsData.find((l) => l.id === id);

  if (!lesson) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-bg">
        <span className="text-4xl">😕</span>
        <p className="text-text-secondary">Lección no encontrada</p>
        <Button onClick={() => router.push("/home")} variant="ghost">
          Volver al inicio
        </Button>
      </div>
    );
  }

  const handleLearnComplete = () => {
    setPhase("practice");
  };

  const handlePracticeComplete = (score: number, total: number) => {
    setFinalScore({ score, total });
    setPhase("complete");
    completeLesson(lesson);
  };

  const handleMistake = () => {
    loseHeart();
    setMascotExpression("sad");
    setTimeout(() => setMascotExpression("neutral"), 1500);
  };

  return (
    <div className="min-h-screen bg-bg">
      <header className="sticky top-0 z-40 bg-bg/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center justify-between">
          <button onClick={() => router.push("/home")} className="text-text-secondary hover:text-text-primary transition-colors">
            <span className="text-lg">←</span>
            <span className="ml-2 text-sm font-medium">Salir</span>
          </button>
          <HeartDisplay hearts={progress.hearts} maxHearts={progress.maxHearts} />
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 py-6">
        {phase === "learn" && (
          <div className="flex flex-col gap-6">
            <div className="text-center">
              <p className="text-xs text-text-tertiary uppercase tracking-wider font-semibold">
                {lesson.title}
              </p>
              <p className="text-sm text-text-secondary mt-1">
                {lesson.description}
              </p>
            </div>
            <LearnCards cards={lesson.learnCards} onComplete={handleLearnComplete} />
          </div>
        )}

        {phase === "practice" && (
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 mb-2">
              <Mascot expression={mascotExpression} size="sm" showLabel={false} />
              <div>
                <h1 className="text-sm font-bold text-text-primary">{lesson.title}</h1>
                <p className="text-xs text-text-secondary">+{lesson.xp} XP</p>
              </div>
            </div>
            <Exercises
              exercises={lesson.exercises}
              onComplete={handlePracticeComplete}
              onMistake={handleMistake}
              hearts={progress.hearts}
            />
          </div>
        )}

        {phase === "complete" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-6 text-center py-12"
          >
            <Mascot expression="excited" size="lg" />
            <div>
              <h2 className="text-2xl font-extrabold text-text-primary">Lección completada!</h2>
              <p className="mt-1 text-text-secondary">
                {finalScore && `${finalScore.score}/${finalScore.total} correctas`}
              </p>
            </div>

            <div className="flex items-center gap-4 bg-surface rounded-xl p-4 border border-border w-full max-w-xs">
              <span className="text-3xl">⚡</span>
              <div className="text-left">
                <p className="text-sm font-semibold text-text-primary">+{lesson.xp} XP ganados</p>
                <p className="text-xs text-text-secondary">+10 monedas</p>
              </div>
              <span className="ml-auto text-xl">🪙</span>
            </div>

            <div className="flex gap-3 w-full max-w-xs">
              <Button onClick={() => { setPhase("practice"); setFinalScore(null); setMascotExpression("neutral"); }} variant="secondary" size="md" fullWidth>
                Repetir
              </Button>
              <Button onClick={() => router.push("/home")} variant="primary" size="md" fullWidth icon="🏠">
                Continuar
              </Button>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}
