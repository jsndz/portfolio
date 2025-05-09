/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        background: '#f9f9f9',
        primary: '#111111',
        secondary: '#333333',
        tertiary: '#666666',
        accent: '#888888',
        lightgray: '#e5e5e5',
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'scroll': 'scroll 2s infinite',
      },
      keyframes: {
        scroll: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
      },
    },
  },
  plugins: [],
};