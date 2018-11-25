import styled from "styled-components";
import { colors } from "./common.styles";
import systembolagetImage from "../images/systembolaget.png";
import untappdImage from "../images/untappd.png";
import capImage from "../images/cap.png";
import backgroundImage from "../images/beer-background.jpg";

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
  margin: -12px -11px 0px -11px;
  height: 24px;
  width: 111%;
`;

const CardFooter = styled.div`
  font-weight: 700;
  font-size: 17px;
  position: absolute;
  bottom: 0;
  background-color: ${colors.dark};
  color: ${colors.textLight};
  text-align: center;
  height: 24px;
  width: 101%;
  height: ${props => (props.back ? "36px" : "24px")};
  margin: 0 0 -3px -11px;
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
  padding: 10px;
  border: 5px solid ${colors.dark};
  transform-style: preserve-3d;
`;
const Front = styled.div`
  ${_face} z-index: 2;
`;
const Back = styled.div`
  ${_face} z-index: -1;
  transform: rotateY(180deg);
`;

const ImageContainer = styled.div`
  text-align: center;
  padding: 10px;
  min-height: 120px;
`;

const Image = styled.img`
  height: 120px;
  max-width: 150px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border: 5px solid white;
  border-radius: 5px;
`;

const _title = `
  display: block;
  text-align: center;
  line-height: 1em;
  font-family: "Hind", cursive;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
`;
const Name = styled.div`
  margin: 15px -9px 3px -9px;
  font-weight: 700;
  font-size: ${props => {
    if (props.length > 25) {
      return "19px";
    } else if (props.length > 15) {
      return "24px";
    }
    return "27px";
  }};
  ${_title};
`;

const Brewery = styled.div`
  margin: 0 -9px 3px -9px;
  font-weight: 500;
  font-size: 18px;
  font-size: ${props => {
    if (props.length > 25) {
      return "17px";
    }
    return "20px";
  }};
  ${_title};
`;

const Style = styled.div`
  position: absolute;
  bottom: 32px;
  width: 210px;
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
  height: 289px;
  overflow-y: scroll;
  overflow-x: auto;
  margin: 0 -10px;
  padding: 0px 10px;
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
  color: ${colors.textLight};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  position: absolute;
  display: block;
  bottom: 3px;
  width: 48px;
  height: 29px;
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
  background-size: 43px;
  left: 1px;
`;

const AdminButton = styled.button`
  background-color: #777;
  background-image: linear-gradient(#444, #777);
  border: none;
  color: ${colors.textLight};
  font-family: "Hind";
  margin-top: 4px;
  font-weight: 700;
  font-size: 17px;
  padding: 0 8px;
  border-radius: 4px;
  line-height: 1.8;
  text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.5);
  height: 29px;
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
