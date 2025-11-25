import { Icon } from "../icon/Icon";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

type variantTypes = 'primary' | 'delete' | 'add';
type buttonTypes = 'button' | 'submit' | 'reset' | 'text' | 'icon';

type ButtonProps = {
  label: string;
  icon?: IconDefinition;
  type?: buttonTypes;
  disabled?: boolean;
  variant?: variantTypes;
  className?: string;
  loading?: boolean;
  onClick?: () => void;
};

export const Button = ({
  label,
  icon,
  type = 'button',
  disabled = false,
  variant = 'primary',
  className = '',
  loading = false,
  onClick = () => { },
}: ButtonProps) => {
  const buttonClassNames =
    variant === 'primary'
      ? 'bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white hover:from-orange-600 hover:via-pink-600 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
      : variant === 'delete'
        ? 'bg-red-500 text-white hover:bg-red-600 shadow-md hover:shadow-lg'
        : 'bg-green-500 text-white hover:bg-green-600 shadow-md hover:shadow-lg';

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  const loadingCursor = loading ? 'cursor-wait' : '';

  if (type === 'text') {
    return <p className="text-sm cursor-pointer underline" onClick={onClick}>{label}</p>;
  }

  if (type === 'icon') {
    return <Icon icon={icon} className="text-sm cursor-pointer underline" onClick={onClick} />;
  }

  return (
    <button
      type={type}
      disabled={disabled || loading}
      aria-busy={loading}
      className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center ${buttonClassNames} ${disabledClasses} ${loadingCursor} ${className}`}
      onClick={onClick}
    >
      {loading ? (
        <div className="flex items-center gap-2">
          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Loading...</span>
        </div>
      ) : (
        label
      )}
    </button>
  );
};
