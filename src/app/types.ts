import React, {ForwardRefExoticComponent} from 'react';


export interface JSXProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export interface Project {
  title: string;
  description: string;
  image: ForwardRefExoticComponent<JSXProps>;
  redirect: URL;
  tags: string[];
}
