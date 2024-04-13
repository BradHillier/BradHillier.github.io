import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';


const Header = () => {

    const container = {
        show: {
            transition: { delayChildren: 0.1, staggerChildren: 0.3 }
        }
    }

    const fadeIn = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: { ease: "easeInOut", duration: 0.75 }
        }
    }

    const fadeUp = {
        hidden: {
            opacity: 0, 
            transform: "translateY(50%)",
        },
        show: {
            opacity: 1,
            transform: "translateY(0)",
            transition: { ease: "easeInOut", duration: 1 }
        }
    };

    const HeroImage = () => {

        const imageStyle = { 
            borderRadius: "40px", 
            zIndex: 1,
        };

        return (
            <motion.div className="position-relative text-center mx-auto"
                style={{ maxWidth: "min(60vw, 100%)"}}
            > 
                <Image className="position-relative" src="me.webp" fluid style={imageStyle} />
            </motion.div>
        );
    };


    const Hook = () => (
        <h1 className="d-line-block">
            <motion.div variants={fadeIn}>
                Hi, I'm <span className="text-primary">Brad.</span>
            </motion.div>
        </h1>
    );

    const Subtext = () => (
        <motion.h6 variants={fadeUp}>
            Whether you need a skilled developer or a collaborative team player,
            I'm eager to discuss how I can be a valuable asset to your project.
        </motion.h6>
    );

    const CallToAction = () => (
        <motion.div variants={fadeIn}>
            <Button href="#contact" variation="primary" size="lg" className="rounded-pill p-3">
                Get in Touch &nbsp;
                <FontAwesomeIcon icon={"arrow-right"} />
            </Button>
        </motion.div>
    );

    return (
        <header id="home" className="bg-white">
            <Container className="py-5 col-xxl-10">
                <motion.div
                    className="row align-items-center flex-sm-row-reverse g-3"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    <Col sm={12} md={6} lg={6}>
                        <HeroImage />
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <Stack gap={2}>
                            <Hook />
                            <Stack gap={5}>
                                <Subtext />
                                <CallToAction />
                            </Stack>
                        </Stack>
                    </Col>
                </motion.div>
            </Container>
        </header>
    );
};

export default Header;