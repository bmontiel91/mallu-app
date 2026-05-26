"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface LessonNodeProps {
  id: string;
  title: string;
  icon: string;
  status: "locked" | "available" | "completed";
  xp: number;
  delay: number;
}

export default function LessonNode({ id, title, icon, status, xp, delay }: LessonNodeProps) {
  const isLocked = status === "locked";
  const isCompleted = status === "completed";

  const nodeContent = (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: delay * 0.15, type: "spring", stiffness: 200 }}
      whileHover={!isLocked ? { scale: 1.1 } : {}}
      className={`
        relative flex flex-col items-center justify-center
        w-16 h-16 md:w-20 md:h-20 rounded-2xl
        border-2 transition-all duration-200
        ${isCompleted ? "border-success bg-success-subtle" : ""}
        ${!isLocked && !isCompleted ? "border-accent bg-accent-subtle cursor-pointer animate-pulse-glow" : ""}
        ${isLocked ? "border-border bg-surface opacity-50 cursor-not-allowed" : ""}
      `}
    >
      <span className={`text-2xl md:text-3xl ${isLocked ? "grayscale" : ""}`}>
        {isLocked ? "🔒" : isCompleted ? "✅" : icon}
      </span>
      {isCompleted && (
        <motion.span
          className="absolute -top-1 -right-1 text-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: delay * 0.15 + 0.2 }}
        >
          ⭐
        </motion.span>
      )}
    </motion.div>
  );

  return (
    <div className="flex flex-col items-center gap-1.5">
      {isLocked ? (
        nodeContent
      ) : (
        <Link href={isCompleted ? "#" : `/lesson/${id}`}>
          {nodeContent}
        </Link>
      )}
      <span className={`text-[10px] md:text-xs font-medium text-center max-w-[80px] leading-tight ${isLocked ? "text-text-tertiary" : "text-text-secondary"}`}>
        {title}
      </span>
      {!isLocked && (
        <span className="text-[10px] text-accent font-semibold">+{xp} XP</span>
      )}
    </div>
  );
}
