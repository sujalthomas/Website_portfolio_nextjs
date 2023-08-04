import {FC, memo} from 'react';

const ContactForm: FC = memo(() => {
  return (
    <div className="text-center p-4">
      <p className="mb-4 text-neutral-200 text-lg">To schedule an event, please click the link below:</p>
      <a 
        href="https://calendly.com/sujalthomas1234/30min" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-cyan-600 underline hover:text-cyan-800"
      >
        Schedule with Calendly
      </a>
    </div>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
