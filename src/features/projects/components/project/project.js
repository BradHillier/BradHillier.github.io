import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './project.scss';


export const Project = ({ image, tags, title, description, buttons}) => (
    <article className="project">
            
            <section>
                <header>
                    <h6 className="eyebrow"> {tags.join(" \u{0387} ")} </h6>
                    <h3 className="headline"> {title} </h3>
                </header>
                <hr />
                <p> {description} </p>
                <footer>
                    {buttons.map(button => (
                        <a target="_blank" href={button.link}>
                            <button>
                                <FontAwesomeIcon icon={button.icon} /> &nbsp; {button.label}
                            </button>
                        </a>
                    ))}
                </footer>
            </section>

            <img alt={"image"} src={image} />

    </article>
);