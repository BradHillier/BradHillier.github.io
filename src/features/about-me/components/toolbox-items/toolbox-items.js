import { Fragment } from 'react';
import './toolbox-items.scss';


const ToolboxItems = ({ items, duration, direction }) => (
    <div className="toolbox-container">
        <div className="scroll-container" style={{
            animationDuration: `${duration}s`,
            animationDirection: `${direction}`
        }}
        >
            {[...new Array(2)].fill(0).map((_, idx) => (
                <Fragment key={idx}>
                    {items.map(item => (
                        <div key={item.title} className="toolbox-item">
                            <span><i class={item.icon} /></span>
                            <span>{item.title}</span>
                        </div>
                    ))}
                </Fragment>
            ))}
        </div>
    </div>
)

export default ToolboxItems;