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
        "base-menu": "url('/images/mobile/base-menu.svg')",
        "image-header-mob": "url('/images/mobile/image-header.jpg')",
        "image-header-desk": "url('/images/desktop/image-header.jpg')",
        "image-graphic-design-desk": "url('/images/desktop/image-graphic-design.jpg')",
        "image-graphic-design-mob": "url('/images/mobile/image-graphic-design.jpg')",
        "image-photography-desk": "url('/images/desktop/image-photography.jpg')",
        "image-photography-mob": "url('/images/mobile/image-photography.jpg')",
      },
      colors: {
        softRed: "#fe7867",
        yellow: "#fad400",
        darkDesaturatedCyan: "#25564b",
        darkBlue: "#19536b",
        darkModerateCyan: "#458c7e",
        veryDarkDesaturatedBlue: "#23303e",
        veryDarkGrayishBlue: "#5a636c",
        darkGrayishBlue: "#818498",
        grayishBlue: "#a7abae",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/forms")],
};
