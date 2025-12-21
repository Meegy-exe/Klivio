/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./tailwind/**/*.{html,js}"],
  theme: {
    extend: { colors: {
                        'black': '#080808',
                        'red': '#E50914',
                        'grey': '#121212',
                    },
                    fontFamily: {
                        'stranger': ['Benguiat', 'serif'],
                    },
                    boxShadow: {
                        'red': '0 0 10px rgba(229, 9, 20, 0.6)',
                        'white': '0 0 20px rgba(255, 255, 255, 0.3)',
                        'black': '0 10px 20px rgba(0, 0, 0, 0.8)',
                        'test': '0 0 30px rgba(229, 9, 20, 0.3)',
                    },
                    dropShadow: {
                        'red': '0 0 10px rgba(229, 9, 20, 0.6)',
                    }},
  },
  plugins: [],
}