import roles from '../../assets/journey.json';
import './journey.scss'


const Journey = () => (
    <div class="timeline-box">
        <div class="timeline">
            {roles.map(role =>
                <div class="role">
                    <span class="year">{role.year}</span>
                    <span class="title">{role.title}</span>
                </div>
            )}
        </div>
    </div>
)

export default Journey;