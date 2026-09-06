import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#000100",
        surface: "#10100F",
        "surface-2": "#1B1C18",
        "surface-3": "#2C3024",
        text: "#EFF1F0",
        "text-light": "#C5CBCB",
        muted: "#979387",
        accent: "#C0DB9A",
        "accent-light": "#D4E9B0",
        olive: "#656B4D",
        border: "rgba(239,241,240,0.08)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        "display-heading": ["var(--font-display-heading)"],
        body: ["var(--font-body)"],
      },
    },
  },
  plugins: [],
};

export default config;
