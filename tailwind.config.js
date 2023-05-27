/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        Container: "1400px",
        Card: "300px",
        ContainerCards: "1300px",
        CardCon: "250px",
        Drawer: "450px",
        DrawerPadding: "400px",
        ButtonWidth: "325px",
        ButtonHieth: "55px",
      },

      colors: {
        bgButton: "#9DD558",
      },
      padding: {
        paddingdrawer: "30px",
      },
      margin: {
        marginLink: "-90px",
      },
      spacing: {
        top: "-10px",
      },
      gap:{
        gapcustom: "39px"
      }
    },
    container: {
      containerSmCustom: ""
    },
    backgroundImage: {
      'hero': "url('../public/img/back1.jpg')",
    },
  },
  plugins: [],
};
