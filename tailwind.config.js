/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        GothamBold: ['Gotham', 'sans-serif'],
        GothamBook: ['Gotham', 'sans-serif'],
      },
      colors: {
        mainGray: '#929292',
      },
      boxShadow: {
        cardShadow: '0px 0px 20px #00000029;',
        buttonShadow: '0px 0px 6px #00000029',
      },
      backgroundColor: {
        sectionPrice: '#F2F6FA',
      },
      fontSize: {
        s: '8px',
      },
    },
  },
  plugins: [],
}
