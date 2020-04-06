import React, { FunctionComponent } from "react";
import styled from "styled-components/macro";
import Img from "react-image";

import beerBadgeDefaultVideo from "../../images/beer.mp4";
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
  background-color: white;
`;

const StyledVideo = styled.video`
  height: 120px;
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
  if (!src || src.includes("badge-beer-default.png")) {
    return (
      <ImageContainer>
        <StyledVideo
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
        >
          <source src={beerBadgeDefaultVideo} type="video/mp4" />
        </StyledVideo>
      </ImageContainer>
    );
  }
  return (
    <ImageContainer>
      <StyledImage alt="Beer" src={src} loader={<Loader />} />
    </ImageContainer>
  );
};

export default Image;
