"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import { TrackType, SubTrack, UserProgress, Lesson, MascotExpression } from "./types";
import { languageSubTracks, programmingSubTracks, cookingSubTracks } from "./data";

const defaultProgress: UserProgress = {
  xp: 0,
  level: 1,
  streak: 0,
  lastActiveDate: "",
  hearts: 5,
  maxHearts: 5,
  coins: 100,
  completedLessons: [],
  trackProgress: { languages: 0, programming: 0, cooking: 0 },
};

const defaultSubTracks: Record<TrackType, SubTrack> = {
  languages: "english",
  programming: "javascript",
  cooking: "fundamentals",
};

interface GameContextType {
  progress: UserProgress;
  mascotExpression: MascotExpression;
  completeLesson: (lesson: Lesson) => void;
  loseHeart: () => boolean;
  resetHearts: () => void;
  selectTrack: (track: TrackType) => void;
  activeTrack: TrackType | null;
  selectSubTrack: (subTrack: SubTrack) => void;
  activeSubTrack: SubTrack | null;
  subTrackOptions: Record<string, { name: string; icon: string }>;
  setMascotExpression: (expression: MascotExpression) => void;
  isOnboarded: boolean;
  finishOnboarding: (track: TrackType) => void;
  hydrated: boolean;
}

const GameContext = createContext<GameContextType | null>(null);

export function GameProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<UserProgress>(defaultProgress);
  const [mascotExpression, setMascotExpression] = useState<MascotExpression>("neutral");
  const [activeTrack, setActiveTrack] = useState<TrackType | null>(null);
  const [activeSubTrack, setActiveSubTrack] = useState<SubTrack | null>(null);
  const [isOnboarded, setIsOnboarded] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  const getStorageKey = useCallback((base: string): string => {
    try {
      const userData = localStorage.getItem("mallu-user");
      if (userData) {
        const user = JSON.parse(userData);
        return `${base}-${user.username}`;
      }
    } catch {}
    return base;
  }, []);

  const getSubTrackOptions = (): Record<string, { name: string; icon: string }> => {
    if (!activeTrack) return {};
    if (activeTrack === "languages") return languageSubTracks;
    if (activeTrack === "programming") return programmingSubTracks;
    return cookingSubTracks;
  };

  useEffect(() => {
    const pKey = getStorageKey("mallu-progress");
    const saved = localStorage.getItem(pKey);
    if (saved) setProgress(JSON.parse(saved));
    const oKey = getStorageKey("mallu-onboarded");
    const onboarded = localStorage.getItem(oKey);
    if (onboarded) setIsOnboarded(true);
    const tKey = getStorageKey("mallu-track");
    const track = localStorage.getItem(tKey);
    if (track) setActiveTrack(track as TrackType);
    const sKey = getStorageKey("mallu-subtrack");
    const subTrack = localStorage.getItem(sKey);
    if (subTrack) setActiveSubTrack(subTrack as SubTrack);
    setHydrated(true);
  }, [getStorageKey]);

  const saveProgress = useCallback((p: UserProgress) => {
    localStorage.setItem(getStorageKey("mallu-progress"), JSON.stringify(p));
  }, [getStorageKey]);

  const checkStreak = useCallback((p: UserProgress): UserProgress => {
    const today = new Date().toISOString().split("T")[0];
    if (p.lastActiveDate === today) return p;
    const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
    const newStreak = p.lastActiveDate === yesterday ? p.streak + 1 : 1;
    return { ...p, streak: newStreak, lastActiveDate: today };
  }, []);

  const completeLesson = useCallback((lesson: Lesson) => {
    setProgress(prev => {
      let updated = { ...prev, xp: prev.xp + lesson.xp, completedLessons: [...prev.completedLessons, lesson.id] };
      updated = checkStreak(updated);
      updated = {
        ...updated,
        trackProgress: {
          ...updated.trackProgress,
          [lesson.track]: updated.trackProgress[lesson.track] + 1,
        },
      };
      const newLevel = Math.floor(updated.xp / 300) + 1;
      updated = { ...updated, level: newLevel };
      updated = { ...updated, coins: updated.coins + 10 };
      saveProgress(updated);
      return updated;
    });
    setMascotExpression("excited");
    setTimeout(() => setMascotExpression("neutral"), 2000);
  }, [saveProgress, checkStreak]);

  const loseHeart = useCallback((): boolean => {
    let isDead = false;
    setProgress(prev => {
      const newHearts = prev.hearts - 1;
      isDead = newHearts <= 0;
      const updated = { ...prev, hearts: Math.max(0, newHearts) };
      saveProgress(updated);
      return updated;
    });
    if (isDead) {
      setMascotExpression("sad");
    }
    return isDead;
  }, [saveProgress]);

  const resetHearts = useCallback(() => {
    setProgress(prev => {
      const updated = { ...prev, hearts: prev.maxHearts };
      saveProgress(updated);
      return updated;
    });
  }, [saveProgress]);

  const selectTrack = useCallback((track: TrackType) => {
    setActiveTrack(track);
    const defaultSub = defaultSubTracks[track];
    setActiveSubTrack(defaultSub);
    localStorage.setItem(getStorageKey("mallu-track"), track);
    localStorage.setItem(getStorageKey("mallu-subtrack"), defaultSub);
  }, [getStorageKey]);

  const selectSubTrack = useCallback((subTrack: SubTrack) => {
    setActiveSubTrack(subTrack);
    localStorage.setItem(getStorageKey("mallu-subtrack"), subTrack);
  }, [getStorageKey]);

  const finishOnboarding = useCallback((track: TrackType) => {
    setIsOnboarded(true);
    setActiveTrack(track);
    const defaultSub = defaultSubTracks[track];
    setActiveSubTrack(defaultSub);
    localStorage.setItem(getStorageKey("mallu-onboarded"), "true");
    localStorage.setItem(getStorageKey("mallu-track"), track);
    localStorage.setItem(getStorageKey("mallu-subtrack"), defaultSub);
  }, [getStorageKey]);

  return (
    <GameContext.Provider
      value={{
        progress,
        mascotExpression,
        completeLesson,
        loseHeart,
        resetHearts,
        selectTrack,
        activeTrack,
        selectSubTrack,
        activeSubTrack,
        subTrackOptions: getSubTrackOptions(),
        setMascotExpression,
        isOnboarded,
        finishOnboarding,
        hydrated,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error("useGame must be used within GameProvider");
  return ctx;
}
