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
    y: 40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
};

const itemVariants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
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
  const { theme } = useTheme();
  const pathname = usePathname();

  return (
    <motion.div
      key={`${pathname}-${theme}`}
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
