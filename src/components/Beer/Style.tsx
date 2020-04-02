import React, { FunctionComponent } from "react";
import styled from "styled-components/macro";

const StyledStyle = styled.div`
  padding: 0 5px;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
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

const Style: FunctionComponent<{ style: string; country: string }> = ({
  style,
  country
}) => {
  return (
    <StyledStyle>
      {!!country && <OriginCountry>{country}</OriginCountry>}
      {!!style && <Category>{style}</Category>}
    </StyledStyle>
  );
};

export default Style;
