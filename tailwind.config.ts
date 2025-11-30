/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class', // enables dark mode via a class
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        darkBg: '#111827',       // dark background
        darkSurface: '#1E1E1E',  // card / section surfaces
        textPrimary: '#FBFBFF',  // main text
        textSecondary: '#757575',// secondary text
        accent: '#01BAEF',       // accent color (buttons / links)
        customGreen:'#20BF55',
      },
      keyframes: {
          gradientWave: {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' },
          },
        },
        animation: {
          gradientWave: 'gradientWave 6s ease infinite',
        }
    },
  },
  plugins: [],
};
