/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'manter': ['Playfair Display', 'serif'],
        'stamps': ['Kanit', 'sans-serif'],
        'default': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
