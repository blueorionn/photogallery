"use client";
import { ReactNode, createContext } from "react";
import { useDarkMode } from "@/hooks/useDarkMode";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const { theme, toggleTheme } = useDarkMode();
  const ThemeContext = createContext({ theme, toggleTheme });
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
}
