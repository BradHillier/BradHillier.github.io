import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './footer.scss';


const footerLinks= [
    {
        title: "Github",
        href: "https://github.com/BradHillier",
        icon: ["fab", "github"]
    },
    {
        title: "LinkedIn",
        href: "https://ca.linkedin.com/in/brad-hillier",
        icon: ["fab", "linkedin"]
    }
]
const Footer = () => {
    return (
       <footer className="text-light">
            <div className="gradient-wrapper">
                <div className="gradient" />
            </div>

            <Container>
                <div className="body">
                    <div className="copyright">&copy; 2024. All rights reserved.</div>
                    <nav>
                        {
                            footerLinks.map(link => (
                                <a target="_blank" href={link.href} key={link.title}>
                                    <span> {link.title} </span>
                                    <FontAwesomeIcon icon={link.icon} />
                                </a>
                            ))
                        }
                    </nav>
                </div>
            </Container>

            <div className="bottom-gradient" />
       </footer> 
    );
}

export default Footer;