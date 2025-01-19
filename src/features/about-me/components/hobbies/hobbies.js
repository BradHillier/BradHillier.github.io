import { useRef } from 'react';
import { motion } from "framer-motion";

import hobbies from '../../assets/hobbies.json';
import './hobbies.scss';


const Hobbies = () => {

    const constraintsRef = useRef(null)

    return (
        <motion.div ref={constraintsRef} className="hobby-container">
            {hobbies.map(hobby => (
                <motion.div className="hobby"
                    style={{ top: hobby.top, left: hobby.left }}
                    drag 
                    dragConstraints={constraintsRef}
                    dragMomentum={false}
                >
                    <span className="title">{hobby.title}</span>
                    <span className="emoji">{hobby.emoji}</span>
                </motion.div>
            ))}
        </motion.div>
    )
}

export default Hobbies;