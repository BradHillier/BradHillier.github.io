import { motion } from 'framer-motion';

import './orbit.scss';


const Orbit = ({ offset=0, duration, diameter, children }) => (
    <div className="orbit" 
        style={{ width: `${diameter}px` 
    }}>
        <div className="rotation-offset" 
            style={{ rotate: `${offset}deg`,
        }}>
        <motion.div className="rotate"
            animate={{ rotate: "360deg" }}
            transition={{ ease: "linear", duration: duration, repeat: Infinity }}
        >
            {children}
        </motion.div>
        </div>
    </div>
);

export default Orbit;