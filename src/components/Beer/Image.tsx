import React, { FunctionComponent } from "react";
import styled from "styled-components/macro";
import Img from "react-image";

import beerBadgeDefaultImage from "../../images/beer-default.png";
import spinner from "../../images/spinner.svg";

const ImageContainer = styled.div`
  text-align: center;
  margin: auto;
`;

const StyledImage = styled(Img)`
  height: 120px;
  max-width: 150px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border: 5px solid white;
  border-radius: 5px;
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
  return (
    <ImageContainer>
      <StyledImage src={src || beerBadgeDefaultImage} loader={<Loader />} />
    </ImageContainer>
  );
};

export default Image;
