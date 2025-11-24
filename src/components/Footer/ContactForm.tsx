import React, { useState } from 'react';
import { Input } from '../input/Input';
import { Button } from '../button/Button';

const validateEmail = (email: string) => {
  const re =
    /^(([^<>()[\\]\\.,;:\\s@"]+(\\.[^<>()[\\]\\.,;:\\s@"]+)*)|(".+"))@(([^<>()[\\]\\.,;:\\s@"]+\\.)+[^<>()[\\]\\.,;:\\s@"]{2,})$/i;
  return re.test(String(email).toLowerCase());
};

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let formErrors: { [key: string]: string } = {};

    if (!name.trim()) {
      formErrors.name = 'Name is required';
    }
    if (!email.trim()) {
      formErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      formErrors.email = 'Invalid email address';
    }
    if (!message.trim()) {
      formErrors.message = 'Message is required';
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log({ name, email, message });
      setName('');
      setEmail('');
      setMessage('');
      alert('Message sent successfully!');
    }
  };

  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit} noValidate>
      <Input
        label="Email"
        type="email"
        value={email}
        onChange={setEmail}
        onClear={() => setEmail('')}
        placeholder="Enter your email"
      />
      {errors.email && (
        <p className="text-red-500 text-sm mb-2">{errors.email}</p>
      )}

      <div className="mb-4">
        <label className="block text-sm mb-1">Message</label>
        <textarea
          className="w-full border rounded-md p-3 resize-none outline-none focus:ring-2 focus:ring-blue-600"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
          rows={5}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
        )}
      </div>

      <Button label="Send Message" type="submit" variant="primary" />
    </form>
  );
};
