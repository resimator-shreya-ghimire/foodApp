import { useFormContext } from "react-hook-form"
import {useState} from "react"

interface InputFieldProps {
  fieldname: string;
  label: string;
  placeholder: string;

}

const InputField: React.FC<InputFieldProps> = ({ fieldname, label, placeholder }) => {
  const { register, formState: { errors }, trigger } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  return (
     <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
          <input
            type={fieldname === "password" ? (showPassword ? "text" : "password") : fieldname}
            placeholder={placeholder}
            className={`w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors[fieldname] ? "border-red-400" : "border-white"}`}
            {...register(fieldname)}
            onBlur={() => trigger(fieldname)}
          />
          {fieldname==="password" && (
             <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="relative bottom-8.5 left-85 text-sm text-gray-300 hover:text-gray-800"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          )}
          {errors[fieldname] && (
            <p className="text-sm text-red-600 mt-1">{errors[fieldname].message as string}</p>
          )}
        </div>
  )
}

export default InputField