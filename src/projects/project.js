import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';


const ProjectWrapper = ({ className, children }) => (
        <Container className="project text-light" style={{
            overflow: "hidden",
        }}>
            {children}
        </Container>

);


export const SubWrapper = ({ image, title, description, buttons, color, imageSide }) => (
    <ProjectWrapper>
        <Row className="gx-5" style={{background: color, minHeight: "600px"}}>

            <Col lg={6} className="align-self-center">
                <Stack gap={4} className="text-center m-5">
                    <h4>{title}</h4>
                    <p className="fs-5">{description}</p>
                    <Stack direction="horizontal" gap={4} className="justify-content-center">
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

            <Col lg={6} className="p-0 align-self-center">
                <Image alt={"image"} src={image} style={{height: "500px"}}/>
            </Col>

        </Row>
    </ProjectWrapper>
);

export const Project = ({ image, title, description, buttons, bg="black" }) => {

    if (window.innerWidth < 768) {
        return (

        <Container className="project bg-light text-dark" style={{
            overflow: "hidden",
        }}>
            <Row>
                <Col className="d-flex p-0">
                    <Stack gap={4} className="text-center">
                        <h3 className="mt-4">{title}</h3>
                        <p className="fs-4 px-4">{description}</p>
                        <Image alt={"image"} src={image} fluid />
                    </Stack>
                </Col>


            </Row>
        </Container>
        )
    }
    return (
        <Container className="project bg-light text-dark" style={{
            overflow: "hidden",
        }}>
            <Row>

                <Col className="d-flex p-0">
                    <Stack gap={4} className="text-center m-5">
                        <h4>{title}</h4>
                        <p className="fs-5">{description}</p>
                        <Stack direction="horizontal" gap={4} className="justify-content-center">
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

                <Col lg="auto" className="d-flex p-0" style={{ maxWidth: "50%" }}>
                    <Image alt={"image"} src={image} fluid />
                </Col>

            </Row>
        </Container>
    )
};