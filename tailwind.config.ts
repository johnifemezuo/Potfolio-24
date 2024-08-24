/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-bg": "var(--background-bg)",
        "border-color": "var(--border-color)",
        "accent-color": "var(--accent-color)",
        "accent-colorTwo": "var(--yellow-color)"
      },
      fontFamily: {
        montserrat: ["Montserrat", "ubuntu"],
        oswald: ["Oswald", "san-serif"],
        sourceSerif: ["Source Serif Pro", "serif"],
        souceCodePro: ["Source Code Pro", "monospace"],
        inter: ["inter", "serif"],
        manrope: ["Manrope", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
