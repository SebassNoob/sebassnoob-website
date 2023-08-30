import './ContactForm.css';
import { Typography, TextField, Button } from '@mui/material';
import { forwardRef, useContext, useEffect, useRef, useState } from 'react';
import { MediaQueryContext } from '@/app/Providers/MediaQueryProvider';
import { JSXProps } from '@/app/types';

export const ContactForm = forwardRef<HTMLDivElement, JSXProps>(
  (props, ref) => {
    // form change states
    const [name, setName] = useState<string>('');
    const [organisation, setOrganisation] = useState<string>('');
    const [subject, setSubject] = useState<string>('');
    const [body, setBody] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const newline = '%0D%0A';
      const bodyText = `Name: ${name}${newline}Organisation: ${organisation}${newline}${newline}${body}`;
      window.open(
        `mailto:sebastian.ong@hotmail.com?subject=${subject}&body=${bodyText}`,
      );
    };

    return (
      <div className={props.className} ref={ref} id={props.id}>
        <form onSubmit={handleSubmit}>
          <div className='contactform-content'>
            <TextField
              placeholder='Name'
              name='name'
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              placeholder='Organisation'
              name='organisation'
              onChange={(e) => setOrganisation(e.target.value)}
            />
            <TextField
              placeholder='Subject'
              className='contactform-doublewidth'
              name='subject'
              onChange={(e) => setSubject(e.target.value)}
            />
            <TextField
              placeholder='Body'
              className='contactform-doublewidth'
              name='body'
              multiline
              rows={6}
              onChange={(e) => setBody(e.target.value)}
            />
            <div className='contactform-doublewidth contactform-flexcenter'>
              <Button
                variant='contained'
                color='primary'
                className='contactform-submit'
                type='submit'
              >
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    );
  },
);

ContactForm.displayName = 'ContactForm';
export default ContactForm;
