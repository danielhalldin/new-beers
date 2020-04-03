import React, { FunctionComponent } from "react";
import styled from "styled-components/macro";

import beerBadgeDefaultImage from "../../images/badge-beer-default.png";

const ImageContainer = styled.div`
  text-align: center;
  margin: auto;
`;

const StyledImage = styled.img`
  height: 120px;
  max-width: 150px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border: 5px solid white;
  border-radius: 5px;
`;

const Image: FunctionComponent<{ src: string }> = ({ src }) => {
  return (
    <ImageContainer>
      <StyledImage src={src || beerBadgeDefaultImage} />
    </ImageContainer>
  );
};

export default Image;