import { useState } from 'react';
import { AppBar, Container, Box, IconButton, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

import PurpleButton from '@/components/common/PurpleButton';

const NavLinks = ['About', 'Skills', "Projects"];


const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <>
            <AppBar
             elevation={0}
             component={'nav'}
             aria-label='Shamroz Khan Portfolio Navbar'
             sx={{
                 bgcolor: "transparent",
                 pt: { xs: 2, md: 4 },
                 pb: {xs: 2, md: 5, lg:8 },
                 position: 'static'
                }} >
                <Container
                    maxWidth="lg"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: { xs: 'column', md: 'row' }
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: { xs: '100%', md: '40%' } }}>

                        <Typography
                            sx={{ textDecoration: 'none', fontWeight: '600', fontSize: '30px', outline: 'none' }}
                            color='text.primary'
                        >
                            Shamroz Khan
                        </Typography>


                        <IconButton
                            sx={{
                                color: 'white',
                                display: { xs: 'block', md: 'none' }
                            }}
                            onClick={() => setIsMenuOpen(prev => !prev)}
                            aria-label='Toggle navigation menu'
                        >
                            <Menu sx={{ fontSize: '30px' }} />
                        </IconButton>

                    </Box>


                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: { xs: 'start', md: 'center' },
                            justifyContent: 'end',
                            gap: { xs: 3, md: 6 },
                            width: { xs: '100%', md: '60%' },
                            flexDirection: { xs: 'column', md: 'row' },
                            height: { xs: isMenuOpen ? '210px' : '0px', md: '100%' },
                            overflow: 'hidden',
                            transition: 'all 0.5s ease',
                            position: { xs: 'absolute', md: 'static' },
                            top: 100,
                            py: isMenuOpen ? 2 : 0,
                            px: 3
                        }}
                        bgcolor={'background.primary'}
                    >

                        {

                            NavLinks.map((title) => (
                                <NavLink
                                    to={title === 'About' ? '/myportfolio/' : `${title.toLowerCase()}`}
                                    key={title}
                                    style={
                                        ({ isActive }) => ({
                                            textDecoration: 'none',
                                            fontWeight: '500',
                                            color: isActive ? 'rgb(255, 0, 128)' : 'white',
                                            borderBottom: isActive ? '2px solid rgb(255, 0, 128)' : '2px solid transparent',
                                            transition: 'all .2s ease',
                                            letterSpacing: 1,
                                            fontSize: 18

                                        })}
                                >
                                    {title}
                                </NavLink>
                            ))
                        }

                        <PurpleButton responsiveWidth={true} />

                    </Box >
                </Container>
            </AppBar>
        </>
    )
}

export default Nav;