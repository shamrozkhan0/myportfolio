import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'


/** 
 * CustomScroll adds smooth scroll effects.
 */
const WebsiteScroll = ({scrollValue}) => {
    return (
        <Box
            sx={{
                width: "7px",
                height: "100px",
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
            <Box sx={{ width: "100%", height: `${scrollValue}%`,bgcolor:'aqua', transition:"all ease 0.3s" }} />
        </Box>
    )
}

export default WebsiteScroll