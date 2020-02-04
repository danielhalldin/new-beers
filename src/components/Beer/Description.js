import React from "react";
import styled from "styled-components/macro";

const StyledDescription = styled.div`
  position: absolute;
  overflow-y: scroll;
  padding: 0 5px;
  height: 202px;
`;

const Description = ({ description }) => {
  return (
    <StyledDescription>
      {description ? description : "Beskrivning saknas"}
    </StyledDescription>
  );
};

export default Description;
