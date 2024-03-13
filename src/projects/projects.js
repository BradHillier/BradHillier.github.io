import Section from './../common/section';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import projects from './projects.json';


export const ProjectTitle = () => {
    return (
        <Row className="pb-5">
            <Col>
                <h2>Projects</h2>
            </Col>
            <Col xs="auto">
                <Button variant="primary" href="https://github.com/bradhillier" target="_blank">
                    <FontAwesomeIcon icon={faGithub} />
                    <span className="p-2">Visit my Github</span>
                </Button>
            </Col>
        </Row>
    );
}

const Project = ({ image, title, description }) => {
    return (
        <Col className="project mb-4" sm={6} md={6} lg={3}>
            <Card className="shadow-sm mb-4 h-100">
                <div class="imgContainer">
                    <Card.Img className="overflow-hidden" variant="top" src={image} />
                </div>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
        </Col>

    );
};

const Projects = () => {
    return (
        <Section id="projects" className="bg-light">
            <ProjectTitle />
            <Row className="d-flex">
                {projects.map((project, index) => (
                    <Project 
                        key={index}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                    />
                ))}
            </Row>
        </Section>
    );
}

export default Projects;