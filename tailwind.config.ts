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
        white: "var(--color-white)",
        black: "var(--color-black)",
        gold: "var(--color-gold)",
        gray: {
          light: "var(--color-gray-light)",
          mid: "var(--color-gray-mid)",
          muted: "var(--color-gray-muted)",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Poppins", "sans-serif"],
        body: ["var(--font-body)", "Poppins", "sans-serif"],
        hero: ["var(--font-hero-name)", "Poppins", "sans-serif"],
        glonto: ["var(--font-hero-name)", "Poppins", "sans-serif"],
        dev: ["var(--font-dev)", "monospace"],
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        ticker: 'ticker 20s linear infinite',
      }
    },
  },
  plugins: [],
};
export default config;
