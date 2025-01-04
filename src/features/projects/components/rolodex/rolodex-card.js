/**
 * @name RolodexCard
 * @description A Rolodex Card component that sticks to the top of the viewport and scales in size as the user scrolls past it.
 * @author Brad Hillier
 * @date 2024-03-28
 * @version 1.0.0 
 * 
* Improvements:
 * 
 * 1. Use useMemo and useCallback to optimize rolodex cards
 */

import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { motion, useScroll, useTransform, circInOut, circOut } from "framer-motion";



/**
 * A Rolodex Card component that sticks to the top of the viewport and scales in size as the user scrolls past it.
 * 
 * @param {number} initialStick - The offset from the top of the screen in pixels where the element should become fixed.
 * @param {number} finalStick - The final offset after complete transformations.
 * @param {number} finalSize - The final size of the element as a percentage (e.g., 0.5 for 50% size).
 * @param {React.ReactNode} children - The contents to be displayed inside of the card.
 * @returns {JSX.Element} A Rolodex Card element.
 */
const RolodexCard = ({ index, 
    top, 
    cardsInShadow=2,
    shadowSize=50, 
    fade, 
    margin,
    finalSize, 
    offsetTop,
    resizeCallback,
    children 
}) => {
    const ref = useRef(null);

    const [leavingFocusRange, setLeavingFocusRange] = useState([0,0]); 
    const [scaleOffset, setScaleOffset] = useState(0);

    const { scrollY, scrollYProgress } = useScroll({
        target: ref,
        top: [1, 0]
    });

    const scale = useTransform(scrollY, 
        leavingFocusRange,
        [1, finalSize]
    );

    const brightnessMap = useTransform(scrollY, 
        leavingFocusRange, 
        [1, 0.5],
        { ease: circInOut }
    );

    const brightness = useTransform(() => fade ? `brightness(${brightnessMap.get()})` : 0);
    
    const y = useTransform(scrollY, 
        leavingFocusRange,
        [0, - shadowSize - scaleOffset],
        { ease: circOut }
    )

    const handleResize = (event) => {
        resizeCallback(ref.current.offsetHeight, index);
    };

    useLayoutEffect(() => {
        setLeavingFocusRange([offsetTop - top, offsetTop + cardsInShadow*ref.current.offsetHeight]);
        setScaleOffset(ref.current.offsetHeight * (1 - finalSize) / 2);
        console.log(offsetTop, index)
    },[offsetTop])
    
    useEffect(() => {
        window.visualViewport.addEventListener('resize', event => handleResize(event));
        return () => {
            window.visualViewport.removeEventListener('resize', handleResize);
        };
    }, []);

     // This will run one time after the component mounts
    useEffect(() => {
        handleResize();
    }, []);

    return (
        <motion.div className="rolodex-card"
            ref={ref} 
            style={{
                top: top,
                y: y,
                scale: scale,
                filter: brightness,
                margin: `${margin}px 0px`
            }}
        >
            {children}
        </motion.div>
    );
};

export default RolodexCard;