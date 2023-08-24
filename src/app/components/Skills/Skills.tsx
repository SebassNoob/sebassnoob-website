import { Typography } from '@mui/material';

import { PacmanLoader } from 'react-spinners';
import { useContext, forwardRef, useEffect, useState } from 'react';
import './styles.css';
import { JSXProps } from '@/app/types';
import { MediaQueryContext } from '@/app/Providers/MediaQueryProvider';
import getSkills from '@/app/api/Skills';
import VerticalNav from './VerticalNav';
import { Skill } from '@/app/types';

export const Skills = forwardRef<HTMLDivElement, JSXProps>((props, ref) => {
  const { breakpoints } = useContext(MediaQueryContext);
  const [skills, setSkills] = useState<Skill[]>();

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
        console.log('clicked');
      },
      active: false,
    };
  });

  return (
    <div className={props.className} id={props.id} ref={ref}>
      <PacmanLoader color='#66d3fa' size={200} />
      <VerticalNav verticalNavProps={verticalNavProps!} />
    </div>
  );
});

Skills.displayName = 'Skills';
export default Skills;
