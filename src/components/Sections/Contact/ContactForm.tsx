import { FC, memo, useCallback, useMemo, useState } from 'react';
import axios from 'axios';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(() => ({
    name: '',
    email: '',
    message: '',
  }), []);

  const [data, setData] = useState<FormData>(defaultData);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const { name, value } = event.target;
      const fieldData: Partial<FormData> = { [name]: value };
      setData(prevData => ({ ...prevData, ...fieldData }));
    },
    []
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      try {
        const response = await axios.post(
          'https://api.elasticemail.com/v2/email/send',
          {
            apiKey: 'D246F852D8EF581DE49B863F3924A38474EBB326A7306B7F9A0521CB1112507EEEF6076AE67397D049BC8B785A2A59D1',
            subject: 'New Message',
            from: 'YOUR_SENDER_EMAIL',
            to: 'sujalt1811@gmail.com',
            bodyText: data.message,
          }
        );

        console.log('Email sent:', response);
      } catch (error) {
        console.error('Error sending email:', error);
      }
    },
    [data.message]
  );

  const inputClasses =
    'bg-indigo-950 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-cyan-600 rounded-md placeholder:text-cyan-100 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" onSubmit={handleSendMessage}>
      <input className={inputClasses} name="name" onChange={onChange} placeholder="Name" required type="text" />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder="Message"
        required
        rows={6}
      />
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-rose-400 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        type="submit"
      >
        Send Message
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
