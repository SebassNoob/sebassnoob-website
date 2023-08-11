import React, { forwardRef } from 'react';
import { Typography } from '@mui/material';
import { JSXProps } from '@/app/types';

export const Projects = forwardRef<HTMLDivElement, JSXProps>((props, ref) => {
  return (
    <div className={props.className} id={props.id} ref={ref}>
      <div className='projects-content'>
        <div className='projects-title'>
          <Typography variant='h3' color='primary'>
            Projects
          </Typography>
          <Typography variant='h3' color='primary'>
            Projects
          </Typography>
          <Typography variant='h3' color='primary'>
            Projects
          </Typography>
          <Typography variant='h3' color='primary'>
            Projects
          </Typography>
          <Typography variant='h3' color='primary'>
            Projects
          </Typography>
          <Typography variant='h3' color='primary'>
            Projects
          </Typography>
        </div>
      </div>
    </div>
  );
});

export default Projects;
