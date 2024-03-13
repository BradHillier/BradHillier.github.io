import { motion } from 'framer-motion'


const SlideInTitle = ({ title }) => {
    return (
        <motion.div
            initial={{ 
                opacity: 0, 
                transform: 'translateY(200%)' 
            }}

            whileInView={{ 
                opacity: 1, 
                transform: 'translateY(0%)',
                transition: { ease: "easeOut", duration: 0.5 }
            }}
        >
            <h2>{title}</h2>
        </motion.div>
    );
}

export default SlideInTitle