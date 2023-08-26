import { Typography, Tabs, Tab } from '@mui/material';
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
      <div>
        <Typography className='title' color='primary'>
          Skills
        </Typography>
        <Typography className='description less-important'>
          Here are some things I've picked up over the years. I'm always looking
          to learn more!
        </Typography>
      </div>
      <div
        className={
          breakpoints.mobile
            ? 'skills-interactive-container'
            : 'skills-interactive-container-mobile'
        }
      >
        {breakpoints.mobile ? (
          <VerticalNav
            className='verticalnav-content'
            verticalNavProps={verticalNavProps!}
          />
        ) : (
          <>
            <Tabs
              className='skills-tabs'
              value={activeSkill}
              onChange={(e, newValue) => setActiveSkill(newValue)}
              variant='scrollable'
            >
              {skills?.map((skill, idx) => (
                <Tab
                  key={idx}
                  className='skills-tab'
                  label={skill.title}
                  value={idx}
                />
              ))}
            </Tabs>
          </>
        )}

        <div className='skills-description'>
          {skills?.map((skill, idx) => (
            <React.Fragment key={idx}>
              {idx === activeSkill ? (
                <div className='skills-desciption-inner'>
                  <div className='skills-image-container'>
                    {skill.images.map((Im, idx) => (
                      <Im key={idx} className='skills-image' />
                    ))}
                  </div>

                  <Typography className='subtitle' color='primary'>
                    {skill.title}
                  </Typography>
                  <div
                    className='description less-important'
                    dangerouslySetInnerHTML={{ __html: skill.description }}
                  />
                </div>
              ) : null}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
});

Skills.displayName = 'Skills';
export default Skills;
