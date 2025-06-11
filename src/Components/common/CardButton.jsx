import { Link } from "@mui/material";
import { GitHub } from "@mui/icons-material";

const CardButton = ({ githubLink }) => {
    return <Link target="_blank"  rel="noopener noreferrer" sx={{
        backgroundImage: theme => theme.palette.background.mainGradient,
        py: 1,
        textAlign:"center",
        color:'white',
        textDecoration:'none',
        fontWeight:600,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        gap:1,
        borderRadius:1
    }} href={githubLink}><GitHub/> Github</Link>;
};

export default CardButton;