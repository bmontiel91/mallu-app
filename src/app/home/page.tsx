"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useGame } from "@/lib/gameState";
import { trackNames, lessonsData } from "@/lib/data";
import { TrackType, SubTrack } from "@/lib/types";
import Mascot from "@/components/Mascot";
import HeartDisplay from "@/components/HeartDisplay";

/* -------------------------------------------------- */
/*  Helper: serpentine column in a 3‑column grid      */
/* -------------------------------------------------- */
function getSerpentineCol(index: number, cols = 3): number {
  const row = Math.floor(index / cols);
  const pos = index % cols;
  return row % 2 === 0 ? pos + 1 : cols - pos;
}

/* -------------------------------------------------- */
/*  HomePage                                          */
/* -------------------------------------------------- */
export default function HomePage() {
  const router = useRouter();
  const pathname = usePathname();
  const {
    progress,
    activeTrack,
    activeSubTrack,
    isOnboarded,
    hydrated,
    selectTrack,
    selectSubTrack,
    subTrackOptions,
  } = useGame();

  const [showTrackSelector, setShowTrackSelector] = useState(false);
  const [showSubTrackSelector, setShowSubTrackSelector] = useState(false);

  // ── SVG path for the learning‑path serpentine ──
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [svgPath, setSvgPath] = useState("");
  const [pathLength, setPathLength] = useState(0);

  // ── Redirect if not onboarded ──
  useEffect(() => {
    if (hydrated && !isOnboarded) router.replace("/");
  }, [hydrated, isOnboarded, router]);

  // ── Filter lessons ──
  const trackLessons = lessonsData.filter(
    (l) => l.track === activeTrack && l.subTrack === activeSubTrack
  );
  const completed = progress.completedLessons;
  const lastCompletedIdx = trackLessons.reduce(
    (max, l, i) => (completed.includes(l.id) ? i : max),
    -1
  );

  const subTrackEntries = Object.entries(subTrackOptions);

  // ── Build the SVG serpentine path ──
  const buildSvgPath = useCallback(() => {
    const container = containerRef.current;
    if (!container || trackLessons.length === 0) {
      setSvgPath("");
      setPathLength(0);
      return;
    }
    const containerRect = container.getBoundingClientRect();
    const positions: { x: number; y: number }[] = [];

    for (let i = 0; i < trackLessons.length; i++) {
      const el = nodeRefs.current[i];
      if (el) {
        const r = el.getBoundingClientRect();
        positions.push({
          x: r.left + r.width / 2 - containerRect.left,
          y: r.top + r.height / 2 - containerRect.top,
        });
      }
    }

    if (positions.length < 2) {
      setSvgPath("");
      setPathLength(0);
      return;
    }

    let d = `M ${positions[0].x} ${positions[0].y}`;
    for (let i = 1; i < positions.length; i++) {
      const prev = positions[i - 1];
      const curr = positions[i];
      const dx = curr.x - prev.x;
      const dy = curr.y - prev.y;
      d += ` C ${prev.x + dx * 0.35} ${prev.y + dy * 0.15}, ${curr.x - dx * 0.35} ${curr.y - dy * 0.15}, ${curr.x} ${curr.y}`;
    }

    setSvgPath(d);
  }, [trackLessons, completed]);

  useEffect(() => {
    // Small delay so the browser has laid out the grid
    const t = requestAnimationFrame(() => {
      buildSvgPath();
      // second frame to guarantee paint
      requestAnimationFrame(buildSvgPath);
    });
    window.addEventListener("resize", buildSvgPath);
    return () => {
      cancelAnimationFrame(t);
      window.removeEventListener("resize", buildSvgPath);
    };
  }, [buildSvgPath]);

  // Measure path length after the <path> element is in the DOM
  const pathRef = useRef<SVGPathElement>(null);
  useEffect(() => {
    if (pathRef.current && svgPath) {
      const len = pathRef.current.getTotalLength();
      setPathLength(len);
    }
  }, [svgPath]);

  // ── Loading ──
  if (!hydrated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg">
        <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // ── No track selected ──
  if (!activeTrack) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-6 bg-bg pb-24">
        <Mascot expression="waving" size="lg" />
        <h1 className="text-2xl font-bold text-text-primary">Bienvenido a Mallu</h1>
        <p className="text-text-secondary text-sm">Selecciona un track para empezar</p>
        <div className="flex gap-3">
          {(Object.keys(trackNames) as TrackType[]).map((t) => (
            <button
              key={t}
              onClick={() => selectTrack(t)}
              className="p-6 rounded-2xl bg-white border border-border hover:border-accent transition-all shadow-sm"
            >
              <span className="text-3xl">{trackNames[t].icon}</span>
            </button>
          ))}
        </div>

        {/* Bottom nav (no‑track fallback) */}
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border">
          <div className="flex items-center justify-around h-16 max-w-lg mx-auto px-4">
            {[
              { href: "/home", icon: "🏠", label: "Inicio" },
              { href: "#", icon: "🔍", label: "Buscar" },
              { href: "/profile", icon: "👤", label: "Perfil" },
            ].map((item) => {
              const isActive = item.href !== "#" && pathname === item.href;
              return item.href === "#" ? (
                <div key="search" className="flex flex-col items-center gap-0.5 min-w-[64px] opacity-40">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-[11px] font-medium text-text-tertiary">{item.label}</span>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex flex-col items-center gap-0.5 min-w-[64px]"
                >
                  <motion.div
                    animate={isActive ? { y: -2 } : { y: 0 }}
                    className={`text-xl ${isActive ? "opacity-100" : "opacity-50"}`}
                  >
                    {item.icon}
                  </motion.div>
                  <span
                    className={`text-[11px] font-medium ${
                      isActive ? "text-accent" : "text-text-tertiary"
                    }`}
                  >
                    {item.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="w-1 h-1 rounded-full bg-accent mt-0.5"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    );
  }

  /* ================================================================ */
  /*  MAIN RENDER                                                     */
  /* ================================================================ */
  return (
    <div className="min-h-screen bg-bg pb-24">
      {/* ─── Duolingo‑style Green Header ─── */}
      <header className="bg-accent text-white">
        <div className="max-w-lg mx-auto px-4 pt-3 pb-2">
          {/* Top row: track info + stats */}
          <div className="flex items-center justify-between">
            {/* Left: track + subtrack selectors */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => {
                  setShowTrackSelector(!showTrackSelector);
                  setShowSubTrackSelector(false);
                }}
                className="flex items-center gap-1.5 hover:opacity-90 transition-opacity"
              >
                <span className="text-xl">{trackNames[activeTrack].icon}</span>
                <span className="text-sm font-bold">{trackNames[activeTrack].name}</span>
                <span className="text-[10px] opacity-70 ml-0.5">▾</span>
              </button>

              {subTrackEntries.length > 1 && activeSubTrack && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowSubTrackSelector(!showSubTrackSelector);
                    setShowTrackSelector(false);
                  }}
                  className="flex items-center gap-1 ml-3 px-2.5 py-1 rounded-lg bg-white/15 hover:bg-white/25 transition-all text-xs font-semibold"
                >
                  <span>{subTrackOptions[activeSubTrack]?.icon}</span>
                  <span>{subTrackOptions[activeSubTrack]?.name}</span>
                  <span className="text-[9px] opacity-70">▾</span>
                </button>
              )}
            </div>

            {/* Right: streak, coins, hearts */}
            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-1">
                <span className="text-base">🔥</span>
                <span className="text-xs font-extrabold">{progress.streak}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-base">🪙</span>
                <span className="text-xs font-extrabold">{progress.coins}</span>
              </div>
              <HeartDisplay hearts={progress.hearts} maxHearts={progress.maxHearts} />
            </div>
          </div>

          {/* XP bar */}
          <div className="mt-2.5 mb-1">
            <div className="w-full h-3 rounded-full bg-white/20 border border-white/30 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-white"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(((progress.xp % 300) / 300) * 100, 100)}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
            <div className="flex justify-between mt-0.5">
              <span className="text-[10px] font-semibold opacity-90">Nivel {progress.level}</span>
              <span className="text-[10px] font-semibold opacity-90">{progress.xp} XP</span>
            </div>
          </div>
        </div>
      </header>

      {/* ─── Track selector popup ─── */}
      <AnimatePresence>
        {showTrackSelector && (
          <motion.div
            initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
            transition={{ duration: 0.15 }}
            className="max-w-lg mx-auto px-4 mt-1"
          >
            <div className="flex gap-2 bg-white border border-border rounded-xl p-2 shadow-sm">
              {(Object.keys(trackNames) as TrackType[]).map((t) => (
                <button
                  key={t}
                  onClick={() => {
                    selectTrack(t);
                    setShowTrackSelector(false);
                  }}
                  className={`flex-1 flex items-center justify-center gap-2 p-2.5 rounded-lg transition-all text-sm font-semibold border ${
                    activeTrack === t
                      ? "bg-accent-subtle text-accent border-accent/30"
                      : "bg-white text-text-secondary border-transparent hover:border-border"
                  }`}
                >
                  <span className="text-lg">{trackNames[t].icon}</span>
                  {trackNames[t].name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── SubTrack selector popup ─── */}
      <AnimatePresence>
        {showSubTrackSelector && subTrackEntries.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
            transition={{ duration: 0.15 }}
            className="max-w-lg mx-auto px-4 mt-1"
          >
            <div className="flex flex-wrap gap-2 bg-white border border-border rounded-xl p-2 shadow-sm">
              {subTrackEntries.map(([key, val]) => (
                <button
                  key={key}
                  onClick={() => {
                    selectSubTrack(key as SubTrack);
                    setShowSubTrackSelector(false);
                  }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all text-sm font-medium border ${
                    activeSubTrack === key
                      ? "bg-accent-subtle text-accent border-accent/40"
                      : "bg-white text-text-secondary border-transparent hover:border-border"
                  }`}
                >
                  <span className="text-base">{val.icon}</span>
                  {val.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Mascot greeting card ─── */}
      <div className="max-w-lg mx-auto px-4 pt-4">
        <div className="flex items-center gap-3 bg-[#F7F7F7] rounded-2xl p-3.5">
          <Mascot expression="happy" size="sm" showLabel={false} />
          <div>
            <p className="text-sm font-bold text-text-primary">
              {progress.streak > 1
                ? `¡${progress.streak} días de racha! 🎉`
                : "¡Vamos a aprender!"}
            </p>
            <p className="text-xs text-text-secondary">
              Sigue completando lecciones para ganar XP
            </p>
          </div>
        </div>
      </div>

      {/* ─── Learning Path ─── */}
      <div className="max-w-lg mx-auto px-4 pt-5">
        <h2 className="text-xs font-bold text-text-secondary mb-5 uppercase tracking-widest">
          Tu camino de aprendizaje
        </h2>

        <div className="relative" ref={containerRef}>
          {/* ── SVG serpentine overlay ── */}
          {svgPath && (
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
              <motion.path
                ref={pathRef}
                d={svgPath}
                fill="none"
                stroke="#B8B8B8"
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ strokeDasharray: pathLength, strokeDashoffset: pathLength }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
              />
            </svg>
          )}

          {/* ── Grid of nodes ── */}
          <div className="grid grid-cols-3 gap-y-20 gap-x-2 relative z-10">
            {trackLessons.map((lesson, i) => {
              const isCompleted = completed.includes(lesson.id);
              const isAvailable = i === lastCompletedIdx + 1 || isCompleted;
              const isLocked = !isCompleted && !isAvailable;
              const col = getSerpentineCol(i);

              const nodeContent = (
                <div
                  ref={(el) => {
                    nodeRefs.current[i] = el;
                  }}
                  className={`
                    relative flex flex-col items-center justify-center
                    w-20 h-20 rounded-full mx-auto
                    transition-all duration-200
                    ${isCompleted ? "bg-success-subtle border-[3px] border-success" : ""}
                    ${isAvailable && !isCompleted ? "bg-white border-[3px] border-accent" : ""}
                    ${isLocked ? "bg-[#E8E8E8] border-[3px] border-[#DDD] opacity-60" : ""}
                  `}
                >
                  <span
                    className={`text-2xl ${isLocked ? "grayscale opacity-50" : ""}`}
                  >
                    {isLocked ? "🔒" : isCompleted ? "✅" : lesson.icon}
                  </span>
                </div>
              );

              return (
                <div
                  key={lesson.id}
                  style={{ gridColumnStart: col }}
                  className="flex flex-col items-center gap-1.5"
                >
                  {/* Animated available pulse */}
                  {isAvailable && !isCompleted ? (
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 0 0 rgba(88,204,2,0.45)",
                          "0 0 0 14px rgba(88,204,2,0)",
                        ],
                      }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="rounded-full"
                    >
                      <Link href={`/lesson/${lesson.id}`}>{nodeContent}</Link>
                    </motion.div>
                  ) : isCompleted ? (
                    nodeContent
                  ) : (
                    nodeContent
                  )}

                  <span
                    className={`text-[10px] font-bold text-center max-w-[80px] leading-tight ${
                      isLocked ? "text-text-tertiary" : "text-text-secondary"
                    }`}
                  >
                    {lesson.title}
                  </span>
                  {!isLocked && (
                    <span className="text-[10px] text-accent font-extrabold">
                      +{lesson.xp} XP
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Empty state ── */}
        {trackLessons.length === 0 && (
          <div className="text-center py-16">
            <span className="text-5xl">📚</span>
            <p className="mt-3 text-text-secondary font-medium">
              No hay lecciones disponibles para este track aún.
            </p>
            <p className="text-xs text-text-tertiary mt-1">
              ¡Pronto agregaremos más contenido!
            </p>
          </div>
        )}
      </div>

      {/* ─── Bottom Navigation (3 tabs) ─── */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border">
        <div className="flex items-center justify-around h-16 max-w-lg mx-auto px-4">
          {[
            { href: "/home", icon: "🏠", label: "Inicio" },
            { href: "#", icon: "🔍", label: "Buscar" },
            { href: "/profile", icon: "👤", label: "Perfil" },
          ].map((item) => {
            const isActive = item.href !== "#" && pathname === item.href;
            return item.href === "#" ? (
              <div
                key="search"
                className="flex flex-col items-center gap-0.5 min-w-[64px] opacity-40"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-[11px] font-medium text-text-tertiary">
                  {item.label}
                </span>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center gap-0.5 min-w-[64px]"
              >
                <motion.div
                  animate={isActive ? { y: -2 } : { y: 0 }}
                  className={`text-xl ${isActive ? "opacity-100" : "opacity-50"}`}
                >
                  {item.icon}
                </motion.div>
                <span
                  className={`text-[11px] font-medium ${
                    isActive ? "text-accent" : "text-text-tertiary"
                  }`}
                >
                  {item.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="w-1 h-1 rounded-full bg-accent mt-0.5"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
