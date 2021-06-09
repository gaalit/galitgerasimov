// button for react-scroll
import styled from "styled-components";

export const ButtonOne = styled.a`
  border-radius: 50px;
  background: #f7ede2;
  white-space: nowrap;
  padding: 5px 22px;
  color: ${({ dark }) => (dark ? "#010606" : "#84a59d")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: #fff;
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "transparent" : "#01BF71")};
  }
`;

export const ButtonTwo = styled.a`
  display: flex;
  align-items: center;
  background: hsla(0, 0%, 100%, 0.75);
  border-radius: 7px;
  color: #84a59d;

  transition: all 0.2s ease-in-out;
  text-decoration: none !important;

  padding: 7px 22px;
  box-shadow: inset 0 0 0 2px #333;
`;

export const ButtonThree = styled.a`
  border-radius: 50px;
  background: rgba(202, 174, 162, 0.6);
  white-space: nowrap;
  padding: 16px 64px;
  color: #fff;
  font-size: 1.2rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;

    color: #010606;
  }
`;
