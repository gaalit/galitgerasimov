import React from "react";
import { useState } from "react";
import Flickity from "react-flickity-component";
import { ButtonTwo } from "../ButtonElement";
import { ArrowForward, ArrowRight } from "../Navbar/NavbarElements";

import "./flickity.css";

const flickityOptions = {
  initialIndex: 0,
};

function Carousel({
  imgOne,
  altOne,
  hrefOne,
  descriptionOne,
  titleOne,
  imgTwo,
  altTwo,
  hrefTwo,
  descriptionTwo,
  titleTwo,
  imgThree,
  altThree,
  hrefThree,
  descriptionThree,
  titleThree,
  imgFour,
  altFour,
  hrefFour,
  descriptionFour,
  titleFour,
  imgFive,
  altFive,
  hrefFive,
  descriptionFive,
  titleFive,
  imgSix,
  altSix,
  hrefSix,
  descriptionSix,
  titleSix,
}) {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <div id="portfolio" className="projects container">
      <div className="wrapper">
        <div className="highlight"></div>
        <h2 id="projectsJumpTo" className="title">
          Projects
        </h2>
        <Flickity
          className={"carousel"} // default ''
          elementType={"div"} // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={false} // default false
          static // default false
          initialIndex={0}
          accessibility={false}
        >
          <div className="projectFour carousel-cell">
            <img className="screenshot" src={imgFour} alt={altFour} />
            <p className="desc">{descriptionFour}</p>
            <div className="skillsContainer">
              <div className="btnContainer">
                <ButtonTwo
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                  href={hrefFour}
                >
                  {titleFour} Repo {hover ? <ArrowForward /> : <ArrowRight />}
                </ButtonTwo>
              </div>
            </div>
          </div>
          <div className="projectOne carousel-cell">
            <img className="screenshot" src={imgOne} alt={altOne} />
            <p className="desc">{descriptionOne}</p>
            <div className="skillsContainer">
              <div className="btnContainer">
                <ButtonTwo
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                  href={hrefOne}
                >
                  {titleOne} Repo {hover ? <ArrowForward /> : <ArrowRight />}
                </ButtonTwo>
              </div>
            </div>
          </div>
          <div className="projectThree carousel-cell">
            <img className="screenshot" src={imgThree} alt={altThree} />
            <p className="desc">{descriptionThree}</p>
            <div className="skillsContainer">
              <div className="btnContainer">
                <ButtonTwo
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                  href={hrefThree}
                >
                  {titleThree} Repo {hover ? <ArrowForward /> : <ArrowRight />}
                </ButtonTwo>
              </div>
            </div>
          </div>
          <div className="projectTwo carousel-cell">
            <img className="screenshot" src={imgTwo} alt={altTwo} />
            <p className="desc">{descriptionTwo}</p>
            <div className="skillsContainer">
              <div className="btnContainer">
                <ButtonTwo
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                  href={hrefTwo}
                >
                  {titleTwo} Repo {hover ? <ArrowForward /> : <ArrowRight />}
                </ButtonTwo>
              </div>
            </div>
          </div>
          <div className="projectFive carousel-cell">
            <img className="screenshot" src={imgFive} alt={altFive} />
            <p className="desc">{descriptionFive}</p>
            <div className="skillsContainer">
              <div className="btnContainer">
                <ButtonTwo
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                  href={hrefFive}
                >
                  {titleFive} Repo {hover ? <ArrowForward /> : <ArrowRight />}
                </ButtonTwo>
              </div>
            </div>
          </div>
          <div className="projectSix carousel-cell">
            <img className="screenshot" src={imgSix} alt={altSix} />
            <p className="desc">{descriptionSix}</p>
            <div className="skillsContainer">
              <div className="btnContainer">
                <ButtonTwo
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                  href={hrefSix}
                >
                  {titleSix} Repo {hover ? <ArrowForward /> : <ArrowRight />}
                </ButtonTwo>
              </div>
            </div>
          </div>
        </Flickity>
      </div>
    </div>
  );
}

export default Carousel;
