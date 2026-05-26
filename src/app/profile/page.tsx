"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useGame } from "@/lib/gameState";
import { useAuth } from "@/lib/authContext";
import { trackNames, lessonsData } from "@/lib/data";
import { TrackType } from "@/lib/types";
import Mascot from "@/components/Mascot";
import Button from "@/components/Button";
import ProgressBar from "@/components/ProgressBar";
import BottomNav from "@/components/BottomNav";

const achievements = [
  { icon: "🔥", name: "Racha de 3", desc: "Mantén una racha de 3 días", condition: (streak: number) => streak >= 3 },
  { icon: "⭐", name: "Novato", desc: "Completa 1 lección", condition: (completed: number) => completed >= 1 },
  { icon: "🌟", name: "Estudiante", desc: "Completa 5 lecciones", condition: (completed: number) => completed >= 5 },
  { icon: "💎", name: "Experto", desc: "Completa 10 lecciones", condition: (completed: number) => completed >= 10 },
  { icon: "👑", name: "Racha de 7", desc: "Mantén una racha de 7 días", condition: (streak: number) => streak >= 7 },
  { icon: "🎯", name: "Perfeccionista", desc: "Completa todas las lecciones de un track", condition: (trackTotal: number) => trackTotal >= 5 },
];

export default function ProfilePage() {
  const router = useRouter();
  const { progress, isOnboarded, activeTrack, selectTrack, hydrated } = useGame();
  const { user, logout } = useAuth();

  useEffect(() => {
    if (hydrated && !isOnboarded) router.replace("/");
  }, [hydrated, isOnboarded, router]);

  if (!hydrated) {
    return <div className="min-h-screen flex items-center justify-center bg-bg"><div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" /></div>;
  }

  const totalLessons = lessonsData.length;
  const completedCount = progress.completedLessons.length;
  const xpForNextLevel = 300;
  const xpInLevel = progress.xp % xpForNextLevel;

  const trackProgress: Record<TrackType, { completed: number; total: number }> = {
    languages: { completed: lessonsData.filter((l) => l.track === "languages" && progress.completedLessons.includes(l.id)).length, total: lessonsData.filter((l) => l.track === "languages").length },
    programming: { completed: lessonsData.filter((l) => l.track === "programming" && progress.completedLessons.includes(l.id)).length, total: lessonsData.filter((l) => l.track === "programming").length },
    cooking: { completed: lessonsData.filter((l) => l.track === "cooking" && progress.completedLessons.includes(l.id)).length, total: lessonsData.filter((l) => l.track === "cooking").length },
  };

  return (
    <div className="min-h-screen bg-bg pb-20">
      {/* Header */}
      <header className="bg-surface border-b border-border">
        <div className="max-w-lg mx-auto px-4 py-6 text-center">
          <Mascot expression="happy" size="md" />
          <h1 className="mt-3 text-xl font-bold text-text-primary">{user?.name || "Mi Perfil"}</h1>
          <p className="text-sm text-text-secondary">Nivel {progress.level} · {progress.xp} XP</p>
          <button
            onClick={() => { logout(); router.push("/login"); }}
            className="mt-3 text-xs text-text-tertiary hover:text-error transition-colors"
          >
            Cerrar sesión
          </button>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 py-6 flex flex-col gap-6">
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: "🔥", value: progress.streak, label: "Racha (días)" },
            { icon: "❤️", value: `${progress.hearts}/${progress.maxHearts}`, label: "Corazones" },
            { icon: "🪙", value: progress.coins, label: "Monedas" },
          ].map((stat) => (
            <div key={stat.label} className="bg-surface rounded-xl p-3 border border-border text-center">
              <span className="text-2xl">{stat.icon}</span>
              <p className="text-lg font-bold text-text-primary mt-1">{stat.value}</p>
              <p className="text-[10px] text-text-tertiary">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Level progress */}
        <div className="bg-surface rounded-xl p-4 border border-border">
          <p className="text-sm font-semibold text-text-primary mb-3">Progreso de nivel</p>
          <ProgressBar value={xpInLevel} max={xpForNextLevel} color="var(--color-accent)" />
          <p className="text-xs text-text-tertiary mt-2">Faltan {xpForNextLevel - xpInLevel} XP para el nivel {progress.level + 1}</p>
        </div>

        {/* Tracks progress */}
        <div className="bg-surface rounded-xl p-4 border border-border">
          <p className="text-sm font-semibold text-text-primary mb-3">Progreso por track</p>
          <div className="flex flex-col gap-3">
            {(Object.keys(trackProgress) as TrackType[]).map((t) => {
              const tp = trackProgress[t];
              const bg = trackNames[t].color + "20";
              return (
                <div key={t} onClick={() => { selectTrack(t); router.push("/home"); }} className="cursor-pointer">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xl">{trackNames[t].icon}</span>
                    <span className="text-sm font-medium text-text-primary flex-1">{trackNames[t].name}</span>
                    <span className="text-xs text-text-tertiary">{tp.completed}/{tp.total}</span>
                  </div>
                  <ProgressBar value={tp.completed} max={tp.total} color={trackNames[t].color} showLabel={false} height="sm" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-surface rounded-xl p-4 border border-border">
          <p className="text-sm font-semibold text-text-primary mb-3">Logros</p>
          <div className="grid grid-cols-3 gap-3">
            {achievements.map((ach) => {
              const isUnlocked = ach.condition(
                ach.condition.length === 1 && ach.name.includes("Racha") ? progress.streak : completedCount
              ) || ach.condition(progress.trackProgress[activeTrack || "languages"] || 0);
              const actuallyUnlocked = (() => {
                if (ach.name === "Racha de 3") return progress.streak >= 3;
                if (ach.name === "Racha de 7") return progress.streak >= 7;
                if (ach.name === "Novato") return completedCount >= 1;
                if (ach.name === "Estudiante") return completedCount >= 5;
                if (ach.name === "Experto") return completedCount >= 10;
                if (ach.name === "Perfeccionista") return Object.values(trackProgress).some((t) => t.completed >= t.total);
                return false;
              })();
              return (
                <motion.div
                  key={ach.name}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className={`flex flex-col items-center gap-1 p-3 rounded-xl border text-center transition-all ${
                    actuallyUnlocked ? "border-accent bg-accent-subtle" : "border-border bg-surface-hover opacity-50"
                  }`}
                >
                  <span className="text-2xl">{actuallyUnlocked ? ach.icon : "🔒"}</span>
                  <p className="text-[11px] font-semibold text-text-primary">{ach.name}</p>
                  <p className="text-[9px] text-text-tertiary">{ach.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Reset */}
        <div className="text-center">
          <Button onClick={() => { localStorage.clear(); window.location.reload(); }} variant="ghost" size="sm">
            Reiniciar progreso
          </Button>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
