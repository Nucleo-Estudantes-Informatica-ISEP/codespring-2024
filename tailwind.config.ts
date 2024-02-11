import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{astro,tsx}",
    "./src/components/**/*.{astro,tsx}",
    "./src/layouts/**/*.{astro,tsx}",
  ],
  theme: {
    themeVariants: ["dark", "light"],
    extend: {
      colors: {
        text: "var(--text)",
        background: "var(--background)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        muted: "var(--muted)",
        container: "var(--container)",
      },
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"],
        poppins: ["Poppins", "Arial", "sans-serif"],
        archivo: ["Archivo", "Arial", "sans-serif"],
      },
      backgroundImage: {
        hero: "var(--hero-bg)",
      },
    },
  },
  plugins: [],
};

export default config;
