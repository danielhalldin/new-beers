import React from "react";

import Admin from "./Admin";
import Header from "./Header";
import Name from "./Name";
import Image from "./Image";
import Brewery from "./Brewery";
import { Cap, UserCap } from "./Cap";
import Style from "./Style";
import Description from "./Description";
import Footer from "./Footer";

import { BeerContainer, Front, Back, ContentWrapper } from "./styles";

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
    systembolagetArticleId,
    systembolagetUrl,
    untappdUrl,
    untappdDeepLink,
    userRating,
    beerLabel,
    ibu,
    description,
    untappdId
  } = data;

  const toggleAdmin = e => {
    e.stopPropagation();
    setShowAdmin(!showAdmin);
  };

  const CommonElements = () => {
    return (
      <>
        <Cap rating={rating} />
        <UserCap rating={userRating} />
        <Header checkinDate={checkinDate} salesStartDate={salesStartDate} />
        <Name name={name} />
      </>
    );
  };

  return (
    <BeerContainer>
      <Front>
        <CommonElements />
        <Image src={beerLabel} />
        <Brewery name={brewery} />
        <Style style={style} country={country} />
        <Footer ibu={ibu} abv={abv} price={price} />
      </Front>

      <Back>
        <CommonElements />
        <ContentWrapper>
          <Admin
            systembolagetArticleId={systembolagetArticleId}
            untappdId={untappdId}
            showAdmin={showAdmin}
          />
          <Description description={description} />
        </ContentWrapper>
        <Footer
          back
          systembolagetUrl={systembolagetUrl}
          admin={admin}
          systembolagetArticleId={systembolagetArticleId}
          untappdUrl={untappdUrl}
          untappdDeepLink={untappdDeepLink}
          toggleAdmin={toggleAdmin}
        />
      </Back>
    </BeerContainer>
  );
};

export default Beer;
