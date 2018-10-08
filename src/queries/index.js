import gql from "graphql-tag";

const decoratedLatest = gql`
  {
    untappdIsFriend
    untappdUser {
      name
      checkins
      avatar
    }
    decoratedLatest(size: 75, stockType: "Små partier") {
      name
      beers {
        id
        name
        beerLabel
        brewery
        userRating
        rating
        price
        abv
        salesStartDate
        untappdId
        untappdUrl
        type
        style
        country
        stockType
        systembolagetUrl
        ibu
        description
      }
    }
  }
`;

const untappdUser = gql`
  {
    untappdUser {
      name
      checkins
      avatar
    }
  }
`;

export { decoratedLatest, untappdUser };
