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
        const underlayCircle = {
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            aspectRatio: "1",
            borderRadius: "50%",
            backgroundColor: "rgb(230, 40, 114)",
            zIndex: 0
        }

        return (
            <motion.div className="position-relative text-center mx-auto"
                style={{ maxWidth: "min(60vw, 100%)"}}
            > 
                <Image className="position-relative" src="me.webp" fluid style={imageStyle} />
                <div style={underlayCircle} />
            </motion.div>
        );
    };


    const Hook = () => (
        <h1 className="d-line-block">
            <motion.span variants={fadeIn}>
                Hey, I'm Brad, an aspiring&nbsp;
            </motion.span>
            <motion.span variants={fadeIn} className="text-primary d-inline-block">
                Software Engineer
            </motion.span>
        </h1>
    );

    const HeroSubtext = () => (
        <motion.h6 variants={fadeUp}>
            Whether you need a skilled developer or a collaborative team player, I'm eager to discuss how I can be a valuable asset to your project.
        </motion.h6>
    );

    const CallToActionButton = () => (
        <motion.div variants={fadeIn}>
            <Button href="#contact" variation="primary" size="lg">
                Get in Touch &nbsp;
                <FontAwesomeIcon icon={"arrow-right"} />
            </Button>
        </motion.div>
    );

    return (
        <header id="home" className="bg-light">
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
                                <HeroSubtext />
                                <CallToActionButton />
                            </Stack>
                        </Stack>
                    </Col>
                </motion.div>
            </Container>
        </header>
    );
};

export default Header;