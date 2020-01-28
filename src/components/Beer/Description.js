import React from "react";
import styled from "styled-components";

const StyledDescription = styled.div`
  position: absolute;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  padding: 0 5px;
  max-height: 202px;
`;

const Description = ({ description }) => {
  return (
    <StyledDescription>
      {description ? description : "Beskrivning saknas"}
    </StyledDescription>
  );
};

export default Description;
