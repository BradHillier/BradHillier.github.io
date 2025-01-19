import './toolbox-items.scss';


const ToolboxItems = ({ items }) => (
    <div className="toolbox-container">
        {items.map(item => (
            <div key={item.title} className="toolbox-item">
                <span><i class={item.icon} /></span>
                <span>{item.title}</span>
            </div>
        ))}
    </div>
)

export default ToolboxItems;