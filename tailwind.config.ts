import type { Config } from "tailwindcss";

export default {
  content: [
      "./src/**/*.{js,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        text: "var(--text)",
        accent: "var(--accent)",
        dark: "var(--dark)",
      },
      fontFamily: {
        'hanken': ['Hanken Grotesk', 'sans-serif'],
      }
    },
  },
  plugins: [],
} satisfies Config;
