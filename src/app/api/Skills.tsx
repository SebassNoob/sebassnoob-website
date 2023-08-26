import { JSXProps, Skill } from '@/app/types';
import { forwardRef } from 'react';

export const getSkills = async () => {
  const res = await fetch(
    new URL(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/get_all_skills'),
  );

  if (!res.ok) throw new Error('Failed to fetch skills');

  const raw: Object = await res.json();

  const projects: Skill[] = Object.entries(raw).map(([title, properties]) => {
    return {
      title: title,
      description: properties['description'],
      images: properties['images'].map((image: string) =>
        forwardRef<HTMLImageElement, JSXProps>(function Image(props, ref) {
          return (
            <img
              src={image}
              alt={title}
              className={props.className}
              id={props.id}
              ref={ref}
            />
          );
        }),
      ),
    };
  });
  return projects;
};

getSkills.displayName = 'getProjects';
export default getSkills;
