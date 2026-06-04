import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        espresso: "#14110F",
        ivory: "#F7F1E8",
        oak: "#B98B5D",
        forest: "#1F3D32",
        gold: "#C6A15B",
        clay: "#9B4F35",
        stone: "#D8D0C4",
        ink: "#24201C"
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "Times New Roman", "serif"],
        sans: ["Geist", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      borderRadius: {
        rehoboth: "6px"
      },
      boxShadow: {
        subtle: "0 12px 40px rgba(20, 17, 15, 0.08)"
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.22, 1, 0.36, 1)"
      }
    }
  },
  plugins: []
};

export default config;
