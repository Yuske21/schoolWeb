import style from './Button.module.css'

export const Button = ({ 
    children, 
    type, 
    onClick, 
    disabled, 
    variant }) => {    

    return (
        <>
            <button
                type={type}
                onClick={onClick}
                disabled={disabled}
                className={style[variant]}
            >
                {children}
            </button>
        </>
    )
}