import styled from "styled-components/macro";

import { colors } from "components/global.styles";

export const SearchForm = styled.form`
  display: grid;
  grid-auto-columns: calc(100% - 30px);
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 150px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const SearchInputString = styled.input`
  font-family: "Bowlby One SC", cursive;
  font-size: 20px;
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  display: block;
  border-radius: 5px;
  border: 3px solid transparent;
  margin: 0 auto;
  :focus {
    outline: none;
    border-radius: 5px;
    border: 3px solid ${colors.highlight};
    transform: scale(1.02);
  }
  &:hover {
    transform: scale(1.02);
  }
  ::placeholder {
    color: #ccc;
  }
`;

export const SearchSubmit = styled.input`
  font-family: "Bowlby One SC", cursive;
  font-size: 20px;
  appearance: none;
  width: 100%;
  margin: 0 auto;
  border-radius: 5px;
  outline: none;
  color: ${colors.textDark};
  background-color: ${colors.highlight};
  border: 3px solid ${colors.highlight};
  &:hover {
    transform: scale(1.02);
  }
  &:active {
    transform: scale(0.98);
  }
`;
