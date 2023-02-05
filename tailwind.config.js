/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'gray': '#5d646f',
      'gray-2': '#383f46',
      'gray-3': '#2d3238',
      'custom-yellow': '#f7b507',
      'white': '#ffffff',
      'black': '#000000',
    },
    backgroundImage: {
      'panel': "url('/src/assets/panel.jpg')",
    },
  },
  plugins: [],
}
