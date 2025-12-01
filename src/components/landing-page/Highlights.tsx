import { FormInput } from "../input/FormInput";
import { Button } from "../button/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider } from "react-hook-form";
import { useForm } from "react-hook-form";
import { loginFormSchema } from "../../utils/validations";
import { Icon } from "../icon/Icon";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useToastStore } from "@/store/toastStore";
import { useAuthStore } from '@/store/auth';
import { useNewsletterStore } from '@/store/newsletter';


export const Highlights = () => {
    const { showToast } = useToastStore();
    const { user } = useAuthStore();
    const { setShowNewsLetter, showNewsLetter } = useNewsletterStore();

    const methods = useForm({
        resolver: yupResolver(loginFormSchema),
        defaultValues: {
            email: user?.email ?? "",
        },
    });

    const handleSubmit = (data: any) => {
        console.log(data);
        showToast('success', 'You have successfully subscribed to our newsletter');
        setShowNewsLetter(data.email, false);
    };

    return (
        <div className="flex flex-col w-full px-4 pt-component-lg items-center">
            <div className="w-full flex flex-col max-w-6xl items-center px-4 py-8 border-2 border-violet-300 rounded-lg h-full">
                <p className="text-3xl font-bold py-4 text-center">
                    Subscribe to our newsletter to get the latest news and updates
                </p>
                <p className="text-center">
                    Lorem ipsum dolor. Voluptatum suscipit cum repudiandae necessitatibus beatae dolores magni accusamus cupiditate? Maiores, illo?
                </p>
                <Icon icon={faEnvelope} className="text-10xl text-center text-violet-300" />
                {showNewsLetter ? (
                    <FormProvider {...methods}>
                        <form onSubmit={handleSubmit} noValidate className="flex flex-col items-center gap-2 w-full">
                            <FormInput
                                fieldname="email"
                                className="bg-white  px-xs py-s transition-all duration-200 w-full"
                                placeholder="your.email@example.com"
                            />
                            <Button
                                label="Subscribe"
                                type="submit"
                                variant="primary"
                                className="w-2/5"
                            />
                        </form>
                    </FormProvider>) : (
                    <p className="text-center">You are subscribed to our newsletter</p>
                )}
            </div>
        </div>
    );
};
