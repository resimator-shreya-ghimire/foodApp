import React from 'react';
import {
  useForm,
  FormProvider,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactFormSchema } from '@/utils/validations';
import { FormInput } from '@/components/input/FormInput';
import { Button } from '@/components/button/Button';
import { TextArea } from '@/components/form/TextArea';

export const ContactForm: React.FC = () => {
  // Define the shape of the form data
  interface FormData {
    name: string;
    email: string;
    message: string;
  }

  const methods = useForm<FormData>({
    resolver: yupResolver(contactFormSchema),
    defaultValues: { name: '', email: '', message: '' },
  });

  const {
    reset,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: any) => {
    console.log('Form submitted:', data);
    alert('Message sent successfully!');
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form className="max-w-md mx-auto" onSubmit={onSubmit} noValidate>
        <FormInput
          fieldname="email"
          label="Email"
          placeholder="Enter your email"
        />
        <TextArea name="message" placeholder="Enter your message" rows={5} />
        <Button
          label={isSubmitting ? 'Sending…' : 'Send Message'}
          type="submit"
          variant="primary"
          disabled={isSubmitting}
        />
      </form>
    </FormProvider>
  );
};