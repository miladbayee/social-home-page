import './base-button.css'
const BaseButton = ({children,btnClass}) => {
    return (
        <button className={`btn ${btnClass}`}>{children}</button>
    )
}

export default BaseButton
