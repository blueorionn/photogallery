"use client";
import { ReactNode } from "react";
import { useDarkMode } from "@/hooks/useDarkMode";
import { ThemeContext } from "@/context/ThemeContext";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const { theme, toggleTheme } = useDarkMode();
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
}
