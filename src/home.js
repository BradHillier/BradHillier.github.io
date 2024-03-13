import Section from './common/section';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';


const Home = () => {

    const adjustScroll = event => {
        const link_target = document.querySelector('#contact');

        // The height of the navbar
        link_target.style.scrollMarginTop = '50px';
    };

    return (
        <Section id="home" className="bg-light">
            <Container fluid="md bg-ternary">
                <Row className="align-items-center">
                    <Col>
                        <h1>
                            <div>I'm Brad Hillier.</div>
                            <div>A <span className="text-primary">Software Developer</span></div>
                            <div className="text-black-50">based in Canada.</div>
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <Button onClick={adjustScroll} href="#contact" variation="primary">Get in Touch</Button>
                    </Col>
                    <Col>
                        <Image src="https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_1280.png" fluid />
                    </Col>
                </Row>
            </Container>
        </Section>
    );
};

export default Home;