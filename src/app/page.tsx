"use client";

import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { TrackType, SubTrack } from "@/lib/types";
import { trackNames, languageSubTracks, programmingSubTracks, cookingSubTracks } from "@/lib/data";
import { useGame } from "@/lib/gameState";
import Mascot from "@/components/Mascot";

export default function Onboarding() {
  const router = useRouter();
  const { finishOnboarding, isOnboarded, activeTrack, hydrated } = useGame();
  const [step, setStep] = useState<"track" | "subtrack">("track");
  const [selectedTrack, setSelectedTrack] = useState<TrackType | null>(null);
  const [selectedSubTrack, setSelectedSubTrack] = useState<SubTrack | null>(null);

  useEffect(() => {
    if (hydrated && isOnboarded && activeTrack) {
      router.replace("/home");
    }
  }, [hydrated, isOnboarded, activeTrack, router]);

  if (!hydrated) {
    return <div className="min-h-screen flex items-center justify-center bg-bg"><div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" /></div>;
  }

  if (isOnboarded && activeTrack) return null;

  const tracks: { type: TrackType; name: string; icon: string; color: string }[] = [
    { type: "languages", ...trackNames.languages },
    { type: "programming", ...trackNames.programming },
    { type: "cooking", ...trackNames.cooking },
  ];

  const getSubTracks = () => {
    if (selectedTrack === "languages") return languageSubTracks;
    if (selectedTrack === "programming") return programmingSubTracks;
    if (selectedTrack === "cooking") return cookingSubTracks;
    return {};
  };

  const handleSelectTrack = (track: TrackType) => {
    setSelectedTrack(track);
    setSelectedSubTrack(null);
    setStep("subtrack");
  };

  const handleSelectSubTrack = (subTrack: SubTrack) => {
    setSelectedSubTrack(subTrack);
  };

  const handleStart = () => {
    if (selectedTrack && selectedSubTrack) {
      finishOnboarding(selectedTrack);
      router.push("/home");
    }
  };

  const subTracks = getSubTracks();
  const subTrackEntries = Object.entries(subTracks);
  const trackColor = tracks.find(t => t.type === selectedTrack)?.color || "#a855f7";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-bg p-6">
      <AnimatePresence mode="wait">
        {step === "track" && (
          <motion.div
            key="track"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            className="flex flex-col items-center gap-8 w-full max-w-sm"
          >
            <Mascot expression="waving" size="lg" showLabel={false} />

            <div className="text-center w-full">
              <h1 className="text-2xl font-extrabold text-text-primary">Qué quieres aprender?</h1>
              <p className="mt-2 text-sm text-text-secondary">Elige una categoría para empezar</p>
            </div>

            <div className="flex flex-col gap-3 w-full">
              {tracks.map((track, i) => (
                <motion.button
                  key={track.type}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => handleSelectTrack(track.type)}
                  className="w-full flex items-center gap-4 p-5 rounded-2xl border-2 border-border bg-surface-hover hover:border-border-hover active:scale-[0.98] transition-all text-left"
                >
                  <span className="text-3xl">{track.icon}</span>
                  <span className="text-base font-semibold text-text-primary">{track.name}</span>
                  <span className="ml-auto text-text-tertiary text-lg">→</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {step === "subtrack" && selectedTrack && (
          <motion.div
            key="subtrack"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            className="flex flex-col items-center gap-6 w-full max-w-sm"
          >
            <button
              onClick={() => { setStep("track"); setSelectedTrack(null); }}
              className="self-start text-text-tertiary hover:text-text-primary transition-colors text-sm"
            >
              ← Volver
            </button>

            <div className="text-center w-full">
              <span className="text-4xl">{trackNames[selectedTrack].icon}</span>
              <h2 className="mt-2 text-xl font-bold text-text-primary">
                {trackNames[selectedTrack].name}
              </h2>
              <p className="mt-1 text-sm text-text-secondary">
                {selectedTrack === "languages" && "Qué idioma quieres aprender?"}
                {selectedTrack === "programming" && "Qué lenguaje quieres dominar?"}
                {selectedTrack === "cooking" && "Qué te interesa aprender?"}
              </p>
            </div>

            <div className="flex flex-col gap-2.5 w-full">
              {subTrackEntries.map(([key, val], i) => (
                <motion.button
                  key={key}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => handleSelectSubTrack(key as SubTrack)}
                  style={{
                    borderColor: selectedSubTrack === key ? trackColor : undefined,
                    backgroundColor: selectedSubTrack === key ? trackColor + "15" : undefined,
                  }}
                  className={`w-full flex items-center gap-3 p-4 rounded-xl border-2 transition-all text-left ${
                    selectedSubTrack === key
                      ? ""
                      : "border-border bg-surface-hover hover:border-border-hover"
                  }`}
                >
                  <span className="text-xl">{val.icon}</span>
                  <span className="text-sm font-semibold text-text-primary">{val.name}</span>
                  {selectedSubTrack === key && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="ml-auto text-accent font-bold text-lg"
                    >
                      ✓
                    </motion.span>
                  )}
                </motion.button>
              ))}
            </div>

            <motion.button
              whileHover={selectedSubTrack ? { scale: 1.02 } : {}}
              whileTap={selectedSubTrack ? { scale: 0.97 } : {}}
              onClick={handleStart}
              disabled={!selectedSubTrack}
              className={`w-full h-12 rounded-xl font-semibold text-sm transition-all ${
                selectedSubTrack
                  ? "bg-accent text-white hover:bg-accent-hover cursor-pointer"
                  : "bg-surface-hover text-text-tertiary cursor-not-allowed"
              }`}
            >
              Empezar a aprender
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
