import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Project = ({ image, title, description, buttons}) => {

    return (
        <Card className="shadow-sm h-100 border-0">
            <div className="imgContainer">
                <Card.Img className="overflow-hidden" variant="top" src={image} />
            </div>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Stack direction="horizontal" gap={3}>
                    {
                        buttons.map((button, index) => (
                            <Button key={index} target="_blank" href={button.link} variant="outline-primary">
                                <FontAwesomeIcon icon={button.icon} />
                                &nbsp;{button.label}
                            </Button>
                        ))
                    }
                </Stack>
            </Card.Body>
        </Card>

    );
};

export default Project;