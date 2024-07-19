/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "source-serif": ["Source Serif Pro", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        heroBG1: "url('/gradient2.svg')",
        heroBG2: "url('/gradient.png')",
      },
      colors: {
        white: "#ffff",
        darkblue: "#0D0C22",
        darkgray: "#858585",
        dark: "#101828",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
