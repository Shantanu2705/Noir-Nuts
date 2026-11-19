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
        gold: {
          champagne: "#C6A15B",
          antique: "#A9823D",
          light: "#EADBBF",
          dark: "#8C6A2E",
          50: "#FAF7EE",
          100: "#F3ECCF",
          200: "#E6D7A0",
          300: "#D6BE6E",
          400: "#C6A15B",
          500: "#A9823D",
          600: "#8C6A2E",
          700: "#6B4F22",
        },
        ivory: {
          warm: "#FAF8F3",
          light: "#FDFBF7",
          cream: "#F5F0E6",
        },
        chocolate: {
          espresso: "#1B100D",
          deep: "#2B1712",
          rich: "#43251D",
          medium: "#5B342A",
          muted: "#7A493B",
        },
        accent: {
          beige: "#EDE3D3",
          taupe: "#B8A58C",
          caramel: "#B87942",
          rose: "#C99B91",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "DM Sans", "Manrope", "system-ui", "sans-serif"],
      },
      boxShadow: {
        luxury: "0 10px 30px -10px rgba(43, 23, 18, 0.08), 0 4px 6px -2px rgba(43, 23, 18, 0.03)",
        "luxury-lg": "0 20px 40px -15px rgba(43, 23, 18, 0.12), 0 8px 16px -4px rgba(43, 23, 18, 0.04)",
        "gold-glow": "0 0 25px -5px rgba(198, 161, 91, 0.3)",
      },
      animation: {
        "pulse-subtle": "pulseSubtle 2.5s infinite ease-in-out",
        "float-slow": "floatSlow 4s ease-in-out infinite",
      },
      keyframes: {
        pulseSubtle: {
          "0%, 100%": { transform: "scale(1)", boxShadow: "0 0 0 0 rgba(198, 161, 91, 0.4)" },
          "50%": { transform: "scale(1.05)", boxShadow: "0 0 0 12px rgba(198, 161, 91, 0)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
