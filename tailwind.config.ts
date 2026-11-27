import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: {
    colors: { ink: "#0B1B3A", ocean: "#1458D4", sky: "#EAF2FF", mist: "#F4F7FF", lime: "#B9E5E8", coral: "#FF6B4A", sun: "#FFC83D", mint: "#2EE6B8", grape: "#7C5CFF" },
    boxShadow: { soft: "0 20px 60px rgba(16,33,61,.09)", pop: "6px 6px 0 #0B1B3A" },
    fontFamily: { sans: ["var(--font-body)", "system-ui", "sans-serif"], display: ["var(--font-display)", "system-ui", "sans-serif"] },
    keyframes: {
      marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
      float: { "0%,100%": { transform: "translateY(0) rotate(var(--r,0deg))" }, "50%": { transform: "translateY(-14px) rotate(var(--r,0deg))" } },
      popin: { "0%": { opacity: "0", transform: "translateY(45%) scale(.95)" }, "100%": { opacity: "1", transform: "none" } }
    },
    animation: { marquee: "marquee 30s linear infinite", float: "float 6s ease-in-out infinite", popin: "popin .5s cubic-bezier(.2,.9,.3,1.2) both" }
  }},
  plugins: []
};
export default config;
