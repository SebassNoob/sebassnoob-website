"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Landing from "./components/Landing/Landing";
import { ThemeProvider, createTheme, ThemeOptions } from "@mui/material/styles";

const themeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#4b62cb",
    },
    secondary: {
      main: "#dce00e",
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
  return (
    <ThemeProvider theme={theme}>
      <Landing />
    </ThemeProvider>
  );
}
