import { JSXProps } from '@/app/types';
import { forwardRef, useEffect } from 'react';
import './VerticalNav.css';
import { SvgIconComponent } from '@mui/icons-material';
import { Typography } from '@mui/material';

export type SingularVerticalNavProps = {
  label: string;
  onClick: () => void;
  active?: boolean;
};

export interface VerticalNavProps extends JSXProps {
  verticalNavProps: SingularVerticalNavProps[];
}

const VerticalNav = forwardRef<HTMLDivElement, VerticalNavProps>(
  (props, ref) => {
    return (
      <div className={props.className} id={props.id} ref={ref}>
        {props.verticalNavProps?.map((child, idx) => {
          return (
            <div
              key={idx}
              className={
                child.active
                  ? 'verticalnav-entry verticalnav-active'
                  : 'verticalnav-entry'
              }
              onClick={child.onClick}
            >
              <Typography className='button nerticalnav-label' noWrap>
                {child.label}
              </Typography>
            </div>
          );
        })}
      </div>
    );
  },
);

VerticalNav.displayName = 'VerticalNav';
export default VerticalNav;
