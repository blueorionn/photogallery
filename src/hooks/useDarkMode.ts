import { useState } from "react";

export function useDarkMode() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else if(theme == 'light') {
      setTheme("dark");
    }
  };

  return {
    theme,
    toggleTheme,
  };
}
