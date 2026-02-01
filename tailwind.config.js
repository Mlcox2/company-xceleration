/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#fb923c', // orange-400
          DEFAULT: '#f97316', // orange-500
          dark: '#c2410c', // orange-700
        },
        background: {
          DEFAULT: '#0f172a', // slate-900 (dark mode)
          card: '#1e293b', // slate-800
        },
        text: {
          primary: '#f8fafc', // slate-50
          secondary: '#94a3b8', // slate-400
        }
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
