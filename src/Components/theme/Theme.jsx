import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  palette: {
    text: {
      primary: "#F8F9FA",
      secondary: "#6D767E",
    },

    background: {
      primary : "#000814",
      secondary: '#6B757D',
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