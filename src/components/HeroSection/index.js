import React, { useState } from "react";
import Video from "../video/video.mp4";
import { Button } from "../ButtonElement";
import Typical from "react-typical";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay muted src={Video} type="video/mp4"></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>HI! I'M GALIT</HeroH1>
        <HeroP>I'm a </HeroP>
        <Typical
          steps={[
            " Full-Stack Developer",
            1000,
            " Creator",
            1000,
            " Former Marketing Specialist",
            1000,
            " Full-Stack Developer",
            500,
          ]}
          // loop={Infinity}
          wrapper="b"
        />
        <HeroBtnWrapper>
          <Button
            to="contact"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Contact {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;