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
            <p>JavaScript</p>
          </SingleIcon>
          <SingleIcon>
            <Icon name="TypeScipt" classes="size-xs" color="#84a59d" />
            <p>TypeScript</p>
          </SingleIcon>
          <SingleIcon>
            <Icon name="CSS" classes="size-xs" color="#84a59d" />
            <p>CSS</p>
          </SingleIcon>
          <SingleIcon>
            <Icon name="HTML" classes="size-xs" color="#84a59d" />
            <p>HTML5</p>
          </SingleIcon>
          <SingleIcon>
            <Icon name="Ruby" classes="size-xs" color="#84a59d" />
            <p>Ruby</p>
          </SingleIcon>
          <SingleIcon>
            <Icon name="Sass" classes="size-xs" color="#84a59d" />
            <p>Sass</p>
          </SingleIcon>
          <SingleIcon>
            <Icon name="PSQL" classes="size-xs" color="#84a59d" />
            <p>PostgreSQL</p>
          </SingleIcon>
        </IconWrapper>
        <IconWrapper style={{ paddingTop: "30px" }}>
          <div>
            <Icon name="NodeJs" classes="size-xs" color="#84a59d" />
            <p>NodeJS</p>
          </div>
          <div>
            <Icon name="JQuery" classes="size-xs" color="#84a59d" />
            <p>JQuery</p>
          </div>
          <div>
            <Icon name="React" classes="size-xs" color="#84a59d" />
            <p>React</p>
          </div>
          <div>
            <Icon name="Redux" classes="size-xs" color="#84a59d" />
            <p>Redux</p>
          </div>

          <div>
            <Icon name="Rails" classes="size-xs" color="#84a59d" />
            <p>Rails</p>
          </div>
          <div>
            <Icon name="Bootstrap" classes="size-xs" color="#84a59d" />
            <p>Bootstrap</p>
          </div>
          <div>
            <Icon name="Express" classes="size-xs" color="#84a59d" />
            <p>Express</p>
          </div>
        </IconWrapper>
      </SkillsWrapper>
    </SkillsContainer>
  );
};

export default Skills;
