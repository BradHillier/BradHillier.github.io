/**
 * @name Rolodex
 * @description A Rolodex component that creates a stack of cards that stick to the top of the viewport 
 *              and scale in size as the user scrolls past them.
 * @author Brad Hillier
 * @date 2024-03-28
 * @version 1.0.0 
 * 
 * Known Bugs:
 * 1. If Rolodex is on or above the viewport when scrolling up or refreshing the page, 
 *   The element will return to its original size and will no longer scale until the
 *   page is refreshed. Temporaryily commenting out the resize event listener on Roldex Card
 *   alleviates the issue, but limits the responsiveness of the component.
 *
 * 2. On some browsers, the dark background can be seen sticky out slightly along the corners
 *    of the cards.
 */

import { useState, useEffect, useRef, Children } from "react";
import { motion, useScroll, useTransform, circInOut } from "framer-motion";
import "../rolodex.scss"


/**
 * A Rolodex Card component that sticks to the top of the viewport and scales in size as the user scrolls past it.
 * 
 * @param {number} initialStick - The offset from the top of the screen in pixels where the element should become fixed.
 * @param {number} [hang=0] - The number of pixels to scroll after the element becomes fixed before starting to scale it.
 * @param {number} finalStick - The final offset after complete transformations.
 * @param {number} finalSize - The final size of the element as a percentage (e.g., 0.5 for 50% size).
 * @param {React.ReactNode} children - The contents to be displayed inside of the card.
 * @returns {JSX.Element} A Rolodex Card element.
 */
const RolodexCard = ({ index, initialStick, hang = 0, finalStick, finalSize, children }) => {
    const ref = useRef(null);

    const [leavingFocusRange, setLeavingFocusRange] = useState([0,0]); 
    const [scaleOffset, setScaleOffset] = useState(0);

    const { scrollY } = useScroll({
        target: ref,
        top: [1, 0]
    });

    const scale = useTransform(scrollY, 
        leavingFocusRange, 
        [1, finalSize],
        { ease: circInOut}
    );

    const brightnessMap = useTransform(scrollY, 
        leavingFocusRange, 
        [1, 0.1],
        { ease: circInOut }
    );

    const brightness = useTransform(() => `brightness(${brightnessMap.get()})`);
    

    const transY = useTransform(scrollY, 
        leavingFocusRange,
        [initialStick, finalStick - scaleOffset],
        { ease: circInOut }
    );


    const handleResize = (event) => {

        setLeavingFocusRange([ref.current.offsetTop - initialStick + hang, ref.current.offsetTop + 2*ref.current.offsetHeight]);
        setScaleOffset(ref.current.offsetHeight * (1 - finalSize) / 2);
    };
    
    useEffect(() => {
        handleResize(); // Initialize top and bottom

        /**This is commented out to temporarily alleviate bug 1 */
        // window.visualViewport.addEventListener('resize', event => handleResize(event));
        // return () => {
            // window.visualViewport.removeEventListener('resize', handleResize);
        // };
    }, []);

    return (
        <motion.section className="rolodex-card-container"
            ref={ref} 
            style={{
                top: transY,
                scale: scale,
            }}
        >
            <motion.div className="rolodex-card" style={{ filter: brightness }}>
                {children}
            </motion.div>
        </motion.section>
    );
};

/**
 * The Rolodex component that creates a stack of cards based on the provided children.
 * 
 * @param {React.ReactNode} children - The child components to be rendered as cards in the Rolodex.
 * @returns {JSX.Element} A Rolodex component with stacked cards.
 */
const Rolodex = ({ children }) => {

    /**
     * delta values representing the difference between properties of subsequent Rolodex Card
     */
    const diffInScale = 0.02  // The difference in scale as a percentage
    const dy = 10    // The difference in position along the y-axis in pixels

    const minScale = 0.8
    const offsetFromViewportTop = 50
    const scaleEffectScrollDisance = 100

    return (
        <div className="rolodex" >
            {Children.map(children, (child, index) => 
                <RolodexCard 
                    key={index}
                    index={index}
                    initialStick={offsetFromViewportTop + scaleEffectScrollDisance}
                    finalStick={offsetFromViewportTop} //offsetFromViewportTop + dy*index}
                    finalSize={minScale} //diffInScale*index + minScale}
                    hang={-200}
                >
                    {child}
                </RolodexCard>
            )}
        </div>
    );
};

export default Rolodex;