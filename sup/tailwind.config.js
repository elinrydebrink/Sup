/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      colors: {
        'sage': {
          100: '#dfe6da',
          200: '#cad6be',
          300: '#99b085',
          400: '#7c926d',
          500: '#738563',
        },
        'black': '#000000',
        'white': '#ffffff',

      },
 
      extend: {},
    },
    plugins: [],
}

