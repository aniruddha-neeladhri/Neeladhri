"use client";

import {
  createContext,
  useContext,
  useSyncExternalStore,
  ReactNode,
} from "react";

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

function getThemeSnapshot(): ThemeMode {
  if (typeof window === "undefined") return "premium";
  return sessionStorage.getItem(STORAGE_KEY) === "luxury" ? "luxury" : "premium";
}

function getServerThemeSnapshot(): ThemeMode {
  return "premium";
}

function subscribeToTheme(callback: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) callback();
  };
  window.addEventListener("storage", onStorage);
  window.addEventListener("neeladhri-theme-change", callback);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener("neeladhri-theme-change", callback);
  };
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  const setTheme = (next: ThemeMode) => {
    sessionStorage.setItem(STORAGE_KEY, next);
    window.dispatchEvent(new Event("neeladhri-theme-change"));
  };

  const toggleTheme = () => {
    setTheme(theme === "premium" ? "luxury" : "premium");
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
