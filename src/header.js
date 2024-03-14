import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';


const Header = () => {

    const adjustScroll = event => {
        const link_target = document.querySelector('#contact');

        // The height of the navbar
        link_target.style.scrollMarginTop = '50px';
    };

    return (
        <header id="home" className="bg-light">
            <Container className="py-5">
                <Row className="align-items-center">
                    <Col>
                        {/* Hero Text*/} 
                        <h5 className="text-black">Hey, I'm Brad</h5>
                        <h1>
                            <div className="my-3">Aspiring <span className="text-primary">Software Engineer</span></div>
                            <div className="my-3">Let's build something together!</div>
                        </h1>
                        <p className="mb-5 w-75">
                            Whether you need a skilled developer or a collaborative team player, I'm eager to discuss how I can be a valuable asset to your project. 
                        </p>
                        <Button onClick={adjustScroll} href="#contact" variation="primary">Get in Touch</Button>
                    </Col>
                    <Col>
                        <Image src="https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_1280.png" fluid />
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Header;