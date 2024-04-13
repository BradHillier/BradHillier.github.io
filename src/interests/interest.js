import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';


const Interest = ({ props }) => {
    return (
        <Card className = "border-0 h-100">
            <Card.Header className="bg-white border-bottom-0 mt-2 fs-2">
                <FontAwesomeIcon
                    className="fa-fw text-primary bg-white p-3 shadow"
                    style={{
                        borderRadius: "1rem"
                    }}
                    icon={props.icon} />
            </Card.Header>
            <Card.Body className="pt-0">
                <Card.Title className="my-3">
                    {props.title}
                </Card.Title>
                <Card.Text>
                    {props.body}
                </Card.Text>
            </Card.Body>
        </Card >
    );
};

export default Interest;