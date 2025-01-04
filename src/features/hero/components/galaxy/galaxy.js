import { ReactComponent as StarIcon } from '../../assets/star.svg';
import { ReactComponent as SparkleIcon } from '../../assets/sparkle.svg';

import Orbit from '../orbit/orbit';
import orbits from '../../assets/orbits.json';
import './galaxy.scss';


const Galaxy = () => (
    <div className="galaxy">

        <div className="galatic-disk-1" />
        <div className="galatic-disk-2" />
        <div className="galatic-disk-3" />
        <div className="galatic-disk-4" />

        {orbits.circle.map((circle, index) => 
            <Orbit key={index} {...circle}>
                <div className="circle" style={{ height: circle.height }} />
            </Orbit>
        )}
        {orbits.star.map((star, index) => 
            <Orbit key={index} {...star}>
                <StarIcon className="star" style={{ height: star.height }} />
            </Orbit>
        )}
        {orbits.sparkle.map((sparkle, index) => 
            <Orbit key={index} {...sparkle}>
                <SparkleIcon className="sparkle" style={{ height: sparkle.height }} />
            </Orbit>
        )}
    </div>
)

export default Galaxy;