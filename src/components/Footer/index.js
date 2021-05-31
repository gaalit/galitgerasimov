import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
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
                  href="https://github.com/gaalit"
                  target="_blank"
                  aria-label="GithubTwitter"
                >
                  <FaTwitter />
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
