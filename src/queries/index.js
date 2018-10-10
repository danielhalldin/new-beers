import gql from "graphql-tag";

const decoratedLatest = gql`
  query DecoratedLatest($stockType: String!) {
    untappdIsFriend
    untappdUser {
      name
      checkins
      avatar
    }
    decoratedLatest(size: 50, stockType: $stockType) {
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
        systembolagetId
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
