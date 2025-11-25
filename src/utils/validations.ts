import * as Yup from 'yup';

export const loginFormSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Please enter a valid email address.'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long.'),
  message: Yup.string()
    .required('Message is required'),
});

export const contactFormSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required'),
  email: Yup.string()
    .required('Email is required')
    .email('Please enter a valid email address.'),
  message: Yup.string()
    .required('Message is required'),
});

