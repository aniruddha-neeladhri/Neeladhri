"use client";

import { useTheme } from "@/lib/contexts/ThemeContext";
import { useEffect } from "react";

export default function ThemeWrapper() {
  const { theme } = useTheme();

  useEffect(() => {
    const body = document.body;
    body.classList.remove("theme-premium", "theme-luxury");
    body.classList.add(`theme-${theme}`);
  }, [theme]);

  return null;
}
