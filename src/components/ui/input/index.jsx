'use client'

import input from "./input"
import Label from "./Label"

const inputForm = (props) => {
    const {label,type, name, placeholder, textinput, disabled} = props
    return (
      <div>
          <Label htmlfor={name}>{label}</Label>
          <input 
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            className={textinput}
            disabled={disabled}
          />
      </div>
    )
}