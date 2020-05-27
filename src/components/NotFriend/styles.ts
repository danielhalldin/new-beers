import styled from "styled-components/macro";
import { colors } from "components/global.styles";

const Wrapper = styled.main`
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  margin: auto;
  padding: 30vh 0;
  display: grid;
  align-items: center;
`;

const Button = styled.a`
  max-width: 30vw;
  margin: auto;
  padding: 10px 20px;
  font-size: 30px;
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
