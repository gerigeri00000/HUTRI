import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E293B",
        "on-primary": "#FFFFFF",
        secondary: "#334155",
        "on-secondary": "#FFFFFF",
        accent: "#22C55E",
        "on-accent": "#0F172A",
        background: "#0F172A",
        foreground: "#F8FAFC",
        card: "#1B2336",
        "card-foreground": "#F8FAFC",
        muted: "#272F42",
        "muted-foreground": "#94A3B8",
        border: "#475569",
        destructive: "#EF4444",
        "on-destructive": "#000000",
        ring: "#FFFFFF",
      },
      fontFamily: {
        heading: ["Fira Code", "monospace"],
        body: ["Fira Sans", "sans-serif"],
      },
      backdropBlur: {
        glass: "16px",
      },
    },
  },
  plugins: [],
};
export default config;
