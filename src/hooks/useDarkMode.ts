import { useState, useEffect } from "react";

const LOCAL_STORAGE_KEY = "theme";
const IS_SERVER = typeof window === "undefined";

export function useDarkMode() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    if (IS_SERVER) return;

    // on client
    const localTheme = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (localTheme) {
      if (localTheme == "light") setTheme("light");
      if (localTheme == "dark") setTheme("dark");
    }
  }, []);

  return {
    theme,
    toggleTheme,
  };
}
