'use client'

const Label = ({children, htmlfor}) => {
    return (
        <label htmlFor={htmlfor}>{children}</label>
    )
}
export default Label