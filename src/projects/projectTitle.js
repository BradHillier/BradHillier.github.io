import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import SlideInTitle from '../common/slideInTitle';


const ProjectTitle = () => {
    return (
        <Row className="pb-5">
            <Col>
                <SlideInTitle title="Projects" />
            </Col>
            <Col xs="auto">
                <Button variant="secondary text-white" href="https://github.com/bradhillier" target="_blank">
                    <FontAwesomeIcon icon={["fab", "github"]} />
                    <span className="p-2">Visit my Github</span>
                </Button>
            </Col>
        </Row>
    );
};

export default ProjectTitle;