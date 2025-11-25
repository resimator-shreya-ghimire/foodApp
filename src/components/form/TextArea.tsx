import React from 'react';
import { useFormContext } from 'react-hook-form';

type TextAreaProps = {
    name: string;
    placeholder?: string;
    rows?: number;
    className?: string;
};

export const TextArea: React.FC<TextAreaProps> = ({
    name,
    placeholder = '',
    rows = 3,
    className = '',
}) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    const error = errors[name];

    return (
        <div className="mb-4">
            <textarea
                {...register(name)}
                placeholder={placeholder}
                rows={rows}
                className={`w-full border rounded-md p-3 resize-none outline-none focus:ring-2 focus:ring-blue-600 ${className} ${error ? 'border-red-500' : ''}`}
            />
            {error && (
                <p className="text-red-500 text-sm mt-1">{(error as any).message}</p>
            )}
        </div>
    );
};
