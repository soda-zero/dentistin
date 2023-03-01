/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "ui"],
      },
    },
  },
  plugins: [require("daisyui")],
};

module.exports = config;
