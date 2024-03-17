import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Interest = ({ props }) => {
    return (
        <Card className = "border-0 bg-light" >
            <Card.Header className="bg-light border-bottom-0 mt-2">
                <FontAwesomeIcon
                    className="fa-xl fa-fw text-info bg-white p-2 rounded shadow-sm"
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