/** @type {import('tailwindcss').Config} */
export default {
  content:  ['./*'],
  theme: {
    extend: {
      maxWidth: {
        'navContainer': '1360px',
        "mainContainer": "1200px",
      },
      colors: {
         "theme-pink" : '#C6457D'


      },
      screens: {
        "tablet" : "986px"
      }
    },
  },
  plugins: [],
}

