import { useForm, ValidationError } from '@formspree/react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const Contact = () => {

    const [state, handleSubmit] = useForm("xleqllwr");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    return (
        <Container>
            <div className="text-center">
                <h2 className="mb-4">Contact Me</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                </p>
            </div>
            <div className="py-4 mx-auto" style={{ maxWidth: '1000px' }}>

                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="first-name">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control name="first name" className="border-primary" type="text" placeholder="John" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="last-name">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control name="last name" className="border-primary" type="text" placeholder="Doe" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" className="border-primary" type="email" placeholder="name@example.com" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="message">
                        <Form.Label>Message</Form.Label>
                        <Form.Control name="message" className="border-primary" as="textarea" rows={8} />
                    </Form.Group>

                    <div className="d-flex justify-content-center">
                        <Button className="px-5 py-3 my-4" type="submit">Submit</Button>
                    </div>
                </Form>

            </div>
        </Container>
    );
}

export default Contact