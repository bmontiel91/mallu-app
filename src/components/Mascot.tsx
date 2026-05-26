"use client";

import { motion } from "framer-motion";
import { MascotExpression } from "@/lib/types";

const expressionConfig: Record<MascotExpression, { label: string; animation: any }> = {
  happy: {
    label: "Feliz",
    animation: { y: [0, -8, 0], transition: { repeat: Infinity, duration: 1.5 } },
  },
  thinking: {
    label: "Pensando",
    animation: { rotate: [0, -5, 0, 5, 0], transition: { repeat: Infinity, duration: 2 } },
  },
  sad: {
    label: "Triste",
    animation: { y: [0, 4, 0], transition: { repeat: 1, duration: 0.5 } },
  },
  neutral: {
    label: "Neutral",
    animation: { y: [0, -4, 0], transition: { repeat: Infinity, duration: 3 } },
  },
  excited: {
    label: "Emocionado",
    animation: { scale: [1, 1.2, 1, 1.1, 1], transition: { repeat: 1, duration: 0.6 } },
  },
  waving: {
    label: "Saludando",
    animation: { rotate: [0, -15, 15, -15, 15, 0], transition: { repeat: Infinity, duration: 1 } },
  },
};

interface MascotProps {
  expression?: MascotExpression;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

export default function Mascot({ expression = "neutral", size = "md", showLabel = true }: MascotProps) {
  const config = expressionConfig[expression];
  const sizeClasses = { sm: "w-16 h-16", md: "w-28 h-28", lg: "w-40 h-40" };

  // Colores basados en el logo original
  const colors = {
    grayDark: "#5A5A5A",
    gray: "#6B6B6B",
    grayLight: "#8A8A8A",
    cream: "#E8E0D5",
    creamDark: "#D4C5B5",
    black: "#1A1A1A",
    pink: "#E85D75",
    white: "#FFFFFF",
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <motion.div
        animate={config.animation}
        className={`${sizeClasses[size]} relative`}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Oreja izquierda - gris oscuro con interior claro */}
          <ellipse cx="45" cy="65" rx="28" ry="38" fill={colors.grayDark} stroke={colors.black} strokeWidth="3" transform="rotate(-25 45 65)" />
          <ellipse cx="48" cy="70" rx="16" ry="24" fill={colors.cream} transform="rotate(-25 48 70)" />
          
          {/* Oreja derecha - gris oscuro con interior claro */}
          <ellipse cx="155" cy="65" rx="28" ry="38" fill={colors.grayDark} stroke={colors.black} strokeWidth="3" transform="rotate(25 155 65)" />
          <ellipse cx="152" cy="70" rx="16" ry="24" fill={colors.cream} transform="rotate(25 152 70)" />
          
          {/* Cabeza principal - forma redondeada con pelo gris */}
          <ellipse cx="100" cy="105" rx="75" ry="70" fill={colors.gray} stroke={colors.black} strokeWidth="3" />
          
          {/* Mechones de pelo en la cabeza (textura del logo) */}
          <path d="M70 50 Q80 40 90 50" stroke={colors.grayDark} strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M85 42 Q95 32 105 42" stroke={colors.grayDark} strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M110 50 Q120 40 130 50" stroke={colors.grayDark} strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M65 60 Q72 52 80 60" stroke={colors.grayDark} strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M120 60 Q128 52 135 60" stroke={colors.grayDark} strokeWidth="2" fill="none" strokeLinecap="round" />
          
          {/* Hocico - color crema/blanco como el logo */}
          <ellipse cx="100" cy="125" rx="42" ry="35" fill={colors.cream} stroke={colors.black} strokeWidth="3" />
          <ellipse cx="100" cy="128" rx="35" ry="28" fill={colors.creamDark} opacity="0.5" />
          
          {/* Nariz negra grande */}
          <ellipse cx="100" cy="110" rx="16" ry="12" fill={colors.black} />
          <ellipse cx="96" cy="106" rx="6" ry="4" fill={colors.grayLight} opacity="0.6" />
          
          {/* Ojos */}
          {expression === "happy" ? (
            <>
              {/* Ojo izquierdo cerrado/feliz */}
              <path d="M62 88 Q72 78 82 88" stroke={colors.black} strokeWidth="4" fill="none" strokeLinecap="round" />
              {/* Ojo derecho guiñando */}
              <path d="M118 88 Q128 78 138 88" stroke={colors.black} strokeWidth="4" fill="none" strokeLinecap="round" />
            </>
          ) : expression === "sad" ? (
            <>
              <circle cx="72" cy="88" r="11" fill={colors.black} />
              <circle cx="128" cy="88" r="11" fill={colors.black} />
              <circle cx="74" cy="85" r="4" fill={colors.white} />
              <circle cx="130" cy="85" r="4" fill={colors.white} />
              {/* Cejas tristes */}
              <path d="M62 78 Q72 85 82 78" stroke={colors.grayDark} strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M118 78 Q128 85 138 78" stroke={colors.grayDark} strokeWidth="3" fill="none" strokeLinecap="round" />
            </>
          ) : expression === "excited" ? (
            <>
              <circle cx="72" cy="88" r="13" fill={colors.white} stroke={colors.black} strokeWidth="2" />
              <circle cx="128" cy="88" r="13" fill={colors.white} stroke={colors.black} strokeWidth="2" />
              <circle cx="74" cy="88" r="7" fill={colors.black} />
              <circle cx="130" cy="88" r="7" fill={colors.black} />
              <circle cx="76" cy="85" r="3" fill={colors.white} />
              <circle cx="132" cy="85" r="3" fill={colors.white} />
            </>
          ) : expression === "thinking" ? (
            <>
              <ellipse cx="75" cy="88" rx="10" ry="11" fill={colors.black} />
              <ellipse cx="125" cy="88" rx="10" ry="11" fill={colors.black} />
              <circle cx="77" cy="85" r="4" fill={colors.white} />
              <circle cx="127" cy="85" r="4" fill={colors.white} />
              {/* Mirando hacia arriba */}
              <ellipse cx="75" cy="85" rx="8" ry="5" fill={colors.cream} opacity="0.3" />
              <ellipse cx="125" cy="85" rx="8" ry="5" fill={colors.cream} opacity="0.3" />
            </>
          ) : expression === "waving" ? (
            <>
              {/* Ojo izquierdo abierto */}
              <circle cx="72" cy="88" r="10" fill={colors.black} />
              <circle cx="74" cy="85" r="4" fill={colors.white} />
              {/* Ojo derecho guiñando */}
              <path d="M118 88 Q128 78 138 88" stroke={colors.black} strokeWidth="4" fill="none" strokeLinecap="round" />
            </>
          ) : (
            <>
              {/* Neutral - igual que el logo: ojo abierto + guiño */}
              <circle cx="72" cy="88" r="10" fill={colors.black} />
              <circle cx="74" cy="85" r="4" fill={colors.white} />
              <path d="M118 88 Q128 78 138 88" stroke={colors.black} strokeWidth="4" fill="none" strokeLinecap="round" />
            </>
          )}
          
          {/* Boca */}
          {expression === "happy" || expression === "excited" ? (
            <>
              <path d="M80 145 Q100 170 120 145" stroke={colors.black} strokeWidth="3" fill="none" strokeLinecap="round" />
              {/* Lengua rosa */}
              <ellipse cx="100" cy="162" rx="12" ry="10" fill={colors.pink} />
              <ellipse cx="98" cy="160" rx="5" ry="4" fill={colors.pink} opacity="0.6" />
            </>
          ) : expression === "sad" ? (
            <path d="M80 155 Q100 145 120 155" stroke={colors.black} strokeWidth="3" fill="none" strokeLinecap="round" />
          ) : expression === "thinking" ? (
            <path d="M85 150 Q100 155 115 150" stroke={colors.black} strokeWidth="3" fill="none" strokeLinecap="round" />
          ) : expression === "waving" ? (
            <path d="M80 148 Q100 165 120 148" stroke={colors.black} strokeWidth="3" fill="none" strokeLinecap="round" />
          ) : (
            <path d="M85 152 Q100 158 115 152" stroke={colors.black} strokeWidth="3" fill="none" strokeLinecap="round" />
          )}
          
          {/* Patas (solo para waving) */}
          {expression === "waving" && (
            <g>
              <ellipse cx="170" cy="150" rx="20" ry="25" fill={colors.gray} stroke={colors.black} strokeWidth="3" />
              <ellipse cx="172" cy="155" rx="12" ry="15" fill={colors.cream} />
              {/* Dedos de la pata */}
              <circle cx="165" cy="138" r="5" fill={colors.gray} stroke={colors.black} strokeWidth="2" />
              <circle cx="172" cy="135" r="5" fill={colors.gray} stroke={colors.black} strokeWidth="2" />
              <circle cx="179" cy="138" r="5" fill={colors.gray} stroke={colors.black} strokeWidth="2" />
            </g>
          )}
        </svg>
        
        {/* Estrella para excited */}
        {expression === "excited" && (
          <motion.span
            className="absolute -top-2 -right-2 text-2xl"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: [0, 1.3, 1], rotate: [0, 180, 360] }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            ⭐
          </motion.span>
        )}
      </motion.div>
      
      {showLabel && size !== "sm" && (
        <motion.span
          key={expression}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-text-secondary font-medium"
        >
          {config.label}
        </motion.span>
      )}
    </div>
  );
}
