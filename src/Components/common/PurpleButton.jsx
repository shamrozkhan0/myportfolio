import '../../styles/CommonStyles/PurpleButton.css'
import { motion } from 'framer-motion';
import { ArrowRight } from '@mui/icons-material';


const PurpleButton = ({ Title, Icon, Class }) => {
    return (
        <motion.button            
            className={`purple-btn d-flex align-items-center justify-content-center gap-2 px-3 py-2 rounded-5 text-white 
                            border-0 fw-semibold 
        ${Class}`} >
            {Title}
            {Icon && {Icon}}
        </motion.button>
    )
}

export default PurpleButton;