import '../../styles/CommonStyles/PurpleButton.css'
import { motion } from 'framer-motion';


const PurpleButton = ({ Title, Icon, Class }) => {
    return (
        <motion.button
            whileHover={{scaleX: 0.9}}
            transition={{duration: 0.3}}
            
            className={`purple-btn d-flex align-items-center justify-content-center gap-2 px-3 py-2 rounded-5 text-white 
                            border-0 fw-semibold 
        ${Class}`} >
            {Title}
            {Icon && <i className={Icon}></i>}
        </motion.button>
    )
}

export default PurpleButton;