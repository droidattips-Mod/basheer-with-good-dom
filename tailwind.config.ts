import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#006C35",
          dark: "#004B26",
          deep: "#06281A",
          gold: "#C9A227",
          light: "#F7F8F6"
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
