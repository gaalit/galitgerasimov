// sidebar for mobile view
import React from "react";
import { ButtonThree } from "../ButtonElement";
import GG from "../../assets/Galit Gerasimov_Resume_May 2021.pdf";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="home" isOpen={isOpen} onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to="about" isOpen={isOpen} onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="portfolio" isOpen={isOpen} onClick={toggle}>
            Portfolio
          </SidebarLink>
          <SidebarLink to="contact" isOpen={isOpen} onClick={toggle}>
            Contact
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <ButtonThree href={GG} download>
            My Resume
          </ButtonThree>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
