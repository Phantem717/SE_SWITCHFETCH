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
        "logregGrad1": "#3888E7",
        "logregGrad2": "#2681EC",
        "logregGrad3": "#B2DEF6",
        "logregGrad4": "#7ECFFD",
        "logregGrad5": "#5BB0FF",
        "logregGrad6": "#364859",
        "logregBtn": "#7BD3DF",
        "logregnoAcc": "#EDAD09",
        "logregyesAcc": "#DDF25B",
        "logregTxt": "#373838",
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