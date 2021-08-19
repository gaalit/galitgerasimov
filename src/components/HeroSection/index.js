import React from "react";
import "../Contact/contact.css";
import building from "../../assets/images/building.jpeg";

import Typical from "react-typical";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg src={building}></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>I'M GALIT</HeroH1>

        <Typical
          steps={[
            "Full-Stack Developer.",
            2000,
            "Specialized in React",
            2000,
            "JavaScript",
            2000,
            "TypeScript",
            2000,
            " Full-Stack Developer.",
            500,
          ]}
          wrapper="h1"
          className={"intro"}
        />
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
