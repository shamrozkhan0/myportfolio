import React from 'react';
import { AppBar, Container, Typography, Link, Box } from '@mui/material';
import PurpleButton from '../common/PurpleButton';
import { color } from 'framer-motion';
import { ArrowRight } from '@mui/icons-material';

const NavLinks = ['Home', 'Skills', "Projects"];


const Nav = () => {
    return (
        <>

            <AppBar elevation={0} component={'nav'} sx={{ bgcolor: "transparent", py: 3, position: 'static' }} >
                <Container maxWidth="lg">
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                        <Link sx={{ textDecoration: 'none', fontWeight: 'Bold', fontSize: '30px' }} color='text.primary'>Shamroz Khan</Link>

                        <Box sx={{ display:'flex', alignItems:'center' ,gap: 3}}>
                            {
                                NavLinks.map((title) => (
                                    <Link sx={{textDecoration: 'none', }} fontWeight={"Bold"} key={title} color='text.primary' >{title} </Link>
                                ))
                            }

                            <PurpleButton Title={"Hire Me"}  />
                        </Box>
                    </Box>
                </Container>
            </AppBar>


        </>
    )
}

export default Nav