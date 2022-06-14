/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Be Vietnam Pro"', "sans-serif"],
    },
    extend: {
      animation: {
        pulse: "pulse 1s linear infinite",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: 0 },
          "50%": { opacity: 1 },
        },
      },
      fontSize: {
        sm: ["0.8125rem", "1rem"],
        "4xl": ["2.375rem", "3rem"],
      },
      screens: {
        "2xl": "90rem", // 1440px
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
