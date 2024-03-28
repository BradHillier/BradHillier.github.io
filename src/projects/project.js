import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import Image from 'react-bootstrap/Image';


const Project = ({ image, title, description, buttons, color }) => {
    return (
        <Container style={{
            backgroundColor: color,
            borderRadius: "40px",
            margin: "20px 0px",
            padding: "40px",
            paddingBottom: "0px",
            overflow: "hidden"
        }}>
            <Row className="text-center mb-5">
                <h3>{title}</h3>
            </Row>
            <Row>
                <Col lg={5}>
                    <Stack>
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
        </Container>
    );
}

export default Project;