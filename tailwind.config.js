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
          50: '#faf7f2',
          100: '#f3ede3',
          200: '#e6d7c5',
          300: '#d9c1a7',
          400: '#cdaa89',
          500: '#b68c66',
          600: '#9e6f4a',
          700: '#855636',
          800: '#6d422a',
          900: '#563220',
          950: '#2e1a10',
        },
        noir: {
          50: '#0f0f0f',
          100: '#1a1a1a',
          200: '#262626',
          300: '#333333',
          400: '#4a4a4a',
          500: '#666666',
          600: '#808080',
          700: '#a3a3a3',
          800: '#d4d4d4',
          900: '#e5e5e5',
          950: '#f5f5f5',
        },
        gold: {
          100: '#fff8e7',
          200: '#fff0cc',
          300: '#ffe7b3',
          400: '#ffdd99',
          500: '#ffd480',
          600: '#ffbb59',
          700: '#e6a240',
          800: '#cc8a2b',
          900: '#b37526',
          950: '#80521b',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(212, 175, 55, 0.3)' },
          '100%': { boxShadow: '0 0 25px rgba(212, 175, 55, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};
