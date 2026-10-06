import style from './Input.module.css'

export const Input = ({
    placeholder,
    type,
    onClick,
    disabled,
    variant }) => {

    return (
        <>
            <input
                type={type}
                placeholder={placeholder}
                onClick={onClick}
                disabled={disabled}
                className={style[variant]} 
            />
        </>
    )
}