import React, { forwardRef, useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { JSXProps } from '@/app/types';
import './styles.css';

export const Projects = forwardRef<HTMLDivElement, JSXProps>((props, ref) => {
  const [carouselItemIdx, setCarouselItemIdx] = useState(0);

  const calculateCarousellItemOffset = (idx: number) => {
    const items: NodeListOf<HTMLElement> = document.querySelectorAll(
      '.projects-carousel-item',
    );
    const angle = (2 * Math.PI) / items.length;

    const itemWidth = document.querySelector('.projects-carousel-item')
      ?.clientWidth;

    const radius = (itemWidth || 0) / 2 / Math.tan(angle / 2);

    items.forEach((item, index) => {
      const offset = angle * index;
      item.style.transform = `rotateY(${offset}rad) translateZ(${radius}px)`;
    });

    const carousel = document.querySelector(
      '.projects-carousel',
    ) as HTMLElement;
    while (idx < 0) {
      idx = items.length - Math.abs(idx);
    }
    carousel.style.transform = `translateZ(-${radius}px) rotateY(-${
      angle * idx
    }rad)`;
  };

  useEffect(
    () => calculateCarousellItemOffset(carouselItemIdx),
    [carouselItemIdx],
  );

  return (
    <div className={props.className} id={props.id} ref={ref}>
      <div className='projects-content'>
        <Typography className='projects-title title' color='primary'>
          Projects
        </Typography>
        <Typography className='projects-description description less-important'>
          Some stuff I've built.
        </Typography>
        <div className='projects-carousel-controls'>
          <div className='projects-carousel-controls-left'>
            <button onClick={() => setCarouselItemIdx(carouselItemIdx - 1)}>
              pssapfsdpofsdjfa
            </button>
          </div>
          <div
            className='projects-carousel-controls-right'
            onClick={() => setCarouselItemIdx(carouselItemIdx + 1)}
          >
            right
          </div>
        </div>
        <div className='projects-carousel-scene'>
          <div className='projects-carousel'>
            <div className='projects-carousel-item'>1</div>
            <div className='projects-carousel-item'>2</div>
            <div className='projects-carousel-item'>3</div>
            <div className='projects-carousel-item'>4</div>
            <div className='projects-carousel-item'>5</div>
          </div>
        </div>
      </div>
    </div>
  );
});

Projects.displayName = 'Projects';
export default Projects;
