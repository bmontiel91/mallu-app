"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  value: number;
  max: number;
  color?: string;
  showLabel?: boolean;
  height?: "sm" | "md" | "lg";
}

export default function ProgressBar({ value, max, color = "var(--color-accent)", showLabel = true, height = "md" }: ProgressBarProps) {
  const pct = Math.min((value / max) * 100, 100);
  const heights = { sm: "h-1.5", md: "h-2.5", lg: "h-4" };

  return (
    <div className="w-full">
      <div className={`w-full bg-surface-hover rounded-full overflow-hidden ${heights[height]}`}>
        <motion.div
          className={`h-full rounded-full`}
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
      {showLabel && (
        <div className="flex justify-between mt-1.5">
          <span className="text-xs text-text-tertiary">{Math.floor(value)}/{max}</span>
          <span className="text-xs text-text-tertiary">{Math.floor(pct)}%</span>
        </div>
      )}
    </div>
  );
}
