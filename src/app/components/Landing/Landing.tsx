import { Typography, Button } from "@mui/material";
import { useEffect, useContext } from "react";
import getBlogs from "@/app/api/fetchBlogs";
import { MediaQueryContext } from "@/app/Providers/MediaQueryProvider";
import "./styles.css";

export const Landing = () => {
  useEffect(() => {
    getBlogs();
  }, []);

  const { isDesktop } = useContext(MediaQueryContext);
  return (
    <div className="landing">
      <div className="landing-content">
        <div style={{ display: "flex", gap: "2vw", alignItems: "center" }}>
          {isDesktop ? <div className="landing-image" /> : null}

          <div>
            <Typography className="description load-in" color="secondary">
              Hello there! My name is
            </Typography>

            <div className="title-container load-in">
              <Typography className="title " color="primary">
                Sebassnoob.
              </Typography>
              <Typography className="title " color="primary">
                Sebassnoob.
              </Typography>
              <Typography className="title " color="primary">
                Sebassnoob.
              </Typography>
            </div>
            <Typography className="subtitle load-in landing-less-important">
              Student, Full stack developer, Bubble tea enjoyer.
            </Typography>
          </div>
        </div>

        <Typography
          variant="h5"
          className="description landing-less-important load-in"
        >
          I'm focused on building the  
          <span className="emphasis">{' '}next generation of websites </span>
          and 
          <span className="emphasis">{' '}user-oriented interfaces</span>
          . Aspiring to become skilled at the
          <span className="emphasis">{' '} magic </span> 
           of the internet.
        </Typography>
        <Button
          variant="contained"
          className="button landing-button load-in"
          color="primary"
        >
          Contact me
        </Button>
      </div>
    </div>
  );
};

export default Landing;
