import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons'
import { faServer } from '@fortawesome/free-solid-svg-icons'
import { faMicrochip } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'




const Interest = ({ icon, title, body, index }) => {

    return (
        <Card className="border-0 bg-light">
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
        </Card>
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
    const container = {
        show: {
            transition: {
                delay: 0.5,
                ease: "easeInOut",
                delayChildren: 0.1,
                staggerChildren: 0.1
            }
        }
    }

    const item = {
        hidden: { opacity: 0, transform: "translateY(40%)" },
        show: { opacity: 1, transform: "translateY(0)" }
    }

    return (
        <motion.div className="row"
            variants={container}
            initial="hidden"
            whileInView="show"
        >
            {interests.map((area, index) => (
                <motion.div className="col-md-4"
                    variants={item}
                >
                    <Interest index={index} icon={area.icon} title={area.title} body={area.body} />
                </motion.div>
            ))}
        </motion.div>
    );
}

export default Interests;