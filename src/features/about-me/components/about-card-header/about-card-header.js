import { ReactComponent as StarIcon } from '../../../hero/assets/star.svg';

import './about-card-header.scss';


const AboutCardHeader = ({ title, description }) => (
    <div className="about-card-header">
        <h3 className="headline">
            <span>
                <StarIcon className="star" />
            </span>
            {title}
        </h3>
        <p>{description}</p>
    </div>
)

export default AboutCardHeader;