/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'forest-green': '#0a2e21',
                'forest-light': '#144130',
                'gold': '#d4af37',
                'gold-hover': '#b5952f',
                'text-light': '#f5f5f5',
                'text-muted': '#cbd5e1',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            }
        },
    },
    plugins: [],
}
