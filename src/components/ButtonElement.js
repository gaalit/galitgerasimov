// button for react-scroll
import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled.a`
  border-radius: 50px;
  background: #f7ede2;
  white-space: nowrap;
  padding: 5px 22px;
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
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

// border-radius: 50px;
// background: #f7ede2;
// white-space: nowrap;
// padding: 5px 22px;
// color: #010606;
// font-size: 16px;
// outline: none;
// border: none;
// cursor: pointer;
// transition: all 0.2s ease-in-out;
// text-decoration: none;

// &:hover {
//   transition: all 0.2s ease-in-out;
//   background: #fff;
//   color: #010606;
// }
