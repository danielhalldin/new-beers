import React from "react";
import styled from "styled-components";

const StyledStyle = styled.div`
  padding: 0 5px;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
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

const Style = ({ style, country }) => {
  return (
    <StyledStyle>
      {!!country && <OriginCountry>{country}</OriginCountry>}
      {!!style && <Category>{style}</Category>}
    </StyledStyle>
  );
};

export default Style;
