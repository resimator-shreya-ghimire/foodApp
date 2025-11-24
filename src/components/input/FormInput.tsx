import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Error } from '../error/Error';

type InputFieldProps = {
  fieldname: string;
  label?: string;
  value?: string | number;
  placeholder?: string;
  className?: string;
};

export const InputField = ({
  fieldname,
  label,
  value,
  placeholder,
  className,
}: InputFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div
        className={`rounded-md border border-gray-200 overflow-hidden ${errors[fieldname] ? ' border-red-400' : ''} ${className}`}
      >
        <div className="flex w-full h-12 ">
          <input
            type={
              fieldname === 'password'
                ? showPassword
                  ? 'text'
                  : 'password'
                : fieldname
            }
            placeholder={placeholder}
            value={value}
            {...register(fieldname)}
            className="w-full h-full px-4 py-2 bg-transparent outline-none appearance-none"
          />

          {fieldname === 'password' && (
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="text-sm text-gray-600 px-4"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          )}
        </div>
      </div>
      {errors[fieldname] && (
        <Error message={errors[fieldname]?.message as string} />
      )}
    </div>
  );
};
