

import React from "react";

type ButtonTypes = "primary" | "delete" | "add";

interface ButtonProps {
    label: string;
    width?: number;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    buttonType?: ButtonTypes;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    label,
    type = "button",
    width = 100,
    disabled = false,
    buttonType = "primary",
    className = "",
}) => {


    const buttonClassNames =
        buttonType === "primary"
            ? "border border-blue-500 text-blue-500 bg-transparent hover:bg-white"
            : buttonType === "delete"
            ? "bg-red-500 text-white hover:bg-red-600"
            : "bg-green-500 text-white hover:bg-green-600";

    const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

    return (
        <button
            type={type}
            disabled={disabled}
            className={`w-full py-2 rounded-md font-medium transition flex items-center justify-center ${buttonClassNames} ${disabledClasses} ${className} w-[${width}%]`}
        >
            {label}
        </button>
    );
};

export default Button;