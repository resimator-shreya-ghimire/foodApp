import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/store/auth.tsx';
import { loginFormSchema } from '@/utils/validations.ts';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormInput } from '@/components/input/FormInput.tsx';
import { Button } from '@/components/button/Button.tsx';
import { Banner } from '@/components/banner/Banner.tsx';
import { useToastStore } from '@/store/toastStore.tsx';
import { Image } from '@/components/image/Image.tsx';

type LoginForm = {
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const { showToast } = useToastStore();

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
    showToast('success', 'Login successful!');
    navigate('/');
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-orange-50 via-pink-50 to-purple-50">
      <Banner layout="flex-row" className="bg-white h-80% max-w-7xl mx-auto">
        <Banner.Item className="hidden md:block flex-1 overflow-hidden rounded-0">
          <Image
            src="/Duck-Donuts.webp"
            alt="Delicious food"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </Banner.Item>
        <Banner.Item className="flex-1 backdrop-blur-sm">
          <div className="w-full max-w-md px-md">
            <div className="text-center pb-md">
              <p className="text-gray-600">Enter your credentials to continue</p>
            </div>

            <FormProvider {...methods}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-md"
              >
                <div className="space-y-md">
                  <FormInput
                    fieldname="email"
                    label="Email Address"
                    className="bg-white  px-xs py-s transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                  <FormInput
                    fieldname="password"
                    label="Password"
                    className="bg-white px-xs py-s transition-all duration-200"
                    placeholder="Enter your password"
                  />
                </div>
                <Button
                  label="Sign In"
                  type="submit"
                  variant="primary"
                  loading={isSubmitting}
                />
              </form>
            </FormProvider>
          </div>
        </Banner.Item>
      </Banner>
    </div>
  );
};

export default Login;
