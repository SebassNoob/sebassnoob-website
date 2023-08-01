import { Typography, Button } from "@mui/material";
import "./styles.css";

export const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-bg" />
      <div className="landing-content">
        <Typography sx={{ display: "flex" }} color="primary" variant="h1">
          Let's
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
