import styled from "styled-components";

const colors = {
  dark: "#333",
  textLight: "#ddd",
  textDark: "#444"
};

const Loader = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  padding-top: 50px;
  font-size: 22px;
  font-weight: bold;
`;

const Header = styled.div`
  font-family: GillSans-UltraBold, Impact, "Arial Black", sans-serif;
  text-decoration: italic;
  font-size: 30px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  color: ${colors.textLight};
  background-color: ${colors.dark};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Footer = styled.div`
  margin-top: 30px;
  padding: 10px;
  background-color: ${colors.dark};
  text-align: center;
`;

const HeaderCell = styled.div`
  width: ${props => props.width};
  margin: auto 0;
  text-align: ${props => props.textAlign};
`;
const HeaderUserData = styled.div`
  font-family: Calibri, Helvetica;
  font-size: 15px;
  line-height: 18px;
  display: inline-block;
  text-align: left;
  vertical-align: top;
  margin-top: 7px;
  font-weight: Bold;
`;

const Avatar = styled.img`
  height: 40px;
  border-radius: 25px;
  border: 0 solid ${colors.textDark};
  display: inline-block;
  margin: 4px 10px 0 4px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const PbUntappd = styled.img`
  height: 30px;
  display: inline-block;
  margin: 0 5px;
`;

const FlipContainer = styled.div`
  margin: 30px;
  width: 210px;
  height: 330px;
  transform: ${props => "rotate(" + props.data.rotate + "deg)"};
  perspective: 1000px;
`;

const Flipper = styled.div`
  transition: 0.6s;
  transform-style: preserve-3d;
  position: relative;
  transform: ${props =>
    "rotateY(" + (props.flipped ? 180 : 0) + "deg) translateX(-15px)"};
`;

const BeersContainer = styled.div`
  color: ${colors.textDark};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

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
  background-image: url("./images/cap.png");
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
  ${_links} background-image: url("./images/systembolaget.png");
  bottom: 1px;
  right: 5px;
  width: 50px;
  height: 40px;
`;

const Untappd = styled.a`
  ${_links} background-image: url("./images/untappd.png");
  bottom: 4px;
  left: 5px;
  width: 25px;
  height: 25px;
`;

export {
  Loader,
  Header,
  Footer,
  HeaderCell,
  HeaderUserData,
  Avatar,
  PbUntappd,
  Style,
  FlipContainer,
  Flipper,
  BeersContainer,
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
