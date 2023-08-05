"use client";

import { MediaQueryProvider } from "./Providers/MediaQueryProvider";
import Landing from "./components/Landing/Landing";
import { ThemeProvider, createTheme, ThemeOptions } from "@mui/material/styles";
import { useRef, useEffect } from "react";
import "./globals.css";

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

  useEffect(() => {
    if (body.current) {
      body.current.style.setProperty("--rand", String(Math.random()));
    }
  }); // no deps, will run every page render

  return (
    <MediaQueryProvider>
      <ThemeProvider theme={theme}>
        <div className="page-container" ref={body}>
          <Landing />
        </div>
      </ThemeProvider>
    </MediaQueryProvider>
  );
}
