"use client";

import { THEME_FOREGROUND, THEME_PAGE_BG, useTheme } from "@/lib/contexts/ThemeContext";
import { useEffect } from "react";

export default function ThemeWrapper() {
  const { theme } = useTheme();

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const bg = THEME_PAGE_BG[theme];
    const fg = THEME_FOREGROUND[theme];

    root.classList.remove("theme-premium", "theme-luxury");
    body.classList.remove("theme-premium", "theme-luxury");
    root.classList.add(`theme-${theme}`);
    body.classList.add(`theme-${theme}`);

    root.style.setProperty("--background", bg);
    root.style.setProperty("--theme-page-bg", bg);
    root.style.setProperty("--foreground", fg);
    root.style.colorScheme = theme === "luxury" ? "dark" : "light";
    body.style.backgroundColor = bg;
    body.style.color = fg;
  }, [theme]);

  return null;
}
