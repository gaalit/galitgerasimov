//homepage
import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

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
    </>
  );
};

export default Home;
