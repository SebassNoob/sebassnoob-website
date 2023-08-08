import { SvgIconComponent } from "@mui/icons-material";
import "./skillsBox.css";
import { useState } from "react";
import { JSXProps } from "@/app/types";

export interface SkillsBoxProps extends JSXProps {
  icon: SvgIconComponent;
  title: string;
  description: string;
}

export const SkillsBox = (props: SkillsBoxProps) => {
  return (
    <div className={`skills-box ${props.className}`}>
      <div className="skills-box-content">
        <div style={{ display: "flex", alignItems: "center", gap: "2vw" }}>
          <div className="skills-box-icon">
            <props.icon />
          </div>
          <div className="skills-box-title subtitle">{props.title}</div>
        </div>
        <div className="skills-box-description description">
          {props.description}
        </div>
      </div>
    </div>
  );
};

export const FlippableSkillsBox = (props: [SkillsBoxProps, SkillsBoxProps]) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div className={`flippable-skills-box `}>
      <div
        className={`flippable-skills-box-inner ${isFlipped ? "flipped" : null}`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <SkillsBox
          {...props[0]}
          className="flippable-skills-box-face flip-front"
        />
        <SkillsBox
          {...props[1]}
          className="flippable-skills-box-face flip-back"
        />
      </div>
    </div>
  );
};
