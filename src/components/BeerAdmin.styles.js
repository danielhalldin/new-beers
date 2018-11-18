import styled from "styled-components";

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
  width: 100%;
  bottom: 10px;
  width: 210px;
  background-color: #f00;
  color: #fff;
  font-weight: bold;
  height: 30px;
  border-radius: 15px;
`;

const Cell = styled.div``;

export { BeerAdminWrapper, Input, Row, Cell, DeleteButton };
