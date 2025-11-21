type InputFieldProps = {
    label?: string;
    value: string;
    onChange: (value: string) => void;
    onClear: () => void;
    type?: string;
    placeholder?: string;
    className?: string;
    isSearch?: boolean;
};

export const Input = ({
    label,
    value,
    onChange,
    onClear,
    type = "text",
    placeholder,
    className,
    isSearch
}: InputFieldProps) => {
    return (
        <div className={`mb-4 ${className}`}>
            {label && <label className="block text-sm mb-1">{label}</label>}
            <div className={`flex items-center border rounded-md h-12 px-3`}>
                <input
                    type={type}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    className="flex-1 bg-transparent outline-none"
                />
                {isSearch &&
                    <p onClick={onClear}>clear</p>
                }
            </div>
        </div>
    
  );
};
