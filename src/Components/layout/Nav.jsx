import { useState, useEffect } from 'react';
import { AppBar, Container, Typography, Link, Box, IconButton } from '@mui/material';
import PurpleButton from '../common/PurpleButton';
import { Menu } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';


const NavLinks = ['About', 'Skills', "Projects"];

function NavbarLinks() {

    const [closed , isClosed] = useState(false) // the navlink parent is closed


    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'end',
                gap: 4,
                width: { sm: '100%', md: '50%' },
                flexDirection:{sm:'column', md:'row'}

            }}
        >
            {
                NavLinks.map((title) => (
                    <NavLink
                        to={title === 'About' ? '/myportfolio' : `${title.toLowerCase()}`}
                        key={title}
                        style={
                            ({ isActive }) => ({
                                textDecoration: 'none',
                                fontWeight: '500',
                                color: isActive ? 'rgb(167, 21, 94)' : 'white',
                                borderBottom: isActive ? '2px solid rgb(167, 21, 94)' : '2px solid transparent',
                            })}
                    >
                        {title}
                    </NavLink>
                ))
            }

            <PurpleButton Title={"HIRE ME"} />

        </Box >
    )
}




const Nav = () => {
    return (
        <>
            <AppBar elevation={0} component={'nav'} sx={{ bgcolor: "transparent", py: 4, position: 'static' }} >
                <Container
                    maxWidth="lg"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: { sm: 'column', md: 'row' }
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:'space-between', width: { sm: '100%', md: '50%' } }}>

                        <Link
                            href='/myportfolio/'
                            sx={{ textDecoration: 'none', fontWeight: '600', fontSize: '30px' }}
                            color='text.white'
                        >
                            Shamroz Khan
                        </Link>


                        <IconButton
                            sx={{
                                color: 'white',
                                display: { sm: 'block', md: 'none' }
                            }}
                        >
                            <Menu sx={{ fontSize: '30px' }} />
                        </IconButton>

                    </Box>
                    <NavbarLinks />

                </Container>
            </AppBar>


        </>
    )
}

export default Nav;