import Card from 'react-bootstrap/Card';


const Project = ({ image, title, description }) => {
    return (
        <Card className="shadow-sm mb-4 h-100 border-0">
            <div className="imgContainer">
                <Card.Img className="overflow-hidden" variant="top" src={image} />
            </div>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>

    );
};

export default Project;