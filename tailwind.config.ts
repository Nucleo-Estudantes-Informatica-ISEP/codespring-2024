import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{astro,tsx}",
    "./src/components/**/*.{astro,tsx}",
    "./src/layouts/**/*.{astro,tsx}",
    "./src/lib/**/*.{astro,tsx}"
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      themeVariants: ["dark", "light"],
      colors: {
        text: "var(--text)",
        background: "var(--background)",
        container: "var(--container)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        "section-card": {
          DEFAULT: "var(--section-card)",
          foreground: "hsl(var(--section-card-foreground))"
        },
        "schedule-day": {
          DEFAULT: "var(--schedule-day)",
          foreground: "hsl(var(--schedule-day-foreground))"
        },
        "criteria-value": {
          DEFAULT: "var(--criteria-value)",
          foreground: "hsl(var(--schedule-day-foreground))"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        spotlight: "spotlight 2s ease .75s 1 forwards"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)"
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)"
          }
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))"
          }
        }
      },
      backgroundImage: {
        hero: "var(--hero-bg)"
      },
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"],
        poppins: ["Poppins", "Arial", "sans-serif"],
        archivo: ["Archivo", "Arial", "sans-serif"]
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
