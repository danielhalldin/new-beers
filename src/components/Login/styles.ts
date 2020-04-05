import styled from "styled-components/macro";
import { colors } from "../global.styles";

const Wrapper = styled.main`
  font-weight: 700;
  font-size: 26px;
  text-align: center;
  height: calc(100vh - 344px);
  margin: auto;
  padding: 10vh 0;
`;

const Button = styled.a`
  margin: 10vh 0;
  display: block;
  font-size: 30px;
  padding: 6px 18px;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  background-color: ${colors.dark};
  text-decoration: none;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);
  :hover {
    background-color: #ffdd11;
  }
  :active {
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.5);
  }
`;

export { Wrapper, Button };
