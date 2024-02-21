import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundColor: {
        "nft-card": "#05030A",
        "nft-card-btn": "#1D4FFE",
        "nft-card-likes": "#05030A"
      },
      borderColor: {
        "nft-card": "#131317"
      },
      borderRadius: {
        "nft-card-btn": "122px",
        "nft-card-likes": "122px"
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        "nft-card-badge": "#6691FF",
        "nft-card-collection": "#DFDFE0"
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        poppins: ["var(--font-poppins)"]
      },
      fontSize: {
        "2xs": "10px"
      },
      height: {
        "nft-card-cover": "15.0131rem"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      maxWidth: {
        grid: "77.5rem",
        "nft-card": "17.5rem"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config