import './Button.css'

const Button = ({onSubmit, text}) => {
    return(
        <div className="Button">
            <button onClick={onSubmit} >{text}</button>
        </div>
    )
}
export default Button;