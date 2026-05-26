"use client";

import { motion } from "framer-motion";

interface HeartDisplayProps {
  hearts: number;
  maxHearts: number;
}

export default function HeartDisplay({ hearts, maxHearts }: HeartDisplayProps) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: maxHearts }).map((_, i) => (
        <motion.span
          key={i}
          initial={false}
          animate={{
            scale: i < hearts ? 1 : 0.8,
            opacity: i < hearts ? 1 : 0.3,
          }}
          className="text-xl"
        >
          {i < hearts ? "❤️" : "🖤"}
        </motion.span>
      ))}
    </div>
  );
}
