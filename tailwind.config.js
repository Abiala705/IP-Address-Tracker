/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Rubik: ["Rubik", "sans-serif"],
    },
    extend: {
      colors: {
        "very-dark-gray": "hsl(0, 0%, 17%)",
        "dark-gray": "hsl(0, 0%, 59%)",
      },
      spacing: {
        96: "24rem",
        112: "28rem",
        128: "32rem",
        256: "64rem",
      },
    },
  },
  plugins: [],
};
