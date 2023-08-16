import React, { forwardRef, useEffect, useState, useContext } from 'react';
import { MediaQueryContext } from '@/app/Providers/MediaQueryProvider';
import { Typography, Button, IconButton } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { JSXProps } from '@/app/types';
import './styles.css';

export const Projects = forwardRef<HTMLDivElement, JSXProps>((props, ref) => {
  const [carouselItemIdx, setCarouselItemIdx] = useState(0);
  const { breakpoints } = useContext(MediaQueryContext);

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

  useEffect(() => {
    // debounce window resize then recalculate carousel item offset
    let timeOutFunctionId: NodeJS.Timeout;

    window.addEventListener('resize', () => {
      clearTimeout(timeOutFunctionId);
      timeOutFunctionId = setTimeout(() => {
        calculateCarousellItemOffset(carouselItemIdx);
      }, 400);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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

        <div className='projects-carousel-container'>
          <IconButton
            className='projects-carousel-controls-button'
            onClick={() => setCarouselItemIdx(carouselItemIdx - 1)}
          >
            <ArrowLeftIcon />
          </IconButton>
          <div className='projects-carousel-scene'>
            <div className='projects-carousel'>
              <div className='projects-carousel-item'>1</div>
              <div className='projects-carousel-item'>2</div>
              <div className='projects-carousel-item'>3</div>
              <div className='projects-carousel-item'>4</div>
              <div className='projects-carousel-item'>5</div>
            </div>
          </div>
          <IconButton
            className='projects-carousel-controls-button'
            onClick={() => setCarouselItemIdx(carouselItemIdx + 1)}
          >
            <ArrowRightIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
});

Projects.displayName = 'Projects';
export default Projects;
