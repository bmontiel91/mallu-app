"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LearnCard } from "@/lib/types";
import Mascot from "@/components/Mascot";

interface LearnCardsProps {
  cards: LearnCard[];
  onComplete: () => void;
}

export default function LearnCards({ cards, onComplete }: LearnCardsProps) {
  const [index, setIndex] = useState(0);
  const card = cards[index];
  const isLast = index === cards.length - 1;
  if (!card) return null;

  return (
    <div className="flex flex-col items-center gap-5 w-full max-w-sm mx-auto">
      <Mascot expression="thinking" size="md" />

      <span className="text-sm font-bold text-text-tertiary uppercase tracking-wider">
        Palabras nuevas
      </span>

      <div className="w-full min-h-[220px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={card.id}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            className="flex flex-col items-center gap-4"
          >
            <p className="text-4xl font-extrabold text-text-primary text-center leading-tight">
              {card.word}
            </p>

            {card.phonetic && (
              <p className="text-base text-text-tertiary italic -mt-2">
                {card.phonetic}
              </p>
            )}

            <div className="inline-block bg-accent-subtle border-2 border-accent/30 rounded-2xl px-5 py-2.5">
              <p className="text-lg font-bold text-accent">
                {card.translation}
              </p>
            </div>

            {card.example && (
              <div className="w-full bg-surface border-[2px] border-[#E5E5E5] rounded-2xl p-4">
                <p className="text-xs text-text-tertiary font-bold mb-1 uppercase tracking-wider">
                  Ejemplo
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {card.example}
                </p>
              </div>
            )}

            {card.note && (
              <p className="text-xs text-text-tertiary leading-relaxed text-center max-w-[280px]">
                {card.note}
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex gap-2">
        {cards.map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-5 bg-accent" : "w-2 bg-[#DDD]"
            }`}
          />
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => (isLast ? onComplete() : setIndex(index + 1))}
        className="w-full h-12 bg-accent text-white font-bold text-[15px] rounded-2xl shadow-[0_4px_0_#3d8b00] active:shadow-[0_1px_0_#3d8b00] active:translate-y-[3px] transition-all"
      >
        {isLast ? "Listo!" : "Siguiente"}
      </motion.button>
    </div>
  );
}
