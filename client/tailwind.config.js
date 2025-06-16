// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", //  Incluye JSX/TSX
    "./components/**/*.{js,ts,jsx,tsx}", // Si tienes esta carpeta
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
