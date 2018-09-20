import styled from "styled-components";

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
  transform: ${props => "rotateY(" + (props.flipped ? 180 : 0) + "deg)"};
`;

const BeerContainer = styled.div`
  height: 310px;
  position: relative;
  vertical-align: top;
`;

const Date = styled.div`
  background-color: #333;
  color: #ddd;
  text-align: center;
  font-weight: bold;
  border-radius: 7px 7px 0 0;
  margin: -10px -10px 5px -10px;
  height: 20px;
  padding-top: 4px;
`;

const ImageContainer = styled.div`
  text-align: center;
  margin: 0 0 5px 0;
  padding: 10px;
  min-height: 120px;
`;
const Image = styled.img`
  height: 120px;
  max-width: 150px;
`;
const Right = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 10px;
`;
const Left = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 10px;
`;
const Front = styled.div`
  z-index: 2;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  width: 100%;
  height: 330px;
  background-color: #ffe;
  border-radius: 7px;
  box-shadow: 20px 20px 15px rgba(0, 0, 0, 0.5);
  padding: 10px;
`;

const Back = styled.div`
  z-index: -1;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  width: 100%;
  height: 330px;
  background-color: #ffe;
  border-radius: 7px;
  box-shadow: 20px 20px 15px rgba(0, 0, 0, 0.5);
  padding: 10px;
`;

const Banner = styled.div`
  margin: 0 -9px 3px -9px;
  padding: 1px 0 3px;
`;

const Name = styled.div`
  font-size: 22px;
  font-weight: bold;
  display: block;
  text-align: center;
  line-height: 1em;
  padding: 0 5px;
`;

const Alcohol = styled.div`
  font-style: italic;
  display: block;
`;

const Origin = styled.div`
  font-style: italic;
  display: block;
`;

const OriginCountry = styled.div`
  font-style: italic;
  display: block;
  max-width: 140px;
  overflow: hidden;
`;

const Category = styled.div`
  font-style: italic;
  display: block;
  max-width: 140px;
  overflow: hidden;
`;

const Price = styled.div`
  font-weight: bold;
  display: block;
  margin-top: 2px;
`;

const ProductId = styled.div`
  font-weight: bold;
  display: block;
  margin-top: 2px;
`;

const Description = styled.div`
  height: 310px;
  overflow-y: auto;
  overflow-x: hidden;
`;

const Cap = styled.div`
  background-image: url("./images/cap.png");
  width: 40px;
  height: 40px;
  line-height: 40px;
  position: absolute;
  top: -10px;
  left: -10px;
  background-size: cover;
  font-weight: bold;
  text-align: center;
`;

export {
  FlipContainer,
  Flipper,
  BeerContainer,
  Date,
  ImageContainer,
  Image,
  Right,
  Left,
  Front,
  Back,
  Banner,
  Name,
  Alcohol,
  Origin,
  OriginCountry,
  Category,
  Price,
  ProductId,
  Description,
  Cap
};
