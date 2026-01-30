/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'forest-green': '#1a4d3e', // Reverted to dark/readable green for text
                'brand-green': '#2ecc71', // Bright/Neon green for accents/buttons
                'forest-dark': '#051910',
                'forest-light': '#144130',
                'gold': '#D4AF37',
                'gold-light': '#F1C40F',
                'gold-dark': '#B7950B',
                'gold-hover': '#C79F2D',
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
