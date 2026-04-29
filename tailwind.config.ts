import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0b1730",
          dark: "#070d1f",
          accent: "#f59e0b",
          light: "#f8fafc"
        }
      },
      boxShadow: {
        soft: "0 12px 30px -12px rgba(15, 23, 42, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
