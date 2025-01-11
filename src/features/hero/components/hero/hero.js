import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import Galaxy from '../galaxy/galaxy';
import './hero.scss';


const Hero = () => {

    return (
        <header id="home">
            <div className="grain" />
            <Container className="content">
                <Galaxy />
                <Col md={8} lg={6} className="body">
                    <div className="memoji">
                        <Image src="memoji.png" alt="Man hiding behind Laptop Memoji" />
                        <div className="status">
                            <div className="status-light-glow" />
                            <div className="status-light" />
                            <div>Available for new projects</div>
                        </div>
                    </div>
                    <Stack gap={4} className="relative">
                        <h2 className="headline">
                            Some fancy Hero Text here
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam.
                        </p>
                        <div className="button-wrapper">
                            <a href="#projects">
                                <button className="outline-button">
                                    Explore my Work
                                </button>
                            </a>
                            <a href="mailto:bradhillier.dev@gmail.com">
                                <button>
                                    &#128075; Let's Connect
                                </button>
                            </a>
                        </div>
                    </Stack>
                </Col>
            </Container>
        </header>
    )
};

export default Hero;