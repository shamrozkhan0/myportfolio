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
      faqBg: "#00000029",
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

    {/* <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=youremail@gmail.com&su=Let's%20Work%20Together&body=Hi%20Shamroz,%0AI%20saw%20your%20portfolio..."
  target="_blank"
  rel="noopener noreferrer"
>
  CLICK ME
</a> */}

export default Theme;