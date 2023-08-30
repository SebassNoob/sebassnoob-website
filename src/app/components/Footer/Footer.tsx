import { forwardRef } from 'react';
import { JSXProps } from '@/app/types';
import { Typography } from '@mui/material';
import './styles.css';

export const Footer = forwardRef<HTMLDivElement, JSXProps>((props, ref) => {
  return (
    <div className='footer' ref={ref}>
      <div className='footer-content'>
        <Typography color='primary' className='description'>
          Made with{' '}
          <span role='img' aria-label='love'>
            ❤️
          </span>{' '}
          by SebassNoob © 2023
        </Typography>
        <Typography color='primary' className='description footer-open-source'>
          This website is{' '}
          <a
            href='https://github.com/SebassNoob/sebassnoob-website'
            target='_blank'
          >
            open source!
          </a>
        </Typography>
      </div>
    </div>
  );
});

Footer.displayName = 'Footer';
export default Footer;
