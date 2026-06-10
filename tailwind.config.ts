import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        espresso: "#140D09",
        ivory: "#F4E9D8",
        oak: "#8A6A2D",
        forest: "#081412",
        gold: "#B08A44",
        clay: "#7C3329",
        stone: "#D9C7AA",
        ink: "#0B0B0A",
        accent: "#1A4A43"
      },
      fontFamily: {
        display: ["var(--font-display)", "Bodoni Moda", "Georgia", "Times New Roman", "serif"],
        subhead: ["var(--font-subhead)", "Cormorant Garamond", "Georgia", "Times New Roman", "serif"],
        sans: ["var(--font-sans)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      borderRadius: {
        brand: "6px"
      },
      boxShadow: {
        subtle: "0 18px 60px rgba(8, 20, 18, 0.14)"
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.22, 1, 0.36, 1)"
      }
    }
  },
  plugins: []
};

export default config;
