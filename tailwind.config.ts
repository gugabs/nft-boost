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
      backgroundImage: {
        "last-call": "url('/images/backgrounds/bg-last-call.svg')",
        "divider": "linear-gradient(90deg, rgba(2,0,36,0) 0%, rgba(255,255,255,1) 50%, rgba(0,212,255,0) 100%)"
      },
      backgroundColor: {
        "btn-primary": "#1D4FFE",
        "nft-card": "#05030A",
        "nft-card-likes": "#05030A"
      },
      borderColor: {
        "nft-card": "#131317"
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        "collector-card-appreciation": "#4BCE97",
        "nft-card-badge": "#6691FF",
        "nft-card-collection": "#DFDFE0"
      },
      fontFamily: {
        inter: "var(--font-inter)",
        poppins: "var(--font-poppins)"
      },
      fontSize: {
        "2xs": "0.625rem"
      },
      height: {
        "last-call": "29.5rem",
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
        "grid": "77.5rem",
        "last-call-title": "49.75rem",
        "last-call-subtitle": "39.875rem",
        "nft-card": "17.5rem"
      },
      minHeight: {
        "collector-card": "4.625rem"
      }
    },
    screens: {
      '@laptop': '1024px',
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config