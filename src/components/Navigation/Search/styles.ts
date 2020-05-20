import styled from "styled-components/macro";

const commonProperties = `
  color: white;
  appearance: none;
  border-radius: 5px;
  width: 100%;
  font-family: "Bowlby One SC", cursive;
  font-size: 28px;
  text-align: center;
  border: 3px solid rgba(255, 255, 255, 0);
  background-color: rgba(255, 255, 255, 0.3);
  display: block;
  outline: none;
`;

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
`;

export const SearchInputString = styled.input`
  ${commonProperties}
  grid-row: 1;
  grid-column: 1 / span 2;
  :focus {
    outline: none;
    border-radius: 5px;
    border: 3px solid rgba(255, 255, 255, 1);
  }
  ::placeholder {
    color: #ccc;
  }
`;

export const SearchDropDown = styled.select`
  ${commonProperties}
  grid-row: 2;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23ffffff%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
  padding-left: 10px;
  :focus {
    outline: none;
    border-radius: 5px;
    border: 3px solid rgba(255, 255, 255, 1);
  }
`;

export const SearchSubmit = styled.input`
  ${commonProperties}
  color: black;
  background-color: rgba(255, 255, 255, 0.7);
  grid-row: 3 / span 1;
  grid-column: 1 / span 2;
  &:active {
    color: black;
    transform: scale(0.98);
    background-color: rgba(255, 255, 255, 1);
  }
`;
