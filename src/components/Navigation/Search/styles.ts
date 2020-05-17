import styled from "styled-components/macro";

import { colors } from "components/global.styles";

export const SearchForm = styled.form`
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 150px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const SearchInputString = styled.input`
  box-sizing: border-box;
  width: 100%;
  font-family: "Bowlby One SC", cursive;
  font-size: 20px;
  text-align: center;
  display: block;
  border-radius: 5px;
  border: 3px solid transparent;
  margin: 0 auto;
  :focus {
    outline: none;
    border: 3px solid ${colors.highlight};
    border-radius: 5px;
  }
  ::placeholder {
    color: #ccc;
  }
`;

export const SearchSubmit = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  color: ${colors.textDark};
  width: 100%;
  font-family: "Bowlby One SC", cursive;
  font-size: 20px;
  border-radius: 5px;
  margin: 0 auto;
  background-color: ${colors.highlight};
  border: 3px solid ${colors.highlight};
  outline: none;
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.95);
  }
`;
