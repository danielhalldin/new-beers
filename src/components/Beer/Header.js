import React from "react";
import styled from "styled-components";
import { colors } from "../global.styles";

const StyledHeader = styled.div`
  background-color: ${colors.dark};
  color: ${colors.textLight};
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  border-radius: 2px 2px 0 0;
`;

const Header = ({ checkinDate, salesStartDate }) => {
  return <StyledHeader>{checkinDate || salesStartDate}</StyledHeader>;
};

export default Header;
