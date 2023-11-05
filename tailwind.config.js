/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter', 'sans-serif']
      },
      colors: {
        'azure-radiance': {
          50: '#f1f5fd',
          100: '#dfeafa',
          200: '#c6daf7',
          300: '#9fc2f1',
          400: '#72a2e8',
          500: '#5584e1',
          600: '#3c65d4',
          700: '#3352c2',
          800: '#2f449e',
          900: '#2b3c7d',
          950: '#1e274d'
        },
        zircon: {
          50: '#f4f6fb',
          100: '#e4e8f5',
          200: '#d0d9ed',
          300: '#afbfe1',
          400: '#899ed1',
          500: '#6d81c4',
          600: '#5a69b6',
          700: '#4f59a6',
          800: '#454b88',
          900: '#3b406d',
          950: '#272a44'
        },
        viking: {
          50: '#eefdfd',
          100: '#d3f8fa',
          200: '#adf0f4',
          300: '#74e4ec',
          400: '#33cddb',
          500: '#19b1c1',
          600: '#188ea2',
          700: '#1a7284',
          800: '#1e5d6c',
          900: '#1d4e5c',
          950: '#0e333e'
        }
      }
    }
  },
  plugins: []
}
