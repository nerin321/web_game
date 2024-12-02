import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "#183d6d",
        secondry: "#f15a24",
        "dark-bg-primary": "#02050a",
        "dark-bg-secondary": "#293139",
        "dark-border": "#21262d",
      },
      keyframes: {
        shake: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(5deg)",
          },
          "50%": {
            transform: "rotate(-5deg)",
          },
          "75%": {
            transform: "rotate(5deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
          "99%": {
            transform: "rotate(0deg)",
          },
        },
      },
      animation: {
        shake: "shake 0.3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
