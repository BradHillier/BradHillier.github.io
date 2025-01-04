import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';


const ScrollFadeUp = ({ dy=50, children }) => {

    const ref = useRef();

    /**
     * Tracks the target in the viewport within the range:
     *  - top of the target reaches the bottom of the view port (scrollYProgress = 0)
     *  - the top of the target reaches the center of the viewport (scrollYProgress = 1)
     */
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "start center"]
    });

    /**
     * Map scrollYProgress values to a range of values to use for
     * the elements y values.
     */
    const y = useTransform(
        scrollYProgress,
        [0, 1],
        [dy, 0],
        { clamp: true }
    )

    return (
        <motion.div ref={ref}  style= {{
            opacity: scrollYProgress,
            y: y,
            margin: 'auto'
        }}>
            {children}
        </motion.div>
    );
}

export default ScrollFadeUp;