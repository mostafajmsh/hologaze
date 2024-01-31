/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily: {
      'primaryFont': "satoshiLight",
      'regFont': "satoshiReg",
      'titleFont': "satoshiBold",
      'logoFont': "sarpanch",
      'twitterFont': "sfPro"
    },
    extend: {
      screens: {
        'xs': "420px"
      },
      colors: {
        'primaryColor': "#3ddeed"
      }
    },
  },
  plugins: [],
}