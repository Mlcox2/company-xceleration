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
                    light: '#2E5BD7',
                    DEFAULT: '#1740B2',
                    dark: '#0F2F8A',
                },
                accent: {
                    light: '#F8A35C',
                    DEFAULT: '#F48120',
                    dark: '#C2410C',
                },
                background: {
                    DEFAULT: '#FAFAF8',
                    card: '#FFFFFF',
                },
                navy: {
                    DEFAULT: '#0C1631',
                    card: '#132040',
                },
                text: {
                    primary: '#0C1631',
                    secondary: '#475569',
                }
            },
            fontFamily: {
                heading: ['Roboto', 'sans-serif'],
                body: ['Roboto', 'sans-serif'],
            },
            animation: {
                scroll: 'scroll 60s linear infinite',
            },
            keyframes: {
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
        },
    },
    plugins: [],
}
