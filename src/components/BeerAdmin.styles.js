import styled from "styled-components";
import { colors } from "./common.styles";

const BeerAdminWrapper = styled.div`
  width: 100%;
  height: 269px;
  z-index: 10;
  margin: 0 -10px;
  padding: 10px;
  position: relative;
`;

const Input = styled.input``;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const DeleteButton = styled.button`
  position: absolute;
  bottom: 10px;
  width: 210px;
  margin-top: 6px;
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

  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:active {
    background-image: linear-gradient(#a00, #d00);
    text-shadow: none;
  }
`;

const Cell = styled.div``;

export { BeerAdminWrapper, Input, Row, Cell, DeleteButton };
