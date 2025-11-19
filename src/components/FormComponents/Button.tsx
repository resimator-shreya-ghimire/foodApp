

import React from "react";

type ButtonTypes = "primary" | "delete" | "add";

interface ButtonProps {
    label: string;
    width?: number;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    buttonType?: ButtonTypes;
    className?: string;
    loading?: boolean;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
    label,
    type = "button",
    width = 100,
    disabled = false,
    buttonType = "primary",
    className = "",
    loading = false,
    onClick = () => {}
}) => {
    const buttonClassNames =
        buttonType === "primary"
            ? "border border-blue-500 text-blue-500 bg-transparent hover:bg-white"
            : buttonType === "delete"
            ? "bg-red-500 text-white hover:bg-red-600"
            : "bg-green-500 text-white hover:bg-green-600";

    const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";
    const loadingCursor = loading ? "cursor-wait" : "";



    return (
        <button
            type={type}
            disabled={disabled || loading}
            aria-busy={loading}
            className={`w-full py-2 px-4 rounded-md font-medium transition flex items-center justify-center ${buttonClassNames} ${disabledClasses} ${loadingCursor} ${className} w-[${width}%]`}
            onClick={onClick}
        >
            {loading ? (
                <span className="inline-block animate-pulse">...</span>
            ) : (
                label
            )}
        </button>
    );
};

export default Button;