import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';


const FadeUpHeadline = ({ headline, dy=50, className }) => {

    const ref = useRef();

    /**
     * Tracks the target in the viewport within the range:
     *  - top of the target reaches the bottom of the view port (scrollYProgress = 0)
     *  - the top of the target reaches the center of the viewport (scrollYProgress = 1)
     */
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "start center"]
    });

    /**
     * Map scrollYProgress values to a range of values to use for
     * the elements y values.
     */
    const y = useTransform(
        scrollYProgress,
        [0, 1],
        [dy, 0],
        { clamp: true }
    )

    return (
        <motion.h2 ref={ref} className={className} style= {{
            opacity: scrollYProgress,
            y: y
        }}>
            {headline}
        </motion.h2>
    );
}

const SectionHeadline = ({ eyebrow, headline }) => {
    return (
        <Container className="my-5">
            <Stack>
                <FadeUpHeadline 
                    className="eyebrow" 
                    headline={eyebrow}
                    dy={0} />
                <FadeUpHeadline 
                    headline={headline}
                    dy={20} />
            </Stack>
        </Container>
    );
};

export default SectionHeadline;