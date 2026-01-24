import { serialize } from "v8";

/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        abril:['Abril', "sans-serif"],
        mono:['IBMPlex-Mono', "sans-serif"]
      },
      keyframes: {
         'slide-line': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        "slide-line": "slide-line 0.7s ease forwards",
      },
    },
  },
  plugins: [],
};
