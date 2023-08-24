'use client';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Popover,
  Paper,
  Typography,
  Link,
} from '@mui/material';
import { forwardRef, useState, useContext, useEffect } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { MediaQueryContext } from '@/app/Providers/MediaQueryProvider';
import { JSXProps } from '@/app/types';
import './styles.css';

interface NavbarProps extends JSXProps {
  handleThemeChange: () => void;
}

export const Navbar = forwardRef<HTMLDivElement, NavbarProps>((props, ref) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [popoverOpen, setPopoverOpen] = useState<boolean>(false);
  const { breakpoints, theming } = useContext(MediaQueryContext);

  const [isDark, setIsDark] = useState<boolean>(theming.darkMode);

  useEffect(() => {
    setIsDark(theming.darkMode);
  }, [theming.darkMode]);

  useEffect(() => setPopoverOpen(false), [breakpoints.mobile]);

  const handlePopover = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setPopoverOpen(!popoverOpen);
  };

  const handleMobileNavigation = (href: string) => {
    setPopoverOpen(false);
    const element = document.querySelector(href);
    if (element) {
      setTimeout(() => element.scrollIntoView({ behavior: 'auto' }), 100);
    }
  };

  return (
    <div className={props.className} id={props.id} ref={ref}>
      <AppBar className='navbar' position='fixed'>
        <Toolbar className='navbar-inner'>
          <div className='navbar-logo' />

          {breakpoints.mobile ? (
            <>
              <div className='navbar-links'>
                <a className='navbar-link description' href='#landing'>
                  <span className='description emphasis'>01 </span>
                  Home
                </a>
                <a className='navbar-link description' href='#skills'>
                  <span className='description emphasis'>02 </span>
                  Skills
                </a>
                <a className='navbar-link description' href='#projects'>
                  <span className='description emphasis'>03 </span>
                  Projects
                </a>
              </div>
              <div className='navbar-misc'>
                <Button
                  className='button navbar-resume'
                  variant='contained'
                  href='https://google.com'
                  target='_blank'
                >
                  Resumé
                </Button>
                <IconButton
                  className='button navbar-theme'
                  onClick={() => {
                    setIsDark(!isDark);
                    props.handleThemeChange();
                  }}
                >
                  {isDark ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>
              </div>
            </>
          ) : (
            <>
              <IconButton onClick={handlePopover}>
                <DensityMediumIcon />
              </IconButton>
              <Popover
                open={popoverOpen}
                anchorEl={anchorEl}
                onClose={() => setPopoverOpen(false)}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                disablePortal
              >
                <Paper className='navbar-mobile-dropdown'>
                  <Button
                    className='navbar-mobile-dropdown-button'
                    onClick={() => handleMobileNavigation('#landing')}
                  >
                    <Typography>Home</Typography>
                  </Button>
                  <Button
                    className='navbar-mobile-dropdown-button'
                    onClick={() => handleMobileNavigation('#skills')}
                  >
                    <Typography>Skills</Typography>
                  </Button>
                  <Button
                    className='navbar-mobile-dropdown-button'
                    onClick={() => handleMobileNavigation('#projects')}
                  >
                    <Typography>Projects</Typography>
                  </Button>
                  <Button
                    className='navbar-mobile-dropdown-button'
                    href='https://google.com'
                    target='_blank'
                  >
                    <Typography>Resumé</Typography>
                  </Button>
                  <Button
                    className='navbar-mobile-dropdown-button'
                    onClick={() => {
                      setIsDark(!isDark);
                      props.handleThemeChange();
                    }}
                  >
                    <Typography>Toggle theme</Typography>
                  </Button>
                </Paper>
              </Popover>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
});

Navbar.displayName = 'Navbar';
export default Navbar;
