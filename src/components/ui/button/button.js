import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './project.scss';


const Button = ({ icon, label, href }) => (
    <button target="_blank" href={href}>
        <FontAwesomeIcon icon={icon} /> &nbsp; {label}
    </button>
);