import Section from './../common/section';
import SectionHeadline from './../common/sectionHeadline.js';
import { KayakRentalAPI, Reminders, Chess } from './project.js';
import projects from './projects.json';
import Rolodex from '../common/rolodex.js';


const Projects = () => {
    const colors = [
        "white",
        "white",
        "#B5FFE1"
    ]
    return (
        <Section id="projects" className="bg-white">
            <SectionHeadline
                eyebrow="SEE WHAT I'M WORKING ON"
                headline="Personal Projects"
             />
            <Rolodex>
                <Chess
                    image={projects[2].image}
                    title={projects[2].title}
                    description={projects[2].description}
                    buttons={projects[2].buttons}
                    color={colors[1]}
                />
                <KayakRentalAPI
                    image={projects[0].image}
                    title={projects[0].title}
                    description={projects[0].description}
                    buttons={projects[0].buttons}
                    color={colors[0]}
                />
                <Reminders
                    image={projects[1].image}
                    title={projects[1].title}
                    description={projects[1].description}
                    buttons={projects[1].buttons}
                    color={colors[2]}
                />
            </Rolodex>
        </Section>
    );
};

export default Projects;