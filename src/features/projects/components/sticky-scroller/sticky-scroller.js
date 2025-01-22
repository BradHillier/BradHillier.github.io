import { useTransform, motion, useScroll } from 'framer-motion';
import { Children, useRef } from 'react';

import './sticky-scroller.scss';


const Card = ({i, progress, range, targetScale, children}) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const spacing = 16;

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);
 
  return (
    <div ref={container} className="card-container">
      <motion.div 
        style={{scale, top:`calc(${i * spacing}px)`}} 
        className="card"
      >
        {children}
      </motion.div>
    </div>
  )
}

export default Card