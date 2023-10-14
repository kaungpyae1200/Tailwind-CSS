/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['Bree Serif', 'serif'],
      serif: ['Roboto', 'sans-serif'],
      serif: ['Martian Mono', 'monospace'],

    },
    extend: {

      colors: {
        primary: "#377dff",

      }
    },
  },
  plugins: [],
}

