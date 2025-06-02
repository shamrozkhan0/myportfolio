import Marquee from "react-fast-marquee";
import { Box, Typography } from '@mui/material';

const Experties = [
    'Frontend',
    'Backend',
    'Database',
    'Version Control',
    'OpenSources',
    'System Design',
    'Algorithms',
    'Debugging',
    'MicroServices'
]


const SoftSkillMarquee = () => {
    return (
        <Box
            sx={{
                // borderTop: '2px solid gray',
                // borderBottom: '2px solid gray',
                py: 5
            }}
        >
            <Marquee direction='left' >
                {
                    Experties.map((title) => ( 
                        <Typography   sx={{ mx:7, fontSize:30, color:'gray '}} key={title}>
                            {title}
                        </Typography>
                    ))
                }
            </Marquee>
        </Box>
    );
};

export default SoftSkillMarquee;
