import { Typography, Button } from "@mui/material";
import { useEffect, useContext, forwardRef } from "react";
import getBlogs from "@/app/api/fetchBlogs";
import { MediaQueryContext } from "@/app/Providers/MediaQueryProvider";
import "./styles.css";
import { JSXProps } from "@/app/types";

export const Landing = forwardRef<HTMLDivElement, JSXProps>((props, ref) => {
  useEffect(() => {
    getBlogs();
  }, []);

  const { breakpoints } = useContext(MediaQueryContext);
  return (
    <div className={props.className} ref={ref}>
      <div className="landing-content">
        <div style={{ display: "flex", gap: "2vw", alignItems: "center" }}>
          {breakpoints.mobile ? <div className="landing-image" /> : null}

          <div>
            <Typography className="description " color="secondary">
              Hello there! My name is
            </Typography>

            <div className="title-container ">
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
            <Typography className="subtitle less-important">
              Student, Full stack developer, Bubble tea enjoyer.
            </Typography>
          </div>
        </div>

        <Typography variant="h5" className="description less-important ">
          I'm focused on building the
          <span className="emphasis"> next generation of websites </span>
          and
          <span className="emphasis"> user-oriented interfaces</span>, aspiring
          to become skilled at the
          <span className="emphasis"> magic </span>
          of the internet. I'm currently
          <span className="emphasis"> studying </span>
          for my A levels at Raffles Institution.
        </Typography>
        <Button
          variant="contained"
          className="button landing-button "
          color="primary"
        >
          Let's talk!
        </Button>
      </div>
    </div>
  );
});

export default Landing;
