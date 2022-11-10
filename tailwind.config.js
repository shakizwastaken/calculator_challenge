/** @type {import('tailwindcss').Config} */

const tailwindColors = require("tailwindcss/colors");
const { themeColors } = require("./src/utils/tailwind");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    textColor: {
      ...themeColors,
      ...tailwindColors,
    },
    backgroundColor: {
      ...themeColors,
      ...tailwindColors,
    },
    extend: {
      fontFamily: {
        main: ["Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
