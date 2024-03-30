import Section from './../common/section';
import ProjectTitle from './projectTitle.js';
import Project, { Reminders, Chess } from './project.js';
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
            <ProjectTitle />
            <Rolodex>
                <Chess
                    image={projects[2].image}
                    title={projects[2].title}
                    description={projects[2].description}
                    buttons={projects[2].buttons}
                    color={colors[1]}
                />
                <Project
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