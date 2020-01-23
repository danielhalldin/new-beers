import styled from "styled-components";
import { colors } from "../global.styles";

const BeerAdminWrapper = styled.div`
  text-align: center;
  padding: 15px 5px 0 5px;
  background-color: ${colors.dark};
  color: ${colors.textLight};
  overflow: hidden;
  border-radius: 10px 10px 0 0;
`;

const H2 = styled.h2`
  text-align: center;
  line-height: 1em;
  font-family: "Hind", cursive;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  font-weight: 700;
  font-size: 18px;
  padding: 0;
  margin: 0;
`;

const Input = styled.input`
  font-family: "Hind";
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${colors.textDark};
  margin-top: 10px;
  box-sizing: border-box;
`;

const _buttons = `
  width: 100%;
  height: 28px;
  padding: 0 8px;
  margin: 10px 0 20px 0;
  font-family: "Hind";
  font-weight: 700;
  font-size: 17px;
  line-height: 1.8;
  text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.5);
  color: #fff;
  background-color: #777;
  background-image: linear-gradient(#444, #777);
  border: none;
  border-radius: 4px;
  display: block;
  cursor: pointer;
  &:active {
    background-image: linear-gradient(#777, #555);
    text-shadow: none;
  }
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  ${_buttons}
`;

const DeleteButton = styled.button`
  ${_buttons}
  background-color: #e00;
  background-image: linear-gradient(#a00, #e00);

  &:active {
    background-image: linear-gradient(#900, #d00);
    text-shadow: none;
  }
`;

export { BeerAdminWrapper, Input, DeleteButton, Button, H2 };
