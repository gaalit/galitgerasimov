import styled from "styled-components";

export const SkillsContainer = styled.div`
  background: #f9f9f9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -40px;

  @media screen and (max-width: 768px) {
    padding-top: 170px;
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
`;

export const SkillsH2 = styled.h2`
  font-size: 1.5rem;
  padding: 0 24px;

  margin-bottom: 100px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const IconWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

export const SingleIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
