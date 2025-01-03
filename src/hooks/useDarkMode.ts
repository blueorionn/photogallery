import { useState } from "react";

const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";
const LOCAL_STORAGE_KEY = "theme";
const IS_SERVER = typeof window === "undefined";

// set initial theme
function setInitialTheme(): string | unknown {
  // On Server
  if (IS_SERVER) return;

  // reading theme key in local storage
  try {
    const raw = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    if (raw) {
      try {
        return JSON.parse(raw)[LOCAL_STORAGE_KEY];
      } catch (error) {
        console.warn(
          `Error parsing localStorage key “${LOCAL_STORAGE_KEY}”`,
          error
        );
      }
    }
  } catch (error) {
    console.warn(
      `Error reading localStorage key “${LOCAL_STORAGE_KEY}”:`,
      error
    );
  }

  // preferred theme
  const isDarkOS = window.matchMedia(COLOR_SCHEME_QUERY) ? "dark" : "light";
  return isDarkOS;
}

export function useDarkMode() {
  const [isDarkMode, setDarkMode] = useState(false);
  const initialTheme = setInitialTheme();

  if (initialTheme === "dark") {
    setDarkMode(true);
  } else if (initialTheme === "light") {
    setDarkMode(false);
  }

  return {
    isDarkMode,
    toggle: () => {
      setDarkMode((prev) => !prev);
    },
    enable: () => {
      setDarkMode(true);
    },
    disable: () => {
      setDarkMode(false);
    },
    set: (value: boolean) => {
      setDarkMode(value);
    },
  };
}
