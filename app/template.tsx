"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { usePathname } from "next/navigation";

interface TemplateProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 24,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: {
      duration: 0.28,
      ease: "easeIn" as const,
    },
  },
};

const itemVariants = {
  initial: {
    opacity: 0,
    y: 32,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function AnimatedItem({ children }: { children: ReactNode }) {
  const { theme } = useTheme();
  return (
    <motion.div
      key={theme}
      variants={itemVariants}
      className="w-full"
      initial="initial"
      animate="animate"
    >
      {children}
    </motion.div>
  );
}

export default function Template({ children }: TemplateProps) {
  const pathname = usePathname();

  // Key by route only — theme changes must not remount the page
  // (that remount was causing the toggle glitch on the homepage).
  return (
    <motion.div
      key={pathname}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
