import React, { useEffect, useRef } from 'react'
import Typography from '@mui/material/Typography';
import Typed from 'typed.js';

const Loader = () => {

    const el = useRef(null);
    const typed = useRef(null);


    useEffect(() => {
        typed.current = new Typed(el.current, {
            strings: ["Welcome to Shamroz’s Portfolio 🚀"],
            typeSpeed: 40,
            backSpeed: 20,
            startDelay: 200,
            showCursor: true,
            cursorChar: '|',
            loop: false,
        });


        return () => typed.current.destroy();

    }, [])


    return (
        <>
            <Typography
                ref={el}
                component="h1"
                sx={{

                    position: 'absolute',
                    top: 0,
                    left: 0,
                    transition: 'all ease .5s',
                    fontSize: 150,
                    color: "white",
                    fontWeight: 700,
                    width: '100vw',
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center'
                }}
            >

            </Typography>
        </>
    )
}

export default Loader