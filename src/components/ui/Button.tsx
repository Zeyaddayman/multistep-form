import React, { ButtonHTMLAttributes, ReactNode } from 'react'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

export const baseButtonStyle = "px-6 py-3 cursor-pointer hover:opacity-90 transition rounded text-white"

const Button = ({ children, className, disabled, ...rest }: IProps) => {
    return (
        <button
            className={`${className} ${baseButtonStyle} ${disabled ? 'opacity-50 pointer-events-none' : ''}`}
            disabled={disabled}
            {...rest}
        >
            {children}
        </button>
    )
}

export default Button