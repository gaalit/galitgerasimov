import styled from "styled-components";

export const ContactSuccessContainer = styled.div`
  background: #f5cac3;
  display: flex;
  justify-content: center;
  flex-direction: column;

  height: 90vh;
`;

export const ContactSuccessWrapper = styled.div`
  background: #fff;
  border-radius: 10px;
  position: relative;
  width: 300px;

  height: 300px;

  margin: 0 auto;

  &after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

export const ContactSuccessContent = styled.div`
  padding: 12px 12px;
`;

export const ContactSuccessMessage = styled.p`
  margin-top: 10%;
  maring-bottom: 20%;
`;

export const ContactSuccessBtn = styled.div`
  margin-top: 10%;

  display: flex;
  align-items: center;
`;
