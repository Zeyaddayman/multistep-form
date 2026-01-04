import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    isError?: boolean
}

const Input = ({ isError, ...attributes }: IProps) => {
    return (
        <input
            className={`border-[1px] ${isError ? "border-red-500" : "border-gray-300"} focus:border-marine-blue focus:outline-none focus-visible:ring-1 focus-visible:ring-marine-blue rounded px-3 py-3 text-md w-full bg-transparent`}
            {...attributes}
        />
    );
}

Input.displayName = "Input";

export default Input;
