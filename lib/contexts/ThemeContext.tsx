"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type ThemeMode = "premium" | "luxury";

/** Page / section background per theme */
export const THEME_PAGE_BG: Record<ThemeMode, string> = {
  premium: "#FFFFFF",
  luxury: "#000000",
};

/** Default body / content text color per theme */
export const THEME_FOREGROUND: Record<ThemeMode, string> = {
  premium: "#171717",
  luxury: "#FFFFFF",
};

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = "neeladhri-theme";

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Use consistent initial value for SSR to avoid hydration mismatch
  const [theme, setTheme] = useState<ThemeMode>("premium");

  // Sync with sessionStorage after mount (client-side only)
  useEffect(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored === "luxury") {
      setTheme("luxury");
    }
  }, []);

  // Save to sessionStorage when theme changes
  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "premium" ? "luxury" : "premium"));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
