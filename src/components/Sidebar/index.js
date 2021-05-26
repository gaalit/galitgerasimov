// sidebar for mobile view
import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
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
          <SidebarLink to="resume" isOpen={isOpen} onClick={toggle}>
            Resume
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/contact">Contact</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
