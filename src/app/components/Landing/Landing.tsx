import { Typography, Button } from "@mui/material";
import { useEffect } from "react";
import getBlogs from "@/app/api/fetchBlogs";
import "./styles.css";

export const Landing = () => {
  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="landing">
      <div className="landing-bg" />
      <div className="landing-content">
        <Typography sx={{ display: "flex" }} color="primary" variant="h1">
          l
        </Typography>
        <Typography sx={{ display: "flex" }} color="primary" variant="h1">
          <span style={{ color: "yellow" }}>{"<code>"}</span>
          the future
        </Typography>
      </div>
    </div>
  );
};

export default Landing;
