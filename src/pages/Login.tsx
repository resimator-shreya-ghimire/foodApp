
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../auth/auth.tsx";

type LoginForm = {
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ mode: "onBlur" });

  const onSubmit = (data: LoginForm) => {
    const token = Math.random().toString(36).slice(2);
    login({  email: data.email }, token);
    navigate('/');
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[linear-gradient(to_right,#ec2F4B,#009FFF)]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[92%] max-w-md bg-white/30 p-8 rounded-md shadow-xl border border-white/100"
      >

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className={`w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.email ? "border-red-400" : "border-white"}`}
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please enter a valid email address.",
              },
            })}
          />
          {errors.email && (
            <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Your password"
              className={`w-full px-4 py-2 rounded-md border focus:outline-white-1 focus:ring-2 focus:ring-blue-400 ${errors.password ? "border-red-400" : "border-white"}`}
              {...register("password", {
                required: "Password is required.",
                minLength: { value: 8, message: "Password must be at least 8 characters long." },
                pattern: {
                  value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/,
                  message: "Password must contain at least one number and one special character.",
                },
              })}
            />

            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-600 hover:text-gray-800"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && (
            <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full border-1 border-blue-500 text-blue-500 py-2 rounded-md font-medium hover:bg-white transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;