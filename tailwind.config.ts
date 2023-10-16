/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        screen: "clamp(0.4673125rem, 1.10546875vw, 1rem)",
        "screen-sm": "clamp(0.75rem, 2vh, 1rem)",
      },
      letterSpacing: {
        tight: "-.01em",
      },
      animation: {
        pulse: "pulse 2s linear infinite",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: 0 },
          "50%": { opacity: 1 },
        },
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
