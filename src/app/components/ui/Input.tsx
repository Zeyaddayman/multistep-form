import { InputHTMLAttributes } from "react";

const Input = ({ ...attributes }: InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input
            className="border-[1px] border-gray-300 focus:border-marine-blue focus:outline-none focus:ring-1 focus:ring-marine-blue rounded px-3 py-3 text-md w-full bg-transparent"
            {...attributes}
        />
    );
}

Input.displayName = "Input";

export default Input;
