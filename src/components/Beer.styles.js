import styled from "styled-components";
import { colors } from "./common.styles";
import systembolagetImage from "../images/systembolaget.png";
import untappdImage from "../images/untappd.png";
import capImage from "../images/cap.png";

const BeerContainer = styled.div`
  height: 310px;
  position: relative;
  vertical-align: top;
  cursor: pointer;
`;

const CardHeader = styled.div`
  background-color: ${colors.dark};
  color: ${colors.textLight};
  text-align: center;
  font-weight: bold;
  border-radius: 2px 2px 0 0;
  margin: -12px -11px 0px -11px;
  height: 24px;
  padding-top: 4px;
  width: 111%;
`;

const CardFooter = styled.div`
  font-weight: bold;
  position: absolute;
  bottom: 0;
  background-color: ${colors.dark};
  color: ${colors.textLight};
  text-align: center;
  font-weight: bold;
  height: 24px;
  width: 101%;
  margin: -10px -10px 0 -10px;
  height: ${props => (props.back ? "36px" : "24px")};
  margin: 0 0 -1px -11px;
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
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
`;

const _title = `
  font-weight: bold;
  display: block;
  text-align: center;
  line-height: 1em;
`;
const Name = styled.div`
  margin: 15px -9px 3px -9px;
  font-size: ${props => {
    if (props.length > 25) {
      return "17px";
    } else if (props.length > 15) {
      return "22px";
    }
    return "25px";
  }};
  ${_title};
`;

const Brewery = styled.div`
  margin: 0 -9px 3px -9px;
  font-size: 16px;
  font-size: ${props => {
    if (props.length > 25) {
      return "15px";
    }
    return "18px";
  }};
  ${_title};
`;

const Style = styled.div`
  position: absolute;
  bottom: 32px;
`;

const Bold = styled.div`
  font-weight: bold;
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
  height: 273px;
  overflow-y: scroll;
  overflow-x: auto;
`;

const _cap = `
  background-image: url("${capImage}");
  width: 38px;
  height: 38px;
  line-height: 40px;
  position: absolute;
  top: -12px;
  background-size: cover;
  font-weight: bold;
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
  position: absolute;
  display: block;
  background-size: cover;
`;

const Systembolaget = styled.a`
  ${_links} background-image: url(${systembolagetImage});
  bottom: 1px;
  right: 5px;
  width: 50px;
  height: 40px;
`;

const Untappd = styled.a`
  ${_links} background-image: url(${untappdImage});
  bottom: 4px;
  left: 5px;
  width: 25px;
  height: 25px;
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
  Ibu
};