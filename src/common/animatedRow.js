/**
 * @name AnimatedRow
 * @description Animates the appearance of its child elements using a staggered
 *              fade-up effect with Framer Motion. This component takes child
 *              elements and displays them with an opacity transition and slight
 *              upward movement, creating a visually appealing entrance animation.
 * @author Brad Hillier
 * @date 2024-03-12
 * @version 1.0.0 
 */
import { Children } from 'react';
import { motion } from 'framer-motion';


const AnimatedRow = ({ children }) => {

    const container = {
        show: {
            transition: { delayChildren: 0.1, staggerChildren: 0.1, }
        }
    };

    const staggeredFadeUp = {
        hidden: {
            opacity: 0, transform: "translateY(40%)",
        },
        show: {
            opacity: 1,
            transform: "translateY(0)",
            transition: { ease: "easeInOut", duration: 0.5 }
        }
    };

    return (
        <motion.div className="row g-5"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
        >
            {Children.map(children, child =>
                <motion.div className="col-md-6" variants={staggeredFadeUp}>
                    {child}
                </motion.div>
            )}
        </motion.div>
    );
};

export default AnimatedRow;