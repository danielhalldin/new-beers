import gql from "graphql-tag";

const beerFragment = gql`
  {
    id
    name
    beerLabel
    brewery
    userRating
    rating
    price
    abv
    salesStartDate
    checkinDate
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
`;
const decoratedLatest = gql`
  query DecoratedLatest($stockType: String!) {
    decoratedLatest(size: 40, stockType: $stockType) {
      name
      beers ${beerFragment}
    }
  }
`;

const untappdUser = gql`
  {
    untappdUser {
      name
      totalBeers
      avatar
      checkins ${beerFragment}
    }
  }
`;

export { decoratedLatest, untappdUser };
