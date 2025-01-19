import { Image, Container } from 'react-bootstrap';
import SectionHeadline from '../../../../components/ui/headline/headline.js'
import AboutCardHeader from '../about-card-header/about-card-header.js';
import ToolboxItems from '../toolbox-items/toolbox-items.js';
import Hobbies from '../hobbies/hobbies.js';
import './about-section.scss';
import toolbox from '../../assets/toolbox-items.json';





const AboutSection = () => (
    <section id="about">
        <Container>

        <SectionHeadline 
            eyebrow="ABOUT ME"
            headline="A Glimpse Into My World"
        />

        <div className="grid">

            <div className="card book-card">
                <AboutCardHeader
                    title="My Journey"
                    description=""
                />
            </div>

            <div className="card toolbox-card">
                <AboutCardHeader
                    title="My Toolbox"
                    description=" Explore the technologies and tools I use to craft exceptional digital experiences."
                />
                {toolbox.map(toolboxItems => (
                    <ToolboxItems items={toolboxItems} />
                ))}
            </div>

            <div className="card hobby-card">
                <AboutCardHeader
                    title="Beyond the Code"
                    description="Explore my interests and hobbies beyond the digital realm."
                />
                <Hobbies />
            </div>

            <div className="card map-card">
                <Image className="map" src="map.webp" alt="map" />
                <div className="memoji-container">
                    <Image src="memoji_smiling.webp" alt="smiling memoji" fluid/>
                </div>
            </div>
        </div>

        </Container>
    </section>
);

export default AboutSection;