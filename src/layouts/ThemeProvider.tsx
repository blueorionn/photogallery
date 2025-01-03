"use client";
import { ReactNode } from "react";
import { useDarkMode } from "@/hooks/useDarkMode";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const { theme } = useDarkMode();
  return (
    <>
      <body className={theme}>{children}</body>
    </>
  );
}
