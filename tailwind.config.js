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
        "OrderBTNTop": "#53B0F4",
        "OrderBTNBot": " #91DBF3",
        "Footer1": "#0F137E",
        "Footer2": "#272844"
      },
      fontFamily: {
        fontName: [""]
      },
      width: {
        "WidthMain" : "480px",
        "EditWidth" : "470px",
        "ProfWidth" : "50px",
        "QTYBTNWidth": "24px",
        "QTYCONTWIDTH": "24px",
        "DetWidth": "1421px",
        "ScreenWidth": "1920px",
        "AdWidth": "1000px",
        "PCIMGWidth": "130px",
        "PCONTWidth": "180px",
        "PCONTWidth2": "230pxpx",
        "TXTWIDTH": "350px"
        
      },
      height: {
        "HeightMain" : "430px",
        "EditHeight" : "800px",
        "ProfHeight" : "50px",
        "GallHeight": "660px",
        "QTYBTNHeight": "24px",
        "DetHeight": "836px",
        "ScreenHeight": "1080px",
        "AdHeight": "370px",
        "PCIMGHeight": "130px",
        "PCONTHeight": "180px",
        "PCONTHeight2": "320px",
        "PAYHEIGHT" : "450px"
      },
      borderRadius:{
        "CircleProfPic" : "100%"
      },
      fontSize:{
        "ProdName": "70px",
        "ProfName" : "24px",
        "Rating": "30px",
        "ProdPrice": "50px",
        "DescFont": "22px",
        "TotalPrice": "30px",
        "10Px": "5px"
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