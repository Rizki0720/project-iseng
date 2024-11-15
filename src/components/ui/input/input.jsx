const input = (props) => {
    const {type, placeholder,name, textInput, disabled, value} = props
    return (
        <input type={type} 
               placeholder={placeholder} 
               name={name}
               id={name} 
               className={textInput} 
               disabled={disabled} 
               value={value} 
        />
    )
}
export default input