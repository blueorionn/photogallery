import { useEffect, useState } from "react";

export function useDarkMode() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // set initial theme
  useEffect(() => {
    const setInitialTheme = () => {
      // preferred theme
      if (typeof window !== undefined) {
        const isDarkOs = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        if (isDarkOs) {
          setTheme("dark");
        }
      }
    };
    setInitialTheme();
  }, []);

  // toggle theme button
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else if (theme == "light") {
      setTheme("dark");
    }
  };

  return {
    theme,
    toggleTheme,
  };
}
