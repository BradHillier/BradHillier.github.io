import { useRef } from 'react';
import { motion, useScroll, useTransform, easeOut } from 'framer-motion';


/**
 * React component that creates a growing reveal effect on scroll. 
 * 
 * @param {number} initialScale - The minimum scale factor applied to the element at the start of the scroll. (default: 0.8)
 * @param {number} fullExpansionScrollY - The scroll position where the element reaches its full size (1.0 scale).
 * @param {React.ReactNode} children - The content to be wrapped and animated.
 * @returns {JSX.Element} A React motion.div element with the grow animation applied.
 */
const GrowOnScroll = ({ initialScale=0.8, fullExpansionScrollY=0.3, children }) => {

    const ref = useRef();

    const { scrollYProgress } =  useScroll({ 
        target: ref,
        offset: ["start end", "end start"],
        top: [1, 0]
    });

    const scale = useTransform(
        scrollYProgress,
        [0, fullExpansionScrollY],
        [initialScale, 1],
        { clamp: true, ease: easeOut }
    ); 

    return (
        <motion.div ref={ref} style={{ scale: scale }}>
            {children}
        </motion.div>
    );
};

export default GrowOnScroll;