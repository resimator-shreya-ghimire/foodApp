type variantTypes = "primary" | "delete" | "add";
type buttonTypes= "button" | "submit" | "reset";

interface ButtonProps {
    label: string;
    type?: buttonTypes;
    disabled?: boolean;
    variant?: variantTypes;
    className?: string;
    loading?: boolean;
    onClick?: () => void;
}

export const Button = ({
    label,
    type = "button",
    disabled = false,
    variant = "primary",
    className = "",
    loading = false,
    onClick = () => {}
}: ButtonProps) => {
    const buttonClassNames =
        variant === "primary"
            ? "border border-blue-500 text-blue-500 hover:bg-white hover:text-blue-600"
            : variant === "delete"
            ? "bg-red-500 text-white hover:bg-red-600"
            : "bg-green-500 text-white hover:bg-green-600";

    const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";
    const loadingCursor = loading ? "cursor-wait" : "";

    return (
        <button
            type={type}
            disabled={disabled || loading}
            aria-busy={loading}
            className={`w-full py-2 px-4 rounded-md font-medium transition flex items-center justify-center ${buttonClassNames} ${disabledClasses} ${loadingCursor} ${className}`}
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