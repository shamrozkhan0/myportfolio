import { createTheme } from "@mui/material";

const Theme = createTheme({
  palette: {
    text: {
      primary: "#F8F9FA",
      secondary: "#6D767E",
    },

    background: {
      // main: "#000814",
      mainGradient: "linear-gradient(30deg, purple, rgb(202, 16, 72))",
    },
  },

  typography: {
    fontFamily: "'Montserrat', 'sans-serif'",
  },


  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },

      styleOverrides: {
        maxWidthLg: {
          "@media (min-width: 1200px)": {
            maxWidth: "1400px",
          },
        },
      },



    },
  },
});

export default Theme;