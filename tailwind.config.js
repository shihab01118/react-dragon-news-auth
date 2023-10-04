/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      backgroundImage: {
        bg1: "url('./src/assets/bg.png')"
      }
    },
  },
  plugins: [require("daisyui")],
}

