/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "navbarColor": "#2278C8", // All colornya mesti diganti berdasarkan website kita ku add ini dari vid gara gara masih belum ngerti gimana pakenya jadi sementara
        "navGrad1": "#53B0F4",
        "navGrad2" : "#0B3992",
        "pageColor": "#FFFFFF",
        "searchTxtColor": "#000000",
        "navbarTextColor": "#FFFFFF",
        "primary-100": "#FFE1E0",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6B66",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
      },
      fontFamily: {
        fontName: [""]
      },
      // content: {
      //   evolvetext: ""
      // }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [],
}