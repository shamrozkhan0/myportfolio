import React, { useRef } from 'react'

// MUI Components
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';


const Footer = ({ ref }) => {

  const form = useRef();



  return (
    <Box
      component="footer"
      ref={ref}
      sx={{
        bgcolor: '#11171D',
        borderTop: '2px solid white',
        py: 10,
      }}>

      <Container>
        <Grid container maxWidth={"lg"} >
          <Grid
            size={{xs: 12 , md: 6}}
            component="form"
            aria-label='Contact Form Of The Portfolio'

            ref={form}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >

            <TextField
              required
              label="Email"
              variant="outlined"
              type='email'
              InputLabelProps={{ shrink: true }}
              // disabled
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white',
                    borderWidth: '1px',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white',
                  },
                },
                input: {
                  color: 'white',
                },
                label: {
                  color: 'white',
                  '&.Mui-focused': {
                    color: 'white'
                  }
                }

              }}
            />  <TextField
              required
              label="Name"
              variant="outlined"
              type='text'
              // disabled
              InputLabelProps={{ shrink: true }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white',
                    borderWidth: '1px',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white',
                  },
                },
                input: {
                  color: 'white',
                },
                label: {
                  color: 'white',
                  '&.Mui-focused': {
                    color: 'white'
                  }
                }

              }}
            />

            {/* <TextField name='user_name' label="name" varient="outlined" required /> */}


            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>


            {/* <Textarea name="Solid" placeholder="Type in here…" variant="solid" /> */}


            <Button
              type='submit'
              sx={{
                backgroundImage: theme => theme.palette.background.mainGradient,
                color: theme => theme.palette.text.primary
              }}
            >
              Submit
            </Button>





          </Grid>
        </Grid>
      </Container>

~
    </Box>
  )
}

export default Footer