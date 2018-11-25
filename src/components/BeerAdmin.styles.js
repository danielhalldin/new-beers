import styled from "styled-components";
import { colors } from "./common.styles";

const BeerAdminWrapper = styled.div`
  width: 100%;
  height: 295px;
  position: relative;
`;

const Input = styled.input`
  font-family: "Hind";
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  width: 210px;
  border-radius: 4px;
  border: 1px solid ${colors.textDark};
  margin-top: 10px;
  box-sizing: border-box;
`;

const _buttons = `
  margin-top: 10px;
  width: 210px;
  padding: 0 8px;

  font-family: "Hind";
  font-weight: 700;
  font-size: 14px;
  text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.5);
  line-height: 1.8;

  color: #fff;
  background-color: #e00;
  background-image: linear-gradient(#b00, #e00);

  border: none;
  border-radius: 4px;
  display: block;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  ${_buttons}
  background-color: #777;
  background-image: linear-gradient(#444, #777);

  &:active {
    background-image: linear-gradient(#777, #555);
    text-shadow: none;
  }
`;

const DeleteButton = styled.button`
  ${_buttons}
  background-color: #e00;
  background-image: linear-gradient(#900, #e00);

  position: absolute;
  bottom: 10px;

  &:active {
    background-image: linear-gradient(#a00, #d00);
    text-shadow: none;
  }
`;

const Cell = styled.div``;

export { BeerAdminWrapper, Input, DeleteButton, Button };
