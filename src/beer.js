import React, { Component } from "react";
import {
  BeerContainer,
  Date,
  ImageContainer,
  Image,
  Front,
  Back,
  Name,
  Brewery,
  Alcohol,
  Origin,
  OriginCountry,
  Category,
  Bold,
  Description,
  Cap,
  UserCap,
  Systembolaget,
  Untappd,
  Price,
  Ibu
} from "./styles";

class Beer extends Component {
  render() {
    const {
      abv,
      brewery,
      country,
      id,
      name,
      price,
      rating,
      salesStartDate,
      stockType,
      style,
      systembolagetUrl,
      type,
      untappdId,
      untappdUrl,
      userRating,
      beerLabel,
      ibu,
      description
    } = this.props.data;

    return (
      <BeerContainer>
        <Front>
          {!!rating && <Cap>{Number.parseFloat(rating).toPrecision(2)}</Cap>}
          {!!userRating && (
            <UserCap>{Number.parseFloat(userRating).toPrecision(2)}</UserCap>
          )}

          {!!salesStartDate && <Date>{salesStartDate}</Date>}
          <Name>{name}</Name>
          <ImageContainer>
            <Image src={beerLabel || "./images/badge-beer-default.png"} />
          </ImageContainer>
          <Brewery>{brewery}</Brewery>
          <div>
            {!!country && <OriginCountry>{country}</OriginCountry>}
            {!!type && <Category>{type}</Category>}
          </div>
          {!!ibu && <Ibu>Ibu {ibu}</Ibu>}
          {!!abv && <Alcohol>{abv}%</Alcohol>}
          {!!price && <Price>{`${Math.round(price)}:-`}</Price>}
        </Front>

        <Back>
          {!!rating && <Cap>{Number.parseFloat(rating).toPrecision(2)}</Cap>}
          {!!userRating && (
            <UserCap>{Number.parseFloat(userRating).toPrecision(2)}</UserCap>
          )}{" "}
          {!!salesStartDate && <Date>{salesStartDate}</Date>}
          <Description>
            <Name>{name}</Name>
            {description ? description : "Beskrivning saknas"}
          </Description>
          {!!systembolagetUrl && (
            <Systembolaget
              href={systembolagetUrl}
              target="_blank"
              onClick={e => e.stopPropagation()}
            />
          )}
          {!!untappdUrl && (
            <Untappd
              href={untappdUrl}
              target="_blank"
              onClick={e => e.stopPropagation()}
            />
          )}
        </Back>
      </BeerContainer>
    );
  }
}

export default Beer;
