import "./App.css";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

// import Divider from "@/Components/common/SectionDivider";
import CustomScroll from "@/Components/layout/Scroll";
import Navbar from "@/Components/layout/Navbar";
import Banner from "@/Components/layout/Banner";
import Skill from "@/Components/layout/Skill";

const theme = createTheme({
  palette: {
    text: {
      primary: "#F8F9FA",
      secondary: "#6D767E",
    },

    background: {
      primary: "#000814",
      mainGradient: "linear-gradient(30deg, purple, rgb(202, 16, 72))",
    },
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

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CustomScroll />
        <Navbar />
        <Banner />
        {/* <Divider/> */}
        <Skill />
        {/* <Marquee/> */}
      </ThemeProvider>
    </>
  );
}

export default App;
