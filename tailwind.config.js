/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      HelveticaNeue: "Helvetica Neue",
      PlayfairDisplay: "Playfair Display",
      Ephesis: "Ephesis"
    },
    container:{
      center: true
    },
    extend: {},
  },
  plugins: [],
}

