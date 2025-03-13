import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/www/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/provider/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-dark": "var(--default-dark)",
        "foreground-dark": "var(--default-light)",
        background: "var(--default-light)",
        foreground: "var(--default-dark)",
      },
    },
  },
  plugins: [],
} satisfies Config;
