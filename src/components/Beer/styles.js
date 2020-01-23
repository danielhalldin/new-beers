import styled from "styled-components";
import { colors } from "../global.styles";
import systembolagetImage from "../../images/systembolaget.png";
import untappdImage from "../../images/untappd.png";
import capImage from "../../images/cap.png";
import backgroundImage from "../../images/beer-background.jpg";

const BeerContainer = styled.div`
  height: 310px;
  position: relative;
  vertical-align: top;
  cursor: pointer;
  transform-style: preserve-3d;
`;

const CardHeader = styled.div`
  background-color: ${colors.dark};
  color: ${colors.textLight};
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  border-radius: 2px 2px 0 0;
`;

const CardFooter = styled.div`
  font-weight: 700;
  font-size: 17px;
  background-color: ${colors.dark};
  color: ${colors.textLight};
  text-align: center;
`;

const Price = styled.div`
  display: block;
  position: absolute;
  bottom: 0;
  right: 5px;
`;

const Alcohol = styled.div`
  display: block;
  position: absolute;
  bottom: 0;
  left: 5px;
`;

const Ibu = styled.div`
  display: block;
  position: absolute;
  bottom: 0;
  left: 90px;
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
  ${_face} z-index: 2;
  grid-template-rows: 22px 65px auto 40px 40px 26px;
`;
const Back = styled.div`
  ${_face} z-index: -1;
  transform: rotateY(180deg);
  grid-template-rows: 22px 70px auto 36px;
`;

const ImageContainer = styled.div`
  text-align: center;
  margin: auto;
`;

const Image = styled.img`
  height: 120px;
  max-width: 150px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border: 5px solid white;
  border-radius: 5px;
`;

const _title = `
  text-align: center;
  line-height: 1em;
  font-family: "Hind", cursive;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
`;
const Name = styled.div`
  margin: auto;
  font-weight: 700;
  padding: 0 5px;
  font-size: ${props => {
    if (props.length > 30) {
      return "17px";
    } else if (props.length > 25) {
      return "18px";
    } else if (props.length > 20) {
      return "21px";
    } else if (props.length > 15) {
      return "24px";
    }
    return "27px";
  }};
  ${_title};
`;

const Brewery = styled.div`
  padding: 0 5px;
  font-weight: 500;
  font-size: 18px;
  font-size: ${props => {
    if (props.length > 25) {
      return "17px";
    }
    return "20px";
  }};
  ${_title};
  overflow: hidden;
`;

const Style = styled.div`
  padding: 0 5px;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
`;

const Bold = styled.div`
  font-weight: 700;
  display: block;
  margin-top: 2px;
`;

const Origin = styled.div`
  font-style: italic;
  display: block;
`;

const OriginCountry = styled.div`
  font-style: italic;
  display: block;
  overflow: hidden;
`;

const Category = styled.div`
  font-style: italic;
  display: block;
  overflow: hidden;
`;

const Description = styled.div`
  overflow: auto;
  padding: 0 5px;
`;

const _cap = `
  background-image: url("${capImage}");
  width: 38px;
  height: 38px;
  line-height: 42px;
  position: absolute;
  top: -12px;
  background-size: cover;
  font-weight: 700;
  text-align: center;
`;

const Cap = styled.div`
  ${_cap} left: -12px;
`;

const UserCap = styled.div`
  ${_cap} right: -12px;
  font-size: 15px;
  line-height: 46px;
`;

const CapLabel = styled.div`
  font-size: 9px;
  position: absolute;
  top: -11px;
  right: 12px;
`;

const _links = `
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: ${colors.textLight};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  position: absolute;
  display: block;
  bottom: 2px;
  width: 48px;
  height: 28px;
`;

const Systembolaget = styled.a`
  ${_links} 
  background-image: url(${systembolagetImage});
  background-color: #0a7b3e;
  right: 1px;
`;

const Untappd = styled.a`
  ${_links} 
  background-image: url(${untappdImage});
  background-color: #ffcd05;
  background-size: 34px;
  left: 1px;
`;

const AdminButton = styled.button`
  background-color: #777;
  background-image: linear-gradient(#444, #777);
  border: none;
  color: ${colors.textLight};
  font-family: "Hind";
  margin-top: 6px;
  font-weight: 700;
  font-size: 17px;
  padding: 0 8px;
  border-radius: 4px;
  line-height: 1.8;
  text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.5);
  height: 28px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:active {
    background-image: linear-gradient(${colors.dark}, #555);
    text-shadow: 0px 0px 0px rgba(0, 0, 0, 0.5);
  }
`;

export {
  Style,
  BeerContainer,
  CardHeader,
  CardFooter,
  ImageContainer,
  Image,
  Front,
  Back,
  Name,
  Brewery,
  Alcohol,
  Origin,
  OriginCountry,
  Category,
  Bold,
  Description,
  Cap,
  UserCap,
  CapLabel,
  Systembolaget,
  Untappd,
  Price,
  Ibu,
  AdminButton
};
