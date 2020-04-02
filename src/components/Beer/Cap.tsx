import React, { FunctionComponent } from "react";
import styled from "styled-components/macro";

import capImage from "../../images/cap.png";

const _cap = `
  background-image: url("${capImage}");
  width: 38px;
  height: 38px;
  line-height: 42px;
  position: absolute;
  top: -12px;
  background-size: cover;
  font-weight: 700;
  text-align: center;
`;

const StyledCap = styled.div`
  ${_cap} left: -12px;
`;

const StyledUserCap = styled.div`
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

export const Cap: FunctionComponent<{ rating: string }> = ({ rating }) => {
  if (rating) {
    return <StyledCap>{Number.parseFloat(rating).toPrecision(2)}</StyledCap>;
  } else {
    return null;
  }
};

export const UserCap: FunctionComponent<{ rating: string }> = ({ rating }) => {
  if (rating) {
    return (
      <StyledUserCap>
        {Number.parseFloat(rating).toPrecision(2)}
        <CapLabel>you</CapLabel>
      </StyledUserCap>
    );
  } else {
    return null;
  }
};
