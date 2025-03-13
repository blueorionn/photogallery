import { useEffect, useState } from "react";

export function useDarkMode() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const LOCAL_STORAGE_THEME_KEY = "theme";

  const setThemeHandler = (theme: "light" | "dark") => {
    setTheme(theme);

    if (typeof window !== undefined) {
      window.localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    }
  };

  useEffect(() => {
    /**
     * set initial theme to localStorage theme variable
     * if exsits else set it to user preferred theme.
     */
    const setInitialTheme = () => {
      if (typeof window === undefined) {
        setThemeHandler("light");
      } else {
        const theme = window.localStorage.getItem("theme");

        if (
          typeof theme === "string" &&
          (theme === "light" || theme === "dark")
        ) {
          setThemeHandler(theme);
        } else {
          // check if preferred theme is dark
          const isDarkOs = window.matchMedia(
            "(prefers-color-scheme: dark)"
          ).matches;

          if (isDarkOs) setTheme("dark");
          if (!isDarkOs) setTheme("light");
        }
      }
    };

    setInitialTheme();
  }, []);

  // toggle theme button
  const toggleTheme = () => {
    if (theme === "dark") setThemeHandler("light");
    if (theme === "light") setThemeHandler("dark");
  };

  return {
    theme,
    toggleTheme,
  };
}
