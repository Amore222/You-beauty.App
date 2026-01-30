/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",           // important for Vite
    "./src/**/*.{js,jsx,ts,tsx}" // scan all React components
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#d07849',
          light: '#e09b78',
          dark: '#b56236',
        },
        secondary: {
          DEFAULT: '#e49f86',
          light: '#f2c7b8',
          dark: '#cc7d64',
        },
        accent: {
          DEFAULT: '#e3a362',
          light: '#f1c596',
          dark: '#c58645',
        },
      }
    },
  },
  plugins: [],
};
