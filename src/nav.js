import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


const NavigationBar = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const links = {
    'Home': '#home', 
    'Interests': '#interests', 
    'About': '#about', 
    'Projects': '#projects'
  }

  const handleNavToggle = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  const closeNav = event => {
    setIsNavExpanded(false);
  };

  return (
    <Navbar expand="md" fixed="top" expanded={isNavExpanded} className="shadow-sm"> 
      <Container>
        <Navbar.Brand onClick={closeNav} className="text-muted" href="#home">Brad Hillier</Navbar.Brand>
        <Navbar.Toggle onClick={handleNavToggle} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {
              Object.keys(links).map(link => (
                  <Nav.Link onClick={closeNav} className="mx-auto px-4" href={links[link]} key={link}>
                    {link}
                  </Nav.Link>
              ))
            }
          </Nav>
          <Nav>
            <Button onClick={closeNav} href="#contact" variant="outline-primary">Contact</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;