/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'input-gray': 'lightgray'
      },
      fontFamily: {
        ubuntu: ['Ubuntu, sans-serif'],
        montserat: ['Montserat, sans-serif'],
      },
      screens: {
        md: '768px',
        lg: '1125px',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          md: '768px',
          lg: '1125px',
        },
      },
    },
  },
  plugins: [],
};
