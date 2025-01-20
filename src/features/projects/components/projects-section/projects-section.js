import SectionHeadline from '../../../../components/ui/headline/headline.js';
import { Project } from '../project/project.js';
import projects from '../../assets/projects.json';
//import Rolodex from '../rolodex/rolodex.js';
import { Container } from 'react-bootstrap';

import './projects-section.scss';


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

const Projects = () => (
    <section id="projects" className="my-5 py-4">
        <Container>
            <SectionHeadline className="section-header"
                eyebrow="SEE WHAT I'M WORKING ON"
                headline="Personal Projects"
            />
            <div className="flex-container">
                {projects.map(project => 
                <div>
                <div className="card-container">
                    <Project key={project.title} {...project} />
                    </div>
                    </div>
                )}
            </div>
        </Container>
    </section>
);

export default Projects;