import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';


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

const Projects = () => {

    const projects = [
        {
            img: "crm_api.png",
            title: "Customer Relationship Management API",
            description: "A robust back-end server designed to efficiently manage and organize the customer and rental data of a small business, written in Python using the Flask framework"
        },
        {
            img: "https://github.com/BradHillier/Morning-Meeting-Generator/raw/master/img/screenshots/meeting_document_screenshot.png",
            title: "Meeting ",
            description: "Brick breaker is a game inspired by atari's Breakout. I wrote it in Python utilizng the Pygame library. The game's goal is to destroy all the bricks on the screen by repeatedly bouncing a ball off a paddle into them."
        },
        {
            img: "reminders.png",
            title: "Apple Reminders Clone",
            description: "A web application emulating key features of iOS reminders built using React and Redux."
        },
        {
            img: "chess.png",
            title: "Pixel Chess",
            description: "A web application emulating key features of iOS reminders built using React and Redux."
        }
    ]

    let count = 0;

    return (
        <Row className="d-flex">
            {projects.map(project => (
                <Col className="project mb-4" sm={6} md={6} lg={3} key={`project-${count++}`}>
                    <Card className="shadow-sm mb-4 h-100">
                        <div class="imgContainer">
                            <Card.Img className="overflow-hidden" variant="top" src={project.img} />
                        </div>
                        <Card.Body>
                            <Card.Title>{project.title}</Card.Title>
                            <Card.Text>{project.description}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default Projects;