import React, { ButtonHTMLAttributes, ReactNode } from 'react'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    isLoading?: boolean
}

export const baseButtonStyle = "px-6 py-3 cursor-pointer hover:opacity-90 transition rounded text-white"

const Button = ({ children, className, isLoading, ...rest }: IProps) => {
    return (
        <button
            className={`${className} ${baseButtonStyle} ${isLoading ? 'opacity-50 pointer-events-none' : ''}`}
            disabled={isLoading}
            {...rest}
        >
            {children}
        </button>
    )
}

export default Button