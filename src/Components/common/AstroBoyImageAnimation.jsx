import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

import rise from '@/assets/images/astroBoy.png'
import pop from '@/assets/images/astroBoyPop.png'
import fall from '@/assets/images/astroBoyFall.png'

const AstroBoyImageAnimation = () => {
    const controls = useAnimation();
    const [src, setSrc] = useState("/rise.png");

    useEffect(() => {
        const loopAnimation = async () => {
            setSrc(rise);
            await controls.start({
                y: 0,
                transition: { duration: 3, ease: "easeInOut" }
            });

            setSrc(pop);
            await new Promise((res) => setTimeout(res, 200)); // show pop briefly

            setSrc(fall);
            await controls.start({
                y: 400,
                transition: { duration: 4, ease: "easeInOut" }
            });

            loopAnimation(); // restart loop
        };

        loopAnimation();
    }, [controls]);

    return (
        <motion.img
            src={src}
            animate={controls}
            style={{
                width: "200px",
                height: "200px",
                position: "absolute",
                zIndex:-1,
            }}
        />
    );
};

export default AstroBoyImageAnimation;
