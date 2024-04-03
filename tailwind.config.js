/** @type {import('tailwindcss').Config} */
export default {
  content:  [ "./*",
  "./public/*",],
  theme: {
    extend: {
      maxWidth: {
        'navContainer': '1360px',
        "mainContainer": "1290px",
      },
      colors: {
         "theme-pink" : '#C6457D',
         "theme-lightGray" : 'rgba(43, 47, 75, 0.25)',
         "theme-black" : '#1A1A1A',
         "theme-bg" : '#F7F6FB',
         "theme-1" : '#7AB7C2',
         "theme-2" : '#8B76B5',
          "theme-3" : '#E1517F',
          "theme-4" : '#A4A4A5',
          "theme-5" : '#BF4E55',
          "theme-6" : '#97BB68',
          'theme-7' : "#2B2F4B",
          "theme-8" : "#8A76B6",
         'theme-9' : "#932B8F"


      },
      screens: {
        "tablet" : "986px",
        'dek' :"1148px"
      }
    },
  },
  plugins: [],
}

