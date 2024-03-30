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
import { motion, useScroll, useTransform } from "framer-motion";

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
const RolodexCard = ({ index, last, initialStick, hang = 0, finalStick, finalSize, children }) => {
    const ref = useRef(null);

    /**The top/bottom of the element relative to the 
     * top/bottom of the view port in pixels 
     */
    const [top, setTop] = useState(0);
    const [bottom, setBottom] = useState(0);

    const { scrollY } = useScroll({
        target: ref,
        top: [1, 0]
    });

    const scale = useTransform(
        scrollY,
        [top - initialStick + hang, bottom + hang], 
        [1, finalSize],
        { clamp: true }
    );

    // Used to continue slightly moving the Card upwards
    // as it scales down in size.
    const transY = useTransform(
        scrollY, 
        [top - initialStick + hang, bottom + hang], 
        [initialStick, finalStick],  
        { clamp: true }
    );

    const opacity = useTransform(
        scrollY, 
        [top - initialStick + hang, bottom + hang], 
        [1, 0.6],  
        { clamp: true }
    );

    const handleResize = (event) => {
        setTop(ref.current.offsetTop);
        setBottom(ref.current.offsetTop + ref.current.offsetHeight);
    };
    
    useEffect(() => {
        handleResize(); // Initialize top and bottom

        /**This is commented out to temporarily alleviate bug 1 */
        // window.visualViewport.addEventListener('resize', event => handleResize(event));
        // return () => {
        //     window.visualViewport.removeEventListener('resize', handleResize);
        // };
    }, []);

    return (
        <motion.div className="bg-dark"
            ref={ref} 
            style={{
                position: "sticky",
                borderRadius: "2em",
                top: transY,
                scale: scale
            }}
        >
            <motion.div style={{ opacity: index === last ? 1 : opacity }}>
                {children}
            </motion.div>
        </motion.div>
    );
};

/**
 * The Rolodex component that creates a stack of cards based on the provided children.
 * 
 * @param {React.ReactNode} children - The child components to be rendered as cards in the Rolodex.
 * @returns {JSX.Element} A Rolodex component with stacked cards.
 */
const Rolodex = ({ children }) => {
    return (
        <div>
            {Children.map(children, (child, index) => 
                <RolodexCard 
                    key={index}
                    index={index}
                    last={children.length - 1}
                    initialStick={20 * index + 50}
                    finalStick={5 * index - 40}
                    finalSize={index / 20 + 0.75}
                    hang={0}
                >
                    {child}
                </RolodexCard>
            )}
        </div>
    );
};

export default Rolodex;