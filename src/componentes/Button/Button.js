const Button = (props) => {
    return <button onClick={props.func} style={{color: props.colorText}}>{props.text}</button>
}

export default Button