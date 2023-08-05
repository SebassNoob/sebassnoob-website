import { createContext, ReactNode, useMemo } from "react";
import { useMediaQuery } from "@mui/material";

const MediaQueryContext = createContext({ isDesktop: false });

const MediaQueryProvider = ({ children }: { children: ReactNode }) => {
  const isDesktop = useMediaQuery("(min-width: 600px)");
  const value = useMemo(() => ({ isDesktop }), [isDesktop]);

  return (
    <MediaQueryContext.Provider value={value}>
      {children}
    </MediaQueryContext.Provider>
  );
};

export { MediaQueryContext, MediaQueryProvider };
