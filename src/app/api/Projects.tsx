import { JSXProps, Project } from '@/app/types';
import { forwardRef } from 'react';

export const getProjects = async () => {
  const res = await fetch(
    new URL(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/get_all_projects'),
  );

  if (!res.ok) throw new Error('Failed to fetch projects');

  const raw: Object = await res.json();

  const projects: Project[] = Object.entries(raw).map(([title, properties]) => {
    return {
      title: title,
      description: properties['description'],
      image: forwardRef<HTMLImageElement, JSXProps>(function Image(props, ref) {
        return (
          <img
            src={properties['image']}
            alt={title}
            className={props.className}
            id={props.id}
            ref={ref}
          />
        );
      }),
      redirect: new URL(properties['redirect']),
      tags: properties['tags'],
    };
  });
  return projects;
};

getProjects.displayName = 'getProjects';
export default getProjects;
