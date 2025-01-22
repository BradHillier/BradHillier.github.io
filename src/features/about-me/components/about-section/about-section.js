import { Container } from 'react-bootstrap';
import SectionHeadline from '../../../../components/ui/headline/headline.js'
import AboutCardHeader from '../about-card-header/about-card-header.js';
import ToolboxItems from '../toolbox-items/toolbox-items.js';
import Hobbies from '../hobbies/hobbies.js';
import Map from '../map/map.js';
import Journey from '../journey/journey.js';
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
                <Journey />
            </div>

            <div className="card toolbox-card">
                <AboutCardHeader
                    title="My Toolbox"
                    description=" Explore the technologies and tools I use to craft exceptional digital experiences."
                />
                <ToolboxItems items={toolbox[0]} 
                    duration={30} 
                    direction={"normal"}
                />
                <ToolboxItems items={toolbox[1]}
                    duration={15} 
                    direction={"reverse"}
                />
            </div>

            <div className="card hobby-card">
                <AboutCardHeader
                    title="Beyond the Code"
                    description="Explore my interests and hobbies beyond the digital realm."
                />
                <Hobbies />
            </div>

            <div className="card map-card">
                <Map />
            </div>
        </div>

        </Container>
    </section>
);

export default AboutSection;