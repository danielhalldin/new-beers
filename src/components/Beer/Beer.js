import React from "react";
import beerBadgeDefaultImage from "../../images/badge-beer-default.png";
import { isMobile, isIOS } from "react-device-detect";
import BeerAdmin from "../BeerAdmin";

import {
  BeerContainer,
  CardHeader,
  CardFooter,
  ImageContainer,
  Image,
  Front,
  Back,
  Name,
  Brewery,
  Alcohol,
  OriginCountry,
  Category,
  Description,
  Cap,
  UserCap,
  CapLabel,
  Systembolaget,
  Untappd,
  Price,
  Ibu,
  Style,
  AdminButton
} from "./styles";

const Admin = ({ onClick }) => {
  return <AdminButton onClick={e => onClick(e)}>Admin</AdminButton>;
};

const Beer = ({ data, admin }) => {
  const [showAdmin, setShowAdmin] = React.useState(false);

  const {
    abv,
    brewery,
    country,
    name,
    price,
    rating,
    salesStartDate,
    checkinDate,
    style,
    systembolagetUrl,
    systembolagetArticleId,
    untappdUrl,
    untappdDeepLink,
    userRating,
    beerLabel,
    ibu,
    description,
    untappdId
  } = data;

  const truncateText = (text, limit) => {
    if (!text) {
      return "";
    }
    if (text.length < limit) {
      return text;
    }
    text = text.slice(0, limit).split(" ");
    text.pop();
    return text.join(" ") + "…";
  };

  const toggleAdmin = e => {
    e.stopPropagation();
    setShowAdmin(!showAdmin);
  };

  const _name = truncateText(name, 65);

  return (
    <BeerContainer>
      <Front>
        {!!rating && <Cap>{Number.parseFloat(rating).toPrecision(2)}</Cap>}
        {!!userRating && (
          <UserCap>
            {Number.parseFloat(userRating).toPrecision(2)}
            <CapLabel>you</CapLabel>
          </UserCap>
        )}

        <CardHeader>{checkinDate || salesStartDate}</CardHeader>
        <Name length={_name.length}>{_name}</Name>
        <ImageContainer>
          <Image src={beerLabel || beerBadgeDefaultImage} />
        </ImageContainer>
        <Brewery length={brewery.length}>{brewery}</Brewery>
        <Style>
          {!!country && <OriginCountry>{country}</OriginCountry>}
          {!!style && <Category>{style}</Category>}
        </Style>
        <CardFooter>
          {!!ibu && <Ibu>Ibu {ibu}</Ibu>}
          {!!abv && <Alcohol>{abv}%</Alcohol>}
          {!!price && <Price>{`${Math.round(price)}:-`}</Price>}
        </CardFooter>
      </Front>

      <Back>
        {!!rating && <Cap>{Number.parseFloat(rating).toPrecision(2)}</Cap>}
        {!!userRating && (
          <UserCap>
            {Number.parseFloat(userRating).toPrecision(2)}
            <CapLabel>you</CapLabel>
          </UserCap>
        )}{" "}
        <CardHeader>{checkinDate || salesStartDate}</CardHeader>
        <Name length={_name.length}>{_name}</Name>
        <div style={{ position: "relative" }}>
          <BeerAdmin
            systembolagetArticleId={systembolagetArticleId}
            untappdId={untappdId}
            showAdmin={showAdmin}
          />
          <Description>
            {description ? description : "Beskrivning saknas"}
          </Description>
        </div>
        <CardFooter back>
          {!!systembolagetUrl && (
            <Systembolaget
              href={systembolagetUrl}
              target="_blank"
              onClick={e => e.stopPropagation()}
            />
          )}
          {admin && systembolagetArticleId && <Admin onClick={toggleAdmin} />}
          {!!untappdUrl && (
            <>
              {isMobile && isIOS ? (
                <Untappd
                  href={untappdDeepLink}
                  onClick={e => e.stopPropagation()}
                />
              ) : (
                <Untappd
                  href={untappdUrl}
                  target="_blank"
                  onClick={e => e.stopPropagation()}
                />
              )}
            </>
          )}
        </CardFooter>
      </Back>
    </BeerContainer>
  );
};

export default Beer;
