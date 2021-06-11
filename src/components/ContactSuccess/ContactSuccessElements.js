import styled from "styled-components";

export const ContactSuccessContainer = styled.div`
  background: #f5cac3;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }

  @media (min-width: 769px) and (max-width: 965px) {
    padding: 90px 0 20px 0px;
  }
`;

export const ContactSuccessWrapper = styled.div`
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
