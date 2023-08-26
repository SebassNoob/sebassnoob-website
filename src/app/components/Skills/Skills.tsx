import { Typography } from '@mui/material';

import { PacmanLoader } from 'react-spinners';
import React, { useContext, forwardRef, useEffect, useState } from 'react';
import './styles.css';
import { JSXProps } from '@/app/types';
import { MediaQueryContext } from '@/app/Providers/MediaQueryProvider';
import getSkills from '@/app/api/Skills';
import VerticalNav from './VerticalNav';
import { Skill } from '@/app/types';

export const Skills = forwardRef<HTMLDivElement, JSXProps>((props, ref) => {
  const { breakpoints } = useContext(MediaQueryContext);
  const [skills, setSkills] = useState<Skill[]>();
  const [activeSkill, setActiveSkill] = useState<number>(0);

  useEffect(() => {
    getSkills()
      .then((skills) => setSkills(skills))
      .catch((err) => {
        return new Error(err);
      });
  }, []);

  const verticalNavProps = skills?.map((skill, idx) => {
    return {
      label: skill.title,
      onClick: () => {
        setActiveSkill(idx);
      },
      active: idx === activeSkill,
    };
  });

  return (
    <div
      className={props.className + ' skills-content'}
      id={props.id}
      ref={ref}
    >
      <VerticalNav
        className='verticalnav-content'
        verticalNavProps={verticalNavProps!}
      />
      <div className='skills-description'>
        {skills?.map((skill, idx) => (
          <React.Fragment key={idx}>
            {idx === activeSkill ? (
              <>
                <div className='skills-image-container'>
                  {skill.images.map((Im, idx) => (
                    <Im key={idx} className='skills-image' />
                  ))}
                </div>

                <Typography className='subtitle' color='primary'>
                  {skill.title}
                </Typography>
                <div className='description less-important' dangerouslySetInnerHTML={{__html: skill.description}}/>
                  
              </>
            ) : null}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
});

Skills.displayName = 'Skills';
export default Skills;
