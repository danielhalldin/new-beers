import styled from "styled-components";
import { colors } from "./common.styles";

const BeerAdminWrapper = styled.div`
  width: 100%;
  height: 280px;
  position: relative;
  text-align: center;
`;

const H2 = styled.h2`
  display: block;
  text-align: center;
  line-height: 1em;
  font-family: "Hind", cursive;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  margin: 15px -9px 3px -9px;
  font-weight: 700;
  font-size: 20px;
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
  height: 28px;
  padding: 0 8px;
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

  position: absolute;
  bottom: 10px;

  &:active {
    background-image: linear-gradient(#900, #d00);
    text-shadow: none;
  }
`;

export { BeerAdminWrapper, Input, DeleteButton, Button, H2 };
