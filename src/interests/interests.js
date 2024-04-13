import Section from './../common/section';
import AnimatedRow from './../common/animatedRow';
import SectionHeadline from '../common/absYPosAnimatedHeadline.js'
import Interest from './interest.js';
import interests from './interests.json';
import { Col } from 'react-bootstrap';


const Interests = () => {
    return (
        <Section id="interests">
            <Col lg={10} className="mx-auto">
                <div className="pb-4">
                    <SectionHeadline 
                        eyebrow="WHERE MY MIND WANDERS"
                        headline="Skills I'm Honing"
                    />
                </div>
                <AnimatedRow>
                    {interests.map((area, index) => (
                        <Interest key={index} props={area} />
                    ))}
                </AnimatedRow>
            </Col>
        </Section>
    );
};

export default Interests;