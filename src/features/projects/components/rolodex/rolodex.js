/**
 * @name Rolodex
 * @description A Rolodex component that creates a stack of cards that stick to the top of the viewport 
 *              and scale in size as the user scrolls past them.
 * @author Brad Hillier
 * @date 2024-03-28
 * @version 1.0.0 
 * 
 * Improvements:
 * 
 * 1. Use useMemo and useCallback to optimize rolodex cards
 */

import { useState, useLayoutEffect, useRef, Children } from "react";

import RolodexCard from './rolodex-card.js';
import './rolodex.scss';


/**
 * The Rolodex component that creates a stack of cards based on the provided children.
 * 
 * @param {React.ReactNode} children - The child components to be rendered as cards in the Rolodex.
 * @returns {JSX.Element} A Rolodex component with stacked cards.
 */
const Rolodex = ({ 
    stickyPosition=0,
    finalOffset=0,
    visibleCardCount=3, 
    visibleCardHeight=20,
    minimumScale=0.8,
    enableFade=false,
    gap=16, 
    children 
}) => {

    const ref = useRef(null);


    const [ cardHeights, setCards ] = useState(Array(Children.count(children)).fill(0));
    const [ offsetTop, setOffsetTop ] = useState(0);

    const resizeHandler = (size, index) => {
        setCards((prevCards) => {
            const newCards = [...prevCards];
            newCards[index] = size;
            return newCards;
          });
    }

    const calculateOffsetTop = (index) => {
        const sum = (acc, x) => acc + x;
        const cardsBelow = cardHeights.slice(0, index);
        const sumOfCardHeights = cardsBelow.reduce(sum, 0);
        return offsetTop + sumOfCardHeights + gap*index
    }

    useLayoutEffect(() => {
        setOffsetTop (ref.current.offsetTop);
    },[]);

    return (
        <div ref={ref} className="rolodex" >
            {Children.map(children, (child, index) => 
                <RolodexCard 
                    key={index}
                    index={index}
                    top={stickyPosition}
                    margin={gap}
                    fade={enableFade}
                    shadowSize={finalOffset}
                    cardsInShadow={visibleCardCount}
                    finalSize={minimumScale}
                    offsetTop={calculateOffsetTop(index)}
                    resizeCallback={(size, index) => resizeHandler(size, index)}
                >
                    {child}
                </RolodexCard>
            )}
        </div>
    );
};

export default Rolodex;