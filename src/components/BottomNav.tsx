"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { href: "/home", icon: "🏠", label: "Inicio" },
  { href: "/profile", icon: "👤", label: "Perfil" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-surface border-t border-border safe-area-bottom">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto px-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href} className="flex flex-col items-center gap-0.5 min-w-[64px]">
              <motion.div
                animate={isActive ? { y: -2 } : { y: 0 }}
                className={`text-xl ${isActive ? "opacity-100" : "opacity-50"}`}
              >
                {item.icon}
              </motion.div>
              <span className={`text-[11px] font-medium ${isActive ? "text-accent" : "text-text-tertiary"}`}>
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
  );
}
