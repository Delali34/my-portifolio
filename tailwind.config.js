/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins','Trebuchet MS', 'Lucida Sans Unicode', 
        'Lucida Grande', 'Lucida Sans',],
        // 'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

