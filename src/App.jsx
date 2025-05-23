import { useState } from 'react'
import Navbar from './Components/layout/Navbar'
import './App.css'
import Banner from './Components/layout/Banner'
import Nav from './Components/layout/Nav'
import { createTheme, ThemeProvider } from '@mui/material'


const theme = createTheme({
  palette: {
    text: {
      primary: '#F8F9FA',
    },
  },

  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg',
      },
      styleOverrides: {
        maxWidthLg: {
          '@media (min-width: 1200px)': {
            maxWidth: '1400px',
          },
        },
      },
    },
  }, 

  typography: {
  fontFamily: `'Montserrat', sans-serif`,
  }
});


function App() {

  return (
    <>

      <ThemeProvider theme={theme}>
        <Nav />
        {/* <Navbar/> */}
        <Banner />
      </ThemeProvider>

    </>
  )
}

export default App
