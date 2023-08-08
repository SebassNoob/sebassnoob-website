"use client";

import "./page.module.css";
import { MediaQueryProvider } from "./Providers/MediaQueryProvider";
import Landing from "./components/Landing/Landing";
import Skills from "./components/Skills/Skills";
import {
  ThemeProvider,
  createTheme,
  ThemeOptions,
  StyledEngineProvider,
} from "@mui/material/styles";
import { useRef, useEffect, useState } from "react";

const themeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "rgb(255, 255, 255)",
    },
    secondary: {
      main: "rgb(100, 255, 218)",
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiTypography: {
      defaultProps: {
        sx: {
          fontFamily:
            '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif !important;',
        },
      },
    },
  },
};

export default function Home() {
  const theme = createTheme(themeOptions);
  const body = useRef<HTMLDivElement>(null);

  const landingRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (body.current) {
      body.current.style.setProperty("--rand", String(Math.random()));
    }
  }); // no deps, will run every page render

  const intersectionCallback: IntersectionObserverCallback = (
    entries,
    observer,
  ) => {
    entries.forEach((entry) => {
      if (entry.target.classList.contains("hidden") && entry.isIntersecting) {
        entry.target.classList.remove("hidden");
        entry.target.classList.add("load-in");
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(intersectionCallback);
    [landingRef, skillsRef].forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });
    return () => observer.disconnect();
  }, []);

  return (
    <MediaQueryProvider>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <div className="page-container" ref={body}>
            <Landing ref={landingRef} className="hidden landing" />
            <Skills ref={skillsRef} className="hidden skills" />
          </div>
        </StyledEngineProvider>
      </ThemeProvider>
    </MediaQueryProvider>
  );
}
