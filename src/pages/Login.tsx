import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../auth/auth.tsx";
import { loginFormSchema } from "../utils/validations.ts";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputField } from "../components/input/FormInput.tsx";
import { Button } from "../components/button/Button.tsx";

type LoginForm = {
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const methods = useForm({
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      email: localStorage.getItem('user.email') ?? "",
      password: "",
    },
  });

  const { handleSubmit, formState: { isSubmitting, isValid } } = methods;

  const onSubmit = (data: LoginForm) => {
    const token = Math.random().toString(36).slice(2);
    login({  email: data.email }, token);
    navigate('/');
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[linear-gradient(to_right,#ec2F4B,#009FFF)]">
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[92%] max-w-md bg-white/30 p-8 rounded-md shadow-xl border border-white/100"
        >
          <InputField fieldname="email" label="Email" placeholder="Enter your email" />
          <InputField
            fieldname="password"
            label="Password"
            placeholder="Enter your password"
          />
          <div className="mt-4">
            <Button label="Login" type="submit" variant="primary"  loading={isSubmitting} />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Login;