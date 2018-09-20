import React, { Component } from "react";
import {
  BeerContainer,
  Date,
  ImageContainer,
  Image,
  Right,
  Left,
  Front,
  Back,
  Banner,
  Name,
  Alcohol,
  Origin,
  OriginCountry,
  Category,
  Price,
  ProductId,
  Description,
  Cap
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
          {rating && <Cap>{Number.parseFloat(rating).toPrecision(2)}</Cap>}
          {salesStartDate && <Date>{salesStartDate}</Date>}
          <ImageContainer>
            <Image src={beerLabel || "./images/badge-beer-default.png"} />
          </ImageContainer>

          <Banner>
            <Name>{name}</Name>
          </Banner>

          <Right>
            {!!ibu && <Alcohol>Ibu {ibu}</Alcohol>}
            {abv && <Alcohol>{abv}%</Alcohol>}
            {price && <Price>{`${Math.round(price)}:-`}</Price>}
          </Right>
          <Left>
            <Origin />
            {country && <OriginCountry>{country}</OriginCountry>}
            {type && <Category>{type}</Category>}
            {untappdId && <ProductId>{untappdId}</ProductId>}
          </Left>
        </Front>
        <Back>
          {rating && <Cap>{Number.parseFloat(rating).toPrecision(2)}</Cap>}
          {salesStartDate && <Date>{salesStartDate}</Date>}
          <Description>
            <Name>{name}</Name>
            {description}
          </Description>
        </Back>
      </BeerContainer>
    );
  }
}

export default Beer;
