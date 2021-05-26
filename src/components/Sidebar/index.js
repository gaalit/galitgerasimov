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

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="home">Home</SidebarLink>
          <SidebarLink to="about">About</SidebarLink>
          <SidebarLink to="portfolio">Portfolio</SidebarLink>
          <SidebarLink to="resume">Resume</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/contact">Contact</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
