import './styles.css';
import { Typography } from '@mui/material';
import { forwardRef, useContext } from 'react';
import ContactForm from './ContactForm';
import { JSXProps } from '@/app/types';
import {
  faInstagram,
  faDiscord,
  faCodepen,
  faGitlab,
  faGithub,
  faSpotify,
} from '@fortawesome/free-brands-svg-icons';
import ContactLink, { ContactLinkProps } from './ContactLink';
import { MediaQueryContext } from '@/app/Providers/MediaQueryProvider';

export interface ContactProps extends JSXProps {
  isDark: boolean;
}

export const Contact = forwardRef<HTMLDivElement, ContactProps>(
  (props, ref) => {
    const { breakpoints } = useContext(MediaQueryContext);

    const contactLinks: ContactLinkProps[] = [
      {
        title: 'Discord',
        icon: faDiscord,
        href: 'https://discordapp.com/users/695076103768768605',
      },
      {
        title: 'Github',
        icon: faGithub,
        href: 'https://github.com/SebassNoob',
      },
      {
        title: 'Codepen',
        icon: faCodepen,
        href: 'https://codepen.io/SebassNoob',
      },
      {
        title: 'Spotify',
        icon: faSpotify,
        href: 'https://open.spotify.com/user/31yp2eddanhtgl65mu5iyltkxzce',
      },
      {
        title: 'Instagram',
        icon: faInstagram,
        href: 'https://www.instagram.com/sebassnoob/',
      },
      {
        title: 'Gitlab',
        icon: faGitlab,
        href: 'https://gitlab.com/SebassNoob',
      },
    ];

    return (
      <div ref={ref} className={props.className} id={props.id}>
        <div className='contact-content'>
          <Typography className='title' color='primary'>
            Let's talk!
          </Typography>
          <Typography className='subtitle less-important'>
            Send an email or get in touch with me on social media.
          </Typography>
          <div className='contact-inner'>
            <ContactForm className='contact-form' />
            <div className='contact-social'>
              {breakpoints.mobile ? (
                <Typography className='subtitle' color='secondary'>
                  My Socials!
                </Typography>
              ) : null}

              <div className='contact-links'>
                {contactLinks.map((props, idx) => (
                  <ContactLink
                    title={props.title}
                    icon={props.icon}
                    href={props.href}
                    key={idx}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

Contact.displayName = 'Contact';
export default Contact;
