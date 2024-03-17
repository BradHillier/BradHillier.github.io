import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Project = ({ image, title, description, tryLink }) => {
    return (
        <Card className="shadow-sm h-100 border-0">
            <div className="imgContainer">
                <Card.Img className="overflow-hidden" variant="top" src={image} />
            </div>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <div className="text-center">
                    <Button variant="outline-primary">
                        <FontAwesomeIcon className="mx-2" icon={"code"} />
                        Read Code
                    </Button>
                    <Button target="_blank" href={tryLink} className="mx-4" variant="outline-primary">
                        <FontAwesomeIcon className="mx-2" icon={"play"} />
                        Try Demo
                    </Button>
                </div>
            </Card.Body>
        </Card>

    );
};

export default Project;