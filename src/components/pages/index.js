//homepage
import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import About from "../AboutSection";
import Skills from "../Skills";
import { homeObjOne } from "../AboutSection/Data";
import {
  projectOneObj,
  projectTwoObj,
  projectThreeObj,
  projectFourObj,
  projectFiveObj,
  projectSixObj,
} from "../Portfolio/Data";

import Portfolio from "../Portfolio/index";
import Footer from "../Footer";
import ContactPage from "../Contact";

const Home = () => {
  //toggling the mobile dropdown menu
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    //this goes true/false depending on the current state
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <About {...homeObjOne} />
      <Skills />
      <Portfolio
        {...projectOneObj}
        {...projectTwoObj}
        {...projectThreeObj}
        {...projectFourObj}
        {...projectFiveObj}
        {...projectSixObj}
      />
      <ContactPage />
      <Footer />
    </>
  );
};

export default Home;
