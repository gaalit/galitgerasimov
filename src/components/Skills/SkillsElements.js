import styled from "styled-components";

export const SkillsContainer = styled.div`
  background: #f9f9f9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen (min-width: 769px) and (max-width: 965px) {
    padding-top: 10%;
  }

  @media screen and (max-width: 768px) {
    padding-top: 30%;
  }
`;

export const SkillsWrapper = styled.div`
  height: 300px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;

  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 321px) {
    padding: 0 15px;
  }

  @media screen and (max-width: 375px) {
    height: 290px;
  }
`;

export const SkillsH2 = styled.h2`
  padding: 0 24px;
  margin-bottom: 100px;
`;
export const IconWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export const SingleIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
