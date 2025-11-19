export type ButtonTypes = "primary" | "delete" | "add";

export interface ButtonProps {
    label: string;
    width?: number;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    buttonType?: ButtonTypes;
    className?: string;
    loading?: boolean;
    onClick?: () => void;
}


export interface InputFieldProps {
  fieldname: string;
  label: string;
  placeholder: string;
}