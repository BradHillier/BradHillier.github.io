import ScrollFadeUp from "./fade-in-on-scroll";
import { Stack } from "react-bootstrap";


const SectionHeadline = ({ eyebrow, headline }) => (
        <Stack gap={4}>
            <ScrollFadeUp dy={0}>
                <h6 className="eyebrow">{eyebrow}</h6>
            </ScrollFadeUp>
            <ScrollFadeUp dy={30}>
                <h2 className="headline">{headline}</h2>
            </ScrollFadeUp>
        </Stack>
);

export default SectionHeadline;