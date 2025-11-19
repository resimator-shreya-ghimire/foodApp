import * as Yup from "yup";

export const loginFormSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Please enter a valid email address."),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long.")
    .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/,
         "Password must contain at least one number and one special character."),
});