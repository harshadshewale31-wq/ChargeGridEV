/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#020B07',
          900: '#051811',
          850: '#072117',
          800: '#0A2D20',
          700: '#0F3F2E',
          600: '#175942',
        },
        electric: {
          DEFAULT: '#00F076',
          400: '#22F48B',
          500: '#00F076',
          600: '#00D668',
          accent: '#00E599',
        },
        mint: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          500: '#22C55E',
        }
      },
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
        sans: ['DM Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-electric': '0 0 25px -5px rgba(0, 240, 118, 0.35)',
        'glow-electric-lg': '0 0 40px -5px rgba(0, 240, 118, 0.45)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.6), 0 0 1px 1px rgba(255, 255, 255, 0.05)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
