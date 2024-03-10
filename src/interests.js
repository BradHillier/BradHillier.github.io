import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons'
import { faServer } from '@fortawesome/free-solid-svg-icons'
import { faMicrochip } from '@fortawesome/free-solid-svg-icons'


const InterestCard = ({icon, title, body}) => {

    return (
        <Card className="interest bg-light">
            <Card.Header className="bg-light border-bottom-0">
                <FontAwesomeIcon 
                    className="fa-xl fa-fw text-primary bg-white p-2 rounded shadow-sm"
                    icon={icon} />
            </Card.Header>
            <Card.Body className="pt-0">
                <Card.Title className="my-3">{title}</Card.Title>
                <Card.Text>{body}</Card.Text>
            </Card.Body>
        </Card>
    );
}

const Interests = () => {
    return (
        <Container>
            <h2>Areas of Interest</h2>
            <div className="py-4">
                <Row>
                    <Col md={4}>
                        <InterestCard 
                            icon={faNetworkWired}
                            title="Networking" 
                            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                    </Col>
                    <Col md={4}>
                        <InterestCard 
                            icon={faServer}
                            title="Backend Development"
                            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                    </Col>
                    <Col md={4}>
                        <InterestCard 
                            icon={faMicrochip}
                            title="Embedded Systems"
                            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default Interests;