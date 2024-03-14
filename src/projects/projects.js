import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Section from './../common/section';
import ProjectTitle from './projectTitle.js';
import Project from './project.js';
import projects from './projects.json';


const Projects = () => {
    return (
        <Section id="projects" className="bg-light">
            <ProjectTitle />
            <Row className="d-flex">
                {projects.map((project, index) => (
                    <Col key={index} className="project mb-4" sm={6} md={6} lg={3}>
                        <Project 
                            image={project.image}
                            title={project.title}
                            description={project.description}
                        />
                    </Col>
                ))}
            </Row>
        </Section>
    );
};

export default Projects;