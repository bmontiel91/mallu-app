"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: string;
}

export default function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  icon,
}: ButtonProps) {
  const base = "inline-flex items-center justify-center gap-2 font-bold rounded-2xl transition-all duration-150 select-none";

  const variants: Record<string, string> = {
    primary:
      "bg-accent text-white shadow-[0_4px_0_#3d8b00] hover:bg-accent-hover active:shadow-[0_1px_0_#3d8b00] active:translate-y-[3px]",
    secondary:
      "bg-white text-text-primary border-[2px] border-[#E5E5E5] shadow-[0_4px_0_#D5D5D5] hover:bg-surface active:shadow-[0_1px_0_#D5D5D5] active:translate-y-[3px]",
    ghost:
      "text-text-secondary hover:text-text-primary hover:bg-surface",
  };

  const sizes: Record<string, string> = {
    sm: "h-9 px-4 text-sm rounded-xl",
    md: "h-12 px-6 text-[15px]",
    lg: "h-14 px-8 text-base",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${fullWidth ? "w-full" : ""} ${disabled ? "opacity-50 pointer-events-none" : "cursor-pointer"}`;

  return (
    <motion.button
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : {}}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {children}
    </motion.button>
  );
}
