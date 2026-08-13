/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sunset: {
          50: '#fff8f0',
          100: '#ffeedb',
          200: '#ffd6b3',
          300: '#ffb680',
          400: '#ff8a47',
          500: '#ff5c14',
          600: '#e64000',
          700: '#cc3300',
          800: '#a32800',
          900: '#7a2000',
        },
        darkBg: '#0e0e11',
        cardBg: '#16161c',
        lightBg: '#f8f9fa',
        lightCard: '#ffffff'
      },
      fontFamily: {
        bebas: ['Bebas Neue', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s infinite ease-in-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 25px rgba(255, 92, 20, 0.4)' },
          '50%': { boxShadow: '0 0 45px rgba(255, 92, 20, 0.7)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
