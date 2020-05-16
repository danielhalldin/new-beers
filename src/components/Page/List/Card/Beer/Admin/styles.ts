import styled from "styled-components/macro";
import {
  colors,
  unfoldUpAnimation,
  foldDownAnimation,
} from "components/global.styles";

const AdminWrapper = styled.div<{ showAdmin: boolean }>`
  position: absolute;
  bottom: 37px;
  z-index: 1;
  width: 202px;
  text-align: center;
  padding: 15px 5px 0 5px;
  margin: 0 0 -1px -1px;
  background-color: ${colors.dark};
  color: ${colors.textLight};
  overflow: hidden;
  border-radius: 10px 10px 0 0;
  ${(props) => {
    return props.showAdmin ? unfoldUpAnimation : foldDownAnimation;
  }};
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

const Input = styled.input<{ ref: any }>`
  font-family: "Hind";
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  width: 100%;
  border-radius: 4px;
  border: 1px solid transparent;
  margin-top: 10px;
  box-shadow: inset 0px 1px 8px rgba(0, 0, 0, 0.2);
  transition: 0.18s ease-out;
  outline: none;
  box-sizing: border-box;
  &:hover,
  &:focus {
    box-shadow: inset 1px 2px 4px rgba(0, 0, 0, 0.01),
      0px 0px 10px rgba(255, 255, 255, 0.5);
  }
`;

const _buttons = `
  width: 100%;
  height: 28px;
  padding: 0 8px;
  margin: 10px 0;
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

const StatusWrapper = styled.div`
  height: 30px;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  font-weight: 700;
  font-size: 18px;
`;

export { AdminWrapper, Input, DeleteButton, Button, H2, StatusWrapper };
