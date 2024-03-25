/** @type {import('tailwindcss').Config} */
export default {
  content:  ['./*'],
  theme: {
    extend: {
      maxWidth: {
        'navContainer': '1360px',
        "mainContainer": "1290px",
      },
      colors: {
         "theme-pink" : '#C6457D',
         "theme-lightGray" : 'rgba(43, 47, 75, 0.25)'


      },
      screens: {
        "tablet" : "986px"
      }
    },
  },
  plugins: [],
}

