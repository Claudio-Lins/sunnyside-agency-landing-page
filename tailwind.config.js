/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Fraunces: ["Fraunces", "sans-serif"],
      Barlow: ["Barlow", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        'base-menu' : "url('/images/mobile/base-menu.svg')",
        'image-header-mob' : "url('/images/mobile/image-header.jpg')",
        'image-header-desk' : "url('/images/desktop/image-header.jpg')",
      },
      colors: {
        'SoftRed': '##fe7867',
        'Yellow': '##fad400',
        'DarkDesaturatedCyan': '#25564b',
        'DarkBlue': '#19536b',
        'DarkModerateCyan': '##458c7e',
        'VeryDarkDesaturatedBlue': '#23303e',
        'VeryDarkGrayishBlue': '#5a636c',
        'DarkGrayishBlue': '#818498',
        'GrayishBlue': '#a7abae',
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}


