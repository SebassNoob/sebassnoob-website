import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from '@mui/material';

import Zoom from '@mui/material/Zoom';

export interface ContactLinkProps {
  title: string;
  icon: IconDefinition;
  href: string;
}

export const ContactLink = (props: ContactLinkProps) => {
  return (
    <a
      className='contact-link'
      href={props.href}
      target='_blank'
      rel='noopener noreferrer'
    >
      <Tooltip
        title={props.title}
        placement='top'
        TransitionComponent={Zoom}
        enterDelay={100}
      >
        <FontAwesomeIcon icon={props.icon} className='contact-link-image' />
      </Tooltip>
    </a>
  );
};

export default ContactLink;
