import { Image } from 'react-bootstrap';

import './map.scss';


const Map = () => (
    <div className="map-container">
        <Image className="map" src="map.webp" alt="map" />
        <div className="memoji-container">
            <div className="memoji-ping animate" />
            <div className="memoji-ping">
                <Image src="memoji_smiling.webp" alt="smiling memoji" fluid/>
            </div>
        </div>
    </div>
)

export default Map;