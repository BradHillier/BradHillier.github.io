import SectionHeadline from '../../../../components/ui/headline/headline.js';
import { Project } from '../project/project.js';
import projects from '../../assets/projects.json';
//import Rolodex from '../rolodex/rolodex.js';
import { Container } from 'react-bootstrap';
import { scrollYProgress, useScroll } from 'framer-motion';
import Card from '../sticky-scroller/sticky-scroller.js';
import { useRef, useEffect } from 'react';


//import './projects-section.scss';


//const Projects = () => (
//    <section id="projects" className="mt-5 pt-4">
//        <Container>
//            <SectionHeadline
//                eyebrow="SEE WHAT I'M WORKING ON"
//                headline="Personal Projects"
//                />
//            <Rolodex
//                stickyPosition={200}//132}
//                finalOffset={120}
//                visibleCardCount={5}
//                visibleCardHeight={32}
//                enableFade={true}
//                gap={100}
//            >
//                {projects.map(project => 
//                    <Project key={project.title} {...project} />
//                )}
//            </Rolodex>
//        </Container>
//    </section>
//);

const Projects = () => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end end']
    })

    return (
        <section id="projects" className="my-5 py-4">
            <Container>
                <SectionHeadline className="section-header"
                    eyebrow="SEE WHAT I'M WORKING ON"
                    headline="Personal Projects"
                />
                <div ref={container}>
                    {projects.map((project, i) => {
                        const targetScale = 1 - ( (projects.length - i - 1) * 0.05);

                        return (
                            <Card key={`p_${i}`} i={i} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}>
                                <div className="card-container">
                                    <Project key={project.title} {...project} />
                                </div>
                            </Card>
                        )
                    })}
                </div>
            </Container>
        </section>
    )
};

export default Projects;