import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
import { useScroll } from "framer-motion"
import { motion } from 'framer-motion';

const NavigationBar = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const { scrollY } = useScroll()


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

  const [hidden, setHidden] = useState(false);

  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }

  const variants = {
    visible: { y: 0 },
    hidden: { y: -100 },
  };

  useEffect(() => {
    return scrollY.onChange(() => update());
  });

  return (
      <motion.nav className="shadow-sm navbar navbar-expand-md navbar-light fixed-top"
        variants={variants}
        animate={ hidden ? "hidden" : "visible" }
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 1 }}
      >
        <Container>
          <Navbar.Brand onClick={closeNav} className="text-muted" href="#home">
              <span>Brad Hillier</span>
          </Navbar.Brand>
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
      </motion.nav>
  );
}

export default NavigationBar;