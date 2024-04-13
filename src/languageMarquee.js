import Marquee from "react-fast-marquee";
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const LanguageMarquee = () => {

    const faIcons = { 
        "Python": "devicon-python-plain",
        "C++": "devicon-cplusplus-plain",
        "Swift": "devicon-swift-plain",
        "HTML5": "devicon-html5-plain",
        "CSS3": "devicon-css3-plain",
        "Javascript": "devicon-javascript-plain",
        "React": "devicon-react-plain",
        "Redux": "devicon-redux-plain",
        "Flask": "devicon-flask-plain",
        "Postgres": "devicon-postgresql-plain",
        "Git": "devicon-git-plain",
    }

    return (
        <Container className="my-3">
            <Row className="justify-content-center">
                <Col lg={2}>
                    <p className="fw-bold fs-5">
                    Languages & Frameworks
                    </p>
                </Col>
                <Col lg={8}>
                    <Marquee gradient={true}>
                        <Stack direction="horizontal" gap={5} className="mx-4">
                            {
                                Object.keys(faIcons).map((name, index) => 
                                    <Stack key={index} className="text-center">
                                        <i class={`${faIcons[name]} fs-1`}></i>
                                        <p class="fw-bold">{name}</p>
                                    </Stack>
                                )
                            }
                        </Stack>
                    </Marquee>
                </Col>
            </Row>
        </Container>
    );
}

export default LanguageMarquee;