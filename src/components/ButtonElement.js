// button for react-scroll
import styled from "styled-components";

export const ButtonOne = styled.a`
  border-radius: 50px;
  background: #f7ede2;
  white-space: nowrap;
  padding: 5px 22px;
  color: ${({ dark }) => (dark ? "#101522" : "#84a59d")};
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
  border-radius: 7px;
  color: #84a59d;

  letter-spacing: 1.5px;

  transition: all 0.2s ease-in-out;
  text-decoration: none !important;

  padding: 5px 18px;

  &:hover {
    background: #84a59d;
    color: #fff;
  }
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

export const ButtonFour = styled.a`
  border-radius: 50px;

  background: #84a59d;
  white-space: nowrap;
  padding: 5px 22px;
  color: #f9f9f9;
  font-weight: 500;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: #000;
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#f7ede2" : "#01BF71")};
  }
`;
