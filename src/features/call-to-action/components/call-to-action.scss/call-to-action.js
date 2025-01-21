import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './call-to-action.scss';


const ContactSection = () => (
    <section id="contact">
        <Container>
            <div className="call-to-action-container">
                <div className="text-container">
                    <h2 className="headline">
                        Let's Build the Future Together
                    </h2>
                    <p>
                    Are you looking for a highly motivated and detail-oriented computer science student? Let’s connect and explore how I can bring value to your team.
                    </p>
                </div>
                <div>
                    <a href="mailto:bradhillier.dev@gmail.com">
                        <button className="dark-button">
                            <span>
                                Contact Me
                            </span>
                            <span>
                                <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                            </span>
                        </button>
                    </a>
                </div>
            </div>
        </Container>
    </section>
);

export default ContactSection