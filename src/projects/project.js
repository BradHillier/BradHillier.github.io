import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';


const ProjectWrapper = ({ children }) => (
        <Container className="project bg-light text-dark" style={{
            borderRadius: "2em",
            margin: "20px 0px",
            padding: "40px",
            paddingBottom: "0px",
            overflow: "hidden",
            maxHeight: "80vh",
            minHeight: "80vh"
        }}>
            {children}
        </Container>

);

export const KayakRentalAPI = ({ image, title, description, buttons, color }) => (
    <ProjectWrapper>
        <Row className="text-center gy-4">
            <h3>{title}</h3>
        </Row>
        <Row className="gy-4">
            <Col lg={5}>
                <Stack gap={1}>
                    <p>{description}</p>
                    <Stack direction="horizontal" gap={3}>
                        {
                            buttons.map((button, index) => (
                                <Button key={index} target="_blank" href={button.link} variant="outline-secondary">
                                    <FontAwesomeIcon icon={button.icon} />
                                    &nbsp;{button.label}
                                </Button>
                            ))
                        }
                    </Stack>
                </Stack>
            </Col>
            <Col lg={7}>
                <Image src={image} style={{ borderRadius: "20px 20px 0px 0px" }} fluid/>
            </Col>
        </Row>
    </ProjectWrapper>
);


export const Reminders = ({ image, title, description, buttons, color }) => (
    <ProjectWrapper>
        <Row className="d-flex flex-sm-row-reverse gy-5">
            <Col lg={5} className="mx-auto d-flex align-items-center" style={{ maxHeight: "500px" }}>
                <div>
                    <h3 className="text-center text-dark">{title}</h3>
                    <p>{description}</p>
                    <Stack direction="horizontal" gap={3}>
                    {
                        buttons.map((button, index) => (
                            <Button key={index} target="_blank" href={button.link} variant="outline-primary">
                                <FontAwesomeIcon icon={button.icon} />
                                &nbsp;{button.label}
                            </Button>
                        ))
                    }
                    </Stack>
                </div>
            </Col>
            <Col lg={5}>
                <Image src={image} fluid/>
            </Col>
        </Row>
    </ProjectWrapper>
);


export const Chess = ({ image, title, description, buttons, color }) => (
    <ProjectWrapper>
        <Row>
            <Col lg={6} className="mx-auto d-flex align-items-center" style={{ maxHeight: "500px" }}>
                <div>
                    <h3 className="text-center">{title}</h3>
                    <p>{description}</p>
                    <p>Designed and developed over the course of 4 months, as part of a team.</p>
                    <Stack direction="horizontal" gap={3}>
                    {
                        buttons.map((button, index) => (
                            <Button key={index} target="_blank" href={button.link} variant="outline-dark">
                                <FontAwesomeIcon icon={button.icon} />
                                &nbsp;{button.label}
                            </Button>
                        ))
                    }
                    </Stack>
                </div>
            </Col>
            <Col lg={6}>
                <Image src={image} style={{
                    borderRadius: "20px 20px 0px 0px"
                }} fluid/>
            </Col>
        </Row>
    </ProjectWrapper>
);