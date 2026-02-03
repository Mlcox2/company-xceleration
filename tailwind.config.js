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
                    light: '#fb923c', // keep orange accent
                    DEFAULT: '#f97316',
                    dark: '#c2410c',
                },
                background: {
                    DEFAULT: '#000d23', // Extracted exact dark blue/black
                    card: '#0a1930', // Slightly lighter for cards
                },
                text: {
                    primary: '#ffffff',
                    secondary: '#94a3b8',
                }
            },
            fontFamily: {
                heading: ['Roboto', 'sans-serif'],
                body: ['Roboto', 'sans-serif'],
            },
            animation: {
                scroll: 'scroll 25s linear infinite',
            },
            keyframes: {
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            },
        },
    },
    plugins: [],
}
