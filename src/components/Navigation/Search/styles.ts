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
  }
  ::placeholder {
    color: #ccc;
  }
`;

export const SearchDropDown = styled.select`
  background-color: #fff;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23000000%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),
    linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;

  appearance: none;
  background-color: white;
  grid-row: 2;
  font-family: "Bowlby One SC", cursive;
  font-size: 30px;
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  display: block;
  border-radius: 5px;
  border: 3px solid transparent;
  padding-left: 10px;
  :focus {
    outline: none;
    border-radius: 5px;
    border: 3px solid ${colors.highlight};
    transform: scale(1.02);
  }
`;

export const SearchSubmit = styled.input`
  grid-row: 3 / span 1;
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
