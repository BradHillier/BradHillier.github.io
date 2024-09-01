import Section from './../common/section';
import SectionHeadline from './../common/sectionHeadline.js';
import { Project } from './project.js';
import projects from './projects.json';
import Rolodex from '../common/rolodex.js';


const Projects = () => (
    <Section id="projects" className="bg-white" >

        <SectionHeadline
            eyebrow="SEE WHAT I'M WORKING ON"
            headline="Personal Projects"
            />
        <Rolodex>
            <Project {...projects.crm_api} />
            <Project {...projects.chess} />
            <Project {...projects.brick_breaker} />
            <Project {...projects.deck_of_cards} />
            <Project {...projects.reminders} 
                bg={"rgb(36,36,38)"} />
            <Project {...projects.gomoku} 
                bg={"rgb(36,36,38)"} /> 
        </Rolodex>
    </Section>
);

export default Projects;