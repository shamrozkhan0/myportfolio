import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'


/** 
 * CustomScroll adds smooth scroll effects.
 */
const WebsiteScroll = () => {

    const [scrollWidth, setScrollWidth] = useState(10)

    useEffect(() => {
        function handleScroll() {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            setScrollWidth(scrollPercent); // assuming this sets scroll progress
        }

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (


        <Box
            sx={{
                width: "7px",
                height: "200px",
                position: "fixed",
                bgcolor:'gray' ,
                top: "50%",
                right: {xs: 10 , xl: 20},
                transform: "translateY(-50%)",
                borderRadius: 10,
                overflow: "hidden",
                zIndex: 1000,
                display:{xs:'none', lg:'block'}
            }}
        >

            <Box sx={{ width: "100%", height: `${scrollWidth}%`,bgcolor:'aqua' }} />
        </Box>


        // <Box
        //     component="header"
        //     aria-label='Custom Webiste Vertical Scroll bar'
        //     sx={{
        //         position: 'sticky',
        //         top: 0,
        //         left: 0,
        // height: 10,
        //         zIndex:99,
        //         width: `${scrollWidth}%`,
        //         bgcolor: 'green'
        //     }}
        //         />


    )
}

export default WebsiteScroll