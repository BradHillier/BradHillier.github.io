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
                            <div>Available for new projects summer 2025</div>
                        </div>
                    </div>
                    <Stack gap={2} className="relative">
                        <h1 className="headline">
                            Hello World, I'm Brad.
                        </h1>
                        <p className="informative">
                            I’m a software developer and a fourth-year computer science student. I’m passionate about creating meaningful solutions to complex problems.
                        </p>
                        <div className="button-wrapper">
                            <a href="#projects">
                                <button className="outline-button">
                                    Explore My Work  &nbsp;↓
                                </button>
                            </a>
                            <a href="mailto:bradhillier.dev@gmail.com">
                                <button>
                                    &#128075; &nbsp;Let's Connect
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