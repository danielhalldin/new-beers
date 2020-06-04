import React, { FunctionComponent } from "react";
import styled from "styled-components/macro";
import { Img } from "react-image";

import beerBadgeDefaultImage from "images/beer-animated.gif";
import spinner from "images/spinner.svg";

const ImageContainer = styled.div`
  text-align: center;
  margin: auto;
`;

const StyledImage = styled(Img)`
  max-height: 120px;
  max-width: 150px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border: 5px solid white;
  border-radius: 5px;
  background-color: white;
`;

const Loader = styled.div`
  height: 120px;
  width: 120px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border: 5px solid white;
  border-radius: 5px;
  background-image: url(${spinner});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: white;
`;

const Image: FunctionComponent<{ src: string }> = ({ src }) => {
  let imageSrc = src;
  if (!src || src.includes("badge-beer-default.png")) {
    imageSrc = beerBadgeDefaultImage;
  }
  return (
    <ImageContainer>
      <StyledImage alt="Beer" src={imageSrc} loader={<Loader />} />
    </ImageContainer>
  );
};

export default Image;
