import Section from './../common/section';
import SlideInTitle from './../common/slideInTitle';
import AnimatedRow from './../common/animatedRow';
import Interest from './interest.js';
import interests from './interests.json';


const Interests = () => {
    return (
        <Section id="interests">
            <div className="pb-4">
                <SlideInTitle title="Enthusiastic About" />
            </div>
            <AnimatedRow>
                {interests.map((area, index) => (
                    <Interest key={index} props={area} />
                ))}
            </AnimatedRow>
        </Section>
    );
};

export default Interests;