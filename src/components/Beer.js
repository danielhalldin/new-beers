import React, { Component } from "react";
import beerBadgeDefaultImage from "../images/badge-beer-default.png";
import { isMobile, isIOS } from "react-device-detect";
import BeerAdmin from "./BeerAdmin";

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
} from "./Beer.styles";
import { injectGlobal } from "styled-components";

const Admin = ({ onClick }) => {
  return <AdminButton onClick={e => onClick(e)}>Admin</AdminButton>;
};

class Beer extends Component {
  state = {
    showAdmin: false
  };

  truncateText = (text, limit) => {
    if (text.length < limit) {
      return text;
    }
    text = text.slice(0, limit).split(" ");
    text.pop();
    return text.join(" ") + "…";
  };

  toggleAdmin = e => {
    e.stopPropagation();
    this.setState({ showAdmin: !this.state.showAdmin });
  };

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
      systembolagetArticleId,
      untappdUrl,
      userRating,
      beerLabel,
      ibu,
      description,
      untappdId
    } = this.props.data;

    const _name = this.truncateText(name, 65);

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
          {this.state.showAdmin ? (
            <BeerAdmin
              systembolagetArticleId={systembolagetArticleId}
              untappdId={untappdId}
            />
          ) : (
            <Description>
              <Name length={_name.length}>{_name}</Name>
              {description ? description : "Beskrivning saknas"}
            </Description>
          )}
          <CardFooter back>
            {!!systembolagetUrl && (
              <>
                {isMobile && isIOS ? (
                  <Systembolaget
                    href={`systembolaget://artikel/${systembolagetArticleId}`}
                    onClick={e => e.stopPropagation()}
                  />
                ) : (
                  <Systembolaget
                    href={systembolagetUrl}
                    target="_blank"
                    onClick={e => e.stopPropagation()}
                  />
                )}
              </>
            )}
            {this.props.admin && systembolagetArticleId && (
              <Admin onClick={this.toggleAdmin} />
            )}
            {!!untappdUrl && (
              <>
                {isMobile && isIOS ? (
                  <Untappd
                    href={`untappd://beer/${untappdId}`}
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
  }
}

export default Beer;
