import { Typography } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import TerminalIcon from '@mui/icons-material/Terminal';
import BrushIcon from '@mui/icons-material/Brush';
import DataObjectIcon from '@mui/icons-material/DataObject';
import DnsIcon from '@mui/icons-material/Dns';
import LockIcon from '@mui/icons-material/Lock';
import { useContext, forwardRef } from 'react';
import { FlippableSkillsBox, SkillsBox, SkillsBoxProps } from './SkillsBox';
import './styles.css';
import { JSXProps } from '@/app/types';
import { MediaQueryContext } from '@/app/Providers/MediaQueryProvider';
import Image from 'next/image';

export const Skills = forwardRef<HTMLDivElement, JSXProps>((props, ref) => {
  const { breakpoints } = useContext(MediaQueryContext);
  const skillsBoxContent: SkillsBoxProps[][] = [
    [
      {
        icon: CodeIcon,
        title: 'Web Development',
        description:
          '2 years experience building websites with React using Next.js and Vite; and 3.5 years with pure HTML, CSS and JS.',
      },
      {
        icon: BrushIcon,
        title: 'Designing and Prototyping',
        description:
          'Experience with Photoshop and SVG design tools. Able to design and prototype user interfaces for websites and applications.',
      },
    ],
    [
      {
        icon: TerminalIcon,
        title: 'Building Software',
        description:
          'Fluent in Python, JS/TS and Java. Able to build full stack applications with Flask, Express, PostgreSQL; and dockerise them.',
      },
      {
        icon: DataObjectIcon,
        title: 'Data Science',
        description:
          'Experience with data science libraries such as pandas, numpy, matplotlib. Able to analyse data and present them in a meaningful way.',
      },
    ],
    [
      {
        icon: DnsIcon,
        title: 'DevOps',
        description:
          'Experience with Linux and Docker. Able to deploy applications to the cloud and manage them.',
      },
      {
        icon: LockIcon,
        title: 'Cyber Security',
        description:
          'Knowledge of cyber security concepts and tools. Able to perform common penetration testing and secure applications.',
      },
    ],
  ];

  return (
    <div className={props.className} id={props.id} ref={ref}>
      <div className='skills-content'>
        <Typography className='skills-title title' color='primary'>
          Skills
        </Typography>

        {breakpoints.desktop ? (
          <Typography className='skills-subtitle description less-important'>
            These are some things I've picked up over the years.{' '}
            <Image src='/sparkles.svg' className='skills-desktop-tooltip' alt='sparkles'/> Click
            to flip!
          </Typography>
        ) : (
          <Typography className='skills-subtitle description less-important'>
            These are some things I've picked up over the years.
          </Typography>
        )}
        <div className='skills-description'>
          {breakpoints.tablet ? (
            skillsBoxContent
              .flat()
              .map((elem, i) => <SkillsBox key={i} {...elem} />)
          ) : (
            <>
              <Typography className='skills-subtitle subtitle' color='primary'>
                Design
              </Typography>
              <Typography className='skills-subtitle subtitle' color='primary'>
                Development
              </Typography>
              <Typography className='skills-subtitle subtitle' color='primary'>
                DevSecOps
              </Typography>

              {skillsBoxContent.map((row, i) => (
                <FlippableSkillsBox
                  key={i}
                  {...(row as [SkillsBoxProps, SkillsBoxProps])}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
});

Skills.displayName = 'Skills';
export default Skills;
