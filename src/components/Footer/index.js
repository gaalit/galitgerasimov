import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  FooterContainter,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <>
      <FooterContainter>
        <FooterWrap>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/">
                Designed and Developed by Galit Gerasimov
              </SocialLogo>
              <SocialIcons>
                <SocialIconLink
                  href="https://github.com/gaalit"
                  target="_blank"
                  aria-label="Github"
                >
                  <FaGithub />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.linkedin.com/in/galit-gerasimov-5a48831b4/"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink
                  href="mailto:galit.gerasimov3@gmail.com"
                  target="_blank"
                  aria-label="Email"
                >
                  <MdEmail />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainter>
    </>
  );
};

export default Footer;
