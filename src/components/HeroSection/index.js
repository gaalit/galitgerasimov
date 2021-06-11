import React from "react";
import Video from "../video/video.mp4";

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
        <VideoBg autoPlay muted loop src={Video} type="video/mp4"></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>HI! I'M GALIT</HeroH1>

        <Typical
          steps={[
            " Full-Stack Developer",
            2000,
            " Creator",
            2000,
            " Former Marketing Specialist",
            2000,
            " Full-Stack Developer",
            500,
          ]}
          wrapper="h2"
        />
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
