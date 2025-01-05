import { useEffect, useState } from "react";

export function useDarkMode() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const LOCAL_STORAGE_THEME_KEY = "theme";

  // set theme handler
  const setThemeFunc = (theme: "light" | "dark") => {
    setTheme(theme);

    if (typeof window !== undefined) {
      window.localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    }
  };

  // set initial theme
  useEffect(() => {
    const setInitialTheme = () => {
      if (
        typeof window !== undefined &&
        window.localStorage.getItem("theme") !== null
      ) {
        const theme = window.localStorage.getItem("theme");
        if (theme == "dark") {
          setThemeFunc("dark");
        } else if (theme == "light") {
          setThemeFunc("light");
        }
      } else if (typeof window !== undefined) {
        // preferred theme
        const isDarkOs = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        if (isDarkOs) {
          setThemeFunc("dark");
        }
      }
    };
    setInitialTheme();
  }, []);

  // toggle theme button
  const toggleTheme = () => {
    if (theme === "dark") {
      setThemeFunc("light");
    } else if (theme == "light") {
      setThemeFunc("dark");
    }
  };

  return {
    theme,
    toggleTheme,
  };
}
