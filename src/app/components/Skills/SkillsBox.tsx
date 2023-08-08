import { SvgIconComponent } from "@mui/icons-material";
import "./skillsBox.css";
import { useState, useRef, forwardRef, useEffect } from "react";
import { JSXProps } from "@/app/types";

export interface SkillsBoxProps extends JSXProps {
  icon: SvgIconComponent;
  title: string;
  description: string;
}

export const SkillsBox = forwardRef<HTMLDivElement, SkillsBoxProps>((props, ref) => {
  return (
    <div className={`skills-box ${props.className}`} ref={ref}>
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
})

export const FlippableSkillsBox = (props: [SkillsBoxProps, SkillsBoxProps]) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // hacky way to make the box height equal to the height of the tallest card.

  const box = useRef<HTMLDivElement>(null);
  const front = useRef<HTMLDivElement>(null);
  const back = useRef<HTMLDivElement>(null);

  const calculateInnerHeight = () => {

    if (front.current && back.current && box.current) {
      const frontHeight = front.current.getBoundingClientRect().height;
      const backHeight = back.current.getBoundingClientRect().height;
      box.current.style.height = String(Math.max(frontHeight, backHeight)) + 'px';
    }
  };

  useEffect(() =>
    calculateInnerHeight()
  , []);


  return (
    <div className='flippable-skills-box' ref={box}>
      <div
        className={`flippable-skills-box-inner ${isFlipped ? "flipped" : null}`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <SkillsBox
          ref={front}
          {...props[0]}
          className="flippable-skills-box-face flip-front"
        />
        <SkillsBox
          ref={ back}
          {...props[1]}
          className="flippable-skills-box-face flip-back"
        />
      </div>
    </div>
  );
};
