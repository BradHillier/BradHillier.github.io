import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';


const Footer = () => {
    return (
       <footer className="bg-dark text-light">
            <Container>
                <Row className="p-4">
                    <Col>
                        <p>Hello</p>
                    </Col>
                </Row>
            </Container>
       </footer> 
    );
}

export default Footer;