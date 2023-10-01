/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html',
    '.**/*.html',
  ],
  theme: {
    screens: {
      'xs': '500px',
      'sm': '640px',
      'md': '700px',
      'mh': '850px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage: {
        'header': "url('../src/img/header.png')",
        'welcome': "url('../src/img/welcome.jpg')",
        'footer': "url('../src/img/footer.jpg')"
      },
      colors: {
        'light-blue-600': '#12b3f8',
        'magenta-700': '#ef45fd',
        'black-800': '#0B1421',
        'dark-blue-400': '#0c2568',
        'dark-blue-800': '#061147',
      },
      fontFamily: {
        'inter': ['Inter', 'Arial', 'Times New Roman'],
      },
      boxShadow: {
        'lg': '0px 0px 10px 5px',
      },
    },
  },
  plugins: [],
}

