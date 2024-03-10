import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const Project = ({img, title, description}) => {
    return (
        <Card className="shadow-sm">
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    );
}

const Projects = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h2>Projects</h2>
                </Col>
                <Col xs="auto">
                    <Button className="align-self-end ml-auto" variant="primary" href="https://github.com/bradhillier" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                        &nbsp;Visit my Github
                    </Button>
                </Col>
            </Row>
            <div className="py-5">
            <Row>
                <Col md={4}>
                    <Project
                        img="https://bradhillier.github.io/img/brick_breaker.png"
                        title="Customer Relationship Management API"
                        description="Brick breaker is a game inspired by atari's Breakout. I wrote it in Python utilizng the Pygame library. The game's goal is to destroy all the bricks on the screen by repeatedly bouncing a ball off a paddle into them." />
                </Col>
                <Col md={4}>
                    <Project
                        img="https://bradhillier.github.io/img/brick_breaker.png"
                        title="Brick Breaker"
                        description="Brick breaker is a game inspired by atari's Breakout. I wrote it in Python utilizng the Pygame library. The game's goal is to destroy all the bricks on the screen by repeatedly bouncing a ball off a paddle into them." />
                </Col>
                <Col md={4}>
                    <Project
                        img="apple_reminders.png"
                        title="Apple Reminders Clone"
                        description="A web application emulating key features of iOS reminders built using React and Redux." />
                </Col>
            </Row>
            </div>
        </Container>
    );
}

export default Projects;