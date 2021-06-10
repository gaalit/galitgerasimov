import styled from "styled-components";

export const AboutContainer = styled.div`
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#f5cac3")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }

  @media (min-width: 769px) and (max-width: 965px) {
    padding: 90px 0 20px 0px;
  }
`;

export const AboutWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 580px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const AboutRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0px 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 45px;

  @media and (max-width: 768px) {
    padding-bottom: 10%;
  }
`;

export const TopLine = styled.p`
  color: #84a59d;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 2.25rem;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 800px) {
    font-size: 32px;
  }

  @media screen and (max-width: 490px) {
    font-size: 26px;
  }
`;

export const Subtitle = styled.p`
  max-width: 500px;
  margin-botton: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};

  @media screen and (max-width: 800px) {
    font-size: 17px;
  }

  @media screen and (max-width: 490px) {
    font-size: 16px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 35px;
  font-size: 18px;

  @media screen and (max-width: 800px) {
    font-size: 17px;
  }

  @media screen and (max-width: 490px) {
    font-size: 16px;
  }
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 50vmin;
  height: 50vmin;
  border-radius: 50%;

  margin: 0 0 5px 75px;
  padding-right: 0;

  @media screen and (max-width: 769px) {
    width: 45vmin;
    height: 45vmin;
  }
  @media screen and (max-width: 395px) {
    margin-left: 18%;
  }
`;
