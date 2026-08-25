/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#0B1220',
          deep: '#070C16',
        },
        charcoal: {
          DEFAULT: '#1A140F',
          deep: '#120D09',
        },
        gold: {
          DEFAULT: '#C9A227',
          light: '#E8C766',
          dim: '#8A6E1D',
        },
        ivory: '#F5EFDD',
        beige: '#C4B896',
        cream: {
          DEFAULT: '#F3EEDD',
          dark: '#E9E1C6',
        },
        ink: {
          DEFAULT: '#2A2113',
          soft: '#4A3F2C',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Work Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(ellipse at center, rgba(201,162,39,0.25) 0%, rgba(201,162,39,0) 70%)',
      },
      boxShadow: {
        gold: '0 0 40px -10px rgba(201,162,39,0.45)',
      },
      keyframes: {
        fall: {
          '0%': { transform: 'translateY(-10vh) rotate(0deg)', opacity: 0 },
          '10%': { opacity: 1 },
          '100%': { transform: 'translateY(110vh) rotate(360deg)', opacity: 0.2 },
        },
        shimmer: {
          '0%,100%': { opacity: 0.6 },
          '50%': { opacity: 1 },
        },
      },
      animation: {
        shimmer: 'shimmer 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
