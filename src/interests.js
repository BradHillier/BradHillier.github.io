import AnimatedRow from './animatedRow';

import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';


const Interest = ({ icon, title, body }) => {
    return (
        <Card className = "border-0 bg-light" >
            <Card.Header className="bg-light border-bottom-0 mt-2">
                <FontAwesomeIcon
                    className="fa-xl fa-fw text-primary bg-white p-2 rounded shadow-sm"
                    icon={icon} />
            </Card.Header>
            <Card.Body className="pt-0">
                <Card.Title className="my-3">
                    {title}
                </Card.Title>
                <Card.Text>
                    {body}
                </Card.Text>
            </Card.Body>
        </Card >
    );
}


const Interests = () => {

    const interests = [
        {
            icon: faNetworkWired,
            title: "Networking",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            icon: faServer,
            title: "Backend Development",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            icon: faMicrochip,
            title: "Embedded Systems",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ]

    return (
        <AnimatedRow>
            {interests.map((area, index) => (
                <Interest
                    icon={area.icon}
                    title={area.title}
                    body={area.body}
                />
            ))}
        </AnimatedRow>
    );
}

export default Interests;