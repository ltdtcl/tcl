import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: {
    colors: { ink: "#10213D", ocean: "#1458D4", sky: "#EAF2FF", mist: "#F5F8FC", lime: "#B9E5E8" },
    boxShadow: { soft: "0 20px 60px rgba(16,33,61,.09)" },
    fontFamily: { sans: ["Arial", "Helvetica", "sans-serif"] }
  }},
  plugins: []
};
export default config;
