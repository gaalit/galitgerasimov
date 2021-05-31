import React from "react";
import Flickity from "react-flickity-component";
import svg1 from "../images/weather.jpeg";
import "./flickity.css";

const flickityOptions = {
  initialIndex: 0,
};

function Carousel() {
  return (
    <div id="portfolio" style={{ backgroundColor: "#236cba" }}>
      <section className="projects wrapper">
        <div className="titles">
          <div className="highlight"></div>
          <h2 id="projectsJumpTo" className="title">
            Projects
          </h2>
        </div>
        <Flickity
          className={"carousel"} // default ''
          elementType={"div"} // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={false} // default false
          reloadOnUpdate // default false
          static // default false
          initialIndex={0}
        >
          <div className="projectOne carousel-cell">
            <img
              className="screenshot"
              src={svg1}
              alt="screenshot of Sprout app landing page"
            />
            <p className="desc">
              A plant app created with a Firebase database in React. Users are
              able to find a randomly generated plant suitable for an indoor
              apartment depending on if they have pets or not.
            </p>
            <ul className="skillsContainer">
              <li>React</li>
              <li>Firebase</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li className="button">
                <a href="https://github.com/amybradford/plants-app">GitHub</a>
              </li>
              <li className="button">
                <a href="https://plantsprout.netlify.app/">Live Site</a>
              </li>
            </ul>
          </div>
          <div className="projectTwo carousel-cell">
            <img
              className="screenshot"
              src={svg1}
              alt="screenshot of Sprout app landing page"
            />
            <p className="desc">
              A plant app created with a Firebase database in React. Users are
              able to find a randomly generated plant suitable for an indoor
              apartment depending on if they have pets or not.
            </p>
            <ul className="skillsContainer">
              <li>React</li>
              <li>Firebase</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li className="button">
                <a href="https://github.com/amybradford/plants-app">GitHub</a>
              </li>
              <li className="button">
                <a href="https://plantsprout.netlify.app/">Live Site</a>
              </li>
            </ul>
          </div>
          <div className="projectThree carousel-cell">
            <img
              className="screenshot"
              src={svg1}
              alt="screenshot of Sprout app landing page"
            />
            <p className="desc">
              A plant app created with a Firebase database in React. Users are
              able to find a randomly generated plant suitable for an indoor
              apartment depending on if they have pets or not.
            </p>
            <ul className="skillsContainer">
              <li>React</li>
              <li>Firebase</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li className="button">
                <a href="https://github.com/amybradford/plants-app">GitHub</a>
              </li>
              <li className="button">
                <a href="https://plantsprout.netlify.app/">Live Site</a>
              </li>
            </ul>
          </div>
        </Flickity>
      </section>
    </div>
  );
}

export default Carousel;

// import Icon1 from "../images/svg-1.svg";
// import Icon2 from "../images/svg-1.svg";
// import Icon3 from "../images/svg-1.svg";
// import {
//   PortfolioContainer,
//   PortfolioH1,
//   PortfolioWrapper,
//   PortfolioCard,
//   PortfolioIcon,
//   PortfolioH2,
//   PortfolioP,
// } from "./PortfolioElements";

// const Portfolio = () => {
//   return (
//     <>
//       <PortfolioContainer id="portfolio">
//         <PortfolioH1>My Projects</PortfolioH1>
//         <PortfolioWrapper>
//           <PortfolioCard>
//             <PortfolioIcon src={Icon1} />
//             <PortfolioH2>Project 1</PortfolioH2>
//             <PortfolioP>This project is build with blah blah</PortfolioP>
//           </PortfolioCard>
//         </PortfolioWrapper>
//         <PortfolioWrapper>
//           <PortfolioCard>
//             <PortfolioIcon src={Icon2} />
//             <PortfolioH2>Project 2</PortfolioH2>
//             <PortfolioP>This project is build with blah blah</PortfolioP>
//           </PortfolioCard>
//           <PortfolioWrapper>
//             <PortfolioCard>
//               <PortfolioIcon src={Icon3} />
//               <PortfolioH2>Project 3</PortfolioH2>
//               <PortfolioP>This project is build with blah blah</PortfolioP>
//             </PortfolioCard>
//           </PortfolioWrapper>
//         </PortfolioWrapper>
//       </PortfolioContainer>
//     </>
//   );
// };

// export default Portfolio;
