import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: {
    colors: { ink: "#0B1220", brand: "#2F5BFF", ocean: "#2F5BFF", mist: "#F6F7FB", line: "#E2E6F0", sky: "#EAF0FF" },
    fontFamily: { sans: ["var(--font-body)", "system-ui", "sans-serif"], display: ["var(--font-body)", "system-ui", "sans-serif"] },
    keyframes: {
      marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
      float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
      popin: { "0%": { opacity: "0", transform: "translateY(40%)" }, "100%": { opacity: "1", transform: "none" } }
    },
    animation: { marquee: "marquee 30s linear infinite", float: "float 6s ease-in-out infinite", popin: "popin .5s ease both" }
  }},
  plugins: []
};
export default config;
