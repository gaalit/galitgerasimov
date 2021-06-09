import React from "react";
import DevIcon from "devicon-react-svg";
import Icon from "./icons";
import "./skills.css";

import {
  SkillsContainer,
  SkillsWrapper,
  SkillsH2,
  IconWrapper,
  SingleIcon,
} from "./SkillsElements";

const Skills = () => {
  return (
    <SkillsContainer>
      <SkillsWrapper>
        <div className="skills-highlight"></div>
        <SkillsH2 className="skills-title">Languages & Frameworks</SkillsH2>
        <IconWrapper>
          <SingleIcon>
            <Icon
              name="JavaScript"
              className="iconz"
              classes="size-xs"
              color="#84a59d"
            />
            <p className="icon-title">JavaScript</p>
          </SingleIcon>
          <SingleIcon>
            <Icon name="TypeScipt" classes="size-xs" color="#84a59d" />
            <p className="icon-title">TypeScript</p>
          </SingleIcon>
          <SingleIcon>
            <Icon name="CSS" classes="size-xs" color="#84a59d" />
            <p className="icon-title">CSS</p>
          </SingleIcon>
          <SingleIcon>
            <Icon name="HTML" classes="size-xs" color="#84a59d" />
            <p className="icon-title">HTML5</p>
          </SingleIcon>
          <SingleIcon>
            <Icon name="Ruby" classes="size-xs" color="#84a59d" />
            <p className="icon-title">Ruby</p>
          </SingleIcon>
          <SingleIcon>
            <Icon name="Sass" classes="size-xs" color="#84a59d" />
            <p className="icon-title">Sass</p>
          </SingleIcon>
          <SingleIcon>
            <Icon name="PSQL" classes="size-xs" color="#84a59d" />
            <p className="icon-title">PostgreSQL</p>
          </SingleIcon>
        </IconWrapper>
        <IconWrapper style={{ paddingTop: "30px" }}>
          <SingleIcon>
            <Icon name="NodeJs" classes="size-xs" color="#84a59d" />
            <p className="icon-title">NodeJS</p>
          </SingleIcon>
          <SingleIcon>
            <Icon name="JQuery" classes="size-xs" color="#84a59d" />
            <p className="icon-title">JQuery</p>
          </SingleIcon>
          <SingleIcon>
            <Icon name="React" classes="size-xs" color="#84a59d" />
            <p className="icon-title">React</p>
          </SingleIcon>
          <SingleIcon>
            <Icon name="Redux" classes="size-xs" color="#84a59d" />
            <p className="icon-title">Redux</p>
          </SingleIcon>

          <SingleIcon>
            <Icon name="Rails" classes="size-xs" color="#84a59d" />
            <p className="icon-title">Rails</p>
          </SingleIcon>
          <SingleIcon>
            <Icon name="Bootstrap" classes="size-xs" color="#84a59d" />
            <p className="icon-title">Bootstrap</p>
          </SingleIcon>
          <SingleIcon>
            <Icon name="Express" classes="size-xs" color="#84a59d" />
            <p className="icon-title">Express</p>
          </SingleIcon>
        </IconWrapper>
      </SkillsWrapper>
    </SkillsContainer>
  );
};

export default Skills;
