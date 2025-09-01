import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        // TRW specific colors
        gold: "#d4af37",
        crimson: "#dc143c",
        cream: "#fff8f1",
        "dark-bg": "#0b0a09",
        "dark-border": "#27272a",
      },
      fontFamily: {
        sans: ["var(--font-work-sans)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-playfair)", "ui-serif", "Georgia"],
      },
      fontSize: {
        "hero": ["clamp(52px, 8.5vw, 110px)", { lineHeight: "0.9", letterSpacing: "-0.03em" }],
        "section": ["clamp(36px, 6vw, 84px)", { lineHeight: "1.1", letterSpacing: "-0.04em" }],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out",
        "fade-in": "fadeIn 0.4s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "pulse-gold": "pulseGold 2s infinite",
        "text-slide": "textSlide 0.3s ease-out",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        pulseGold: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        textSlide: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "gradient-gold": "linear-gradient(135deg, #d4af37 0%, #ffd700 100%)",
        "gradient-crimson": "linear-gradient(135deg, #dc143c 0%, #ff6b6b 100%)",
        "gradient-dark": "linear-gradient(180deg, #0b0a09 0%, #1a1918 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;