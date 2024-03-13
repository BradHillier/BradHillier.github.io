import { Children } from 'react'
import { motion } from 'framer-motion'


const AnimatedRow = ({ children }) => {

    const container = {
        show: {
            transition: { delayChildren: 0.1, staggerChildren: 0.1, }
        }
    }

    const item = {
        hidden: {
            opacity: 0, transform: "translateY(40%)",
        },
        show: {
            opacity: 1,
            transform: "translateY(0)",
            transition: { ease: "easeInOut", duration: 0.5 }
        }
    }

    return (
        <motion.div className="row"
            variants={container}
            initial="hidden"
            whileInView="show"
        >
            {Children.map(children, child =>
                <motion.div className="col-md-4" variants={item}>
                    {child}
                </motion.div>
            )}
        </motion.div>
    );
}

export default AnimatedRow;