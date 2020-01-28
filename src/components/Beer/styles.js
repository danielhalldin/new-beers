import styled from "styled-components";
import { colors } from "../global.styles";
import backgroundImage from "../../images/beer-background.jpg";

const BeerContainer = styled.div`
  height: 310px;
  position: relative;
  vertical-align: top;
  cursor: pointer;
  transform-style: preserve-3d;
`;

const CardFooter = styled.div`
  font-weight: 700;
  font-size: 17px;
  background-color: ${colors.dark};
  color: ${colors.textLight};
  text-align: center;
`;

const _face = `
  background-image: url("${backgroundImage}");
  background-size: contain;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  width: 100%;
  height: 330px;
  background-color: #ffe;
  border-radius: 7px;
  box-shadow: 20px 20px 15px rgba(0, 0, 0, 0.5);
  border: 5px solid ${colors.dark};
  transform-style: preserve-3d;
  display: grid;
`;
const Front = styled.div`
  ${_face}
  z-index: 2;
  grid-template-rows: 22px 65px auto 40px 40px 26px;
`;
const Back = styled.div`
  ${_face}
  z-index: 1;
  transform: rotateY(180deg);
  grid-template-rows: 22px 70px auto 36px;
`;

const Bold = styled.div`
  font-weight: 700;
  display: block;
  margin-top: 2px;
`;

const ContentWrapper = styled.div`
  position: "relative";
`;

const Description = styled.div`
  position: absolute;
  overflow: auto;
  padding: 0 5px;
  height: 100%;
`;

export {
  BeerContainer,
  CardFooter,
  Front,
  Back,
  Bold,
  ContentWrapper,
  Description
};
