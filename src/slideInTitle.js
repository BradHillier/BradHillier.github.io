import { motion } from 'framer-motion'


const SlideInTitle = ({ title }) => {
    return (
        <motion.div
            initial={{ 
                opacity: 0,
                transform: 'translateY(100px)' 
            }}

            whileInView={{ 
                opacity: 1, 
                transform: "translateY(0px)",
                transition: { ease: "easeOut", duration: 0.5 }
            }}
            viewport={{ once: true }}
        >
            <h2>{title}</h2>
        </motion.div>
    );
}

export default SlideInTitle