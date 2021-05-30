//homepage
import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import About from "../AboutSection";
import { homeObjOne, homeObjTwo, homeObjThree } from "../AboutSection/Data";

import Carousel from "../Portfolio/index";

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
      <Carousel />
      <About {...homeObjTwo} />
      <About {...homeObjThree} />
    </>
  );
};

export default Home;
