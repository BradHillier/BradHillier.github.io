import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Section from './../common/section';
import ProjectTitle from './projectTitle.js';
import Project from './project.js';
import projects from './projects.json';
import Rolodex from '../common/rolodex.js';


const Projects = () => {
    const colors = [
        "#EBBAB9",
        "#388697",
        "#B5FFE1"
    ]
    return (
        <Section id="projects" className="bg-light">
            <ProjectTitle />
            <Rolodex>
                {projects.map((project, index) => (
                        <Project 
                            key={index}
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            buttons={project.buttons}
                            color={colors[index]}
                        />
                ))}
            </Rolodex>
        </Section>
    );
};

export default Projects;