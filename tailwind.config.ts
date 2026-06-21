import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        espresso: "#1B1714",
        ivory: "#F5F0E8",
        oak: "#8A6A2D",
        forest: "#0F4D46",
        gold: "#C9A96E",
        clay: "#7C3329",
        stone: "#D9C7AA",
        ink: "#0B0B0A",
        accent: "#0F4D46"
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
