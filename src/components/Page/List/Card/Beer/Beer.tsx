import React, { FunctionComponent } from "react";

import Admin from "./Admin";
import Header from "./Header";
import Name from "./Name";
import Image from "./Image";
import Brewery from "./Brewery";
import { Cap, UserCap } from "./Cap";
import Style from "./Style";
import Description from "./Description";
import Footer from "./Footer";

import { Beer as BeerType } from "types/Beer";

import { BeerContainer, Front, Back, ContentWrapper } from "./styles";

interface BeerProps {
  data: BeerType;
  admin: boolean;
}

const Beer: FunctionComponent<BeerProps> = ({ data, admin }) => {
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
  } = data;

  const toggleAdmin = (e: any) => {
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
