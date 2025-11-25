import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth.tsx';
import { loginFormSchema } from '../utils/validations.ts';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormInput } from '../components/input/FormInput.tsx';
import { Button } from '../components/button/Button.tsx';

type LoginForm = {
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null;

  const methods = useForm({
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      email: user?.email,
      password: '',
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = (data: LoginForm) => {
    const token = Math.random().toString(36).slice(2);
    login({ email: data.email }, token);
    navigate('/');
  };

  return (
    <div className="h-screen flex items-center justify-center bg-primary">
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[92%] max-w-md bg-white/30 p-8 rounded-md shadow-xl border border-white"
        >
          <FormInput
            fieldname="email"
            label="Email"
            placeholder="Enter your email"
          />
          <FormInput
            fieldname="password"
            label="Password"
            placeholder="Enter your password"
          />
          <Button
            label="Login"
            type="submit"
            variant="primary"
            loading={isSubmitting}
          />
        </form>
      </FormProvider>
    </div>
  );
};

export default Login;
