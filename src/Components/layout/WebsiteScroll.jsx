import { useEffect, useState } from 'react'
import Box  from '@mui/material/Box'


/** 
 * CustomScroll adds smooth scroll effects.
 */
const WebsiteScroll = () => {

    const [scrollWidth, setScrollWidth] = useState(0)

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
            component="header"
            aria-label='Custom Webiste Vertical Scroll bar'
            sx={{
                position: 'sticky',
                top: 0,
                left: 0,
                height: 2,
                zIndex:99,
                width: `${scrollWidth}%`,
                bgcolor: 'green'
            }}
                />
    )
}

export default WebsiteScroll