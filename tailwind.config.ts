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
      },
    },
  },
  plugins: [],
};
export default config;
