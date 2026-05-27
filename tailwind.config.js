/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#f8f9fa',
        primary: {
          DEFAULT: '#000a1e', // Azul marino profundo
          light: '#002147',
        },
        secondary: {
          DEFAULT: '#d4af37', // Dorado clásico
          light: '#fed65b',
          dark: '#b8860b',
        },
        surface: '#ffffff',
      },
      fontFamily: {
        serif: ['"Libre Caslon Text"', 'serif'],
        sans: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}