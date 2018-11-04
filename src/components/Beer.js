import React, { Component } from "react";
import beerBadgeDefaultImage from "../images/badge-beer-default.png";
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
  Style
} from "./Beer.styles";

class Beer extends Component {
  render() {
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
      untappdUrl,
      userRating,
      beerLabel,
      ibu,
      description,
      untappdId
    } = this.props.data;

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
          <Name length={name.length}>{name}</Name>
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
          <Description>
            <Name length={name.length}>{name}</Name>
            {description ? description : "Beskrivning saknas"}
          </Description>
          <CardFooter back>
            {!!systembolagetUrl && (
              <Systembolaget
                href={systembolagetUrl}
                target="_blank"
                onClick={e => e.stopPropagation()}
              />
            )}
            {!!untappdUrl && (
              <>
                <Untappd
                  href={untappdUrl}
                  target="_blank"
                  onClick={e => e.stopPropagation()}
                />
                <a href={`untappd://beer/${untappdId}`}>test</a>
              </>
            )}
          </CardFooter>
        </Back>
      </BeerContainer>
    );
  }
}

export default Beer;
