'use client';

import './page.css';
import Landing from './components/Landing/Landing';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from '@mui/material/styles';
import { useRef, useEffect, useState, useContext } from 'react';

import { MediaQueryContext } from '@/app/Providers/MediaQueryProvider';
import { darkThemeOptions, lightThemeOptions } from './themes';
import Footer from './components/Footer/Footer';

export default function Page() {
  const { theming, breakpoints } = useContext(MediaQueryContext);
  const [isDark, setIsDark] = useState<boolean>(theming.darkMode);
  const theme = createTheme(isDark ? darkThemeOptions : lightThemeOptions);
  const body = useRef<HTMLDivElement>(null);
  const blob = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsDark(theming.darkMode);
  }, [theming.darkMode]);

  const fadeInRefs = useRef<(HTMLDivElement | null)[]>([]);
  const navBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (body.current) {
      body.current.style.setProperty('--rand', String(Math.random()));
    }
  }); // no deps, will run every page render

  const intersectionCallback: IntersectionObserverCallback = (
    entries,
    observer,
  ) => {
    entries.forEach((entry) => {
      if (entry.target.classList.contains('hidden') && entry.isIntersecting) {
        entry.target.classList.remove('hidden');
        entry.target.classList.add('load-in');
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(intersectionCallback);
    fadeInRefs.current?.forEach((elem) => {
      observer.observe(elem!);
    });
    return () => observer.disconnect();
  }, []);

  const floatBlob = (e: MouseEvent) => {
    blob.current?.animate(
      {
        left: `${e.clientX}px`,
        top: `${e.clientY + window.scrollY}px`,
      },
      {
        duration: 5000,
        fill: 'forwards',
      },
    );
  };

  useEffect(() => {
    if (blob.current && breakpoints.mobile) {
      window.addEventListener('mousemove', floatBlob);
    }
    return () => window.removeEventListener('mousemove', floatBlob);
  }, [breakpoints.mobile]);

  // set the margin-top of the body to the height of the navbar
  useEffect(() => {
    const height = (navBarRef.current?.childNodes[0] as HTMLDivElement)
      .clientHeight;
    body.current?.style.setProperty('margin-top', `${height}px`);
  }, [navBarRef.current?.clientHeight]);

  useEffect(() => {
    if (isDark) {
      document.body.style.backgroundColor = 'rgb(10, 25, 47)';
      body.current?.style.setProperty('--primary', 'rgb(255,255,255)');
      body.current?.style.setProperty('--secondary', 'rgb(100, 255, 218)');
      body.current?.style.setProperty('--less-important', 'lightgrey');
      body.current?.style.setProperty('--background-color', 'rgb(10, 25, 47)');
      body.current?.style.setProperty('--sectional-color', '255, 255, 255');
    } else {
      document.body.style.backgroundColor = 'rgb(255, 255, 255)';
      body.current?.style.setProperty('--primary', 'rgb(0,0,0)');
      body.current?.style.setProperty('--secondary', 'rgb(238, 103, 35)');
      body.current?.style.setProperty('--less-important', 'rgb(56,56,56)');
      body.current?.style.setProperty(
        '--background-color',
        'rgb(255, 255, 255)',
      );
      body.current?.style.setProperty('--sectional-color', '128, 128, 128');
    }
  }, [isDark]);

  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <div className='page-container' ref={body}>
          <div className='page-blob' ref={blob} />
          <Navbar
            ref={navBarRef}
            handleThemeChange={() => setIsDark(!isDark)}
          />
          <Landing
            ref={(elem) => fadeInRefs.current.push(elem)}
            className='hidden landing'
            id='landing'
          />
          <Skills
            ref={(elem) => fadeInRefs.current.push(elem)}
            className='hidden skills'
            id='skills'
          />
          <Projects
            ref={(elem) => fadeInRefs.current.push(elem)}
            className='hidden projects'
            id='projects'
          />
          <Contact
            ref={(elem) => fadeInRefs.current.push(elem)}
            isDark={isDark}
            className='hidden contact'
            id='contact'
          />
          <Footer />
        </div>
      </StyledEngineProvider>
    </ThemeProvider>
  );
}
