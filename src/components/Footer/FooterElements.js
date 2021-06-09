import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainter = styled.footer`
  background-color: #101522;
`;
export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;
export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;
export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-weight: bold;

  @media screen and (max-width: 1024px) {
    padding-left: 20px;
  }

  @media screen and (max-width: 800px) {
    font-size: 13px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 240px;
  margin-bottom: 10px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
