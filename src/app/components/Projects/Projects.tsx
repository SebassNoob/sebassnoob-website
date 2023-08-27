import React, {
  forwardRef,
  useEffect,
  useState,
  useContext,
  useCallback,
  useRef,
  use,
} from 'react';
import { MediaQueryContext } from '@/app/Providers/MediaQueryProvider';
import { Typography, IconButton } from '@mui/material';
import getProjects from '@/app/api/Projects';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { JSXProps, Project } from '@/app/types';
import './styles.css';

export const Projects = forwardRef<HTMLDivElement, JSXProps>((props, ref) => {
  const [carouselItemIdx, setCarouselItemIdx] = useState(0);
  const [projects, setProjects] = useState<Project[]>([]);
  const scene = useRef<HTMLDivElement>(null);
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

    carousel.style.transform = `translateZ(-${radius}px) rotateY(${
      -angle * idx
    }rad)`;
  };

  const handleWindowResize = useCallback(
    (timeOutFunctionId: NodeJS.Timeout) => {
      clearTimeout(timeOutFunctionId);
      timeOutFunctionId = setTimeout(() => {
        calculateCarousellItemOffset(carouselItemIdx);
      }, 400);
    },
    [carouselItemIdx],
  );

  const handleSelectedProjectChange = (idx: number) => {
    if (carouselItemIdx >= 0) {
      return idx === carouselItemIdx % projects.length;
    } else {
      return (
        idx === projects.length - Math.abs(carouselItemIdx % projects.length)
      );
    }
  };

  useEffect(() => {
    if (breakpoints.mobile) {
      scene.current?.style.setProperty('--carousel-width', '75vw');
      scene.current?.style.setProperty('--carousel-height', '50vh');
      scene.current?.style.setProperty('--carousel-item-size', '0.8');
    } else {
      scene.current?.style.setProperty('--carousel-width', '85vw');
      scene.current?.style.setProperty('--carousel-height', '40vh');
      scene.current?.style.setProperty('--carousel-item-size', '0.9');
    }
  }, [breakpoints.mobile]);

  useEffect(() => {
    getProjects().then((res) => setProjects(res));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    // debounce window resize then recalculate carousel item offset
    let timeOutFunctionId: NodeJS.Timeout;
    window.addEventListener('resize', () =>
      handleWindowResize(timeOutFunctionId),
    );
    return () =>
      window.removeEventListener('resize', () =>
        handleWindowResize(timeOutFunctionId),
      );
  }, [carouselItemIdx]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(
    () => calculateCarousellItemOffset(carouselItemIdx),
    [carouselItemIdx, projects],
  );

  return (
    <div className={props.className} id={props.id} ref={ref}>
      <div className='projects-content'>
        <Typography className='projects-title title' color='primary'>
          Projects
        </Typography>
        <Typography className='projects-description description less-important'>
          Take a look at some of my projects. I'm always working on something
          new!
        </Typography>

        <div className='projects-carousel-container'>
          <IconButton
            className='projects-carousel-controls-button'
            onClick={() => setCarouselItemIdx(carouselItemIdx - 1)}
            aria-label='previous'
          >
            <ArrowLeftIcon color='secondary' />
          </IconButton>
          <div className='projects-carousel-scene' ref={scene}>
            <div className='projects-carousel'>
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  onClick={() => window.open(project.redirect, '_blank')}
                  className={
                    handleSelectedProjectChange(idx)
                      ? 'projects-carousel-item projects-carousel-item-selected'
                      : 'projects-carousel-item'
                  }
                >
                  <div className='projects-carousel-item-content'>
                    <project.image className='projects-carousel-item-img' />
                    <div className='projects-carousel-item-text'>
                      <div>
                        <Typography className='subtitle' color='secondary'>
                          {project.title}
                        </Typography>
                        <div className='projects-carousel-item-tag-container'>
                          {project.tags.map((tag, idx) => (
                            <Typography
                              key={idx}
                              className='projects-carousel-item-tag description '
                            >
                              {tag}
                            </Typography>
                          ))}
                        </div>
                      </div>

                      <Typography
                        className='description less-important'
                        sx={{ marginTop: '2%' }}
                      >
                        {project.description}
                      </Typography>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <IconButton
            className='projects-carousel-controls-button'
            onClick={() => setCarouselItemIdx(carouselItemIdx + 1)}
            aria-label='next'
          >
            <ArrowRightIcon color='secondary' />
          </IconButton>
        </div>
      </div>
    </div>
  );
});

Projects.displayName = 'Projects';
export default Projects;
