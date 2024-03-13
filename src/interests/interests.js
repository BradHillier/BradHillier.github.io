import Section from './../section';
import SlideInTitle from './../slideInTitle';
import AnimatedRow from './../animatedRow';
import Interest from './interest.js';
import interests from './interests.json';


const Interests = () => {
    return (
        <Section id="interests">
            <div className="pb-4">
                <SlideInTitle title="Areas of Interest" />
            </div>
            <AnimatedRow>
                {interests.map((area, index) => (
                    <Interest
                        icon={area.icon}
                        title={area.title}
                        body={area.body}
                    />
                ))}
            </AnimatedRow>
        </Section>
    );
};

export default Interests;