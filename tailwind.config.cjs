/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/**.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        pulse: "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
};