import { useContext, useRef, useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons'
import { faServer } from '@fortawesome/free-solid-svg-icons'
import { faMicrochip } from '@fortawesome/free-solid-svg-icons'

import { ScrollContext } from './App.js';



const Interest = ({ icon, title, body, index }) => {

    const eleRef = useRef(null);
    const scrollRef = useRef(0);

    const [isInView, setIsInView] = useState(false);

    useEffect(() => {

      const handleScroll = () => {
        scrollRef.current = window.pageYOffset;
        const rect = eleRef.current.getBoundingClientRect();
        setIsInView(
            scrollRef.current + window.innerHeight > rect.top + rect.height / 2
        );
      };

      if (!isInView) {
        window.addEventListener('scroll', handleScroll);

        // call handleScroll on page load. If interests are 
        // on screen upon page render, this triggers their animation
        if (scrollRef.current == 0) {
            handleScroll()
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
      }
    }, [scrollRef]); // Only re-attach scroll listener when scrollPosition changes

    useEffect(() => {
        if (isInView) {
            eleRef.current.style.animation = `appear-below ${0.5 + (index + 1) * 0.15}s ease-in-out`
            eleRef.current.classList.remove("hidden")
            eleRef.current.classList.add("visible")
        }
    }, [isInView])



    return (
        <Card ref={eleRef} className="interest hidden border-0 bg-light"> 
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

    return (
        <Row>
            {interests.map((area, index) => (
                <Col 
                    id={`interest-${index}`} 
                    md={4} 
                    key={`interest-${index}`} 
                >
                    <Interest index={index} icon={area.icon} title={area.title} body={area.body} />
                </Col>
            ))}
        </Row>
    );
}

export default Interests;