/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        stone: {
          50: '#fafaf9',
        },
        sage: {
          DEFAULT: '#9ca3af', // adjusting sage color
          light: '#d1d5db',
        },
      }
    },
  },
  plugins: [],
}
