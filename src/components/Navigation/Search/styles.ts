import styled from "styled-components/macro";

import { colors } from "components/global.styles";

export const SearchForm = styled.form`
  padding: 15px;
  display: grid;
  grid-gap: 15px;
  grid-auto-columns: 1fr 1fr;
  grid-auto-rows: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-size: 30px;
`;

export const SearchInputString = styled.input`
  grid-row: 1;
  grid-column: 1 / span 2;
  font-family: "Bowlby One SC", cursive;
  font-size: 30px;
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

export const SearchDropDown = styled.select`
  grid-row: 2;
  font-family: "Bowlby One SC", cursive;
  font-size: 30px;
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
  grid-row: 3 / span 2;
  grid-column: 1 / span 2;
  font-family: "Bowlby One SC", cursive;
  font-size: 30px;
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
