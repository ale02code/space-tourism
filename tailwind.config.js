/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Barlow: ['Barlow Condensed', 'sans-serif'],
        Bellefair: ['Bellefair', 'serif'],
      }
    },
  },
  plugins: [],
}

