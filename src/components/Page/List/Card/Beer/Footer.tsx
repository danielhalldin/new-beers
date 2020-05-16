import React, { FunctionComponent } from "react";
import styled from "styled-components/macro";
import { isMobile, isIOS } from "react-device-detect";
import { colors } from "components/global.styles";

import systembolagetImage from "images/systembolaget.svg";
import untappdImage from "images/untappd.png";

const Price = styled.div`
  display: block;
  position: absolute;
  bottom: 0;
  right: 5px;
`;

const Alcohol = styled.div`
  display: block;
  position: absolute;
  bottom: 0;
  left: 5px;
`;

const Ibu = styled.div`
  display: block;
  position: absolute;
  bottom: 0;
  left: 90px;
`;

const StyledFooter = styled.div`
  background-color: ${colors.dark};
  color: ${colors.textLight};
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  border-radius: 2px 2px 0 0;
  z-index: 2;
  margin: -1px;
`;

const _links = `
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: ${colors.textLight};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  position: absolute;
  display: block;
  bottom: 2px;
  width: 48px;
  height: 28px;
`;

const Systembolaget = styled.a`
  ${_links} 
  background-image: url(${systembolagetImage});
  background-color: #0a7b3e;
  right: 1px;
`;

const Untappd = styled.a`
  ${_links} 
  background-image: url(${untappdImage});
  background-color: #ffcd05;
  background-size: 34px;
  left: 1px;
`;

const AdminButton = styled.button`
  background-color: #777;
  background-image: linear-gradient(#444, #777);
  border: none;
  color: ${colors.textLight};
  font-family: "Hind";
  margin-top: 6px;
  font-weight: 700;
  font-size: 17px;
  padding: 0 8px;
  border-radius: 4px;
  line-height: 1.8;
  text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.5);
  height: 28px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:active {
    background-image: linear-gradient(${colors.dark}, #555);
    text-shadow: 0px 0px 0px rgba(0, 0, 0, 0.5);
  }
`;

interface AdminProps {
  onClick: any;
}
const Admin: FunctionComponent<AdminProps> = ({ onClick }) => {
  return <AdminButton onClick={(e) => onClick(e)}>Admin</AdminButton>;
};

interface FooterProps {
  back?: boolean;
  ibu?: string;
  abv?: string;
  price?: number;
  systembolagetUrl?: string;
  admin?: boolean;
  systembolagetArticleId?: number;
  untappdUrl?: string;
  untappdDeepLink?: string;
  toggleAdmin?: any;
}
const Footer: FunctionComponent<FooterProps> = ({
  back,
  ibu,
  abv,
  price,
  systembolagetUrl,
  admin,
  systembolagetArticleId,
  untappdUrl,
  untappdDeepLink,
  toggleAdmin,
}) => {
  if (back) {
    return (
      <StyledFooter>
        {!!systembolagetUrl && (
          <Systembolaget
            href={systembolagetUrl}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          />
        )}
        {admin && systembolagetArticleId && <Admin onClick={toggleAdmin} />}
        {!!untappdUrl && (
          <>
            {isMobile && isIOS ? (
              <Untappd
                href={untappdDeepLink}
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <Untappd
                href={untappdUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </>
        )}
      </StyledFooter>
    );
  } else {
    return (
      <StyledFooter>
        {!!ibu && <Ibu>{`Ibu ${ibu}`}</Ibu>}
        {!!abv && <Alcohol>{`${abv}%`}</Alcohol>}
        {!!price && <Price>{`${Math.round(price)}:-`}</Price>}
      </StyledFooter>
    );
  }
};

export default Footer;
